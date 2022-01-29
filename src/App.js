import './App.scss';
import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarLayout from './AppFrame/NavbarLayout';
import Newbies from './Pages/Newbies/Newbies';
import { ThemeProvider } from '@emotion/react';
import theme from './MUIthemeOverrides';
import Footer from './UI/Footer/Footer';
import GoogleForm from './Pages/GoogleForm/GoogleForm';
import CoinForecast from './Pages/CoinPredict/CoinPredict';
import FeatureRequest from './Pages/FeatureRequest/FeatureRequest';
import QuickCompare from './Pages/QuickPredict/QuickPredict';
import NewsBanner from './components/NewsBanner/NewsBanner';
import CookiesBanner from './components/CookiesBanner/CookiesBanner';
import Legal from './Pages/Legal/Legal';
import Advice from './Pages/Advice/Advice';
import DonateCrypto from './Pages/DonateCrypto/DonateCrypto';
import ScrollToTop from './ScrollToTop';
import { DataProvider } from './context';
import Updates from './Pages/Updates/Updates';

function App() {
  // - News banner options
  let newsLink = '/';
  let mobileHeadline = 'Beta v.1 release - Announcement soon';
  let desktopHeadline =
    "Big news! We're excited to release Beta v.1 of the app very soon.";
  // - Modal Logic
  const [open, setOpen] = useState(false);
  const [openNews, setOpenNews] = useState(true);
  const [openDisclaimer, setOpenDisclaimer] = useState(true);
  const [title, setTitle] = useState('title');
  const [info, setInfo] = useState('info');
  const [link, setLink] = useState('link');

  // - Local storage logic
  const doesLocalStorageExist = localStorage.getItem('understand');
  const [understand, setUnderstand] = useState(false);
  const parsedDate = Date.parse(localStorage.understand);
  const currentDate = new Date();
  //. If the date of the accepted cookie + 7 days, is less than the current date, the cookie persists.
  if (understand && parsedDate < currentDate) {
    localStorage.removeItem('understand');
    setUnderstand(false);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <DataProvider>
            <NavbarLayout>
              <NewsBanner
                openNews={openNews}
                setOpenNews={setOpenNews}
                newsLink={newsLink}
                mobileHeadline={mobileHeadline}
                desktopHeadline={desktopHeadline}
              />
              <Routes>
                <Route path='*' exact element={<GoogleForm />}></Route>
                <Route path='/coin-predict' element={<CoinForecast />}></Route>
                <Route path='/quick-predict' element={<QuickCompare />}></Route>
                <Route path='/legal' element={<Legal />}></Route>
                <Route path='/advice' element={<Advice />}></Route>
                <Route path='/support-me' element={<DonateCrypto />}></Route>
                <Route path='/updates' element={<Updates />}></Route>
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
              {!doesLocalStorageExist && (
                <CookiesBanner
                  open={openDisclaimer}
                  setOpen={setOpenDisclaimer}
                  understand={understand}
                  setUnderstand={setUnderstand}
                />
              )}
            </NavbarLayout>
          </DataProvider>
        </ScrollToTop>
      </ThemeProvider>
    </>
  );
}

export default App;
