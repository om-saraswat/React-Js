import {configureStore} from "@reduxjs/toolkit"
import authslicereducer from "../Store/authslice"

const store = configureStore({
    reducer: {
        auth : authslicereducer,
    }
})
export default store;
