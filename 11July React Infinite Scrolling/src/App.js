import { useState } from 'react';
import './App.css';


function App() {

  const [data, setData] = useState({
    name : Array.from({ length : 10 })
  });

  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setTimeout(() => {
      setData({
        name : data.name.concat(Array.from({length : 10}))
      })
      setLoading(false);
    }, 1300)
  };

const scroll = (e) => {
  if (e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50) {
    setLoading(true);
    fetchData();
  }
};

  return (

    <div className="App">

<h1 className="qw">Infinite Scrolling</h1>
      <div id="mainDiv" onScroll={(e) => scroll(e)}>

      {data.name.map((e, i) => (<h1>{`Tarun Kumawat-${i+1}`}</h1>))}
      {loading ? <h1>Loading...</h1> : null}

      </div>
    </div>
  )
};

export default App;
