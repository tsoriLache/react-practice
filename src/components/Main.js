import React from 'react';
import List from './List';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketItems: [],
      groceriesItems: [
        'Strawberry',
        'Blueberry',
        'Orange',
        'Banana',
        'Apple',
        'Carrot',
        'Celery',
        'Mushroom',
        'Green',
        'Pepper',
        'Eggs',
        'Cheese',
        'Butter',
        'Chicken',
        'Beef',
        'Pork',
        'Fish',
        'Rice',
        'Pasta',
        'Bread',
      ],
    };
    // this.handleClick = this.handleClick.bind(this);
  }
  render() {
    return (
      <main>
        <h1>Groceries</h1>
        <List items={this.state.groceriesItems} />
        <h1>Basket</h1>
        <List items={this.state.basketItems} />
      </main>
    );
  }
}

export default Main;
