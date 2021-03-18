import './App.css';
import './Components/Buttons'
import Buttons from './Components/Buttons';
import FaceAvatar from './Components/FaceAvatar'
import AlphabetsAvatar from './Components/AlphabetsAvatar'
import Alert from './Components/Alert'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import SocialMediaIcon from './Components/SocialIcon'

function App() {
  return (
    <div className="App">
      <Header />
      <Buttons />
      <hr />
      <FaceAvatar />
      <hr />
      <AlphabetsAvatar />
      <hr />
      <Alert />
      <hr />
      <Navbar />
      <hr />
      <SocialMediaIcon />
    </div>
  );
}

export default App;
