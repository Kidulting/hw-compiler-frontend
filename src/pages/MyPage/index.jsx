import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';

// TODO : 임시데이터, 추후 API로 받아오면 삭제할 예정
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
      <Content>
        <div>my page</div>
        <EasyLoginWrapper>간편 로그인</EasyLoginWrapper>
        <div>
          {hwList.map(hw => (
            <HWInfo>
              <div>{hw.id}</div>
              <div>{hw.link}</div>
            </HWInfo>
          ))}
        </div>
      </Content>
    </div>
  );
}

const Content = styled.div`
  float: left;
  padding: 10px;
`;

const EasyLoginWrapper = styled.div`
  /* TODO : 테두리는 추후 삭제할 예정 */
  border: 2px solid purple;
  height: 120px;
  width: 300px;
`;

const HWInfo = styled.div`
  /* TODO : 테두리는 추후 삭제할 예정 */
  border: 2px solid purple;
  margin: 10px 0;
  display: flex;
  column-gap: 30px;
`;

export default MyPage;
