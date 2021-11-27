import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';

// TODO : 임시데이터, 추후 API로 받아오면 삭제할 예정
const hwList = [
  { year: '2022', professor: '김한규', id: '1', link: '과제 링크 1' },
  { year: '2022', professor: '박준상', id: '2', link: '과제 링크 2' },
  { year: '2022', professor: '박준', id: '3', link: '과제 링크 3' },
  { year: '2022', professor: '송화윤', id: '4', link: '과제 링크 4' },
  { year: '2022', professor: '하란', id: '5', link: '과제 링크 5' },
];

function MyPage() {
  const [isEasyLogin, setIsEasyLogin] = useState(false);
  // TODO : 추후 handleEasyLoginButton 함수에 간편 로그인 API 요청 로직 추가 필요
  const handleEasyLoginButton = () => {
    setIsEasyLogin(true);
  };
  return (
    <div>
      <Nav />
      <Content>
        <Title>마이 페이지</Title>
        <EasyLoginWrapper>
          <EasyLoginTitle>간편 로그인</EasyLoginTitle>
          {!isEasyLogin && (
            <EasyLoginBtn type="button" onClick={handleEasyLoginButton}>
              간편 로그인하기
            </EasyLoginBtn>
          )}
          {isEasyLogin && <div>간편 로그인 번호는 1234 입니다</div>}
        </EasyLoginWrapper>
        <HWWrapper>
          <HWListTitle>내가 제출한 과제 목록</HWListTitle>
          <HWList>
            {hwList.map(hw => (
              <HWInfo>
                <Year>{hw.year}년</Year>
                <Professor>{hw.professor} 교수님</Professor>
                <HWId>{hw.id}번 과제</HWId>
                <HWLink>{hw.link}</HWLink>
              </HWInfo>
            ))}
          </HWList>
        </HWWrapper>
      </Content>
    </div>
  );
}

const Content = styled.div`
  float: left;
  padding: 10px;
  margin-left: 20px;
`;

const Title = styled.div`
  margin: 20px;
  font-size: 20px;
`;

const EasyLoginWrapper = styled.div`
  /* TODO : 테두리는 추후 삭제할 예정 */
  height: 50px;
  margin: 20px 0;
  display: flex;
  align-items: center;
`;

const EasyLoginTitle = styled.div`
  margin-right: 20px;
`;

const EasyLoginBtn = styled.button`
  padding: 10px;
  background-color: pink;
  border: none;
  border-radius: 5px;
`;

const HWWrapper = styled.div``;
const HWList = styled.div`
  border: 1px solid purple;
`;

const HWListTitle = styled.div``;

const HWInfo = styled.div`
  /* TODO : 테두리는 추후 삭제할 예정 */
  border: 1px solid purple;
  display: flex;
  column-gap: 30px;
`;

const Year = styled.div`
  width: 120px;
  text-align: right;
  border-right: 2px solid purple;
  padding: 5px;
`;
const Professor = styled.div`
  width: 120px;
  text-align: right;
  border-right: 2px solid purple;
  padding: 5px;
`;
const HWId = styled.div`
  width: 120px;
  text-align: right;
  border-right: 2px solid purple;
  padding: 5px;
`;
const HWLink = styled.div`
  width: 120px;
  text-align: right;
  padding: 5px;
`;
export default MyPage;
