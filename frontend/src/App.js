import SignUp from './pages/SignUp';
import './App.css';
import Login from './pages/Login';
import MemberUpdate from './pages/MemberUpdate';
import FindId from './pages/FindId';
import FindPw from './pages/FindPw';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Event from './pages/Event';
import KakaoAuthHandle from './component/KaKaoAuthHandle';
import ImageUploader from './component/ImageUploader';
import ProductSearch from './component/ProductSearch';

function App() {
  return (
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/MemberUpdate" element={<MemberUpdate />} />
        <Route path="/ImageUploader" element={<ImageUploader />} />
        <Route path="/ProductSearch" element={<ProductSearch />} />

        {/* 인가 코드 받기 */}
        <Route exact path="/user/kakao/callback" component={KakaoAuthHandle}/>
        </Routes>
      </Router>
    
  );
}

export default App;
