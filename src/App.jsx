import './App.scss';
import { Route, Routes } from 'react-router-dom';
import MarketCapOf from './Pages/MarketCapOf/MarketCapOf';
import NavbarLayout from './UI/NavbarLayout';
import LandingPage from './Pages/LandingPage/Landing.jsx';
import { ThemeProvider } from '@emotion/react';
import theme from './MUIthemeOverrides';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarLayout>
          <Routes>
            <Route path='*' exact element={<LandingPage />}></Route>
            <Route path='/app' element={<MarketCapOf />}></Route>
          </Routes>
        </NavbarLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
