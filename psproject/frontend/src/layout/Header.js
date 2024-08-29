/* Header.js */
import React from 'react';
import logo from "../image/FW_logo.jpg";



const Header = () => {
  return (
    <header>

        <div className='nav-head'>
            <div className='mainlogo'>
              <a href='/'>
                <img src={logo} width= '30px' />
              </a>
            </div>
            <div className='nav-middle'>
                <a href='/'>애견용품점</a>
            </div>
            <ul>
                <li><a href='/'>애견용품</a></li>
                <li><a href='/board'>커뮤니티</a></li>
                <li><a href='/user'>내정보</a></li>
            </ul>
        </div>
        <hr/>
    </header>
  );
};

export default Header;