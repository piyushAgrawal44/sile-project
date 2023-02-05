import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Alert from './components/sub_components/Alert';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import Pricing from './components/Pricing';
import Community from './components/resources/Community';
import ExpertCollective from './components/resources/ExpertCollective';
import Blog from './components/Blog';
import OurOffering from './components/services/OurOffering';
import PreviousProjects from './components/services/PreviousProjects';


function App() {
  const [appAlert, setAppAlert] = useState({
    bg: "purple-500",
    message: "Warning ! Somethng Wrong",
    display: "hidden"
  });

  const [progress, setProgress] = useState(10);
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}

        />
        <Navbar />


        <Routes>
          <Route exact path='/' element={<Home key="Home" setAppAlert={setAppAlert} setProgress={setProgress} />} />
          <Route exact path='/about' element={<About setAppAlert={setAppAlert} setProgress={setProgress} />} />
        
          <Route exact path='/ouroffering' element={<OurOffering setAppAlert={setAppAlert} setProgress={setProgress} />} />
          <Route exact path='/previousprojects' element={<PreviousProjects setAppAlert={setAppAlert} setProgress={setProgress} />} />
        
          <Route exact path='/pricing' element={<Pricing setAppAlert={setAppAlert} setProgress={setProgress} />} />
        
          <Route exact path='/blog' element={<Blog setAppAlert={setAppAlert} setProgress={setProgress} />} />
          <Route exact path='/community' element={<Community setAppAlert={setAppAlert} setProgress={setProgress} />} />
          <Route exact path='/experts-collective' element={<ExpertCollective setAppAlert={setAppAlert} setProgress={setProgress} />} />

          <Route exact path='/login' element={<Login setAppAlert={setAppAlert} setProgress={setProgress} />} />
          <Route exact path='/register' element={<Register setAppAlert={setAppAlert} setProgress={setProgress} />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
        <Alert bg={appAlert.bg} message={appAlert.message} display={appAlert.display} />
        <Footer />

      </Router>
    </>
  );
}

export default App;
