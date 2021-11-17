import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <ul className={'list'}>
        {this.props.items.map((item, index) => {
          return (
            <ListItem
              key={'' + index}
              item={item}
              liClick={() => {
                this.props.liClick(item);
              }}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
