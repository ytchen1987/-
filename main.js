
// 浅拷贝
function shallowCopy(obj) {
  var newObj = {};
  for (var prop in obj) {
     newObj[prop] = obj[prop]
  }
  return newObj;  
}

var obj =  {
  name : 'ytchen',
  arr : [1,2,3]
}

var newCopyObj = shallowCopy(obj);
console.log(newCopyObj);// {name:'ytchen',arr:[11,2,3]}
console.log(obj);  // {name:'ytchen',arr:[11,2,3]}
newCopyObj.arr[0] = 11;


//深拷贝 constructor 

function deepCopy(obj,copyObj){
  var copyObj = copyObj || {};
  for (var prop in obj) {
      if(typeof obj[prop] == 'object'){
          if (obj[prop].constructor == 'Array'){  //属性为数组   这里也可以使用   obj[prop] instanceof Array
            copyObj[prop] = [];
          } else{
            copyObj[prop] = {};
          }
         arguments.callee(obj[prop],copyObj[prop]) 
      } else {
         copyObj[prop] = obj[prop]
      }
  } 
  return copyObj;
}

var Obj = {
   age:'5',
   arr:[1,2,3],
   info:{
     "test":"test"
   }
}
var copyObj = {
   name:"ytchen"
}

var newObj = deepCopy(Obj,copyObj);

console.log(newObj);// {name:'ytchen',age:'5',arr:[1,2,3], info:{"test":"test"}}

Obj.arr[0] = 11;


console.log(newObj);// {name:'ytchen',age:'5',arr:[1,2,3], info:{"test":"test"}}



