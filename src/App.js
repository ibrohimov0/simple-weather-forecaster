import './App.css';
import Navbar from './components/navbar';
import CurrentLocation from './features/currentLocation';
import { DataRouter } from './shared/config/reactRouter';

function App() {
  const {location,error} = CurrentLocation()
  window.localStorage.setItem("location",JSON.stringify(location))
  if(error) {
    alert("Pls enable location.")
  }

  const theme = window.localStorage.getItem("theme")
  document.documentElement.setAttribute("data-theme",theme || "light")
  return (
    <div className='App'>
      <Navbar/>
      <DataRouter />
    </div>
  );
}

export default App;