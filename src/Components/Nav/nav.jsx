import { useContext } from 'react'
import './nav.css'
import { RadarChartOutlined } from '@ant-design/icons'
import DataContext from '../../Context/button'

const Nav =()=>{

    const {themeChange} = useContext(DataContext)
    const {theme}= useContext(DataContext)
    return <>
    <div style={{backgroundColor:theme==='dark'?'black':'white', color:theme==='dark'?'white':'black'}} className="nav">
    <RadarChartOutlined className='icon' />
    <h1>Welcome to the Quiz</h1>
    <button style={{backgroundColor:theme==='dark'?'white':'black', color:theme==='dark'?'black':'white'}} onClick={()=>themeChange()} className='btn'>THEME</button>
    </div>
    
    </>
}

export default Nav