import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search: '',
            checkbox: true,
            posts: []
         }
    }

    updateSearch(e){
        this.setState({
            search: e
        })
    }

    updateCheckBox(){
        this.setState({
            checkbox: !this.state.checkbox
        })
    }

    render() { 
        var mappedPost = this.state.posts.map((value, i) => {
            return(
                <div>
                    <h2>{value.title}</h2>
                    <h5>{value.username}</h5>
                    <img src = {value.img} alt = 'profilePic'/>
                </div>
            )
        })
        return ( 
            <div>
                <input type = 'text' placeholder = 'Search by Title' onChange = {(e) => this.updateSearch(e.target.value)}/>
                <button>Search</button>
                <button>Reset</button>
                <input type = 'checkbox' onChange = {() => this.updateCheckBox()}/>
                {mappedPost}
            </div>
         )
    }
}
 
export default Dashboard;