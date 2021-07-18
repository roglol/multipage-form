const initialState = {
     productName:'',
     productPrice:'',
     productQuantity:'',
     productSku:''
}

export const productData = (state=initialState,action) =>{
    switch(action.type){
     case 'product_detail': 
     const {payload:{id,val}} = action
     return {...state,[id]:val}
     default: return state
    }
}