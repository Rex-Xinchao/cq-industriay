function formatDate(date, fmt = 'yyyy-MM-dd HH:mm:ss') {
  if (!date) return null
  let d = new Date(date)
  var o = {
    'M+': d.getMonth() + 1, //月份
    'd+': d.getDate(), //日
    'H+': d.getHours(), //小时
    'm+': d.getMinutes(), //分
    's+': d.getSeconds() //秒
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
  return fmt
}

function checkAddZone(num) {
  return num < 10 ? '0' + num.toString() : num
}

function isEmail(str) {
  let reg = /^([a-zA-Z0-9_-])+\@([a-zA-Z0-9_-])+\.([a-zA-Z0-9_-])+/
  return reg.test(str)
}

function isUrl(str) {
  let reg = /^https?:\/\/.+/
  return reg.test(str)
}

function numberFormat($str, $point) {
  if ($point !== 0) $point = Number($point || 2)
  if (isNaN($point)) $point = 2
  if ($point === 0) $str = Number($str).toFixed(0)
  else if ($point > 0) $str = Number($str).toFixed($point)
  $str = '' + $str
  return $str.replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,')
}

function converUnit($num, $lang = 'zh', $point = 1) {
  let _num = Number($num),
    _unit = ''
  if (!isNaN(_num)) {
    if ($lang === 'en') {
      if ($num < 10000) {
        _unit = ''
      } else if ($num < 1000000) {
        _num = _num / 1000
        _unit = 'Thousands'
      } else if ($num < 1000000000) {
        _num = _num / 1000000
        _unit = 'Millions'
      } else {
        _num = _num / 1000000000
        _unit = 'Billions'
      }
    } else {
      if ($num < 10000) {
        _unit = ''
      } else if ($num < 100000000) {
        _num = _num / 10000
        _unit = '万'
      } else {
        _num = _num / 100000000
        _unit = '亿'
      }
    }
    return numberFormat(_num, $point) + ' ' + _unit
  }
  return $num
}

function format(time) {
  let ymd = ''
  let mouth = time.getMonth() + 1 >= 10 ? time.getMonth() + 1 : '0' + (time.getMonth() + 1)
  let day = time.getDate() >= 10 ? time.getDate() : '0' + time.getDate()
  ymd += time.getFullYear() + '-' // 获取年份。
  ymd += mouth + '-' // 获取月份。
  ymd += day // 获取日。
  return ymd // 返回日期。
}

function getDaysOfMonth(year, month) {
  let date = new Date(year, month, 0)
  let days = date.getDate()
  return days
}

function getAllDate(start, end) {
  let dateArr = []
  let startArr = start.split('-')
  let endArr = end.split('-')
  let db = new Date()
  db.setUTCFullYear(startArr[0], startArr[1] - 1, startArr[2])
  let de = new Date()
  de.setUTCFullYear(endArr[0], endArr[1] - 1, endArr[2])
  let unixDb = db.getTime()
  let unixDe = de.getTime()
  let stamp
  const oneDay = 24 * 60 * 60 * 1000
  for (stamp = unixDb; stamp <= unixDe; ) {
    dateArr.push(format(new Date(parseInt(stamp))))
    stamp = stamp + oneDay
  }
  return dateArr
}

function getTimeLine(start, end) {
  if (!start || !end) return []
  let st = new Date(start)
  let et = new Date(end)
  let stYear = st.getFullYear()
  let stMonth = st.getMonth() + 1
  let stDay = st.getDate()
  let etYear = et.getFullYear()
  let etMonth = et.getMonth() + 1
  let etDay = et.getDate()
  let result = []
  for (let year = stYear; year <= etYear; year++) {
    let month = year === stYear ? stMonth : 1
    let month_limit = year === etYear ? etMonth : 12
    for (month; month <= month_limit; month++) {
      let day = year === stYear && month === stMonth ? stDay : 1
      let endDay = year === etYear && month === etMonth ? etDay : getDaysOfMonth(year, month)
      for (day; day <= endDay; day++) {
        result.push(`${year}-${checkAddZone(month)}-${checkAddZone(day)}`)
      }
    }
  }
  return result
}

function getAxisMax(max) {
  let step = max < 10 ? 5 : max < 100 ? 50 : 100
  let index = step
  while (max / index > step) {
    index *= step
  }
  return Math.ceil(max / index) * index
}

export { checkAddZone, isEmail, isUrl, converUnit, formatDate, getTimeLine, getAxisMax, getAllDate }
