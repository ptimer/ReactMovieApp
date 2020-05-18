import { SET_SEARCH_VALUE } from "../actionTypes";

const initialState = "";

export default function(state = initialState, action){
		switch(action.type){
			case SET_SEARCH_VALUE:
				return action.payload.s;
			default:
				return state;
		}
}