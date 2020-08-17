import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl, user } from '../../constants/axios';
import { 
  AllMatchsContainer, 
  MathList, 
  MatchAvatar 
} from './style'
import Loader from '../Loader';

export default function AllMatches (props) {
  const [myMatches, setMyMatches] = useState([]);
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
      axios
      .get(`${baseUrl}${user}/matches`)
      .then( response => {

        setMyMatches(response.data.matches);
        setLoading(false)

      })
      .catch( err => {
        alert('Não foi possível realizar a ação, erro: ' + err.data);
      })
  }, [props.emptyList]);

  const isLoading = loading ? 
    (<Loader />) 
    : 
    (<MathList>
      {myMatches.map(match => {
        return(
          <MatchAvatar key={match.id}>
            <img src={match.photo} alt="Avatar" />
            <b>{match.name}</b>
          </MatchAvatar>
        )
      })}
    </MathList>)

  return(
    <AllMatchsContainer>
      {isLoading}
    </AllMatchsContainer>
  )
}
