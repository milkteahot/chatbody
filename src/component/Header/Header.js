import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

//상단 메뉴를 가지고 있는 컴포넌트
class Header extends Component {
  render() {
    return (
      <div className="App">
       <nav className="navbar navbar-expand-lg navbar-dark bg-white-trans ">
		  <div className="navbar-brand logo" href="#">Flipperx</div>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>검색하기
		  </button>
		  <div class="headerbar-brand" href="#">
          <img class="logo" src="../MainView2/Header/logo_button.png"></img>
        </div>

		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav mr-auto">
		      <li className="nav-item active">
		        <Link className="nav-link" to="/">Home</Link>
		      </li>
  			  <li className="nav-item active">
		        <Link className="nav-link" to="/login">로그인</Link>
			  </li>
			  <li className="nav-item active">
		        <Link className="nav-link" to="/makeroom">방만들기</Link>
			  </li>
		    </ul>
		  
		 
		      
		  </div>
		</nav>
      </div>
    );
  }
}

export default Header;
