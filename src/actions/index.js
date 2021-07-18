export const  addUserDetail = (data) =>{
    return{
        type:'user_detail',
        payload:{...data}
    }
}

export const  addProductDetail = (data)  =>{
    return{
        type:'product_detail',
        payload:{...data}
    }
}

export const setWizzardStep = (data) =>{
    return{
        type:'wizzard_step',
        payload:data
    }
}