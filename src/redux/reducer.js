import axios from "axios"
import { useState } from "react"
const defaultPostState = []


const reducer = (state = defaultPostState, action) => {

switch (action.type) {
    

    case "GET_ALL_POSTS":
        //return console.log(action.payload)
        return action.payload
    case "ADD_POST":
        return [...state, action.payload]

        default:
        return state
}

}
export default reducer