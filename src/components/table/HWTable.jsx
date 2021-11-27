import React from 'react';
import styled from 'styled-components';

const HWTable = props => {
  const { title, hwList } = props;
  return (
    <Wrapper>
      <HWListTitle>{title}</HWListTitle>
      <HWList>
        {hwList.map((hw, index) => (
          <HWInfo isOdd={index % 2 !== 0}>
            <Year>{hw.year}년</Year>
            <Professor>{hw.professor} 교수님</Professor>
            <HWId>{hw.id}번 과제</HWId>
            <HWLink>{hw.link}</HWLink>
          </HWInfo>
        ))}
      </HWList>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const HWList = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
`;

const HWListTitle = styled.div``;

const HWInfo = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  column-gap: 30px;
  background-color: ${props => props.isOdd || 'rgba(0, 0, 0, 0.1)'};
`;

const Year = styled.div`
  width: 120px;
  text-align: right;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px;
`;
const Professor = styled.div`
  width: 120px;
  text-align: right;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px;
`;
const HWId = styled.div`
  width: 120px;
  text-align: right;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px;
`;
const HWLink = styled.div`
  width: 120px;
  text-align: right;
  padding: 5px;
`;

export default HWTable;
