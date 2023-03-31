const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Generate pending, fulfilled and rejected action types
const fetchUser = createAsyncThunk('user/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => response.data.map(user => user.id))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, state => {
            state.loading = true
        }),
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        }),
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

module.exports = userSlice.reducer
module.exports.fetchUser = fetchUser