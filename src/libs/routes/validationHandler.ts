import {Request, Response, NextFunction} from 'express';
import errHandler from './errorHandler';
export default (validateHandler) => (req: Request,res: Response,next: NextFunction) => {

    const errArr: string[] = [];
    const configKey = Object.keys(validateHandler);
    configKey.forEach(key => {
        const keyData = validateHandler[key];
        const values = keyData.in.map((location) => {
            return req[location][key];
        });
        const input = values[0];
        function checkRequire(input){
            if(keyData.hasOwnProperty('required')){
                if(input){
                    console.log(typeof(input));
                    return true;
                }
                else{
                    errArr.push(`${key} is required`);
                    return false;
                }
            }
            else{
                return true;
            }
            
        }
        function checkRegex(input){
            if(keyData.hasOwnProperty('regex')){
                if(keyData.regex.test(input)){
                    return true;
                }
                else{
                    errArr.push(`${key} is invalid`);
                    return false;
                }
            }
            else{
                return true;
            }
            
        }
        function checkString(input){
            if(keyData.hasOwnProperty('string')){
                if(typeof(input) === 'string'){
                    return true;
                }
                else{
                    errArr.push(`${key} should be a string`);
                    return false;
                }
            }
            else{
                return true;
            }
            
        }
        function inputFrom(){
            let inputVar: string;
            if(keyData.hasOwnProperty('in')){
                if(Object.keys(req.body).length){
                    inputVar = 'body';
                }
                if(Object.keys(req.query).length){
                    inputVar = 'query';
                }
                if(Object.keys(req.params).length){
                    inputVar = 'params';
                }

                const inputFrom = keyData.in[0];

                if(inputVar === inputFrom){
                    return true;
                }
                else{
                    errArr.push(`value should be from ${inputFrom}`);
                    return false;
                }

            }
            else{
                return true;
            }
            
        }
        function checkIsObject(input){
            if(keyData.hasOwnProperty('isObject')){
                if(typeof(input) === 'object'){
                    return true;
                }
                else{
                    errArr.push(`${key} should be object`);
                    return false;
                }
            }
            else{
                return true;
            }
            
        }
        function checkDefault(input){

            if(keyData.hasOwnProperty('default')){
                if(input !== null && typeof(input) === 'number'){
                    return true;
                }
                if(input === null || input < 0){
                    input = keyData.default;
                    return true;
                }
            }
            else{
                return true;
            }
            
        }
        function checkNumber(input){
            if(keyData.hasOwnProperty('number')){
                if(typeof(input) === 'number'){
                    return true;
                }
                else{
                    errArr.push(`${key} should be a number`);
                    return false;
                }
            }
            else{
                return true;
            }
            
        }
        function checkCustom(input){
            if(keyData.hasOwnProperty('custom')){
                keyData.custom.function(input);
                return true;
            }
            else{
                return true;
            }
        }
        if(checkRequire(input) && checkString(input) && checkRegex(input) && inputFrom() && checkIsObject(input) && checkDefault(input) && checkNumber(input)){
            console.log('Validation is Done');
            if(checkCustom(input)){
                console.log('Custom is validated');  
            }
        }
    });
    if(errArr.length){
        errArr.forEach(element => console.log(element));
        //throw new Error(`${errArr}`);
        // new errHandler(errArr);
        next(errArr);
    }
    else{
        next();
    }
}