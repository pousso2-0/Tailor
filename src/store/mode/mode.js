const initstate={
    scheme: false,
    rtl:false
}


export const ModeAction = (value) => {
    if (value) {
        document.body.classList.add('dark')
    }
     else {
        document.body.classList.remove('dark')
    }
    return {type: 'DARKMODE', value}
}

export const DirAction = (value) => {
    if (value) {
        document.body.parentElement.setAttribute('dir','rtl')
    }
    
     else {
        document.body.parentElement.setAttribute('dir','ltr')
     }
    
    return {type: 'DIRMODE', value}
}



// Mutations/Reducer
const Mode = (state = initstate,action) =>{
    switch (action.type) {
        case 'DARKMODE':
            return Object.assign({}, state, {
                scheme: action.value
            })
        case 'DIRMODE':
            return Object.assign({}, state, {
                rtl: action.value
            })
        default:
            return state
    }
}
// Selectores
export const getDarkMode = (state) => state.mode.scheme;
export const getRtlMode = (state) => state.mode.rtl;

export default Mode