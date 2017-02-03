import "reflect-metadata";

const formatMetadataKey = "jsonIgnore";
const jsonReplaceByKeyConst="jsonReplaceByKey"
const jsonReplaceByValueConst="jsonReplaceByValue"

export function jsonIgnore(){
    return Reflect.metadata(formatMetadataKey,true);
}

export  function getJsonIgnore(object:any, propertyKey:string):boolean{
    return Reflect.getMetadata(formatMetadataKey,object,propertyKey);
}

export  function jsonIgnoreReplacer(key:string, value:any){
    let meta = getJsonIgnore(this,key);
    if(meta===true){
        return undefined;
    }
    let constant= getJsonReplaceByConstant(this,key);
    if(constant!=null){
        return constant;
    }
    let childKey= getJsonReplaceByChildValue(this,key);
    if(childKey!=null){
        return value[childKey];
        
    }
    return value;
}

export function jsonReplaceByChildValue(childKey:string){
     return Reflect.metadata(jsonReplaceByKeyConst, childKey);
}

export function jsonReplaceByConstant(value:any){
     return Reflect.metadata(jsonReplaceByValueConst,value);
}

export  function getJsonReplaceByChildValue(object:any, propertyKey:string):string{
    return Reflect.getMetadata(jsonReplaceByKeyConst,object,propertyKey);
}

export  function getJsonReplaceByConstant(object:any, propertyKey:string):any{
    return Reflect.getMetadata(jsonReplaceByValueConst,object,propertyKey);
}