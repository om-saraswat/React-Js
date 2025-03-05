import {configureStore} from "@reduxjs/toolkit"
import authslicereducer from "../Store/authslice"

const store = configureStore({
    reducer : {
        auth : authslicereducer,
    }
    //change reducers to reducer

})
export default store;
