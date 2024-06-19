// See https://bun.sh/docs/runtime/nodejs-apis
import vm from 'node:vm';

new vm.Script(
  `
    const test: string = 'hi';
    console.log(test);
  `
).runInThisContext();

// Note that `vm.compileFunction` is not implemented in Bun yet.
// const fn = vm.compileFunction(
//   `
//     const test = 'hi';
//     return test;
//   `
// );

// console.log(fn());
