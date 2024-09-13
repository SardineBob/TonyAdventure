import { useContext } from 'react';
import { AppContext } from '../App';
import { sworderData } from '../data/roleSworder'
import { thiefData } from '../data/roleThief'
import { megaData } from '../data/roleMega'
import { archerData } from '../data/roleArcher'
import '../scss/App.scss'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


function ChooseJob() {
  return (
    <>
      <Container>
        <Row>
          {RenderJobImage(sworderData)}
          {RenderJobImage(thiefData)}
          {RenderJobImage(megaData)}
          {RenderJobImage(archerData)}
        </Row>
        <Row>
          {RenderJobDescribe(sworderData)}
          {RenderJobDescribe(thiefData)}
          {RenderJobDescribe(megaData)}
          {RenderJobDescribe(archerData)}
        </Row>
        <Row>
          {RenderJobCapable(sworderData)}
          {RenderJobCapable(thiefData)}
          {RenderJobCapable(megaData)}
          {RenderJobCapable(archerData)}
        </Row>
      </Container>
    </>
  );
}

export function RenderJobImage(jobData) {
  const { setCtrl, setStatus } = useContext(AppContext);
  return (
    <Col md={3}>
      <Image src={jobData.image} className="img-thumbnail imgButton" onClick={() => {
        setStatus(item => ({ ...item, job: jobData.job, jobData: jobData, hp: jobData.maxhp, maxhp: jobData.maxhp, str: jobData.str, int: jobData.int, agi: jobData.agi, vit: jobData.vit }));
        setCtrl(item => ({ ...item, mode: "main" }));
      }} />
    </Col>
  );
}

function RenderJobDescribe(jobData) {
  return (
    <Col>
      {jobData.describe}
    </Col>
  );
}

function RenderJobCapable(jobData) {
  return (
    <Col>
      STR: {jobData.str} INT: {jobData.int} AGI: {jobData.agi} VIT: {jobData.vit}
    </Col>
  );
}

export default ChooseJob;
