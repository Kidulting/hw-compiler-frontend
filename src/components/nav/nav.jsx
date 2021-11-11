import React from 'react';
import styled from 'styled-components';
import User from './User';

function Nav() {
  return (
    <Wrapper>
      <User />
      <div>게시판 목록이 들어갈 곳입니다</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 200px;
  height: 100%;
  // 임시 테두리, 추후 삭제 필요
  border: red 1px solid;
`;

export default Nav;
