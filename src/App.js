
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DocDetails from './components/DocDetails/DocDetails';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/react-doctors-app' element={<Main />}/>
        <Route path='/react-doctors-app/doctorDetails/:id' element={<DocDetails />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
