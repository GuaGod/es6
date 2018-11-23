{
    for(let value of 'foo'){
        console.log(value);
    }
    console.log('----');
}

{
    var text=String.fromCodePoint(0x20bb8);
    for(let i=0;i<text.length;i++){
        console.log(text[i]);
    }

    console.log('----');
    for(let i of text){
        console.log(i);
    }
    console.log('---');
}

{
    console.log('\u01D1'.normalize()==='\u004F\u030C'.normalize());
    console.log('----');
}

{
    var child="liang";
    var father="liangjie";
    console.log(child.indexOf(father));
    console.log('----');
}

{
    var s="hello world";
    console.log(s.startsWith('hello'));
    console.log(s.startsWith('wi'));
    console.log(s.endsWith('world'));
    console.log(s.endsWith('qwe'));
    console.log(s.includes('wo'));
    console.log(s.includes('asd'));
    console.log('---');
}

{
    let result='x'.repeat(3);
    console.log(result);
    let result2='na'.repeat(2.9);
    console.log(result2);
    console.log('----');
}

{
    console.log(-5%3);
    console.log(-5/2);
    console.log('----');
}

{
    let result='x'.padStart(5,'abc');
    console.log(result);
    let result2='x'.padEnd(5,'qwe');
    console.log(result2);
}

{
  let result='liangjie';
  console.log(`my name is ${result}`);
  console.log(`my
  name`);
  console.log('--------');
}

{
    let x=1;
    let y=2;
    console.log(`${x}+${y}=${x+y}`);
    let obj={x:1,y:2};
    console.log(`${obj.x}+${obj.y}`);
    function fn(){
      return 'hello world'
    }
    console.log(`foo ${fn()} bar`);
}

{
    let template=`
    <ul>
      <% for(let i=0;i<data.supplies.length;i++){%>
         <li><%= data.supplies[i] %></li>
      <% } %>
    </ul>
    `
}

{
    let template=`
    <ul>
      <% for(let i=0;i<data.supplies.length;i++){%>
         <li><%= data.supplies[i] %></li>
      <% } %>
    </ul>
    `
    let evalExpr=/<%=(.+?)%>/g;
    let expr=/<%([\s\S]+?)%>/g;
    template=template.replace(evalExpr,'');
}

