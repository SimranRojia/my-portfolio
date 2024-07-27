import { createSlice } from "@reduxjs/toolkit";




export const scrollToTop =()=> dispatch=>{

    dispatch(toggleSubNav(false))
    window.scroll(0,0)

}


const utilsSlice = createSlice({
    name: "utilsSlice",
    initialState: {
        subNavActive: false,
        darkTheme: localStorage.getItem('selected-dark-theme') === 'true' ? true : false,
        toastData:{}
    },

    reducers: {
        toggleSubNav: (state, action) => {

            const w = window.innerWidth < 530;
            state.subNavActive = w && action.payload

        },
        toggleTheme: (state, action) => {

            state.darkTheme = !state.darkTheme;
        },
        showtoast:(state,action)=>{
            state.toastData= action.payload
        }

    }

})

export const { toggleSubNav, toggleTheme,showtoast } = utilsSlice.actions;
export default utilsSlice.reducer;