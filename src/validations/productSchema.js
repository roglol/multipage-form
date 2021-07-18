import * as yup from 'yup';

export const productSchema = yup.object().shape({
  productName: yup.string().required('Name is required'),
  productPrice: yup.number().typeError('Price must be a number').required('Price is required').positive('Price must be a positive integer').integer('Price must be an integer'),
  productSku: yup.string().required('Sku is required'),
  productQuantity: yup.number().typeError('Quantity must be a number').required('Number is required').positive('Number must be a positive integer').integer('Number must be an integer'),
});