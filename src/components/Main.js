import React from 'react';
import Header from './Header';
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

  //ask code review for best practice
  groceryItemClick = (item) => {
    let newBasket;
    const itemIndex = this.state.basketItems.findIndex(
      (obj) => obj.item === item
    );
    if (itemIndex < 0) {
      newBasket = [...this.state.basketItems, { item, quantity: 1 }];
    } else {
      newBasket = [...this.state.basketItems];
      newBasket[itemIndex].quantity += 1;
    }
    this.setState({ basketItems: newBasket });
  };

  basketItemClick = (removeItem) => {
    const newBasket = this.state.basketItems.filter(
      ({ item }) => item !== removeItem.split(' ')[1]
    );
    this.setState({ basketItems: newBasket });
  };

  render() {
    return (
      <main className={'Main'}>
        <div>
          <Header text="Groceries" icon="📝" className="list-header" />
          <List
            items={this.state.groceriesItems}
            liClick={this.groceryItemClick}
          />
        </div>
        <div>
          <Header text="Basket" icon="🍉🥝🍌" className="list-header" />
          <List
            items={this.state.basketItems.map(({ quantity, item }) => {
              return `${quantity} ${item} `;
            })}
            liClick={this.basketItemClick}
          />
        </div>
      </main>
    );
  }
}

export default Main;
