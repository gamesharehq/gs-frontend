/**
 *
 * CreateAccount
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCreateAccount from './selectors';
import reducer from './reducer';
import saga from './saga';

export class CreateAccount extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

CreateAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  createaccount: makeSelectCreateAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'createAccount', reducer });
const withSaga = injectSaga({ key: 'createAccount', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(CreateAccount);
