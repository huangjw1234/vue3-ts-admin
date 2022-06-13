/**
 * 判断路由是否相等
 */
export const diff = (obj1, obj2) => {
  delete obj1.close
  var o1 = obj1 instanceof Object
  var o2 = obj2 instanceof Object
  if (!o1 || !o2) {
    /*  判断不是对象  */
    return obj1 === obj2
  }

  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false
    //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
  }

  for (var attr in obj1) {
    var t1 = obj1[attr] instanceof Object
    var t2 = obj2[attr] instanceof Object
    if (t1 && t2) {
      return diff(obj1[attr], obj2[attr])
    } else if (obj1[attr] !== obj2[attr]) {
      return false
    }
  }
  return true
}

/**
 * 防抖
 */
export const debounce = (fun, delay) => {
  let timer = null
  return function (...args) {
    const _this = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(_this, args)
    }, delay)
  }
}

/**
 * 节流
 */
export const throttle = (fun, delay) => {
  let timer = null
  return function (...args) {
    const _this = this
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fun.apply(_this, args)
      timer = null
    }, delay)
  }
}

/**
 * 去重
 */
export const unique = (arr) => {
  return Array.from(new Set(arr))
}

/**
 * 快速排序
 */
export const quickSort = (arr) => {
  if (arr.length <= 1) return arr

  let index = Math.floor(arr.length / 2)

  let arrIndex = arr.splice(index, 1)[0]

  let left = []
  let right = []

  arr.forEach((item) => (item < arrIndex ? left.push(item) : right.push(item)))

  return [...quickSort(left), arrIndex, ...quickSort(right)]
}

/**
 * 冒泡排序
 */
export const bubblingSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

/**
 * 去重2
 */
export const unique2 = (arr) => {
  let list = []
  for (let i = 0; i < arr.length; i++) {
    if (!list.includes(arr[i])) {
      list.push(arr[i])
    }
  }

  return list
}

/**
 * 深拷贝
 */
export const deepClone = (data) => {
  let obj
  if (data instanceof Array) {
    obj = []
  } else if (data instanceof Object) {
    obj = {}
  } else {
    return data
  }

  if (data instanceof Array) {
    for (let i = 0; i < data.length; i++) {
      obj.push(deepClone(data[i]))
    }
  } else if (data instanceof Object) {
    for (let j in data) {
      obj[j] = deepClone(data[j])
    }
  }

  return obj
}
