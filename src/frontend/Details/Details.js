import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getMovies from '../GetMovies';
import './details.css';

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            movieId: {}
        }
    }
    componentDidMount() {
        let showId = this.props.match.params.showId;
        let movieId = getMovies().find(movie => movie.id === showId)
        this.setState({ movieId });
    }
    render() {
        if (this.state.movieId === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div className='details'>
                    <Link to='/'>Back to home-page</Link>
                    <h1>{this.state.movieId.name}</h1>
                    <div className='container'>
                        <div className='synopsis'>
                            {this.state.movieId.synopsis}
                        </div>
                        <div className='image'>
                            <img src={this.state.movieId.image}
                                alt={this.state.movieId.image} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}