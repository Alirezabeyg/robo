import React from "react";
import Cardlist from './Cardlist';
import SearchBox from './SearchBox.js';
import './App.css';
import Scroll from './Scroll.js'



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots : [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => {this.setState({robots:users})})
       
    }

    onSearchChange = (event) => {
        this.setState({searchfield:event.target.value});
        
       
    }
    render() {
        const filteredRobot = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        if(this.state.robots.length === 0){
            return <h1>Loding</h1>
        }else{  return (
            <div className="tc">
                <h1 className="f1">Robo Friendes</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filteredRobot} />
                </Scroll>
                
            </div>
        );}
      
    }
}

export default App;
