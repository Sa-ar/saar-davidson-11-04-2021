import React from 'react';
import { ErrorContainer } from './Error.styles';

function Error({ errors }) {
  return errors.length ? (
    <ErrorContainer>Errors: {errors.map((err) => `${err} `)}</ErrorContainer>
  ) : (
    ''
  );
}

export default Error;
