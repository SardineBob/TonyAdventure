import { useContext } from 'react';
import { AppContext } from '../App';
import gameOver from '../images/GameOver.jpg';
import { Button } from 'react-bootstrap';


function GameOver() {
  const { ctrl, setCtrl, status, setStatus } = useContext(AppContext);
  return (
    <>
      <img src={gameOver} class="img-thumbnail" width="30%" height="30%" alt="logo" />
      <p>
        Tony被二郎神招喚，往西天取經了。
      </p>
      <Button variant="primary" size="lg" type="button" onClick={() => setCtrl(item => ({ ...item, mode: "index" }))}>重新開始</Button>
    </>
  );
}

export default GameOver;
