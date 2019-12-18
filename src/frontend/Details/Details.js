import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import getMovies from '../GetMovies';
import './details.css';

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        fetch('/rest/movies/:')
        .then(response => response.json())
        .then(movie => this.setState({movie: movie}))
        // let showId = this.props.match.params.showId;
        // let movieId = getMovies().find(movie => movie.id === showId)
        // this.setState({ movieId });
    }
    render() {
        if (this.state.movie === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div className='details'>
                    <Link to='/'>Back to home-page</Link>
                    <h1>{this.state.movie.name}</h1>
                    <div className='container'>
                        <div className='synopsis'>
                            {this.state.movie.synopsis}
                        </div>
                        <div className='image'>
                            <img src={this.state.movie.image}
                                alt={this.state.movie.image} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}