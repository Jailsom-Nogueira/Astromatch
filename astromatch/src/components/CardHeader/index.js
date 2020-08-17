import React from 'react';
import logo from './img/logo-astromatch.png';
import {
  CardHeaderContainer, 
  CleacrMatchesIcon, 
  AllMatchesIcon
} from './style'

export default function CardHeader (props) {
  return(
    <CardHeaderContainer>
      <img src={logo} alt="Logo" />
      <div>
        <AllMatchesIcon onClick={props.onClickIconMatches}/>
        <CleacrMatchesIcon onClick={props.onClickIconClear}/>
      </div>
    </CardHeaderContainer>
  )
}


