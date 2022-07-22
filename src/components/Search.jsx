import React, {Component} from 'react';

class Search extends Component {
	state = {
		search: '',
		typeSearch: 'all'

	}


	handleInput = (event) => {
		// console.log(event.target.name)
		this.setState(() => ({[event.target.name]: event.target.value}), () => {
			if (this.state.search.length > 6) {
				this.searchMovies()
			}
		})
	}
	handleRadio = (event) => {
		// console.log(event.target.value)
		this.setState(() => ({typeSearch: event.target.value}), () => {
			this.searchMovies()
		})
	}

	validateInput = (input) => {
		if (input.length < 4 ) return false
		return true }

	createSearchingString = () => {
		const {search, typeSearch} = this.state
		if (typeSearch === 'movie' || typeSearch === 'series') {
			let searchString = `${search}&type="${typeSearch}"`
			// console.log(searchString)
			return searchString
		}
		return search
	}

	searchMovies = () => {
		const {search} = this.state
		if (this.validateInput(search)) {

			this.props.reloadMoviesList(this.createSearchingString())
		} else {
			alert('Please enter correct search-text')
		}
	}

	handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			console.log('Key Enter press')
			this.searchMovies()
		}
	}

	handleButton = () => {
		this.searchMovies();
	}

	render() {

		return (
			<div className="row">
				<div className="col s12">
					{/*Search movie:*/}
					<div className="input-field">

						<input
							id="search"
							type="search"
							name="search"
							className="validate"
							placeholder="Search ..."
							value={this.state.search}
							onChange={this.handleInput}
							onKeyDown={this.handleKeyDown}
						/>
						<div>
						<label>
							<input
							type="radio"
							name="typeSearch"
							value="all"
							className="with-gap"
							onChange={this.handleRadio}
							checked = {this.state.typeSearch === 'all'}
						/> <span>All</span>
						</label>
						<label>
						<input
							type="radio"
							name="typeSearch"
							value="movie"
							className="with-gap"
							onChange={this.handleRadio}
							checked = {this.state.typeSearch === 'movie'}
						/> <span>Movies only</span>
						</label>
							<label>
								<input
									type="radio"
									name="typeSearch"
									value="series"
									className="with-gap"
									onChange={this.handleRadio}
									checked = {this.state.typeSearch === 'series'}
								/> <span>Series only</span>
							</label>
						</div>
					<button
						className="btn search-btn"
						onClick={this.handleButton}>
						Search
					</button>
					</div>
				</div>
			</div>
	);
	}
	}

	export {Search};