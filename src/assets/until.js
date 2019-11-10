export function setParam (params) {
  var strParam = ''
  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var element = params[key]
      if (element) {
        var forntChar = strParam.length > 0 ? '&' : '?'
        strParam = strParam.concat(forntChar + key + '=' + encodeURIComponent(element))
      }
    }
  }
  return strParam
}

export function read (file) {
  return new Promise(function (resolve, reject) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      let base64 = e.target.result
      let image = new Image()
      image.src = base64
      image.onload = function () {
        resolve({
          width: image.width,
          height: image.height,
          src: base64,
          name: file.name
        })
      }
    }
  })
}

export function dataURLtoBlob (dataurl) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
// 将blob转换为file
export function blobToFile (theBlob, fileName) {
  theBlob.lastModifiedDate = new Date()
  theBlob.name = fileName
  return theBlob
}

export function copy (obj) {
  var newobj = obj.constructor === Array ? [] : {}
  if (typeof obj !== 'object') {
    return
  } else if (window.JSON) {
    newobj = JSON.parse(JSON.stringify(obj))
  } else {
    for (var i in obj) {
      newobj[i] = typeof obj[i] === 'object'
        ? copy(obj[i]) : obj[i]
    }
  }
  return newobj
}

export function compare (propertyName) {
  return function (object1, object2) {
    var value1 = object1[propertyName]
    var value2 = object2[propertyName]
    if (value2 < value1) {
      return 1
    } else if (value2 > value1) {
      return -1
    } else {
      return 0
    }
  }
}

// 判断ie
export function isIE () { // ie?
  if (!!window.ActiveXObject || 'ActiveXObject' in window) { return true } else { return false }
}

// https://regexper.com/#%3C%5B%5E%3E%5D%2B%3E
// http://tool.chinaz.com/regex/
// 去除所有的HTML标签并支持换行
export function formateTextrea (str) {
  if (str) {
    return str.replace(/<[^>]+>/g, '').replace(/\n/g, '<br/>')
  } else {
    return str
  }
}

// 判断字符串是否为json格式

export function isJSON (str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str)
      if (typeof obj === 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.log('error：' + str + '!!!' + e)
      return false
    }
  }
  console.log('It is not a string!')
}

function getScroll (target, top) {
  const prop = top ? 'pageYOffset' : 'pageXOffset'
  const method = top ? 'scrollTop' : 'scrollLeft'
  let ret = target[prop]
  if (typeof ret !== 'number') {
    ret = window.document.documentElement[method]
  }
  return ret
}

export function getOffset (ele) {
  const rect = ele.getBoundingClientRect()
  const scrollTop = getScroll(window, true)
  const scrollLeft = getScroll(window, false)
  const docEl = window.document.body
  const clientTop = docEl.clientTop || 0
  const clientLeft = docEl.clientLeft || 0
  return {
    top: rect.top + scrollTop - clientTop,
    left: rect.left + scrollLeft - clientLeft
  }
}
