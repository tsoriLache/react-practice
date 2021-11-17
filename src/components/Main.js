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
  groceryItemClick = ({ target }) => {
    const item = target.innerText;
    // Create a new array based on current state:
    const basketItems = [...this.state.basketItems];
    // Add item to it
    basketItems.push(item);
    // Set state
    this.setState({ basketItems });
  };
  render() {
    return (
      <main className={'Main'}>
        <div>
          <h1>Groceries</h1>
          <List
            items={this.state.groceriesItems}
            liClick={this.groceryItemClick}
          />
        </div>
        <div>
          <h1>Basket</h1>
          <List
            items={this.state.basketItems}
            // liClick={this.basketItemClick}
          />
        </div>
      </main>
    );
  }
}

export default Main;
