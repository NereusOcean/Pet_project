import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import MainNavbar from './Layouts/MainNavbar';
import { useRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const mobileSize = 1040;

function App() {
  const ref = useRef(null);

  const dispatch = useDispatch();
  let flag = window.screen.width;//Responsible for one storage update

  const resizeHandler = () => {
    const { clientHeight, clientWidth } = ref.current || {};

    if (clientWidth < mobileSize && flag > mobileSize) {
      flag = clientWidth;
      dispatch({ type: "UPDATE", payload: clientWidth });
    }else if (clientWidth > mobileSize && flag < mobileSize) {
      flag = clientWidth;
      dispatch({ type: "UPDATE", payload: clientWidth });
    }
  };


  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [])

  return (
    <BrowserRouter>
      <div
        ref={ref}
        style={{background: "F6F3F3" }}
      >
        <MainNavbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}


export default App;
