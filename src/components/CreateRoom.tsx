import React from "react";
import { useNavigate } from "react-router-dom";

const CreateRoom: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
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

        <button className="btn btn-primary" type="submit" onClick={handleCreate}>Create</button>
        <button className="btn btn-light" type="reset" onClick={handleBack}>Back</button>
      </form>
    </>
  );
};

export default CreateRoom;
