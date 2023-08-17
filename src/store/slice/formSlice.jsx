import { createSlice } from "@reduxjs/toolkit";
import { addCourse } from "./courseSlice";
addCourse
const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        description: '',
        cost: 0
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeDescription(state, action) {
            state.description = action.payload;
        },
        changeCost(state, action) {
            if(action.payload < 0){
                action.payload = 0;
            }
            else if(action.payload == 0){
                alert("0 dan büyük bir sayı giriniz!")
            }
            else{
                state.cost = action.payload;
            }
        }
    },
    extraReducers(builder) {
        builder.addCase(addCourse, (state) => {
            state.name = '',
            state.description = '',
            state.cost =  0
        })
    }
})

export const { changeName, changeDescription, changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;