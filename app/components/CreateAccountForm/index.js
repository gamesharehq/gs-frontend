/**
*
* CreateAccountForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';


const CreateAccountForm = (props) => {
  const { handleSubmit } = props;

  return (
    <div className="pt-5">
      <h5 className="mb-3">Create your Gameshare account</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <Field
            name="firstname"
            component="input"
            type="text"
            className="form-control"
            required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <Field
            name="lastname"
            component="input"
            type="text"
            className="form-control"
            required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            className="form-control"
            required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phone</label>
          <Field
            name="phone"
            component="input"
            type="tel"
            className="form-control"
            required="true"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <Field
            name="password"
            component="input"
            type="password"
            className="form-control"
            required="true"
          />
        </div>

        <button className="btn-success btn w-100 mt-2">Create Account</button>
      </form>
    </div>
  );
};

CreateAccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'createAccount',
})(CreateAccountForm);

