import { useContext } from 'react';
import { AppContext } from '../App';
import logo from '../images/TonyLogo.jpg';
import { Button } from 'react-bootstrap';


function Index() {
  const { setCtrl } = useContext(AppContext);
  return (
    <>
      <img src={logo} class="img-thumbnail" width="20%" height="20%" alt="logo" />
      <p>
        Tony 大冒險
      </p>
      <Button variant="primary" size="lg" type="button" onClick={() => setCtrl(item => ({ ...item, mode: "chooseJob" }))}>開始遊戲</Button>
    </>
  );
}

export default Index;
