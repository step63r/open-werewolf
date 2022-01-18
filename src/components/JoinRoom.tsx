import React from "react";
import { useNavigate } from "react-router-dom";

const JoinRoom: React.FC = () => {
  const navigate = useNavigate();

  const handleJoin = () => {
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <form>
        <div className="form-group mb-3">
          <label htmlFor="formUserName">User Name</label>
          <input className="form-control" id="formUserName" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="formRoomId">Room ID</label>
          <input className="form-control" id="formRoomId" />
        </div>

        <button className="btn btn-primary" type="submit" onClick={handleJoin}>Join</button>
        <button className="btn btn-light" type="reset" onClick={handleBack}>Back</button>
      </form>
    </>
  );
};

export default JoinRoom;
