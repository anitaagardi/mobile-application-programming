class db {
  cakes = [];

  constructor() {
    this.cakes.push(
      {
        id: 1,
        name: 'BestCaek',
        height: 50,
        length: 25,
        width: 50,
        pastryType: 'Sponge',
        mainIngr: 'Chocolate',
        secondaryIngr: 'Strawberry',
      },
      {
        id: 2,
        name: 'WorstCaek',
        height: 2,
        length: 3,
        width: 2,
        pastryType: 'Sfoglia',
        mainIngr: 'Pineapple',
        secondaryIngr: 'Nothing',
      },
      {
        id: 1,
        name: 'BestCaek',
        height: 50,
        length: 25,
        width: 50,
        pastryType: 'Sponge',
        mainIngr: 'Chocolate',
        secondaryIngr: 'Strawberry',
      },
      {
        id: 2,
        name: 'WorstCaek',
        height: 2,
        length: 3,
        width: 2,
        pastryType: 'Sfoglia',
        mainIngr: 'Pineapple',
        secondaryIngr: 'Nothing',
      }
    );
  }

  createCake(cake) {
    this.cakes.push(cake);
  }

  getCakes() {
    return this.cakes;
  }
}

export default new db();
