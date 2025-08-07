import './App.css';
import Navbar from './components/navbar';
import { DataRouter } from './shared/config/reactRouter';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <DataRouter />
    </div>
  );
}

export default App;