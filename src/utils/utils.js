// 初始化时间格式为yyyy-mm-dd hh:mm:ss
export const formatDate = (datetime) => {
  let date = new Date(datetime);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let year = date.getFullYear(),
    month = ("0" + (date.getMonth() + 1)).slice(-2),
    sdate = ("0" + date.getDate()).slice(-2),
    hour = ("0" + date.getHours()).slice(-2),
    minute = ("0" + date.getMinutes()).slice(-2),
    second = ("0" + date.getSeconds()).slice(-2);
  // 拼接
  let result = year + "-" + month + "-" + sdate + " " + hour + ":" + minute + ":" + second;
  // 返回
  return result;
}

// 数字保留两位小数，不足补0
export const changeTwoDecimal_f = (x) => {
  let f_x = parseFloat(x);
  if (isNaN(f_x)) {
    return 0;
  }
  f_x = Math.floor(f_x * 100) / 100;
  let s_x = f_x.toString();
  let pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0';
  }
  return s_x;
}

/**
 * js小数想加减乘除精度丢失方法
 * @param arg1
 * @param arg2
 * @returns {number}
 */
//加
export const floatAdd = (arg1, arg2) => {
  let r1, r2, m;
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m;
}

//减
export const floatSub = (arg1, arg2) => {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2));
  //动态控制精度长度
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

//乘
export const floatMul = (arg1, arg2) => {
  let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
  try {
    m += s1.split(".")[1].length
  } catch (e) {
  }
  try {
    m += s2.split(".")[1].length
  } catch (e) {}
  return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}


//除
export const floatDiv = (arg1, arg2) => {
  let t1 = 0, t2 = 0, r1, r2;
  try {
    t1 = arg1.toString().split(".")[1].length
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length
  } catch (e) {
  }
  r1 = Number(arg1.toString().replace(".", ""));
  r2 = Number(arg2.toString().replace(".", ""));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}

export const Utils = {
  _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isString(obj) { //是否字符串
    return Utils._typeof(obj) === 'string'
  },
  isNumber(obj) { //是否数字
    return Utils._typeof(obj) === 'number'
  },
  isBoolean(obj) { //是否boolean
    return Utils._typeof(obj) === 'boolean'
  },
  isFunction(obj) { //是否函数
    return Utils._typeof(obj) === 'function'
  },
  isNull(obj) { //是否为null
    return Utils._typeof(obj) === 'null'
  },
  isUndefined(obj) { //是否undefined
    return Utils._typeof(obj) === 'undefined'
  },
  isArray(obj) { //是否数组
    return Utils._typeof(obj) === 'array'
  },
  isDate(obj) { //是否时间
    return Utils._typeof(obj) === 'date'
  },
  /*是否是纯粹的对象*/
  isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  /*是否是空数组*/
  isNonEmptyArray(obj = []) {
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  /*是否是对象*/
  isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  },
  /*是否是空对象*/
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  //对象是否包含某属性
  isIncludeAttr(obj, attr) {
    //判断是否有该键值
    if (obj && obj.hasOwnProperty(attr)) {
      //如果有返回true
      return true;
    }
    return false;

  },
  decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    const regExp = /&#x[a-z|0-9]{4,5};?/g;
    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        const replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  /*深拷贝*/
  mergeDeep(target) {
    let tempObj = Array.isArray(target) ? [] : {};
    for (let key in target) {
      tempObj[key] = Utils.isObject(target[key]) ? Util.mergeDeep(target[key]) : target[key];
    }
    return tempObj;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk(arr = [], size = 4) {
    let groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map((e, i) => {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(e => {
        return e;
      });
    }
    return groups;
  },
  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString(str, len, hasDot = true) {
    let newLength = 0;
    let newStr = '';
    let singleChar = '';
    const chineseRegex = /[^\x00-\xff]/g;
    const strLength = str.replace(chineseRegex, '*').length;
    for (let i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();
      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }
    return newStr;
  },
  /*
   * 转换 obj 为 url params参数
   * @param obj 传入对象
   * @param isEncodeURIComponent 是否编码，默认不编码
   * @returns {String}
   * eg. objToParams({name:'大佬',age:18})
   */
  objToParams(obj, isEncodeURIComponent = false) {
    let str = "";
    for (let key in obj) {
      if (str !== "") {
        str += "&";
      }
      str += key + "=" + (isEncodeURIComponent ? encodeURIComponent(obj[key]) : obj[key]);
    }
    return str;
  },
  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @param isDecodeURI 是否解码，默认不解码
   * @returns {Object}
   * eg. paramsToObj('http://www.cctv.com?name=大佬&age=18')
   */
  paramsToObj(str, isDecodeURI = false) {
    let obj = {};
    str = str.substring(str.indexOf('?') + 1);
    try {
      obj = JSON.parse('{"' + (isDecodeURI ? decodeURI(str) : str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    } catch (e) {
      console.log(e);
    }
    return obj;
  },
  /*
   *保留n位小数
   *@param num {Number|String} 原数字 1.33或者'1.33'
   *@returns {String} 返回字符串
   */
  toThousands(num, n) {
    return parseFloat(num).toFixed(n).replace(/(\d{1,3})(?=(\d{3})+(?:\.))/g, "$1,");
  },
  /*
   *生成两位整数之间的随机整数(包括两端的整数 )
   *
   **/
  randomA(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  /*
   *生成两位整数之间的随机整数(不包括两端的整数)
   *
   **/
  randomB(min, max) {
    min += 1, max -= 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  /*时间格式化*/
  formatTime(obj, format) {
    if (format) {
      let date;
      if (obj instanceof Date) {
        date = obj;
      } else {
        date = new Date(obj);
      }
      let dayNames = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日',]

      let o = {
        'M+': date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1), // 月份
        'd+': date.getDate() < 10 ? "0" + date.getDate() : date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        'S+': date.getMilliseconds(), // 毫秒
        'D+': dayNames[date.getDay()], //星期
      };

      if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
      for (let k in o) {
        if (new RegExp(`(${k})`).test(format)) {
          format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : ((`00${o[k]}`).substr((`${o[k]}`).length)));
        }
      }
      return format;
    } else {
      let date = new Date(obj)
      let _year = date.getFullYear(),
        _month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1),
        _date = date.getDate(),
        _hour = date.getHours(),
        _minute = date.getMinutes(),
        _second = date.getSeconds()
      return _year + '-' + _month + '-' + _date + ' ' + _hour + ':' + _minute + ':' + _second
    }
  },
  /*去掉首尾空格*/
  trimStr(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  /*正则匹配*/
  checkStr(str, type) {
    switch (type) {
      case 'phone':   //手机号码
        return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
      case 'tel':     //座机
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
      case 'card':    //身份证
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
      case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
        return /^[a-zA-Z]\w{5,17}$/.test(str)
      case 'postal':  //邮政编码
        return /[1-9]\d{5}(?!\d)/.test(str);
      case 'QQ':      //QQ号
        return /^[1-9][0-9]{4,9}$/.test(str);
      case 'email':   //邮箱
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
      case 'money':   //金额(小数点2位)
        return /^\d*(?:\.\d{0,2})?$/.test(str);
      case 'URL':     //网址
        return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
      case 'IP':      //IP
        return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
      case 'date':    //日期时间
        return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
      case 'number':  //数字
        return /^[0-9]$/.test(str);
      case 'positiveInteger':  //正整数
        return /^[1-9]\d*$/.test(str);
      case 'price':  //价格
        return /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/.test(str);//价格非0则去掉'?'
      case 'english': //英文
        return /^[a-zA-Z]+$/.test(str);
      case 'chinese': //中文
        return /^[\u4E00-\u9FA5]+$/.test(str);
      case 'lower':   //小写
        return /^[a-z]+$/.test(str);
      case 'upper':   //大写
        return /^[A-Z]+$/.test(str);
      case 'HTML':    //HTML标记
        return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
      default:
        return true;
    }
  },
  /**
   * @param  {s} 秒数
   * @return {String} 字符串
   *
   * @example formatHMS(3610) // -> 1h0m10s
   */
  formatHMS(s) {
    let str = ''
    if (s > 3600) {
      str = Math.floor(s / 3600) + 'h' + Math.floor(s % 3600 / 60) + 'm' + s % 60 + 's'
    } else if (s > 60) {
      str = Math.floor(s / 60) + 'm' + s % 60 + 's'
    } else {
      str = s % 60 + 's'
    }
    return str
  },
  //根据月份获取起止时间戳
  getTimeFromMonth(year, month) {
    return [
      new Date(year, month - 1, 1).getTime() / 1000,
      new Date(year, month, 0).getTime() / 1000
    ]
  },
//根据日期获取一天起止时间戳
  getTimeFromDay(year, month, day) {
    return [
      new Date(year, month - 1, day).getTime() / 1000,
      new Date(year, month - 1, (day + 1)).getTime() / 1000
    ]
  },
  /*数组删除指定元素*/
  remove(arr, ele) {
    let index = arr.indexOf(ele);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  },
  // 数组求并集
  union(a, b) {
    return [...new Set([...a, ...b])];
  },
  // 数组求交集
  intersect(a, b) {
    return [...new Set([...a].filter(x => b.includes(x)))];
  },
  //数组求差集
  difference(a, b) {
    return [...new Set([...a].filter(x => !b.includes(x)))];
  },
  //数组内部交换
  internalExchange(n, m, arr) {
    [arr[n], arr[m]] = [arr[m], arr[n]];
  },
  //数组去重
  Deduplication(arr) {
    return [...new Set([...arr])]
  },
  /*数组最大值*/
  max(arr) {
    return Math.max.apply(null, arr);
  },
  /*数组最小值*/
  min(arr) {
    return Math.min.apply(null, arr);
  },
  //字符串首字母变大写
  changeIndexToUpperCase(str) {
    return str.replace(/\b\w+\b/g, function (word) {
      return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    });
  },

//格式化价格，12345.1  =》 12,345.10
  formatePrice(value) {
    value = (value + '').replace(/\.\d{2}(\d*)/, (match, $1) => match.replace($1, ''))//强制截取两位小数
    if (isNaN(value)) {
      return ''
    } else {
      //补0
      let s = value.toString();
      let rs = s.indexOf('.');
      if (rs < 0) {
        rs = s.length;
        s += '.';
      }
      while (s.length <= rs + 2) {
        s += '0';
      }
    }
    //千分位打逗号
    return (s + '').replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");
  },
  //emoji判断
  isEmojiCharacter(substring) {
    for (let i = 0; i < substring.length; i++) {
      let hs = substring.charCodeAt(i);
      if (0xd800 <= hs && hs <= 0xdbff) {
        if (substring.length > 1) {
          let ls = substring.charCodeAt(i + 1);
          let uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
          if (0x1d000 <= uc && uc <= 0x1f77f) {
            return true;
          }
        }
      } else if (substring.length > 1) {
        let ls = substring.charCodeAt(i + 1);
        if (ls == 0x20e3) {
          return true;
        }
      } else {
        if (0x2100 <= hs && hs <= 0x27ff) {
          return true;
        } else if (0x2B05 <= hs && hs <= 0x2b07) {
          return true;
        } else if (0x2934 <= hs && hs <= 0x2935) {
          return true;
        } else if (0x3297 <= hs && hs <= 0x3299) {
          return true;
        } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
          || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
          || hs == 0x2b50) {
          return true;
        }
      }
    }
  },
//解决计算偏移 eg. 1.67 - 1 = 0.66999999999   ,改用 accSub(1.67 - 1)
//加法偏移
  accAdd(arg1, arg2) {
    let r1, r2, m;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
  },
  //减法函数
  accSub(arg1, arg2) {
    let r1, r2, m, n;
    try {
      r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
      r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    //last modify by deeka
    //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  },
  //除法
  accDiv(arg1, arg2) {
    let t1 = 0, t2 = 0, r1, r2;
    try {
      t1 = arg1.toString().split(".")[1].length;
    } catch (e) {
    }
    try {
      t2 = arg2.toString().split(".")[1].length;
    } catch (e) {
    }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
  },
//乘法
  accMul(arg1, arg2) {
    let c = 0,
      d = arg1.toString().replace(',', ''),
      e = arg2.toString();
    try {
      c += d.split(".")[1].length;
    } catch (f) {
    }
    try {
      c += e.split(".")[1].length;
    } catch (f) {
    }
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
  },
  // 获取两点直线距离
  getDistance(lat1, lng1, lat2, lng2) {
    let lon1 = (Math.PI / 180) * lng1
    let lon2 = (Math.PI / 180) * lng2
    lat1 = (Math.PI / 180) * lat1
    lat2 = (Math.PI / 180) * lat2

    // 地球半径
    let R = 6371

    // 两点间距离 km，如果想要米的话，结果*1000就可以了
    let d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R

    return d.toFixed(1)
  }
}
