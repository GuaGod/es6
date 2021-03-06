{
		   let obj={
		   	time:'2018-11-8',
		   	name:'net',
		   	_r:123
		   };

		   let monitor=new Proxy(obj,{
              //拦截对象的读取
              get(target,key){
               return target[key];
              },
              //拦截对象的设置
              set(target,key,value){
                 if(key==='name'){
                 	return target[key]=value;
                 }else{
                 	return target[key];
                 }
              },
              //拦截key in Object
              has(target,key){
              	if(key==='name'){
              		return target[key]
              	}else{
              		return false;
              	}
              },
              //拦截删除
              deleteProperty(target,key){
                if(key.indexOf('_')>-1){
                	delete target[key];
                	return true;
                }else{
                	return target[key];
                }
              },
              //拦截Object.keys,Object.getOwnPropertySymbols,Object.getOwnPropertyNames
              ownKeys(target){
              	return Object.keys(target).filter(item=>item!='time');
              }
		   });
		   
		}


		{
			let obj={
				time:"2018-11-8",
				name:'net',
				_r:123
			}

			Reflect.set(obj,'name','liangjie');
		}

		{
           function validator(target,validator){
           	return new Proxy(target,{
           		_validator:validator,
           		set(target,key,value,proxy){
           			if(target.hasOwnProperty(key)){
                       let va=this._validator[key];
                       if(!!va(value)){
                       	return Reflect.set(target,key,value,proxy);
                       }else{
                       	throw Error(`不能设置${key}到${value}`);
                       }
           			}else{
           				throw Error(`${key} 不存在`)
           			}
           		}
           	})
           }
           const personValidators={
           	name(val){
           		return typeof val==='string'
           	},
           	age(val){
           		return typeof val==='number' &&val>10
           	}
           }

           class Person{
           	constructor(name,age){
           		this.name=name;
           		this.age=age;
           		return validator(this,personValidators);
           	}
           }
           const person=new Person('lilei',30);
           person.name='liangjie';
           console.log(person);
           console.info(person);
		}