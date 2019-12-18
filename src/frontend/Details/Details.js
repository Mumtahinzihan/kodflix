import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './details.css';

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            movie: {}
        }
    }
    componentDidMount() {
        let showId = this.props.match.params.showId;
        fetch(`/rest/movies/${showId}`)
        .then(response => response.json())
        .then(movie => this.setState({movie: movie}))
    }
    render() {
        if (this.state.movie === undefined) {
            return <Redirect to='/not-found' />
        } else if (!this.state.movie.id){
            return <div>Fetch Loading</div>
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
                        <img src={require(`../images/${this.state.movie.id}-MovieCover.jpg`)} alt={`${this.state.movie.name} cover`} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}