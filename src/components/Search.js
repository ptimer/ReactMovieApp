import React from 'react';
import '../css/search.css';
import {connect} from 'react-redux';
import {setSearchValue} from "../redux/actions";


class Search extends React.Component{
	constructor(props){
		super(props);
	}

	updateSearch = input => {
		this.props.setSearchValue(input);
	}

	render(){
		return (
			<section className="search-form">
				<input type="text" placeholder="Найти фильм...Например 'Batman'" 
				className="search-form__input search-form__input_focused" 
				onChange={e => this.updateSearch(e.target.value)}
				/>
			</section>
		);
	}
}

export default connect(
	null,
	{ setSearchValue }
)(Search);