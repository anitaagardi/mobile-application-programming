class db {
  items = [];

  constructor() {
    this.items.push(
      {
        id: 1,
        name: 'Milk',
        type: 'Food',
        price: 220,
        piece: 1,
        measure: 'liter',
        pc: 2,
      },
      {
        id: 2,
        name: 'Potato',
        type: 'Food',
        price: 100,
        piece: 0.5,
        measure: 'kg',
        pc: 3,
      },
      {
        id: 3,
        name: 'Cola',
        type: 'Food',
        price: 400,
        piece: 0.75,
        measure: 'liter',
        pc: 6,
      }
    );
  }

  getShoppingCart() {
    return this.items;
  }

  addNewItem(item) {
    this.items.push(item);
  }
  inc(item) {
    const i = this.items.find((x) => x.id == item.id);
    i.pc = i.pc && i.pc > 0 ? i.pc + 1 : 1;
    console.log(i);
  }
  deg(item) {
    const i = this.items.find((x) => x.id == item.id);
    if (i.pc == 0) {

    } else {
      i.pc = i.pc && i.pc > 0 ? i.pc - 1 : 0;
      console.log(i);
    }
  }
  removeItem(item) {
    const index = this.items.findIndex((x) => x.id === item.id);
    this.items.splice(index , 1);
    console.log('delete called');
  }
}

export default new db();
