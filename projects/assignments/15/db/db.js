class db {
  appList = [];
  currentId = null;

  constructor() {
    this.appList.push({
      id: 0,
      name: 'Launcher',
      status: 'ready',
      version: 3.12,
      neededmemory: 32,
      supportedOS: 'miui.10.32'
    }, {
      id: 1,
      name: 'Contacts',
      status: 'ready',
      version: 2.4,
      neededmemory: 20,
      supportedOS: 'miui.10.32'
    }, {
      id: 2,
      name: 'Messeges',
      status: 'half-ready',
      version: 0.67,
      neededmemory: 50,
      supportedOS: 'miui.10.32'
    });
    this.currentId = this.appList.length - 1;
  }

  add(newApp) {
    newApp.id = this.getNextId();
    this.appList.unshift(newApp);
  }

  getAppList() {
    return this.appList;
  }

  removeApp(id){
    for (let [i,item] of this.appList.entries()){
        if (item.id === id){
          this.appList.splice(i, 1);
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

export default new db();