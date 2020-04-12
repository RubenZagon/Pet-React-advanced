import {useEffect, useRef, useState} from "react";

export function useLazyLoad() {
  const element = useRef(null);
  const [show, setShow] = useState(false)

  useEffect(function () {
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

  return {element, show};
}
