{
        //基本定义和生成实例
        class Parent {
            constructor(name = 'mukewang') {
                this.name = name;
            }
        }
        let v_parent = new Parent('liangjie');
    }

    {
        class Parent {
            constructor(name = 'mukewang') {
                this.name = name;
            }
        }

        class Child extends Parent {

        }
    }

    {
        class Parent {
            constructor(name = 'mukewang') {
                this.name = name;
            }
        }

        class Child extends Parent {
             constructor(name='child'){
             	super();
             }
        }
        var _child=new Child();
        console.log(_child);
    }
    {
    	class Parent{
    		constructor(name="parent"){
    			this.name=name;
    		}

    		get longName(){
              return 'mk-'+this.name
    		}

    		set longName(value){
    			this.name=value;
    		}
    	}
    	let v=new Parent();
    	console.log('getter',v.longName);
    	v.longName="hello";
    	console.log('setter',v.longName);
    }

    {
        //静态方法
        class Parent{
        	constructor(name="liangjie"){
        		this.name=name;
        	}
            //通过类调用，而不是类的实例
        	static tell(){
        		console.log('tell');
        	}
        }
        Parent.tell();
    }

    {
    	class Parent{
    		constructor(name="liangjie"){
    			this.name=name;
    		}

    		static tell(){
    			console.log('tell');
    		}
    	}
    	Parent.type="test";
        console.log('静态属性',Parent.type);
    }