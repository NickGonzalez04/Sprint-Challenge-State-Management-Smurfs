// import actions 
import {
     FETCH_SMURF_START,
     FETCH_SMURF_SUCCESS,
     FETCH_SMURF_FAILED,
     ADD_NEW_SMURF,
     ADD_NEW_SMURF_SUCCESS,
     ADD_NEW_SMURF_FAILED
 } from '../actions/actions';

 export const initialState = {
     smurfs: [],
     error: '',
     isFetching: false,
     addNewSmurf: false
 }

 export const smurfReducer = (state=initialState, action) =>{
     switch(action.type){
         case FETCH_SMURF_START:
           return {
               ...state,
               isFetching: true,
               error: ''
           };
          case FETCH_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: ''
            };
           case FETCH_SMURF_FAILED:
             return {
                 ...state,
                 error: action.payload
             };
             case ADD_NEW_SMURF:
               return {
                   ...state,
                   addNewSmurf: false,
                   error: ''
               }
               case ADD_NEW_SMURF_SUCCESS:
               return {
                   ...state,
                   smurfs: action.payload,
                   addNewSmurf: false,
                   error: ''
               }
               case ADD_NEW_SMURF_FAILED:
                return {
                    ...state,
                    addNewSmurf: false,
                    error: action.payload,
                }
        default: 
          return state;
     }
 }