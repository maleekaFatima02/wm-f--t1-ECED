import { Provider } from 'react-redux';
import './App.css';
import NavBar from './components/Navbar';
import Card from './components/Card';
import store from './store/index.js';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <NavBar className="top-bar"/>
    <div className="caption"><p>Tap the card to increment the count</p></div>
    <div className="card-body">
    <Card className="card"/>
    </div>
    </div>
    </Provider>
  );
}

export default App;
