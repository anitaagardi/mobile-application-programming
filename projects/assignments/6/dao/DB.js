class DB {
  carList = [];
  currentId = null;

  constructor() {
    this.carList.push({
      id: 0,
      brand: 'Audi',
      type: 'rs7',
      yearOfManufacture: 1982,
      engineType: '3.0 V6 TDI',
      milage: '80000',
    }, {
      id: 1,
      brand: 'Toyota',
      type: 'Supra',
      yearOfManufacture: 2004,
      engineType: '2.5 2JZ-GTE',
      milage: '20000',
    });
    this.currentId = this.carList.length - 1;
  }

  add(newCar) {
    newCar.id = this.getNextId();
    this.carList.unshift(newCar);
  }

  getCarList() {
    return this.carList;
  }


  getNextId(){
    this.currentId = this.currentId + 1;
    return this.currentId;
  }

  login(input){
    return input.username === 'admin' && input.password === 'admin';
  }

}

export default new DB();
