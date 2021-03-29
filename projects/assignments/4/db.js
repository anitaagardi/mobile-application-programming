class db {
  fishermanList = [];
  fishList = [];
  fishermanCurrentId = null;
  fishCurrentId = null;

  constructor() {
    this.fishList.push(
      {
        id: 0,
        type: "Carp",
        weight: 5
      },
      {
        id: 1,
        type: "Amur",
        weight: 15 
      }
    );

     this.fishCurrentId = this.fishList.length - 1;

    this.fishermanList.push(
    {
      id: 0,
      name: "Teszt Elek",
      age: 50,
      code: 913746
    },
    {
      id: 1,
      name: "Barna Endre",
      age: 39,
      code: 567214
    },
    {
      id: 2,
      name: "Gipsz Jakab",
      age: 22,
      code: 123456
    }
  );
    this.fishermanCurrentId = this.fishermanList.length - 1;
  }

  addFisherman(newFisherman) {
    newFisherman.id = this.getNextFishermanId();
    this.fishermanList.unshift(newFisherman);
  }

  addFish(newFish) {
    newFish.id = this.getNextFishId();
    this.fishList.unshift(newFish);
  }

  getFishList() {
    return this.fishList;
  }

  getFishermanList() {
    return this.fishermanList;
  }

  removeFisherman(id){
    for (let [i, item] of this.fishermanList.entries()) {
      if(item.id === id) {
        this.fishermanList.splice(i, 1);
      }
    }
  }

  removeFish(id){
    for (let [i, item] of this.fishList.entries()) {
      if(item.id === id) {
        this.fishList.splice(i, 1);
      }
    }
  }


_deleteFishermanByID(id) {
    const fisherman = this.state.data.filter(item => item.id != id);
    this.setState({ data: fisherman });
  }

  _deleteFishByID(id) {
    const fish = this.state.data.filter(item => item.id != id);
    this.setState({ data: fish });
  }

  getNextFishermanId() {
    this.fishermanCurrentId = this.fishermanCurrentId + 1;
    return this.fishermanCurrentId;
  }

  getNextFishId() {
    this.fishCurrentId = this.fishCurrentId + 1;
    return this.fishCurrentId;
  }

  login(username,password) {
    return username == 'admin' && password == 'admin';
  }

}

  export default new db();