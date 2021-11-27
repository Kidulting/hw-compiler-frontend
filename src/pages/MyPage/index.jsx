import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/nav/Nav';
import HWTable from '../../components/table/HWTable';

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
        <HWTable title="내가 제출한 과제 목록" hwList={hwList} />
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

export default MyPage;
