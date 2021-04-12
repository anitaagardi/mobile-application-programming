class DB {
  animalList = [];
  currentId = null;

  constructor() {
    this.animalList.push({
      id: 0,
      name: 'Tod',
      birth: 2005,
      title: 'lion'
    }, {
      id: 1,
      name: 'Luna',
      birth: 2010,
      title: 'elephant'
    }, {
      id: 2,
      name: 'George',
      birth: 2020,
      title: 'tiger'
    });
    this.currentId = this.animalList.length - 1;
  }

  add(newAnimal) {
    newAnimal.id = this.getNextId();
    this.animalList.unshift(newAnimal);
  }

  getAnimalList() {
    return this.animalList;
  }
  
  removeAnimal(id){
    for (let [i,item] of this.animalList.entries()){
        if (item.id === id){
          this.animalList.splice(i, 1);
        }
    }
  }

  getNextId(){
    this.currentId = this.currentId + 1;
    return this.currentId;
  }

  login(input){
    return input.email === 'admin' && input.password === 'admin';
  }

}

export default new DB();
