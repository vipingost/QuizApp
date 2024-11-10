import './cricket.css'
import { useState,useContext } from 'react';
import { Progress,Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../Context/button';
import Nav from '../Nav/nav';

const Football =()=>{
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const nav=useNavigate()
    const questionData = [
        {
          question: 'Who won the FIFA World Cup in 2018?',
          options: ['Brazil', 'Germany', 'France', 'Argentina'],
          answer: 'France',
        },
        {
          question: 'Which player has won the most Ballon d\'Or awards?',
          options: ['Cristiano Ronaldo', 'Lionel Messi', 'Michel Platini', 'Ronaldo Nazário'],
          answer: 'Lionel Messi',
        },
        {
          question: 'Which country has won the most FIFA World Cups?',
          options: ['Italy', 'Brazil', 'Germany', 'Argentina'],
          answer: 'Brazil',
        },
        {
          question: 'Which club does Cristiano Ronaldo play for as of 2023?',
          options: ['Manchester United', 'Juventus', 'Al Nassr', 'Real Madrid'],
          answer: 'Al Nassr',
        },
        {
          question: 'Who is known as "The Pharaoh" in football?',
          options: ['Mohamed Salah', 'Zlatan Ibrahimović', 'Lionel Messi', 'Cristiano Ronaldo'],
          answer: 'Mohamed Salah',
        },
        {
          question: 'Who scored the "Hand of God" goal in the 1986 World Cup?',
          options: ['Diego Maradona', 'Lionel Messi', 'Pele', 'Zico'],
          answer: 'Diego Maradona',
        },
        {
          question: 'Which club has won the most UEFA Champions League titles?',
          options: ['Real Madrid', 'Barcelona', 'Liverpool', 'Bayern Munich'],
          answer: 'Real Madrid',
        },
        {
          question: 'Which country hosted the 2022 FIFA World Cup?',
          options: ['Russia', 'Qatar', 'Brazil', 'South Africa'],
          answer: 'Qatar',
        },
        {
          question: 'Who holds the record for the most goals in a single Premier League season?',
          options: ['Harry Kane', 'Alan Shearer', 'Mohamed Salah', 'Sergio Agüero'],
          answer: 'Mohamed Salah',
        },
        {
          question: 'Which footballer is known as "The Egyptian King"?',
          options: ['Mohamed Salah', 'Hossam Hassan', 'Trezeguet', 'Ahmed Hegazi'],
          answer: 'Mohamed Salah',
        },
        {
          question: 'Who won the Golden Boot at the 2018 FIFA World Cup?',
          options: ['Harry Kane', 'Kylian Mbappé', 'Cristiano Ronaldo', 'Romelu Lukaku'],
          answer: 'Harry Kane',
        },
        {
          question: 'Which country won the UEFA Euro 2020?',
          options: ['England', 'Italy', 'France', 'Portugal'],
          answer: 'Italy',
        }
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
export default Football