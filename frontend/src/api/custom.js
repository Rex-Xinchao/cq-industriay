import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const loan_balance = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        rpt: '2019',
        loanBalance: 50,
        comNum: 20
      },
      {
        rpt: '2020',
        loanBalance: 100,
        comNum: 10
      }
    ]
  }
  return http.post(`/api/loan_balance`, data)
}

export const abnormal_loan = async (data) => {
  await sleep(1000)
  return {
    result: [
      {
        rpt: '2019',
        badList: [
          {
            badloan: 50,
            comNum: 10,
            badloanType: '关注类'
          },
          {
            badloan: 50,
            comNum: 80,
            badloanType: '可疑类'
          }
        ]
      },
      {
        rpt: '2020',
        badList: [
          {
            badloan: 50,
            comNum: 20,
            badloanType: '关注类'
          },
          {
            badloan: 50,
            comNum: 20,
            badloanType: '可疑类'
          }
        ]
      }
    ]
  }
  return http.post(`/api/abnormal_loan`, data)
}

export const total_loan_balance = async (data) => {
  await sleep(1000)
  return {
    result: {
      big: {
        comNum: 1022,
        amount: 85220
      },
      middle: {
        comNum: 1022,
        amount: 85220
      },
      small: {
        comNum: 1022,
        amount: 85220
      }
    }
  }
  return http.post(`/api/total_loan_balance`, data)
}

export const total_abnormal_loan = async (data) => {
  await sleep(1000)
  return {
    result: {
      big: {
        comNum: 1022,
        amount: 85220
      },
      middle: {
        comNum: 1022,
        amount: 85220
      },
      small: {
        comNum: 1022,
        amount: 85220
      }
    }
  }
  return http.post(`/api/total_abnormal_loan`, data)
}
