import './App.scss';
import { React, useState, useEffect } from 'react';
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
import SupportMe from './Pages/SupportMe/SupportMe';
import ScrollToTop from './ScrollToTop';
import { DataProvider } from './Context/context';
import Updates from './Pages/Updates/Updates';
import Todo from './Pages/Todo/Todo.js';
import Mission from './Pages/Mission/Misson';

import ReactGA from 'react-ga';
import KnowledgeBase from './Pages/KnowledgeBase';
import WhatIsRBM from './Pages/KnowledgeBase/Articles/Pages/WhatIsRBM.';
import GoFundMe from './Pages/KnowledgeBase/Articles/Pages/GoFundMe';
import TheCommunity from './Pages/KnowledgeBase/Articles/Pages/TheCommunity';

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

  const setGA = () => {
    ReactGA.initialize('UA-172956970-6');
    ReactGA.pageview('Init page view');
  };

  useEffect(() => {
    setGA();
  }, []);

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
                <Route path='/mission' element={<GoFundMe />}></Route>
                <Route path='/legal' element={<Legal />}></Route>
                <Route path='/advice' element={<Advice />}></Route>
                <Route path='/support-me' element={<SupportMe />}></Route>
                <Route path='/updates' element={<Updates />}></Route>
                <Route path='/todo' element={<Todo />}></Route>
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
                <Route
                  path='/knowledge-base'
                  element={<KnowledgeBase />}></Route>
                <Route
                  path='/knowledge-base/what-is-RBM'
                  element={<WhatIsRBM />}></Route>
                <Route
                  path='/knowledge-base/GoFundMe'
                  element={<GoFundMe />}></Route>
                <Route
                  path='/knowledge-base/TheCommunity'
                  element={<TheCommunity />}></Route>
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
