import {Suite} from 'Benchmark';
import * as testsuite from './testset'
import {jsonIgnoreReplacer} from '../index'

const suite=new Suite();

suite.add('reference',()=>{
    JSON.stringify(testsuite)
})
.add('serialisation',()=>{
    JSON.stringify(testsuite,jsonIgnoreReplacer)
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({ 'async': true });