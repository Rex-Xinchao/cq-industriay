import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 政策导向
export const policyList = async (data) => {
  await sleep(1000)
  let reponse = {
    result: [
      {
        time: '2019/11/6',
        area: '全国',
        title: '中华人民共和国生态环境部',
        summary: ' 关于印发《汾渭平原2019-2020年秋冬季大气污染综合治理攻坚行动方案》的通知',
        newsList: [
          {
            product: '货车',
            type: -1,
            typeName: '加快淘汰',
            content: '加快淘汰国三及以下排放标准的柴油货车、采用稀薄燃烧技术或“油改气”的老旧燃气车辆'
          },
          {
            product: '货车',
            type: -1,
            typeName: '淘汰',
            content: '各地应统筹考虑老旧柴油货车淘汰任务'
          }
        ],
        url: 'http://www.mee.gov.cn/xxgk2018/xxgk/xxgk03/201911/t20191112_741904.html'
      },
      {
        time: '2020/11/5',
        area: '重庆市',
        title: '重庆市经济和信息化委员会',
        summary: '重庆市经济和信息化委员会关于组织开展2020年重庆市物联网十大应用案例评选的通知',
        newsList: [
          {
            product: '传感器',
            type: 1,
            typeName: '研发',
            content:
              '研发基于数据采集、数据感知、网络通信等物联网技术的芯片、传感器、无线模组等新产品、终端、关键元器件'
          }
        ],
        url: 'https://jjxxw.cq.gov.cn/zwgk_213/fdzdgknr/zcwj/qtwj/202011/t20201105_8431827.html'
      },
      {
        time: '2020/10/3',
        area: '全国',
        title: '中华人民共和国生态环境部',
        summary: '关于印发《长三角地区2020-2021年秋冬季大气污染综合治理攻坚行动方案》的通知',
        newsList: [
          {
            product: '钢铁',
            type: 1,
            typeName: '持续推进',
            content:
              '持续推进钢铁行业超低排放改造、大宗货物运输“公转铁”“公转水”、柴油货车和船舶污染治理、挥发性有机物攻坚治理、工业炉窑和燃煤锅炉治理等'
          },
          {
            product: '钢铁',
            type: 1,
            typeName: '完成',
            content: '各地要指导完成超低排放改造的钢铁企业'
          },
          {
            product: '钢铁',
            type: 1,
            typeName: '发展',
            content: '各地按照已出台的钢铁、建材、焦化、化工等行业产业结构调整、高质量发展等方案要求'
          },
          {
            product: '钢铁',
            type: 1,
            typeName: '加强',
            content: '全面加强钢铁、建材、有色、焦化、铸造等重点行业无组织排放治理'
          }
        ],
        url: 'http://www.mee.gov.cn/xxgk2018/xxgk/xxgk03/202011/t20201103_806151.html'
      },
      {
        time: '2020/10/2',
        area: '全国',
        title: '国务院办公厅',
        summary: '国务院办公厅关于印发新能源汽车产业发展规划（2021—2035年）的通知',
        newsList: [
          {
            product: '新能源汽车',
            type: 1,
            typeName: '发展',
            content: '发展新能源汽车是我国从汽车大国迈向汽车强国的必由之路'
          },
          {
            product: '新能源汽车',
            type: 1,
            typeName: '完善 | 增强 | 提升',
            content: '我国新能源汽车产业技术水平显著提升、产业体系日趋完善、企业竞争力大幅增强'
          }
        ],
        url: 'http://www.gov.cn/zhengce/content/2020-11/02/content_5556716.htm'
      },
      {
        time: '2020/9/23',
        area: '贵州省',
        title: '贵州盛发展和改革委员会',
        summary: '关于扩大战略性新兴产业投资 培育壮大新增长点增长极的指导意见（发改高技〔2020〕1409号）',
        newsList: [
          {
            product: '传感器',
            type: 1,
            typeName: '推广 | 研发 ',
            content: '研发推广城市市政基础设施运维、农业生产专用传感器、智能装备、自动化系统和管理平台'
          },
          {
            product: '电子材料',
            type: 1,
            typeName: '加快 | 突破 | 实现',
            content:
              '加快在光刻胶、高纯靶材、高温合金、高性能纤维材料、高强高导耐热材料、耐腐蚀材料、大尺寸硅片、电子封装材料等领域实现突破'
          },
          {
            product: '新能源汽车',
            type: 1,
            typeName: '加快',
            content: '(六)加快智能及新能源汽车产业基础支撑能力建设'
          }
        ],
        url: 'http://fgw.guizhou.gov.cn/zwgk/xxgkml/zcfg/zcwj/202009/t20200923_63349757.html'
      }
    ]
  }
  if (data.region) {
    let regions = ['全国', '重庆市', '四川省', '陕西省', '贵州省']
    reponse.result = reponse.result.filter((item) => item.area === regions[data.region])
  }
  if (data.st) {
    let startDate = new Date(data.st).getTime()
    let endDate = new Date(data.et).getTime()
    reponse.result = reponse.result.filter((item) => {
      let timeStamp = new Date(item.time).getTime()
      return startDate <= timeStamp && endDate >= timeStamp
    })
  }
  if (data.org) {
    reponse.result = []
  }
  return reponse
  return http.get(`/analysis/policy`, data)
}
