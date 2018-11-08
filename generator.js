{
          let tell=function*(){
          	console.log(1);
          	yield 'a';
          	console.log(2);
          	yield 'b';
          	console.log(3);
          	return 'c'
          }
          let k=tell();
          console.log(k.next());
        }

        {
          let obj={};
          obj[Symbol.iterator]=function*(){
            yield 1;
            yield 2;
            yield 3;
          } 

        }
        {
          let state=function*(){
            while(1){
              yield 'A';
              yield 'B';
              yield 'C';
            }
          }
          let status=state();
          console.log(status.next());
          console.log(status.next());
          console.log(status.next());
          console.log(status.next());
          console.log(status.next());
          console.log(status.next());
          console.log('------------');
        }
       {
         let draw=function(count){
           console.info('剩余${count}次')
         }
         let residue=function*(count){
            while(count>0){
              count--;
              yield draw(count);

            }
         }
         let star=residue(5);
       }
       {
         let ajax=function*(){
            yield new Promise(function(resolve,reject){
              setTimeout(function(){
                resolve({code:0})
              },200);
            })
         }
         let pull=function(){
           let generator=ajax();
           let step=generator.next();
           step.value.then(function(d){
             if(d.code!=0){
               setTimeout(function(){
                 console.log('wait');
                 pull();
               },1000);
             }else{
               console.log(d);
             }
           })
         }
       }