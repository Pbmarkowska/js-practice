/*
TASK 1 - DONE
Count passed tests

const results = [
    { test: 'Title visible', passed: true },
    { test: 'Price visible', passed: false },
    { test: 'Button enabled', passed: true }
  ];

  const testsPassed = () => {
    const count = results.reduce((accumulator, currentValue) => {
        if (currentValue.passed) {
            accumulator++;
        }
        return accumulator;
    }, 0);
    return count;
  }

  const testsPased2 = () => results.reduce((accumulator, {passed}) => accumulator + Number(passed), 0)
  
  console.log("testsPassed", testsPased2());

//   Conclusions:
//   - reduce always return accumulator
//   - outer function must return reducer result
*/

/*
TASK 2 - DONE
Create a failure list

Expected output → ['Price visible']

For each object in the array check passed property. If false, push test property to new array.
Important: accumulator is an array, not a number.


const results = [
  { test: 'Title visible', passed: true },
  { test: 'Price visible', passed: false },
  { test: 'Button enabled', passed: true }
];

const failure = () => {
  const result = results.reduce((accumulator, { test, passed }) => {
    if (!passed) {
      accumulator.push(test);
    }
    return accumulator;
  }, []);
  return result;
}

console.log(failure());
*/

/*
TASK 3 - DONE
Check if all validations passed

Expected output:
return true
⚠️ Bonus: what if one fails?


const checks = [
  { passed: true },
  { passed: true },
  { passed: true }
];

const testResults = () => {
  const result = checks.reduce((accumulator, { passed }) => {
    return accumulator && passed;
  }, true);
  return result;
}

console.log("testResults", testResults());
*/

/*
TASK 4 - DONE
Build a lookup object for assertions

const fields = [
  { name: 'username', visible: true },
  { name: 'password', visible: false }
];

Expected output →
{
  username: true,
  password: false
}

each object in array I need to reduce to this object name value and visible value.


const fields = [
  { name: 'username', visible: true },
  { name: 'password', visible: false }
];


// 1 {username: true }
// 2 {password: false }
const buildUserObject = () => {
  const user = fields.reduce((accumulator, { name, visible}) => {

   return {
    ...accumulator,
    [name]: visible
  }
  }, {});
  return user;
}

console.log("user", buildUserObject());
*/

/*
TASK 5 - DONE
Find the first failing test (reduce only)

// Expected output:
{ name: 'Logout button visible', passed: false }

Iterate through the objects in the array, I need to return the object in which passed value is false
so I need to accumulate objects into each other up until the point I will find an object that has passed: false
--> wrong mental model

const tests = [
  { name: 'Login page loaded', passed: true },
  { name: 'User logged in', passed: true },
  { name: 'Logout button visible', passed: false }
];

const firstFailingTest = () => {
  const test = tests.reduce((acc, { name, passed }) => {
    if (acc === null && !passed) {
      acc = {name, passed}
    }
    return acc;
  }, null);
  return test;
}

console.log("fist failing test", firstFailingTest());
*/


/*
TASK 6 - DONE
Group tests by status

// Expected output →
{
  passed: ['Login page loaded', 'User logged in'],
  failed: ['Logout button visible']
}

Muszę zwrócić obiekt, w którym będą dwa parametry: passed i failed, które będą zawierać tablice z nazwą testu


const tests = [
  { name: 'Login page loaded', passed: true },
  { name: 'User logged in', passed: true },
  { name: 'Logout button visible', passed: false }
];

const groupedTests = () => {
  const test = tests.reduce((acc, {name, passed}) => {
    if (passed) {
      acc.passed.push(name);
    } else {
      acc.failed.push(name);
    }
    return acc;
  }, {passed: [], failed: []})
  return test;
}

const grouppedTests = () => tests.reduce((acc, t) => {
  acc[t.passed ? "passed" : "failed"].push(t.name);
  return acc;
}, {passed: [], failed: []});

console.log("groupedTests", groupedTests());
*/

/*
TASK 7 - Oblicz łączną wartość wszystkich produktów

const response = {
  data: [
    { id: 1, name: "Laptop", price: 3000 },
    { id: 2, name: "Mouse", price: 100 },
    { id: 3, name: "Keyboard", price: 250 },
    { id: 4, name: "Monitor", price: 1200 }
  ]
};

const totalPrice = response.data.reduce((acc, value) => {
  acc+=value.price;
  return acc;
},0);
console.log("totalPrice", totalPrice);

const totalPrice2 = response.data.reduce((acc, value) => {
  return acc + (value.price || 0);
},0);

console.log("totalPrice2", totalPrice2);
*/

