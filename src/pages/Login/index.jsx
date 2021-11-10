import React from 'react';
import './login.css';
import QrImgDropDown from '../../components/QrImgDropDown/QrImgDropDown';
import { qrParser } from '../../utils/qrParser';
import { hongikQrFormat } from '../../utils/qrParser/constants/hongik';

function Login() {
  const onClickHandler = () => {
    /** TODO 서버쪽 로그인 구현 이후 로직에 맞게 처리 하도록 수정 */
    sessionStorage.setItem('login', true);
    window.location.href = '/';
  };

  return (
    <>
      <nav className="topbar">HW-COMPILER 로그인 탑바 </nav>
      <section className="loginContainer">
        <div className="loginHeader">로그인</div>
        <button type="button" onClick={onClickHandler}>라우팅 테스트용 로그인 버튼</button>
        <QrImgDropDown qrParser={qrParser} dataFormat={hongikQrFormat} />
      </section>
    </>
  );
}

export default Login;
