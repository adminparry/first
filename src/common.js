//数字用分割符号隔开
//返回字符串
function thounds(num){   

		if(typeof(num) == "string" && arguments.length==1){

			var binery=num.split(".");

			var re=/(-?\d+)(\d{3})/    
			while(re.test(binery[0])){    
				binery[0]=binery[0].replace(re,"$1,$2")    
			}    
			    
			return  binery.join('.')  
		}else{
			return "invaild"
		} 
	} 
    //获取自定义属性元素
    //返回数组
function getByAttr(obj, name,value){
        var re=new RegExp('\\b'+value+'\\b');
        obj=document.getElementById('box');
        var aEle=obj.getElementsByTagName('*');
        var result=[];
        for(var i=0;i<aEle.length;i++)
        {
            if(re.test(aEle[i].getAttribute(name)))
            {
                result.push(aEle[i]);
            }
        }
        return result;
    }  