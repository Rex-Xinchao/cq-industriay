import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

export const getBaseItem = (data) => {
  return http.get(`/base/item`, data)
}

// 基准指标
export const standard = (data) => {
  return http.get(`/base/industry/${data.industryCode}/fin_standard`, data)
}

// 指标趋势
export const tendency = (data) => {
  return http.get(`/base/industry/${data.industryCode}/fin_tendency`, data)
}

// 龙头财务
export const leading_financial = async (data) => {
  await sleep(300)
  let marketMap = {
    A股: 1,
    三板: 2,
    发债: 3
  }
  let standardTypeMap = {
    业务指标: 1
  }
  let response = [
    {
      market: '三板',
      comCode: 'CSF0000199614',
      comName: '安徽华信电动科技股份有限公司',
      rpt: '2018年',
      income: 10329178.59,
      growth: -0.328871787935869,
      standardType: '业务指标',
      businessIncome: '',
      netIncome: ''
    },
    {
      market: '三板',
      comCode: 'CSF0000199614',
      comName: '安徽华信电动科技股份有限公司',
      rpt: '2017年',
      income: 15390767.97,
      standardType: '业务指标',
      businessIncome: 135579529.16,
      netIncome: 11452088.04
    },
    {
      market: '三板',
      comCode: 'CSF223290229',
      comName: '浙江麦浪电气股份有限公司',
      rpt: '2018年',
      income: 6372917.71,
      grossMargin: 418499.33,
      gpr: 0.0656684032406877,
      growth: 0.539263796969947,
      standardType: '业务指标',
      businessIncome: '',
      netIncome: ''
    },
    {
      market: '三板',
      comCode: 'CSF223290229',
      comName: '浙江麦浪电气股份有限公司',
      rpt: '2017年',
      income: 4140237.51,
      grossMargin: 541485.93,
      gpr: 0.130786199751135,
      standardType: '业务指标',
      businessIncome: 59406443.24,
      netIncome: 285649.56
    },
    {
      market: '三板',
      comCode: 'CSF233856755',
      comName: '广东绿通新能源电动车科技股份有限公司',
      rpt: '2016年',
      income: 173402188,
      grossMargin: 55684297.98,
      gpr: 0.321128000876206,
      growth: 0.258217834528314,
      standardType: '业务指标',
      businessIncome: 185825692.46,
      netIncome: 14729323.23
    },
    {
      market: '三板',
      comCode: 'CSF233856755',
      comName: '广东绿通新能源电动车科技股份有限公司',
      rpt: '2015年',
      income: 137815713.02,
      grossMargin: 32748010.21,
      gpr: 0.237621744954783,
      growth: 0.306835051354515,
      standardType: '业务指标',
      businessIncome: 144046460.83,
      netIncome: 5315289.07
    },
    {
      market: '三板',
      comCode: 'CSF233856755',
      comName: '广东绿通新能源电动车科技股份有限公司',
      rpt: '2014年',
      income: 105457619.06,
      grossMargin: 24879896.94,
      gpr: 0.23592318091161,
      standardType: '业务指标',
      businessIncome: 112879050.61,
      netIncome: 2552894.27
    },
    {
      market: '三板',
      comCode: 'CSF0000004799',
      comName: '上海沿锋汽车科技股份有限公司',
      rpt: '2019年',
      income: 10604251.58,
      grossMargin: 2856364.64,
      gpr: 0.269360323871154,
      growth: 0.356139847639615,
      standardType: '业务指标',
      businessIncome: '',
      netIncome: ''
    },
    {
      market: '三板',
      comCode: 'CSF0000004799',
      comName: '上海沿锋汽车科技股份有限公司',
      rpt: '2018年',
      income: 7819438.09,
      grossMargin: 2209999.54,
      gpr: 0.28262894527246,
      standardType: '业务指标',
      businessIncome: '',
      netIncome: ''
    },
    {
      market: '三板',
      comCode: 'CSF240982357',
      comName: '河北兴邦车业股份有限公司',
      rpt: '2017年',
      income: 60830091.89,
      grossMargin: 5088842.18,
      gpr: 0.0836566577805313,
      growth: -0.633111063994178,
      standardType: '业务指标',
      businessIncome: 62112257.31,
      netIncome: -1896652.46
    },
    {
      market: '三板',
      comCode: 'CSF240982357',
      comName: '河北兴邦车业股份有限公司',
      rpt: '2016年',
      income: 165799744.61,
      grossMargin: 11880214.96,
      gpr: 0.0716540003601638,
      growth: 0.857286870069961,
      standardType: '业务指标',
      businessIncome: 165961433.5,
      netIncome: 2781609.3
    },
    {
      market: '三板',
      comCode: 'CSF240982357',
      comName: '河北兴邦车业股份有限公司',
      rpt: '2015年',
      income: 89269863.09,
      grossMargin: 7741086.52,
      gpr: 0.0867155639322041,
      growth: -0.41026464414021,
      standardType: '业务指标',
      businessIncome: 89320578.13,
      netIncome: 514670.87
    },
    {
      market: '三板',
      comCode: 'CSF240982357',
      comName: '河北兴邦车业股份有限公司',
      rpt: '2014年',
      income: 151372750.85,
      grossMargin: 8041347.75999998,
      gpr: 0.0531228224026159,
      standardType: '业务指标',
      businessIncome: 151450130.17,
      netIncome: 870603.45
    },
    {
      market: '三板',
      comCode: 'CSF218695614',
      comName: '江西恒玖时利电传动系统股份有限公司',
      rpt: '2019年',
      income: 2522546.83,
      grossMargin: 197566.81,
      gpr: 0.0783203735408948,
      growth: -0.594602203070566,
      standardType: '业务指标',
      businessIncome: '',
      netIncome: ''
    },
    {
      market: '三板',
      comCode: 'CSF218695614',
      comName: '江西恒玖时利电传动系统股份有限公司',
      rpt: '2018年',
      income: 6222398.96,
      grossMargin: -1747.75,
      gpr: -0.000280880414649594,
      growth: 0.545507709886367,
      standardType: '业务指标',
      businessIncome: '',
      netIncome: ''
    },
    {
      market: '三板',
      comCode: 'CSF218695614',
      comName: '江西恒玖时利电传动系统股份有限公司',
      rpt: '2016年',
      income: 4026119.65,
      grossMargin: -456792.580000001,
      gpr: -0.113457278896319,
      growth: -0.246274449631301,
      standardType: '业务指标',
      businessIncome: 38549018.55,
      netIncome: 4446562.98
    },
    {
      market: '三板',
      comCode: 'CSF226372795',
      comName: '上海瑞珑汽车科技股份有限公司',
      rpt: '2017年',
      income: 5341625.54,
      grossMargin: 1137320.18,
      gpr: 0.212916493581091,
      standardType: '业务指标',
      businessIncome: 48220190.75,
      netIncome: -16890367.75
    },
    {
      market: '上市',
      comCode: 'CSF0000001850',
      comName: '隆鑫通用动力股份有限公司',
      rpt: '2018年',
      income: 1028378673.74,
      grossMargin: 119802295.55,
      gpr: 0.11649628547265,
      growth: -0.208024475069818,
      standardType: '业务指标',
      businessIncome: 11203793392.01,
      netIncome: 999270160.68
    },
    {
      market: '上市',
      comCode: 'CSF0000001850',
      comName: '隆鑫通用动力股份有限公司',
      rpt: '2017年',
      income: 1298498048.7,
      grossMargin: 153139530.9,
      gpr: 0.11793589605569,
      growth: 0.215032436922792,
      standardType: '业务指标',
      businessIncome: 10572102650.03,
      netIncome: 1060600620.25
    },
    {
      market: '上市',
      comCode: 'CSF0000001850',
      comName: '隆鑫通用动力股份有限公司',
      rpt: '2016年',
      income: 1068694142.84,
      grossMargin: 133836920.06,
      gpr: 0.125234072776272,
      growth: 1.45628567721321,
      standardType: '业务指标',
      businessIncome: 8483233407.85,
      netIncome: 949384158.82
    },
    {
      market: '上市',
      comCode: 'CSF0000001850',
      comName: '隆鑫通用动力股份有限公司',
      rpt: '2015年',
      income: 435085443.34,
      grossMargin: 52502780.82,
      gpr: 0.120672345222479,
      growth: -0.201766852362922,
      standardType: '业务指标',
      businessIncome: 7042720902.22,
      netIncome: 826469448.27
    },
    {
      market: '上市',
      comCode: 'CSF0000000814',
      comName: '宁波杉杉股份有限公司',
      rpt: '2017年',
      income: 545060606.2,
      grossMargin: 39088000.4,
      gpr: 0.0717131268621849,
      standardType: '业务指标',
      businessIncome: 8270540870.17,
      netIncome: 1009856360.99
    },
    {
      market: '上市',
      comCode: 'CSF0000196581',
      comName: '北汽蓝谷新能源科技股份有限公司',
      rpt: '2019年',
      income: 11546656447.55,
      grossMargin: 1509009138.2,
      gpr: 0.130687974051587,
      growth: -0.209403072501649,
      standardType: '业务指标',
      businessIncome: 23588709597.84,
      netIncome: 3888884.11
    },
    {
      market: '上市',
      comCode: 'CSF0000196581',
      comName: '北汽蓝谷新能源科技股份有限公司',
      rpt: '2018年',
      income: 14604985228.17,
      grossMargin: 1930456182.67,
      gpr: 0.132177893541895,
      growth: 0.450105353287028,
      standardType: '业务指标',
      businessIncome: 18090528178.25,
      netIncome: -33707648.19
    },
    {
      market: '上市',
      comCode: 'CSF0000196581',
      comName: '北汽蓝谷新能源科技股份有限公司',
      rpt: '2017年',
      income: 10071671823.75,
      grossMargin: 1347099865.16,
      gpr: 0.133751366082382,
      standardType: '业务指标',
      businessIncome: 11493439823.47,
      netIncome: 40868059.02
    },
    {
      market: '上市',
      comCode: 'CSF0000002546',
      comName: '湖南科力远新能源股份有限公司',
      rpt: '2017年',
      income: 124569465.94,
      grossMargin: 4886176.42,
      gpr: 0.0392245112646904,
      standardType: '业务指标',
      businessIncome: 1565058882.24,
      netIncome: 40980177.13
    },
    {
      market: '上市',
      comCode: 'CSF0000001488',
      comName: '东风汽车股份有限公司',
      rpt: '2019年',
      income: 2630331387.86,
      grossMargin: 108647034.48,
      gpr: 0.0413054548873379,
      growth: -0.40616349388325,
      standardType: '业务指标',
      businessIncome: 13520140618.02,
      netIncome: 413584711.53
    },
    {
      market: '上市',
      comCode: 'CSF0000001488',
      comName: '东风汽车股份有限公司',
      rpt: '2018年',
      income: 4429386473.83,
      grossMargin: 215488935.6,
      gpr: 0.0486498382728999,
      growth: 0.059960246188885,
      standardType: '业务指标',
      businessIncome: 14420631394.33,
      netIncome: 548924560.58
    },
    {
      market: '上市',
      comCode: 'CSF0000001488',
      comName: '东风汽车股份有限公司',
      rpt: '2017年',
      income: 4178823205.64,
      grossMargin: 396461230.89,
      gpr: 0.0948738942472874,
      standardType: '业务指标',
      businessIncome: 18300877678.87,
      netIncome: -86447397.29
    },
    {
      market: '上市',
      comCode: 'CSF0000002473',
      comName: '上海科泰电源股份有限公司',
      rpt: '2018年',
      income: 104067764.47,
      grossMargin: 20332305.67,
      gpr: 0.195375635995921,
      standardType: '业务指标',
      businessIncome: 1311179140.41,
      netIncome: 17512014.05
    },
    {
      market: '上市',
      comCode: 'CSF0000002473',
      comName: '上海科泰电源股份有限公司',
      rpt: '2016年',
      income: 45797554.62,
      grossMargin: 7906705.62,
      gpr: 0.172644711832433,
      growth: -0.770813425950694,
      standardType: '业务指标',
      businessIncome: 815114039.33,
      netIncome: 32467936.22
    },
    {
      market: '上市',
      comCode: 'CSF0000002473',
      comName: '上海科泰电源股份有限公司',
      rpt: '2015年',
      income: 199826516.06,
      grossMargin: 47818966.77,
      gpr: 0.239302409474235,
      standardType: '业务指标',
      businessIncome: 817356328.89,
      netIncome: 50768635.93
    },
    {
      market: '上市',
      comCode: 'CSF0000002431',
      comName: '浙江康盛股份有限公司',
      rpt: '2019年',
      income: 106564795.62,
      grossMargin: 2893661.72,
      gpr: 0.027154011821301,
      growth: -0.477102210610673,
      standardType: '业务指标',
      businessIncome: 2007637162.45,
      netIncome: -551586094.06
    },
    {
      market: '上市',
      comCode: 'CSF0000002431',
      comName: '浙江康盛股份有限公司',
      rpt: '2018年',
      income: 203796607.64,
      grossMargin: 27968468.56,
      gpr: 0.137237164464511,
      growth: -0.866987883448888,
      standardType: '业务指标',
      businessIncome: 2918320039.52,
      netIncome: -1252162252.71
    },
    {
      market: '上市',
      comCode: 'CSF0000002431',
      comName: '浙江康盛股份有限公司',
      rpt: '2017年',
      income: 1532165737.41,
      grossMargin: 204011615.02,
      gpr: 0.133152445612617,
      growth: 6.44655231277049,
      standardType: '业务指标',
      businessIncome: 4945192535.3,
      netIncome: 277575981.52
    },
    {
      market: '上市',
      comCode: 'CSF0000002136',
      comName: '多氟多化工股份有限公司',
      rpt: '2018年',
      income: 205755049.19,
      grossMargin: 41846431.98,
      gpr: 0.203379854563656,
      growth: -0.0125353191263107,
      standardType: '业务指标',
      businessIncome: 3945318862.21,
      netIncome: 131695530.6
    },
    {
      market: '上市',
      comCode: 'CSF0000002136',
      comName: '多氟多化工股份有限公司',
      rpt: '2017年',
      income: 208366995.98,
      grossMargin: 29507547.31,
      gpr: 0.141613345104002,
      standardType: '业务指标',
      businessIncome: 3768094289.81,
      netIncome: 300895527.33
    },
    {
      market: '上市',
      comCode: 'CSF0000002003',
      comName: '江西特种电机股份有限公司',
      rpt: '2019年',
      income: 538258454.81,
      growth: -0.526228340527806,
      standardType: '业务指标',
      businessIncome: 2594520822.79,
      netIncome: -2067707605.96
    },
    {
      market: '上市',
      comCode: 'CSF0000002003',
      comName: '江西特种电机股份有限公司',
      rpt: '2018年',
      income: 1136113661.61,
      growth: -0.385318022846645,
      standardType: '业务指标',
      businessIncome: 3016796457.07,
      netIncome: -1679669774.24
    },
    {
      market: '上市',
      comCode: 'CSF0000002003',
      comName: '江西特种电机股份有限公司',
      rpt: '2017年',
      income: 1848295059.62,
      growth: 0.420502913799223,
      standardType: '业务指标',
      businessIncome: 3365333985.37,
      netIncome: 282625937.46
    },
    {
      market: '上市',
      comCode: 'CSF0000002003',
      comName: '江西特种电机股份有限公司',
      rpt: '2016年',
      income: 1301155415.92,
      grossMargin: 292650566.05,
      gpr: 0.224915918935846,
      standardType: '业务指标',
      businessIncome: 2984711704.46,
      netIncome: 202066119.24
    },
    {
      market: '上市',
      comCode: 'CSF0000002841',
      comName: '华讯方舟股份有限公司',
      rpt: '2017年',
      income: 103110141.55,
      grossMargin: 6188182.56999999,
      gpr: 0.0600152659765211,
      standardType: '业务指标',
      businessIncome: 1760025188.99,
      netIncome: 126091006.87
    },
    {
      market: '上市',
      comCode: 'CSF0000001666',
      comName: '东旭光电科技股份有限公司',
      rpt: '2019年',
      income: 3817931195.17,
      grossMargin: 823404753.1,
      gpr: 0.215667782107146,
      growth: -0.103246083776083,
      standardType: '业务指标',
      businessIncome: 17528752785.8,
      netIncome: -1558120438.9
    },
    {
      market: '上市',
      comCode: 'CSF0000001666',
      comName: '东旭光电科技股份有限公司',
      rpt: '2018年',
      income: 4257501557.67,
      grossMargin: 956473625.2,
      gpr: 0.224656083443326,
      growth: 0.693903817815238,
      standardType: '业务指标',
      businessIncome: 28211700021.12,
      netIncome: 2268828086.18
    },
    {
      market: '上市',
      comCode: 'CSF0000001666',
      comName: '东旭光电科技股份有限公司',
      rpt: '2017年',
      income: 2513425799.56,
      grossMargin: 507478090.11,
      gpr: 0.201906931248513,
      standardType: '业务指标',
      businessIncome: 17276969039.03,
      netIncome: 1920899021.88
    }
  ]
  response = response.filter((item) => {
    let filter = item.rpt === `${data.rpt}年`
    if (filter && data.mkt.length) {
      filter = data.mkt.includes(marketMap[item.market])
    }
    if (filter && data.standardType.length) {
      filter = data.standardType.includes(standardTypeMap[item.standardType])
    }
    return filter
  })
  return {
    result: response
  }
  return http.get(`/base/industry/${data.industryCode}/leading_financial`, data)
}
