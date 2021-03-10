import './App.css';
import './Components/Buttons'
import Buttons from './Components/Buttons';
import FaceAvatar from './Components/FaceAvatar'
import AlphabetsAvatar from './Components/AlphabetsAvatar'

function App() {
  return (
    <div className="App">
      <Buttons />
      <FaceAvatar />
      <AlphabetsAvatar />
    </div>
  );
}

export default App;
