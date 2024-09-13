import { useContext } from 'react';
import { AppContext } from '../App';
import img開頭Tony失業在街頭 from '../images/開頭-Tony失業在街頭.png';
import { Button } from 'react-bootstrap';
import '../scss/App.scss'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function PlotPanel() {
  const { ctrl, setCtrl, status, setStatus } = useContext(AppContext);
  return (
    <>
      <Container className="panel">
        <Row>
          <Col md={4}>
            <Image src={img開頭Tony失業在街頭} className="img-thumbnail" />
          </Col>
          <Col md={8}>
            <Row style={{ minHeight: '85%' }}>
              不僅如此，方文琳也透露之前看到江蕙因為藥物治療，身體、臉部都浮腫，讓她看了忍不住抱著好友大哭一場，沒想到江蕙反過來安慰她「哭啥啦
            </Row>
            <Row style={{ minHeight: '15%' }}>
              <div className="d-flex justify-content-around align-items-end gap-2">
                <Button className="flex-fill" variant="primary" size="lg" type="button" onClick={() => setCtrl(item => ({ ...item, panel: "fight" }))}>開始遊戲</Button>
                <Button className="flex-fill" variant="primary" size="lg" type="button" onClick={() => setCtrl(item => ({ ...item, mode: "chooseJob" }))}>開始遊戲</Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlotPanel;
