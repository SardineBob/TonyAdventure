import { useContext } from 'react';
import { AppContext } from '../App';
import img技能突刺 from '../images/技能-突刺.jpg';
import '../scss/App.scss'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function SkillPanel() {
  const { ctrl, setCtrl, status, setStatus } = useContext(AppContext);
  return (
    <>
      <Container className="panel">
        <Row className="skillPanel">
          <Col md={4}>
            這邊只有純文字，用一段劇情解說，讓讓你選技能
          </Col>
          <Col md={8} className="d-flex flex-column gap-2 justify-content-center">
            <Row>
              <Col md={2}>
                <Image src={img技能突刺} className="img-thumbnail" onClick={() => { setCtrl(item => ({ ...item, panel: "plot" })); }} />
              </Col>
              <Col md={10}>
                攻擊力增加12%
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Image src={img技能突刺} className="img-thumbnail" onClick={() => { setCtrl(item => ({ ...item, mode: "gameEnd" })); }} />
              </Col>
              <Col md={10}>
                攻擊力增加12%
              </Col>
            </Row>
            <Row>
              <Col md={2}>
                <Image src={img技能突刺} className="img-thumbnail" onClick={() => { setCtrl(item => ({ ...item, mode: "gameOver" })); }} />
              </Col>
              <Col md={10}>
                攻擊力增加12%
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SkillPanel;
