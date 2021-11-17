import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <li className={'list-item'} onClick={this.props.liClick}>
        {this.props.item}
      </li>
    );
  }
}

export default ListItem;
