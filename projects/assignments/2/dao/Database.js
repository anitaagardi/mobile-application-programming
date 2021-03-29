class Database {
  bookList = [];
  currentId = null;

  constructor() {
    this.bookList.push({
      id: 1,
      title: 'Book 1',
      author: 'Mr. Author 1',
      year: 1997,
      type: 'sci-fi'
    }, {
      id: 2,
      title: 'Book 2',
      author: 'Mr. Author 2',
      year: 2019,
      type: 'historical'
    }, {
      id: 3,
      title: 'Book 3',
      author: 'Mr. Author 3',
      year: 2004,
      type: 'comedy'
    }, {
      id: 4,
      title: 'Book 4',
      author: 'Mr. Author 4',
      year: 1968,
      type: 'romance'
    });
    this.currentId = this.bookList.length;
  }

  add(newBook) {
    newBook.id = this.getNextId();
    this.bookList.unshift(newBook);
  }

  getBookList() {
    return this.bookList;
  }

  removeBook(id){
    for (let [i,item] of this.bookList.entries()){
        if (item.id === id){
          this.bookList.splice(i, 1);
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

export default new Database();
