class MockDB {
  beerList = [];
  currentId = null;
  
  constructor() {
    this.beerList.push({
      id: 1,
      name: 'Borsodi',
      type:'glass',
      currentDate:'2020-11-05'
    });
    this.currentId = this.beerList.length - 1;
  }

  add(newBeer) {
    newBeer.id = this.getNextId();
    this.beerList.unshift(newBeer);
  }

  getAll() {
    return this.beerList;
  }

  remove(id){
    for (let [i,item] of this.beerList.entries()){
        if (item.id === id){
          this.beerList.splice(i, 1);
        }
    }
  }

  getNextId(){
    this.currentId = this.currentId + 1;
    return this.currentId;
  }

  login(input){
    return input.username === 'admin' && input.password === 'admin';
  }

}

export default new MockDB();
