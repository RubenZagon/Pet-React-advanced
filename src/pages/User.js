import React, {Fragment, useContext} from 'react';
import {Context} from "../Context";
import {SubmitButton} from "../components/Atoms/SubmitButton";
import {Helmet} from "react-helmet";

export const User = () => {
  const {removeAuth} = useContext(Context)

  return (
    <Fragment>
      <Helmet>
        <title>Petgram - Tu app de fotos de mascotas</title>
        <meta name={'description'} content={'Con Petgram puedes encontrar fotos de animales domésticos muy bonitos '}/>
      </Helmet>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Fragment>
  )
};
