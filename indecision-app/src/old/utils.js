console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract; // Could replace with expression

// Note: this is *not* an object definition
// export {square, add, subtract as default};
// two types of exports: default and named

