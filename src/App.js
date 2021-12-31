import './App.scss';
import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarLayout from './UI/AppFrame/NavbarLayout.js';
import Newbies from './Pages/Newbies/Newbies';
import { ThemeProvider } from '@emotion/react';
import theme from './MUIthemeOverrides';
import Footer from './UI/Footer/Footer';
import GoogleForm from './Pages/GoogleForm/GoogleForm';
import CoinForecast from './Pages/CoinForecast/CoinForecast';
import FeatureRequest from './Pages/FeatureRequest/FeatureRequest';
import QuickCompare from './Pages/QuickCompare/QuickCompare';

function App() {
  // - Modal Logic
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('title');
  const [info, setInfo] = useState('info');
  const [link, setLink] = useState('link');

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLayout>
          <Routes>
            <Route path='*' exact element={<GoogleForm />}></Route>
            <Route path='/coin-forecast' element={<CoinForecast />}></Route>
            <Route path='/quick-compare' element={<QuickCompare />}></Route>
            <Route
              path='/feature-request-form'
              element={<FeatureRequest />}></Route>
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
                  link={link}
                  setLink={setLink}
                />
              }></Route>
          </Routes>
          <Footer />
        </NavbarLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
