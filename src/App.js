/**
    * @description      : 
    * @author           : ellen
    * @group            : 
    * @created          : 16/04/2023 - 18:08:46
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/04/2023
    * - Author          : ellen
    * - Modification    : 
**/

import { Auth } from './components/auth';
import { useState, useRef } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
   // set up more authentication for the user
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState(null);
  const roomInputRef = useRef(null);


  
    // if the user is not authenicated
  if (!isAuth) {

  return (
    <div className="App">
       <Auth />
       </div>
  );
  }
    return (
    <div> 
      { room ? (
      <div> Chat </div> 
      ): (
      <div className="room">
         <label>Enter Room Name: </label>
         <input ref={roomInputRef} />
         <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
         </div> 
         )}
         </div>  
    );  
}

export default App;


