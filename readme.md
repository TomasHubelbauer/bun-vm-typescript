# Bun `vm` TypeScript

Bun doesn't support Node's `vm.compileFunction` yet. See the compatiblity chart
here: https://bun.sh/docs/runtime/nodejs-apis#node-vm

`vm.Script` is supported, but doesn't allow for running TypeScript.
I track this along with the `Function` constructor not being able to accept
TypeScript here:
https://github.com/oven-sh/bun/issues/11976
