import React from 'react';
import {userSchema} from '../../validations/userSchema';
import { Formik, Form} from "formik";
import {useDispatch,useSelector} from 'react-redux'
import {addUserDetail,setWizzardStep} from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Input from "./input";
import Dropdown from "./dropdown";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '&':{
      display:'flex',
      flexDirection:'column',
      width:'100%',
      margin:'auto',
    },
    '& .text-danger':{
      margin:'0px 8px'
    }
  },
  countrySelector:{
    height: '40px',
    background: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.23)',
    '&:focus':{
      outline: '2px solid #3f51b5'
    }
  },
  comment:{
    marginTop:'15px'
  }
}));

export default function UserForm() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const data = useSelector(state => state.userData)
  const selectCountry  = (val) => {
    dispatch(addUserDetail({id:'country',val:val}))
  }
  const handleChange = (e) =>{
      dispatch(addUserDetail({id:e.target.id,val:e.target.value}))
  }
  const nextPage = async () =>{
    dispatch(setWizzardStep('product'))
  }

  return (
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">USER DETAILS</h5>
    <Formik
    enableReinitialize
    initialValues={{...data}}
    validationSchema={userSchema}
    onSubmit={async () =>{
       nextPage()
    }}
    >     
        <Form className={classes.root}>
        <Input
        label="First Name"
        id="firstName"
        value={data.firstName}
        onChange={handleChange}
        schema={userSchema}
        showError={true}
        />
        <Input
        label="Last Name"
        id="lastName"
        value={data.lastName}
        onChange={handleChange}
        schema={userSchema}
        showError={true}
        />
        <Input
        label="Age"
        id="age"
        value={data.age}
        onChange={handleChange}
        schema={userSchema}
        showError={true}
        />
        <Input
        label="Email"
        id="email"
        value={data.email}
        onChange={handleChange}
        schema={userSchema}
        showError={true}
        />
        <Input
        label="Shipping Address"
        id="shippingAddress"
        value={data.shippingAddress}
        onChange={handleChange}
        schema={userSchema}
        showError={true}
        />
        <Input
        label="Suggestions or Comment"
        id="userComment"
        value={data.userComment}
        rows={4}
        multiline={true}
        onChange={handleChange}
        schema={userSchema}
        showError={false}
        />
        <Dropdown
        id={'country'}
        classes={classes.countrySelector}
        value={data.country}
        showError={true}
        onChange={selectCountry}
        />
            <div className='d-flex justify-content-end'>
            <button type="submit" className="btn btn-primary">
              Next
            </button>
            </div>
      </Form>
    </Formik>
  </div>
</div>

  );
}