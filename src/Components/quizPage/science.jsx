import './cricket.css'
import { useState,useContext } from 'react';
import { Progress,Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../Context/button';
import Nav from '../Nav/nav';

const Science =()=>{
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const nav=useNavigate()
    const questionData = [
      {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'O2', 'CO2', 'NaCl'],
        answer: 'H2O',
      },
      {
        question: 'What planet is known as the Red Planet?',
        options: ['Earth', 'Venus', 'Mars', 'Jupiter'],
        answer: 'Mars',
      },
      {
        question: 'What gas do plants absorb from the atmosphere for photosynthesis?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        answer: 'Carbon Dioxide',
      },
      {
        question: 'What is the center of an atom called?',
        options: ['Electron', 'Proton', 'Nucleus', 'Neutron'],
        answer: 'Nucleus',
      },
      {
        question: 'What is the largest planet in our Solar System?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        answer: 'Jupiter',
      },
      {
        question: 'What is the main gas found in the air we breathe?',
        options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        answer: 'Nitrogen',
      },
      {
        question: 'What type of energy is produced by moving water?',
        options: ['Nuclear Energy', 'Thermal Energy', 'Hydroelectric Energy', 'Solar Energy'],
        answer: 'Hydroelectric Energy',
      },
      {
        question: 'Which part of the cell contains genetic material?',
        options: ['Nucleus', 'Cytoplasm', 'Cell membrane', 'Mitochondria'],
        answer: 'Nucleus',
      },
      {
        question: 'Who developed the theory of relativity?',
        options: ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla', 'Galileo Galilei'],
        answer: 'Albert Einstein',
      },
      {
        question: 'What is the boiling point of water at sea level in Celsius?',
        options: ['0°C', '50°C', '100°C', '150°C'],
        answer: '100°C',
      },
      {
        question: 'What organ in the human body is primarily responsible for filtering blood?',
        options: ['Liver', 'Kidney', 'Lungs', 'Heart'],
        answer: 'Kidney',
      },
      {
        question: 'What force keeps planets in orbit around the Sun?',
        options: ['Magnetic Force', 'Electromagnetic Force', 'Gravity', 'Friction'],
        answer: 'Gravity',
      },
    
    ]
  
  
    const handleAnswerClick = (selectedAnswer) => {
      const correctAnswer = questionData[currentQuestionIndex].answer;
      
     
      if (selectedAnswer === correctAnswer) {
        setScore(score + 1);
        setFeedback("Correct!");
      } else {
        setFeedback("Wrong!");
      }
  
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < questionData.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowScore(true);
        nav('/result', { state: { score, totalQuestion: questionData.length } });
      }
    };
    const handlePageChange = (page) => {
      setFeedback(null); 
      setCurrentQuestionIndex(page - 1);
    }

    const {theme} = useContext(DataContext)
   

    return <>
     <div style={{backgroundColor:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}} className="app">
      <Nav />
  
  <div className="container">
    
      <>
        <div className="question">
          <h1>{questionData[currentQuestionIndex].question}</h1>
        </div>
        <div className="options">
          {questionData[currentQuestionIndex].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
        </div>
        {feedback && <div className="feedback">{feedback}</div>}
      </>
    
  </div>
  {!showScore && (
    <Pagination className='pg'
      current={currentQuestionIndex + 1}
      total={questionData.length}
      onChange={handlePageChange}
      pageSize={1}
    />
  )}
</div>
    
    
    </>
}
export default Science