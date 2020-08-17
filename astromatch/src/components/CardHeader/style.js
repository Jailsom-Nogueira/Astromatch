import styled from 'styled-components';
import { HappyHeartEyes } from '@styled-icons/boxicons-regular/HappyHeartEyes'; 
import { Trash } from '@styled-icons/boxicons-regular/Trash'; 

export const CardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgray;
  img{
    width: 40%;
  }
`;
export const AllMatchesIcon = styled(HappyHeartEyes)`
  width: 1.7rem;
  color: rebeccapurple;
  margin-right: 0.3rem;
  transition: width 0.5s;
  cursor: pointer;
  &:hover{
    width: 1.8rem;
    color: tomato;
  }
`;
export const CleacrMatchesIcon = styled(Trash)`
  width: 1.7rem;
  color: darkcyan;
  transition: width 0.5s;
  cursor: pointer;
  &:hover{
    width: 1.8rem;
    color: tomato;
  }
`;
