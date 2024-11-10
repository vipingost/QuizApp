import './cricket.css'
import { useContext, useState } from 'react';
import { Progress,Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/nav';
import DataContext from '../../Context/button';

const Cricket =()=>{
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const nav=useNavigate()
    const questionData = [
        
            {
              question: 'Who is known as the "God of Cricket"?',
              options: ['Sachin Tendulkar', 'Brian Lara', 'Ricky Ponting', 'Virat Kohli'],
              answer: 'Sachin Tendulkar',
            },
            {
              question: 'Which country won the ICC Cricket World Cup in 2019?',
              options: ['India', 'England', 'Australia', 'New Zealand'],
              answer: 'England',
            },
            {
              question: 'Who holds the record for the highest individual score in an ODI match?',
              options: ['Virender Sehwag', 'Chris Gayle', 'Rohit Sharma', 'AB de Villiers'],
              answer: 'Rohit Sharma',
            },
            {
              question: 'Who is the captain of the Indian Test cricket team as of 2023?',
              options: ['Virat Kohli', 'Rohit Sharma', 'KL Rahul', 'Hardik Pandya'],
              answer: 'Rohit Sharma',
            },
            {
              question: 'Which bowler holds the record for the most wickets in Test cricket?',
              options: ['Shane Warne', 'Muttiah Muralitharan', 'James Anderson', 'Anil Kumble'],
              answer: 'Muttiah Muralitharan',
            },
            {
              question: 'Which cricketer is known as "The Wall"?',
              options: ['Rahul Dravid', 'Sachin Tendulkar', 'Jacques Kallis', 'Brian Lara'],
              answer: 'Rahul Dravid',
            },
            {
              question: 'Who scored the fastest century in T20 International cricket?',
              options: ['Chris Gayle', 'David Miller', 'AB de Villiers', 'Aaron Finch'],
              answer: 'David Miller',
            },
            {
              question: 'Which country hosted the 2003 ICC Cricket World Cup?',
              options: ['India', 'South Africa', 'Australia', 'West Indies'],
              answer: 'South Africa',
            },
            {
              question: 'Who is the only cricketer to have 100 international centuries?',
              options: ['Ricky Ponting', 'Sachin Tendulkar', 'Virat Kohli', 'Kumar Sangakkara'],
              answer: 'Sachin Tendulkar',
            },
            {
              question: 'Which country has won the most ICC T20 World Cups?',
              options: ['India', 'Australia', 'West Indies', 'Pakistan'],
              answer: 'West Indies',
            },
            {
              question: 'Who was the first player to score a double century in ODIs?',
              options: ['Virender Sehwag', 'Rohit Sharma', 'Chris Gayle', 'Sachin Tendulkar'],
              answer: 'Sachin Tendulkar',
            },
            {
              question: 'Which Indian cricketer is known as "Captain Cool"?',
              options: ['Virat Kohli', 'Kapil Dev', 'Rohit Sharma', 'MS Dhoni'],
              answer: 'MS Dhoni',
            },
          
          
  ];
  
  
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
export default Cricket