import React from 'react';
import {useInputValue} from "../../../hooks/useInputValue";
import {Button, Error, Form, Input, Title} from "./styles";

export const UserForm = ({error, onSubmit, title}) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({email: email.value, password: password.value})
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input placeholder={'Email'} {...email}/>
        <Input placeholder={'Password'} type={'password'} {...password}/>
        <Button>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
};
