import "reflect-metadata";

const formatMetadataKey = "jsonIgnore";

export function jsonIgnore(){
    return Reflect.metadata(formatMetadataKey,true);
}

export function getJsonIgnore(object:any, propertyKey:string):boolean{
    return Reflect.getMetadata(formatMetadataKey,object,propertyKey);
}

export function jsonIgnoreReplacer(key:string, value:any){

    let meta=getJsonIgnore(this,key);
    if(meta===true){
        return undefined;
    }
    return value;
}