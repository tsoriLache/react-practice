import React from 'react';
import List from './List';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      basketItems: [{ Strawberry: 1 }, { Blueberry: 3 }],
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
    console.log(item);
    this.setState((prevState) => ({
      basketItems: [...prevState.basketItems, { item: 1 }],
    }));
  };
  // basketItemClick = ({ target }) => {
  //   const removeItem = target.innerText;
  //   this.setState((prevState) => ({
  //     basketItems: [
  //       prevState.basketItems.filter((item) => {
  //         return item !== removeItem;
  //       }),
  //     ],
  //   }));
  // };
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
            items={this.state.basketItems.map((obj) => {
              return Object.keys(obj)[0];
            })}
            // liClick={this.basketItemClick}
          />
        </div>
      </main>
    );
  }
}

export default Main;
