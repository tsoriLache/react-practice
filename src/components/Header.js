import React from 'react';
import './styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <section className={'Header'}>
        <div className="cart">🛒</div>
        <h1>shopping list</h1>
      </section>
    );
  }
}

export default Header;
