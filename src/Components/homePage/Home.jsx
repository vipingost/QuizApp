import './Home.css'
import earth from '../../assets/earth.gif'
import idea from '../../assets/idea.gif'
import charity from '../../assets/charity.gif'
import ball from '../../assets/ball.gif'
import { useNavigate } from 'react-router-dom'
import Nav from '../Nav/nav'
import { useContext } from 'react'
import DataContext from '../../Context/button'


const Home =()=>{
    const navigate=useNavigate()
    const onCardClick1=()=>{
            navigate('/general')
    }
    const onCardClick2=()=>{
            navigate('/football')
    }
    const onCardClick3=()=>{
            navigate('/cricket')
    }
    const onCardClick4=()=>{
            navigate('/science')
    }

    const {theme} = useContext(DataContext)

    return (
    <>
    <Nav/>
        
        <div className="wrapper">
            <div style={{backgroundColor:theme==='dark'?'black':'white',color:theme=='dark'?'white':'black'}} className="container1">
                <div onClick={onCardClick1} className="card1 card">
                    <img className="img" src={earth} alt="General knowledge icon" />
                    <label>GENERAL</label>
                </div>    
                <div onClick={onCardClick2} className="card2 card">
                    <img className="img" src={charity} alt="Football icon" />
                    <label>FOOTBALL</label>
                </div>    
                <div onClick={onCardClick3} className="card3 card">
                    <img className="img" src={ball} alt="Cricket icon" />
                    <label>CRICKET</label>
                </div>    
                <div onClick={onCardClick4} className="card4 card">
                    <img className="img" src={idea} alt="Science icon" />
                    <label>SCIENCE</label>
                </div>    
            </div>  
        </div>
    </>
);

}


export default Home