import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 风险图谱
export const riskChain = (data) => {
  data.importance = '3, 4'
  return http.get(`/chain/${data.industryCode}/risk/graph`, data)
}
// 风险图谱弹窗
export const riskDialog = async (data) => {
  await sleep(1000)
  let reponse = {}
  if (data.code === 'AC003005') {
    reponse = {
      indexes: [
        {
          indexName: '新能源汽车销量_当月值',
          indexUnit: '元',
          latestIndex: 200000,
          changeIndex: 39815,
          indexRatio: 24.86
        },
        {
          indexName: '新能源汽车产量_当月值',
          indexUnit: '元',
          latestIndex: 198000,
          changeIndex: 31332,
          indexRatio: 18.8
        },
        {
          indexName: '纯电动汽车保有量_中国',
          indexUnit: '元',
          latestIndex: 2581.186,
          changeIndex: 834.197,
          indexRatio: 47.75
        }
      ]
    }
  } else if (data.code === 'FA0040010709') {
    reponse = {
      indexes: []
    }
  } else if (data.code === 'EC0010010201') {
    reponse = {
      indexes: [
        {
          indexName: '动力电池装机量_当月值',
          indexUnit: '元',
          latestIndex: 6.56,
          changeIndex: 1.45,
          indexRatio: 28.38
        },
        {
          indexName: '动力电池装机量_累计值',
          indexUnit: '元',
          latestIndex: 34.16,
          changeIndex: 6.56,
          indexRatio: 23.77
        }
      ]
    }
  }
  return reponse
  return http.get(`/chain/${data.industryCode}/risk`, data)
}

export const boomChain = (data) => {
  data.importance = '3, 4'
  return http.get(`/chain/${data.industryCode}/risk/graph`, data)
}
export const boomDialog = async (data) => {
  await sleep(1000)
  let reponse = {}
  if (data.code === 'AC003005') {
    reponse = {
      prosperities: [
        {
          rpt: '12',
          value1: 0.241766206,
          value2: 1.574611919,
          value3: 0.05597118,
          value4: 0.737745486
        },
        {
          rpt: '1',
          value1: -1.047480446,
          value2: -0.783486592,
          value3: -1.061896245,
          value4: -0.944766065
        },
        {
          rpt: '2',
          value1: -1.047480446,
          value2: -1.486273737,
          value3: -1.964595436,
          value4: -1.406420761
        },
        {
          rpt: '3',
          value1: -1.047480446,
          value2: -0.646047801,
          value3: -1.362376991,
          value4: -0.949886697
        },
        {
          rpt: '4',
          value1: -0.556630382,
          value2: -0.115935383,
          value3: -1.277060686,
          value4: -0.524438443
        },
        {
          rpt: '5',
          value1: -0.556630382,
          value2: 0.024591601,
          value3: -1.158301593,
          value4: -0.444475831
        },
        {
          rpt: '6',
          value1: -0.556630382,
          value2: 0.444673132,
          value3: 0.135840853,
          value4: -0.01761473
        },
        {
          rpt: '7',
          value1: -0.664543485,
          value2: 0.359277898,
          value3: 0.649957888,
          value4: 0.007885343
        },
        {
          rpt: '8',
          value1: -0.664543485,
          value2: 0.582729614,
          value3: 0.816101395,
          value4: 0.13049473
        },
        {
          rpt: '9',
          value1: -0.664543485,
          value2: 1.16741931,
          value3: 1.280066644,
          value4: 0.457163659
        },
        {
          rpt: '10',
          value1: -0.642407429,
          value2: 1.727204685,
          value3: 0.206044364,
          value4: 0.475127775
        },
        {
          rpt: '11',
          value1: -0.642407429,
          value2: 2.477481158,
          value3: 1.597980401,
          value4: 1.053625572
        }
      ],
      indexes: [
        {
          indexName: '新能源汽车销量_当月值',
          indexUnit: '元',
          latestIndex: 200000,
          changeIndex: 39815,
          indexRatio: 24.86
        },
        {
          indexName: '新能源汽车产量_当月值',
          indexUnit: '元',
          latestIndex: 198000,
          changeIndex: 31332,
          indexRatio: 18.8
        },
        {
          indexName: '纯电动汽车保有量_中国',
          indexUnit: '元',
          latestIndex: 2581.186,
          changeIndex: 834.197,
          indexRatio: 47.75
        }
      ]
    }
  } else if (data.code === 'FA0040010709') {
    reponse = {
      prosperities: [
        {
          rpt: '12',
          value1: -0.56099777,
          value2: 1.177196526,
          value3: 0.712511746,
          value4: 0.388981852
        },
        {
          rpt: '1',
          value1: -0.745222964,
          value2: 1.260482309,
          value3: -0.615298234,
          value4: 0.083044091
        },
        {
          rpt: '2',
          value1: -0.745222964,
          value2: 1.261585469,
          value3: -0.170156201,
          value4: 0.172513762
        },
        {
          rpt: '3',
          value1: -0.745222964,
          value2: 1.320188745,
          value3: 0.121953872,
          value4: 0.254377087
        },
        {
          rpt: '4',
          value1: -0.214839405,
          value2: 1.348995375,
          value3: 0.012687016,
          value4: 0.456199791
        },
        {
          rpt: '5',
          value1: -0.214839405,
          value2: 1.370628633,
          value3: -0.48753935,
          value4: 0.364807821
        },
        {
          rpt: '6',
          value1: -0.214839405,
          value2: 1.412560044,
          value3: 0.212577641,
          value4: 0.521603783
        },
        {
          rpt: '7',
          value1: 0.007454832,
          value2: 1.457817907,
          value3: 1.144224854,
          value4: 0.814954067
        },
        {
          rpt: '8',
          value1: 0.007454832,
          value2: 1.604905963,
          value3: 0.786109894,
          value4: 0.802166297
        },
        {
          rpt: '9',
          value1: 0.007454832,
          value2: 1.684107223,
          value3: 0.918554743,
          value4: 0.860335771
        },
        {
          rpt: '10',
          value1: -2.776519329,
          value2: 2.02919843,
          value3: -0.788436558,
          value4: -0.456615671
        },
        {
          rpt: '11',
          value1: -2.776519329,
          value2: 2.187600952,
          value3: 0.394284439,
          value4: -0.156710463
        }
      ],
      indexes: []
    }
  } else if (data.code === 'EC0010010201') {
    reponse = {
      prosperities: [
        {
          rpt: '12',
          value1: 0.823827263,
          value2: 1.964718938,
          value3: 0.712511746,
          value4: 1.25792083
        },
        {
          rpt: '1',
          value1: -1.507207294,
          value2: -0.680492733,
          value3: -0.615298234,
          value4: -0.998139658
        },
        {
          rpt: '2',
          value1: -1.507207294,
          value2: -1.296157696,
          value3: -0.170156201,
          value4: -1.155377236
        },
        {
          rpt: '3',
          value1: -1.507207294,
          value2: -0.522997045,
          value3: 0.121953872,
          value4: -0.787690961
        },
        {
          rpt: '4',
          value1: -0.779079541,
          value2: -0.222323459,
          value3: 0.012687016,
          value4: -0.398023797
        },
        {
          rpt: '5',
          value1: -0.779079541,
          value2: -0.254538486,
          value3: -0.48753935,
          value4: -0.510955081
        },
        {
          rpt: '6',
          value1: -0.779079541,
          value2: 0.174995209,
          value3: 0.212577641,
          value4: -0.199118205
        },
        {
          rpt: '7',
          value1: 0.605487719,
          value2: 0.275219738,
          value3: 1.144224854,
          value4: 0.581127953
        },
        {
          rpt: '8',
          value1: 0.605487719,
          value2: 0.318173107,
          value3: 0.786109894,
          value4: 0.526686309
        },
        {
          rpt: '9',
          value1: 0.605487719,
          value2: 0.837192989,
          value3: 0.918554743,
          value4: 0.760783232
        },
        {
          rpt: '10',
          value1: 0.318037684,
          value2: null,
          value3: -0.788436558,
          value4: null
        },
        {
          rpt: '11',
          value1: 0.318037684,
          value2: null,
          value3: 0.394284439,
          value4: null
        }
      ],
      indexes: [
        {
          indexName: '动力电池装机量_当月值',
          indexUnit: '元',
          latestIndex: 6.56,
          changeIndex: 1.45,
          indexRatio: 28.38
        },
        {
          indexName: '动力电池装机量_累计值',
          indexUnit: '元',
          latestIndex: 34.16,
          changeIndex: 6.56,
          indexRatio: 23.77
        }
      ]
    }
  }
  return reponse
  return http.get(`/chain/${data.industryCode}/boom`, data)
}
