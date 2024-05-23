import * as yup from 'yup';

const mobileRegex = /^[0-9]{10}$/g;

export const photographerSchema = yup.object({
  email: yup
    .string()
    .required('Email is required')
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      'Please enter a valid email address.'
    ),

  fullName: yup
    .string()
    .required('Full name is required')
    .matches(/^[A-Za-z\s]+$/, 'Full name must only contain letters.'),

  city: yup.string().required('City is required'),

  address: yup.string().required('Address is required'),

  pinCode: yup
    .string()
    .matches(/^\d{5,6}$/, 'Pin code must be 5 or 6 digits')
    .required('Pin code is required'),

  detailsMobileNumber: yup
    .string()
    .matches(mobileRegex, {
      message: 'Enter a valid mobile number.',
      name: 'detailsMobileNumber',
      excludeEmptyString: true,
    })
    .required('Please enter a mobile number.'),
});
