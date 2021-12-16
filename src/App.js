import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MarketCapOf from './Pages/MarketCapOf/MarketCapOf.jsx';
import NavbarLayout from './UI/NavbarLayout.js';
import LandingPage from './Pages/LandingPage/Landing.js';
import { ThemeProvider } from '@emotion/react';
import theme from './MUIthemeOverrides';
import Footer from './UI/Footer/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLayout>
          <Routes>
            <Route path='*' exact element={<LandingPage />}></Route>
            <Route path='/app' element={<MarketCapOf />}></Route>
          </Routes>
          <Footer />
        </NavbarLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
