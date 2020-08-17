import React from 'react';
import { 
  CardButtonContainer,
   XIcon, 
   MatchIcon
} from './style'

export default function CardFooter (props) {
  return(
    <CardButtonContainer>
      <XIcon onClick={props.onClickRefuse}/>
      <MatchIcon onClick={props.onClickAccept}/>  
    </CardButtonContainer>
  )
}
