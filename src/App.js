import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Search from './components/Search/Search';

function App() {
  const [data, setData] = useState([]);
  const [ showFav, setShowFav ] = useState(0);

  let searchAPI = async (params) => {
    const type = params.type === 'all' ? '' : `&type=${params.type}`;
    const title = params.title;
    const url = `http://www.omdbapi.com/?t=${title}${type}&apikey=34556779`;
    const result = await axios(
      url,
    );
    console.log('data-->', result)
    if(result.data.Error){
      alert('Movie Not found')
    }else {
      setData([result.data]);
    }
  }

  let array = []

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  let showFavChanger = async (param) => { 
    if (param === 1) {
     if(localStorage.getItem('favourite')) {
      let favList = localStorage.getItem('favourite').split(',');
      await asyncForEach(favList, async (id) => {
        const url = `http://www.omdbapi.com/?i=${id}&apikey=34556779`;
        const result = await axios(
            url,
        );
        array.push(result.data)
      });
      setShowFav(param);
      setData(array);
     }else{
       alert('Nothing saved as Favourite')
     }
    }else {
      setShowFav(param);
      setData([])
    }
  }
  
  return (
    <div className='App'>
      <Header showFavCallback={showFavChanger} showFav={showFav}/>
      <div className='container'>
        {showFav === 0 &&
          <Search onSearchMovie={searchAPI}/>
        }
        <List showFav={showFav} data={data}/>
      </div>
    </div>
  );
}

export default App;
