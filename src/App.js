import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import FavList from './components/FavList/FavList';
import Search from './components/Search/Search';
import Next from './components/Next/Next';
import Previous from './components/Previous/Previous';

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



function App() {
  const [data, setData] = useState([]);
  const [ showFav, setShowFav ] = useState(0);
  const [ count, setCount ] = useState(0);
  const [ page, setPage ] = useState(1);
  const [ searchType, setSearchType ] = useState('');
  const [ searchText, setSearchText ] = useState('');

  let searchAPI = async (params) => {
    const type = params.type === 'all' ? '' : `&type=${params.type}`;
    const text = params.text;
    const page = params.page || 1;
    const url = `https://www.omdbapi.com/?s=${text}${type}&page=${page}&apikey=34556779`;
    const result = await axios(
      url,
    );
    if(result.data.Error){
      setData([]);
      setSearchType('');
      alert('Movie Not found')
    }else {
      setSearchType(params.type);
      setSearchText(params.text);
      setCount(result.data.totalResults);
      setData(result.data.Search);
      setPage(page);
    }
  }

  let array = []

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  let nextHandler = async () => {
    searchAPI({
      text: searchText,
      type: searchType,
      page: page + 1
    })
  }

  let previousHandler = async () => {
    searchAPI({
      text: searchText,
      type: searchType,
      page: page - 1
    })
  }

  let showFavChanger = async (param) => { 
    if (param === 1) {
     if(localStorage.getItem('favourite')) {
      let favList = localStorage.getItem('favourite').split(',');
      await asyncForEach(favList, async (id) => {
        const url = `https://www.omdbapi.com/?i=${id}&apikey=34556779`;
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
      <Header/>
    <Router>
        <Switch>
          <Route path="/fav">
            <FavList showFavCallback={showFavChanger} showFav={showFav} data={data} count={count} page={page}/>
          </Route>
          <Route path="/">
                <div className='container'>
                  {showFav === 0 &&
                    <Search onSearchMovie={searchAPI}/>
                  }
                  <List showFav={showFav} data={data} count={count} page={page}/>
                </div>
                { count > page*10 &&
                  <div className='page-button'>
                    <Next onNext={nextHandler} disable={page > count/10} page={page}/>
                    <label>Page no- {page} </label>
                    <Previous onPrevious={previousHandler} disable={page === 1} page={page}/>
                  </div>
                }
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
