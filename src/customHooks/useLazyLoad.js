import {useEffect, useRef, useState} from "react";

export function useLazyLoad() {
  const element = useRef(null);
  const [show, setShow] = useState(false)

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // Esto es para saber si ahora está en el view port el artículo Photo
      const observer = new window.IntersectionObserver(function (entries) {
        const {isIntersecting} = entries [0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      });
      observer.observe(element.current)
    }, [element]);
  });

  return {element, show};
}
