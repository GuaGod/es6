{
			let list =new Set();
			list.add(5);
			list.add(7);
			console.log('size',list.size);
		}

		{
			let arr=[1,2,3,4,5];
			let list=new Set(arr);
			console.log('size',list.size);
		}

		{
			let list=new Set();
			list.add(1);
			list.add(2);
			list.add(1);   //不会报错，只会失效
			console.log('list',list);
		}

		{
			let arr=[1,2,3,1,'2'];
			let list2=new Set(arr);
			console.log('unique',list2);  //不做数据类型的转换
		}

		{
			let arr=['add','delete','clear','has'];
			let list=new Set(arr);
			console.log('has',list.has('add'));
			console.log('delete',list.delete('add'),list);
			list.clear();
			console.log('list',list);
		}

		{
			let arr=['add','delete','clear','has'];
			let list=new Set(arr);

			for(let key of list.keys()){
				console.log('keys',key);
			}

			for(let value of list.values()){
				console.log('values',value);
			}

			for(let [key,value] of list.entries()){
				console.log(key,value);
			}

			list.forEach(function(item){
				console.log(item);
			})
		}

		{
			let weakList=new WeakSet();
			//和Set支持的数据类型不同 weakList只支持对象 只拷贝引用，不考虑垃圾回收
			let arg={a:1};
			weakList.add(arg);
			console.log('weakList',weakList);
			//weakList.add(2); 添加基本数据类型，会报错
            //没有clear 不可遍历 没有size属性
		}

		{
			let map=new Map();
			let arr=['123'];  //key可以是任何数据类型
			map.set(arr,456);
			console.log('map',map,map.get(arr));
		}

		{
			var arr=[321];
			let map=new Map([[arr,123],['b',456]]);
			console.log('map args',map);
			console.log('size',map.size);
			console.log('delete',map.delete(arr),map);
			//delete  key为对象时，要注意是同一个对象，新建的对象即使值和原对象一样，因为是引用的缘故，他们也是不同的，将导致无法删除对应的key，value
			console.log('clear',map.clear(),map);
		}

		{
			let weakmap=new WeakMap();
			//接收的key值必须是 对象
		    //无size 不可遍历 无clear。。和weakset与set的区别一样
		}