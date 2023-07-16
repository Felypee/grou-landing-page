
import './index.css'
import {BrowserRouter}from 'react-router-dom';
import {  Features, Hero, LastAction, Navbar, SocialNetWorks} from './components';

const App=()=> {

  return (
  <BrowserRouter>
    <div className="relative z-0 bg-primary">

      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar/>
        <Hero/>
      </div>
      <Features/>
      <div className="relative z-0">
        <LastAction/>
        <SocialNetWorks/>
      </div>
    </div>
  </BrowserRouter>
  )
}

export default App
