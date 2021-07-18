import React,{useEffect,useState} from 'react';
import { Formik, Form} from "formik";
import {productSchema} from '../../validations/productSchema';
import {userSchema} from '../../validations/userSchema';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch,useSelector} from 'react-redux'
import {addProductDetail,addUserDetail} from '../../actions';
import Input from "./input";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";

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
    }
  },
  table:{
      '&': {
          width:'auto',
          marginTop:'15px'
      }
  }
}));
function createData(userInfo) {
    const { firstName,lastName,age,email,country,shippingAddress} = userInfo
    return { firstName,lastName,age,email,country,shippingAddress}
}
function createHeader() {
  return[
    'First Name',
    'Last Name',
    'Age',
    'Email',
    'Country',
    'Shipping Address'
  ]
}
export default function ProductForm() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [editMode,setEditMode] = useState(false)
  const data = useSelector(state => state.productData)
  const userInfo = useSelector(state => state.userData)
  const [gridData,setGridData] = useState([])
  const [gridHeader,setGridHeader] = useState([])

  const handleChange = (e) =>{
    dispatch(addProductDetail({id:e.target.id,val:e.target.value}))
}
const changeUserInfo = (e) =>{
  dispatch(addUserDetail({id:e.target.id,val:e.target.value}))
}
  const toggleEdit = () =>{
    setEditMode(!editMode)
  }
useEffect(() => {
     setGridHeader(createHeader())
     setGridData([createData(userInfo)])
  },[userInfo]);
  return (
    <div className="card">
  <div className="card-body">
    <h5 className="card-title">PRODUCT DETAILS</h5>
    <Formik
    enableReinitialize
    initialValues={{...data}}
    validationSchema={productSchema}
    onSubmit={async () =>{
       console.log(userInfo)
       alert('submitted successfully')
    }}
    >   
    <Form className={classes.root}>
    <Input
        label="Name"
        id="productName"
        value={data.productName}
        onChange={handleChange}
        schema={productSchema}
        showError={true}
      />
        <Input
        label="Price"
        id="productPrice"
        value={data.productPrice}
        onChange={handleChange}
        schema={productSchema}
        showError={true}
      />
        <Input
        label="Quantity"
        id="productQuantity"
        value={data.productQuantity}
        onChange={handleChange}
        schema={productSchema}
        showError={true}
      />
        <Input
        label="SKU"
        id="productSku"
        value={data.productSku}
        onChange={handleChange}
        schema={productSchema}
        showError={true}
      />
      <TableContainer component={Paper}  className={classes.table} >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell/>
              {gridHeader.map(function(val, key) {
                return <TableCell key={key}>{val}</TableCell>
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {gridData.map((row,key) => {
            return <TableRow key={key}>
              <TableCell>
              {editMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => toggleEdit()}
                    >
                      <DoneIcon />
                    </IconButton>
                  </>
                ) : (
                  <IconButton
                    aria-label="edit"
                    onClick={() => toggleEdit()}
                  >
                    <EditIcon />
                  </IconButton>
                )}
              </TableCell>
              {Object.keys(row).map(function(val,key){
              return editMode ?
              <TableCell key={key}>
              <Input
              id={val}
              value={row[val]}
              onChange={changeUserInfo}
              schema={userSchema}
              // showError={true}
            /> 
            </TableCell>
            :
              <TableCell key={key}>{row[val]}</TableCell>
              })}
            </TableRow>
           })}
        </TableBody>
      </Table>
    </TableContainer>
    <div className='d-flex justify-content-end'>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            </div>
    </Form>
    </Formik>
  </div>
</div>

  );
}