
import { useRoutes } from 'react-router-dom';
import Home from './Pages/Home';
import Navigation from './Components/Navigation';
import Footer from './Components/footer/Footer';
import About from './Pages/About';
import Animal from './Pages/Animal';
import Contact from './Pages/Contact';
import Adopt from './Pages/Adopt';
import Menu from './Pages/Menu';

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/animal", element: <Animal /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/adopt", element: <Adopt /> },
    { path: "/menu", element: <Menu/> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
      <Footer />
    </div>
  );
  
}

export default App
