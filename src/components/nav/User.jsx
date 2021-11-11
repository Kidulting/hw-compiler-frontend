import React from 'react';
import styled from 'styled-components';

function User() {
  return (
    <Wrapper>
      <div>B55555님 반갑습니다</div>
      <div>내가 돌린 결과</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px 0px 10px 0px;
  // 임시 테두리, 추후 삭제 필요
  border: green 1px solid;
`;

export default User;
