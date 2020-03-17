import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import FavList from './components/FavList/FavList';
import Search from './components/Search/Search';
import Next from './components/Next/Next';
import Previous from './components/Previous/Previous';
import { Provider } from "react-redux";
import configureStore from "../src/redux/configureStore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const store = configureStore();


function App() {
  const [data, setData] = useState([]);
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

  return (
    <Provider store={store}>
      <div className='App'>
        <Header/>
        <Router>
            <Switch>
              <Route path="/favourites">
                <FavList/>
              </Route>
              <Route path="/">
                <div className='container'>
                  <Search onSearchMovie={searchAPI}/>
                  <List data={data}/>
                </div>
                { count > page*10 &&
                  <div className='page-button'>
                    <Next onNext={nextHandler} disable={page > count/10}/>
                    <label>Page no- {page} </label>
                    <Previous onPrevious={previousHandler} disable={page === 1}/>
                  </div>
                }
              </Route>
            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
