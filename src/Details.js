import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTechnologies from './technologies-get';

export default class Details extends Component {
    constructor() {
        super();
        this.state = {
            movieId: {}
        }
    }
    componentDidMount() {
        let technologyId = this.props.match.params.technologyId;
        let movieId = getTechnologies().find(technology => technology.id === technologyId)
        this.setState({
            movieId: movieId
        });
        ;
    }
    render() {
        if (this.state.movieId === undefined) {
            return <Redirect to='/not-found' />
        } else {
            return (
                <div>
                    <h1>{this.state.movieId.name}</h1>
                    <Link to='/'>Back to home-page</Link>
                </div>
            )
        }
    }
}