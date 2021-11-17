import React from 'react';
import './styles/Header.css';
import icon from '../basketIcon.jpeg';

class Header extends React.Component {
  render() {
    return (
      <section className={'Header'}>
        <img src={icon} alt="basket-icon" />
        <h1>Hello, Header</h1>;
      </section>
    );
  }
}

export default Header;
