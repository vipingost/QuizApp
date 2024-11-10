import './gen.css';
import { useContext, useState } from 'react';
import { Progress, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/nav';
import DataContext from '../../Context/button';

const Gen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const nav = useNavigate();
  const questionData = [
    {
      question: 'Who is the captain of the Argentina football team?',
      options: ['Messi', 'Ronaldo', 'Zidane', 'Ozil'],
      answer: 'Messi',
    },
    {
      question: 'Who is the captain of the Portugal football team?',
      options: ['Messi', 'Ronaldo', 'Zidane', 'Ozil'],
      answer: 'Ronaldo',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: 'Mars',
    },
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'Who wrote "Hamlet"?',
      options: ['Shakespeare', 'Hemingway', 'Dickens', 'Tolkien'],
      answer: 'Shakespeare',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Blue Whale', 'Giraffe', 'Shark'],
      answer: 'Blue Whale',
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      options: ['Oxygen', 'Gold', 'Osmium', 'Zinc'],
      answer: 'Oxygen',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Pablo Picasso',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'What is the longest river in the world?',
      options: ['Amazon', 'Nile', 'Yangtze', 'Mississippi'],
      answer: 'Nile',
    },
    {
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      answer: '2',
    },
    {
      question: 'Which country hosted the 2016 Summer Olympics?',
      options: ['China', 'Brazil', 'UK', 'Russia'],
      answer: 'Brazil',
    },
    {
      question: 'In computing, what does "CPU" stand for?',
      options: [
        'Central Processing Unit',
        'Computer Power Unit',
        'Central Power Unit',
        'Control Processing Unit',
      ],
      answer: 'Central Processing Unit',
    },
  ];

  const handleAnswerClick = selectedAnswer => {
    const correctAnswer = questionData[currentQuestionIndex].answer;
    let newScore =score+1

    if (selectedAnswer === correctAnswer) {
      setScore(newScore);
      setFeedback('Correct!');
    } else {
      setFeedback('Wrong!');
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questionData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
      nav('/result', { state: { score:newScore, totalQuestion: questionData.length } });
    }
  };
  const handlePageChange = page => {
    setFeedback(null);
    setCurrentQuestionIndex(page - 1);
  };

 
  const { theme } = useContext(DataContext);
  return (
    <>
       <div style={{backgroundColor:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}} className="app">
     <Nav />
  
  <div className="container">
    
      <>
        <div className="question">
          <h1>{questionData[currentQuestionIndex].question}</h1>
        </div>
        <div className="options">
          {questionData[currentQuestionIndex].options.map((option, index) => (
            <button className='btn1' key={index} onClick={() => handleAnswerClick(option)}>
              {option}
            </button>
          ))}
        </div>
        {feedback && <div className="feedback">{feedback}</div>}
      </>
    
  </div>
  { (
    <Pagination className='pg'
      current={currentQuestionIndex + 1}
      total={questionData.length}
      onChange={handlePageChange}
      pageSize={1}
    />
  )}
</div>
    
    </>
  );
};
export default Gen;
