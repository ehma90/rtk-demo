const createSlice = require("@reduxjs/toolkit").createSlice;
import CakeAction  from "../cake/cakeSlice";

const initialState = ({
    numOfIceCreams: 20
})


const iceCreamSlice = createSlice({
    name: "ice-cream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIceCreams--
        },
        reStocked: (state, action) => {
            state.numOfIceCreams += action.payload;
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state, action) => {
    //         state.numOfIceCreams--
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(CakeAction.ordered, state => {
            state.numOfIceCreams--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.CakeAction = iceCreamSlice.actions

