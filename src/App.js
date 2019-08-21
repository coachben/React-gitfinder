import React, { Component } from 'react'
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios'
import  './App.css'

class App extends Component{
  state = {
    users:[],
    loading: false
  }
  async componentDidMount(){
  //set state for loading first using this.setstate
   this.setState({
     loading:true
   });

   const res = await axios.get('https://api.github.com/users')   
    //set back state after loading using this.setstate
    this.setState({
      users: res.data, 
      loading:false,
    });


  }
  
  searchUsers = (text) =>{
    console.log(text)
  }

  render(){

    return(
      <div className = 'App'>
         <Navbar title='Github Finder '/>
         <Search searchUSers ={this.searchUsers} />
         <Users users={this.state.users} loading={this.state.loading}/>
        
      </div>

    );
  }

}

export default App;