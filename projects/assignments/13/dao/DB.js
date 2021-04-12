class DB {
  computerList = [];
  currentId = null;

  constructor() {
    this.computerList.push(
      {
        id: 0,
        name: 'Apple II',
        year: 1982,
        processor: 'no idea at the moment',
        ram: '256K',
        supportedOS: 'some almaaaaa',
      },
      {
        id: 1,
        name: 'IBM PC junior',
        year: 1980,
        processor: 'no idea at the moment',
        ram: '256K',
        supportedOS: 'DOS',
      },
      {
        id: 2,
        name: 'Comodore64',
        year: 1982,
        processor: 'no idea at the moment',
        ram: '64K',
        supportedOS: 'c64?',
      }
    );
    this.currentId = this.computerList.length - 1;
  }

  add(newComputer) {
    newComputer.id = this.getNextId();
    this.computerList.unshift(newComputer);
  }

  getComputerList() {
    return this.computerList;
  }

  removeComputer(id) {
    for (let [i, item] of this.computerList.entries()) {
      if (item.id === id) {
        this.computerList.splice(i, 1);
      }
    }
  }

  getNextId() {
    this.currentId = this.currentId + 1;
    return this.currentId;
  }

  login(input) {
    return input.email === 'admin' && input.password === 'admin';
  }
}

export default new DB();
