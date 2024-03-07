import { useState } from "react";

const ValidateText = (values) => {
  let errors = {};
  // if (!values.first_name.trim()) {
  //   errors.first_name = "First name required";
  // }

  // if (!values.last_name.trim()) {
  //   errors.last_name = "Last name required";
  // }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.password2) {
    errors.password2 = 'Password is required';
  } else if (values.password !== values.password2 ) {
    errors.password2 = 'Password does not match';
  }
  return errors;
};

export default ValidateText;