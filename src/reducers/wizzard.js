const initialState = {
    step:'user',
}

export const wizzard = (state=initialState,action) =>{
    switch(action.type){
     case 'wizzard_step': 
     return {...state,step:action.payload}
     default: return state
    }
}