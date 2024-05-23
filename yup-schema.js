const validationSchema = Yup.object().shape({
  ifscCode: Yup.string()
    .required('Account code is required')
    .test(
      'is-four-uppercase-letters',
      'Account code must start with exactly four uppercase letters.',
      (value) => /^[A-Z]{4}/.test(value)
    )
    .test('is-zero-fifth', 'The fifth character must be a 0.', (value) =>
      /^[A-Z]{4}0/.test(value)
    )
    .test(
      'is-six-alphanumeric-end',
      'Account code must end with exactly six alphanumeric characters.',
      (value) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)
    ),
});

export default validationSchema;
