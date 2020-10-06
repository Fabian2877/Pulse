
import 
{SIGN_IN, 
SIGN_OUT,
CREATE_STREAM,
FETCH_STREAMS,
FETCH_STREAM,
DELETE_STREAM,
EDIT_STREAM
} from './types'
import streams from '../apis/streams';
import history from '../history';




export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: {
            userId: userId
        }
    }
}


export const signOut = () => {

    return {
        type: SIGN_OUT
    }
}

export const createStream = (formValues) => async (dispatch, getState) => {
    const {userId} = getState().auth
     const {data} = await streams.post('/streams', {...formValues, userId})

       dispatch({type: CREATE_STREAM, payload: data})
       //after we have received our data from our API, we will then redirect our user to the StreamList
       history.push('/')
    }


export const fetchStreams = () => async dispatch => {
    const {data} = await streams.get('/streams') // returns an array of stream objects

    dispatch({type: FETCH_STREAMS, payload: data})
}


export const fetchStream = (id) => async dispatch => {
    const {data} = await streams.get(`/streams/${id}`);
    dispatch({type: FETCH_STREAM, payload: data})
}

export const editStream = (id, formValues) => async dispatch => {
    const {data} = await streams.patch(`/streams/${id}`, formValues)

    dispatch({type: EDIT_STREAM, payload: data})
    history.push('/')

}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)
    dispatch({type: DELETE_STREAM, payload: id})

    history.push('/')


}
