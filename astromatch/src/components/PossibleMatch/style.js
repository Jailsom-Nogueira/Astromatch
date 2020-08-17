import styled, { keyframes } from 'styled-components'

export const  swipeLeft = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }
  to {
    opacity: 0;
	  transform: translate(-200px) rotate(-20deg);
  }
`;

export const swipeRight = keyframes`
  from {
    opacity: 1;
	  transform: translate(0) rotate(0);
  }
  to {
    opacity: 0;
	  transform: translate(200px) rotate(20deg);
  }
`;

export const PossibleMatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 55vh;
  box-shadow: rgba(117, 117, 117, 0.77) 0px 2px 10px 0px;
  border-radius: 5px;
  padding: 0.5rem;
  margin: 0 auto;
  background-color: lightgrey;
  animation: ${props => props.sideToSwipe} 0.5s forwards;
  img{
    max-width: 100%;
    height: 75%;
    margin: 0 auto;
    border-radius: 5px;
    box-shadow: rgba(117, 117, 117, 0.77) 0px 2px 10px 0px;
  }
`;

export const PersonData = styled.div`
  display: flex;
  align-items: baseline;
`;

