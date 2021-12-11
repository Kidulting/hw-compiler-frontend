import React, { useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Nav from 'components/nav/Nav';
import AceEditor from 'react-ace';
import 'index.css';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';

const editorCss = {
  width: '100%',
};

function SubmitCode() {
  const aceRef = useRef(null);
  const [language, setLanguage] = useState('c_cpp');
  const [code, setCode] = useState('');
  const [testCaseInput, setTestCaseInput] = useState('');
  const [testCaseOutPut, setTestCaseOutPut] = useState('');

  const submitHandler = () => {
    const params = {
      // TODO: 과제pk post_id: '1',
      code: `${code}`,
      language: `${language}`,
      test_case_input: `${testCaseInput}`,
      test_case_output: `${testCaseOutPut}`,
    };
    console.log(params);
    alert('서버 제출 API 호출');
  };

  const selectHandler = useCallback(e => {
    setLanguage(e.target.value);
  });

  const aceChangeHandler = useCallback(updatedText => {
    setCode(updatedText);
  });

  const inputHandler = useCallback(e => {
    setTestCaseInput(e.target.value);
  });

  const outPutHandler = useCallback(e => {
    setTestCaseOutPut(e.target.value);
  });

  return (
    <Wrapper>
      <Nav />
      <SubmitWrapper>
        <ContentWrapper>
          <RowWrapper>
            <TextWrapper>과제명</TextWrapper>
          </RowWrapper>
          <RowWrapper>
            <TextWrapper mr={32}>언어</TextWrapper>
            <Select onChange={selectHandler}>
              <option value="c_cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </Select>
          </RowWrapper>
          <RowWrapper>
            <TextWrapper>소스 코드</TextWrapper>
          </RowWrapper>
          <AceEditor
            mode={language}
            style={editorCss}
            showPrintMargin={false}
            ref={element => {
              aceRef.current = element;
            }}
            onChange={aceChangeHandler}
          />
          <RowWrapper style={{ paddingTop: '10px' }}>
            Input :
            <BaseInput mr={10} value={testCaseInput} onChange={inputHandler} />
            OutPut :
            <BaseInput value={testCaseOutPut} onChange={outPutHandler} />
            <SubmitButton onClick={submitHandler}> 제출 </SubmitButton>
          </RowWrapper>
        </ContentWrapper>
      </SubmitWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  border: red 4px solid;
`;

const SubmitWrapper = styled.div`
  display: flex;
  font-family: 'Noto Sans KR Regular';
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: green 4px solid;
  width: 80%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  justify-content: center;
  border: black 4px solid;
  height: 90%;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  font-family: 'Noto Sans KR Bold';
  color: 'black';
  font-size: 14px;
  ${props =>
    props.mr &&
    css`
      margin-right: ${props.mr}px;
    `}
`;

const Select = styled.select`
  font-family: 'Noto Sans KR Regular';
  background: white;
  color: gray;
  font-size: 14px;
`;

const BaseInput = styled.input`
  display: flex;
  width: 20%;
  height: 25px;
  margin-left: 10px;
  border-color: #004eae;
  border-radius: 5px;
  border-width: 1px;
  ${props =>
    props.mr &&
    css`
      margin-right: ${props.mr}px;
    `}
`;

const SubmitButton = styled.button`
  font-family: 'Noto Sans KR Regular';
  background-color: #004eae;
  color: white;
  width: 50px;
  height: 30px;
  margin-left: auto;
  border: none;
  border-radius: 5px;
`;

export default SubmitCode;
