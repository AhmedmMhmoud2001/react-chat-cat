import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import './App.css';
import Welcome from './components/Welcome/Welcome';
import ChatBox from './components/ChatBox/ChatBox';
import NavBar from './components/NavBar/NavBar';


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
