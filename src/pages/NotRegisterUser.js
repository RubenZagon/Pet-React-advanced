import React from 'react';
import Context from "../Context";
import {UserForm} from "../components/Molecules/UserForm/UserForm";

export const NotRegisterUser = () => {
  return (
    <Context.Consumer>
      {
        ({activateAuth}) => {
          return (
            <UserForm onSubmit={activateAuth}/>
          )
        }
      }
    </Context.Consumer>
  )
};
