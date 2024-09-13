import { useContext } from 'react';
import { AppContext } from '../App';
import img怪物綠龍 from '../images/怪物-林董.png';
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
          <Col md={7}>
            <Row style={{ minHeight: '100%' }}>
              <div>Tony使用突刺，造成林董100點傷害。</div>
              <div>林董正在集氣，膀胱快爆了，使出劉式尿息，Tony受到不小的傷害。</div>
              <div>Tony使用了紅色藥水，但是太臭了，他喝不下去，沒有恢復體力。</div>
              <div>Tony使用了重擊，林董開瑪莎拉蒂跑走了，沒打到，所以我說，你應該選法師。</div>
            </Row>
          </Col>
          <Col md={5}>
            <div class="progress progress-bar-vertical">
              <div class="progress-bar" role="progressbar" style={{ height: '70%' }}></div>
            </div>
            <Image src={img怪物綠龍} className="img-thumbnail" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default PlotPanel;
