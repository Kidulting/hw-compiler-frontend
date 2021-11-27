import React from 'react';
import styled from 'styled-components';

const HWTable = props => {
  const { title, hwList } = props;
  return (
    <Wrapper>
      <HWListTitle>{title}</HWListTitle>
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
    </Wrapper>
  );
};

const Wrapper = styled.div``;

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

export default HWTable;
