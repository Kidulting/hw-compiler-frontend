import React from 'react';

function Login() {
  const onClickHandler = () => {
    /** TODO 서버쪽 로그인 구현 이후 로직에 맞게 처리 하도록 수정 */
    sessionStorage.setItem('login', true);
    window.location.href = '/';
  };

  return (
    <div>
      로그인 페이지
      <button
      // TODO - lint 설정으로 type="button"을 명시해야하는데 추후 린트 설정 변경 필요
        type="button"
        onClick={onClickHandler}
      >
        로그인 버튼

      </button>
    </div>
  );
}

export default Login;
