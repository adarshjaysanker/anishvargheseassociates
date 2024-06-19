import './App.css';
import Footer from './components/Foot/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
