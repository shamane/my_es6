var getTrack = (...args) => {
  console.log(args);
  console.log('pop 2', args);
  return args[0] + ' ' + args[1];
}

console.log(getTrack('Artist', 'Track'));

// https://monsterlessons.com/project/lessons/es6-let
let a = 3;

if (true) {
  let a = 5;
  console.log(a);
}
console.log(a);

// https://monsterlessons.com/project/lessons/es6-const
const API_URL = 'http://google.com';
console.log(API_URL);

// https://monsterlessons.com/project/lessons/es6-destrukturizaciya
var { width, height } = {
  width: 100,
  height: 200
};

console.log(width);
console.log(height);

function generateObj () {
  return {
    width: 100,
    height: 200
  };
}

var { width, height } = generateObj();
console.log(width);
console.log(height);

function generateObj2 () {
  return {
    title: 'Menu',
    width: 100,
    height: 200
  };
}

var { width: containerWidth, height: containerHeight } = generateObj2();
console.log(containerWidth);
console.log(containerHeight);
console.log('width still is', width);


var obj = {
  id: '123',
  attributes: {
    width: 100,
    height: 100
  }
}

var { id, attributes: { width, height } } = obj;
console.log(id)
console.log(width)
console.log(height)


var { id, attributes: { width = 50, height = 50 } } = obj;
console.log(id)
console.log(width)
console.log(height)


var [ red, yellow ] = ['red', 'yellow'];
console.log(red);
console.log(yellow);

var [ red = 'super red', yellow = 'super yellow' ] = ['red', 'yellow'];
console.log(red);
console.log(yellow);


function getSizes ({ width, height }) {
  console.log(width)
  console.log(height)
}

getSizes({
  width: 101,
  height: 201
})


function getSizes2 ({ width = 51, height = 61 }) {
  console.log(width)
  console.log(height)
}
getSizes2({})

console.log('opop');

// https://monsterlessons.com/project/lessons/es6-spread
// https://monsterlessons.com/project/lessons/es6-moduli
// https://monsterlessons.com/project/lessons/es6-stroki
// https://monsterlessons.com/project/lessons/javascript-klassy
// https://monsterlessons.com/project/lessons/es6-promises
// https://monsterlessons.com/project/lessons/async-await-v-javascript

alert('pop');
