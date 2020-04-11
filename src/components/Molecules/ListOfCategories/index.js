import React, {useEffect, useState} from 'react';
import {Category} from "../../Atoms/Category";
import {Item, List} from "./styles";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(function () {
    fetch('https://petgram-server-ruben.rubenzagon.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
      })
  }, []);

  return (
    <List>
      {
        categories.map(category => <Item key={category.id}><Category {...category}/></Item>)
      }
    </List>
  )
};
