import React,{useState} from 'react';
import './water.css';
import Water from './water';
const Child_water = () => {
  const defaultBackgroundColor='white';
  const[backgroundcolors,setbackgroundcolor]=useState([
    defaultBackgroundColor,
    defaultBackgroundColor,
    defaultBackgroundColor,
    defaultBackgroundColor,
    defaultBackgroundColor,
    defaultBackgroundColor,
    defaultBackgroundColor,
    defaultBackgroundColor,
  ]);
  const [drank_liter,setdrank_liter] = useState(2);
  let[count,setcount]=useState(0);
  let[colors,setcolor]=useState({backgroundColor:"white"});
  let [x,setx]=useState();
  const click=(e)=>{
    
    let x=e.target.getAttribute("data-value");
    x=Number(x);
    setx(x);
    const updatecourse=backgroundcolors.map((color,index1)=>index1<=Number(x)-1?"cornflowerblue":defaultBackgroundColor);
    setbackgroundcolor(updatecourse);
    const decreaseAmount =0.25 *x ;
    setdrank_liter(2-decreaseAmount);
    if(x>1)
    {
      setcolor({backgroundColor:"cornflowerblue"});
      setcount(0);
    }
    else if(x===1&&count===0)
    {
      setcolor({backgroundColor:"cornflowerblue"});
      setcount(1);
    }
    else if(count===1)
    {
      setcolor({backgroundColor:"white"});
      setcount(0);
      setdrank_liter(2);
      
    }
    console.log("value of x is"+x);
    console.log("count is"+count);
    // for(var i=1;i<=x;i++)
    // {
    //   if(i<=x)
    //   {
        
    //     setdrank_liter(drank_liter-0.25);
    //   }
    //   // else if(x===undefined)
    //   // {
    //   //   setdrank_liter(2);
    //   // }
    //   console.log("i am i"+i);
    // }
  }
  return (
    <div>
        <Water
             backgroundcolors={backgroundcolors}
             count={count}
             x={x}
             drank_liter={drank_liter}

        />
      <div className="drank">
        <div className='skeleton'>
        <div>
        <div className="water_drank_1"onClick={click}style={{backgroundColor:backgroundcolors[0]}&&colors}data-value="1"><span onClick={click} data-value="1" className='value'>250ml</span></div>
        <div className="water_drank_2"onClick={click}style={{backgroundColor:backgroundcolors[1]}}data-value="2"><span onClick={click} data-value="2" className='value'>250ml</span></div>
        <div className="water_drank_3"onClick={click}style={{backgroundColor:backgroundcolors[2]}}data-value="3"><span onClick={click} data-value="3" className='value'>250ml</span></div>
        <div className="water_drank_4"onClick={click}style={{backgroundColor:backgroundcolors[3]}}data-value="4"><span onClick={click} data-value="4" className='value'>250ml</span></div>
        </div>
        <br></br>
        <div>
        <div className="water_drank_5"onClick={click}style={{backgroundColor:backgroundcolors[4]}}data-value="5"><span onClick={click} data-value="5" className='value'>250ml</span></div>
        <div className="water_drank_6"onClick={click}style={{backgroundColor:backgroundcolors[5]}}data-value="6"><span onClick={click} data-value="6"className='value'>250ml</span></div>
        <div className="water_drank_7"onClick={click}style={{backgroundColor:backgroundcolors[6]}}data-value="7"><span onClick={click} data-value="7" className='value'>250ml</span></div>
        <div className="water_drank_8"onClick={click}style={{backgroundColor:backgroundcolors[7]}}data-value="8"><span onClick={click} data-value="8" className='value'>250ml</span></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Child_water;