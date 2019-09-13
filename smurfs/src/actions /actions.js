// Actions where the 
import axios from 'axios';

//new smurf actions 
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';
export const ADD_NEW_SMURF_SUCCESS = 'ADD_NEW_SMURF_SUCCESS';
export const ADD_NEW_SMURF_FAILED = 'ADD_NEW_SMURF_FAILED';

// fetch smuf actions 
export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED';


//get request retrieving smurf data
export const getSmurf = () => dispatch => {
    dispatch({ type: FETCH_SMURF_START });
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => 
          dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data.results})
    )
       .catch( err => dispatch({ type: FETCH_SMURF_FAILED, payload: err }))
}

// post request adding new smuf 
export const addSmurf = newSmurf => dispatch => {
    dispatch({ type: ADD_NEW_SMURF })
    axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
        dispatch({ type: ADD_NEW_SMURF_SUCCESS, payload: resp.data.results })
      })
      .catch(err => {
        dispatch({ type: ADD_NEW_SMURF_FAILED, payload: err })
      })
   } 