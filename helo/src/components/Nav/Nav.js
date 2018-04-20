import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

function Nav(props){
    return (
        <div>
            <Link to = '/dashboard'><button>Home</button></Link>
            <Link to = '/new'><button>New Post</button></Link>
            <Link to = '/'><button>Logout</button></Link>
            <h1>{props.username}</h1>
            <img src = {props.profilePic} alt = 'profilePic'/>
        </div>
    )
}


function mapStateToProps(state){
    return {
        username: state.username,
        profilePic: state.profilePic
    }
}
export default connect(mapStateToProps)(Nav);