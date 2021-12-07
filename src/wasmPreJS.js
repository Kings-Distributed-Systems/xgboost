var Module = module.exports = {};
//Module.wasmBinaryFile = 'xgboost.wasm';

Module.isReady = new Promise(function (resolve) {
  Module.onRuntimeInitialized = function () {
    resolve(Module);
  };
});
