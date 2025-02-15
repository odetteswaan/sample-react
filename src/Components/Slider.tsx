import { useState
 } from 'react'
import './slider.css'
import {names} from './Data'
const Slider = () => {
    const[state,setState]=useState({s:0,e:5})
   const arr=names.slice(state.s,state.e)
    const handleIncrease=()=>{
        if(state.e<names.length){

            setState({s:state.s+1,e:state.e+1})
        }
    }
    const handleDecerease=()=>{
        if(state.s>0){

            setState({s:state.s-1,e:state.e-1})
        }
      }

  return (
    <div>
        <div style={{width:'50%',display:'flex',justifyContent:'space-between'}}>
            {arr.map((i)=>(
                <div className="item" key={i}>
                     {i}</div>
            ))}

        </div>
        <div style={{marginTop:'50px',gap:50,display:'flex'}}>
        <button className='btn' onClick={handleIncrease}>next name</button>
        <button className='btn' onClick={handleDecerease}>prev name</button>

        </div>
    </div>
  )
}

export default Slider