import './assets/index.less';

class People {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return Promise.resolve(this.name);
    }
}

const Lee = new People('Lee');
Lee.sayHi().then(name => console.log(`Hi, I am ${name}.`));