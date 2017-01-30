#json-ingore
Json ignore is a small library using the experimental decorator feature of typescript to exclude certain properties from the serialisation process. It is usefull if you want to keep your json as small as possible or if you want to serialise a circular struckture.

##Installation

```
npm install json-ignore --save
```

##Usage

Since json-ignore is using a experimental feature of typescript you would want to add these two lines to your tsconfig.json

```json
{
	"compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
    }
}
```

Afterwards use the ```@jsonIgnore()``` decorator to exlude properties form beeing serialised.

##Example

import {jsonIgnoreReplacer, jsonIgnore} from 'json-ignore'

```typescript
class Parent{
    @jsonIgnore()
    public arrayIgnored:string[]=["1","2","3"];

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

console.log(JSON.stringify(new Parent(),jsonIgnoreReplacer));
```

###Output
```json
{"array":["1","2","3"],"child":{"childPropert":"123"}}
```