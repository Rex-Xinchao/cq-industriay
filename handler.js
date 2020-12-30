const names = ['title', 'content', 'industryName', 'typeName', 'emotion', 'org', 'region', 'url', 'rpt', 'industryCode']
const valusString =
  '2017-01-31,null,null,0.11,0.11,2017-02-28,109.09,null,0.23,0.34,2017-03-31,308.7,null,0.94,1.28,2017-04-30,-1.06,null,0.93,2.21,2017-05-31,54.84,null,1.44,3.65,2017-06-30,50,null,2.16,5.81,2017-07-31,19.91,null,2.59,8.4,2017-08-31,11.97,null,2.9,11.3,2017-09-30,18.62,null,3.44,14.74,2017-10-31,-14.83,null,2.93,17.67,2017-11-30,138.23,null,6.98,24.65,2017-12-31,68.91,null,11.79,36.44,2018-01-31,-88.89,1090.91,1.31,1.31,2018-02-28,-21.37,347.83,1.03,2.34,2018-03-31,101.94,121.28,2.08,4.42,2018-04-30,80.77,304.3,3.76,8.18,2018-05-31,19.68,212.5,4.5,12.68,2018-06-30,-36.22,32.87,2.87,15.55,2018-07-31,16.38,28.96,3.34,18.89,2018-08-31,24.85,43.79,4.17,23.06,2018-09-30,37.17,66.28,5.72,28.78,2018-10-31,3.67,102.39,5.93,34.71,2018-11-30,50.25,27.65,8.91,43.62,2018-12-31,49.94,13.32,13.36,56.98,2019-01-31,-62.72,280.15,4.98,4.98,2019-02-28,-55.02,117.48,2.24,7.22,2019-03-31,127.23,144.71,5.09,12.31,2019-04-30,6.29,43.88,5.41,17.72,2019-05-31,4.99,26.22,5.68,23.4,2019-06-30,16.37,130.31,6.61,30.01,2019-07-31,-28.9,40.72,4.7,34.71,2019-08-31,-22.55,-12.71,3.64,38.35,2019-09-30,8.52,-30.94,3.95,42.3,2019-10-31,3.04,-31.37,4.07,46.37,2019-11-30,54.55,-29.41,6.29,52.66,2019-12-31,54.37,-27.32,9.71,62.37,2020-01-31,-76.11,-53.41,2.32,2.32,2020-02-29,-74.14,-73.21,0.6,2.92,2020-03-31,360,-45.78,2.76,5.68,2020-04-30,30.43,-33.46,3.6,9.28,2020-05-31,-2.5,-38.2,3.51,12.79,2020-06-30,34.19,-28.74,4.71,17.5,2020-07-31,5.94,6.17,4.99,22.49,2020-08-31,2.4,40.38,5.11,27.6,2020-09-30,28.38,66.08,6.56,34.16,'
let map = []
let index = null
valusString.split(',').forEach((item, i) => {
  index = Math.floor(i / names.length)
  current = i % names.length
  map[index] = map[index] || {}
  map[index][names[current]] = item
})
console.log(JSON.stringify(map))
