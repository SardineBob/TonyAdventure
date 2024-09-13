import { useContext } from 'react';
import { AppContext } from '../App';
import gameEnd from '../images/GameEnd.jpg';
import { Button } from 'react-bootstrap';


function GameEnd() {
  const { ctrl, setCtrl, status, setStatus } = useContext(AppContext);
  return (
    <>
      <img src={gameEnd} class="img-thumbnail" width="30%" height="30%" alt="logo" />
      <p>
        Tony成功擊敗最終魔王，跟公主結婚，過著幸福快樂的日子。
      </p>
      <Button variant="primary" size="lg" type="button" onClick={() => setCtrl(item => ({ ...item, mode: "index" }))}>重新開始</Button>
    </>
  );
}

export default GameEnd;
