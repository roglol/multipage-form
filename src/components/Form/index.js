import React from 'react';
import {useSelector} from 'react-redux'
import UserForm from './userForm';
import ProductForm from './productForm';


export default function Form() {
const data = useSelector(state => state.wizzard)
    const render = () =>{
        const {step} = data
        switch(step) {
            case 'user':
              return <UserForm/>
            case 'product':
              return <ProductForm/>
            default:
              return null
          }
    }

  return (
    <div className='container wrapper'>
      {render()}
    </div>
  );
}