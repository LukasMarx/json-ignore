import {jsonIgnoreReplacer, jsonIgnore, jsonReplaceByChildValue, jsonReplaceByConstant} from '../index'
import {Suite} from 'Benchmark'

class Parent{
    @jsonIgnore()
    public arrayIgnored:string[]=["1","2","3"];

    @jsonIgnore()
    public s="123";

    public array:string[]=["1","2","3"];

    @jsonReplaceByChildValue("id")
    public childA:Child=new Child(this);

    @jsonReplaceByConstant("id-2")
    public childB:Child=new Child(this);
}

class Child{

    public id:string="id-1";

    @jsonIgnore()
    protected parent:Parent;
    constructor(parent:Parent){
        this.parent=parent;
    }

    public childPropert:string="123";
}



let s=JSON.stringify(new Parent(),jsonIgnoreReplacer);
console.log(s);
