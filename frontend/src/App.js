import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserStore from './context/UseStore';
import Home from './pages/Home';
import SBTIMain from './pages/SBTIMain';
import SBTIStartQuestion1 from './pages/SBTIpages/SBTIStartQuestion1';
import SBTIStartQuestion2 from './pages/SBTIpages/SBTIStartQuestion2';
import SBTI1 from './pages/SBTIpages/SBTI1';
import SBTI2 from './pages/SBTIpages/SBTI2';
import SBTI3 from './pages/SBTIpages/SBTI3';
import SBTI4 from './pages/SBTIpages/SBTI4';
import SBTI5 from './pages/SBTIpages/SBTI5';
import SBTI6 from './pages/SBTIpages/SBTI6';
import SBTI7 from './pages/SBTIpages/SBTI7';
import SBTI8 from './pages/SBTIpages/SBTI8';
import SBTI9 from './pages/SBTIpages/SBTI9';
import SBTI10 from './pages/SBTIpages/SBTI10';
import SBTI11 from './pages/SBTIpages/SBTI11';
import SBTI12 from './pages/SBTIpages/SBTI12';
import SBTI13 from './pages/SBTIpages/SBTI13';
import SBTI14 from './pages/SBTIpages/SBTI14';
import SBTI15 from './pages/SBTIpages/SBTI15';
import SBTI16 from './pages/SBTIpages/SBTI16';
import SBTI17 from './pages/SBTIpages/SBTI17';
import SBTI18 from './pages/SBTIpages/SBTI18';
import SBTI19 from './pages/SBTIpages/SBTI19';
import SBTI20 from './pages/SBTIpages/SBTI20';
import SBTIResult from './pages/SBTIResult';



function App() {
  return (
    // <UserStore> 태그를 가장 바깥에 씌운다.
    <UserStore>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/SBTIMain" element={<SBTIMain />}/>
          <Route path="/SBTIStartQuestion1" element={<SBTIStartQuestion1 />}/>
          <Route path="/SBTIStartQuestion2" element={<SBTIStartQuestion2 />}/>
          <Route path="/SBTI1" element={<SBTI1 />}/>
          <Route path="/SBTI2" element={<SBTI2 />}/>
          <Route path="/SBTI3" element={<SBTI3 />}/>
          <Route path="/SBTI4" element={<SBTI4 />}/>
          <Route path="/SBTI5" element={<SBTI5 />}/>
          <Route path="/SBTI6" element={<SBTI6 />}/>
          <Route path="/SBTI7" element={<SBTI7 />}/>
          <Route path="/SBTI8" element={<SBTI8 />}/>
          <Route path="/SBTI9" element={<SBTI9 />}/>
          <Route path="/SBTI10" element={<SBTI10 />}/>
          <Route path="/SBTI11" element={<SBTI11 />}/>
          <Route path="/SBTI12" element={<SBTI12 />}/>
          <Route path="/SBTI13" element={<SBTI13 />}/>
          <Route path="/SBTI14" element={<SBTI14 />}/>
          <Route path="/SBTI15" element={<SBTI15 />}/>
          <Route path="/SBTI16" element={<SBTI16 />}/>
          <Route path="/SBTI17" element={<SBTI17 />}/>
          <Route path="/SBTI18" element={<SBTI18 />}/>
          <Route path="/SBTI19" element={<SBTI19 />}/>
          <Route path="/SBTI20" element={<SBTI20 />}/>
          <Route path="/SBTIResult" element={<SBTIResult />}/>

        </Routes>
      </Router>
    </UserStore>
  
  );
}

export default App;
