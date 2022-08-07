import './App.css';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Movies from '../Movies/Movies';

const App = () => {
  return (
    <div className="page">
      <Header/>
      <Movies/>
      {/*<Main/>*/}
      <Footer/>
    </div>
  );
};

export default App;
