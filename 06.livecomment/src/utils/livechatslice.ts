import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    messages : [
        {
            name : "Vikash",
            text : "pakistan shutdown israel aircraft and free palastine last night!!"
        }
    ]
}
const chatSlice = createSlice({
    name : "chat",
    initialState,
    reducers : {
        sendChat(state, action){
            if(state.messages.length > 10) state.messages.splice(10, 1)
            state.messages = [action.payload, ...state.messages];
        }
    }
})
export const {sendChat} = chatSlice.actions
export default chatSlice.reducer