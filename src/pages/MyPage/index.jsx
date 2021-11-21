import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';

const hwList = [
  { id: '과제1', link: '과제 링크 1' },
  { id: '과제2', link: '과제 링크 2' },
  { id: '과제3', link: '과제 링크 3' },
  { id: '과제4', link: '과제 링크 4' },
  { id: '과제5', link: '과제 링크 5' },
];

function MyPage() {
  return (
    <div>
      <Nav />
      <div>my page</div>
      <div>간편 로그인</div>
      <div>
        {hwList.map(hw => (
          <HWInfo>
            <div>{hw.id}</div>
            <div>{hw.link}</div>
          </HWInfo>
        ))}
      </div>
    </div>
  );
}

const HWInfo = styled.div`
  border: 2px solid purple;
  margin: 10px;
  display: flex;
  column-gap: 30px;
`;

export default MyPage;
