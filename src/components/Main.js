import React from 'react';
import List from './List';

class Main extends React.Component {
  render() {
    return (
      <main>
        Hello, main
        <List items={['b1', 'b2', 'b3']} />
        <List items={['b1', 'b2', 'b3']} />
      </main>
    );
  }
}

export default Main;
