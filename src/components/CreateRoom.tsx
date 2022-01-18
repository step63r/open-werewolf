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
          <input type="text" className="form-control" id="formUserName" />
        </div>

        {/* プレイヤー人数 */}
        <div className="form-group mb-3">
          <label htmlFor="formPlayers">Players</label>
          <input type="number" className="form-control" id="formPlayers" defaultValue={6} min={3} />
        </div>

        {/* 人狼の数 */}
        <div className="form-group mb-3">
          <label htmlFor="formWerewolves">Werewolves</label>
          <input type="number" className="form-control" id="formWerewolves" defaultValue={1} min={1} />
        </div>

        {/* 占い師の数 */}
        <div className="form-group mb-3">
          <label htmlFor="formFortuneTellers">FortuneTellers</label>
          <input type="number" className="form-control" id="formFortuneTellers" defaultValue={1} min={0} />
        </div>

        {/* 霊媒師の数 */}
        <div className="form-group mb-3">
          <label htmlFor="formMediums">Mediumns</label>
          <input type="number" className="form-control" id="formMediums" defaultValue={0} min={0} />
        </div>

        {/* 狩人の数 */}
        <div className="form-group mb-3">
          <label htmlFor="formHunters">Hunters</label>
          <input type="number" className="form-control" id="formHunters" defaultValue={0} min={0} />
        </div>

        {/* 狂人の数 */}
        <div className="form-group mb-3">
          <label htmlFor="formManiacs">Maniacs</label>
          <input type="number" className="form-control" id="formManiacs" defaultValue={0} min={0} />
        </div>

        {/* 村人の数 */}
        <div className="form-group mb-3">
          <label htmlFor="formVillagers">Villagers</label>
          <input type="number" disabled className="form-control" id="formVillagers" defaultValue={4} min={1} />
        </div>

        <button className="btn btn-primary" type="submit" onClick={handleCreate}>Create</button>
        <button className="btn btn-light" type="reset" onClick={handleBack}>Back</button>
      </form>
    </>
  );
};

export default CreateRoom;
