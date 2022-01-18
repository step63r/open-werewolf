import React from 'react';
import { useNavigate } from 'react-router-dom';

const App: React.FC = () => {
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    navigate("/join");
  };
  const handleCreateRoom = () => {
    navigate("/create");
  };

  return (
    <>
      <h1 className="d-flex justify-content-center m-5">Open Werewolf</h1>
      <div className="d-flex justify-content-center mb-3">
        <button className="btn btn-primary" onClick={handleJoinRoom}>Join Room</button>
      </div>
      <div className="d-flex justify-content-center mb-3">
      <button className="btn btn-outline-primary" onClick={handleCreateRoom}>Create Room</button>
      </div>
    </> 
  );
};

export default App;
