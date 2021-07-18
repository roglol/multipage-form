import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ErrorMessage } from "formik";

const Input = ({value,onChange,id,label,showError,rows,multiline}) =>{
    return (
        <>
        {!multiline ?
        <TextField 
        label={label} 
        id={id}  
        value={value} 
        onChange={onChange} 
        /> :
        <TextField 
            label={label} 
            id={id}  
            value={value} 
            onChange={onChange} 
            rows={rows} 
            multiline
            variant='outlined'
            />
        }
        {showError && <ErrorMessage name={id} component='span' className='text-danger' />}
        </>
    )
}


export default Input;