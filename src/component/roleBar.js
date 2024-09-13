import { useContext } from 'react';
import { AppContext } from '../App';
import img職業None from '../images/職業-None.png';
import img技能突刺 from '../images/技能-突刺.jpg';
import img技能雙劍夾擊 from '../images/技能-雙劍夾擊.jpg';
import img技能火焰劍 from '../images/技能-火焰劍.jpg';
import img道具紅藥水 from '../images/道具-紅藥水.jpg';
import iconFist from '../images/fist.svg';
import iconBook from '../images/book.svg';
import iconBody from '../images/body.svg';
import iconShoe from '../images/shoe.svg';
import { Tooltip } from 'react-tooltip'
import '../scss/App.scss'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';


function RoleBar() {
  const { ctrl, setCtrl, status, setStatus } = useContext(AppContext);
  return (
    <>
      <Container className="roleBar">
        <Row>
          <Col md={1}>
            <Image src={status.jobData !== undefined ? status.jobData.image : img職業None} className="img-thumbnail" />
          </Col>
          <Col md={7}>
            <Row className="statusBar d-flex justify-content-start align-items-start gap-2">
              <Col className="d-flex justify-content-start align-items-center gap-2">
                <Image src={iconFist} className="statusIcon" />{status.str}
              </Col>
              <Col className="d-flex justify-content-start align-items-center gap-2">
                <Image src={iconBook} className="statusIcon" />{status.int}
              </Col>
              <Col className="d-flex justify-content-start align-items-center gap-2">
                <Image src={iconShoe} className="statusIcon" />{status.agi}
              </Col>
              <Col className="d-flex justify-content-start align-items-center gap-2">
                <Image src={iconBody} className="statusIcon" />{status.vit}
              </Col>
            </Row>
            <Row className="hpBar">
              <Col>
                <ProgressBar variant="danger" style={{ height: '10px' }} now={status.hp} min={0} max={status.maxhp}></ProgressBar>{status.hp}/{status.maxhp}
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <div className="d-flex justify-content-center align-items-center gap-2 skillBar">
              <Tooltip id="imgTooltip" style={{ backgroundColor: 'var(--rt-color-error)' }}></Tooltip>
              <Image src={img技能突刺} className="img-thumbnail" style={{ backgroundColor: 'var(--bs-red)', borderColor: 'var(--bs-red)' }} onClick={() => { setCtrl(item => ({ ...item, panel: "skill" })); }} data-tooltip-id="imgTooltip" data-tooltip-content="攻擊力上升120%，並攻擊三次咻咻殺死你" />
              <Image src={img技能雙劍夾擊} className="img-thumbnail" style={{ backgroundColor: 'var(--bs-green)', borderColor: 'var(--bs-green)' }} onClick={() => { setCtrl(item => ({ ...item, panel: "skill" })); }} data-tooltip-id="imgTooltip" data-tooltip-content="攻擊力上升220%，並攻擊兩次" />
              <Image src={img技能火焰劍} className="img-thumbnail" onClick={() => { setCtrl(item => ({ ...item, panel: "skill" })); }} />
              <Image src={img道具紅藥水} className="img-thumbnail" onClick={() => { setCtrl(item => ({ ...item, panel: "skill" })); }} />
              <Image src={img道具紅藥水} className="img-thumbnail" onClick={() => { setCtrl(item => ({ ...item, panel: "skill" })); }} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RoleBar;
