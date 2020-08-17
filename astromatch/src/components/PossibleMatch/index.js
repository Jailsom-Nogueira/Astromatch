import React, { useState, useEffect } from 'react';
import { 
  PossibleMatchContainer, 
  PersonData, 
  swipeRight, 
  swipeLeft 
} from './style';

export default function PossibleMatch (props) {
  const [animation, setAnimation] = useState()

  useEffect(() => {
    if(props.sideToSwipe === "swipeRight"){
      setAnimation( swipeRight )
    }else if (props.sideToSwipe === "swipeLeft"){
      setAnimation( swipeLeft )
    }
  },[props.sideToSwipe]);

  return(
    <PossibleMatchContainer sideToSwipe={animation}> 
      <img src={props.photo} alt="Person" />
      <div>
        <PersonData>
          <h2>{props.name}, </h2>
          <h4>{props.age}</h4>
        </PersonData>
        <span>{props.bio}</span>
      </div>
    </PossibleMatchContainer>
  )
}
