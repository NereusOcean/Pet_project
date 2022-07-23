import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes/Routes';
import MainNavbar from './Layouts/MainNavbar';

function App() {
  return (
    <BrowserRouter>
      <div style={{background: "F6F3F3" }}>
        <MainNavbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}


export default App;
