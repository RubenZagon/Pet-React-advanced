import React from 'react';
import {useInputValue} from "../../../hooks/useInputValue";
import {Button, Form, Input, Title} from "./styles";

export const UserForm = ({onSubmit, title}) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({email: email.value, password: password.value})
  };

  return (
    // <form onSubmit={onSubmit}>
    //   <input placeholder={'Email'} value={email.value} onChange={email.onChange}/>
    //   <input placeholder={'Password'} type={'password'} value={password.value} onChange={password.onChange}/>
    //   <button>Iniciar sesión</button>
    // </form>
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input placeholder={'Email'} {...email}/>
        <Input placeholder={'Password'} type={'password'} {...password}/>
        <Button>{title}</Button>
      </Form>
    </>
  )
};
