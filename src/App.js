import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import MoviePage from './pages/MoviePage';
import TvShow from './pages/TvShow';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<LoginPage/>}/>
        <Route exact path='/signup' element={<SignUpPage/>}/>
        <Route exact path='/' element={<Netflix/>}/>
        <Route exact path='/player' element={<Player/>}/>
        <Route exact path='/movie' element={<MoviePage/>}/>
        <Route exact path='/tv' element={<TvShow/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
