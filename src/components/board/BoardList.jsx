import React from 'react';
import styled from 'styled-components';

function BoardList() {
  return (
    <Wrapper>
      <div>알고리즘</div>
      <ProfessorList>
        <div>교수1</div>
        <HWList>
          <div>과제1</div>
          <div>과제2</div>
          <div>과제3</div>
        </HWList>
      </ProfessorList>
      <ProfessorList>
        <div>교수2</div>
        <HWList>
          <div>과제1</div>
          <div>과제2</div>
          <div>과제3</div>
        </HWList>
        <div />
      </ProfessorList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 20px;
  border: green 1px solid;
`;

const ProfessorList = styled.div`
  margin-left: 10px;
`;

const HWList = styled.div`
  margin-left: 10px;
`;

export default BoardList;
