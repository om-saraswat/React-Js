import {configureStore} from "@reduxjs/toolkit"
import authslicereducer from "../Store/authslice"

const store = configureStore({
    reducers : {
        auth : authslicereducer,
    }
    //change reducers to reducer

})
export default store;
