import React from 'react'
import {connect} from 'react-redux'
import "../css/MovieList.css"

import MoviePage from './MoviePage'
import {Link} from 'react-router-dom'

class MovieList extends React.Component{
	constructor(props){
		super(props);
	}


	render(){
		return(
			<section className="movie-list">
				{this.props.results && this.props.results.length 
					? this.props.results.map((item, index) => {
						return (
								<div key={index} className="movie-list__item movie-list__item_hovered">
									<Link to={`/movie/${index}`}>
										<img src={item.Poster} alt="" className="movie-list__poster"/>
										<h3 className="movie-list__title movie-list__title_hovered">{item.Title}</h3>
									</Link>
								</div>
							);
					})
					: ""}
			</section>
		);
	}
}

const mapStateToProps = state => {
	return {
		results: state.results
	}
}

export default connect(
	mapStateToProps,
	null
)(MovieList);