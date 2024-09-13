import { useContext } from 'react';
import { AppContext } from '../App';
import '../scss/App.scss'
import RoleBar from './roleBar';
import PlotPanel from './plotPanel';
import FightPanel from './fightPanel';
import SkillPanel from './skillPanel';


function Main() {
  const { ctrl } = useContext(AppContext);
  return (
    <>
      <RoleBar />
      {
        ctrl.panel === "plot" ? <PlotPanel /> :
          ctrl.panel === "fight" ? <FightPanel /> :
            ctrl.panel === "skill" ? <SkillPanel /> :
              <RoleBar />
      }
    </>
  );
}

export default Main;
