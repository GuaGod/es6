{
			//数据结构横向对比，增删查改
			let map=new Map();
            let array=[];
            //增
            map.set('t',1);
            array.push({t:1});
            console.info('map-array',map,array);
            //查
            let map_exist=map.has('t');
            let array_exist=array.find(item=>item.t);
            console.log('map-array',map_exist,array_exist);
            //改
            map.set('t',2);
            array.forEach(item=>item.t?item.t=2:'');
            console.log('map-array-modify',map,array);
            //删除
            map.delete('t');
            let index=array.findIndex(item=>item.t);
            array.splice(index,1);
            console.log('map-array-empty',map,array);
		}

		{
			//set和array的对比
			let set=new Set();
			let array=[];
            //增
            set.add({t:1});
            array.push({t:1});
            console.log('set-array',set,array);
            //查
            let set_exist=set.has({t:1});//只保存引用
            let array_exist=array.find(item=>item.t);
            console.log('set-array',set_exist,array_exist);
            //改
            set.forEach(item=>item.t?item.t=2:'');
            array.forEach(item=>item.t?item.t=2:'');
            console.log('set-array-modify',set,array);
            //删
            set.forEach(item=>item.t?set.delete(item):'');
            let index=array.findIndex(item=>item.t);
            array.splice(index,index);
		}

		{
			//map,set,object对比
			let item={t:1};
			let map=new Map();
			let set=new Set();
			let obj={};

			//增
			map.set('t',1);
			set.add(item);
			obj['t']=1;
			console.log('map-set-obj',map,set,obj);

			//查
			console.log({
				map_exist:map.has('t'),
				set_exist:set.has(item),
				obj_exist:'t' in obj
			})
            //改
            map.set('t',2);
            item.t=3;
            obj['t']=2;
            console.log(map,set,obj);
            //删除
            map.delete('t');
            set.delete(item);
            delete obj['t'];
            console.log(map,set,obj);
		}