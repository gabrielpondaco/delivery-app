import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/" element={ <Login /> } />
      <Route path="/*" element={ <NotFound /> } />
    </Routes>
  );
}
export default App;
