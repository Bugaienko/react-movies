import React, {Component} from 'react';
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {

	state = {
		movies: [],
		loading: true
	}
	componentDidMount() {
		// fetch('http://www.omdbapi.com/?apikey=8770170&s=terminator')
		// 	.then(response => response.json())
		// 	.then(data => this.setState({movies: data.Search}))
		this.reloadMoviesList('terminator')
	}

	reloadMoviesList = (str) => {
		this.setState({loading: true})

		fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
			.then(response => response.json())
			.then(data => this.setState({movies: data.Search, loading: false}))
			.catch((error) => {
				console.error(error);
				this.setState({loading: false})
			})
	}

	render() {
		const {movies, loading} = this.state
		// console.log(movies)
		return <main className="container content">
			<Search reloadMoviesList={this.reloadMoviesList}/>
			{/*{!movies ? <h4>No movies was found</h4> : console.log('have fun')}*/}
			{
				loading ? (
					<Preloader />
				) : (
					<Movies movies={movies} />
				)
			}

		</main>
	}

}

export {Main};
