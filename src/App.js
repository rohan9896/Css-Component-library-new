import './App.css';
import './Components/Buttons'
import Buttons from './Components/Buttons';
import FaceAvatar from './Components/FaceAvatar'
import AlphabetsAvatar from './Components/AlphabetsAvatar'
import Alert from './Components/Alert'

function App() {
  return (
    <div className="App">
      <Buttons />
      <FaceAvatar />
      <AlphabetsAvatar />
      <Alert />
    </div>
  );
}

export default App;
