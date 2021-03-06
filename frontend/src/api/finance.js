import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const getStatusTable = async (data) => {
  await sleep(300)
  const result = {
    1: {
      result: [
        {
          name: 'GDP（亿元）',
          2019: 23605.77,
          2018: 21588.8,
          2017: 19424.73,
          unit: '亿元'
        },
        {
          name: 'GDP增速（%）',
          2019: 6.3,
          2018: 6.0,
          2017: 9.3,
          unit: '%'
        },
        {
          name: '人均GDP',
          2019: 75828.0,
          2018: 65933.0,
          2017: 63442.0,
          unit: '亿元'
        },
        {
          name: '第一产业',
          2019: 1551.42,
          2018: 1378.27,
          2017: 1276.09,
          unit: '亿元'
        },
        {
          name: '第二产业',
          2019: 9496.84,
          2018: 8328.79,
          2017: 8584.61,
          unit: '亿元'
        },
        {
          name: '第三产业',
          2019: 10656.13,
          2018: 9564.03,
          2017: 8500.36,
          unit: '亿元'
        },
        {
          name: '第一产业占比',
          2019: 6.57,
          2018: 7.42,
          2017: 7.32,
          unit: '%'
        },
        {
          name: '第二产业占比',
          2019: 40.23,
          2018: 38.58,
          2017: 44.19,
          unit: '%'
        },
        {
          name: '第三产业占比',
          2019: 53.2,
          2018: 49.36,
          2017: 49.24,
          unit: '%'
        }
      ]
    },
    2: {
      result: [
        {
          name: '工业增加值（亿元）',
          2019: null,
          2018: 5997.7,
          2017: 6587.08,
          unit: '亿元'
        },
        {
          name: '工业增加值（亿元）',
          2019: null,
          2018: 20690.04,
          2017: 21173.21,
          unit: '亿元'
        },
        {
          name: '固定资产投资（亿元）',
          2019: null,
          2018: null,
          2017: 17440.57,
          unit: '亿元'
        },
        {
          name: '房地产开发投资（亿元）',
          2019: 4439.3,
          2018: 4248.76,
          2017: 3980.08,
          unit: '亿元'
        }
      ]
    },
    3: {
      result: [
        {
          name: '进出口总额（亿美元）',
          2019: 839.7,
          2018: 790.4,
          2017: 666.04,
          unit: '亿美元'
        },
        {
          name: '进口额（亿美元）',
          2019: 538.04,
          2018: 513.77,
          2017: 425.99,
          unit: '亿美元'
        },
        {
          name: '出口额（亿美元）',
          2019: 301.66,
          2018: 276.63,
          2017: 240.05,
          unit: '亿美元'
        }
      ]
    },
    4: {
      result: [
        {
          name: '社会消费品零售总额（亿元）',
          2019: 8667.34,
          2018: 7977.01,
          2017: 8067.67,
          unit: '亿元'
        },
        {
          name: '城镇居民人均可支配收入（元）',
          2019: 37939.0,
          2018: 34889.3,
          2017: 32193.23,
          unit: '元'
        },
        {
          name: '农村居民人均纯收入（元）',
          2019: 15133,
          2018: 13781.22,
          2017: 12637.91,
          unit: '元'
        },
        {
          name: '人口（万人）',
          2019: 3124.32,
          2018: 3403.64,
          2017: 3389.82,
          unit: '万人'
        }
      ]
    },
    5: {
      result: [
        {
          name: '各项存款余额（本外币）（亿元）',
          2019: 39483.2,
          2018: 36887.34,
          2017: 64853.53,
          unit: '亿元'
        },
        {
          name: '各项贷款余额（本外币）（亿元）',
          2019: 37105.02,
          2018: 32247.75,
          2017: 28417.46,
          unit: '亿元'
        }
      ]
    }
  }
  if (data.type) {
    return result[data.type]
  } else {
    return {
      result: []
    }
  }
  return http.get(`test`, data)
}

export const getIncomesTable = async (data) => {
  await sleep(300)
  const result = {
    1: {
      result: [
        {
          name: '一般公共预算收入（亿元）',
          2020: 2156,
          2019: 2134.88,
          2018: 2265.54,
          unit: '亿元'
        },
        {
          name: '转移性收入（亿元）',
          2020: 2639,
          2019: 3327,
          2018: 2950.2,
          unit: '亿元'
        },
        {
          name: '税收收入（亿元）',
          2020: null,
          2019: 1541.16,
          2018: 1603.03,
          unit: '亿元'
        },
        {
          name: '地方政府一般债券收入（亿元）',
          2020: 385,
          2019: 331,
          2018: 344.8,
          unit: '亿元'
        },
        {
          name: '一般公共预算支出（亿元）',
          2020: 4456.0,
          2019: 4847.79,
          2018: 4540.95,
          unit: '亿元'
        },
        {
          name: '转移性支出（亿元）',
          2020: 339,
          2019: 614,
          2018: 674.8,
          unit: '亿元'
        },
        {
          name: '地方政府一般债券还本支出（亿元）',
          2020: 290,
          2019: 165.5,
          2018: 209.5,
          unit: '亿元'
        }
      ]
    },
    2: {
      result: [
        {
          name: '政府性基金收入（亿元）',
          2020: 2115,
          2019: 2247.93,
          2018: 2316.25,
          unit: '亿元'
        },
        {
          name: '土地出让收入（亿元）',
          2020: null,
          2019: 1880.23,
          2018: 2135.28,
          unit: '亿元'
        },
        {
          name: '地方政府专项债券收入（亿元）',
          2020: 442,
          2019: 922.3,
          2018: 669.6,
          unit: '亿元'
        },
        {
          name: '政府性基金支出（亿元）',
          2020: 2005,
          2019: 2419.26,
          2018: 2677.48,
          unit: '亿元'
        },
        {
          name: '地方政府专项债券还本支出（亿元）',
          2020: 221,
          2019: 117.3,
          2018: 108.6,
          unit: '亿元'
        }
      ]
    },
    3: {
      result: [
        {
          name: '国有资本经营收入（亿元）',
          2020: 85,
          2019: 131.8,
          2018: 105.22,
          unit: '亿元'
        },
        {
          name: '国有资本经营支出（亿元）',
          2020: 55,
          2019: 46.2,
          2018: 52.15,
          unit: '亿元'
        }
      ]
    },
    4: {
      result: [
        {
          name: '地方政府债务余额（亿元）',
          2020: null,
          2019: 5603.7,
          2018: 4690.4,
          unit: '亿元'
        },
        {
          name: '一般债余额（亿元）',
          2020: null,
          2019: 2524.3,
          2018: 2356,
          unit: '亿元'
        },
        {
          name: '专项债余额（亿元）',
          2020: null,
          2019: 3079.4,
          2018: 2335.4,
          unit: '亿元'
        },
        {
          name: '地方政府债务限额（亿元）',
          2020: 7273.4,
          2019: 6049.4,
          2018: 5093.4,
          unit: '亿元'
        },
        {
          name: '一般债限额（亿元）',
          2020: 2936.6,
          2019: 2766.6,
          2018: 2590.6,
          unit: '亿元'
        },
        {
          name: '专项债限额（亿元）',
          2020: 4336.8,
          2019: 3282.8,
          2018: 2502.8,
          unit: '亿元'
        },
        {
          name: '财政自给率（%）',
          2020: 48.38,
          2019: 44.04,
          2018: 49.89,
          unit: '%'
        },
        {
          name: '负债率（亿元）',
          2020: null,
          2019: 23.74,
          2018: 21.73,
          unit: '亿元'
        },
        {
          name: '负债率（宽口径）（亿元）',
          2020: null,
          2019: 86.34,
          2018: 84.11,
          unit: '亿元'
        },
        {
          name: '债务率（亿元）',
          2020: null,
          2019: 71.46,
          2018: 61.42,
          unit: '亿元'
        },
        {
          name: '债务率（宽口径）（亿元）',
          2020: null,
          2019: 259.92,
          2018: 237.76,
          unit: '亿元'
        }
      ]
    }
  }
  if (data.type) {
    return result[data.type]
  } else {
    return {
      result: []
    }
  }
  return http.get(`test`, data)
}
