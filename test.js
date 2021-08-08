//클래스

// class Human {
//     constructor(type = 'human') {
//         this.type = type;
//     }

//     static isHuman(human) {
//         return human instanceof Human;
//     }

//     breathe() {
//         alert('h-a-a-a-m');
//     }
// }

// class Zero extends Human {
//     constructor(type, firstName, lastName) {
//         super(type)
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     sayName() {
//         super.breathe()
//         alert(`${this.firstName} ${this.lastName}`)
//     }
// }

// const newZero = new Zero('human', 'Zero', 'Cho');
// console.log(Human.isHuman(newZero));

//프로미스

//<프로미스 1>
// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if(condition) {
//         resolve('성공');
//     } else {
//         reject('실패');
//     }
// });

// promise
//     .then((message) => {
//         console.log(message);
//     })
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('무조건');
//     })

//<프로미스 2>

// const condition = true;
// const promise = new Promise((resolve, reject) => {
//     if(condition) {
//         resolve('성공');
//     } else {
//         reject('실패');
//     }
// });

// promise
//     .then((message) => {
//         return new Promise((resolve, reject) => {
//             resolve(message);
//         })
//     })
//     .then((message2) => {
//         console.log(message2);
//         return new Promise((resolve, reject) => {
//             resolve(message2);
//         })
//     })
//     .then((message3) => {
//         console.log(message3);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// const promise1 = Promise.resolve('성공1')
// const promise2 = Promise.resolve('성공2')

// Promise.all([promise1, promise2])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// const promise1 = Promise.resolve('성공1')
// const promise2 = Promise.resolve('성공2')
// (async () => {
//     for await (promise of [promise1 ,promise2]) {
//         console.log(promise);
//     }
// }) ();

// Formating, Linting
// Formatting: Prettier
// Linting: ESLint


