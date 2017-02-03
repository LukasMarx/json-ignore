"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var index_1 = require('../index');
var Parent = (function () {
    function Parent() {
        this.arrayIgnored = ["1", "2", "3"];
        this.s = "123";
        this.array = ["1", "2", "3"];
        this.child = new Child(this);
    }
    __decorate([
        index_1.jsonIgnore(), 
        __metadata('design:type', Array)
    ], Parent.prototype, "arrayIgnored", void 0);
    __decorate([
        index_1.jsonIgnore(), 
        __metadata('design:type', Object)
    ], Parent.prototype, "s", void 0);
    return Parent;
}());
var Child = (function () {
    function Child(parent) {
        this.childPropert = "123";
        this.parent = parent;
    }
    __decorate([
        index_1.jsonIgnore(), 
        __metadata('design:type', Parent)
    ], Child.prototype, "parent", void 0);
    return Child;
}());
var s = JSON.stringify(new Parent(), index_1.jsonIgnoreReplacer);
console.log(s);
//# sourceMappingURL=test.js.map