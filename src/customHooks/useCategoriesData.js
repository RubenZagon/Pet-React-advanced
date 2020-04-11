import {useEffect, useState} from "react";

export function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true);
    fetch('https://petgram-server-ruben.rubenzagon.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false);
      })
  }, []);

  return {categories, loading}
}
