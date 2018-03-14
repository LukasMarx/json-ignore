# json-ignore

Json ignore is a small library using the experimental decorator feature of typescript to exclude certain properties from the serialisation process. It is usefull if you want to keep your json as small as possible or if you want to serialise a circular structure.

## Installation

```
npm install json-ignore --save
```

## Usage

Since json-ignore is using a experimental feature of typescript you would want to add these two lines to your tsconfig.json to prevent warnings

```json
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true
    }
}
```

Afterwards use the `@jsonIgnore()` decorator to exlude properties form beeing serialised.

## Example

```typescript
import { jsonIgnoreReplacer, jsonIgnore } from 'json-ignore';

class Parent {
    @jsonIgnore() public arrayIgnored: string[] = ['1', '2', '3'];

    public array: string[] = ['1', '2', '3'];

    public child: Child = new Child(this);
}

class Child {
    @jsonIgnore() protected parent: Parent;
    constructor(parent: Parent) {
        this.parent = parent;
    }

    public childPropert: string = '123';
}

console.log(JSON.stringify(new Parent(), jsonIgnoreReplacer));
```

### Output

```json
{ "array": ["1", "2", "3"], "child": { "childPropert": "123" } }
```

## Advanced

If you want to replace a properties value by a constat value, you can do so by using `@jsonReplaceByConstant()`.

### Example

```typescript
@jsonReplaceByConstant("id-2")
public child:Child=new Child();
```

### Output

```json
{ "child": "id-2" }
```

You can also change the value of a property to the value of a direct child, by using `@jsonReplaceByChildValue()`. This is usefull e.g. if you only want to save the id of the child.

### Example

```typescript
class Parent {
    @jsonReplaceByChildValue('id') public child: Child = new Child();
}

class Child {
    public id: string = 'id-1';
}
```

### Output

```json
{ "child": "id-1" }
```
