import React from 'react';
import Header from '../components/Header';
import Login from '../components/login/Login';
import Footer from '../components/Footer';
import { useMatch, useNavigate, useNavigation } from 'react-router-dom';

//components 폴더 안의 컴포넌트들을 합쳐서 로그인 페이지를 만드는 컴포넌트를 생성
//메인 페이지에선 이 컴포넌트만 작성해주면 안에 있는 3개 컴포넌트를 한번에 생성
//재사용도 굉장히 편하다
const LoginPage = () => {
  const match = useMatch('/login/:id');
  console.log(match);
  console.log(match.pathname);
  console.log(match.params.id);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}> 뒤로가기 </button>
      <Login />
    </div>
  );
};

export default LoginPage;
