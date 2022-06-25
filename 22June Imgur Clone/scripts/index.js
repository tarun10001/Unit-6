function clickedImages(elem,grand){
    let divImg=document.createElement('div')

    let p=document.createElement('p')
    p.setAttribute("id","name")
    p.innerText=`${elem.user.name} - ${elem.alt_description}`
    console.log(p)

    divImg.setAttribute("id","image")
    let images=document.createElement('img')
    images.src=elem.urls.small

    let div=document.createElement('div')


    let likes=document.createElement('p')
    likes.setAttribute("id","name1")
    likes.innerText=`Current-Likes : ${elem.likes}`

    let likes1=document.createElement('p')
    likes1.setAttribute("id","name1")
    likes1.innerText=`Total-Likes : ${elem.user.total_likes}`

    let link1=document.createElement('p')
    link1.setAttribute("id","name1")
    link1.innerText=`Download-link : ${elem.links.download}`

    
   divImg.append(p,images)
   div.append(likes,likes1,link1)
   grand.append(divImg,div)

}

export {clickedImages}