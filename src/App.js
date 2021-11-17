import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header text="shopping list" icon="🛒" className="Header" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
