const configureStore = require("@reduxjs/toolkit").configureStore
import cakeReducer  from "../feature/cake/cakeSlice"
const fetchUser = require('../feature/user/userSlice').fetchUser

const store = configureStore({
    reducer: {
        cake: cakeReducer
    }
})

module.exports = store