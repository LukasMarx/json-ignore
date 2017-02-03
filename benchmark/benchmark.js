"use strict";
var Benchmark_1 = require('Benchmark');
var testsuite = require('./testset');
var index_1 = require('../index');
var suite = new Benchmark_1.Suite();
suite.add('reference', function () {
    JSON.stringify(testsuite);
})
    .add('serialisation', function () {
    JSON.stringify(testsuite, index_1.jsonIgnoreReplacer);
})
    .on('cycle', function (event) {
    console.log(String(event.target));
})
    .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
    .run({ 'async': true });
//# sourceMappingURL=benchmark.js.map