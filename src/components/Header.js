import React from 'react';
import './styles/Header.css';
import icon from '../basketIcon.jpeg';

class Header extends React.Component {
  render() {
    return (
      <section className={'Header'}>
        <h1>Hello, Header</h1>;
        <img src={icon} alt="basket-icon" />
      </section>
    );
  }
}

export default Header;
