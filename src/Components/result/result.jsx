
import React, { useContext } from 'react';
import './result.css'
import { Progress } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import DataContext from '../../Context/button';



const Result = () => {
  const nav = useNavigate();

  const location = useLocation();
  const { score, totalQuestion } = location.state || { score: 0, totalQuestion: 0 };

  const onHomeClick = () => {
    nav('/');
  };

    const {theme}= useContext(DataContext)
  return (
    <div style={{backgroundColor:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}}
      className="result"
    >
      <h1>Quiz Completed!</h1>
      <div className="rs">

      <Progress
        className="progress"
        type="dashboard"
        steps={10}
        percent={Math.ceil((score / totalQuestion) * 100)}
        trailColor="rgba(0, 0, 0, 0.06)"
        strokeWidth={20}
        
        size={370}
      />
      </div>
      <p>Your Score: {score} / {totalQuestion}</p>
      <button onClick={onHomeClick}>Home</button>
    </div>
  );
};

export default Result;
