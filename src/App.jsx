import { useState } from 'react';
import './App.css';
import { Route,Router,Routes } from 'react-router';
import Home from './Components/homePage/Home'
import Gen from './Components/quizPage/gen';
import Cricket from './Components/quizPage/cricket';
import Science from './Components/quizPage/science';
import Football from './Components/quizPage/football';
import DataContext from './Context/button';
import Result from './Components/result/result';


const App = () => {
  const [theme,setTheme]=useState('light')
 
 const themeChange=()=>{
  setTheme(theme==='light'?'dark':'light')

 }

  return <>
 <DataContext.Provider value={{themeChange,theme}} >
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/general' element={<Gen/>} />
  <Route path='/cricket' element={<Cricket/>} />
  <Route path='/science' element={<Science/>} />
  <Route path='/football' element={<Football/>} />
  <Route path='/result' element={<Result/>} />

</Routes>
 </DataContext.Provider>

 

  </>
};

export default App;
