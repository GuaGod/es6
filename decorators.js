{
    let readonly=function(target,name,descriptor){
        descriptor.writable=false;
        return descriptor;
    };
    class Test{
        @readonly 
        
    }
    
}

{
    let typename=function(target,name,descriptor){
        target.myname='hello';
    }
    @typename
    class Test{

    }
    console.log('类修饰符',Test.myname);
}