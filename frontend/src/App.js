import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css';
import {Route} from "react-router-dom"
import Homepage from './pages/homepage';
import Chatpage from './pages/chatpage';
function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact ></Route>
      <Route path="/chats" component={Chatpage}></Route>
    </div>
  );
}

export default App;
