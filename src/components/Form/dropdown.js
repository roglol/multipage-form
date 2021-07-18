import React from 'react';
import { CountryDropdown} from 'react-country-region-selector';
import { ErrorMessage } from "formik";

const Dropdown = ({value,onChange,id,showError,classes}) =>{
    return (
        <>
        <CountryDropdown
            classes={classes}
            value={value}
            onChange={onChange} />
        {showError && <ErrorMessage name={id} component='span' className='text-danger' />}
        </>
    )
}


export default Dropdown;