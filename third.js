{
let {foo,bar}={ bar:'bbb',foo:'aaa'};
console.log(foo);
console.log(bar);
}

{
let {foo:value}={foo:'xxx'};
console.log(value);
}

{
   let foo;
   ({foo}={foo:1});
   console.log(foo);
   let foo2;                       
   console.log(foo2);
}

{
    let {foo}={baz:'baz'};
    console.log(foo);
}

{
    let {log,sin,cos}=Math;
    console.log(log);
    console.log(sin);
    console.log(cos);
    console.log('---------');
}

{
    const [a,b,c,d,e]="hello";
    console.log(a,b,c,d,e);
    let {length}='hello';
    console.log(length);
}

{
    let {toString:s}=123;
    console.log(s===Number.prototype.toString);
}