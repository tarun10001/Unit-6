import React, { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Button,
    Box,
    Input,
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItemOption,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, sort } from '../Redux/action';


export const Home = () => {

    const [ searchValue, setSearchValue ] = useState('');
    const dispatch = useDispatch();

    //Alert Msg & Loading Button
    const [ showAlert, setShowAlert ] = useState(false);
    const [ alertMessage, setAlertMessage ] = useState('');
    const [ alertType, setAlertType ] = useState('');

    const data = useSelector(store => store.storeData);

    const getCountry = async () => {
        const response = await fetch(
            "https://taruncountryserver.herokuapp.com/data"
        );
        const data = await response.json();
        dispatch(getData(data));
    };


    const handleDelete = (e) => {
        // console.log('e', e.target.value);
        setShowAlert(false);

        let id = e.target.value;
        // let id = 512;
        fetch(`https://taruncountryserver.herokuapp.com/data/${id}`, {
            method: "DELETE",
        }).then((res) => {
                console.log(res.status);
                dispatch(getData(data));
                getCountry();
                setAlertType('success');
                setAlertMessage(`Deleted successfully`);
                setShowAlert(true);
            }
        )
        // });
    };

    useEffect(() => {
        getCountry();
    }, []);


    return (
        <>
            
            <Box w='65%' m='20px auto'>
                <Flex w='80%' m='10px auto'>
                    <Input w='60%' mr='10px' type='text' placeholder='Country Name' onChange={ (e) => setSearchValue(e.target.value) } />
                    <Menu closeOnSelect={ true }>
                        <MenuButton as={ Button } ml='10px' colorScheme='blue' w='40%'>
                            Sort by Populations
                        </MenuButton>
                        <MenuList minWidth='240px'>
                            <MenuOptionGroup defaultValue='asc' title='Order' type='radio' onChange={ (e) => { dispatch(sort(e)); } }>
                                <MenuItemOption value='asc'>Ascending</MenuItemOption>
                                <MenuItemOption value='desc'>Descending</MenuItemOption>
                            </MenuOptionGroup>
                        </MenuList>
                    </Menu>
                </Flex>
                <TableContainer >
                    <Table variant='simple' colorScheme='teal'>
                        <Thead>
                            <Tr>
                                <Th fontSize='md'>Id</Th>
                                <Th fontSize='md'>Country</Th>
                                <Th fontSize='md'>City</Th>
                                <Th fontSize='md'>Population</Th>
                                <Th fontSize='md'>Delete</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            { data.filter(item => item.country.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
                                <Tr key={ index }>
                                    <Td >{ index + 1 }</Td>
                                    <Td>{ item.country }</Td>
                                    <Td>{ item.city }</Td>
                                    <Td isNumeric>{ item.population }</Td>
                                    <Td><Button value={ item.id } onClick={ handleDelete } >Delete</Button></Td>
                                    
                                </Tr>
                            )) }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </>

    );
}