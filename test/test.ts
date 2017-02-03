import {jsonIgnoreReplacer, jsonIgnore} from '../index'
import {Suite} from 'Benchmark'

class Parent{
    @jsonIgnore()
    public arrayIgnored:string[]=["1","2","3"];

    @jsonIgnore()
    public s="123";

    public array:string[]=["1","2","3"];

    public child:Child=new Child(this);
}

class Child{

    @jsonIgnore()
    protected parent:Parent;
    constructor(parent:Parent){
        this.parent=parent;
    }

    public childPropert:string="123";
}



let s=JSON.stringify(new Parent(),jsonIgnoreReplacer);
console.log(s);
