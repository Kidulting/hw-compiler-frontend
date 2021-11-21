import React from 'react';
import styled from 'styled-components';

function User() {
  return (
    <Wrapper>
      <AccountWrapper>
        <div>B55555님</div>
        <button type="button">로그아웃</button>
      </AccountWrapper>
      <div>내가 돌린 결과</div>
      <div>
        <button type="button">내 코드 보기</button>
        <button type="button">등록하기</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: fit-content;
  padding: 10px 0px 10px 0px;
  // 임시 테두리, 추후 삭제 필요
  border: green 1px solid;
`;

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default User;
