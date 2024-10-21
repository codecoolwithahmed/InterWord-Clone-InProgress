// import logo from './logo.svg';
import { Button } from "antd";
import { Input } from "antd";
import './App.css';
// import AppRouter from "./config/router/approuter";
import Home from "./Pages/Home";
import './App.css';
import FAQ from './Components/FAQ';
import Footer from './Components/Footer';
import Mission from './Components/Mission';
import NavbarHeroSection from './Components/NavbarHeroSection';
import OurTeam from './Components/OurTeam';
import Partners from './Components/Partners';
import AppRouter from './config/router/approuter';


function App() {
  return (
    <div className="App">
      {/* <Button type='primary' danger >Submit</Button>
      <Input size="large" placeholder="large size" /> */}

<NavbarHeroSection />
      <div className='px-20'>

      <FAQ />
      <OurTeam />
      <Partners />
      <Mission />
      </div>
      <Footer />
      <AppRouter/>
      {/* <Home /> */}
    </div>
  );
}

export default App;
