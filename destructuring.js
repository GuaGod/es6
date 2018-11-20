/*
function *g(){
    yield 'a';
    yield;
    yield 'c';
}
var gen=g();
console.log(gen);
console.log(gen.next());
*/

/*
function* test(){
    function test2(){
        console.log(1);
        yield 3;
    }
    yield 1;
    return 2;
}
var con=test();
console.log(con.next());
*/
/*
function createIterator(items){
    var i=0;
    return {
        next:function(){
            var done=(i>=items.length);
            var value=done?undefined:items[i++];
            return{
                done:done,
                value:value
            }
        }
    }
}
var iterator=createIterator([1,2,3]);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
*/
/*
function *test(){
    yield 1;
    yield 2;
    return 3;
}
var con=test();
console.log(con.next());
console.log(con.next());
console.log(con.next());
*/
var [foo=true]=[2];
console.log(foo);