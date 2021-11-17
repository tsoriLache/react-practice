import React from 'react';
import './styles/Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <section className={this.props.className}>
        <div className="cart">{this.props.icon}</div>
        <h1>{this.props.text}</h1>
      </section>
    );
  }
}

export default Header;
