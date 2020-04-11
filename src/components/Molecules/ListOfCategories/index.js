import React, {Fragment, useEffect, useState} from 'react';
import {Category} from "../../Atoms/Category";
import {Item, List} from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    fetch('https://petgram-server-ruben.rubenzagon.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, []);

  useEffect(function () {
    const onScroll = event => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    };

    // Esto lo necesitaremos para escuchar el documento, y que por cada vez que se haga un scroll, ejecute la función onScroll
    document.addEventListener('scroll', onScroll);
    // Esto es para que se limpie el efecto y no provoque un leak
    return () => document.removeEventListener('scroll', onScroll)

  }, [showFixed]);

  const renderList = (fixed) => (
    <List className={fixed ? 'fixed' : ''}>
      {
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  );

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
};
