import './App.css';
import DefaultHOC from './HOC/DefaultHOC';
import Home from './pages/HomePage'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {




  return (
    <>     
      <DefaultHOC path="/" exact component={Home} />
    </>
  );
}

export default App;
