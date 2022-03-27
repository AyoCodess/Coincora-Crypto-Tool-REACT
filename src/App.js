import './App.scss';
import { React, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarLayout from './AppFrame/NavbarLayout';
import Dashboard from './AppFrame/Dashboard';
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
import Todo from './Pages/Updates/Todo/Todo';
import Mission from './Pages/Mission/Misson';

import ReactGA from 'react-ga';
import KnowledgeBase from './Pages/KnowledgeBase';
import WhatIsRBM from './Pages/KnowledgeBase/Articles/Pages/WhatIsRBM.';
import GoFundMe from './Pages/KnowledgeBase/Articles/Pages/GoFundMe';
import TheCommunity from './Pages/KnowledgeBase/Articles/Pages/TheCommunity';
import PageBackground from './AppFrame/PageBackground';
import BetaLog from './Pages/Updates/BetaLog';

function App() {
  const [openDisclaimer, setOpenDisclaimer] = useState(true);

  // - Modal Logic for newbies
  const [open, setOpen] = useState(false);
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
            <div>
              <Dashboard />
              {/* // - background art */}
              <div className='bg-white px-4 overflow-hidden sm:px-6 lg:px-8'>
                <div className='relative max-w-7xl mx-auto'>
                  <svg
                    className='absolute left-[70rem] transform translate-x-1/2'
                    width={404}
                    height={404}
                    fill='none'
                    viewBox='0 0 404 404'
                    aria-hidden='true'>
                    <defs>
                      <pattern
                        id='85737c0e-0916-41d7-917f-596dc7edfa27'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'>
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={404}
                      fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
                    />
                  </svg>
                  <svg
                    className='absolute right-[70rem] bottom-0 transform -translate-x-1/2'
                    width={404}
                    height={404}
                    fill='none'
                    viewBox='0 0 404 404'
                    aria-hidden='true'>
                    <defs>
                      <pattern
                        id='85737c0e-0916-41d7-917f-596dc7edfa27'
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits='userSpaceOnUse'>
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className='text-gray-200'
                          fill='currentColor'
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={404}
                      height={404}
                      fill='url(#85737c0e-0916-41d7-917f-596dc7edfa27)'
                    />
                  </svg>
                  {/* // - background art ends */}
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' v>
                    <Routes>
                      <Route path='*' exact element={<GoogleForm />}></Route>
                      <Route
                        path='/coin-predict'
                        element={
                          <CoinForecast open={open} setOpen={setOpen} />
                        }></Route>
                      <Route
                        path='/quick-predict'
                        element={<QuickCompare />}></Route>
                      <Route path='/mission' element={<GoFundMe />}></Route>
                      <Route path='/legal' element={<Legal />}></Route>
                      <Route path='/advice' element={<Advice />}></Route>
                      <Route path='/support-me' element={<SupportMe />}></Route>
                      <Route path='/updates' element={<Updates />}></Route>
                      <Route path='/todo' element={<Todo />}></Route>
                      <Route path='/betalog' element={<BetaLog />}></Route>
                      <Route
                        path='/feature-request'
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
                  </div>
                  <div className='h-[3rem] FOOTER'></div>
                  {!doesLocalStorageExist && (
                    <CookiesBanner
                      open={openDisclaimer}
                      setOpen={setOpenDisclaimer}
                      understand={understand}
                      setUnderstand={setUnderstand}
                    />
                  )}
                </div>
              </div>
            </div>
          </DataProvider>
        </ScrollToTop>
      </ThemeProvider>
    </>
  );
}

export default App;
