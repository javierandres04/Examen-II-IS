import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>


  );
}

export default App;
