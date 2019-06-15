

//定义类
class breakon { 
      bar = 'break'
      baz = 'on' 
      constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log('beakon run ok')
      } 
      toString() {
        return '(' + this.x + ', ' + this.y + ')';
      }
      static classMethod() {
        return true;
      } 
      
      /**
       * 让数据为相对比例放大或者变小
       * 一个例子 *  let arr =[90 ,120 ,30 ,40]
       *            allowProportion(arr,110) 
       * @param {Array} arr  传入的一维数组
       * @param {Number} allowMax 允许极值最大为多少(默认为100)
       */
     allowProportion(arr,allowMax=100){
        let maxValue=Math.max.apply([],arr) //获得极值
        let  _arr =[...arr]//浅拷贝 
        let compress=[] //存放压缩后的值 
        arr.forEach(vtrend=>{ 
            let maxIndex= _arr.indexOf(maxValue)//找到极值位置
            if(maxIndex>=0){ _arr.splice(maxIndex,0,allowMax)}//替换极值
            compress.push(  this.newTofixed(( allowMax/maxValue*vtrend ))) //计算极值相对的大小
        })
        return compress
      } 

      /**
       * 解决精度问题
       * @param {Number} floatNum 浮点数
       * @param {Array} n  控制的精度(默保留小数点后3位)
       */
      newTofixed(floatNum,n=3) { 
        // arguments[0]
        if(!n ||floatNum.toString().split('.').length===1) {return floatNum.valueOf() }//为空就返回值本身
        else {
          let deci = floatNum.toString().split('.')[1].length 
          let m = n||deci
          deci= Math.pow(10, m);//放大倍数 
          return Math.round(floatNum * deci) /deci;//4舍5入 
        } 
      }
      /**
       * 
       * @param {Object} objX 
       * @param {Object} objy 
       */
      sortObje(objX,objy){ 
        let x = objX,y = objy,z={}
       // 交集
       for (var key in x) {
        // getOwnPropertyDescriptor 判断是否存在这个key
           if (Object.getOwnPropertyDescriptor(y, key)) {
               console.log(key);
               z[key] = y[key];
           }
       }
       // 对象排序
       function sortObj(obj) {
           let arr = [];//先变成二维数组
           for (let i in obj) {
               arr.push([obj[i], i]);
           }; 
           arr.sort((a, b)=>a[0] - b[0]);
           // arr.reverse();// 翻转
           obj = {};
           for (let i = 0; i <arr.length; i++) {
               obj[arr[i][1]] = arr[i][0];
           }
           return obj;
       }
       z=sortObj(z); 
      }

      /**
       * 随机数 
       * @param {Number} minNum 
       * @param {Number} maxNum 
       */
      rNum(minNum, maxNum) {
        switch (arguments.length) {
          case 1: return Number.parseInt(Math.random() * minNum + 1, 10); break;
          case 2: return Number.parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10); break;
          default: return 0; break;
        }
      }
    /**
     * 查找字符串中重复的次数
     * 
     */
      countStr(str, strSplit) {
        return str.split(strSplit).length - 1
      }

      maxArr(arr) {
        return Math.max.apply(null, arr);
    }
    //数组最小值
      minArr(arr) {
        return Math.min.apply(null, arr);
    } 

    //判断所有类型
    isType(value){
     let typeString= Object.prototype.toString.call(value) //[object Array]
     return  typeString.substring(1,typeString.length-1).split(" ").pop() //Array
    }

} 
 