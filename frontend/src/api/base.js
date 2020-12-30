import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 基准指标
export const standard = async (data) => {
  await sleep(300)
  return {
    result: [
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      },
      {
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      }
    ]
  }
  return http.get(`/base/${data.industryCode}/standard`, data)
}

// 指标趋势
export const tendency = async (data) => {
  await sleep(300)
  return {
    result: [
      {
        rpt: '2019',
        name: '毛利率',
        greateValue: '87.20',
        goodValue: '75.23',
        averageValue: '54.30',
        lowerValue: '40.20',
        badValue: '20.16'
      }
    ]
  }
  return http.get(`/base/${data.industryCode}/tendency`, data)
}

// 龙头财务
export const leading_financial = async (data) => {
  await sleep(300)
  return {
    result: [
      {
        comName: '客户A',
        comCode: 'XXXXXXXX',
        csfId: 'XXXXXXXXXX',
        income: 4200,
        grossMargin: 2420,
        growth: 75.23,
        gpr: 54.3,
        businessIncome: 2400,
        netIncome: 1200
      }
    ],
    time: '2019 Q2'
  }
  return http.get(`/base/${data.industryCode}/leading_financial`, data)
}
