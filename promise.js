{
			let ajax=function(callback){
                console.log('执行');
                setTimeout(function(){
                   callback&&callback();
                },1000);
			};
			ajax(function(){
				console.log('timeout1');
			})
		}
		{
			let ajax=function(){
               console.log('执行2');
               return new Promise(function(resolve,reject){
               	setTimeout(function(){
               		resolve();
               	},1000)
               })
			};
			ajax().then(function(){
				console.log('promise','timeout2');
			})
		}

		{
            let ajax=function(){
               console.log('执行3');
               return new Promise(function(resolve,reject){
               	setTimeout(function(){
               		resolve();
               	},1000)
               })
			};
			ajax().then(function(){
			   return new Promise(function(resolve,reject){
			   	setTimeout(function(){
			   		resolve();
			   	},2000);
			   })
			}).then(function(){
				console.log('timeout3');
			})
		}

		{
			let ajax=function(num){
				console.log('执行4');
				return new Promise(function(resolve,reject){
					if(num>5){
						resolve();
					}else{
						throw new Error('出错了');
					}
				})
			}
			ajax(3).then(function(){
				console.log('log',3);
			}).catch(function(err){
				console.log('catch',err);
			})
		}

		{
			//所有图片加载完后再添加到页面上
			function loadImg(src){
				return new Promise((resolve,reject)=>{
					let img=document.createElement('img');
					img.src=src;
					img.onload=function(){
						resolve(img);
					}
					img.onerror=function(err){
						reject(err);
					}
				})
			}
			function showImgs(imgs){
				imgs.forEach(function(img){
					document.body.appendChild(img);
				})
			}
			
		}

		{
			function loadImg(src){
				return new Promise((resolve,reject)=>{
					let img=document.createElement('img');
					img.src=src;
					img.onload=function(){
						resolve(img);
					}
					img.onerror=function(err){
						reject(err);
					}
				})
			}
		}