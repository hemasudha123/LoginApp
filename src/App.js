import './App.css';
import React, { useState } from 'react'
function App() {
  const [showLogin, setShowlogin] = useState(false)

  const handleLogin = () => {
    setShowlogin(!showLogin)
  }

  return (
    <div className="LoginContainer">
      <div className="loginparent">
        <h1 className='logintitle'>{showLogin ? "Please Login" : 'Welecome User'}</h1>
        <button onClick={handleLogin}>
          {showLogin ? 'Login' : 'Logout'}
        </button>
      </div>
    </div>
  );
}

export default App;
