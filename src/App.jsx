import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ErrorPage from './pages/Error';
import RegisterHW from './pages/RegisterHW';
import LoginPage from './pages/Login';
import MainPage from './pages/Main';
import ResultComparisonPage from './pages/ResultComparison';
import SubmitCodePage from './pages/SubmitCode';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    /** TODO 서버쪽 로그인 구현 이후 로직에 맞게 처리 하도록 수정 필요 */
    setIsLogin(sessionStorage.getItem('login') === 'true');
  }, []);

  return (
    <Router>
      <Switch>
        {!isLogin && <Route render={() => <LoginPage />} />}
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/registerhW" render={() => <RegisterHW />} />
        <Route exact path="/code/submit" render={() => <SubmitCodePage />} />
        <Route
          exact
          path="/code/result"
          render={() => <ResultComparisonPage />}
        />
        <Route render={() => <ErrorPage />} />
      </Switch>
    </Router>
  );
}

export default App;
