import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
class PostIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }
    
    render() { 
        return ( 
            <h3> This is a class component </h3>
         );
    }
}
 
export default connect(null, { fetchPosts })(PostIndex);