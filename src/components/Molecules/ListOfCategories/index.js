import React, {Fragment, useEffect, useState} from 'react';
import {Category} from "../../Atoms/Category";
import {Item, List} from "./styles";
import {useCategoriesData} from "../../../hooks/useCategoriesData";
import {LoadingCategory} from "../../Atoms/LoagingCategory";

export const ListOfCategories = () => {
  const {categories, loading} = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {
    // noinspection JSUnusedLocalSymbols
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
    <List fixed={fixed}>
      {
        loading
          ? [1, 2, 3, 4].map(item => <Item key={item}><LoadingCategory/></Item>)
          : categories.map(category => <Item key={category.id}><Category {...category}
                                                                         path={`/pet/${category.id}`}/></Item>)
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
