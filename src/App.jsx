import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Notfound from './components/pages/Notfound/Notfound';

const Home = lazy(() => import('./components/pages/Home/Home'));
const Progalused = lazy(() => import('./components/pages/Progalused/Progalused'));
const IT1 = lazy(() => import('./components/pages/IT1/IT1'));
const IT2 = lazy(() => import('./components/pages/IT2/IT2'));
const Digioskused = lazy(() => import('./components/pages/Digioskused/Digioskused'));


function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path='/' element={<Suspense fallback={<Loader/>}><Home /></Suspense>} />
        <Route path='/progalused' element={<Suspense fallback={<Loader/>}><Progalused /></Suspense>} />
        <Route path='/it1' element={<Suspense fallback={<Loader/>}><IT1 /></Suspense>} />
        <Route path='/it2' element={<Suspense fallback={<Loader/>}><IT2 /></Suspense>} />
        <Route path='/digioskused' element={<Suspense fallback={<Loader/>}><Digioskused /></Suspense>} />
        <Route path='*' element={<Suspense fallback={<Loader/>}><Notfound /></Suspense>} />
      </Routes>

    </div>
  );
}

export default App;