import { SET_RESULT_QUERY_LIST } from "../actionTypes"
import { GET_MOVIE_BY_ID } from "../actionTypes"

const initialState = []

export default function(state = initialState, action){
		switch(action.type){
			case SET_RESULT_QUERY_LIST:
				if(action.payload.r != undefined){
					return action.payload.r.map((item, index) => {
						item["id"] = index;
						return item;
					});
				}else{
					return state;
				}
			default:
				return state;
		}
}