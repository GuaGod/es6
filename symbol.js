{
			//声明
			let a1=Symbol();
			let a2=Symbol();
			console.log(a1);
			console.log(a1===a2);
			let a3=Symbol.for('a1');
			let a4=Symbol.for('a1');	
			console.log(a3);
		}

		{
			let a1=Symbol('a');
			let a2=Symbol('a');
            let obj={
            	[a1]:'123',
            	[a2]:'452',
            	'abc':345,
            	'c':456
            }
            console.log('obj',obj);
            //不拿Symbol
            for(let [key,value] of Object.entries(obj)){
            	console.log('let of',key,value);
            }
            //只拿Symbol
            Object.getOwnPropertySymbols(obj).forEach(function(item){
            	console.log(obj[item]);
            })
            //全拿
            Reflect.ownKeys(obj).forEach(function(item){
                console.log('ownkeys',obj[item]);
            })
		}