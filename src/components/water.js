import React, { useState, useEffect } from 'react';
import './water.css';

const Water = (props) => {
  const [heightvalue, setheightvalue] = useState(0);
  
  const drank_liter=props.drank_liter;
  useEffect(() => {
    const backgroundcolors = props.backgroundcolors;
    const count=props.count;
    let x=props.x;
    
    // Count the number of 'cornflowerblue' elements in the backgroundcolors array
    const cornflowerblueCount = backgroundcolors.filter(color => color === 'cornflowerblue').length;

    // Calculate the height based on the count of 'cornflowerblue' elements
    if(x===1&&count===0)
    {
      
      setheightvalue(0);
      
    }
    
    else{
      let height = (cornflowerblueCount / backgroundcolors.length) * 100;
      setheightvalue(height);
      
    }
  //   for(var i=1;i<x;i++)
  // {
  //   if(i<=x)
  //   {
      
  //     setdrank_liter(drank_liter-0.25);
  //   }
  //   // else if(x===undefined)
  //   // {
  //   //   setdrank_liter(2);
  //   // }
  // }
    //console.log("this is x"+x);
    
    
    //console.log("height is " + height);
  }, [props.backgroundcolors,props.count,props.x]);

 
  return (
    
    <div>
      
      <h1>Goal:2 Litres</h1>
      <div className="cup">
        <div className="water-drank">
          <div className="color" style={{ height: `${heightvalue}%`, backgroundColor: "cornflowerblue" }}>
            <p className="remained_liter"><b>{drank_liter}L</b>Remained</p>
          </div>
        </div>
      </div>
      <p className="select">Select how many glasses of water have you drank</p>
    </div>
  );
}

export default Water;


