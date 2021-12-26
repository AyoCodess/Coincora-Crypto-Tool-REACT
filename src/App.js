import './App.scss';
import { React, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MarketCapOf from './Pages/MarketCapOf';
import NavbarLayout from './UI/NavbarLayout.js';
import Newbies from './Pages/Newbies';
import { ThemeProvider } from '@emotion/react';
import theme from './MUIthemeOverrides';
import Footer from './UI/Footer/Footer';
import GoogleForm from './Pages/GoogleForm';

function App() {
  // - Modal Logic
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('title');
  const [info, setInfo] = useState('info');

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLayout>
          <Routes>
            <Route path='*' exact element={<GoogleForm />}></Route>
            <Route path='/marketcapof' element={<MarketCapOf />}></Route>
            <Route
              path='/newbies'
              element={
                <Newbies
                  open={open}
                  setOpen={setOpen}
                  title={title}
                  setTitle={setTitle}
                  info={info}
                  setInfo={setInfo}
                />
              }></Route>
          </Routes>
          <Footer />
        </NavbarLayout>
        {/* <Modal
          open={open}
          setOpen={setOpen}
          cancelButtonRef={cancelButtonRef}
          title={'title'}
          info={'info'}
        /> */}
      </ThemeProvider>
    </>
  );
}

export default App;
