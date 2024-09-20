import imgJobSworder from '../images/職業-戰士.png';
import imgSkill001 from '../images/skills/sworder/普-火劍攻擊.png';
import imgSkill002 from '../images/skills/sworder/普-冰劍攻擊.png';
import imgSkill003 from '../images/skills/sworder/普-雷劍攻擊.png';
import imgSkill004 from '../images/skills/sworder/技-大地之力.png';
import imgSkill005 from '../images/skills/sworder/技-無明的聖光.png';
import imgSkill006 from '../images/skills/sworder/技-雷神降體.png';
import imgSkill007 from '../images/skills/sworder/技-雙劍夾擊.png';
import imgSkill008 from '../images/skills/sworder/大-王者之劍.png';
import imgSkill009 from '../images/skills/sworder/大-神聖盾牌.png';
import imgSkill010 from '../images/skills/sworder/大-劍士的考驗.png';

export const sworderData = {
  job: "sworder",
  describe: "測試測試這是對於戰士的描述",
  image: imgJobSworder,
  maxhp: 115,
  str: 10,
  int: 2,
  agi: 3,
  vit: 5,
  sworderSkills: [
    {
      id: '001',
      type: 'normal',
      name: '火劍攻擊',
      describe: "這是火劍攻擊的描述",
      image: imgSkill001,
      atk: 1.8,
      cd: 0
    }, {
      id: '002',
      type: 'normal',
      name: '冰劍攻擊',
      describe: "這是冰劍攻擊的描述",
      image: imgSkill002,
      atk: 1.4,
      cd: 0
    }, {
      id: '003',
      type: 'normal',
      name: '雷劍攻擊',
      describe: "這是雷劍攻擊的描述",
      image: imgSkill003,
      atk: 1.6,
      cd: 0
    }, {
      id: '004',
      type: 'skill',
      name: '大地之力',
      describe: "這是大地之力的描述",
      image: imgSkill004,
      atk: 3.7,
      cd: 4
    }, {
      id: '005',
      type: 'skill',
      name: '無明的聖光',
      describe: "這是無明的聖光的描述",
      image: imgSkill005,
      atk: 4.2,
      cd: 5
    }, {
      id: '006',
      type: 'skill',
      name: '雷神降體',
      describe: "這是雷神降體的描述",
      image: imgSkill006,
      atk: 2.6,
      cd: 2
    }, {
      id: '007',
      type: 'skill',
      name: '雙劍夾擊',
      describe: "這是雙劍夾擊的描述",
      image: imgSkill007,
      atk: 0.7,
      cd: 2
    }, {
      id: '008',
      type: 'big',
      name: '王者之劍',
      describe: "這是王者之劍的描述",
      image: imgSkill008,
      atk: 5,
      cd: 7
    }, {
      id: '009',
      type: 'big',
      name: '神聖盾牌',
      describe: "這是神聖盾牌的描述",
      image: imgSkill009,
      atk: 1.3,
      cd: 3
    }, {
      id: '010',
      type: 'big',
      name: '劍士的考驗',
      describe: "這是劍士的考驗的描述",
      image: imgSkill010,
      atk: 4.7,
      cd: 5
    }
  ]
}