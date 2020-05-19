import React from "react";
import "./css/app.css";
import {connect} from 'react-redux';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Search from './components/Search';
import MovieList from './components/MovieList';
import {setResultQueryList} from "./redux/actions";
import MoviePage from './components/MoviePage';

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      apiurl: "http://www.omdbapi.com/?apikey=60a3e640"
    }
  }

  componentDidUpdate(){
    axios(this.state.apiurl + "&s=" + this.props.search).then(({data}) => {
        this.props.setResultQueryList(data.Search);
      });
  }

  render(){
      return(
        <Router>
          <div className="App">
           <Switch>
              <Route path="/" exact render={() => 
                <div className="content">
                  <header className="title">
                    <h1 className="title__text">Фильмы</h1> 
                  </header>
                  <Search/>
                  <MovieList/>
                </div>} 
              />
    
              <Route path="/movie/:id" exact render={({match}) => 
                  <main className="content">
                    <MoviePage match={match}/>
                  </main>}
              />
          </Switch>
          </div>
        </Router>
    );
  }
}

function mapStateToProps(state){
  return {search: state.search};
}

export default connect(
  mapStateToProps,
  {setResultQueryList}
)(App);
