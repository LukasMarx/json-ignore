import { jsonIgnoreReplacer, jsonIgnore, jsonReplaceByChildValue, jsonReplaceByConstant } from '../index';

class Parent {
    @jsonIgnore() public arrayIgnored: string[] = ['1', '2', '3'];

    @jsonIgnore() public ignoredString = '123';

    public array: string[] = ['1', '2', '3'];

    public string = '123';

    @jsonReplaceByChildValue('id') public childA: Child = new Child(this);

    @jsonReplaceByConstant('id-2') public childB: Child = new Child(this);
}

class Child {
    public id: string = 'id-1';

    @jsonIgnore() protected parent: Parent;
    constructor(parent: Parent) {
        this.parent = parent;
    }

    public childProperty: string = '123';
}

describe('Parent', () => {
    var subject: Parent;

    beforeEach(function() {
        subject = new Parent();
    });

    describe('#jsonIgnore', () => {
        it('should ignore array', () => {
            let s = JSON.stringify(subject, jsonIgnoreReplacer);
            let result = JSON.parse(s);
            if (result.arrayIgnored) {
                throw new Error('Expected array to be excluded from result');
            }
        });
        it('should ignore string', () => {
            let s = JSON.stringify(subject, jsonIgnoreReplacer);
            let result = JSON.parse(s);
            if (result.ignoredString) {
                throw new Error('Expected string to be excluded from result');
            }
        });
        it('should include normal array', () => {
            let s = JSON.stringify(subject, jsonIgnoreReplacer);
            let result = JSON.parse(s);
            if (!result.array) {
                throw new Error('Expected  normal array to be included in result');
            }
        });
        it('should include normal string', () => {
            let s = JSON.stringify(subject, jsonIgnoreReplacer);
            let result = JSON.parse(s);
            if (!result.string) {
                throw new Error('Expected  normal string to be included in result');
            }
        });
    });
    describe('#jsonReplaceByChildValue', () => {
        it('should overwrite with child value', () => {
            let s = JSON.stringify(subject, jsonIgnoreReplacer);
            let result = JSON.parse(s);
            if (result.childA != subject.childA.id) {
                throw new Error('Expected overwritten child value to be the value of the given field');
            }
        });
    });
    describe('#jsonReplaceByConstant', () => {
        it('should overwrite with constant', () => {
            let s = JSON.stringify(subject, jsonIgnoreReplacer);
            let result = JSON.parse(s);
            if (result.childB != 'id-2') {
                throw new Error('Expected overwritten child value to be the value of the constant');
            }
        });
    });
});
