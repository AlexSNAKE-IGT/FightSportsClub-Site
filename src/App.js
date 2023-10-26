import { BrowserRouter as Router} from "react-router-dom";
import { LocaleProvider } from './assets/localization/localeContext';

import "./App.css";

import MainPage from './pages/MainPage/MainPage.jsx';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';

function App() {
  return (
    <LocaleProvider>   
      <Router>
        <Header />
        <MainPage />
        <Footer />
      </Router>      
    </LocaleProvider>
  );
}

export default App;
