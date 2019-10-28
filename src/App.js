import React, {Component} from 'react';
import './App.scss';
import {Route} from 'react-router-dom';
import ContactPage from './components/contactPage';
import CreatecontactPage from './components/createcontactPage';
import MainPage from './components/mainPage';
import EditcontactPage from './components/editcontactPage';


class App extends Component{


  render (state){
    return (
    <div className="App">
       

       <Route path = "/" exact component ={MainPage}/ >
       <Route path = "/createcontact" exact component ={CreatecontactPage}/>
       <Route path = "/editcontact" exact component ={EditcontactPage}/>
       <Route path = "/contact" exact component ={ContactPage}/>




    </div>
  );
  }
}


export default App;
