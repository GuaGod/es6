//let必须先声明后使用
var tmp=123;
/**
 * 暂时性死区1
 * @param {*} x 
 * @param {*} y 
 */
/*
function bar(x=y,y=2){
   return [x,y];
}
bar();
*/
/*
function test(){
    let a=10;
    let a=1;
}
test();
*/
/*
function func(arg){
    let arg;
}
func();

function func(arg){
    {
        let arg;
    }
}
func();


var tmp=new Date();
function f(){
    console.log(tmp);
    if(false){
        var tmp;
    }
}
f();
*/
import * as test from './letandconst2';
console.log('A',A);