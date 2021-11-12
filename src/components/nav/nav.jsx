import React from 'react';
import styled from 'styled-components';
import User from './User';
import BoardList from '../board/BoardList';

function Nav() {
  return (
    <Wrapper>
      <User />
      <BoardList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px;
  width: 300px;
  height: 100%;
  // 임시 테두리, 추후 삭제 필요
  border: red 1px solid;
`;

export default Nav;
