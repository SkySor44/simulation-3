import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            imgUrl: '',
            content: ''
         }
    }

    updateTitle(e){
        this.setState({
            title: e
        })
    }

    updateImgUrl(e){
        this.setState({
            imgUrl: e
        })
    }

    updateContent(e){
        this.setState({
            content: e
        })
    }


    render() { 
        return ( 
            <div>
                <h1>New Post</h1>
                <label>Title: </label>
                <input onChange = {(e) => this.updateTitle(e.target.value)}/>
                <img src = {this.state.imgUrl}/>
                <label>Image URL: </label>
                <input onChange = {(e) => this.updateImgUrl(e.target.value)}/>
                <label>Content: </label>
                <input onChange = {(e) => this.updateContent(e.target.value)}/>
                <button>Post</button>
            </div>
         )
    }
}
 
export default Form;