import { FETCH_POST } from '../actions/index';

export default function(state = {}, action){
    switch(action.type){
        case FETCH_POST:
            _.mapKeys(action.payload.data,'id');
        default:
            return state;
    }
}