const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');
// Interpolated
console.log('Hello I am a %s string','💩');

// Styled
console.log('%c I am some great text','font-size:50px; background:red');
// warning!
console.warn('On nooo');
// Error :|
console.error('Shit');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
const p =document.querySelector('p');
console.assert(p.classList.contains('upsi'),'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count('Galyna');
console.count('Galyna');
console.count('Yura');
console.count('Yura');
console.count('Yura');
console.count('Galyna');
console.count('Yura');
console.count('Yura');
console.count('Galyna');

// timing

console.time('start');

for (let i = 0; i < 10; i++) {
    console.log('Hi');   
}
console.timeEnd('start');