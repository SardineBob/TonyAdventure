import './App.css';
import React, { useState } from 'react';
import ChooseJob from './component/chooseJob';
import Index from './component/index';
import Main from './component/main';
import GameOver from './component/gameOver';
import GameEnd from './component/gameEnd';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
  const [ctrl, setCtrl] = useState({ mode: "index", panel: "plot" });
  const [status, setStatus] = useState({
    jobData: undefined,
    job: "",
    hp: 0,
    maxhp: 0,
    str: 0,
    int: 0,
    agi: 0,
    vit: 0,
    skillNormal: '003',
    skill1: '005',
    skill2: '007',
    skillBig: '010',
    item: '',
  });

  return (
    <AppContext.Provider value={{ ctrl, setCtrl, status, setStatus }}>
      <div className="App">
        <header className="App-header">
          {
            ctrl.mode === "index" ? <Index /> :
              ctrl.mode === "chooseJob" ? <ChooseJob /> :
                ctrl.mode === "gameOver" ? <GameOver /> :
                  ctrl.mode === "gameEnd" ? <GameEnd /> :
                    ctrl.mode === "main" ? <Main /> : ''
          }
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
