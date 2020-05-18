import React from 'react'
import {connect} from 'react-redux'
import {
  Link,
  Redirect
} from "react-router-dom";
import '../css/MovieBox.css';

class MoviePage extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="movie-page">
				{this.props.results.length != 0 ? this.props.results.filter(item => item.id == this.props.match.params.id
					).map(movie => {
						return (
							<div key={movie.id} className="movie-box">
								<h2 className="movie-box__title">{movie.Title}<span className="movie-box__year">({movie.Year})</span></h2>
								<div className="movie-box__plot">
									<img className="movie-box__poster" src={movie.Poster} />
								</div>
								<Link to="/"><button className="movie-box__back movie-box__back_hovered">Назад</button></Link>
							</div>
						);
					})
				: <Redirect
		            to={{
		              pathname: "/"
		            }}
		          />
				}
			</div>
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
)(MoviePage);