const initialState = {
    firstName:'',
    lastName:'',
    age:'',
    email:'',
    country:'',
    shippingAddress:'',
    userComment:''
}

export const userData = (state=initialState,action) =>{
    switch(action.type){
     case 'user_detail': 
     const {payload:{id,val}} = action
     return {...state,[id]:val}
     default: return state
    }
}