import React from 'react';
import './App.css';

function App() {
  const style = {
    color: '#46303a',
    font_size: '18px'
  }
  return (
    <div className='App'>
      <head>
        <meta charset="utf-8"></meta>
        <title>안단태 | Dantae An</title>
      </head>
      <body>
      <div className='App-head'>
        안단태 | Dantae An
      </div>
      <div className='App-body'>
        <h2 className='H'>
          Self-introduction
        </h2>
        <p>
          안녕하세요! 안단태의 개인 홈페이지에 오신 것을 환영합니다.<br></br>
          저는 서울대학교 컴퓨터공학부를 학사 졸업하고,
          현재 서울대학교 컴퓨터공학부 대학원의 휴먼-컴퓨터 인터랙션 연구실(HCIL)에
          소속되어 석·박사 통합과정을 밟고 있습니다.<br></br>
          제가 관심 있는 분야는 UX 개선 및 시각화입니다.
        </p>
        <p className='App-eng'>
          Hello! Welcome to Dantae An's personal homepage.<br></br>
          I'm currently a graduate student of Human-Computer Interaction Lab(HCIL),
          Dept. of Computer Science and Engineering at Seoul National University<br></br>
          I'm interested in improving user experience(UX) and visualization.
        </p>
        <h2 className='H'>
          Contact
        </h2>
        <ul>
          <li>
            메일 | <a className='App-eng'>e-mail</a>: <a href="mailto:dtan@hcil.snu.ac.kr">dtan@hcil.snu.ac.kr</a>
          </li>
          <li>
            GitHub: <a href="https://github.com/salt26">https://github.com/salt26</a>
          </li>
        </ul>
        <h2 className='H'>
          Education
        </h2>
        <h4>
          석사 | <a className='App-eng'>Master</a>
        </h4>
        <ul>
          <li>
            <a href="http://www.snu.ac.kr/index.html">서울대학교</a> | <a className='App-eng'>Seoul National University</a>
          </li>
          <li>
            <a href="https://cse.snu.ac.kr/">컴퓨터공학부</a> | <a className='App-eng'>Dept. of Computer Science and Engineering</a>
          </li>
          <li>
            <a href="http://hcil.snu.ac.kr/">휴먼-컴퓨터 인터랙션 연구실</a> | <a className='App-eng'>Human-Computer Interaction Laboratory</a>
          </li>
          <li>
            2019.09 ~ 현재 | <a className='App-eng'>Sep. 2019 ~ current</a>
          </li>
        </ul>
        <h4>
          학사 | <a className='App-eng'>Bachelor</a>
        </h4>
        <ul>
          <li>
            <a href="http://www.snu.ac.kr/index.html">서울대학교</a> | <a className='App-eng'>Seoul National University</a>
          </li>
          <li>
            <a href="https://cse.snu.ac.kr/">컴퓨터공학부</a> | <a className='App-eng'>Dept. of Computer Science and Engineering</a>
          </li>
          <li>
            2015.03 ~ 2019.08 | <a className='App-eng'>Mar. 2015 ~ Aug. 2019</a>
          </li>
        </ul>
        <h2 className='H'>
          Languages
        </h2>
        <ul>
          <li>
            한국어 | <a className='App-eng'>Korean, native</a>
          </li>
          <li>
            영어 약간 | <a className='App-eng'>English, a little bit</a>
          </li>
          <li>
            중국어 입문 | <a className='App-eng'>Mandarin Chinese, beginner</a>
          </li>
        </ul>
        <h2 className='H'>
          Skills
        </h2>
        <h4>
          프로그래밍 | <a className='App-eng'>Programming</a>
        </h4>
        <ul>
          <li>
            C# (Unity, Windows Forms)
          </li>
          <li>
            Python, Java, C/C++, JavaScript(React), Matlab, ...
          </li>
        </ul>
        <h4>
          기타 | <a className='App-eng'>Others</a>
        </h4>
        <ul>
          <li>
            Git
          </li>
          <li>
            NoteWorthy Composer 2
          </li>
          <li>
            Audacity
          </li>
          <li>
            PaintDotNet
          </li>
        </ul>
        <h2 className='H'>
          Interests
        </h2>
        <ul>
          <li>
            게임 개발 | <a className='App-eng'>Game development</a>
          </li>
          <li>
            작곡 | <a className='App-eng'>Musical composition</a>
          </li>
        </ul>
        <h2 className='H'>
          Projects
        </h2>
        <h4>
          석사 | <a className='App-eng'>Master</a>
        </h4>
        <ul>
          <li>
            <a href="https://github.com/SNU-HCIL/CHI-SGC-2019">CHI Student Game Competition 2019</a>
            <ul>
              <li>JavaScript</li>
              <li>2019.08 ~ 현재 | <a className='App-eng'>Aug. 2019 ~ current)</a></li>
            </ul>
          </li>
        </ul>
        <h4>
          학사 | <a className='App-eng'>Bachelor</a>
        </h4>
        <ul>
          <li>
            <a href="https://github.com/salt26/chordingcoding">ChordingCoding</a>
            <ul>
              <li>타이핑 작업이 곧 작곡이 됩니다! | <a className='App-eng'>Typing becomes composing music!</a></li>
              <li>C#, Windows Forms</li>
              <li>2019.06 ~ 2019.06 | <a className='App-eng'>Finished on Jun. 2019</a></li>
            </ul>
          </li>
          <li>
            <a href="https://github.com/salt26/the-sworzard-of-orb">오브의 마검사</a> | <a className='App-eng'>The Sworzard of Orb</a>
            <ul>
              <li>2D 턴제 RPG 게임 | <a className='App-eng'>2D turn-based role-playing game</a></li>
              <li>처음에 주어진 장비만을 오브로 강화하여 성장 | <a className='App-eng'>Enchant your initial equipments with orbs</a></li>
              <li>C#, Unity</li>
              <li>2018.10 ~ 2019.03 | <a className='App-eng'>Oct. 2018 ~ Mar. 2019)</a></li>
            </ul>
          </li>
        </ul>
        <h2 className='H'>
          Publications
        </h2>
          <ul>
            <li>
              준비중입니다. | <a className='App-eng'>There is no publication yet.</a>
            </li>
          </ul>
      </div>
      </body>
      <foot>

      </foot>
    </div>
  );
}

export default App;
