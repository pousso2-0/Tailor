import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import AppRoutes from './routes';
import "./assets/scss/socialv.scss"
import './assets/scss/custom.scss'
import "./assets/scss/customizer.scss"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import "choices.js/public/assets/styles/choices.min.css";
import "flatpickr/dist/flatpickr.css";
import { useDispatch } from 'react-redux';
import { setSetting } from './store/setting/actions'
import "./assets/custom/scss/socialv-custom.scss"
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext';

function App() {
  const dispatch = useDispatch()
  dispatch(setSetting())
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <AuthProvider>
          <UserProvider>
            <AppRoutes />
          </UserProvider>
        </AuthProvider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
