import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    
    render(){
        const { post } = this.props;

        return(
            <div>
                <Link className="btn btn-primary" to="/">Back to Index</Link>
                <h3> { post.title } </h3>
                <h6> Categories: { post.categories } </h6>
                <p> { post.content } </p>
            </div>
        );
    }
}

const mapStateToProps = ({ posts }, ownProps) => {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);