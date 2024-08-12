function validateUnionType(value:any,allowedTypes:string[]):boolean{
    return allowedTypes.some(allowedType => allowedType === typeof value)
}