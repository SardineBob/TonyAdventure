import { useContext } from 'react';
import { AppContext } from '../App';
import img職業None from '../images/職業-None.png';
import img技能None from '../images/技能-None.png';
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


export default function RoleBar() {
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
              {getSkillImage(status.skillNormal, status.jobData.sworderSkills, 'green', () => { setCtrl(item => ({ ...item, panel: "skill" })); })}
              {getSkillImage(status.skill1, status.jobData.sworderSkills, 'red', () => { setStatus(item => ({ ...item, str: item.str+3 })); })}
              {getSkillImage(status.skill2, status.jobData.sworderSkills, 'red', () => { setCtrl(item => ({ ...item, panel: "skill" })); })}
              {getSkillImage(status.skillBig, status.jobData.sworderSkills, 'yellow', () => { setCtrl(item => ({ ...item, panel: "skill" })); })}
              <Image src={img道具紅藥水} className="img-thumbnail" onClick={() => { setCtrl(item => ({ ...item, panel: "skill" })); }} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

function getSkillImage(skillStatusId, skillCollection, iconBorderColor, onClickEvent) {
  const skill = {
    src: skillStatusId ? skillCollection.filter(item => item.id.includes(skillStatusId))[0].image : img技能None,
    describe: skillStatusId ? skillCollection.filter(item => item.id.includes(skillStatusId))[0].describe : '尚未取得技能'
  }
  return (
    <Image src={skill.src} className="img-thumbnail" style={{ backgroundColor: `var(--bs-${iconBorderColor})`, borderColor: `var(--bs-${iconBorderColor})` }} onClick={onClickEvent} data-tooltip-id="imgTooltip" data-tooltip-content={skill.describe} />
  )
}