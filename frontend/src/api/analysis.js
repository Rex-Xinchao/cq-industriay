import http from '@/libs/axios'
const sleep = (time) => new Promise((res) => setTimeout(() => res(), time))

// 舆情咨询
export const newsList = async (data) => {
  await sleep(300)
  const result = {
    result: [
      {
        id: 27375056,
        dt: '2020-12-23',
        tim: '2020-12-23 10:11:00',
        url: 'http://chuneng.bjx.com.cn/news/20201223/1124513.shtml',
        auth: '北极星电力网',
        title: '2020年全球电池组平均价格较前一年下降13%',
        conzh:
          '作者：BNEF）彭博新能源材料的锂离子电池组价格调研涵盖乘用车、电动大巴和商用车等不同车用应用场景的锂电池包（pack）和储能电池组（rack）。就不同电池应用场景而言，纯电动乘用车（BEV）的电池包平均价格为126美元/千瓦时。其中纯电动汽车的电芯平均价格为100美元/千瓦时，非电芯占电池包价格的21%。在订单规模扩大、纯电动汽车销量增长、电芯和电池包设计不断优化等因素的共同推动下，2020年全球电池组平均价格较前一年下降13%。彭博新能源财经《2020年锂离子电池价格调研》提出预测，到2023年，锂离子电池组平均价格有望降至101美元/千瓦时。根据彭博新能源财经的计算，若固态电池实现量产并发展起完善的产业链，则有望带动电池生产成本从当前水平下降40%。',
        titleen: '2020年全球电池组平均价格较前一年下降13%',
        conen:
          '作者：BNEF）彭博新能源材料的锂离子电池组价格调研涵盖乘用车、电动大巴和商用车等不同车用应用场景的锂电池包（pack）和储能电池组（rack）。就不同电池应用场景而言，纯电动乘用车（BEV）的电池包平均价格为126美元/千瓦时。其中纯电动汽车的电芯平均价格为100美元/千瓦时，非电芯占电池包价格的21%。在订单规模扩大、纯电动汽车销量增长、电芯和电池包设计不断优化等因素的共同推动下，2020年全球电池组平均价格较前一年下降13%。彭博新能源财经《2020年锂离子电池价格调研》提出预测，到2023年，锂离子电池组平均价格有望降至101美元/千瓦时。根据彭博新能源财经的计算，若固态电池实现量产并发展起完善的产业链，则有望带动电池生产成本从当前水平下降40%。',
        cat: null,
        state: null,
        summary:
          '作者：BNEF）彭博新能源材料的锂离子电池组价格调研涵盖乘用车、电动大巴和商用车等不同车用应用场景的锂电池包（pack）和储能电池组（rack）。就不同电池应用场景而言，纯电动乘用车（BEV）的电池包平均价格为126美元/千瓦时。其中纯电动汽车的电芯平均价格为100美元/千瓦时，非电芯占电池包价格的21%。在订单规模扩大、纯电动汽车销量增长、电芯和电池包设计不断优化等因素的共同推动下，2020年全球电池组平均价格较前一年下降13%。彭博新能源财经《2020年锂离子电池价格调研》提出预测，到2023年，锂离子电池组平均价格有望降至101美元/千瓦时。根据彭博新能源财经的计算，若固态电池实现量产并发展起完善的产业链，则有望带动电池生产成本从当前水平下降40%。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.5',
        generateGraph: false,
        concepts: [
          {
            id: null,
            oid: 27375056,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '锂电池',
            kws: ['锂电池', '磷酸铁锂电池', '锂离子电池'],
            code: 'CP0156',
            name: '锂电池',
            nameen: 'Lithium Battery Concept',
            title: null
          }
        ],
        companys: null,
        industries: [
          {
            id: null,
            oid: 27375056,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.49000000953674316,
            kws: ['电池', '储能电池', '锂离子电池', '磷酸铁锂电池', '电池组', '锂电池', '锂离子电池组'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          },
          {
            id: null,
            oid: 27375056,
            batch: null,
            code: 'EC004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4300000071525574,
            kws: ['电池材料', '电芯', '正极材料', '磷酸铁锂'],
            name: '电子制造',
            nameen: 'Electronic Manufacturing'
          },
          {
            id: null,
            oid: 27375056,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.3100000023841858,
            kws: ['商用车', '纯电动汽车', '乘用车', '电动乘用车'],
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: [
          {
            id: null,
            oid: 27375056,
            batch: null,
            code: 'EC001001130201',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.49000000953674316,
            kws: ['锂离子电池', '锂电池', '锂离子电池组'],
            name: '锂离子电池',
            nameen: 'Lithium-ion Batteries',
            title: null
          },
          {
            id: null,
            oid: 27375056,
            batch: null,
            code: 'EC001001',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4399999976158142,
            kws: ['电池', '电池组'],
            name: '电池',
            nameen: 'Battery',
            title: null
          },
          {
            id: null,
            oid: 27375056,
            batch: null,
            code: 'EC00100113020101',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.25999999046325684,
            kws: ['电芯'],
            name: '锂电芯',
            nameen: 'Lithium Battery Cell',
            title: null
          },
          {
            id: null,
            oid: 27375056,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['纯电动汽车', '电动乘用车'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: null
      },
      {
        id: 27374175,
        dt: '2020-12-23',
        tim: '2020-12-23 10:05:54',
        url: 'https://ggjd.cnstock.com/company/scp_ggjd/tjd_bbdj/202012/4634907.htm',
        auth: '中国证券网',
        title: '专注高性能前驱体产品 中伟股份今日正式登陆创业板',
        conzh:
          '资料显示，中伟股份是一家专注于研发及生产高性能前驱体产品的公司，拥有将前驱体产品从常规产品转向高镍化产品的研发和生产实力。2019年，公司高镍三元前驱体产品出货量突破3.3万吨，4.45V以上高电压及掺杂四氧化三钴出货量突破8000吨。公司本次募集资金将用于高性能动力锂离子电池三元正极材料前驱体西部基地项目和补充运营资金。其中，西部基地项目总投资128732.06万元，将达到年产6万吨三元前驱体产能。业内人士表示，近年来，随着新能源汽车产销量的不断增长，公司三元前驱体产品以优异的品质获得了下游客户的高度认可，出货量增长迅速。高性能动力锂离子电池三元正极材料前驱体西部基地项目可有效扩大公司主要产品三元前驱体的产能，有助于满足客户高镍三元前驱体需求，提升公司的市场地位和竞争力。',
        titleen: '专注高性能前驱体产品 中伟股份今日正式登陆创业板',
        conen:
          '资料显示，中伟股份是一家专注于研发及生产高性能前驱体产品的公司，拥有将前驱体产品从常规产品转向高镍化产品的研发和生产实力。2019年，公司高镍三元前驱体产品出货量突破3.3万吨，4.45V以上高电压及掺杂四氧化三钴出货量突破8000吨。公司本次募集资金将用于高性能动力锂离子电池三元正极材料前驱体西部基地项目和补充运营资金。其中，西部基地项目总投资128732.06万元，将达到年产6万吨三元前驱体产能。业内人士表示，近年来，随着新能源汽车产销量的不断增长，公司三元前驱体产品以优异的品质获得了下游客户的高度认可，出货量增长迅速。高性能动力锂离子电池三元正极材料前驱体西部基地项目可有效扩大公司主要产品三元前驱体的产能，有助于满足客户高镍三元前驱体需求，提升公司的市场地位和竞争力。',
        cat: null,
        state: null,
        summary:
          '资料显示，中伟股份是一家专注于研发及生产高性能前驱体产品的公司，拥有将前驱体产品从常规产品转向高镍化产品的研发和生产实力。2019年，公司高镍三元前驱体产品出货量突破3.3万吨，4.45V以上高电压及掺杂四氧化三钴出货量突破8000吨。公司本次募集资金将用于高性能动力锂离子电池三元正极材料前驱体西部基地项目和补充运营资金。其中，西部基地项目总投资128732.06万元，将达到年产6万吨三元前驱体产能。业内人士表示，近年来，随着新能源汽车产销量的不断增长，公司三元前驱体产品以优异的品质获得了下游客户的高度认可，出货量增长迅速。高性能动力锂离子电池三元正极材料前驱体西部基地项目可有效扩大公司主要产品三元前驱体的产能，有助于满足客户高镍三元前驱体需求，提升公司的市场地位和竞争力。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '1',
        newsSentiWeight: '0.927',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 27374175,
            batch: null,
            dt: null,
            tim: null,
            secu: '300919_SZ_EQ',
            comcode: 'ICN5089307109',
            abbr: '中伟股份',
            abbrzh: '中伟股份',
            abbren: 'CNGR',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.6875,
            kws: ['中伟股份'],
            newsSentiment: '1',
            newsSentiWeight: '0.738',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '中伟股份',
            nameen: '中伟股份',
            orgAbbrzh: '中伟股份',
            orgAbbren: 'CNGR',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 27374175,
            batch: null,
            code: 'MM00400109',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.38999998569488525,
            kws: ['镍'],
            name: '有色金属',
            nameen: 'Non Ferrous Metals'
          },
          {
            id: null,
            oid: 27374175,
            batch: null,
            code: 'EC004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.3499999940395355,
            kws: ['三元前驱体'],
            name: '电子制造',
            nameen: 'Electronic Manufacturing'
          },
          {
            id: null,
            oid: 27374175,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.33000001311302185,
            kws: ['锂离子电池'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          }
        ],
        products: [
          {
            id: null,
            oid: 27374175,
            batch: null,
            code: 'MM01700118',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.38999998569488525,
            kws: ['镍'],
            name: '镍',
            nameen: 'Nickel',
            title: null
          },
          {
            id: null,
            oid: 27374175,
            batch: null,
            code: 'EC00100102010102',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.3499999940395355,
            kws: ['三元前驱体'],
            name: '锂离子电池正极材料',
            nameen: 'Cathode Materials of Lithium-ion Batteries',
            title: null
          },
          {
            id: null,
            oid: 27374175,
            batch: null,
            code: 'EC001001130201',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.33000001311302185,
            kws: ['锂离子电池'],
            name: '锂离子电池',
            nameen: 'Lithium-ion Batteries',
            title: null
          }
        ],
        events: [
          {
            id: null,
            oid: 27374175,
            batch: null,
            name: 'A股上市',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: [28],
            typeCode: 28,
            typeName: '新股',
            itemName: 'A股上市',
            nameen: 'A-Share Listing',
            code: 'CA001001',
            eventEntityList: [
              {
                eventSubjectCode: 'ICN5089307109',
                name: '中伟股份',
                eventSubjectNameen: '中伟股份',
                eventSubjectOrgAbbrzh: '中伟股份',
                eventSubjectOrgAbbren: 'CNGR',
                type: 1,
                eventSubjectRole: 1
              }
            ],
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 27374197,
        dt: '2020-12-23',
        tim: '2020-12-23 09:59:00',
        url: 'http://auto.people.com.cn/n1/2020/1223/c1005-31976371.html',
        auth: '人民网',
        title: '我国新能源汽车“跑赢”2020年 明年市场更可期',
        conzh:
          '2020年，虽然经历了一场突如其来的疫情，但我国新能源汽车却完成了一次逆势“跑赢”。近日国家发改委新闻发言人孟玮表示，预计今年全年汽车产业总体可恢复到上年水平，其中新能源汽车产销有望超过上年。回望2019年，我国新能源汽车经历了补贴大幅度退坡的过程，全年销量120万辆，同比下降4%。中国新能源汽车产业，在近一年的时间内上演了这场“V”型反转。2012年，国务院发布实施《节能与新能源汽车产业发展规划（2012-2020年）》，拉开了我国新能源车产业发展的序幕。2020年10月，《新能源汽车产业发展规划（2021-2035年）》（以下简称《规划》）通过，部署了5项战略任务，从各个方面具体描绘了今后我国新能源汽车产业的发展蓝图，为下一阶段的发展规划了更明确的方向，成为我国新能源汽车“2.0时代”的新指南。全国乘用车市场信息联席会秘书长崔东树指出，今年新能源乘用车市场头部企业表现优秀，前三强企业突破2万辆，传统自主车企新能源持续走强，同时新势力车企依旧保持了强势增长。北京、上海、广东三地陆续推出有关氢燃料电池汽车产业发展的政策方案，为新能源汽车下一阶段迈向更高质量发展打下基础。根据《规划》，到2025年，新能源汽车新车销售量达到汽车新车销售总量的20%左右。',
        titleen: '我国新能源汽车“跑赢”2020年 明年市场更可期',
        conen:
          '2020年，虽然经历了一场突如其来的疫情，但我国新能源汽车却完成了一次逆势“跑赢”。近日国家发改委新闻发言人孟玮表示，预计今年全年汽车产业总体可恢复到上年水平，其中新能源汽车产销有望超过上年。回望2019年，我国新能源汽车经历了补贴大幅度退坡的过程，全年销量120万辆，同比下降4%。中国新能源汽车产业，在近一年的时间内上演了这场“V”型反转。2012年，国务院发布实施《节能与新能源汽车产业发展规划（2012-2020年）》，拉开了我国新能源车产业发展的序幕。2020年10月，《新能源汽车产业发展规划（2021-2035年）》（以下简称《规划》）通过，部署了5项战略任务，从各个方面具体描绘了今后我国新能源汽车产业的发展蓝图，为下一阶段的发展规划了更明确的方向，成为我国新能源汽车“2.0时代”的新指南。全国乘用车市场信息联席会秘书长崔东树指出，今年新能源乘用车市场头部企业表现优秀，前三强企业突破2万辆，传统自主车企新能源持续走强，同时新势力车企依旧保持了强势增长。北京、上海、广东三地陆续推出有关氢燃料电池汽车产业发展的政策方案，为新能源汽车下一阶段迈向更高质量发展打下基础。根据《规划》，到2025年，新能源汽车新车销售量达到汽车新车销售总量的20%左右。',
        cat: null,
        state: null,
        summary:
          '2020年，虽然经历了一场突如其来的疫情，但我国新能源汽车却完成了一次逆势“跑赢”。近日国家发改委新闻发言人孟玮表示，预计今年全年汽车产业总体可恢复到上年水平，其中新能源汽车产销有望超过上年。回望2019年，我国新能源汽车经历了补贴大幅度退坡的过程，全年销量120万辆，同比下降4%。中国新能源汽车产业，在近一年的时间内上演了这场“V”型反转。2012年，国务院发布实施《节能与新能源汽车产业发展规划（2012-2020年）》，拉开了我国新能源车产业发展的序幕。2020年10月，《新能源汽车产业发展规划（2021-2035年）》（以下简称《规划》）通过，部署了5项战略任务，从各个方面具体描绘了今后我国新能源汽车产业的发展蓝图，为下一阶段的发展规划了更明确的方向，成为我国新能源汽车“2.0时代”的新指南。全国乘用车市场信息联席会秘书长崔东树指出，今年新能源乘用车市场头部企业表现优秀，前三强企业突破2万辆，传统自主车企新能源持续走强，同时新势力车企依旧保持了强势增长。北京、上海、广东三地陆续推出有关氢燃料电池汽车产业发展的政策方案，为新能源汽车下一阶段迈向更高质量发展打下基础。根据《规划》，到2025年，新能源汽车新车销售量达到汽车新车销售总量的20%左右。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '1',
        newsSentiWeight: '0.996',
        generateGraph: false,
        concepts: [
          {
            id: null,
            oid: 27374197,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['电动汽车', '新能源汽车', '新能源车'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: null,
        industries: [
          {
            id: null,
            oid: 27374197,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.49000000953674316,
            kws: ['汽车', '新能源车', '乘用车', '客车', '新能源汽车', '电动汽车'],
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: [
          {
            id: null,
            oid: 27374197,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.46000000834465027,
            kws: ['新能源车', '电动汽车', '新能源汽车'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          },
          {
            id: null,
            oid: 27374197,
            batch: null,
            code: 'AC003',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['汽车'],
            name: '汽车制造',
            nameen: 'Auto Manufacturer',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: null
      },
      {
        id: 27373542,
        dt: '2020-12-23',
        tim: '2020-12-23 09:50:58',
        url: 'http://finance.jrj.com.cn/2020/12/23095031550698.shtml',
        auth: '金融界',
        title: '借势“新基建” 充电桩行业站上新风口 我国超8成的充电桩相关企业成立于5年之内',
        conzh:
          '天眼查专业版数据显示，目前我国有超10万家充电桩相关企业。值得注意的是，大多数充电桩企业实力雄厚，超过36%的相关企业注册资本在1000万以上。天眼查专业版数据显示，我国超8成的充电桩相关企业成立于5年之内。具体来看，2016-2018年，我国充电桩相关企业年度注册增速均在40%以上。2015年，我国仅有约4,500家充电桩相关企业注册成立，而2019年新增的充电桩相关企业数量超过2.2万家，为2015年的近5倍。截至12月，以工商登记为准，天眼查专业版数据显示，我国今年已新增超过2.5万家充电桩相关企业，已经超过2019年全年的新增数量，较去年同期增长19.63%。',
        titleen: '借势“新基建” 充电桩行业站上新风口 我国超8成的充电桩相关企业成立于5年之内',
        conen:
          '天眼查专业版数据显示，目前我国有超10万家充电桩相关企业。值得注意的是，大多数充电桩企业实力雄厚，超过36%的相关企业注册资本在1000万以上。天眼查专业版数据显示，我国超8成的充电桩相关企业成立于5年之内。具体来看，2016-2018年，我国充电桩相关企业年度注册增速均在40%以上。2015年，我国仅有约4,500家充电桩相关企业注册成立，而2019年新增的充电桩相关企业数量超过2.2万家，为2015年的近5倍。截至12月，以工商登记为准，天眼查专业版数据显示，我国今年已新增超过2.5万家充电桩相关企业，已经超过2019年全年的新增数量，较去年同期增长19.63%。',
        cat: null,
        state: null,
        summary:
          '天眼查专业版数据显示，目前我国有超10万家充电桩相关企业。值得注意的是，大多数充电桩企业实力雄厚，超过36%的相关企业注册资本在1000万以上。天眼查专业版数据显示，我国超8成的充电桩相关企业成立于5年之内。具体来看，2016-2018年，我国充电桩相关企业年度注册增速均在40%以上。2015年，我国仅有约4,500家充电桩相关企业注册成立，而2019年新增的充电桩相关企业数量超过2.2万家，为2015年的近5倍。截至12月，以工商登记为准，天眼查专业版数据显示，我国今年已新增超过2.5万家充电桩相关企业，已经超过2019年全年的新增数量，较去年同期增长19.63%。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '1',
        newsSentiWeight: '0.92',
        generateGraph: false,
        concepts: [
          {
            id: null,
            oid: 27373542,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '充电桩',
            kws: ['充电桩'],
            code: 'CP0160',
            name: '充电桩',
            nameen: 'Charging Pile Concept',
            title: null
          },
          {
            id: null,
            oid: 27373542,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新基建',
            kws: ['充电桩', '新基建'],
            code: 'CP0275',
            name: '新基建',
            nameen: 'New Infrastructure',
            title: null
          },
          {
            id: null,
            oid: 27373542,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['充电桩', '新能源汽车'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: null,
        industries: [
          {
            id: null,
            oid: 27373542,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.49000000953674316,
            kws: ['充电桩'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          }
        ],
        products: [
          {
            id: null,
            oid: 27373542,
            batch: null,
            code: 'FA0040010709',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.49000000953674316,
            kws: ['充电桩'],
            name: '充电桩',
            nameen: 'Charging Piles',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: null
      },
      {
        id: 27372596,
        dt: '2020-12-23',
        tim: '2020-12-23 09:30:56',
        url: 'https://t.qianzhan.com/caijing/detail/201221-8a06f13e.html',
        auth: '前瞻网',
        title: '前瞻电动汽车产业全球周报第96期：最后的春天？新能源补贴或在2-3年后退出',
        conzh:
          '小鹏汽车发布激光雷达自动驾驶量产车进展据官方消息，小鹏汽车将在12月22日宣布有关激光雷达量产智能汽车的进展，届时还会宣布供应商伙伴，并就激光雷达、自动驾驶深入交流。12月8日，威马汽车联手百度Apollo平台开发打造的第三款全新智能纯电动SUV首次亮相，新车计划于2021年发售。智己汽车将推出1000公里续航电动汽车日前，智己汽车表示将于2021年1月13日在上海举办全球发布会，正式发布该车企的首款新车型。有一位特斯拉粉丝用无人机拍下了特斯拉上海工厂内部的情况，视频显示，上海超级工厂的停车场内停放着大约40辆贴着伪装贴纸的Model Y。岚图FREE计划明年三季度交付自主高端电动车12月18日，岚图汽车首款量产车岚图FREE全球首发，新车定位为中大型智能电动SUV，提供纯电动和增程电动2种动力方案，其中增程版NEDC续航里程860公里，纯电版NEDC续航里程500公里。Canoo发布第2款全电动汽车：定位送货行业就在宣布一个基于订阅的电动汽车模型1年后，并展示了其滑板底盘几个月后，洛杉矶电动汽车公司Canoo12月17日揭开了电动送货车MPDV的面纱。',
        titleen: '前瞻电动汽车产业全球周报第96期：最后的春天？新能源补贴或在2-3年后退出',
        conen:
          '小鹏汽车发布激光雷达自动驾驶量产车进展据官方消息，小鹏汽车将在12月22日宣布有关激光雷达量产智能汽车的进展，届时还会宣布供应商伙伴，并就激光雷达、自动驾驶深入交流。12月8日，威马汽车联手百度Apollo平台开发打造的第三款全新智能纯电动SUV首次亮相，新车计划于2021年发售。智己汽车将推出1000公里续航电动汽车日前，智己汽车表示将于2021年1月13日在上海举办全球发布会，正式发布该车企的首款新车型。有一位特斯拉粉丝用无人机拍下了特斯拉上海工厂内部的情况，视频显示，上海超级工厂的停车场内停放着大约40辆贴着伪装贴纸的Model Y。岚图FREE计划明年三季度交付自主高端电动车12月18日，岚图汽车首款量产车岚图FREE全球首发，新车定位为中大型智能电动SUV，提供纯电动和增程电动2种动力方案，其中增程版NEDC续航里程860公里，纯电版NEDC续航里程500公里。Canoo发布第2款全电动汽车：定位送货行业就在宣布一个基于订阅的电动汽车模型1年后，并展示了其滑板底盘几个月后，洛杉矶电动汽车公司Canoo12月17日揭开了电动送货车MPDV的面纱。',
        cat: null,
        state: null,
        summary:
          '小鹏汽车发布激光雷达自动驾驶量产车进展据官方消息，小鹏汽车将在12月22日宣布有关激光雷达量产智能汽车的进展，届时还会宣布供应商伙伴，并就激光雷达、自动驾驶深入交流。12月8日，威马汽车联手百度Apollo平台开发打造的第三款全新智能纯电动SUV首次亮相，新车计划于2021年发售。智己汽车将推出1000公里续航电动汽车日前，智己汽车表示将于2021年1月13日在上海举办全球发布会，正式发布该车企的首款新车型。有一位特斯拉粉丝用无人机拍下了特斯拉上海工厂内部的情况，视频显示，上海超级工厂的停车场内停放着大约40辆贴着伪装贴纸的Model Y。岚图FREE计划明年三季度交付自主高端电动车12月18日，岚图汽车首款量产车岚图FREE全球首发，新车定位为中大型智能电动SUV，提供纯电动和增程电动2种动力方案，其中增程版NEDC续航里程860公里，纯电版NEDC续航里程500公里。Canoo发布第2款全电动汽车：定位送货行业就在宣布一个基于订阅的电动汽车模型1年后，并展示了其滑板底盘几个月后，洛杉矶电动汽车公司Canoo12月17日揭开了电动送货车MPDV的面纱。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.5',
        generateGraph: true,
        concepts: [
          {
            id: null,
            oid: 27372596,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '充电桩',
            kws: null,
            code: 'CP0160',
            name: '充电桩',
            nameen: 'Charging Pile Concept',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '特斯拉',
            kws: ['电动汽车', '特斯拉', '马斯克'],
            code: 'CP0202',
            name: '特斯拉',
            nameen: 'Tesla Concept',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['新能源汽车', '插电式', '电动汽车', '纯电动汽车', '混动系统', '混动', '电动车', '电动汽车充电'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: [
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: 'TSLA_NQ_EQ',
            comcode: 'CSF0000201106',
            abbr: '特斯拉',
            abbrzh: '特斯拉',
            abbren: 'Tesla',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.1476379632949829,
            kws: ['特斯拉'],
            newsSentiment: '2',
            newsSentiWeight: '0.723',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '特斯拉',
            nameen: 'Tesla',
            orgAbbrzh: '特斯拉',
            orgAbbren: 'Tesla',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: 'NIO_NY_EQ',
            comcode: 'CSF0000111602',
            abbr: '蔚来汽车',
            abbrzh: '蔚来汽车',
            abbren: 'Nio Inc.',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.0671796128153801,
            kws: ['蔚来', '蔚来汽车'],
            newsSentiment: '1',
            newsSentiWeight: '0.72',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '蔚来汽车',
            nameen: '蔚来汽车',
            orgAbbrzh: '蔚来汽车',
            orgAbbren: 'Nio Inc.',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: '',
            comcode: 'ICN5029665999',
            abbr: '广州橙行智动汽车科技有限公司',
            abbrzh: null,
            abbren: null,
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.06432531028985977,
            kws: ['小鹏汽车'],
            newsSentiment: '1',
            newsSentiWeight: '0.824',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '广州橙行智动汽车科技有限公司',
            nameen: '广州橙行智动汽车科技有限公司',
            orgAbbrzh: null,
            orgAbbren: null,
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: 'XPEV_NY_EQ',
            comcode: 'CSF30669541615',
            abbr: '小鹏汽车',
            abbrzh: '小鹏汽车',
            abbren: 'XPeng',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.06432531028985977,
            kws: ['小鹏汽车'],
            newsSentiment: '1',
            newsSentiWeight: '0.824',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '小鹏汽车',
            nameen: '小鹏汽车',
            orgAbbrzh: '小鹏汽车',
            orgAbbren: 'XPeng',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: '002594_SZ_EQ',
            comcode: 'CSF0000002554',
            abbr: '比亚迪',
            abbrzh: '比亚迪',
            abbren: 'BYD',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.04165632650256157,
            kws: ['比亚迪'],
            newsSentiment: '1',
            newsSentiWeight: '0.689',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '比亚迪',
            nameen: 'BYD',
            orgAbbrzh: '比亚迪',
            orgAbbren: 'BYD',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: '01211_HK_EQ',
            comcode: 'CSF0000002554',
            abbr: '比亚迪股份',
            abbrzh: '比亚迪股份',
            abbren: 'BYD-H',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.04165632650256157,
            kws: ['比亚迪'],
            newsSentiment: '1',
            newsSentiWeight: '0.689',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '比亚迪股份',
            nameen: 'BYD-H',
            orgAbbrzh: '比亚迪',
            orgAbbren: 'BYD',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: '',
            comcode: 'CSF30669487824',
            abbr: '韩国现代汽车公司',
            abbrzh: null,
            abbren: null,
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.035327211022377014,
            kws: ['现代汽车公司', '现代汽车'],
            newsSentiment: '1',
            newsSentiWeight: '0.815',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '韩国现代汽车公司',
            nameen: '韩国现代汽车公司',
            orgAbbrzh: null,
            orgAbbren: null,
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: '',
            comcode: 'CSF0000030720',
            abbr: '威马智慧出行科技(上海)股份有限公司',
            abbrzh: null,
            abbren: null,
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.028791263699531555,
            kws: ['威马汽车'],
            newsSentiment: '1',
            newsSentiWeight: '0.738',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '威马智慧出行科技(上海)股份有限公司',
            nameen: '威马智慧出行科技(上海)股份有限公司',
            orgAbbrzh: null,
            orgAbbren: null,
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            dt: null,
            tim: null,
            secu: '',
            comcode: 'CSF0000059006',
            abbr: '奇瑞汽车股份有限公司',
            abbrzh: null,
            abbren: null,
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.028791263699531555,
            kws: ['奇瑞汽车股份有限公司', '奇瑞汽车'],
            newsSentiment: '0',
            newsSentiWeight: '0.833',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '奇瑞汽车股份有限公司',
            nameen: 'Chery Automobile Co., Ltd.',
            orgAbbrzh: null,
            orgAbbren: null,
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.3700000047683716,
            kws: [
              '电动车',
              '新能源汽车',
              '混动系统',
              '汽车',
              '汽车制造商',
              '插电式',
              '整车',
              '货车',
              '轿车',
              '电动汽车充电',
              'SUV',
              '混动',
              '纯电动汽车',
              '电动汽车'
            ],
            name: '汽车',
            nameen: 'Automobile'
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.14000000059604645,
            kws: ['电池组', '电池研发', '电池', '氢燃料电池', '锂电池', '电机', '充换电站'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          }
        ],
        products: [
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4699999988079071,
            kws: ['电动汽车', '新能源汽车', '电动汽车充电', '混动系统', '纯电动汽车', '混动', '插电式'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'AC003',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.23000000417232513,
            kws: ['电动车', '汽车制造商', '汽车', '整车'],
            name: '汽车制造',
            nameen: 'Auto Manufacturer',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'EC001001',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.07999999821186066,
            kws: ['电池组', '电池', '电池研发'],
            name: '电池',
            nameen: 'Battery',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'AC00300201',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.05999999865889549,
            kws: ['SUV'],
            name: 'SUV',
            nameen: 'Sports Utility Vehicles',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'EC001001130201',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.029999999329447746,
            kws: ['锂电池'],
            name: '锂离子电池',
            nameen: 'Lithium-ion Batteries',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'FA0040010709',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.029999999329447746,
            kws: ['充换电站'],
            name: '充电桩',
            nameen: 'Charging Piles',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'FA00700412',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.029999999329447746,
            kws: ['电机'],
            name: '电动机及其零部件',
            nameen: 'Electric Motors and Related Spare Parts',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'AC00300302',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.029999999329447746,
            kws: ['货车'],
            name: '货车',
            nameen: 'Freight Trucks',
            title: null
          },
          {
            id: null,
            oid: 27372596,
            batch: null,
            code: 'AC00300202',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.029999999329447746,
            kws: ['轿车'],
            name: '轿车',
            nameen: 'Sedans',
            title: null
          }
        ],
        events: [
          {
            id: null,
            oid: 27372596,
            batch: null,
            name: '补贴取消',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: [7, 26],
            relAnnc: [7],
            typeCode: 7,
            typeName: '负面消息',
            itemName: '补贴取消',
            nameen: 'Subsidy Cancellation ',
            code: 'AA001002',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: [
          {
            id: null,
            oid: 27372596,
            pcode: 'P10079966',
            comcode: 'CSF0000001164',
            code: 'P10079966',
            secu: null,
            position: null,
            speak: null,
            speak_con: null,
            upu: null,
            upt: null,
            kws: ['贾跃亭'],
            newsSentiment: '2',
            newsSentiWeight: '1.0',
            name: '贾跃亭',
            nameen: 'Jia Yueting'
          },
          {
            id: null,
            oid: 27372596,
            pcode: 'P1307291000022732',
            comcode: 'CSF0000002554',
            code: 'P1307291000022732',
            secu: null,
            position: null,
            speak: null,
            speak_con: null,
            upu: null,
            upt: null,
            kws: ['王传福'],
            newsSentiment: '0',
            newsSentiWeight: '0.872',
            name: '王传福',
            nameen: 'Wang Chuanfu'
          }
        ],
        regions: [
          {
            id: 4947190,
            oid: 27372596,
            dt: null,
            tim: null,
            region: '山西省',
            region_en: 'Shanxi',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00001,CSF_CN_140000'
          },
          {
            id: 4947191,
            oid: 27372596,
            dt: null,
            tim: null,
            region: '上海市',
            region_en: 'Shanghai',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00003,CSF_CN_310000'
          },
          {
            id: 4947192,
            oid: 27372596,
            dt: null,
            tim: null,
            region: '中国',
            region_en: 'China',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN'
          }
        ]
      },
      {
        id: 27370417,
        dt: '2020-12-23',
        tim: '2020-12-23 08:59:00',
        url: 'http://news.cableabc.com/xny/20201223963053.html',
        auth: '电缆网',
        title: '2020年新能源专用车市场总体低迷',
        conzh:
          '【电缆网讯】从全国乘用车市场信息联席会获悉，2020年1-11月，新能源专用车销量为44235辆，同比增长18%。未来只有主力传统厂家参与，才能逐步改善。路权开放问题依旧是纯电动物流车发展的一个难点所在。如何让各地方对纯电动物流车全天候开放路权，是增进其发展的关键着力点。目前纯电动卡车质量不过关，安全问题(尤其是电池的热失控问题)仍然让客户心有余悸。在目前新能源电动专用车的散乱特征下，新能源专用车起步快、野蛮生长快、但发展后劲不足问题会凸显。',
        titleen: '2020年新能源专用车市场总体低迷',
        conen:
          '【电缆网讯】从全国乘用车市场信息联席会获悉，2020年1-11月，新能源专用车销量为44235辆，同比增长18%。未来只有主力传统厂家参与，才能逐步改善。路权开放问题依旧是纯电动物流车发展的一个难点所在。如何让各地方对纯电动物流车全天候开放路权，是增进其发展的关键着力点。目前纯电动卡车质量不过关，安全问题(尤其是电池的热失控问题)仍然让客户心有余悸。在目前新能源电动专用车的散乱特征下，新能源专用车起步快、野蛮生长快、但发展后劲不足问题会凸显。',
        cat: null,
        state: null,
        summary:
          '【电缆网讯】从全国乘用车市场信息联席会获悉，2020年1-11月，新能源专用车销量为44235辆，同比增长18%。未来只有主力传统厂家参与，才能逐步改善。路权开放问题依旧是纯电动物流车发展的一个难点所在。如何让各地方对纯电动物流车全天候开放路权，是增进其发展的关键着力点。目前纯电动卡车质量不过关，安全问题(尤其是电池的热失控问题)仍然让客户心有余悸。在目前新能源电动专用车的散乱特征下，新能源专用车起步快、野蛮生长快、但发展后劲不足问题会凸显。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.846',
        generateGraph: false,
        concepts: null,
        companys: null,
        industries: [
          {
            id: null,
            oid: 27370417,
            batch: null,
            code: 'FA006',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.44999998807907104,
            kws: ['专用车', '纯电动物流车'],
            name: '建筑、农用机械与重型卡车',
            nameen: 'Machinery and Heavy Trucks for Constructive or Agricultural Purposes'
          },
          {
            id: null,
            oid: 27370417,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4399999976158142,
            kws: ['充电桩', '电池', '电缆'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          }
        ],
        products: [
          {
            id: null,
            oid: 27370417,
            batch: null,
            code: 'AC003004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.41999998688697815,
            kws: ['专用车'],
            name: '专用汽车',
            nameen: 'Special-purpose Vehicles',
            title: null
          },
          {
            id: null,
            oid: 27370417,
            batch: null,
            code: 'FA00602002',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.2199999988079071,
            kws: ['纯电动物流车'],
            name: '工业车辆',
            nameen: 'Industrial Vehicles',
            title: null
          },
          {
            id: null,
            oid: 27370417,
            batch: null,
            code: 'FA004002',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.17000000178813934,
            kws: ['电缆'],
            name: '电线电缆',
            nameen: 'Electric Wires and Cables',
            title: null
          },
          {
            id: null,
            oid: 27370417,
            batch: null,
            code: 'FA0040010709',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.17000000178813934,
            kws: ['充电桩'],
            name: '充电桩',
            nameen: 'Charging Piles',
            title: null
          },
          {
            id: null,
            oid: 27370417,
            batch: null,
            code: 'EC001001',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.17000000178813934,
            kws: ['电池'],
            name: '电池',
            nameen: 'Battery',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: null
      },
      {
        id: 27370418,
        dt: '2020-12-23',
        tim: '2020-12-23 08:45:00',
        url: 'http://chuneng.bjx.com.cn/news/20201223/1124363.shtml',
        auth: '北极星电力网',
        title: '新能源二手车流通将迎质变',
        conzh:
          '北极星储能网讯:长期以来，保值率低、电池信息不明、管理无序等乱象严重阻碍新能源二手车市场发展。修订后的《二手车流通管理办法》将提供解决之道。近日，针对二手车流通混乱现状，商务部明确表示，国家支持建设全国统一、公开竞争、规范有序的二手车市场体系，鼓励发展专业化、品牌化、连锁化的二手车经销、拍卖流通模式。二手车行业混乱，归根到底是机制问题。”姜东指出，新车在主机厂统一政策指引下，由全国2万多家4S店卖出去，有规范的金融方案。“让二手车经销真正规范起来，4S店能够顺畅地开展二手车业务，这是这一轮政策的目标。”郎学红进一步表示，长期以来，二手车作为新车辅助部门的理念、思路要进行调整，主机厂应将二手车业务独立出来，与衍生业务、汽车金融形成一个整体，给予更广阔的发展空间，让二手车真正地成为一个独立的利润中心，而不是一个成本部门。',
        titleen: '新能源二手车流通将迎质变',
        conen:
          '北极星储能网讯:长期以来，保值率低、电池信息不明、管理无序等乱象严重阻碍新能源二手车市场发展。修订后的《二手车流通管理办法》将提供解决之道。近日，针对二手车流通混乱现状，商务部明确表示，国家支持建设全国统一、公开竞争、规范有序的二手车市场体系，鼓励发展专业化、品牌化、连锁化的二手车经销、拍卖流通模式。二手车行业混乱，归根到底是机制问题。”姜东指出，新车在主机厂统一政策指引下，由全国2万多家4S店卖出去，有规范的金融方案。“让二手车经销真正规范起来，4S店能够顺畅地开展二手车业务，这是这一轮政策的目标。”郎学红进一步表示，长期以来，二手车作为新车辅助部门的理念、思路要进行调整，主机厂应将二手车业务独立出来，与衍生业务、汽车金融形成一个整体，给予更广阔的发展空间，让二手车真正地成为一个独立的利润中心，而不是一个成本部门。',
        cat: null,
        state: null,
        summary:
          '北极星储能网讯:长期以来，保值率低、电池信息不明、管理无序等乱象严重阻碍新能源二手车市场发展。修订后的《二手车流通管理办法》将提供解决之道。近日，针对二手车流通混乱现状，商务部明确表示，国家支持建设全国统一、公开竞争、规范有序的二手车市场体系，鼓励发展专业化、品牌化、连锁化的二手车经销、拍卖流通模式。二手车行业混乱，归根到底是机制问题。”姜东指出，新车在主机厂统一政策指引下，由全国2万多家4S店卖出去，有规范的金融方案。“让二手车经销真正规范起来，4S店能够顺畅地开展二手车业务，这是这一轮政策的目标。”郎学红进一步表示，长期以来，二手车作为新车辅助部门的理念、思路要进行调整，主机厂应将二手车业务独立出来，与衍生业务、汽车金融形成一个整体，给予更广阔的发展空间，让二手车真正地成为一个独立的利润中心，而不是一个成本部门。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.881',
        generateGraph: false,
        concepts: null,
        companys: null,
        industries: [
          {
            id: null,
            oid: 27370418,
            batch: null,
            code: 'BT009',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4699999988079071,
            kws: ['二手车行业', '二手车交易', '二手车市场', '二手车交易市场', '二手车业务'],
            name: '机动车贸易',
            nameen: 'Trade of Motor Vehicles'
          }
        ],
        products: [
          {
            id: null,
            oid: 27370418,
            batch: null,
            code: 'CR009012',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.28999999165534973,
            kws: ['二手车交易市场', '二手车行业', '二手车交易', '二手车业务'],
            name: '二手车零售',
            nameen: 'Retail of Second-hand Automobiles',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: null
      },
      {
        id: 27362690,
        dt: '2020-12-22',
        tim: '2020-12-22 22:56:56',
        url: 'http://finance.jrj.com.cn/2020/12/22225631547977.shtml',
        auth: '金融界',
        title: '中伟股份成功登陆深交所 前驱体龙头迎来跨越式发展机遇',
        conzh:
          '成立于2014年的中伟股份是专业的锂电池正极材料前驱体与新能源循环材料综合服务商。客户“大佬”云集、盈利能力突出多区域的产业布局，为中伟股份三元前驱体以及四氧化三钴等主要产品提供了稳定的生产保障，也让公司不断提升自己在全球锂电池核心产业链中的分量。厦门钨业则是全球领先的正极材料厂商，2019年锂电池正极材料出货量全球第一。在产业链上，三元前驱体的直接下游行业主要为正极材料行业，主要应用领域包括新能源汽车、储能及消费电子等领域。近年来，动力锂电池、储能锂离子电池出货量的快速增长，使得全球三元前驱体行业景气度高企。可以预见，新能源汽车行业的快速发展，将带动锂电池及上游三元前驱体的出货量的增长，这将为中伟股份等业内企业提供更为广阔的发展空间。',
        titleen: '中伟股份成功登陆深交所 前驱体龙头迎来跨越式发展机遇',
        conen:
          '成立于2014年的中伟股份是专业的锂电池正极材料前驱体与新能源循环材料综合服务商。客户“大佬”云集、盈利能力突出多区域的产业布局，为中伟股份三元前驱体以及四氧化三钴等主要产品提供了稳定的生产保障，也让公司不断提升自己在全球锂电池核心产业链中的分量。厦门钨业则是全球领先的正极材料厂商，2019年锂电池正极材料出货量全球第一。在产业链上，三元前驱体的直接下游行业主要为正极材料行业，主要应用领域包括新能源汽车、储能及消费电子等领域。近年来，动力锂电池、储能锂离子电池出货量的快速增长，使得全球三元前驱体行业景气度高企。可以预见，新能源汽车行业的快速发展，将带动锂电池及上游三元前驱体的出货量的增长，这将为中伟股份等业内企业提供更为广阔的发展空间。',
        cat: null,
        state: null,
        summary:
          '成立于2014年的中伟股份是专业的锂电池正极材料前驱体与新能源循环材料综合服务商。客户“大佬”云集、盈利能力突出多区域的产业布局，为中伟股份三元前驱体以及四氧化三钴等主要产品提供了稳定的生产保障，也让公司不断提升自己在全球锂电池核心产业链中的分量。厦门钨业则是全球领先的正极材料厂商，2019年锂电池正极材料出货量全球第一。在产业链上，三元前驱体的直接下游行业主要为正极材料行业，主要应用领域包括新能源汽车、储能及消费电子等领域。近年来，动力锂电池、储能锂离子电池出货量的快速增长，使得全球三元前驱体行业景气度高企。可以预见，新能源汽车行业的快速发展，将带动锂电池及上游三元前驱体的出货量的增长，这将为中伟股份等业内企业提供更为广阔的发展空间。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '1',
        newsSentiWeight: '0.937',
        generateGraph: true,
        concepts: [
          {
            id: null,
            oid: 27362690,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '锂电池',
            kws: ['锂电池正极材料', '锂电池', '锂离子电池'],
            code: 'CP0156',
            name: '锂电池',
            nameen: 'Lithium Battery Concept',
            title: null
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['新能源汽车', '动力电池'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: [
          {
            id: null,
            oid: 27362690,
            batch: null,
            dt: null,
            tim: null,
            secu: '300919_SZ_EQ',
            comcode: 'ICN5089307109',
            abbr: '中伟股份',
            abbrzh: '中伟股份',
            abbren: 'CNGR',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.7077922224998474,
            kws: ['中伟新材料股份有限公司', '中伟股份'],
            newsSentiment: '1',
            newsSentiWeight: '0.822',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '中伟股份',
            nameen: '中伟股份',
            orgAbbrzh: '中伟股份',
            orgAbbren: 'CNGR',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'EC004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.5,
            kws: ['电池材料', '锂电池正极材料', '锰酸锂', '正极材料', '三元材料', '三元前驱体', '钴酸锂'],
            name: '电子制造',
            nameen: 'Electronic Manufacturing'
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.30000001192092896,
            kws: ['电化学', '电池', '锂电池', '锂离子电池'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'MM00400109',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.2199999988079071,
            kws: ['镍', '有色金属工业', '钴', '铝'],
            name: '有色金属',
            nameen: 'Non Ferrous Metals'
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.17000000178813934,
            kws: ['动力电池', '新能源汽车', '汽车'],
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: [
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'EC00100102010102',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.38999998569488525,
            kws: ['锰酸锂', '三元材料', '锂电池正极材料', '钴酸锂', '三元前驱体'],
            name: '锂离子电池正极材料',
            nameen: 'Cathode Materials of Lithium-ion Batteries',
            title: null
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'EC001001130201',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.25,
            kws: ['锂离子电池', '锂电池'],
            name: '锂离子电池',
            nameen: 'Lithium-ion Batteries',
            title: null
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.1599999964237213,
            kws: ['动力电池', '新能源汽车'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'MM01700118',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.15000000596046448,
            kws: ['镍'],
            name: '镍',
            nameen: 'Nickel',
            title: null
          },
          {
            id: null,
            oid: 27362690,
            batch: null,
            code: 'EC00100102',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.14000000059604645,
            kws: ['正极材料', '电池材料'],
            name: '电池材料',
            nameen: 'Battery Materials',
            title: null
          }
        ],
        events: [
          {
            id: null,
            oid: 27362690,
            batch: null,
            name: 'A股上市',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: [28],
            typeCode: 28,
            typeName: '新股',
            itemName: 'A股上市',
            nameen: 'A-Share Listing',
            code: 'CA001001',
            eventEntityList: [
              {
                eventSubjectCode: 'ICN5089307109',
                name: '中伟股份',
                eventSubjectNameen: '中伟股份',
                eventSubjectOrgAbbrzh: '中伟股份',
                eventSubjectOrgAbbren: 'CNGR',
                type: 1,
                eventSubjectRole: 1
              }
            ],
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 27356223,
        dt: '2020-12-22',
        tim: '2020-12-22 19:52:13',
        url:
          'https://finance.sina.cn/hkstock/gsxw/2020-12-22/detail-iiznctke7926712.d.html?vt=4&cid=76526&node_id=76526',
        auth: '新浪网',
        title: '卧龙电驱(600580.SH)将为纬湃科技提供新能源汽车电机 销售额预计21.11亿元',
        conzh:
          '卧龙电驱(600580.SH)公告，公司于近期与德国纬湃科技有限公司(Vitesco Technologies GmbH，“纬湃科技”)签订定点函，公司将为纬湃科技提供新能源汽车电机。本定点函所对应的产品在其生命周期内销售预估金额为21.11亿元，具体以下单金额为准。据悉，纬湃科技前身为德国大陆集团(Continental AG)动力总成事业群(直至2019年9月)，它传承了大陆集团动力总成的技术积累与专长。纬湃科技提供适用于电动、混动及内燃机驱动系统所用的关键部件及智能系统解决方案。公司产品包括电动传动系统、电子控制单元、传感器和执行器，以及尾气后处理解决方案。',
        titleen: '卧龙电驱(600580.SH)将为纬湃科技提供新能源汽车电机 销售额预计21.11亿元',
        conen:
          '卧龙电驱(600580.SH)公告，公司于近期与德国纬湃科技有限公司(Vitesco Technologies GmbH，“纬湃科技”)签订定点函，公司将为纬湃科技提供新能源汽车电机。本定点函所对应的产品在其生命周期内销售预估金额为21.11亿元，具体以下单金额为准。据悉，纬湃科技前身为德国大陆集团(Continental AG)动力总成事业群(直至2019年9月)，它传承了大陆集团动力总成的技术积累与专长。纬湃科技提供适用于电动、混动及内燃机驱动系统所用的关键部件及智能系统解决方案。公司产品包括电动传动系统、电子控制单元、传感器和执行器，以及尾气后处理解决方案。',
        cat: null,
        state: null,
        summary:
          '卧龙电驱(600580.SH)公告，公司于近期与德国纬湃科技有限公司(Vitesco Technologies GmbH，“纬湃科技”)签订定点函，公司将为纬湃科技提供新能源汽车电机。本定点函所对应的产品在其生命周期内销售预估金额为21.11亿元，具体以下单金额为准。据悉，纬湃科技前身为德国大陆集团(Continental AG)动力总成事业群(直至2019年9月)，它传承了大陆集团动力总成的技术积累与专长。纬湃科技提供适用于电动、混动及内燃机驱动系统所用的关键部件及智能系统解决方案。公司产品包括电动传动系统、电子控制单元、传感器和执行器，以及尾气后处理解决方案。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '1',
        newsSentiWeight: '0.953',
        generateGraph: true,
        concepts: [
          {
            id: null,
            oid: 27356223,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['混动'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: [
          {
            id: null,
            oid: 27356223,
            batch: null,
            dt: null,
            tim: null,
            secu: '600580_SH_EQ',
            comcode: 'CSF0000001003',
            abbr: '卧龙电驱',
            abbrzh: '卧龙电驱',
            abbren: 'Wolong Electric',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.6666666865348816,
            kws: ['卧龙电驱'],
            newsSentiment: '0',
            newsSentiWeight: '0.693',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '卧龙电驱',
            nameen: 'Wolong Electric',
            orgAbbrzh: '卧龙电驱',
            orgAbbren: 'Wolong Electric',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 27356223,
            batch: null,
            code: 'AC001',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.5,
            kws: ['新能源汽车电机'],
            name: '机动车零配件与设备',
            nameen: 'Auto Parts and Equipment'
          },
          {
            id: null,
            oid: 27356223,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.25,
            kws: ['混动'],
            name: '汽车',
            nameen: 'Automobile'
          },
          {
            id: null,
            oid: 27356223,
            batch: null,
            code: 'EC004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.25,
            kws: ['传感器'],
            name: '电子制造',
            nameen: 'Electronic Manufacturing'
          }
        ],
        products: [
          {
            id: null,
            oid: 27356223,
            batch: null,
            code: 'AC00100309',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.5,
            kws: ['新能源汽车电机'],
            name: '新能源汽车驱动电机',
            nameen: 'Driving Motors for New Energy Vehicles',
            title: null
          },
          {
            id: null,
            oid: 27356223,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.25,
            kws: ['混动'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          },
          {
            id: null,
            oid: 27356223,
            batch: null,
            code: 'EE001010',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.25,
            kws: ['传感器'],
            name: '传感器',
            nameen: 'Sensing Elements',
            title: null
          }
        ],
        events: [
          {
            id: null,
            oid: 27356223,
            batch: null,
            name: '业绩披露',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '业绩披露',
            nameen: 'Performance Disclosure',
            code: 'CD008036',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 27292627,
        dt: '2020-12-21',
        tim: '2020-12-21 11:42:00',
        url: 'http://chuneng.bjx.com.cn/news/20201221/1123932.shtml',
        auth: '北极星电力网',
        title: '主营充电桩销售 宁德时代投资新公司',
        conzh:
          '北极星储能网讯:日前，据天眼查信息显示，宁德时代与宏大爆破等合资成立福建宏大时代新能源科技有限公司，注册资本为3000万元。此外，通过股权结构显示，该公司的大股东为宏大爆破工程集团有限责任公司，持股34%，宁德时代新能源科技股份有限公司持股26%。据悉，福建宏大时代新能源科技有限公司的经营范围包括：科技推广和应用服务。插电式混合动力专用发动机销售。新能源汽车换电设施销售。随着宁德时代在动力电池领域发展已经稳坐头把交椅，通过加强产业链合作及协同，将进一步提升公司市场竞争力。',
        titleen: '主营充电桩销售 宁德时代投资新公司',
        conen:
          '北极星储能网讯:日前，据天眼查信息显示，宁德时代与宏大爆破等合资成立福建宏大时代新能源科技有限公司，注册资本为3000万元。此外，通过股权结构显示，该公司的大股东为宏大爆破工程集团有限责任公司，持股34%，宁德时代新能源科技股份有限公司持股26%。据悉，福建宏大时代新能源科技有限公司的经营范围包括：科技推广和应用服务。插电式混合动力专用发动机销售。新能源汽车换电设施销售。随着宁德时代在动力电池领域发展已经稳坐头把交椅，通过加强产业链合作及协同，将进一步提升公司市场竞争力。',
        cat: null,
        state: null,
        summary:
          '北极星储能网讯:日前，据天眼查信息显示，宁德时代与宏大爆破等合资成立福建宏大时代新能源科技有限公司，注册资本为3000万元。此外，通过股权结构显示，该公司的大股东为宏大爆破工程集团有限责任公司，持股34%，宁德时代新能源科技股份有限公司持股26%。据悉，福建宏大时代新能源科技有限公司的经营范围包括：科技推广和应用服务。插电式混合动力专用发动机销售。新能源汽车换电设施销售。随着宁德时代在动力电池领域发展已经稳坐头把交椅，通过加强产业链合作及协同，将进一步提升公司市场竞争力。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '1',
        newsSentiWeight: '0.995',
        generateGraph: true,
        concepts: [
          {
            id: null,
            oid: 27292627,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '充电桩',
            kws: null,
            code: 'CP0160',
            name: '充电桩',
            nameen: 'Charging Pile Concept',
            title: null
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '宁德时代概念',
            kws: ['宁德时代'],
            code: 'CP0296',
            name: '宁德时代概念',
            nameen: 'CATL Concept',
            title: null
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['动力电池', '插电式', '新能源汽车', '混合动力', '充电桩'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: [
          {
            id: null,
            oid: 27292627,
            batch: null,
            dt: null,
            tim: null,
            secu: '300750_SZ_EQ',
            comcode: 'CSF0000005767',
            abbr: '宁德时代',
            abbrzh: '宁德时代',
            abbren: 'Contemporary Amperex',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8571428656578064,
            kws: ['宁德时代', '宁德时代新能源科技股份有限公司'],
            newsSentiment: '1',
            newsSentiWeight: '0.729',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '宁德时代',
            nameen: 'Contemporary Amperex',
            orgAbbrzh: '宁德时代',
            orgAbbren: 'Contemporary Amperex',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            dt: null,
            tim: null,
            secu: '002683_SZ_EQ',
            comcode: 'CSF0000001985',
            abbr: '宏大爆破',
            abbrzh: '宏大爆破',
            abbren: 'HONGDA BLASTING',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.34285715222358704,
            kws: ['广东宏大爆破股份有限公司', '宏大爆破'],
            newsSentiment: '0',
            newsSentiWeight: '0.922',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '宏大爆破',
            nameen: 'HONGDA BLASTING',
            orgAbbrzh: '宏大爆破',
            orgAbbren: 'Hongda Blasting',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            dt: null,
            tim: null,
            secu: '',
            comcode: 'CSF0000078080',
            abbr: '宏大爆破工程集团有限责任公司',
            abbrzh: null,
            abbren: null,
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.34285715222358704,
            kws: ['宏大爆破工程集团有限责任公司'],
            newsSentiment: '0',
            newsSentiWeight: '0.916',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '宏大爆破工程集团有限责任公司',
            nameen: '宏大爆破工程集团有限责任公司',
            orgAbbrzh: null,
            orgAbbren: null,
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 27292627,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4099999964237213,
            kws: ['动力电池', '插电式', '新能源汽车', '混合动力'],
            name: '汽车',
            nameen: 'Automobile'
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.3400000035762787,
            kws: ['充电桩'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            code: 'PS008',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.3400000035762787,
            kws: ['技术咨询', '技术转让'],
            name: '调查和咨询服务',
            nameen: 'Research and Consulting Services'
          }
        ],
        products: [
          {
            id: null,
            oid: 27292627,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4399999976158142,
            kws: ['插电式', '新能源汽车', '混合动力', '动力电池'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            code: 'FA0040010709',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.38999998569488525,
            kws: ['充电桩'],
            name: '充电桩',
            nameen: 'Charging Piles',
            title: null
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            code: 'PS008003',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['技术咨询'],
            name: '咨询服务',
            nameen: 'Consulting Services',
            title: null
          },
          {
            id: null,
            oid: 27292627,
            batch: null,
            code: 'PS008018',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['技术转让'],
            name: '技术转让',
            nameen: 'Technology Transfer',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: null
      },
      {
        id: 27178047,
        dt: '2020-12-17',
        tim: '2020-12-17 12:41:31',
        url: 'https://new.qq.com/omn/20201217/20201217A070ED00.html',
        auth: '腾讯网',
        title: '充电桩：不赚钱的“朝阳产业”',
        conzh:
          '“充电设施建设前期多是服务于运营类车辆，但这一市场比较有限，而通过私家车来提升公共充电桩利用率也较难，一是私家电动车数量还不够多，二是很多私家车更多使用私人桩充电。张帆表示，有些充电桩运营企业已经破产，导致之前建设的充电桩无人管理。另外一些运转正常的充电桩企业，由于部分充电桩利用率较低，企业收益不佳，难以支撑运维服务，最终导致充电桩闲置。”车桩比1:1仍是目标 健康发展尚需时日尽管充电桩利用率低，充电桩运营企业盈利难，但在国家大力支持新能源汽车产业发展的背景下，充电桩仍是被看好的“朝阳产业”。充电桩建设应以快充为主，以吸引用户，提升利用率，从而提高充电桩运营商收益。他指出，充电桩运营商要贴近消费者解决充电问题，应以公共充电桩为辅。',
        titleen: '充电桩：不赚钱的“朝阳产业”',
        conen:
          '“充电设施建设前期多是服务于运营类车辆，但这一市场比较有限，而通过私家车来提升公共充电桩利用率也较难，一是私家电动车数量还不够多，二是很多私家车更多使用私人桩充电。张帆表示，有些充电桩运营企业已经破产，导致之前建设的充电桩无人管理。另外一些运转正常的充电桩企业，由于部分充电桩利用率较低，企业收益不佳，难以支撑运维服务，最终导致充电桩闲置。”车桩比1:1仍是目标 健康发展尚需时日尽管充电桩利用率低，充电桩运营企业盈利难，但在国家大力支持新能源汽车产业发展的背景下，充电桩仍是被看好的“朝阳产业”。充电桩建设应以快充为主，以吸引用户，提升利用率，从而提高充电桩运营商收益。他指出，充电桩运营商要贴近消费者解决充电问题，应以公共充电桩为辅。',
        cat: null,
        state: null,
        summary:
          '“充电设施建设前期多是服务于运营类车辆，但这一市场比较有限，而通过私家车来提升公共充电桩利用率也较难，一是私家电动车数量还不够多，二是很多私家车更多使用私人桩充电。张帆表示，有些充电桩运营企业已经破产，导致之前建设的充电桩无人管理。另外一些运转正常的充电桩企业，由于部分充电桩利用率较低，企业收益不佳，难以支撑运维服务，最终导致充电桩闲置。”车桩比1:1仍是目标 健康发展尚需时日尽管充电桩利用率低，充电桩运营企业盈利难，但在国家大力支持新能源汽车产业发展的背景下，充电桩仍是被看好的“朝阳产业”。充电桩建设应以快充为主，以吸引用户，提升利用率，从而提高充电桩运营商收益。他指出，充电桩运营商要贴近消费者解决充电问题，应以公共充电桩为辅。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.583',
        generateGraph: false,
        concepts: [
          {
            id: null,
            oid: 27178047,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '充电桩',
            kws: ['电动汽车', '充电', '充电桩'],
            code: 'CP0160',
            name: '充电桩',
            nameen: 'Charging Pile Concept',
            title: null
          },
          {
            id: null,
            oid: 27178047,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '特斯拉',
            kws: null,
            code: 'CP0202',
            name: '特斯拉',
            nameen: 'Tesla Concept',
            title: null
          },
          {
            id: null,
            oid: 27178047,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新基建',
            kws: ['新基建', '充电桩'],
            code: 'CP0275',
            name: '新基建',
            nameen: 'New Infrastructure',
            title: null
          },
          {
            id: null,
            oid: 27178047,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['电动汽车充电', '电动车', '电动汽车', '新能源汽车', '充电桩'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: null,
        industries: [
          {
            id: null,
            oid: 27178047,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4099999964237213,
            kws: ['充电桩', '充电桩产品'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          },
          {
            id: null,
            oid: 27178047,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.28999999165534973,
            kws: ['电动车', '公交车', '新能源汽车', '电动汽车充电', '电动汽车'],
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: [
          {
            id: null,
            oid: 27178047,
            batch: null,
            code: 'FA0040010709',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.4399999976158142,
            kws: ['充电桩', '充电桩产品'],
            name: '充电桩',
            nameen: 'Charging Piles',
            title: null
          },
          {
            id: null,
            oid: 27178047,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.27000001072883606,
            kws: ['电动汽车', '新能源汽车', '电动汽车充电'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: [
          {
            id: 4899058,
            oid: 27178047,
            dt: null,
            tim: null,
            region: '南昌市',
            region_en: 'Nanchang',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00003,CSF_CN_360000,CSF_CN_360100'
          },
          {
            id: 4899059,
            oid: 27178047,
            dt: null,
            tim: null,
            region: '北京市',
            region_en: 'Beijing',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00001,CSF_CN_110000'
          },
          {
            id: 4899060,
            oid: 27178047,
            dt: null,
            tim: null,
            region: '淮南市',
            region_en: 'Huainan',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00003,CSF_CN_340000,CSF_CN_340400'
          }
        ]
      },
      {
        id: 27135781,
        dt: '2020-12-16',
        tim: '2020-12-16 11:49:00',
        url: 'http://finance.eastmoney.com/a/202012161739284850.html',
        auth: '东方财富网',
        title: '因违规25家新能源车企被工信部约谈',
        conzh:
          '工信部近期发布新能源汽车监督检查结果，发现部分新能源产品存在生产一致性问题，包括北汽、东风、比亚迪、吉利等25家车企被点名通报。工信部表示，为规范新能源汽车生产行为，加强事中事后监管，根据《道路机动车辆生产企业及产品准入管理办法》等有关规定，该部建立了道路机动车辆产品生产一致性监督检查结果通报制度。在近期组织的对乘用车、客车、专用车3个类别的新能源汽车产品监督检查中，共有25家企业的27个车型存在生产一致性问题。在新能源客车方面，共涉及10家企业的12个车型产品，涉及低速行驶提示音、车辆喇叭、三角警告牌、标志标识等项目不符合国家标准或管理规定。新能源专用车方面，共涉及6家企业的6个车型产品，涉及动力电池容量、报警信号、低速行驶提示音、标志标识等项目不符合国家标准或管理规定。实际上，今年以来政策一直在强化对于新能源汽车发展的监管，除了加大对新能源缺陷产品召回力度外，在今年11月25日，国家市场监管总局办公厅发布了《关于进一步加强汽车远程升级(OTA)技术召回监管的通知》，要求所有采用OTA方式对已售车辆开展技术服务活动的生产者，都应按照《缺陷汽车产品召回管理条例》及《缺陷汽车产品召回管理条例实施办法》的要求，向市场监管总局质量发展局备案。',
        titleen: '因违规25家新能源车企被工信部约谈',
        conen:
          '工信部近期发布新能源汽车监督检查结果，发现部分新能源产品存在生产一致性问题，包括北汽、东风、比亚迪、吉利等25家车企被点名通报。工信部表示，为规范新能源汽车生产行为，加强事中事后监管，根据《道路机动车辆生产企业及产品准入管理办法》等有关规定，该部建立了道路机动车辆产品生产一致性监督检查结果通报制度。在近期组织的对乘用车、客车、专用车3个类别的新能源汽车产品监督检查中，共有25家企业的27个车型存在生产一致性问题。在新能源客车方面，共涉及10家企业的12个车型产品，涉及低速行驶提示音、车辆喇叭、三角警告牌、标志标识等项目不符合国家标准或管理规定。新能源专用车方面，共涉及6家企业的6个车型产品，涉及动力电池容量、报警信号、低速行驶提示音、标志标识等项目不符合国家标准或管理规定。实际上，今年以来政策一直在强化对于新能源汽车发展的监管，除了加大对新能源缺陷产品召回力度外，在今年11月25日，国家市场监管总局办公厅发布了《关于进一步加强汽车远程升级(OTA)技术召回监管的通知》，要求所有采用OTA方式对已售车辆开展技术服务活动的生产者，都应按照《缺陷汽车产品召回管理条例》及《缺陷汽车产品召回管理条例实施办法》的要求，向市场监管总局质量发展局备案。',
        cat: null,
        state: null,
        summary:
          '工信部近期发布新能源汽车监督检查结果，发现部分新能源产品存在生产一致性问题，包括北汽、东风、比亚迪、吉利等25家车企被点名通报。工信部表示，为规范新能源汽车生产行为，加强事中事后监管，根据《道路机动车辆生产企业及产品准入管理办法》等有关规定，该部建立了道路机动车辆产品生产一致性监督检查结果通报制度。在近期组织的对乘用车、客车、专用车3个类别的新能源汽车产品监督检查中，共有25家企业的27个车型存在生产一致性问题。在新能源客车方面，共涉及10家企业的12个车型产品，涉及低速行驶提示音、车辆喇叭、三角警告牌、标志标识等项目不符合国家标准或管理规定。新能源专用车方面，共涉及6家企业的6个车型产品，涉及动力电池容量、报警信号、低速行驶提示音、标志标识等项目不符合国家标准或管理规定。实际上，今年以来政策一直在强化对于新能源汽车发展的监管，除了加大对新能源缺陷产品召回力度外，在今年11月25日，国家市场监管总局办公厅发布了《关于进一步加强汽车远程升级(OTA)技术召回监管的通知》，要求所有采用OTA方式对已售车辆开展技术服务活动的生产者，都应按照《缺陷汽车产品召回管理条例》及《缺陷汽车产品召回管理条例实施办法》的要求，向市场监管总局质量发展局备案。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.629',
        generateGraph: false,
        concepts: [
          {
            id: null,
            oid: 27135781,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: ['新能源车', '汽车', '新能源汽车'],
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: null,
        industries: [
          {
            id: null,
            oid: 27135781,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.49000000953674316,
            kws: ['新能源汽车', '新能源车', '乘用车', '汽车', '新能源客车', '客车'],
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: [
          {
            id: null,
            oid: 27135781,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.46000000834465027,
            kws: ['新能源汽车', '新能源车', '新能源客车'],
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          },
          {
            id: null,
            oid: 27135781,
            batch: null,
            code: 'AC003002',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.23000000417232513,
            kws: ['乘用车'],
            name: '乘用车',
            nameen: 'Passenger Vehicles',
            title: null
          }
        ],
        events: null,
        peoples: null,
        regions: null
      },
      {
        id: 26915110,
        dt: '2020-12-09',
        tim: '2020-12-09 20:48:25',
        url: 'http://stock.hexun.com/2020-12-09/202589096.html',
        auth: '和讯网',
        title: '汉宇集团(300403.SZ)：向控股股东转让深圳法拉第51%股权',
        conzh:
          '格隆汇 12 月 9日丨汉宇集团(300403,股吧)(300403.SZ)公布，公司向控股股东石华山转让控股子公司深圳市法拉第电驱动有限公司(“深圳法拉第”)51%股权，转让价格为人民币1578.69万元，并由石华山承担该部分股权对应的人民币510万元出资义务。此次股权转让完成后公司不再持有深圳法拉第股权。此次转让深圳法拉第51%股权，有利于公司适度集中资源，在新能源汽车部件业务方面聚焦汽车电子水泵、充电桩系列产品。目前，深圳法拉第仍处在新能源汽车驱动电机的研发阶段，尚未向汽车主机厂供货，研发进度及产品销售存在不确定性。本次转让深圳法拉第的股权，有利于降低公司的投资风险。',
        titleen: '汉宇集团(300403.SZ)：向控股股东转让深圳法拉第51%股权',
        conen:
          '格隆汇 12 月 9日丨汉宇集团(300403,股吧)(300403.SZ)公布，公司向控股股东石华山转让控股子公司深圳市法拉第电驱动有限公司(“深圳法拉第”)51%股权，转让价格为人民币1578.69万元，并由石华山承担该部分股权对应的人民币510万元出资义务。此次股权转让完成后公司不再持有深圳法拉第股权。此次转让深圳法拉第51%股权，有利于公司适度集中资源，在新能源汽车部件业务方面聚焦汽车电子水泵、充电桩系列产品。目前，深圳法拉第仍处在新能源汽车驱动电机的研发阶段，尚未向汽车主机厂供货，研发进度及产品销售存在不确定性。本次转让深圳法拉第的股权，有利于降低公司的投资风险。',
        cat: null,
        state: null,
        summary:
          '格隆汇 12 月 9日丨汉宇集团(300403,股吧)(300403.SZ)公布，公司向控股股东石华山转让控股子公司深圳市法拉第电驱动有限公司(“深圳法拉第”)51%股权，转让价格为人民币1578.69万元，并由石华山承担该部分股权对应的人民币510万元出资义务。此次股权转让完成后公司不再持有深圳法拉第股权。此次转让深圳法拉第51%股权，有利于公司适度集中资源，在新能源汽车部件业务方面聚焦汽车电子水泵、充电桩系列产品。目前，深圳法拉第仍处在新能源汽车驱动电机的研发阶段，尚未向汽车主机厂供货，研发进度及产品销售存在不确定性。本次转让深圳法拉第的股权，有利于降低公司的投资风险。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.5',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26915110,
            batch: null,
            dt: null,
            tim: null,
            secu: '300403_SZ_EQ',
            comcode: 'CSF0000003422',
            abbr: '汉宇集团',
            abbrzh: '汉宇集团',
            abbren: 'Hanyu Group',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.6428571343421936,
            kws: ['汉宇集团'],
            newsSentiment: '2',
            newsSentiWeight: '1.0',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '汉宇集团',
            nameen: 'Hanyu Group',
            orgAbbrzh: '汉宇集团',
            orgAbbren: 'Hanyu Group',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 26915110,
            batch: null,
            code: 'AC001',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.38999998569488525,
            kws: ['新能源汽车驱动电机', '新能源汽车部件'],
            name: '机动车零配件与设备',
            nameen: 'Auto Parts and Equipment'
          },
          {
            id: null,
            oid: 26915110,
            batch: null,
            code: 'FA007',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['水泵'],
            name: '工业机械',
            nameen: 'Industrial Machinery'
          },
          {
            id: null,
            oid: 26915110,
            batch: null,
            code: 'FA004',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['充电桩系列'],
            name: '电气部件与设备',
            nameen: 'Electrical Components and Equipment'
          },
          {
            id: null,
            oid: 26915110,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['汽车'],
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: [
          {
            id: null,
            oid: 26915110,
            batch: null,
            name: '新能源汽车部件',
            code: 'AC001023',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['新能源汽车部件'],
            nameen: 'Spare Parts for New Energy Vehicles',
            title: null
          },
          {
            id: null,
            oid: 26915110,
            batch: null,
            name: '水泵',
            code: 'FA00700203',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['水泵'],
            nameen: 'Water Pumps',
            title: null
          },
          {
            id: null,
            oid: 26915110,
            batch: null,
            name: '充电桩',
            code: 'FA0040010709',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['充电桩系列'],
            nameen: 'Charging Piles',
            title: null
          },
          {
            id: null,
            oid: 26915110,
            batch: null,
            name: '新能源汽车驱动电机',
            code: 'AC00100309',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['新能源汽车驱动电机'],
            nameen: 'Driving Motors for New Energy Vehicles',
            title: null
          },
          {
            id: null,
            oid: 26915110,
            batch: null,
            name: '汽车制造',
            code: 'AC003',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.20000000298023224,
            kws: ['汽车'],
            nameen: 'Auto Manufacturer',
            title: null
          }
        ],
        events: [
          {
            id: null,
            oid: 26915110,
            batch: null,
            name: '股东减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: [12],
            relAnnc: [12],
            typeCode: 12,
            typeName: '股东股权',
            itemName: '股东减持',
            nameen: 'Holding Reduction by Shareholder',
            code: 'BB002005',
            eventEntityList: [
              {
                eventSubjectCode: 'CSF0000003422',
                name: '汉宇集团',
                eventSubjectNameen: 'Hanyu Group',
                eventSubjectOrgAbbrzh: '汉宇集团',
                eventSubjectOrgAbbren: 'Hanyu Group',
                type: 1,
                eventSubjectRole: 1
              },
              {
                eventSubjectCode: 'P10095354',
                name: '石华山',
                eventSubjectNameen: 'Shi Huashan',
                eventSubjectOrgAbbrzh: null,
                eventSubjectOrgAbbren: null,
                type: 2,
                eventSubjectRole: 1
              }
            ],
            title: null
          }
        ],
        peoples: [
          {
            id: null,
            oid: 26915110,
            name: '石华山',
            pcode: 'P10095354',
            comcode: 'CSF0000003422',
            code: 'P10095354',
            secu: null,
            position: null,
            speak: null,
            speak_con: null,
            upu: null,
            upt: null,
            kws: ['石华山'],
            newsSentiment: '2',
            newsSentiWeight: '1.0',
            nameen: 'Shi Huashan'
          }
        ],
        regions: null
      }
    ]
  }
  return result
}

// 舆情咨询
export const testList = async (data) => {
  await sleep(300)
  const result = {
    result: [
      {
        id: 26569936,
        dt: '2020-12-01',
        tim: '2020-12-01 19:36:00',
        url: 'https://cn.investing.com/news/stock-market-news/article-1983582',
        auth: '英为财情',
        title: '上市三年即停产 长安汽车“甩卖”悦翔V5资产',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '财联社(北京,记者 徐昊)讯,上市仅三年即遭遇停产；在被搁置五年后，相关资产又被挂牌出售——主角正是长安汽车旗下车型悦翔V5。悦翔V5为长安旗下一款紧凑型轿车，于2012年上市，但因市场反应平平，2015年被迫停产。因“山寨”长安汽车旗下合资公司车型长安马自达3，悦翔V5在上市之初便饱受争议。数据显示，悦翔V5销量曾在上市后的第二个月达到6000余辆，其后便一蹶不振。在这次会议上，长安汽车计划将对CS35、CS75、悦翔V7这三款重点车型进行大幅度的销量上调，分别计划销售16万辆、17.4万辆和8.8万辆。在之后的几年里，CS75系列成为了长安汽车的走量车型。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.986',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26569936,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.7368420958518982,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.891',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26569936,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.7368420958518982,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.891',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 26569936,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.3400000035762787,
            kws: null,
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: null,
        events: [
          {
            id: null,
            oid: 26569936,
            batch: null,
            name: '产量冻结',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '产量冻结',
            nameen: 'Production Freeze',
            code: 'AA003001',
            eventEntityList: null,
            title: null
          },
          {
            id: null,
            oid: 26569936,
            batch: null,
            name: '出售资产',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '出售资产',
            nameen: 'Asset Sale',
            code: 'AD003002012',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: [
          {
            id: 13114823,
            oid: 26569936,
            dt: null,
            tim: null,
            region: '北京市',
            region_en: 'Beijing',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00001,CSF_CN_110000'
          },
          {
            id: 13114824,
            oid: 26569936,
            dt: null,
            tim: null,
            region: '重庆市',
            region_en: 'Chongqing',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00006,CSF_CN_500000'
          }
        ]
      },
      {
        id: 26214160,
        dt: '2020-11-21',
        tim: '2020-11-21 09:07:00',
        url: 'http://finance.eastmoney.com/a/202011211709746118.html',
        auth: '东方财富网',
        title: '不惧利空 资金回流天齐锂业 机构游资逢高抛售长安汽车',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '不惧利空，资金回流天齐锂业 机构游资逢高抛售长安汽车本周，指数震荡上扬，两市表现坚韧，创业板指数相对较弱，进三退二。统计区间：2020年11月16日至2020年11月20日从监测到的数据上看，本周异动股数为142只，主力资金本周的买入金额为221亿元，卖出金额为223亿元，合计卖出净额为2亿元。统计区间：2020年11月16日至2020年11月20日从表二主力卖出净额前列的个股来看，本周主力总体的抛压力度也不小，共有10只个股卖出净额超过亿元，分别是长安汽车、王府井、润禾材料、奇信股份、会稽山、鲁西化工、金浦钛业、神州数码、国网英大、起步股份。长安汽车本周高位回落，机构游资集体抛售，力度十分巨大。统计区间：2020年11月16日至2020年11月20日从表三的数据可以看出，游资十分活跃，本周登榜次数超过10次的游资有18家，西藏东财拉萨系的依然是最为活跃的游资。另外，值得注意的是沪股通，沪股通主要抛售了长安汽车、鲁西化工、云铝股份、神火股份、神州数码、天音控股、美吉姆。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.923',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.5925925970077515,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.716',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.5925925970077515,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.716',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '002466_SZ_EQ',
            comcode: 'CSF0000001956',
            abbr: '天齐锂业',
            abbrzh: '天齐锂业',
            abbren: 'TIANQI LITHIUM',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.5555555820465088,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.694',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '天齐锂业',
            nameen: 'TIANQI LITHIUM',
            orgAbbrzh: '天齐锂业',
            orgAbbren: 'Tianqi Lithium',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '000768_SZ_EQ',
            comcode: 'CSF0000002939',
            abbr: '中航飞机',
            abbrzh: '中航西飞',
            abbren: 'AVIC XAC',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.10629629343748093,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.85',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '中航飞机',
            nameen: 'AVIC Aircraft',
            orgAbbrzh: '中航西飞',
            orgAbbren: 'AVIC XAC',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '600859_SH_EQ',
            comcode: 'CSF0000002553',
            abbr: '王府井',
            abbrzh: '王府井',
            abbren: 'Wangfujing',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.09703703969717026,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.808',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '王府井',
            nameen: 'Wangfujing',
            orgAbbrzh: '王府井',
            orgAbbren: 'Wangfujing',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '00861_HK_EQ',
            comcode: 'CSF0000000238',
            abbr: '神州控股',
            abbrzh: '神州控股',
            abbren: 'DC Holdings',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08777777850627899,
            kws: null,
            newsSentiment: '0',
            newsSentiWeight: '0.91',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '神州控股',
            nameen: 'DC Holdings',
            orgAbbrzh: '神州控股',
            orgAbbren: 'DC Holdings',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '002460_SZ_EQ',
            comcode: 'CSF0000000384',
            abbr: '赣锋锂业',
            abbrzh: '赣锋锂业',
            abbren: 'GANFENG LITHIUM',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08777777850627899,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.787',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '赣锋锂业',
            nameen: 'Ganfeng Lithium',
            orgAbbrzh: '赣锋锂业',
            orgAbbren: 'Ganfeng Lithium',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '01772_HK_EQ',
            comcode: 'CSF0000000384',
            abbr: '赣锋锂业',
            abbrzh: '赣锋锂业',
            abbren: 'Ganfeng Lithium',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08777777850627899,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.787',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '赣锋锂业',
            nameen: 'Ganfeng Lithium',
            orgAbbrzh: '赣锋锂业',
            orgAbbren: 'Ganfeng Lithium',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214160,
            batch: null,
            dt: null,
            tim: null,
            secu: '000034_SZ_EQ',
            comcode: 'CSF0000001208',
            abbr: '神州数码',
            abbrzh: '神州数码',
            abbren: 'Digital China',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08777777850627899,
            kws: null,
            newsSentiment: '0',
            newsSentiWeight: '0.91',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '神州数码',
            nameen: 'Digital China',
            orgAbbrzh: '神州数码',
            orgAbbren: 'Digital China',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 26214160,
            batch: null,
            name: '机构减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '机构减持',
            nameen: 'Holding Reduction by Institution',
            code: 'BB002008',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: [
          {
            id: 13012913,
            oid: 26214160,
            dt: null,
            tim: null,
            region: '上海市',
            region_en: 'Shanghai',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00003,CSF_CN_310000'
          }
        ]
      },
      {
        id: 26214443,
        dt: '2020-11-21',
        tim: '2020-11-21 00:00:00',
        url: 'http://www.gushi360.com/stock/shichang/b/2020-11-21/1054071.shtml',
        auth: '股市360股票网',
        title: '[股市360]不惧利空 资金回流天齐锂业 机构游资逢高抛售长安汽车',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '----本文导读：----原标题：不惧利空，资金回流天齐锂业 机构游资逢高抛售长安汽车本周，指数震荡上扬，两市表现坚韧，创业板指数相对较弱，进三退二。统计区间：2020年11月16日至2020年11月20日从监测到的数据上看，本周异动股数为142只，主力资金本周的买入金额为221亿元，卖出金额为223亿元，合计卖出净额为2亿元。统计区间：2020年11月16日至2020年11月20日从表二主力卖出净额前列的个股来看，本周主力总体的抛压力度也不小，共有10只个股卖出净额超过亿元，分别是长安汽车、王府井、润禾材料、奇信股份、会稽山、鲁西化工、金浦钛业、神州数码、国网英大、起步股份。长安汽车本周高位回落，机构游资集体抛售，力度十分巨大。统计区间：2020年11月16日至2020年11月20日从表三的数据可以看出，游资十分活跃，本周登榜次数超过10次的游资有18家，西藏东财拉萨系的依然是最为活跃的游资。另外，值得注意的是沪股通，沪股通主要抛售了长安汽车、鲁西化工、云铝股份、神火股份、神州数码、天音控股、美吉姆。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.871',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.5909090638160706,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.71',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.5909090638160706,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.71',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '002466_SZ_EQ',
            comcode: 'CSF0000001956',
            abbr: '天齐锂业',
            abbrzh: '天齐锂业',
            abbren: 'TIANQI LITHIUM',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.5545454621315002,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.687',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '天齐锂业',
            nameen: 'TIANQI LITHIUM',
            orgAbbrzh: '天齐锂业',
            orgAbbren: 'Tianqi Lithium',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '000768_SZ_EQ',
            comcode: 'CSF0000002939',
            abbr: '中航飞机',
            abbrzh: '中航西飞',
            abbren: 'AVIC XAC',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.10101009905338287,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.85',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '中航飞机',
            nameen: 'AVIC Aircraft',
            orgAbbrzh: '中航西飞',
            orgAbbren: 'AVIC XAC',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '600859_SH_EQ',
            comcode: 'CSF0000002553',
            abbr: '王府井',
            abbrzh: '王府井',
            abbren: 'Wangfujing',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.0919191911816597,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.808',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '王府井',
            nameen: 'Wangfujing',
            orgAbbrzh: '王府井',
            orgAbbren: 'Wangfujing',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '00861_HK_EQ',
            comcode: 'CSF0000000238',
            abbr: '神州控股',
            abbrzh: '神州控股',
            abbren: 'DC Holdings',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08282828330993652,
            kws: null,
            newsSentiment: '0',
            newsSentiWeight: '0.91',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '神州控股',
            nameen: 'DC Holdings',
            orgAbbrzh: '神州控股',
            orgAbbren: 'DC Holdings',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '002460_SZ_EQ',
            comcode: 'CSF0000000384',
            abbr: '赣锋锂业',
            abbrzh: '赣锋锂业',
            abbren: 'GANFENG LITHIUM',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08282828330993652,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.787',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '赣锋锂业',
            nameen: 'Ganfeng Lithium',
            orgAbbrzh: '赣锋锂业',
            orgAbbren: 'Ganfeng Lithium',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '01772_HK_EQ',
            comcode: 'CSF0000000384',
            abbr: '赣锋锂业',
            abbrzh: '赣锋锂业',
            abbren: 'Ganfeng Lithium',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08282828330993652,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.787',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '赣锋锂业',
            nameen: 'Ganfeng Lithium',
            orgAbbrzh: '赣锋锂业',
            orgAbbren: 'Ganfeng Lithium',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 26214443,
            batch: null,
            dt: null,
            tim: null,
            secu: '000034_SZ_EQ',
            comcode: 'CSF0000001208',
            abbr: '神州数码',
            abbrzh: '神州数码',
            abbren: 'Digital China',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.08282828330993652,
            kws: null,
            newsSentiment: '0',
            newsSentiWeight: '0.91',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '神州数码',
            nameen: 'Digital China',
            orgAbbrzh: '神州数码',
            orgAbbren: 'Digital China',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 26214443,
            batch: null,
            name: '机构减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '机构减持',
            nameen: 'Holding Reduction by Institution',
            code: 'BB002008',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: [
          {
            id: 13013004,
            oid: 26214443,
            dt: null,
            tim: null,
            region: '上海市',
            region_en: 'Shanghai',
            region_code: 'CSF_000000,CSF_001000,CSF_001001,CSF_CN,CSF_CN_R00003,CSF_CN_310000'
          }
        ]
      },
      {
        id: 26154833,
        dt: '2020-11-19',
        tim: '2020-11-19 17:48:03',
        url: 'https://www.yicai.com/news/100844739.html',
        auth: '第一财经',
        title: '股价刚创近5年新高就大跌 一机构卖出长安汽车4.3亿元',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '11月19日，长安汽车（000625）高开低走，盘中大幅下探一度触及跌停。截至收盘，该股报20.25元下跌9.3%，全日成交71.7亿元。此前的5个交易日，该股连续大涨，累计涨幅高达39%。盘后交易数据显示，深股通卖出3.98亿元并买入1.34亿元，一机构卖出4.3亿元，兴业证券陕西分公司卖出4.4亿元。除上述信息外，公司未发现近期其他公共媒体报道了可能或已经对公司股票交易价格产生较大影响的未公开重大信息。公司目前经营情况正常，内外部经营环境未发生重大变化。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.983',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26154833,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.6363636255264282,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.985',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26154833,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.6363636255264282,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.985',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 26154833,
            batch: null,
            name: '股价创新高',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '股价创新高',
            nameen: 'Record High of Individual Stock Price',
            code: 'FA022',
            eventEntityList: null,
            title: null
          },
          {
            id: null,
            oid: 26154833,
            batch: null,
            name: '机构减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '机构减持',
            nameen: 'Holding Reduction by Institution',
            code: 'BB002008',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 26151137,
        dt: '2020-11-19',
        tim: '2020-11-19 16:44:00',
        url: 'https://kuaixun.stcn.com/egs/202011/t20201119_2548859.html',
        auth: '证券时报网',
        title: '长安汽车跌逾9% 一机构卖出4.31亿元',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '长安汽车跌逾9% 一机构卖出4.31亿元#&#证券时报e公司讯，长安汽车(000625)今日收跌9.31%，全天成交71.7亿元。该股盘后数据显示，深股通席位卖出3.98亿元同时买入1.34亿元，一机构席位卖出4.31亿元。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.993',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26151137,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8333333134651184,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.969',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26151137,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8333333134651184,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.969',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 26151137,
            batch: null,
            name: '机构减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '机构减持',
            nameen: 'Holding Reduction by Institution',
            code: 'BB002008',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 26150858,
        dt: '2020-11-19',
        tim: '2020-11-19 16:36:00',
        url: 'http://finance.eastmoney.com/a/202011191707541557.html',
        auth: '东方财富网',
        title: '长安汽车一度跌停 一机构卖出4.3亿元',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '长安汽车一度跌停 一机构卖出4.3亿元摘要【数据】长安汽车今日跌9.3%，盘中一度跌停，盘后交易数据显示，深股通卖出3.98亿元并买入1.34亿元，一机构卖出4.3亿元，兴业证券陕西分公司卖出4.4亿元。（第一财经）长安汽车今日跌9.3%，盘中一度跌停，盘后交易数据显示，深股通卖出3.98亿元并买入1.34亿元，一机构卖出4.3亿元，兴业证券陕西分公司卖出4.4亿元。（文章来源：第一财经）。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.991',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26150858,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8999999761581421,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.996',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26150858,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8999999761581421,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.996',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 26150858,
            batch: null,
            name: '个股下跌',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '个股下跌',
            nameen: 'Decline in Individual Stock Price',
            code: 'FA020',
            eventEntityList: null,
            title: null
          },
          {
            id: null,
            oid: 26150858,
            batch: null,
            name: '机构减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '机构减持',
            nameen: 'Holding Reduction by Institution',
            code: 'BB002008',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 26150917,
        dt: '2020-11-19',
        tim: '2020-11-19 16:36:00',
        url: 'https://www.fx112.com/stock/short-1898397.html',
        auth: 'FX112财经网',
        title: '【长安汽车跌逾9% 一机构卖出4.31亿',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '【长安汽车跌逾9% 一机构卖出4.31亿#&#【长安汽车跌逾9% 一机构卖出4.31亿元】长安汽车今日收跌9.31%，全天成交71.7亿元。该股盘后数据显示，深股通席位卖出3.98亿元同时买入1.34亿元，一机构席位卖出4.31亿元。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.988',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26150917,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8333333134651184,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.996',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26150917,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8333333134651184,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.996',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 26150917,
            batch: null,
            name: '机构减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '机构减持',
            nameen: 'Holding Reduction by Institution',
            code: 'BB002008',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 26151578,
        dt: '2020-11-19',
        tim: '2020-11-19 00:00:00',
        url: 'http://www.gushi360.com/finance/gsxw/2020-11-19/1052958.shtml',
        auth: '股市360股票网',
        title: '[股市360]长安汽车一度跌停 一机构卖出4.3亿元',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '----本文导读：----原标题：长安汽车一度跌停 一机构卖出4.3亿元 摘要 【数据】长安汽车今日跌9.3%，盘中一度跌停，盘后交易数据显示，深股通卖出3.98亿元并买入1.34亿元，一机构卖出4.3亿元，兴业证券陕西分公司卖出4.4亿元。（第一财经）长安汽车今日跌9.3%，盘中一度跌停，盘后交易数据显示，深股通卖出3.98亿元并买入1.34亿元，一机构卖出4.3亿元，兴业证券陕西分公司卖出4.4亿元。（文章来源：第一财经） 郑重声明：东方财富网发布此信息的目的在于传播更多信息，与本站立场无关。--股市360股票频道讯。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.994',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 26151578,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.800000011920929,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.996',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 26151578,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.800000011920929,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.996',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 26151578,
            batch: null,
            name: '大盘下跌',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '大盘下跌',
            nameen: 'Broad Market Decline',
            code: 'FA012',
            eventEntityList: null,
            title: null
          },
          {
            id: null,
            oid: 26151578,
            batch: null,
            name: '机构减持',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '机构减持',
            nameen: 'Holding Reduction by Institution',
            code: 'BB002008',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 25994625,
        dt: '2020-11-16',
        tim: '2020-11-16 07:34:00',
        url: 'http://stock.jrj.com.cn/2020/11/16073431288919.shtml',
        auth: '金融界',
        title: 'A股车企三季报：8家净利润同比下滑 长安汽车、比亚迪营收净利双增',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '增速来看，长安汽车、比亚迪、江淮汽车(行情600418,诊股)及广汽集团(行情601238,诊股)前三季度营收同比增长，增速分别约23.77%、11.94%、7.7%和0.27%。图4：10家车企2020年1-9月归母净利润及同比增速营收利润综合来看，2020年前三季度营收与归母净利润均实现增长的车企有长安汽车和比亚迪。从同比变动来看，前三季度累计销量同比增长的车企有长安汽车和江淮汽车2家，增幅分别约12.01%和3.67%。图5：10家车企2020年1-9月累计销量、新能源销量及同比变动在披露新能源销量数据的车企中，除上年同期基数偏低的小康股份和*ST力帆外，其余车企前三季度累计新能源销量较2019年同期出现不同程度下滑，且降幅大于传统燃油车。长城汽车前三季度累计销售新能源汽车2.48万辆，同比下滑24.32%，同期公司燃油车累计销量同比下滑5.13%。图6: 2020年1-9月国内累计销量排名前十的新能源乘用车车型及销量同比根据乘联会公布的数据，2020年前三季度国内累计销量排名第一的新能源乘用车车型为特斯拉的Model3，累计销量约7.99万辆，约是排名第二的广汽埃安销量的2.62倍。',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.976',
        generateGraph: true,
        concepts: [
          {
            id: null,
            oid: 25994625,
            batch: null,
            conceptId: null,
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upu: null,
            upt: null,
            conceptName: '新能源汽车',
            kws: null,
            code: 'CP0031',
            name: '新能源汽车',
            nameen: 'New Energy Automobile',
            title: null
          }
        ],
        companys: [
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.612500011920929,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.881',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.612500011920929,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.881',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '002594_SZ_EQ',
            comcode: 'CSF0000002554',
            abbr: '比亚迪',
            abbrzh: '比亚迪',
            abbren: 'BYD',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.612500011920929,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.894',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '比亚迪',
            nameen: 'BYD',
            orgAbbrzh: '比亚迪',
            orgAbbren: 'BYD',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '01211_HK_EQ',
            comcode: 'CSF0000002554',
            abbr: '比亚迪股份',
            abbrzh: '比亚迪股份',
            abbren: 'BYD-H',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.612500011920929,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.894',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '比亚迪股份',
            nameen: 'BYD-H',
            orgAbbrzh: '比亚迪',
            orgAbbren: 'BYD',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '600104_SH_EQ',
            comcode: 'CSF0000000369',
            abbr: '上汽集团',
            abbrzh: '上汽集团',
            abbren: 'SAIC Motor Corporation',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.14945651590824127,
            kws: null,
            newsSentiment: '1',
            newsSentiWeight: '0.83',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '上汽集团',
            nameen: 'SAIC Motor Corporation',
            orgAbbrzh: '上汽集团',
            orgAbbren: 'SAIC Motor Corporation',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '601777_SH_EQ',
            comcode: 'CSF0000000587',
            abbr: '*ST力帆',
            abbrzh: '*ST力帆',
            abbren: 'LIFAN IND',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.13695652782917023,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.893',
            mkt: null,
            isBond: true,
            isTech: null,
            name: '*ST力帆',
            nameen: '*ST力帆',
            orgAbbrzh: '力帆股份',
            orgAbbren: 'LIFAN IND',
            title: null,
            bond: true,
            tech: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '601633_SH_EQ',
            comcode: 'CSF0000000699',
            abbr: '长城汽车',
            abbrzh: '长城汽车',
            abbren: 'GREAT WALL MOT-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.10271739214658737,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.815',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长城汽车',
            nameen: 'GREAT WALL MOT-H',
            orgAbbrzh: '长城汽车',
            orgAbbren: 'Great Wall Motor',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            dt: null,
            tim: null,
            secu: '02333_HK_EQ',
            comcode: 'CSF0000000699',
            abbr: '长城汽车',
            abbrzh: '长城汽车',
            abbren: 'GREAT WALL MOT-H',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.10271739214658737,
            kws: null,
            newsSentiment: '2',
            newsSentiWeight: '0.815',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长城汽车',
            nameen: 'GREAT WALL MOT-H',
            orgAbbrzh: '长城汽车',
            orgAbbren: 'Great Wall Motor',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: [
          {
            id: null,
            oid: 25994625,
            batch: null,
            code: 'AC005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.25,
            kws: null,
            name: '汽车',
            nameen: 'Automobile'
          }
        ],
        products: [
          {
            id: null,
            oid: 25994625,
            batch: null,
            code: 'AC003005',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.11999999731779099,
            kws: null,
            name: '新能源汽车',
            nameen: 'New Energy Automobiles',
            title: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            code: 'AC003002',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            weight: 0.10000000149011612,
            kws: null,
            name: '乘用车',
            nameen: 'Passenger Vehicles',
            title: null
          }
        ],
        events: [
          {
            id: null,
            oid: 25994625,
            batch: null,
            name: '利润减少',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '利润减少',
            nameen: 'Profit Decline',
            code: 'CD008001',
            eventEntityList: null,
            title: null
          },
          {
            id: null,
            oid: 25994625,
            batch: null,
            name: '营收增加',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '营收增加',
            nameen: 'Revenue Growth',
            code: 'CD008032',
            eventEntityList: null,
            title: null
          }
        ],
        peoples: null,
        regions: null
      },
      {
        id: 25905708,
        dt: '2020-11-12',
        tim: '2020-11-12 16:36:36',
        url: 'http://stock.10jqka.com.cn/20201112/c624682874.shtml',
        auth: '同花顺',
        title: '长安汽车：吕来升不再担任董事',
        conzh: null,
        titleen: null,
        conen: null,
        cat: null,
        state: null,
        summary:
          '长安汽车：吕来升不再担任董事#&#长安汽车（000625）(000625.SZ)发布公告，公司董事吕来升先生因工作变动不再担任董事职务，且不在公司任职，未持有公司股票。#&#关注同花顺财经（ths518），获取更多机会',
        summaryen: null,
        batch: 2388,
        favorite: false,
        newsSentiment: '2',
        newsSentiWeight: '0.882',
        generateGraph: true,
        concepts: null,
        companys: [
          {
            id: null,
            oid: 25905708,
            batch: null,
            dt: null,
            tim: null,
            secu: '000625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安汽车',
            abbrzh: '长安汽车',
            abbren: 'CHANGAN AUTO-A',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8333333134651184,
            kws: null,
            newsSentiment: '0',
            newsSentiWeight: '0.547',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安汽车',
            nameen: 'CHANGAN AUTO-A',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          },
          {
            id: null,
            oid: 25905708,
            batch: null,
            dt: null,
            tim: null,
            secu: '200625_SZ_EQ',
            comcode: 'CSF0000001675',
            abbr: '长安B',
            abbrzh: '长安B',
            abbren: 'CHANGAN AUTO-B',
            remark: null,
            state: null,
            upt: null,
            upu: null,
            product: null,
            industry: null,
            weight: 0.8333333134651184,
            kws: null,
            newsSentiment: '0',
            newsSentiWeight: '0.547',
            mkt: null,
            isBond: false,
            isTech: null,
            name: '长安B',
            nameen: 'CHANGAN AUTO-B',
            orgAbbrzh: '长安汽车',
            orgAbbren: 'Changan Automobile',
            title: null,
            bond: false,
            tech: null
          }
        ],
        industries: null,
        products: null,
        events: [
          {
            id: null,
            oid: 25905708,
            batch: null,
            name: '董事辞职',
            remark: null,
            state: null,
            dt: null,
            tim: null,
            upt: null,
            upu: null,
            relNews: null,
            relAnnc: null,
            typeCode: null,
            typeName: null,
            itemName: '董事辞职',
            nameen: 'Director Resignation',
            code: 'CF002007',
            eventEntityList: [
              {
                eventSubjectCode: 'CSF0000001675',
                name: '长安汽车',
                eventSubjectNameen: 'CHANGAN AUTO-A',
                eventSubjectOrgAbbrzh: '长安汽车',
                eventSubjectOrgAbbren: 'Changan Automobile',
                type: 1,
                eventSubjectRole: 1
              }
            ],
            title: null
          }
        ],
        peoples: null,
        regions: null
      }
    ]
  }
  return result
}

// 行业环境
export const envMenu = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        code: 'up',
        children: [
          {
            name: '锂离子电池',
            code: 'EC001001130201'
          },
          {
            name: '汽车生产设备',
            code: '汽车生产设备',
            disabled: true
          },
          {
            name: '汽车模具',
            code: '汽车模具',
            disabled: true
          },
          {
            name: '汽车车身系统',
            code: '汽车车身系统',
            disabled: true
          }
        ]
      },
      {
        code: 'mid',
        children: [
          {
            name: '新能源车整车制造（国标4级）',
            code: 'AC003005'
          }
        ]
      },
      {
        code: 'down',
        children: [
          {
            name: '充电桩',
            code: 'FA0040010709'
          },
          {
            name: '汽保设备',
            code: '汽保设备',
            disabled: true
          },
          {
            name: '汽车充电枪',
            code: '汽车充电枪',
            disabled: true
          },
          {
            name: '汽车租赁',
            code: '汽车租赁',
            disabled: true
          }
        ]
      }
    ]
  }
}

export const envChart = async (data) => {
  let response = {}
  if (data.code === 'AC003005') {
    response = {
      names: [
        {
          name: '销量_新能源汽车_当月值',
          value: 'value1',
          unit: '辆',
          rate: '月'
        },
        {
          name: '产量_新能源汽车_当月值',
          value: 'value2',
          unit: '辆',
          rate: '月'
        },
        {
          name: '销量_新能源汽车_混合动力车_累计值',
          value: 'value3',
          unit: '辆',
          rate: '月'
        },
        {
          name: '销量_新能源汽车_纯电动车_累计值',
          value: 'value4',
          unit: '辆',
          rate: '月'
        }
      ],
      chart: [
        { rpt: '2016-01-31', value1: '6395', value2: '16100', value3: ' 3289', value4: '3106' },
        { rpt: '2016-02-29', value1: '29331', value2: ' 6889', value3: '10891', value4: ' 24835' },
        { rpt: '2016-03-31', value1: '22936', value2: ' 25246', value3: ' 15994', value4: ' 42131' },
        { rpt: '2016-04-30', value1: '31772', value2: ' 31266', value3: ' 24085', value4: ' 66444' },
        { rpt: '2016-05-31', value1: '35000', value2: ' 37000', value3: ' 34000', value4: ' 92000' },
        { rpt: '2016-06-30', value1: '44000', value2: ' 45000', value3: ' 44000', value4: ' 126000' },
        { rpt: '2016-07-31', value1: '36000', value2: ' 38000', value3: ' 54000', value4: ' 153000' },
        { rpt: '2016-08-31', value1: '38000', value2: ' 42000', value3: ' 64000', value4: ' 181000' },
        { rpt: '2016-09-30', value1: '44000', value2: ' 43000', value3: ' 73000', value4: ' 216000' },
        { rpt: '2016-10-31', value1: '44000', value2: ' 49000', value3: ' 79000', value4: ' 258000' },
        { rpt: '2016-11-30', value1: '65000', value2: ' 72000', value3: ' 86000', value4: ' 316000' },
        { rpt: '2016-12-31', value1: '105000', value2: '89000', value3: ' 98000', value4: ' 409000' },
        { rpt: '2017-01-31', value1: '5682', value2: '6889', value3: '704', value4: '4978' },
        { rpt: '2017-02-28', value1: '17596', value2: ' 17972', value3: ' 5818', value4: '18963' },
        { rpt: '2017-03-31', value1: '31120', value2: ' 33015', value3: ' 11596', value4: ' 44333' },
        { rpt: '2017-04-30', value1: '34361', value2: ' 37306', value3: ' 17507', value4: ' 72895' },
        { rpt: '2017-05-31', value1: '45300', value2: ' 51447', value3: ' 24277', value4: ' 111425' },
        { rpt: '2017-06-30', value1: '59000', value2: ' 65000', value3: ' 35000', value4: ' 160000' },
        { rpt: '2017-07-31', value1: '56000', value2: ' 59000', value3: ' 47000', value4: ' 204000' },
        { rpt: '2017-08-31', value1: '68000', value2: ' 72000', value3: ' 59000', value4: ' 260000' },
        { rpt: '2017-09-30', value1: '78000', value2: ' 77000', value3: ' 73000', value4: ' 325000' },
        { rpt: '2017-10-31', value1: '91000', value2: ' 92000', value3: ' 88000', value4: ' 402000' },
        { rpt: '2017-11-30', value1: '119000', value2: '122000', value3: '105000', value4: '504000' },
        { rpt: '2017-12-31', value1: '163000', value2: '149000', value3: '125000', value4: '652000' },
        { rpt: '2018-01-31', value1: '38470', value2: ' 40569', value3: ' 22772', value4: ' 26753' },
        { rpt: '2018-02-28', value1: '34000', value2: ' 39000', value3: ' 24414', value4: ' 50253' },
        { rpt: '2018-03-31', value1: '67778', value2: ' 67932', value3: ' 40133', value4: ' 102442' },
        { rpt: '2018-04-30', value1: '81904', value2: ' 81217', value3: ' 57195', value4: ' 168056' },
        { rpt: '2018-05-31', value1: '102000', value2: '96000', value3: ' 77000', value4: ' 251000' },
        { rpt: '2018-06-30', value1: '84000', value2: ' 86000', value3: ' 99000', value4: ' 313000' },
        { rpt: '2018-07-31', value1: '84000', value2: ' 90000', value3: ' 123000', value4: '373000' },
        { rpt: '2018-08-31', value1: '101228', value2: '99379', value3: ' 154000', value4: '446639' },
        { rpt: '2018-09-30', value1: '121224', value2: '127011', value3: '181000', value4: '540547' },
        { rpt: '2018-10-31', value1: '137863', value2: '137863', value3: '208000', value4: '652642' },
        { rpt: '2018-11-30', value1: '169343', value2: '173368', value3: '238000', value4: '790892' },
        { rpt: '2018-12-31', value1: '225000', value2: '214132', value3: '270928', value4: '983740' },
        { rpt: '2019-01-31', value1: '95696', value2: ' 90738', value3: ' 21000', value4: ' 74853' },
        { rpt: '2019-02-28', value1: '52867', value2: ' 59188', value3: ' 34000', value4: ' 114462' },
        { rpt: '2019-03-31', value1: '125631', value2: '128144', value3: '72000', value4: ' 226780' },
        { rpt: '2019-04-30', value1: '96771', value2: ' 101550', value3: '82000', value4: ' 277630' },
        { rpt: '2019-05-31', value1: '104422', value2: '112000', value3: '103000', value4: '360897' },
        { rpt: '2019-06-30', value1: '152062', value2: '133920', value3: '126000', value4: '490152' },
        { rpt: '2019-07-31', value1: '80000', value2: ' 84000', value3: ' 146000', value4: '551000' },
        { rpt: '2019-08-31', value1: '85000', value2: ' 87000', value3: ' 163000', value4: '629000' },
        { rpt: '2019-09-30', value1: '80000', value2: ' 89081', value3: ' 179000', value4: '692000' },
        { rpt: '2019-10-31', value1: '75000', value2: ' 94617', value3: ' 196000', value4: '750000' },
        { rpt: '2019-11-30', value1: '95000', value2: ' 110000', value3: '210000', value4: '831714' },
        { rpt: '2019-12-31', value1: '163448', value2: '149293', value3: '231546', value4: '971678' },
        { rpt: '2020-01-31', value1: '46373', value2: ' 43009', value3: ' 12749', value4: ' 33453' },
        { rpt: '2020-02-29', value1: '12908', value2: ' 9951', value3: '14977', value4: ' 44557' },
        { rpt: '2020-03-31', value1: '52873', value2: ' 49517', value3: ' 29072', value4: ' 84761' },
        { rpt: '2020-04-30', value1: '71950', value2: ' 80424', value3: ' 49498', value4: ' 155255' },
        { rpt: '2020-05-31', value1: '81665', value2: ' 84106', value3: ' 67005', value4: ' 221892' },
        { rpt: '2020-06-30', value1: '103565', value2: '102029', value3: '88173', value4: ' 304201' },
        { rpt: '2020-07-31', value1: '97854', value2: ' 99605', value3: ' 107599', value4: '377963' },
        { rpt: '2020-08-31', value1: '109318', value2: '109318', value3: '128886', value4: '466377' },
        { rpt: '2020-09-30', value1: '137941', value2: '136064', value3: '154441', value4: '578816' },
        { rpt: '2020-10-31', value1: '160185', value2: '166668', value3: '181165', value4: '719358' },
        { rpt: '2020-11-30', value1: '200000', value2: '198000', value3: '213687', value4: '894439' }
      ],
      table: [
        {
          rpt: '2010',
          value: 1569.332
        },
        {
          rpt: '2011',
          value: 6319.332
        },
        {
          rpt: '2012',
          value: 15959.332
        },
        {
          rpt: '2013',
          value: 30569.332
        },
        {
          rpt: '2014',
          value: 59400
        },
        {
          rpt: '2015',
          value: 206119
        },
        {
          rpt: '2016',
          value: 463119
        },
        {
          rpt: '2017',
          value: 931119
        },
        {
          rpt: '2018',
          value: 1746989
        },
        {
          rpt: '2019',
          value: 2581186
        }
      ]
    }
  } else if (data.code === 'FA0040010709') {
    response = {
      names: [
        {
          name: '公共类充电桩数量_全国',
          value: 'value1',
          unit: '台',
          rate: '月'
        }
      ],
      chart: [
        { rpt: '2016-02-29', value1: '60023' },
        { rpt: '2016-03-31', value1: '65109' },
        { rpt: '2016-04-30', value1: '72296' },
        { rpt: '2016-05-31', value1: '77634' },
        { rpt: '2016-06-30', value1: '81780' },
        { rpt: '2016-07-31', value1: '85537' },
        { rpt: '2016-08-31', value1: '92500' },
        { rpt: '2016-09-30', value1: '102375' },
        { rpt: '2016-10-31', value1: '107098' },
        { rpt: '2016-11-30', value1: '115792' },
        { rpt: '2016-12-31', value1: '141254' },
        { rpt: '2017-01-31', value1: '148236' },
        { rpt: '2017-02-28', value1: '151062' },
        { rpt: '2017-03-31', value1: '156192' },
        { rpt: '2017-04-30', value1: '161193' },
        { rpt: '2017-05-31', value1: '166946' },
        { rpt: '2017-06-30', value1: '171609' },
        { rpt: '2017-07-31', value1: '180684' },
        { rpt: '2017-08-31', value1: '185990' },
        { rpt: '2017-09-30', value1: '190559' },
        { rpt: '2017-10-31', value1: '194594' },
        { rpt: '2017-11-30', value1: '204729' },
        { rpt: '2017-12-31', value1: '213903' },
        { rpt: '2018-01-31', value1: '225071' },
        { rpt: '2018-02-28', value1: '244023' },
        { rpt: '2018-03-31', value1: '253074' },
        { rpt: '2018-04-30', value1: '262058' },
        { rpt: '2018-05-31', value1: '266231' },
        { rpt: '2018-06-30', value1: '271751' },
        { rpt: '2018-07-31', value1: '274777' },
        { rpt: '2018-08-31', value1: '278736' },
        { rpt: '2018-09-30', value1: '284652' },
        { rpt: '2018-10-31', value1: '284638' },
        { rpt: '2018-11-30', value1: '289724' },
        { rpt: '2018-12-31', value1: '299752' },
        { rpt: '2019-01-31', value1: '341765' },
        { rpt: '2019-02-28', value1: '347624' },
        { rpt: '2019-03-31', value1: '383571' },
        { rpt: '2019-04-30', value1: '391035' },
        { rpt: '2019-05-31', value1: '400693' },
        { rpt: '2019-06-30', value1: '411619' },
        { rpt: '2019-07-31', value1: '446640' },
        { rpt: '2019-08-31', value1: '455808' },
        { rpt: '2019-09-30', value1: '466101' },
        { rpt: '2019-10-31', value1: '478132' },
        { rpt: '2019-11-30', value1: '495502' },
        { rpt: '2019-12-31', value1: '516396' },
        { rpt: '2020-01-31', value1: '531118' },
        { rpt: '2020-02-29', value1: '531313' },
        { rpt: '2020-03-31', value1: '541672' },
        { rpt: '2020-04-30', value1: '546764' },
        { rpt: '2020-05-31', value1: '550588' },
        { rpt: '2020-06-30', value1: '558000' },
        { rpt: '2020-07-31', value1: '566000' },
        { rpt: '2020-08-31', value1: '592000' },
        { rpt: '2020-09-30', value1: '606000' },
        { rpt: '2020-10-31', value1: '667000' },
        { rpt: '2020-11-30', value1: '695000' }
      ],
      table: [
        {
          rpt: '2010',
          value: null
        },
        {
          rpt: '2011',
          value: null
        },
        {
          rpt: '2012',
          value: null
        },
        {
          rpt: '2013',
          value: null
        },
        {
          rpt: '2014',
          value: null
        },
        {
          rpt: '2015',
          value: null
        },
        {
          rpt: '2016',
          value: null
        },
        {
          rpt: '2017',
          value: null
        },
        {
          rpt: '2018',
          value: null
        },
        {
          rpt: '2019',
          value: null
        }
      ]
    }
  } else if (data.code === 'EC001001130201') {
    response = {
      names: [
        {
          name: '动力电池装机量_环比',
          value: 'value1',
          unit: '%',
          rate: '月'
        },
        {
          name: '动力电池装机量_当月同比',
          value: 'value2',
          unit: '%',
          rate: '月'
        },
        {
          name: '动力电池装机量_当月值',
          value: 'value3',
          unit: '百万千瓦时',
          rate: '月'
        },
        {
          name: '动力电池装机量_累计值',
          value: 'value4',
          unit: '百万千瓦时',
          rate: '月'
        }
      ],
      chart: [
        { rpt: '2017-01-31', value1: null, value2: null, value3: '0.11', value4: '0.11' },
        { rpt: '2017-02-28', value1: '109.09', value2: null, value3: '0.23', value4: '0.34' },
        { rpt: '2017-03-31', value1: '308.7', value2: null, value3: '0.94', value4: '1.28' },
        { rpt: '2017-04-30', value1: '-1.06', value2: null, value3: '0.93', value4: '2.21' },
        { rpt: '2017-05-31', value1: '54.84', value2: null, value3: '1.44', value4: '3.65' },
        { rpt: '2017-06-30', value1: '50', value2: null, value3: '2.16', value4: '5.81' },
        { rpt: '2017-07-31', value1: '19.91', value2: null, value3: '2.59', value4: '8.4' },
        { rpt: '2017-08-31', value1: '11.97', value2: null, value3: '2.9', value4: '11.3' },
        { rpt: '2017-09-30', value1: '18.62', value2: null, value3: '3.44', value4: '14.74' },
        { rpt: '2017-10-31', value1: '-14.83', value2: null, value3: '2.93', value4: '17.67' },
        { rpt: '2017-11-30', value1: '138.23', value2: null, value3: '6.98', value4: '24.65' },
        { rpt: '2017-12-31', value1: '68.91', value2: null, value3: '11.79', value4: '36.44' },
        { rpt: '2018-01-31', value1: '-88.89', value2: '1090.91', value3: '1.31', value4: '1.31' },
        { rpt: '2018-02-28', value1: '-21.37', value2: '347.83', value3: '1.03', value4: '2.34' },
        { rpt: '2018-03-31', value1: '101.94', value2: '121.28', value3: '2.08', value4: '4.42' },
        { rpt: '2018-04-30', value1: '80.77', value2: '304.3', value3: '3.76', value4: '8.18' },
        { rpt: '2018-05-31', value1: '19.68', value2: '212.5', value3: '4.5', value4: '12.68' },
        { rpt: '2018-06-30', value1: '-36.22', value2: '32.87', value3: '2.87', value4: '15.55' },
        { rpt: '2018-07-31', value1: '16.38', value2: '28.96', value3: '3.34', value4: '18.89' },
        { rpt: '2018-08-31', value1: '24.85', value2: '43.79', value3: '4.17', value4: '23.06' },
        { rpt: '2018-09-30', value1: '37.17', value2: '66.28', value3: '5.72', value4: '28.78' },
        { rpt: '2018-10-31', value1: '3.67', value2: '102.39', value3: '5.93', value4: '34.71' },
        { rpt: '2018-11-30', value1: '50.25', value2: '27.65', value3: '8.91', value4: '43.62' },
        { rpt: '2018-12-31', value1: '49.94', value2: '13.32', value3: '13.36', value4: '56.98' },
        { rpt: '2019-01-31', value1: '-62.72', value2: '280.15', value3: '4.98', value4: '4.98' },
        { rpt: '2019-02-28', value1: '-55.02', value2: '117.48', value3: '2.24', value4: '7.22' },
        { rpt: '2019-03-31', value1: '127.23', value2: '144.71', value3: '5.09', value4: '12.31' },
        { rpt: '2019-04-30', value1: '6.29', value2: '43.88', value3: '5.41', value4: '17.72' },
        { rpt: '2019-05-31', value1: '4.99', value2: '26.22', value3: '5.68', value4: '23.4' },
        { rpt: '2019-06-30', value1: '16.37', value2: '130.31', value3: '6.61', value4: '30.01' },
        { rpt: '2019-07-31', value1: '-28.9', value2: '40.72', value3: '4.7', value4: '34.71' },
        { rpt: '2019-08-31', value1: '-22.55', value2: '-12.71', value3: '3.64', value4: '38.35' },
        { rpt: '2019-09-30', value1: '8.52', value2: '-30.94', value3: '3.95', value4: '42.3' },
        { rpt: '2019-10-31', value1: '3.04', value2: '-31.37', value3: '4.07', value4: '46.37' },
        { rpt: '2019-11-30', value1: '54.55', value2: '-29.41', value3: '6.29', value4: '52.66' },
        { rpt: '2019-12-31', value1: '54.37', value2: '-27.32', value3: '9.71', value4: '62.37' },
        { rpt: '2020-01-31', value1: '-76.11', value2: '-53.41', value3: '2.32', value4: '2.32' },
        { rpt: '2020-02-29', value1: '-74.14', value2: '-73.21', value3: '0.6', value4: '2.92' },
        { rpt: '2020-03-31', value1: '360', value2: '-45.78', value3: '2.76', value4: '5.68' },
        { rpt: '2020-04-30', value1: '30.43', value2: '-33.46', value3: '3.6', value4: '9.28' },
        { rpt: '2020-05-31', value1: '-2.5', value2: '-38.2', value3: '3.51', value4: '12.79' },
        { rpt: '2020-06-30', value1: '34.19', value2: '-28.74', value3: '4.71', value4: '17.5' },
        { rpt: '2020-07-31', value1: '5.94', value2: '6.17', value3: '4.99', value4: '22.49' },
        { rpt: '2020-08-31', value1: '2.4', value2: '40.38', value3: '5.11', value4: '27.6' },
        { rpt: '2020-09-30', value1: '28.38', value2: '66.08', value3: '6.56', value4: '34.16' }
      ],
      table: [
        {
          rpt: '2010',
          value: null
        },
        {
          rpt: '2011',
          value: null
        },
        {
          rpt: '2012',
          value: null
        },
        {
          rpt: '2013',
          value: null
        },
        {
          rpt: '2014',
          value: null
        },
        {
          rpt: '2015',
          value: null
        },
        {
          rpt: '2016',
          value: null
        },
        {
          rpt: '2017',
          value: null
        },
        {
          rpt: '2018',
          value: null
        },
        {
          rpt: '2019',
          value: null
        }
      ]
    }
  }

  return response
}

// 行业前景
export const prospectData = async (data) => {
  await sleep(300)
  return {
    cards: [
      {
        value: 7,
        change: '5',
        type: 'down',
        unit: '家'
      },
      {
        value: 60987917670.46,
        change: '6.79%',
        type: 'down',
        unit: '元'
      },
      {
        value: '12.71%',
        change: '1.35%',
        type: 'up'
      },
      {
        value: 154833363490.24,
        change: '11.29%',
        type: 'down',
        unit: '元'
      }
    ],
    growth: [
      { rpt: '2015', value1: 861997535.51, value2: 235.63, value3: 10027309908.49, value4: 3221.17 },
      { rpt: '2016', value1: 2758875165.64, value2: 220.06, value3: 19456217844.29, value4: 94.03 },
      { rpt: '2017', value1: 22509689607.26, value2: 715.9, value3: 188501810589.16, value4: 868.85 },
      { rpt: '2018', value1: 26000728949.67, value2: 15.51, value3: 174546211190.25, value4: -7.4 },
      { rpt: '2019', value1: 18652869079.42, value2: -28.26, value3: 154833363490.24, value4: -11.29 }
    ],
    profit: [
      { rpt: '2015', value1: 17.11, value2: 5.55 },
      { rpt: '2016', value1: 13.37, value2: 7.18 },
      { rpt: '2017', value1: 11.85, value2: 2.56 },
      { rpt: '2018', value1: 14.06, value2: -9.17 },
      { rpt: '2019', value1: 12.71, value2: -22.6 }
    ],
    prospect: [
      { rpt: '2015', value1: 2, value2: 2, value3: 0, value4: 3221 },
      { rpt: '2016', value1: 3, value2: 3, value3: 0, value4: 4483 },
      { rpt: '2017', value1: 4, value2: 10, value3: 1, value4: 5290 },
      { rpt: '2018', value1: 4, value2: 8, value3: 1, value4: 8380 },
      { rpt: '2019', value1: 2, value2: 5, value3: 1, value4: 3662 }
    ]
  }
}

// 政策导向
export const policyList = async (data) => {
  await sleep(300)
  let reponse = {
    result: [
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广使用',
            content: '推广使用新能源汽车'
          }
        ],
        rpt: '2018/09/25',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府关于印发贵州省打赢蓝天保卫战三年行动计划的通知（黔府发〔2018〕26号）',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201809/t20180925_1645105.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广使用',
            content: '推广使用新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广使用',
            content: '公交、城市出租、环卫等行业和政府机关推广使用纯电动等新能源汽车'
          }
        ],
        rpt: '2014/05/20',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府关于印发贵州省大气污染防治行动计划实施方案的通知（黔府发〔2014〕13号）',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201709/t20170925_821992.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content:
              '加快遵义轻卡及微型面包车等低排量汽车生产基地、毕节力帆骏马载货汽车和农用车生产基地和贵阳客车、电动汽车、新能源汽车及其他专用车生产基地等三个汽车基地和安顺轿车及特种车基地建设'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content:
              '加快遵义轻卡及微型面包车等低排量汽车生产基地、毕节力帆骏马载货汽车和农用车生产基地和贵阳客车、电动汽车、新能源汽车及其他专用车生产基地等三个汽车基地和安顺轿车及特种车基地建设'
          },
          {
            industryName: '新能源汽车配套',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育以汽车动力电池为代表的新能源汽车配套产业链'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content: '打造国家新能源汽车产业基地'
          }
        ],
        rpt: '2010/11/11',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府关于印发贵州省工业十大产业振兴规划的通知（黔府发〔2010〕16号）',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201709/t20170925_821857.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|引导',
            content:
              '引导民营经济投资发展新材料、先进制造、电子及新一代信息技术、生物技术、节能环保、新能源汽车等新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发|支持',
            content:
              '新能源汽车：支持新型锂电池功能材料与动力电池、磷酸铁锂锂离子电池、新能源汽车驱动电机及动力总成系统等产品研发及产业化'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育以汽车动力电池为代表的新能源汽车产业链'
          },
          {
            industryName: '民营新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完成',
            content: '民营新能源汽车重点项目累计完成投资3.5亿元'
          }
        ],
        rpt: '2011/05/29',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府关于印发贵州省民营经济倍增计划的通知（黔府发〔2011〕19号）',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201709/t20170925_821886.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|加快',
            content: '加快发展北斗卫星导航、新能源汽车、无人机等产业'
          }
        ],
        rpt: '2017/09/06',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府关于印发贵州省深化制造业与互联网融合发展实施意见的通知(黔府发〔2017〕23号)',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201709/t20170925_822081.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content: '大力发展航空航天、智能终端、精密仪器、高端数控机床、新能源汽车等制造业'
          }
        ],
        rpt: '2016/06/01',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府关于支持“1+7”开放创新平台加快发展的意见（黔府发〔2016〕16号）',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201709/t20170925_822050.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车配套',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '大力培育动力电池、电机、电控等新能源汽车配套产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广使用',
            content: '推广使用纯电动、插电式混合动力等新能源汽车'
          }
        ],
        rpt: '2019/02/01',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府关于支持黔南自治州加快推进绿色发展建设生态之州的意见（黔府发〔2019〕3号）',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201902/t20190201_2234707.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '发展新材料、电子及新一代信息技术、生物技术、新能源汽车等新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '建设光伏产品研发及新能源汽车产业基地'
          }
        ],
        rpt: '2012/02/01',
        region: '贵州省',
        org: '贵州省人民政府',
        title: '省人民政府印发国务院关于进一步促进贵州经济社会又好又快发展的若干意见的通知（黔府发〔２０１２〕３号）',
        url: 'http://www.guizhou.gov.cn/zwgk/zcfg/szfwj_8191/qff_8193/201709/t20170925_821913.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content:
              '重点引导信息技术、高端装备、新材料、生物、新能源、新能源汽车、节能环保、数字创意等战略性新兴产业和农产品“走出去”拓展市场'
          }
        ],
        rpt: '2017/10/31',
        region: '四川省',
        org: '四川省商务厅',
        title: '省商务厅关于征集2018年“万企出国门”活动计划的通知',
        url: 'http://swt.sc.gov.cn/sccom/ghjh/2017/10/31/82ea14611b8145c49c097a13c71d9c8c.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车购置',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实',
            content: '7.落实新能源汽车购置补贴和免征车辆购置税优惠政策'
          }
        ],
        rpt: 'NaN//',
        region: '贵州省',
        org: '贵州盛发展和改革委员会',
        title: '省政府办公厅印发《多彩贵州促消费百日专项行动方案》',
        url: 'http://fgw.guizhou.gov.cn/zwgk/xxgkml/zcfg/zcwj/202004/t20200420_62138836.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '实施新能源汽车推广计划'
          }
        ],
        rpt: '2016/05/11',
        region: '四川省',
        org: '四川省交通运输厅',
        title: '十三五期间交通运输工作总体思路',
        url: 'http://jtt.sc.gov.cn/jtt/c101533/2016/5/11/9d280cf15df2410893dcf0ebf15b20ca.shtml'
      },
      {
        contentList: [
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|加快',
            content:
              '加快发展新一代信息技术、航空航天、先进能源电力、智能制造、先进轨道交通、节能环保、油气开采及加工、节能与新能源汽车、新材料和生物医药等高新技术领域'
          },
          {
            industryName: '电动汽车智能化',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content:
              '开展数字化整车设计及优化、动力总成、动力电池与系统、高性能整车级电控系统、新型驱动电机、电动汽车驱动及传动系统、电动汽车智能化及电动辅助系统等核心关键技术攻关与产品研发'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '目标：形成新能源汽车及智能网联汽车产业的研发体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content: '新能源汽车产业总产值力争突破1000亿元'
          },
          {
            industryName: '新能源汽车及智能网联汽车整车制造和关键零部',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建成',
            content: '建成我国重要的新能源汽车及智能网联汽车整车制造和关键零部制造基地'
          }
        ],
        rpt: '2018/11/08',
        region: '四川省',
        org: '四川省科学技术厅',
        title: '四川省“十三五”科技创新规划',
        url: 'http://kjt.sc.gov.cn/kjt/jhgh/2018/11/8/1bde87f220944f4fab6b9fdadc7a00f0.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|研发',
            content: '（四）推进新能源汽车研发与应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|支持',
            content: '抓住国家支持发展新能源汽车的机遇'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '积极推动|加大|研发',
            content: '积极推动省内科研院所和企业加大新能源汽车的研发与应用'
          },
          {
            industryName: '电动汽车整车开发',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|培育',
            content: '重点培育发展电动汽车整车开发?动力电池?驱动电机?电子控制系统?充（换）电系统?电动汽车应用产业链'
          },
          {
            industryName: '电动汽车应用',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|培育',
            content: '重点培育发展电动汽车整车开发?动力电池?驱动电机?电子控制系统?充（换）电系统?电动汽车应用产业链'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content: '打造形成纯电动汽车、混合动力汽车、燃气汽车3条新能源汽车产品链'
          },
          {
            industryName: '新能源汽车产',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content: '打造形成纯电动汽车、混合动力汽车、燃气汽车3条新能源汽车产品链'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|积极开展',
            content: '积极开展新能源汽车推广示范运用工作'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '（五）建立新能源汽车产业链联盟'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '组织省内高校、科研机构和企业建立全省新能源汽车产业链联盟'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '推动新能源汽车产业标准化、规模化发展'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '重点建立电动汽车产业链联盟'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '支持重点企业组建电动汽车企业技术中心或工程技术中心'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '形成电动汽车产业发展技术创新平台'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '（六）实施电动汽车推广应用示范工程'
          },
          {
            industryName: '节能和新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|支持',
            content: '支持成都市争取成为国家级节能和新能源汽车示范推广试点城市'
          }
        ],
        rpt: '2010/07/20',
        region: '四川省',
        org: '四川省经济和信息化厅',
        title: '四川省工业7+3产业2010年度工作计划',
        url: 'https://jxt.sc.gov.cn/scjxt/jxtz/2010/7/20/e66839bffff943edaf781a3df6ac95ef.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进港澳台创业交流、军转民技术转移以及新能源汽车、第三代半导体、创客、人工智能等专业领域创新创业'
          }
        ],
        rpt: '2017/04/21',
        region: '四川省',
        org: '四川省科学技术厅',
        title: '四川省科学技术厅关于开展第六届中国创新创业大赛（四川赛区）有关工作的通知',
        url: 'http://kjt.sc.gov.cn/kjt/gfwj/2017/4/21/cc601ad919dd4f778aa5c74d9aed2a1e.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '积极支持省内企业生产的新能源汽车进入交通运输部道路运输车辆达标车型公告'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|加大',
            content: '加大新能源汽车推广应用力度'
          }
        ],
        rpt: 'NaN//',
        region: '四川省',
        org: '四川省人民政府',
        title: '四川省人民政府',
        url: 'http://www.sc.gov.cn/10462/c103044/2020/9/30/5a37938af489498b861716f17e236964.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车车辆',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实',
            content: '落实国家新能源汽车车辆购置税优惠政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '在公共服务领域、党政机关和企事业单位推广应用新能源汽车'
          }
        ],
        rpt: 'NaN//',
        region: '四川省',
        org: '四川省人民政府',
        title: '四川省人民政府办公厅关于印发四川省完善促进消费体制机制实施方案的通知',
        url: 'http://www.sc.gov.cn/10462/c103042/2019/7/4/80bf76bf6f544d83949300801e67f250.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强航空与燃机、信息安全、新能源汽车、轨道交通、生物医学、石墨烯、人工智能等领域新职业新技能培训'
          }
        ],
        rpt: 'NaN//',
        region: '四川省',
        org: '四川省人民政府',
        title: '四川省人民政府办公厅关于印发四川省职业技能提升行动实施方案（2019—2021年）的通知',
        url: 'http://www.sc.gov.cn/10462/c103042/2019/8/27/1c447a2c2614481fbf9151789c29a5cc.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '重点培育新能源汽车、节能环保、生物医药、轨道交通、动力及储能电池等具有核心竞争力的新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content:
              '培育国内领先的集成电路、新型显示、信息安全、航空航天、清洁发电设备、新能源汽车、节能环保、轨道交通、生物医药、绿色食品等产业集群'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '建设新能源汽车基地、油气化工基地、丝纺服装设计研发生产基地'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '重点培育新能源汽车、节能环保、生物医药、轨道交通、动力及储能电池等具有核心竞争力的新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content:
              '培育国内领先的集成电路、新型显示、信息安全、航空航天、清洁发电设备、新能源汽车、节能环保、轨道交通、生物医药、绿色食品等产业集群'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '建设新能源汽车基地、油气化工基地、丝纺服装设计研发生产基地'
          }
        ],
        rpt: 'NaN//',
        region: '四川省',
        org: '四川省人民政府',
        title: '四川省人民政府办公厅关于优化区域产业布局的指导意见',
        url: 'http://www.sc.gov.cn/10462/c103042/2018/12/15/c1ec984ee8464d1ab3b10449b8878180.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动新能源汽车普及应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动新能源汽车普及应用'
          }
        ],
        rpt: 'NaN//',
        region: '四川省',
        org: '四川省人民政府',
        title: '四川省人民政府关于推动城市基础设施改造加强城市生态环境建设的指导意见',
        url: 'http://www.sc.gov.cn/10462/c103042/2020/1/22/b649bd3b07144692b994a3b91a630521.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展智能终端、人工智能、智能汽车、新能源汽车等前沿科技产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content:
              '大力发展大数据云计算、智能终端、机器人、虚拟现实、人工智能、3D打印、新材料、生物医药、新能源汽车、光电技术等十大前沿科技产业集群'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content: '大力发展智能装备、节能环保、新一代信息、新材料、生物医药、新能源汽车等战略性新兴产业集群'
          }
        ],
        rpt: '2017/05/25',
        region: '重庆市',
        org: '重庆市卫生健康委员会',
        title: '印发重庆临空经济示范区建设总体方案的通知',
        url: 'http://wsjkw.cq.gov.cn/zwgk_242/fdzdgknr/zcwj/qtwj/201705/t20170525_2933722.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强|研发',
            content: '加强清洁能源、新能源汽车、信息网络、遥感与导航、生物等领域的部署和研发'
          }
        ],
        rpt: '2015/03/31',
        region: '四川省',
        org: '四川省科学技术厅',
        title: '中共科学技术部党组关于落实创新驱动发展战略 加快科技改革发展的意见',
        url: 'http://kjt.sc.gov.cn/kjt/gfwj/2015/3/31/c9667eb5ac6a42c49b3e7eaad689e286.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '着力发展新能源汽车、先进核电、分布式能源、智能电网、动力及储能电池、节能环保产品等'
          }
        ],
        rpt: '2018/11/20',
        region: '四川省',
        org: '四川省经济和信息化厅',
        title: '中共四川省委 四川省人民政府关于加快构建“5+1”现代产业体系推动工业高质量发展的意见',
        url: 'https://jxt.sc.gov.cn/scjxt/xzgfxwj/2018/11/20/abb17349181e4bd59e94ad373a98b583.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|建立',
            content: '推进四川新能源汽车产业技术创新联盟与匈牙利汽车联盟建立战略合作关系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|建立',
            content: '推进四川新能源汽车产业技术创新联盟与匈牙利汽车联盟建立战略合作关系'
          }
        ],
        rpt: '2015/12/02',
        region: '四川省',
        org: '四川省科学技术厅',
        title: '中共四川省委关于全面创新改革驱动转型发展的决定',
        url: 'http://kjt.sc.gov.cn/kjt/gfwj/2015/12/2/0780bdc77fe44c10b89c9c3b7d0d0059.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '积极有序发展新一代信息技术、节能环保、新能源、生物、高端装备制造、新材料、新能源汽车等产业'
          }
        ],
        rpt: '2010/11/16',
        region: '陕西省',
        org: '陕西省发展和改革委员会',
        title: '中共中央关于制定国民经济和社会发展第十二个五年规划的建议',
        url: 'http://sndrc.shaanxi.gov.cn/zcfg/10053213YvyIz.htm'
      },
      {
        contentList: [
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|促进',
            content:
              '促进新一代信息通信技术、高档数控机床和机器人、航空航天装备、海洋工程装备及高技术船舶、先进轨道交通装备、节能与新能源汽车、电力装备、农机装备、新材料、生物医药及高性能医疗器械等产业发展壮大'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '实施新能源汽车推广计划'
          }
        ],
        rpt: '2015/11/05',
        region: '重庆市',
        org: '重庆市发展和改革委员会',
        title: '中共中央关于制定国民经济和社会发展第十三个五年规划的建议',
        url: 'http://fzggw.cq.gov.cn/zwgk_167/fdzdgknr/fzgh/201511/t20151105_5186658.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content:
              '加快壮大新一代信息技术、生物技术、新能源、新材料、高端装备、新能源汽车、绿色环保以及航空航天、海洋装备等产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content:
              '加快壮大新一代信息技术、生物技术、新能源、新材料、高端装备、新能源汽车、绿色环保以及航空航天、海洋装备等产业'
          }
        ],
        rpt: '2020/11/03',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议',
        url: 'http://www.gov.cn/zhengce/2020-11/03/content_5556991.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|建立|完善',
            content: '建立完善节能家电、高效照明产品、节水器具、绿色建材等绿色产品和新能源汽车推广机制'
          },
          {
            industryName: '节能新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '有条件的区县可对消费者购置节能型家电产品、节能新能源汽车、节水器具等给予适当支持'
          }
        ],
        rpt: '2020/12/11',
        region: '重庆市',
        org: '重庆市发展和改革委员会',
        title: '重庆市发展和改革委员会 重庆市司法局印发《关于加快建立绿色生产和消费法规政策体系的实施意见》的通知',
        url: 'http://fzggw.cq.gov.cn/zwgk_167/fdzdgknr/zcwj/qtwj/202012/t20201211_8602045.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|促进',
            content: '促进电动汽车推广应用'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完成',
            content: '自用充电基础设施的验收可由用户或其委托的电动汽车企业、施工单位会同小区物业完成'
          }
        ],
        rpt: '2017/12/13',
        region: '重庆市',
        org: '重庆市发展和改革委员会',
        title: '重庆市发展和改革委员会重庆市能源局关于印发重庆市电动汽车充电基础设施建设运营管理办法的通知',
        url: 'http://fzggw.cq.gov.cn/zwgk_167/fdzdgknr/zcwj/xzgfxwj/202004/t20200402_6930920.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建成|研发',
            content: '建成国内主要的电动汽车研发及制造基地'
          }
        ],
        rpt: '2006/10/31',
        region: '重庆市',
        org: '重庆市发展和改革委员会',
        title: '重庆市国民经济和社会发展第十一个五年规划科学和技术发展重点专项规划',
        url: 'http://fzggw.cq.gov.cn/zwgk_167/fdzdgknr/fzgh/200610/t20061031_5186696.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|推广',
            content:
              '（四）落实新能源汽车推广应用、电力电煤保障、智博会、软件与信息服务业、智慧园区建设、重点产业政策兑现、产业氛围营造、产教融合以及降本增效等重点项目'
          }
        ],
        rpt: '2020/03/27',
        region: '重庆市',
        org: '重庆市经济和信息化委员会',
        title: '重庆市经济和信息化委员会 重庆市财政局关于印发重庆市工业和信息化专项资金管理办法的通知',
        url: 'https://jjxxw.cq.gov.cn/zwgk_213/fdzdgknr/zcwj/gfxwj/202003/t20200327_6262921.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推进',
            content: '统筹推进全市新能源汽车和智能网联汽车发展'
          }
        ],
        rpt: '2020/09/03',
        region: '重庆市',
        org: '重庆市经济和信息化委员会',
        title:
          '重庆市经济和信息化委员会 重庆市公安局 重庆市城市管理局 重庆市交通局​关于印发《重庆市自动驾驶道路测试管理办法（试行）》的通知',
        url: 'https://jjxxw.cq.gov.cn/zwgk_213/fdzdgknr/zcwj/gfxwj/202009/t20200903_7844971.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '新能源汽车生产企业应在市内建立废旧动力蓄电池回收网点并提供网点基本信息'
          },
          {
            industryName: '新能源和智能网联汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '对通过形式审查的备案材料自受理之日起5个工作日内转交市新能源和智能网联汽车产业发展联席会议办公室（以下简称“市新能源和智能网联汽车办公室”）审核'
          }
        ],
        rpt: '2020/08/20',
        region: '重庆市',
        org: '重庆市经济和信息化委员会',
        title: '重庆市经济和信息化委员会关于《重庆市新能源汽车推广应用有关备案管理办法（暂行）》的补充通知',
        url: 'https://jjxxw.cq.gov.cn/zwgk_213/fdzdgknr/zcwj/qtwj/202008/t20200820_7800706.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车及智能网联汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '创新中心重点围绕新能源汽车及智能网联汽车、轻量化材料及成型技术与装备、集成电路、印刷及柔性显示、物联网、高端交通装备、高档数控机床、智能装备、能源及环保装备、现代航空装备、智能可穿戴设备、虚拟现实、化工新材料、生物医药等重要创新领域和企业绿色化、智能化、服务化、高端化转型发展的技术领域进行布局'
          }
        ],
        rpt: '2018/01/05',
        region: '重庆市',
        org: '重庆市经济和信息化委员会',
        title: '重庆市经济和信息化委员会关于印发重庆市制造业创新中心建设工程实施方案的通知',
        url: 'https://jjxxw.cq.gov.cn/zwgk_213/fdzdgknr/zcwj/gfxwj/202003/t20200321_5927591.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|加快',
            content:
              '七、对加快新一代信息技术产业、高端装备制造产业、新材料产业、生物产业、新能源汽车产业、绿色环保产业、数字创意产业等战略性新兴产业集群化发展'
          }
        ],
        rpt: '2020/02/19',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于对真抓实干成效明显地方进一步加大激励支持力度的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/qtgw/202002/t20200219_5273681.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|加快',
            content: '加快新能源汽车推广应用和试点示范'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '鼓励金融机构对居民购买新能源汽车、绿色智能家电、智能家居、节水器具等绿色智能产品提供信贷支持'
          }
        ],
        rpt: '2020/01/10',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于加快发展流通促进商业消费的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4754427.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '——新能源汽车快速发展'
          },
          {
            industryName: '新能源和智能网联汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '成为全国重要的新能源和智能网联汽车研发制造基地'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|加快',
            content: '加快新能源汽车发展'
          },
          {
            industryName: '新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动新能源汽车产品开发与产业化'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展纯电动汽车、插电式混合动力汽车'
          },
          {
            industryName: '中高端新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '重点支持企业开发续航里程长、充电时间短、安全性能高的中高端新能源汽车产品'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善新能源汽车产业链'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高公共服务领域新能源汽车使用比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '重点提升共享用车中新能源汽车使用数量'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|完善',
            content: '完善新能源汽车推广应用扶持政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|建立|促进',
            content: '建立促进新能源汽车发展的长效机制'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推广|支持|加快',
            content: '制定加快新能源和智能网联汽车产业发展、新能源汽车推广应用等支持政策'
          }
        ],
        rpt: '2018/12/21',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于加快汽车产业转型升级的指导意见',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4754318.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车及配套设施',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '鼓励在公务用车等领域通过融资租赁发展新能源汽车及配套设施'
          }
        ],
        rpt: '2016/05/13',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于加快融资租赁业发展的实施意见',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4753659.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|加快',
            content: '加快新能源汽车推广应用的实施意见'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|发展',
            content: '贯彻落实国家发展新能源汽车产业的战略部署'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|加快',
            content: '加快全市新能源汽车的推广应用步伐'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|促进',
            content: '促进新能源汽车产业健康快速发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '研究制定新能源汽车推广应用规划'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|发展',
            content: '健全市新能源汽车推广应用和产业发展联席会议制度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|推进',
            content: '统筹推进全市新能源汽车推广应用工作'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|加快',
            content: '着力加快公共服务领域新能源汽车推广应用步伐'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '全市累计推广应用新能源汽车10万辆'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐年提高新能源汽车应用比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content: '引导主城区公交车、出租车、网约车、物流车、旅游巴士等公共服务领域车辆主动使用新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进',
            content: '推进党政机关和公共机构使用新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|推广',
            content: '落实新能源汽车推广应用优惠政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '主城区是全市新能源汽车推广应用的重点区域'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '切实做好新能源汽车推广应用工作'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '不断提高现代信息技术在新能源汽车商业运营模式创新中的应用水平'
          },
          {
            industryName: '新能源汽车技术研发和运营服务',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '鼓励互联网企业参与新能源汽车技术研发和运营服务'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善新能源汽车和充电桩的产品质量保障体系'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立|支持',
            content: '支持建立行业性新能源汽车技术支撑平台'
          },
          {
            industryName: '新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立新能源汽车产品抽检制度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '构建',
            content: '（十六）构建新能源汽车安全保障体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强新能源汽车安全监管'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '有关区县（自治县）人民政府要加强对所在地新能源汽车制造、运营和充电设施等方面的安全监管'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '大力宣传国家关于发展新能源汽车的相关政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '提高全社会对新能源汽车的认知度和接受度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育新能源汽车消费意识'
          }
        ],
        rpt: '2016/12/16',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于加快新能源汽车推广应用的实施意见',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4753783.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车及智能汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content:
              '引进培育集成电路、新型显示、机器人及智能装备、新材料、节能环保、生物医药、新能源汽车及智能汽车、高端交通装备等新兴产业集群'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展机器人及智能装备、高端交通装备、集成电路、新型显示、生物医药、新能源汽车及智能汽车等产业'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content: '重点围绕纯电动汽车、插电式混合动力汽车所需电池、电机、电控等核心技术突破'
          },
          {
            industryName: '新能源及智能汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content: '打造国内领先的新能源及智能汽车产业基地'
          }
        ],
        rpt: '2018/03/27',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于印发中国（重庆）自由贸易试验区产业发展规划（2018―2020）的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4754245.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '健全完善新能源汽车和智能汽车标准体系'
          }
        ],
        rpt: '2016/04/29',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于印发重庆市标准化体系建设发展规划（2016—2020年）的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4753424.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|完善',
            content: '进一步完善公共机构推广应用新能源汽车实施方案'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|推广',
            content: '积极落实新能源汽车推广任务'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '“十三五”期间逐步提高配备更新公务用车中新能源汽车的比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '实现|广泛应用',
            content: '实现新能源汽车广泛应用'
          }
        ],
        rpt: '2016/12/19',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于印发重庆市公共机构节约能源资源“十三五”规划的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/qtgw/202001/t20200114_4621171.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '构建',
            content: '按照国家标准统一构建全市电动汽车充换电标准体系'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '为电动汽车提供充电接口互操作性检测及服务平台间数据交换等技术支持'
          }
        ],
        rpt: '2015/12/30',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于印发重庆市加快电动汽车充电基础设施建设实施方案的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4753285.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广使用|加快',
            content: '在快递物流领域加快推广使用新能源汽车和满足更高排放标准的燃油汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高新能源汽车使用比例'
          }
        ],
        rpt: '2018/05/04',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于印发重庆市推进电子商务与快递物流协同发展实施方案的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4754223.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|支持',
            content: '关于印发重庆市支持新能源汽车推广应用激励措施(2020年度)的通知'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|支持',
            content: '重庆市支持新能源汽车推广应用激励措施(2020年度)'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快推动|推广',
            content: '加快推动新能源汽车推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|加快',
            content: '加快新能源汽车推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|促进',
            content: '促进我市新能源汽车产业高质量发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '鼓励市内车企推广应用新能源汽车3.64万辆'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|加强',
            content: '进一步加强新能源汽车推广应用工作的组织领导'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|支持',
            content: '认真贯彻落实国家和我市新能源汽车相关支持政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '重点支持充电基础设施建设和运营、新能源汽车使用和运营等环节'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|支持',
            content: '鼓励各区县配套安排专项资金支持新能源汽车推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '提升市民对新能源汽车的驾乘体验和认知'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '营造新能源汽车推广应用浓厚氛围'
          }
        ],
        rpt: '2020/09/07',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于印发重庆市支持新能源汽车推广应用激励措施(2020年度)的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202009/t20200907_7858297.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|支持',
            content: '印发重庆市支持新能源汽车推广应用政策措施（2018—2022年）的通知'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|支持',
            content: '重庆市支持新能源汽车推广应用政策措施（2018—2022年）'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高|加快',
            content: '11．主城区新增和更换公交车、出租车要加快提高使用新能源汽车的比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '13．逐步提高新增和更换驾驶培训车、驾驶考试车使用新能源汽车比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|支持',
            content: '市级财政资金配套支持新能源汽车推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|落实|支持',
            content: '16．将支持鼓励新能源汽车推广应用政策贯彻落实情况纳入市政府督查范围'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '17．每年开展新能源汽车推广应用成效评估'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '对作出突出成绩的单位和企业授予年度新能源汽车推广应用示范单位称号'
          }
        ],
        rpt: '2018/12/26',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅关于印发重庆市支持新能源汽车推广应用政策措施（2018—2022年）的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4754322.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: -1,
            typeName: '严禁',
            content: '23．严禁无资质企业生产、销售电动汽车'
          }
        ],
        rpt: '2013/02/07',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅印发贯彻落实重庆市人民政府关于加强道路交通安全工作意见重点工作分工方案的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4752999.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '积极推动',
            content: '积极推动新能源汽车、摩托车、医疗器械等产业成立专利联盟'
          }
        ],
        rpt: '2010/07/09',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府办公厅转发市知识产权局等部门关于发挥专利作用促进产业结构调整意见的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szfbgt_38656/202001/t20200115_4752540.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|引导',
            content: '积极引导新能源汽车产业健康有序发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '新建新能源汽车生产企业须具有动力系统等关键技术和整车研发能力'
          }
        ],
        rpt: '2017/06/02',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于发布重庆市政府核准的投资项目目录（2017年本）的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4753920.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加大|支持',
            content: '加大对我市自主品牌、自主知识产权和电子信息、新能源汽车等战略性新兴产业的支持力度'
          }
        ],
        rpt: '2014/12/24',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于加快发展现代保险服务业的实施意见',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4753420.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: -1,
            typeName: '严禁',
            content: '严禁无资质企业生产、销售电动汽车'
          }
        ],
        rpt: '2013/01/02',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于加强道路交通安全工作的意见',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4753280.html'
      },
      {
        contentList: [
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content:
              '通过建设国内最大笔记本电脑生产基地、国内最大离岸数据开发和处理中心以及集中打造通信设备、高性能集成电路、节能与新能源汽车、生物医药等10大重点产业集群'
          }
        ],
        rpt: '2011/10/25',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于进一步做好普通高等学校毕业生就业工作的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4752952.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实',
            content: '严格落实国家新能源汽车购置补贴和免征车辆购置税政策'
          }
        ],
        rpt: '2020/04/14',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于新形势下推动服务业高质量发展的意见',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202004/t20200414_7051917.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '重点发展笔记本电脑、离岸数据开发处理、轨道装备、新能源、新能源汽车、环保装备、仪器仪表、生物医药及高技术服务业'
          },
          {
            industryName: '节能和新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '推广应用节能和新能源汽车'
          }
        ],
        rpt: '2012/09/21',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于印发“十二五”控制温室气体排放和低碳试点工作方案的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4753097.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展智能终端、人工智能、智能汽车、新能源汽车等前沿科技产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content:
              '大力发展大数据云计算、智能终端、机器人、虚拟现实、人工智能、3D打印、新材料、生物医药、新能源汽车、光电技术等十大前沿科技产业集群'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content: '大力发展智能装备、节能环保、新一代信息、新材料、生物医药、新能源汽车等战略性新兴产业集群'
          }
        ],
        rpt: '2017/05/25',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于印发重庆临空经济示范区建设总体方案的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/qtgw/202001/t20200114_4621722.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '累计推广10万辆新能源汽车'
          }
        ],
        rpt: '2017/03/16',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于印发重庆市“十三五”控制温室气体排放工作方案的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4753971.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车制造',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content: '鼓励长安集团、重庆力帆集团等大型龙头企业大力发展无人驾驶、新能源汽车制造'
          }
        ],
        rpt: '2016/09/10',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于印发重庆市建设互联网经济高地 “十三五”规划的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4753881.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|研发',
            content: '重点推进新能源汽车研发生产'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|研发',
            content: '重点推进新能源汽车研发生产'
          }
        ],
        rpt: '2016/12/24',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于印发重庆市内陆开放高地建设“十三五”规划的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/qtgw/202001/t20200114_4619438.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '努力提升新能源汽车“大小三电”、先进汽车电子、辅助驾驶系统、网联终端系统等关键零部件本地配套能力'
          },
          {
            industryName: '中高端新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动|加快',
            content: '推动现有整车企业加快开发中高端新能源汽车产品'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展纯电动汽车、增程式纯电动汽车'
          },
          {
            industryName: '增程式纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展纯电动汽车、增程式纯电动汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content:
              '大力发展动力电池单体及电池系统、驱动电机及控制器、整车控制系统以及电制动、电转向、电空调等新能源汽车“大小三电”'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动摩托车企业有序向电动汽车企业转型升级'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '公共领域新能源汽车推广工程：市级单位通过政府集中采购新增和更换车辆中新能源汽车占比不低于50%'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高|加快',
            content: '主城区新增和更换公交车、出租车要加快提高使用新能源汽车的比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高新增和更换驾驶培训车、驾驶考试车使用新能源汽车比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '努力提升新能源汽车“大小三电”、先进汽车电子、辅助驾驶系统、网联终端系统等关键零部件本地配套能力'
          },
          {
            industryName: '中高端新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动|加快',
            content: '推动现有整车企业加快开发中高端新能源汽车产品'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展纯电动汽车、增程式纯电动汽车'
          },
          {
            industryName: '增程式纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展纯电动汽车、增程式纯电动汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content:
              '大力发展动力电池单体及电池系统、驱动电机及控制器、整车控制系统以及电制动、电转向、电空调等新能源汽车“大小三电”'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动摩托车企业有序向电动汽车企业转型升级'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '公共领域新能源汽车推广工程：市级单位通过政府集中采购新增和更换车辆中新能源汽车占比不低于50%'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高|加快',
            content: '主城区新增和更换公交车、出租车要加快提高使用新能源汽车的比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高新增和更换驾驶培训车、驾驶考试车使用新能源汽车比例'
          }
        ],
        rpt: '2019/05/10',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府关于印发重庆市推动制造业高质量发展专项行动方案（2019—2022年）的通知',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/ghxx/zxgh/202001/t20200114_4605138.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|研发',
            content:
              '重点扩大我市新一代电子信息、新能源汽车、节能环保和新材料等战略性新兴产业发展需要的集成电路、新型半导体、离岸云计算数据处理和软件开发、精密模具制造、新型显示、高性能动力电池等核心研发、先进技术引进以及高新技术装备和重要零部件进口'
          }
        ],
        rpt: '2012/08/24',
        region: '重庆市',
        org: '重庆市人民政府',
        title: '重庆市人民政府贯彻落实国务院关于加强进口促进对外贸易平衡发展指导意见的实施意见',
        url: 'http://www.cq.gov.cn/zwgk/fdzdgknr/lzyj/xzgfxwj/szf_38655/202001/t20200115_4753104.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '发展新能源汽车产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展新能源汽车及智能网联汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动汽车产业向智能网联汽车和新能源汽车升级'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '重点发展农畜产品加工、现代煤化工、精细化工、现代装备、铁合金、铝压延加工、稀土等新材料、新能源、环保装备、电子信息、新能源汽车及零部件等产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|发展',
            content:
              '加快发展新一代信息技术、智能机器人、智能制造装备、高端交通装备、新材料、生物医药、新能源汽车及智能网联汽车、数字创意等战略性新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content:
              '积极培育智能机器人、智能制造装备、新能源汽车、精细化工、新材料、生物医药、智能终端、产业用纺织品等新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content:
              '打造国内领先的新型显示、集成电路、信息安全、大数据、新一代移动通信、北斗卫星应用、超高清视频、航空航天、轨道交通、高效发电设备及燃气轮机、石油钻采设备、智能装备、新能源汽车、动力及储能电池、生物医药、新材料等产业集群'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|培育',
            content: '培育发展新能源汽车、生物医药、新材料等新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '重点发展不锈钢深加工、煤机装备、纺织机械、人工智能、传感器、轨道交通、新能源汽车、新材料、医药、食品、节能环保等产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '重点发展汽车及零部件、新能源汽车、智能装备、航空、纺织服装、电子信息、半导体照明（LED）、生物医药、食品、无机非金属材料、玻纤复合材料等产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展新一代信息技术、智能制造装备、新能源汽车、节能环保、新材料等高精尖产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展新一代信息技术、新能源汽车、航空航天、生物医药、新能源、新材料等新兴产业'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|发展',
            content:
              '加快高端装备、电子信息、大数据、生物医药、节能与新能源汽车、智能网联汽车、汽车零部件等产业创新发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '重点发展新能源、新材料、新医药、高端装备、节能环保、新一代信息技术、新能源汽车、空天海洋装备等战略性新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content: '大力发展新能源汽车、无人机、船舶与海工装备、轻工机械、电子信息等装备制造业产业集群'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|发展',
            content: '重点加快节能与新能源汽车、高端装备、新能源、空气动力装备等先进制造业发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content: '全力打造新能源汽车、化工新材料、纺织服装、高端机床、高档特种纸等特色优势产业基地'
          }
        ],
        rpt: '2018/12/29',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '《产业发展与转移指导目录（2018年本）》',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/gg/art/2020/art_4ee07684f00f407c9c988b2f4100e43e.html'
      },
      {
        contentList: [
          {
            industryName: '甲醇增程式电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|研发',
            content: '鼓励和支持企业研发甲醇混合动力汽车、甲醇增程式电动汽车、甲醇燃料电池汽车产品'
          }
        ],
        rpt: '2019/03/19',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '八部门关于在部分地区开展甲醇汽车应用的指导意见',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_8a39c51488544dba924e641efb81d511.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '推动新能源汽车产业健康可持续发展'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '相关进展情况及时报送节能与新能源汽车产业发展部际联席会议办公室'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '是新能源汽车产业发展的关键'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '但是目前动力电池产品性能、质量和成本仍然难以满足新能源汽车推广普及需求'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|发展',
            content: '落实新能源汽车发展战略目标'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '调整完善动力电池行业规范条件、新能源汽车生产企业及产品准入管理规则等管理措施'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '发布实施并不断完善新能源汽车标准化路线图'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '鼓励研究机构、检测认证机构以及动力电池、新能源汽车生产企业加强产品测试验证等相关数据积累'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善新能源汽车安全监管体系建设'
          }
        ],
        rpt: '2017/03/02',
        region: '中央',
        org: '中华人民共和国科学技术部',
        title: '工业和信息化部 发展改革委 科技部 财政部 关于印发《促进汽车动力电池产业发展行动方案》的通知',
        url: 'http://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201703/t20170302_131554.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '新能源汽车发展取得重大进展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破|发展',
            content: '新能源汽车和智能网联汽车有望成为抢占先机、赶超发展的突破口'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '我国新能源汽车技术水平大幅提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content: '以新能源汽车和智能网联汽车为突破口'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育形成若干家进入世界前十的新能源汽车企业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '新能源汽车骨干企业在全球的影响力和市场份额进一步提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '形成新能源汽车、智能网联汽车和先进节能汽车梯次合理的产业格局以及完善的产业配套体系'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|研发',
            content: '加快新能源汽车技术研发及产业化'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加大|推广',
            content: '加大新能源汽车推广应用力度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高公共服务领域新能源汽车使用比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善|推广',
            content: '完善新能源汽车推广应用、尤其是使用环节的扶持政策体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立|发展|促进',
            content: '建立促进新能源汽车发展的长效机制'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导|提高',
            content: '引导生产企业不断提高新能源汽车产销比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '不断完善新能源汽车标准体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '提高新能源汽车生产企业及产品准入门槛'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '强化',
            content: '强化新能源汽车生产监管'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立健全新能源汽车分类注册登记、交通管理、税收保险、车辆维修、二手车管理等政策体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推广',
            content: '探索新能源汽车与可再生能源、智能电网的深度融合和协同发展的商业化推广模式'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|加大',
            content: '加大对汽车关键零部件、新能源汽车、智能网联汽车等重点领域的支持力度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '优化完善新能源汽车标准体系'
          }
        ],
        rpt: '2017/05/10',
        region: '中央',
        org: '中华人民共和国科学技术部',
        title: '工业和信息化部 国家发展改革委 科技部关于印发《汽车产业中长期发展规划》的通知',
        url: 'http://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2017/201705/t20170517_132856.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进|发展',
            content: '促进新能源汽车行业持续健康发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content:
              '新能源汽车售后服务机构、电池租赁等运营企业应在溯源信息系统中建立动力蓄电池编码与新能源汽车的动态联系'
          }
        ],
        rpt: '2018/02/26',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title:
          '工业和信息化部 科技部 环境保护部 交通运输部 商务部 质检总局 能源局关于印发《新能源汽车动力蓄电池回收利用管理暂行办法》的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_459b0eb972964f68930bb39be9e92688.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '1.新能源汽车及动力蓄电池产业发展情况'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '3.现有新能源汽车及动力蓄电池产业相关支持政策'
          }
        ],
        rpt: '2018/03/02',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title:
          '工业和信息化部 科技部 环境保护部 交通运输部 商务部 质检总局 能源局关于组织开展新能源汽车动力蓄电池回收利用试点工作的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_f2b827336c514c7abb77a55aec6b25e3.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '支持两国企业、行业协会和科研院所围绕增材制造、机器人、新能源汽车、装备制造等行业开展合作'
          }
        ],
        rpt: '2019/08/09',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '工业和信息化部办公厅关于组织开展2019年制造业与互联网融合发展试点示范工作的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/rjy/art/2020/art_4b4b16f9e5ca4547b608666645b31ad3.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '（十一）推广新能源汽车'
          }
        ],
        rpt: '2018/07/25',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '工业和信息化部关于印发坚决打好工业和通信业污染防治攻坚战三年行动计划的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_4f3ef95924dd487eaab5d46bdfbc8926.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content:
              '重点支持5G、工业互联网、集成电路、工业机器人、增材制造、智能制造、新型显示、新能源汽车、节能环保等战略性新兴产业'
          }
        ],
        rpt: '2020/02/25',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '工业和信息化部印发《关于有序推动工业通信业企业复工复产的指导意见》',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_67d558d8e9de4dc3929797491a04cdc9.html'
      },
      {
        contentList: [
          {
            industryName: '节能和新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '积极支持节能和新能源汽车产品出口'
          },
          {
            industryName: '节能和新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content: '（二）积极引导节能和新能源汽车产品出口'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|推广',
            content: '支持推广纯电动汽车'
          }
        ],
        rpt: '2009/10/23',
        region: '中央',
        org: '中华人民共和国商务部',
        title: '关于促进我国汽车产品出口持续健康发展的意见',
        url: 'http://file.mofcom.gov.cn/article/gkml/200911/20091198714205.shtml'
      },
      {
        contentList: [
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发|加强',
            content: '加强节能与新能源汽车研发和应用示范'
          }
        ],
        rpt: '2007/09/29',
        region: '中央',
        org: '中华人民共和国科学技术部',
        title: '关于发布《节能减排全民科技行动方案》的通知',
        url: 'http://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2010before/200711/t20071108_143693.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|推广',
            content: '贯彻落实国家关于新能源汽车推广应用的战略部署'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '研究制定在城市公交、出租汽车、城市配送等领域推广应用新能源汽车的指导意见'
          }
        ],
        rpt: '2014/06/05',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '关于交通运输行业贯彻落实《2014—2015年节能减排低碳发展行动方案》的实施意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/fgs/202006/t20200623_3307640.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强|推广',
            content: '为进一步规范和加强新能源汽车推广应用财政补助资金管理'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '逐级报省级新能源汽车推广牵头部门'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '省级新能源汽车推广牵头部门会同其他相关部门'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '地方政府根据国务院有关文件要求承担新能源汽车推广应用主体责任'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '要明确新能源汽车推广牵头部门'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '地方新能源汽车推广牵头部门会同同级其他部门对本地新能源汽车资金申请报告和推广审核核查结果负责'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content:
              '有关各级新能源汽车推广主管部门、其他相关部门及其工作人员存在未按照上级要求进行分配审批、审核把关不严、核查工作组织不力、擅自超出政策规定范围或标准分配资金'
          }
        ],
        rpt: '2017/01/03',
        region: '中央',
        org: '中华人民共和国财政部',
        title: '关于新能源汽车推广应用审批责任有关事项的通知',
        url: 'http://jjs.mof.gov.cn/tongzhigonggao/201612/t20161215_2482658.htm'
      },
      {
        contentList: [
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '为了适应我国节能与新能源汽车产业发展的需要'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '增加一款作为第二十二条第四款：“工业和信息化部可以根据汽车行业发展情况决定延长抵偿期限和调整2020年度新能源汽车正积分结转比例'
          }
        ],
        rpt: '2020/06/22',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '关于修改《乘用车企业平均燃料消耗量与新能源汽车积分并行管理办法》的决定',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zbgy/art/2020/art_a9bf4365bb194150a71b1d6eb91138ba.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '全面提升新能源汽车充电保障能力'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '提升新能源汽车充电保障能力行动计划'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '我国新能源汽车正处于市场化发展的关键时期'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '充电基础设施是新能源汽车推广应用的重要基础之一'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '新能源汽车和充电设施尚处于发展过程中'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '仍是制约新能源汽车发展的短板之一'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '新能源汽车充电保障能力亟待提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|落实|发展',
            content: '落实党中央、国务院关于加快新能源汽车发展的决策部署'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '以新能源汽车推广应用为出发点'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '为新能源汽车发展提供坚实能源保障'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进新能源汽车与充电设施行业标准间的协调统一'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '逐渐将地方财政购置补贴转向支持充电基础设施建设和运营、新能源汽车使用和运营等环节'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快与国家新能源汽车监管平台的信息互联互通'
          }
        ],
        rpt: '2018/12/12',
        region: '中央',
        org: '中华人民共和国财政部',
        title: '关于印发《提升新能源汽车充电保障能力行动计划》的通知',
        url: 'http://www.mof.gov.cn/zhengwuxinxi/zhengcefabu/201812/t20181212_3088828.htm'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|加快推动',
            content: '加快推动电动汽车科技发展'
          }
        ],
        rpt: '2012/04/20',
        region: '中央',
        org: '中华人民共和国科学技术部',
        title: '关于印发电动汽车科技发展“十二五”专项规划的通知',
        url: 'http://www.most.gov.cn/xxgk/xinxifenlei/fdzdgknr/fgzc/gfxwj/gfxwj2012/201204/t20120424_93860.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '应将除公交车外的新能源汽车地方购置补贴资金集中用于支持充电基础设施“短板”建设和配套运营服务等环节'
          }
        ],
        rpt: '2019/05/08',
        region: '中央',
        org: '中华人民共和国财政部',
        title: '关于支持新能源公交车推广应用的通知',
        url: 'http://jjs.mof.gov.cn/zhengcefagui/201905/t20190508_3251282.htm'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content: '鼓励并引导电动汽车有序充电'
          }
        ],
        rpt: '2018/12/04',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委 国家能源局关于印发《清洁能源消纳行动计划（2018-2020年）》的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghxwj/201812/t20181204_960958.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '新能源汽车产业化进程加快'
          }
        ],
        rpt: '2017/01/17',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委 国家能源局关于印发能源发展“十三五”规划的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201701/t20170117_962221.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '大力推广新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|推动',
            content: '推动新能源汽车等新技术、新产品在北京2022冬奥会和冬残奥会推广利用'
          }
        ],
        rpt: '2019/08/06',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title:
          '国家发展改革委 河北省人民政府关于印发《张家口首都水源涵养功能区和生态环境支撑区建设规划（2019-2035年）》的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201908/t20190806_962255.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content:
              '加快形成电子核心部件、新材料、物联网、机器人及智能装备、高端交通装备、新能源汽车及智能汽车、生物医药等战略性新兴产业集群'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '积极发展纯电动汽车和插电式混合动力汽车'
          }
        ],
        rpt: '2016/05/04',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委 住房城乡建设部关于印发成渝城市群发展规划的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201605/t20160504_962182.html'
      },
      {
        contentList: [
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '积极发展纯电动汽车和插电式混合动力汽车'
          }
        ],
        rpt: '2016/06/03',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委 住房城乡建设部关于印发长江三角洲城市群发展规划的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201606/t20160603_962187.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '积极培育新能源汽车、电子信息、高端装备制造、生物医药、新材料等产业'
          }
        ],
        rpt: '2018/11/12',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委关于印发《汉江生态经济带发展规划》的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201811/t20181112_962253.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '带动示范区内外信息产业、智能电网、新能源汽车、新材料、现代服务业等新兴产业发展'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广使用',
            content: '率先在公共交通、出租车、旅游观光等领域推广使用电动汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '重点发展并网智能控制设备、新能源汽车、高转换率光伏组件、太阳能热电聚光器等可再生能源高端装备制造业'
          }
        ],
        rpt: '2015/07/29',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委关于印发《河北省张家口市可再生能源示范区发展规划》的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201507/t20150729_962159.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '联合有关地区发展新能源汽车、专用车'
          }
        ],
        rpt: '2018/11/07',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委关于印发《淮河生态经济带发展规划》的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201811/t20181107_962252.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|发展',
            content:
              '支持新一代信息技术、新能源汽车、高端装备和材料、数字创意、绿色低碳和生态环保等领域的新兴产业发展壮大'
          }
        ],
        rpt: '2016/12/19',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委关于印发东北振兴“十三五”规划的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201612/t20161219_962212.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '积极发展载重汽车、乘用车、新能源汽车、智能机械、轨道交通装备'
          }
        ],
        rpt: '2018/03/06',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委关于印发呼包鄂榆城市群发展规划的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201803/t20180306_962247.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快电动汽车等节能环保和新能源汽车应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快电动汽车等节能环保和新能源汽车应用'
          }
        ],
        rpt: '2017/01/19',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委关于印发石油天然气发展“十三五”规划的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201701/t20170119_962222.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|培育',
            content: '加快培育形成生物医药、先进材料、机器人、新能源、新能源汽车等产业集群'
          }
        ],
        rpt: '2017/01/05',
        region: '中央',
        org: '中华人民共和国国家发展和改革委员会',
        title: '国家发展改革委关于印发中原城市群发展规划的通知',
        url: 'https://www.ndrc.gov.cn/xxgk/zcfb/ghwb/201701/t20170105_962218.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '是发展新能源汽车产业的重要保障'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '坚持以纯电驱动为新能源汽车发展的主要战略取向'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进|发展',
            content: '促进电动汽车产业发展和电力消费'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '着眼于电动汽车未来发展'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进电动汽车与智能电网间能量和信息的双向互动'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '各地要结合新能源汽车推广应用需要'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '依托节能与新能源汽车产业发展部际联席会议制度'
          }
        ],
        rpt: '2019/05/23',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院办公厅关于加快电动汽车充电基础设施建设的指导意见',
        url: 'http://f.mnr.gov.cn/201905/t20190523_2412886.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '有条件的地方对购置新能源汽车给予积极支持'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '鼓励金融机构对居民购买新能源汽车、绿色智能家电、智能家居、节水器具等绿色智能产品提供信贷支持'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '有条件的地方对购置新能源汽车给予积极支持'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '鼓励金融机构对居民购买新能源汽车、绿色智能家电、智能家居、节水器具等绿色智能产品提供信贷支持'
          }
        ],
        rpt: '2019/08/27',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院办公厅关于加快发展流通促进商业消费的意见',
        url: 'http://f.mnr.gov.cn/201912/t20191220_2490927.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广',
            content: '加快新能源汽车的推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|发展',
            content: '贯彻落实发展新能源汽车的国家战略'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '以纯电驱动为新能源汽车发展的主要战略取向'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展纯电动汽车、插电式（含增程式）混合动力汽车和燃料电池汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立|发展',
            content: '建立长期稳定的新能源汽车发展政策体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进|发展',
            content: '促进新能源汽车产业健康快速发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content: '新能源汽车生产企业和充电设施生产建设运营企业要着力突破关键核心技术'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '地方政府要相应制定新能源汽车推广应用规划'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破|推广',
            content: '把公共服务领域用车作为新能源汽车推广应用的突破口'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '地方政府承担新能源汽车推广应用主体责任'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '新能源汽车生产企业要积极提高售后服务水平'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '不断提高现代信息技术在新能源汽车商业运营模式创新中的应用水平'
          },
          {
            industryName: '新能源汽车技术研发和运营服务',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '鼓励互联网企业参与新能源汽车技术研发和运营服务'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '为新能源汽车推广应用带来更多便利和实惠'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加大|推广',
            content:
              '各地区、各有关部门要在公交车、出租车等城市客运以及环卫、物流、机场通勤、公安巡逻等领域加大新能源汽车推广应用力度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '不断提高新能源汽车运营比重'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '比例不低于|推广',
            content: '新能源汽车推广应用城市新增或更新车辆中的新能源汽车比例不低于30%'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进',
            content: '（十四）推进党政机关和公共机构、企事业单位使用新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '比例不低于|推广',
            content:
              '中央国家机关以及新能源汽车推广应用城市的政府机关及公共机构购买的新能源汽车占当年配备更新车辆总量的比例不低于30%'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善|推广',
            content: '（十五）完善新能源汽车推广补贴政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '中央财政安排资金对新能源汽车推广应用规模较大和配套基础设施建设较好的城市或企业给予奖励'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|推广',
            content: '有关方面要抓紧研究确定2016—2020年新能源汽车推广应用的财政支持政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '城市公交车行业是新能源汽车推广的优先领域'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|发展',
            content: '（十八）多渠道筹集支持新能源汽车发展的资金'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立|发展',
            content: '建立长期稳定的发展新能源汽车的资金来源'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|研发|推广',
            content: '重点支持新能源汽车技术研发、检验测试和推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立适应新能源汽车行业特点的信贷管理和贷款评审制度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '增加其支持个人购买新能源汽车的资金来源'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '支持社会资本和具有技术创新能力的企业参与新能源汽车科研生产'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '鼓励新能源汽车的研发生产和销售使用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '有关部门要加强对新能源汽车市场的监管'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进',
            content: '推进建设统一开放、有序竞争的新能源汽车市场'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: -1,
            typeName: '清理|发展',
            content: '坚决清理取消各地区不利于新能源汽车市场发展的违规政策措施'
          },
          {
            industryName: '新能源汽车技术和产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快研究和开发适应市场需求、有竞争力的新能源汽车技术和产品'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|建立',
            content: '加快建立新能源汽车产业技术创新体系'
          },
          {
            industryName: '新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '（二十七）完善新能源汽车产品质量保障体系'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|建立',
            content: '支持建立行业性新能源汽车技术支撑平台'
          },
          {
            industryName: '新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立新能源汽车产品抽检制度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立由主要负责同志牵头、各职能部门参加的新能源汽车工作联席会议制度'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推广',
            content: '节能与新能源汽车产业发展部际联席会议及其办公室要及时协调解决新能源汽车推广应用中的重大问题'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推广',
            content: '节能与新能源汽车产业发展部际联席会议及其办公室要及时协调解决新能源汽车推广应用中的重大问题'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立|推广',
            content: '建立新能源汽车推广城市退出机制'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '提高全社会对新能源汽车的认知度和接受度'
          }
        ],
        rpt: '2019/05/22',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院办公厅关于加快新能源汽车推广应用的指导意见',
        url: 'http://f.mnr.gov.cn/201905/t20190522_2412477.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善燃油经济性标准和新能源汽车技术标准'
          }
        ],
        rpt: 'NaN//',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院办公厅关于加强节能标准化工作的意见',
        url: 'http://f.mnr.gov.cn/201702/t20170206_1437059.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广使用',
            content: '（国家邮政局、交通运输部负责）鼓励快递物流领域加快推广使用新能源汽车和满足更高排放标准的燃油汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高新能源汽车使用比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广使用',
            content: '（国家邮政局、交通运输部负责）鼓励快递物流领域加快推广使用新能源汽车和满足更高排放标准的燃油汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高新能源汽车使用比例'
          }
        ],
        rpt: '2018/01/23',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院办公厅关于推进电子商务与快递物流协同发展的意见',
        url: 'http://www.gov.cn/zhengce/content/2018-01/23/content_5259695.htm'
      },
      {
        contentList: [
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|发展',
            content: '加快发展纯电动汽车、混合动力汽车和船舶、天然气汽车和船舶'
          }
        ],
        rpt: 'NaN//',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院办公厅关于印发能源发展战略行动计划（2014-2020年）的通知',
        url: 'http://f.mnr.gov.cn/201702/t20170206_1436370.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '电动汽车及动力电池生产企业应负责建立废旧电池回收网络'
          }
        ],
        rpt: '2017/01/03',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院办公厅关于印发生产者责任延伸制度推行方案的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-01/03/content_5156043.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: -1,
            typeName: '淘汰|推广',
            content: '对大力淘汰老旧车辆、推广应用新能源汽车的有关企业和人员依照有关政策及时给予经济补偿'
          }
        ],
        rpt: '2018/10/09',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院办公厅关于印发推进运输结构调整三年行动计划（2018—2020年）的通知',
        url: 'http://www.gov.cn/zhengce/content/2018-10/09/content_5328817.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善新能源汽车积分管理制度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实',
            content: '落实好乘用车企业平均燃料消耗量与新能源汽车积分并行管理办法'
          }
        ],
        rpt: '2018/10/11',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院办公厅关于印发完善促进消费体制机制实施方案（2018—2020年）的通知',
        url: 'http://www.gov.cn/zhengce/content/2018-10/11/content_5329516.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '新能源汽车产业发展规划（2021—2035年）'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '发展新能源汽车是我国从汽车大国迈向汽车强国的必由之路'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '新能源汽车产业发展取得了巨大成就'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善|发展',
            content:
              '我国新能源汽车发展也面临核心技术创新能力不强、质量保障体系有待完善、基础设施建设仍显滞后、产业生态尚不健全、市场竞争日益加剧等问题'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '为推动新能源汽车产业高质量发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '第一节新能源汽车为世界经济发展注入新动能'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进|发展',
            content: '新能源汽车已成为全球汽车产业转型发展的主要方向和促进世界经济持续增长的重要引擎'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '第二节我国新能源汽车进入加速发展新阶段'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '为新能源汽车产业提供了前所未有的发展机遇'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善|增强|提升',
            content: '我国新能源汽车产业技术水平显著提升、产业体系日趋完善、企业竞争力大幅增强'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '推动新能源汽车产业高质量可持续发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '第三节融合开放成为新能源汽车发展的新特征'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '新能源汽车产业生态正由零部件、整车研发生产及营销服务企业之间的“链式关系”'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '跨行业、跨领域融合创新和更加开放包容的国际合作成为新能源汽车产业发展的时代特征'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '深入实施发展新能源汽车国家战略'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '推动我国新能源汽车产业高质量可持续发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进新能源汽车与能源、交通、信息通信深度融合'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育新能源汽车产业新优势'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '增强',
            content: '我国新能源汽车市场竞争力明显增强'
          },
          {
            industryName: '新能源汽车整',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '提高新能源汽车整车综合性能'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立面向未来出行的新能源汽车与智慧能源、智能交通融合创新平台'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '提升新能源汽车及关联产业融合创新能力'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|培育',
            content: '培育若干上下游协同创新、大中小企业融通发展、具有国际影响力和竞争力的新能源汽车产业集群'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发|推进',
            content: '推进智能化技术在新能源汽车研发设计、生产制造、仓储物流、经营管理、售后服务等关键环节的深度应用'
          },
          {
            industryName: '新能源汽车智能制造',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快新能源汽车智能制造仿真、管理、控制等核心工业软件开发和集成'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '提升新能源汽车全产业链智能化水平'
          },
          {
            industryName: '新能源汽车产品',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '开展新能源汽车产品质量提升行动'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '第一节推动新能源汽车与能源融合发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强新能源汽车与电网（V2G）能量互动'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '实现',
            content: '实现新能源汽车与电网能量高效互动'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进新能源汽车与可再生能源高效协同'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动新能源汽车与气象、可再生能源电力预测预报系统信息共享与融合'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '第二节推动新能源汽车与交通融合发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快新能源汽车在分时租赁、城市公交、出租汽车、场地用车等领域的应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动新能源汽车在城市配送、港口作业等领域应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '第三节推动新能源汽车与信息通信融合发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进新能源汽车与信息通信融合应用服务创新'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '强化',
            content: '强化新能源汽车数据分级分类和合规应用管理'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立|发展',
            content: '建立新能源汽车与相关产业融合发展的综合标准体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进形成开放、透明、包容的新能源汽车国际化市场环境'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善企业平均燃料消耗量与新能源汽车积分并行管理办法'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实',
            content: '落实新能源汽车相关税收优惠政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '比例不低于',
            content:
              '国家生态文明试验区、大气污染防治重点区域的公共领域新增或更新公交、出租、物流配送等车辆中新能源汽车比例不低于80%'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '制定将新能源汽车研发投入纳入国有企业考核体系的具体办法'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|建立|发展|培养',
            content: '加快建立适应新能源汽车与相关产业融合发展需要的人才培养机制'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '充分发挥节能与新能源汽车产业发展部际联席会议制度和地方协调机制作用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强新能源汽车与能源、交通、信息通信等行业在政策规划、标准法规等方面的统筹'
          }
        ],
        rpt: '2020/11/02',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院办公厅关于印发新能源汽车产业发展规划（2021—2035年）的通知',
        url: 'http://www.gov.cn/zhengce/content/2020-11/02/content_5556716.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育壮大节能环保、新一代信息技术、新能源汽车等战略性新兴产业'
          }
        ],
        rpt: '2019/05/24',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院关于积极发挥新消费引领作用加快培育形成新供给新动力的指导意见',
        url: 'http://f.mnr.gov.cn/201905/t20190524_2413440.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强先进重大装备、新材料、新能源汽车等领域的第三方检验检测服务'
          }
        ],
        rpt: '2019/05/24',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院关于加快发展生产性服务业促进产业结构调整升级的指导意见',
        url: 'http://f.mnr.gov.cn/201905/t20190524_2413451.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content:
              '大力发展新一代信息技术、高端装备、新材料、生物、新能源汽车、新能源、节能环保、数字创意等战略性新兴产业'
          }
        ],
        rpt: '2017/02/06',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发“十三五”促进就业规划的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-02/06/content_5165797.htm'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content:
              '高速铁路、水电装备、特高压输变电、杂交水稻、第四代移动通信（4G）、对地观测卫星、北斗导航、电动汽车等重大装备和战略产品取得重大突破'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育新能源汽车、高端轨道交通、民用航空等新兴产业'
          },
          {
            industryName: '电动汽车智能化',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展电动汽车智能化、网联化、轻量化技术及自动驾驶技术'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content:
              '高速铁路、水电装备、特高压输变电、杂交水稻、第四代移动通信（4G）、对地观测卫星、北斗导航、电动汽车等重大装备和战略产品取得重大突破'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育新能源汽车、高端轨道交通、民用航空等新兴产业'
          },
          {
            industryName: '电动汽车智能化',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展电动汽车智能化、网联化、轻量化技术及自动驾驶技术'
          }
        ],
        rpt: '2016/08/08',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发“十三五”国家科技创新规划的通知',
        url: 'http://www.gov.cn/zhengce/content/2016-08/08/content_5098072.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '我国节能环保、新一代信息技术、生物、高端装备制造、新能源、新材料和新能源汽车等战略性新兴产业快速发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '进一步发展壮大新一代信息技术、高端装备、新材料、生物、新能源汽车、新能源、节能环保、数字创意等战略性新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '面向航空航天、轨道交通、电力电子、新能源汽车等产业发展需求'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '五、推动新能源汽车、新能源和节能环保产业快速壮大'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '大幅提升新能源汽车和新能源的应用比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推动',
            content: '推动新能源汽车、新能源和节能环保等绿色低碳产业成为支柱产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '实现',
            content: '（一）实现新能源汽车规模应用'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '提升纯电动汽车和插电式混合动力汽车产业化水平'
          },
          {
            industryName: '电动汽车整车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '全面提升电动汽车整车品质与性能'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快电动汽车安全标准制定和应用'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '推动电动汽车与智能电网、新能源、储能、智能驾驶等融合发展'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进',
            content: '促进电动汽车重大关键技术协同创新'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善电动汽车生产准入政策'
          },
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '电动汽车力争具备商业化推广的市场竞争力'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善|推广',
            content: '调整完善新能源汽车推广补贴政策'
          }
        ],
        rpt: '2016/12/19',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发“十三五”国家战略性新兴产业发展规划的通知',
        url: 'http://www.gov.cn/zhengce/content/2016-12/19/content_5150090.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|发展',
            content:
              '加快发展壮大新一代信息技术、高端装备、新材料、生物、新能源、新能源汽车、节能环保、数字创意等战略性新兴产业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content: '节能环保、新能源装备、新能源汽车等绿色低碳产业总产值突破10万亿元'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '大力推广节能环保汽车、新能源汽车、天然气（CNG/LNG）清洁能源汽车、液化天然气动力船舶等'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|提高',
            content:
              '中央国家机关、新能源汽车推广应用城市的政府部门及公共机构购买新能源汽车占当年配备更新车辆总量的比例提高到50%以上'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content: '积极引导消费者购买节能与新能源汽车、高效家电、节水型器具等节能环保低碳产品'
          }
        ],
        rpt: '2017/01/05',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发“十三五”节能减排综合工作方案的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-01/05/content_5156789.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '提高公共车辆中新能源汽车占比'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '继续实施新能源汽车推广'
          }
        ],
        rpt: '2016/12/05',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发“十三五”生态环境保护规划的通知',
        url: 'http://www.gov.cn/zhengce/content/2016-12/05/content_5143290.htm'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发',
            content: '电动汽车、特种船舶、国产大型客机、中低速磁悬浮轨道交通等领域技术研发和应用取得进展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '城市公共交通、出租车和城市配送领域新能源汽车快速发展'
          }
        ],
        rpt: '2017/02/28',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发“十三五”现代综合交通运输体系发展规划的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-02/28/content_5171345.htm'
      },
      {
        contentList: [
          {
            industryName: '氢能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '支持外商投资企业参与氢能源汽车标准制定'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|发展',
            content: '支持在自贸试验区内发展新能源汽车产业'
          }
        ],
        rpt: '2019/08/26',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发6个新设自由贸易试验区总体方案的通知',
        url: 'http://www.gov.cn/zhengce/content/2019-08/26/content_5424522.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '支持将生物医药、高端智能装备、新能源汽车、硅基新材料等产业纳入新一批国家战略性新兴产业集群'
          }
        ],
        rpt: '2020/09/21',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发北京、湖南、安徽自由贸易试验区总体方案及浙江自由贸易试验区扩展区域方案的通知',
        url: 'http://www.gov.cn/zhengce/content/2020-09/21/content_5544926.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广使用',
            content: '推广使用新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建成',
            content: '重点区域的直辖市、省会城市、计划单列市建成区公交车全部更换为新能源汽车'
          }
        ],
        rpt: '2018/07/03',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发打赢蓝天保卫战三年行动计划的通知',
        url: 'http://www.gov.cn/zhengce/content/2018-07/03/content_5303158.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培养',
            content:
              '扩大节能环保、新一代信息技术、生物、高端装备制造、新能源、新材料和新能源汽车等战略性新兴产业人才培养规模'
          }
        ],
        rpt: '2017/01/19',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发国家教育事业发展“十三五”规划的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-01/19/content_5161341.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '推动节能环保、新一代信息技术、生物、高端装备制造、新能源、新材料、新能源汽车等战略性新兴产业发展'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '积极推广',
            content: '积极推广节能与新能源汽车'
          },
          {
            industryName: '节能和新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '推广节能和新能源汽车'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '民用领域重点推广高效照明产品、节能家用电器、节能与新能源汽车等'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content:
              '示范推广低品位余能利用、高效环保煤粉工业锅炉、稀土永磁电机、新能源汽车、半导体照明、太阳能光伏发电、零排放和产业链接等一批重大、关键节能技术'
          }
        ],
        rpt: 'NaN//',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院关于印发节能减排“十二五”规划的通知',
        url: 'http://f.mnr.gov.cn/201702/t20170206_1436692.html'
      },
      {
        contentList: [
          {
            industryName: '电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '增强',
            content: '着力增强电网对新能源发电、分布式能源、电动汽车等能源利用方式的承载和适应能力'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '为新能源汽车产业化发展提供必要的条件和支撑'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '结合充电式混合动力、纯电动、天然气（CNG/LNG）等新能源汽车发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '在北京、上海、重庆等新能源汽车示范推广城市'
          }
        ],
        rpt: 'NaN//',
        region: '中央',
        org: '中华人民共和国自然资源部',
        title: '国务院关于印发能源发展“十二五”规划的通知',
        url: 'http://f.mnr.gov.cn/201702/t20170206_1436371.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|培育',
            content:
              '加快培育壮大节能环保、新一代信息通信技术、生物、高端装备制造、新能源、新材料、新能源汽车、数字创意等战略性新兴产业'
          }
        ],
        rpt: '2017/02/04',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发全国国土规划纲要（2016—2030年）的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-02/04/content_5165309.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车制造',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加大',
            content:
              '在种业、医疗、教育、旅游、电信、互联网、文化、金融、航空、海洋经济、新能源汽车制造等重点领域加大开放力度'
          }
        ],
        rpt: '2018/10/16',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发中国（海南）自由贸易试验区总体方案的通知',
        url: 'http://www.gov.cn/zhengce/content/2018-10/16/content_5331180.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '襄阳片区重点发展高端装备制造、新能源汽车、大数据、云计算、商贸物流、检验检测等产业'
          }
        ],
        rpt: '2017/03/31',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发中国（湖北）自由贸易试验区总体方案的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-03/31/content_5182299.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车及智能汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|研发',
            content:
              '加快形成电子核心部件、新材料、物联网、航空器及零部件研发制造、高端交通装备、新能源汽车及智能汽车、生物医药、能源环保装备、智能终端等战略性新兴产业集群'
          }
        ],
        rpt: '2017/03/31',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于印发中国（重庆）自由贸易试验区总体方案的通知',
        url: 'http://www.gov.cn/zhengce/content/2017-03/31/content_5182300.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '重点发展新一代信息技术、轨道交通、新能源汽车、新材料、航空航天、生物医药、文化旅游等新兴产业和先进产品'
          }
        ],
        rpt: '2017/09/11',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '国务院关于支持山西省进一步深化改革促进资源型经济转型发展的意见',
        url: 'http://www.gov.cn/zhengce/content/2017-09/11/content_5224274.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广',
            content: '新疆生产建设兵团交通局、财务局、工业和信息化委员会：为进一步加快新能源汽车在公交领域的推广应用'
          }
        ],
        rpt: '2015/11/10',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部 财政部 工业和信息化部关于印发《新能源公交车推广应用考核办法（试行）》的通知',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/ysfws/202006/t20200623_3315218.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进|推广',
            content: '促进新能源汽车的推广应用'
          }
        ],
        rpt: '2017/02/08',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title:
          '交通运输部 财政部 国家铁路局 中国民用航空局 国家邮政局 中国铁路总公司关于鼓励支持运输企业创新发展的指导意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/ysfws/202006/t20200623_3315352.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '并按照新能源汽车发展有关政策在充电基础设施布局和建设方面给予扶持'
          }
        ],
        rpt: '2017/08/08',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部 住房城乡建设部关于促进小微型客车租赁健康发展的指导意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/ysfws/202006/t20200623_3315420.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '深化',
            content: '组织在江苏、浙江、湖北、山东、广东、贵州等6省及若干新能源汽车生产企业深化开展试点工作'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完成',
            content: '完成与各主要汽车生产企业（含新能源汽车）所属品牌授权维修体系（4S店体系）的技术方案对接'
          }
        ],
        rpt: '2017/05/12',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部办公厅关于开展汽车维修电子健康档案系统建设工作的通知',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/ysfws/202006/t20200623_3315379.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '研究建立道路运输领域新能源汽车使用安全和运维保养相关标准规范'
          }
        ],
        rpt: '2020/06/08',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部办公厅关于做好交通运输促进消费扩容提质有关工作的通知',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/zhghs/202006/t20200630_3321350.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '积极发展新能源汽车和智能网联汽车产业'
          }
        ],
        rpt: '2020/11/30',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部关于安徽省开展推进皖南交旅融合发展等交通强国建设试点工作的意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/zhghs/202011/t20201130_3497129.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推进|推广',
            content: '加快推进新能源汽车在交通运输行业的推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '发展新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '党中央、国务院高度重视新能源汽车产业发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '将发展新能源汽车确定为国家战略'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '针对我国新能源汽车发展现状'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|发展',
            content: '明确了推进新能源汽车发展的指导思想、基本原则、发展政策和保障机制'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广',
            content: '是加快新能源汽车推广应用的重要纲领'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '交通运输行业是新能源汽车推广应用的重要领域之一'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|完善|推广',
            content: '完善和落实对新能源汽车推广应用的扶持政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '营造有利于新能源汽车在交通运输行业推广应用的政策环境'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content: '引导交通运输企业主动、更多选择新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '实现',
            content: '实现新能源汽车在交通运输行业的可持续应用'
          },
          {
            industryName: '纯电动汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '重点推广应用插电式（含增程式）混合动力汽车、纯电动汽车'
          },
          {
            industryName: '其他新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '研究推广应用储能式超级电容汽车等其他新能源汽车'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|推广',
            content: '积极稳妥地推进新能源汽车在交通运输行业的推广应用工作'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '新能源汽车运营效率和安全水平明显提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '新能源汽车占城市公交车、出租汽车和城市物流配送车辆的比例显著提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '比例不低于',
            content: '新能源汽车比例不低于30%;京津冀地区新增或更新城市公交车、出租汽车和城市物流配送车辆中'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '比例不低于',
            content: '新能源汽车比例不低于35%'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '新能源汽车在交通运输行业的运营效率明显提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '增强',
            content: '投入交通运输行业的新能源汽车可靠性显著增强'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '基本建立|推广',
            content: '新能源汽车在交通运输行业推广应用的法规政策和标准规范体系基本建立'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '增强',
            content: '交通运输企业购买使用新能源汽车的主动性明显增强'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '将新能源汽车推广应用纳入城市公共交通规划和城市综合交通运输体系规划'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '明确新能源汽车推广应用目标、技术路线、重点任务和配套政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '编制交通运输行业新能源汽车推广应用实施方案和年度实施计划'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '鼓励集约化程度高、管理制度完善、运营规范的交通运输企业投资使用新能源汽车和建设充换电设施'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '提高新能源汽车的运营效率'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|推广',
            content: '制定本地区新能源汽车推广应用的支持政策'
          },
          {
            industryName: '新能源汽车运营',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '9.完善新能源汽车运营政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '并向新能源汽车推广应用程度高的交通运输企业倾斜或成立专门的新能源汽车运输企业'
          },
          {
            industryName: '新能源汽车运营',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强新能源汽车运营安全监控'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '督促交通运输企业建立健全新能源汽车定期检查、维护和修理制度'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强新能源汽车技术管理'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立新能源汽车全生命周期运营档案'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '按照各地新能源汽车推广应用工作联席会议制度的有关要求'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|推广|推动',
            content: '推动细化新能源汽车在交通运输行业推广应用的支持政策和配套措施'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进|发展',
            content: '推进新能源汽车在交通运输行业的健康发展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|推广',
            content: '为新能源汽车推广应用的方案编制、设施建设、车辆准入、驾驶员培训、安全管理和政策支持提供法制保障'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强|推广',
            content: '加强新能源汽车推广应用技术支撑'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善|建立',
            content: '建立完善新能源汽车使用环节的技术标准规范体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强新能源汽车日常维护工作'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '加强对新能源汽车运行数据的采集和分析'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立交通运输行业新能源汽车应用效果评估和反馈机制'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立新能源汽车召回机制'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导|加快建设',
            content: '引导新能源汽车生产企业加快建设售后服务体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content:
              '并分别于每年6月底和12月底前向部报送新能源汽车推广应用情况（含分类保有量、分类新增数量及采取的主要措施）'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '部将适时组织对各省、自治区、直辖市在交通运输行业推广应用新能源汽车的情况进行监督检查'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '大力宣传新能源汽车推广应用在环境改善、能源节约等方面的显著效果和重大作用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广|提高',
            content: '提高公众对交通运输行业推广应用新能源汽车的认知度和接受度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '形成有利于新能源汽车大规模推广应用的良好氛围'
          }
        ],
        rpt: '2015/03/18',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部关于加快推进新能源汽车在交通运输行业推广应用的实施意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/ysfws/202006/t20200623_3315133.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '结合新能源汽车用户规模和发展需求'
          }
        ],
        rpt: '2014/10/14',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部关于进一步提升高速公路服务区服务质量的意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/glj/202006/t20200623_3312198.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建成',
            content: '重点区域的直辖市、省会城市、计划单列市建成区公交车全部更换为新能源汽车'
          }
        ],
        rpt: '2018/07/10',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部关于全面加强生态环境保护坚决打好污染防治攻坚战的实施意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/zhghs/202006/t20200630_3320224.html'
      },
      {
        contentList: [
          {
            industryName: '新能源智能汽车车型',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快',
            content: '加快研制新能源智能汽车车型'
          }
        ],
        rpt: '2020/11/30',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部关于上海市开展推进长三角交通一体化等交通强国建设试点工作的意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/zhghs/202011/t20201130_3497007.html'
      },
      {
        contentList: [
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '要大力推动先进轨道交通装备、海洋工程装备及高技术船舶、节能与新能源汽车等优势和战略产业快速发展'
          }
        ],
        rpt: '2015/07/07',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部关于以“四个全面”战略布局为统领当好经济社会发展先行官的指导意见',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/zhghs/202006/t20200630_3320281.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广',
            content: '（二十二）加快新能源汽车和节能环保汽车推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加大|推广',
            content: '进一步加大新能源汽车在交通运输行业的推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content: '积极引导新能源汽车用于出租汽车和小微型客车租赁等服务'
          }
        ],
        rpt: '2018/07/25',
        region: '中央',
        org: '中华人民共和国交通运输部',
        title: '交通运输部贯彻落实《中共中央 国务院关于支持海南全面深化改革开放的指导意见》实施方案',
        url: 'http://xxgk.mot.gov.cn/2020/jigou/zhghs/202006/t20200630_3320244.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推进',
            content:
              '重点推进节能环保、新兴信息产业、生物产业、新能源、新能源汽车、高端装备制造、新材料以及教育信息化等领域的协同创新'
          }
        ],
        rpt: 'NaN//',
        region: '中央',
        org: '中华人民共和国教育部',
        title: '教育部 财政部关于印发《2011协同创新中心建设发展规划》等三个文件的通知',
        url: 'http://www.moe.gov.cn/srcsite/A16/kjs_2011jh/201404/t20140411_167787.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content:
              '兼顾三次产业分布和节能环保、新一代信息技术、生物、高端装备制造、新能源、新材料、新能源汽车等战略性新兴产业发展需要'
          }
        ],
        rpt: 'NaN//',
        region: '中央',
        org: '中华人民共和国教育部',
        title: '教育部关于印发《全国职业院校技能大赛三年规划（2013-2015年）》的通知',
        url: 'http://www.moe.gov.cn/srcsite/A07/zcs_yxds/s3069/201301/t20130128_147481.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content: '大力发展满足高端装备、应用电子、物联网、新能源汽车、新一代信息技术需求的核心基础元器件'
          }
        ],
        rpt: '2017/01/16',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '两部委关于印发信息产业发展指南的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_60d8ff07cfc243f0a2980c6b60aacf7e.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '促进|推广',
            content: '为促进农村地区新能源汽车推广应用'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持',
            content: '（三）活动期间地方人民政府发布本地区支持新能源汽车下乡等有关政策'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '为新能源汽车推广应用营造良好舆论环境'
          }
        ],
        rpt: '2020/07/15',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '三部门关于开展新能源汽车下乡活动的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zbgy/art/2020/art_79e301a67f5842c08fc032cf609db8ee.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点围绕京津冀、长三角、珠三角等新能源汽车发展集聚区域'
          }
        ],
        rpt: '2017/01/25',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '三部委关于加快推进再生资源产业发展的指导意见',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_c5099740636643a0b85d7fdc81d9fe13.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '新能源汽车发展取得重大进展'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破|发展',
            content: '新能源汽车和智能网联汽车有望成为抢占先机、赶超发展的突破口'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '我国新能源汽车技术水平大幅提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '突破',
            content: '以新能源汽车和智能网联汽车为突破口'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育形成若干家进入世界前十的新能源汽车企业'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提升',
            content: '新能源汽车骨干企业在全球的影响力和市场份额进一步提升'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '形成新能源汽车、智能网联汽车和先进节能汽车梯次合理的产业格局以及完善的产业配套体系'
          },
          {
            industryName: '新能源汽车技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|研发',
            content: '加快新能源汽车技术研发及产业化'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加大|推广',
            content: '加大新能源汽车推广应用力度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '逐步提高公共服务领域新能源汽车使用比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善|推广',
            content: '完善新能源汽车推广应用、尤其是使用环节的扶持政策体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立|发展|促进',
            content: '建立促进新能源汽车发展的长效机制'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导|提高',
            content: '引导生产企业不断提高新能源汽车产销比例'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '不断完善新能源汽车标准体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '提高',
            content: '提高新能源汽车生产企业及产品准入门槛'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '强化',
            content: '强化新能源汽车生产监管'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '建立',
            content: '建立健全新能源汽车分类注册登记、交通管理、税收保险、车辆维修、二手车管理等政策体系'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推广',
            content: '探索新能源汽车与可再生能源、智能电网的深度融合和协同发展的商业化推广模式'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|加大',
            content: '加大对汽车关键零部件、新能源汽车、智能网联汽车等重点领域的支持力度'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '优化完善新能源汽车标准体系'
          }
        ],
        rpt: '2017/04/25',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '三部委关于印发《汽车产业中长期发展规划》的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zbgy/art/2020/art_52eeb9d6f2bf484398fc2505e747afc9.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '鼓励采用',
            content: '鼓励采用新能源汽车和符合标准的电动三轮车'
          }
        ],
        rpt: '2016/03/17',
        region: '中央',
        org: '中华人民共和国商务部',
        title: '商务部等六部门关于印发《全国电子商务物流发展专项规划（2016-2020年）》的通知',
        url: 'http://file.mofcom.gov.cn/article/gkml/201603/20160301280799.shtml'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展|推动',
            content: '推动新能源汽车产业健康可持续发展'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '相关进展情况及时报送节能与新能源汽车产业发展部际联席会议办公室'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '是新能源汽车产业发展的关键'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '但是目前动力电池产品性能、质量和成本仍然难以满足新能源汽车推广普及需求'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '落实|发展',
            content: '落实新能源汽车发展战略目标'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '调整完善动力电池行业规范条件、新能源汽车生产企业及产品准入管理规则等管理措施'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '发布实施并不断完善新能源汽车标准化路线图'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加强',
            content: '鼓励研究机构、检测认证机构以及动力电池、新能源汽车生产企业加强产品测试验证等相关数据积累'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '完善',
            content: '完善新能源汽车安全监管体系建设'
          }
        ],
        rpt: '2017/03/01',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '四部委关于印发《促进汽车动力电池产业发展行动方案》的通知',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zbgy/art/2020/art_9e46501d77f949b0bd6edabbf7bc54b8.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '发展',
            content: '重点发展新能源汽车'
          },
          {
            industryName: '电动汽车智能化技术',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '支持|研发',
            content:
              '重点支持动力电池与电池管理系统、驱动电机及控制系统、整车控制和信息系统、电动汽车智能化技术、快速充电等关键技术研发'
          }
        ],
        rpt: '2017/07/27',
        region: '中央',
        org: '中华人民共和国工业和信息化部',
        title: '五部委关于加强长江经济带工业绿色发展的指导意见',
        url: 'https://www.miit.gov.cn/zwgk/zcwj/wjfb/zh/art/2020/art_a41475d78c534dc4b3e9cffd02fb4523.html'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广',
            content: '加快推广新能源汽车和节能环保汽车'
          }
        ],
        rpt: '2018/04/14',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '中共中央 国务院关于支持海南全面深化改革开放的指导意见',
        url: 'http://www.gov.cn/zhengce/2018-04/14/content_5282456.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '研发|推动',
            content: '推动新能源汽车、智能电网等技术的研发应用'
          }
        ],
        rpt: '2016/05/19',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '中共中央 国务院印发《国家创新驱动发展战略纲要》',
        url: 'http://www.gov.cn/xinwen/2016-05/19/content_5074812.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '培育',
            content: '培育壮大新能源、节能环保、新能源汽车等产业'
          }
        ],
        rpt: '2019/02/18',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '中共中央 国务院印发《粤港澳大湾区发展规划纲要》',
        url: 'http://www.gov.cn/zhengce/2019-02/18/content_5366593.htm'
      },
      {
        contentList: [
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '大力发展',
            content: '大力发展节能与新能源汽车'
          },
          {
            industryName: '节能与新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '引导',
            content: '积极引导消费者购买节能与新能源汽车、高能效家电、节水型器具等节能环保低碳产品'
          }
        ],
        rpt: '2015/05/06',
        region: '中央',
        org: '中华人民共和国农业农村部',
        title: '中共中央、国务院出台文件加快推进生态文明建设附：《意见》(全文)',
        url: 'http://www.moa.gov.cn/gk/zcfg/qnhnzc/201505/t20150506_4581636.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '加快|推广',
            content: '加快推广新能源汽车和节能环保汽车'
          }
        ],
        rpt: '2019/05/12',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title: '中共中央办公厅 国务院办公厅印发《国家生态文明试验区（海南）实施方案》',
        url: 'http://www.gov.cn/zhengce/2019-05/12/content_5390904.htm'
      },
      {
        contentList: [
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '打造',
            content: '打造一批航空、中医药、新型光电、新材料、新能源汽车、节能环保等产业创新平台和载体'
          },
          {
            industryName: '新能源汽车',
            industryCode: 'AC003005',
            emotion: 1,
            typeName: '推广',
            content: '实施新能源汽车推广计划'
          }
        ],
        rpt: '2017/10/02',
        region: '中央',
        org: '中华人民共和国中央人民政府',
        title:
          '中共中央办公厅 国务院办公厅印发《国家生态文明试验区（江西）实施方案》和《国家生态文明试验区（贵州）实施方案》',
        url: 'http://www.gov.cn/zhengce/2017-10/02/content_5229318.htm'
      }
    ]
  }
  if (data.region) {
    let regions = ['全国', '重庆市', '四川省', '陕西省', '贵州省']
    reponse.result = reponse.result.filter((item) => item.region === regions[data.region])
  }
  if (data.st) {
    let startDate = new Date(data.st).getTime()
    let endDate = new Date(data.et).getTime()
    reponse.result = reponse.result.filter((item) => {
      let rptStamp = new Date(item.rpt).getTime()
      return startDate <= rptStamp && endDate >= rptStamp
    })
  }
  if (data.org) {
    reponse.result = []
  }
  return reponse
  return http.get(`/policy/industry/${data.industryCode}`, data)
}

// 竞争格局
export const competitionIndex = async (data) => {
  await sleep(500)
  return {
    result: [
      {
        rpt: '2014',
        value: 4458.423413
      },
      {
        rpt: '2015',
        value: 3749.710449
      },
      {
        rpt: '2016',
        value: 2625.667108
      },
      {
        rpt: '2017',
        value: 3803.225506
      },
      {
        rpt: '2018',
        value: 3447.894387
      },
      {
        rpt: '2019',
        value: 5159.804469
      }
    ]
  }
}

export const competitionBarData = async (data) => {
  sleep(500)
  return {
    result: [
      { key: 78000000000, value: 1 },
      { key: 70000001000, value: 1 },
      { key: 30937600000, value: 1 },
      { key: 17126749753, value: 1 },
      { key: 10109592600, value: 1 },
      { key: 8000000000, value: 1 },
      { key: 7307413500, value: 1 },
      { key: 7109700000, value: 1 },
      { key: 7000000000, value: 1 },
      { key: 6000000000, value: 2 },
      { key: 5959800000, value: 1 },
      { key: 5645711170, value: 1 },
      { key: 5297726000, value: 1 },
      { key: 5000000000, value: 3 },
      { key: 4706303500, value: 1 },
      { key: 4670000100, value: 1 },
      { key: 4237500000, value: 1 },
      { key: 4000000000, value: 1 },
      { key: 3863199949, value: 1 },
      { key: 3740000000, value: 1 },
      { key: 3706330000, value: 1 },
      { key: 3600000000, value: 1 },
      { key: 3500000000, value: 2 },
      { key: 3436308000, value: 1 },
      { key: 3300000000, value: 1 },
      { key: 3222799870, value: 1 },
      { key: 3200000000, value: 1 },
      { key: 3100000000, value: 1 },
      { key: 3016666620, value: 1 },
      { key: 3000000000, value: 3 },
      { key: 2897194500, value: 1 },
      { key: 2750000000, value: 1 },
      { key: 2540999420, value: 1 },
      { key: 2500000000, value: 6 },
      { key: 2468591360, value: 1 },
      { key: 2404000000, value: 1 },
      { key: 2360000000, value: 1 },
      { key: 2275104000, value: 1 },
      { key: 2249999870, value: 1 },
      { key: 2200000000, value: 1 },
      { key: 2192000000, value: 1 },
      { key: 2188189950, value: 1 },
      { key: 2168187500, value: 1 },
      { key: 2111687500, value: 1 },
      { key: 2100000000, value: 1 },
      { key: 2079200000, value: 1 },
      { key: 2055209970, value: 1 },
      { key: 2040819970, value: 1 },
      { key: 2020776190, value: 1 },
      { key: 2010000000, value: 1 },
      { key: 2000000000, value: 13 },
      { key: 1980000000, value: 1 },
      { key: 1947000000, value: 1 },
      { key: 1930000000, value: 1 },
      { key: 1895280000, value: 1 },
      { key: 1880420000, value: 1 },
      { key: 1732231940, value: 1 },
      { key: 1680000000, value: 1 },
      { key: 1650000000, value: 2 },
      { key: 1536050560, value: 1 },
      { key: 1500000000, value: 4 },
      { key: 1458000000, value: 1 },
      { key: 1451000000, value: 1 },
      { key: 1400000000, value: 1 },
      { key: 1393235306, value: 1 },
      { key: 1350000000, value: 1 },
      { key: 1346577330, value: 1 },
      { key: 1332329470, value: 1 },
      { key: 1290000000, value: 1 },
      { key: 1271160060, value: 1 },
      { key: 1257411262, value: 1 },
      { key: 1250000000, value: 1 },
      { key: 1200000000, value: 7 },
      { key: 1195616260, value: 1 },
      { key: 1189664304, value: 1 },
      { key: 1176999940, value: 1 },
      { key: 1158960000, value: 1 },
      { key: 1130365440, value: 1 },
      { key: 1111110000, value: 1 },
      { key: 1106920000, value: 1 },
      { key: 1103335420, value: 1 },
      { key: 1100000000, value: 2 },
      { key: 1090221820, value: 1 },
      { key: 1080000000, value: 1 },
      { key: 1040000000, value: 1 },
      { key: 1034000000, value: 1 },
      { key: 1030000000, value: 1 },
      { key: 1029540853, value: 1 },
      { key: 1000000000, value: 52 },
      { key: 970000000, value: 1 },
      { key: 960000000, value: 1 },
      { key: 928000000, value: 1 },
      { key: 924261000, value: 1 },
      { key: 915000000, value: 1 },
      { key: 913704000, value: 1 },
      { key: 911826820, value: 1 },
      { key: 900000000, value: 3 },
      { key: 888880000, value: 1 },
      { key: 880000000, value: 2 },
      { key: 875035800, value: 1 },
      { key: 833000000, value: 1 },
      { key: 830000000, value: 1 },
      { key: 810000000, value: 1 },
      { key: 800557500, value: 1 },
      { key: 800000000, value: 13 },
      { key: 775000000, value: 1 },
      { key: 755645500, value: 1 },
      { key: 755409980, value: 1 },
      { key: 721000000, value: 1 },
      { key: 710970000, value: 1 },
      { key: 708850180, value: 1 },
      { key: 702979695, value: 1 },
      { key: 700000000, value: 1 },
      { key: 689149820, value: 1 },
      { key: 685070020, value: 1 },
      { key: 685069990, value: 2 },
      { key: 680000000, value: 1 },
      { key: 666670020, value: 1 },
      { key: 662624040, value: 1 },
      { key: 660000000, value: 4 },
      { key: 650000000, value: 2 },
      { key: 640651000, value: 1 },
      { key: 635625000, value: 1 },
      { key: 625720000, value: 1 },
      { key: 625000000, value: 1 },
      { key: 620000000, value: 1 },
      { key: 619686910, value: 1 },
      { key: 610000000, value: 1 },
      { key: 600000000, value: 17 },
      { key: 597000000, value: 1 },
      { key: 590953020, value: 1 },
      { key: 580713540, value: 1 },
      { key: 580000000, value: 1 },
      { key: 565104700, value: 1 },
      { key: 565000000, value: 1 },
      { key: 560000000, value: 2 },
      { key: 558668700, value: 1 },
      { key: 553673020, value: 1 },
      { key: 551500000, value: 1 },
      { key: 550000000, value: 2 },
      { key: 548056000, value: 3 },
      { key: 526620000, value: 1 },
      { key: 513802492, value: 1 },
      { key: 510000000, value: 1 },
      { key: 501000000, value: 1 },
      { key: 500000000, value: 70 },
      { key: 488880000, value: 2 },
      { key: 480000000, value: 2 },
      { key: 475000000, value: 1 },
      { key: 470358000, value: 1 },
      { key: 470000000, value: 1 },
      { key: 464689984, value: 1 },
      { key: 463658176, value: 1 },
      { key: 460593654, value: 1 },
      { key: 455000000, value: 1 },
      { key: 450000000, value: 4 },
      { key: 445728576, value: 1 },
      { key: 445295488, value: 1 },
      { key: 442666656, value: 1 },
      { key: 438707488, value: 1 },
      { key: 431441152, value: 1 },
      { key: 428100000, value: 1 },
      { key: 420551136, value: 1 },
      { key: 420000000, value: 2 },
      { key: 410449984, value: 1 },
      { key: 400000000, value: 15 },
      { key: 398000000, value: 1 },
      { key: 394560000, value: 1 },
      { key: 386660000, value: 1 },
      { key: 386000000, value: 1 },
      { key: 383613472, value: 1 },
      { key: 383000000, value: 1 },
      { key: 380000000, value: 3 },
      { key: 366020000, value: 1 },
      { key: 360000000, value: 1 },
      { key: 357949056, value: 1 },
      { key: 356700000, value: 1 },
      { key: 355485000, value: 2 },
      { key: 350738048, value: 1 },
      { key: 350010000, value: 1 },
      { key: 350000000, value: 1 },
      { key: 348800000, value: 1 },
      { key: 343881472, value: 1 },
      { key: 343314208, value: 1 },
      { key: 342534995, value: 1 },
      { key: 333333400, value: 1 },
      { key: 330000000, value: 4 },
      { key: 326971400, value: 1 },
      { key: 326400000, value: 1 },
      { key: 326180000, value: 1 },
      { key: 325000000, value: 1 },
      { key: 320000000, value: 2 },
      { key: 319590000, value: 1 },
      { key: 318000000, value: 1 },
      { key: 316532000, value: 1 },
      { key: 312431034, value: 1 },
      { key: 311170000, value: 1 },
      { key: 307692288, value: 1 },
      { key: 306000000, value: 2 },
      { key: 302500000, value: 1 },
      { key: 301000000, value: 1 },
      { key: 300000000, value: 64 },
      { key: 290327168, value: 1 },
      { key: 289700000, value: 1 },
      { key: 289689984, value: 1 },
      { key: 288880000, value: 1 },
      { key: 288000000, value: 2 },
      { key: 285294112, value: 1 },
      { key: 285070016, value: 1 },
      { key: 282500000, value: 1 },
      { key: 280000000, value: 2 },
      { key: 267000000, value: 1 },
      { key: 261471568, value: 1 },
      { key: 260326596, value: 1 },
      { key: 260000000, value: 2 },
      { key: 255000000, value: 1 },
      { key: 250000000, value: 15 },
      { key: 248839500, value: 1 },
      { key: 246625200, value: 2 },
      { key: 241600000, value: 1 },
      { key: 234904488, value: 1 },
      { key: 233062500, value: 1 },
      { key: 232000000, value: 1 },
      { key: 230802500, value: 1 },
      { key: 230000000, value: 4 },
      { key: 228128304, value: 1 },
      { key: 228000000, value: 2 },
      { key: 225947327, value: 1 },
      { key: 225000000, value: 1 },
      { key: 220000000, value: 7 },
      { key: 218000000, value: 1 },
      { key: 217890000, value: 1 },
      { key: 217274600, value: 1 },
      { key: 216000000, value: 1 },
      { key: 215680000, value: 1 },
      { key: 215384608, value: 1 },
      { key: 213291000, value: 2 },
      { key: 212581250, value: 1 },
      { key: 211000000, value: 1 },
      { key: 210000000, value: 2 },
      { key: 205520992, value: 3 },
      { key: 204000000, value: 1 },
      { key: 202228178, value: 1 },
      { key: 201000000, value: 1 },
      { key: 200010000, value: 3 },
      { key: 200000000, value: 118 },
      { key: 198000000, value: 1 },
      { key: 196000000, value: 2 },
      { key: 195169488, value: 1 },
      { key: 191500000, value: 1 },
      { key: 190687500, value: 1 },
      { key: 190000000, value: 1 },
      { key: 188880000, value: 1 },
      { key: 188000000, value: 1 },
      { key: 187709504, value: 1 },
      { key: 186660000, value: 1 },
      { key: 185000000, value: 1 },
      { key: 182228624, value: 1 },
      { key: 182000000, value: 1 },
      { key: 181556800, value: 1 },
      { key: 181230000, value: 1 },
      { key: 181052632, value: 1 },
      { key: 180000000, value: 8 },
      { key: 175700000, value: 1 },
      { key: 172500000, value: 1 },
      { key: 171000000, value: 1 },
      { key: 170965056, value: 1 },
      { key: 170000000, value: 4 },
      { key: 168000000, value: 13 },
      { key: 166666700, value: 1 },
      { key: 166000000, value: 1 },
      { key: 165587700, value: 1 },
      { key: 162254400, value: 1 },
      { key: 161800000, value: 1 },
      { key: 160880000, value: 1 },
      { key: 160327500, value: 1 },
      { key: 160000000, value: 11 },
      { key: 158000000, value: 2 },
      { key: 157824000, value: 1 },
      { key: 156780000, value: 1 },
      { key: 156250000, value: 1 },
      { key: 156231072, value: 1 },
      { key: 151566721, value: 1 },
      { key: 151500000, value: 1 },
      { key: 150000000, value: 33 },
      { key: 148500000, value: 1 },
      { key: 145578000, value: 1 },
      { key: 145173571, value: 1 },
      { key: 144029904, value: 1 },
      { key: 144000000, value: 3 },
      { key: 142904970, value: 1 },
      { key: 141250000, value: 2 },
      { key: 140625000, value: 1 },
      { key: 140000000, value: 3 },
      { key: 139534884, value: 1 },
      { key: 138620000, value: 1 },
      { key: 137013998, value: 1 },
      { key: 136900000, value: 1 },
      { key: 135769664, value: 1 },
      { key: 134000000, value: 1 },
      { key: 133990000, value: 1 },
      { key: 130000000, value: 5 },
      { key: 128549104, value: 1 },
      { key: 128210000, value: 1 },
      { key: 128000000, value: 1 },
      { key: 127974600, value: 1 },
      { key: 127125000, value: 1 },
      { key: 127050000, value: 1 },
      { key: 127000000, value: 1 },
      { key: 123622400, value: 1 },
      { key: 123000000, value: 2 },
      { key: 122000000, value: 1 },
      { key: 121632704, value: 1 },
      { key: 120939104, value: 1 },
      { key: 120000000, value: 44 },
      { key: 118000000, value: 3 },
      { key: 117995104, value: 1 },
      { key: 116900000, value: 1 },
      { key: 116880000, value: 1 },
      { key: 116000000, value: 1 },
      { key: 115949400, value: 1 },
      { key: 115433300, value: 1 },
      { key: 115000000, value: 1 },
      { key: 114269672, value: 1 },
      { key: 114224272, value: 1 },
      { key: 113755200, value: 1 },
      { key: 113000000, value: 1 },
      { key: 112000000, value: 1 },
      { key: 111600000, value: 1 },
      { key: 111111104, value: 1 },
      { key: 110000000, value: 11 },
      { key: 109990000, value: 1 },
      { key: 108800000, value: 2 },
      { key: 108693104, value: 1 },
      { key: 108570000, value: 1 },
      { key: 108426000, value: 1 },
      { key: 108276000, value: 1 },
      { key: 108120726, value: 1 },
      { key: 108000000, value: 8 },
      { key: 107812496, value: 1 },
      { key: 107000000, value: 3 },
      { key: 106800000, value: 1 },
      { key: 106780000, value: 1 },
      { key: 106000000, value: 3 },
      { key: 105937500, value: 1 },
      { key: 105600000, value: 1 },
      { key: 105000000, value: 4 },
      { key: 103000000, value: 1 },
      { key: 102760498, value: 1 },
      { key: 102040000, value: 2 },
      { key: 101800000, value: 1 },
      { key: 101010000, value: 1 },
      { key: 101000000, value: 3 },
      { key: 100890000, value: 1 },
      { key: 100800000, value: 1 },
      { key: 100600000, value: 1 },
      { key: 100547200, value: 1 },
      { key: 100160000, value: 1 },
      { key: 100080000, value: 1 },
      { key: 100030000, value: 1 },
      { key: 100020218, value: 1 },
      { key: 100011666, value: 1 },
      { key: 100010000, value: 1 },
      { key: 100000800, value: 1 },
      { key: 100000000, value: 512 },
      { key: 99999900, value: 1 },
      { key: 99999000, value: 1 },
      { key: 99990000, value: 4 },
      { key: 99900000, value: 1 },
      { key: 99800000, value: 2 },
      { key: 99575000, value: 1 },
      { key: 99000000, value: 4 },
      { key: 98875000, value: 1 },
      { key: 98000000, value: 2 },
      { key: 97000000, value: 1 },
      { key: 96680000, value: 1 },
      { key: 96579168, value: 1 },
      { key: 96000000, value: 1 },
      { key: 95216926, value: 1 },
      { key: 95000000, value: 2 },
      { key: 94500000, value: 1 },
      { key: 94389000, value: 1 },
      { key: 93908300, value: 1 },
      { key: 93282400, value: 1 },
      { key: 92000000, value: 1 },
      { key: 91680000, value: 1 },
      { key: 91000000, value: 1 },
      { key: 90240000, value: 1 },
      { key: 90070000, value: 1 },
      { key: 90000000, value: 21 },
      { key: 89275360, value: 1 },
      { key: 88890000, value: 1 },
      { key: 88880000, value: 3 },
      { key: 88600000, value: 1 },
      { key: 88000000, value: 7 },
      { key: 87680000, value: 1 },
      { key: 87000000, value: 1 },
      { key: 86800000, value: 1 },
      { key: 86000000, value: 3 },
      { key: 85000000, value: 5 },
      { key: 84647000, value: 1 },
      { key: 84000000, value: 1 },
      { key: 83520000, value: 1 },
      { key: 83055918, value: 1 },
      { key: 83000000, value: 1 },
      { key: 81880000, value: 1 },
      { key: 81080000, value: 1 },
      { key: 80800000, value: 1 },
      { key: 80770000, value: 1 },
      { key: 80600000, value: 1 },
      { key: 80500000, value: 1 },
      { key: 80020000, value: 1 },
      { key: 80000000, value: 96 },
      { key: 79990000, value: 1 },
      { key: 79628640, value: 1 },
      { key: 79000000, value: 1 },
      { key: 78900000, value: 1 },
      { key: 78000000, value: 1 },
      { key: 77792024, value: 1 },
      { key: 76684000, value: 1 },
      { key: 76250000, value: 1 },
      { key: 75964672, value: 1 },
      { key: 75563536, value: 1 },
      { key: 75428568, value: 1 },
      { key: 75000000, value: 4 },
      { key: 74539500, value: 1 },
      { key: 74282200, value: 1 },
      { key: 73270000, value: 1 },
      { key: 72000000, value: 2 },
      { key: 71428571, value: 1 },
      { key: 71390000, value: 1 },
      { key: 71097000, value: 3 },
      { key: 70625000, value: 3 },
      { key: 70000000, value: 21 },
      { key: 69025316, value: 1 },
      { key: 69000000, value: 1 },
      { key: 68880000, value: 2 },
      { key: 68507000, value: 2 },
      { key: 68506999, value: 1 },
      { key: 68369984, value: 1 },
      { key: 68000000, value: 14 },
      { key: 67890000, value: 1 },
      { key: 67880000, value: 1 },
      { key: 67500000, value: 1 },
      { key: 67000000, value: 1 },
      { key: 66990000, value: 1 },
      { key: 66880000, value: 2 },
      { key: 66660000, value: 1 },
      { key: 66610000, value: 1 },
      { key: 66436925, value: 1 },
      { key: 66000000, value: 4 },
      { key: 65681250, value: 1 },
      { key: 65416000, value: 1 },
      { key: 65000000, value: 7 },
      { key: 64516100, value: 1 },
      { key: 64500000, value: 1 },
      { key: 63562500, value: 1 },
      { key: 63500000, value: 1 },
      { key: 63347320, value: 1 },
      { key: 63270000, value: 1 },
      { key: 63000000, value: 2 },
      { key: 62500000, value: 2 },
      { key: 62499734, value: 1 },
      { key: 61880000, value: 1 },
      { key: 61800000, value: 1 },
      { key: 61105496, value: 1 },
      { key: 61100000, value: 1 },
      { key: 61062800, value: 1 },
      { key: 61000000, value: 1 },
      { key: 60532200, value: 1 },
      { key: 60200000, value: 1 },
      { key: 60180000, value: 1 },
      { key: 60060000, value: 2 },
      { key: 60027700, value: 1 },
      { key: 60010000, value: 9 },
      { key: 60000000, value: 88 },
      { key: 59990000, value: 1 },
      { key: 59700000, value: 1 },
      { key: 59000000, value: 1 },
      { key: 58880000, value: 4 },
      { key: 58823529, value: 1 },
      { key: 58800000, value: 2 },
      { key: 58228765, value: 1 },
      { key: 58027000, value: 1 },
      { key: 58000000, value: 7 },
      { key: 57971500, value: 1 },
      { key: 57000000, value: 2 },
      { key: 56900000, value: 1 },
      { key: 56250000, value: 1 },
      { key: 56100000, value: 1 },
      { key: 56000000, value: 11 },
      { key: 55800000, value: 1 },
      { key: 55700000, value: 1 },
      { key: 55550000, value: 1 },
      { key: 55498300, value: 1 },
      { key: 55200000, value: 1 },
      { key: 55000000, value: 9 },
      { key: 54945100, value: 1 },
      { key: 54805600, value: 1 },
      { key: 54805599, value: 1 },
      { key: 54250000, value: 1 },
      { key: 54000000, value: 1 },
      { key: 53980000, value: 1 },
      { key: 53800000, value: 1 },
      { key: 53000000, value: 2 },
      { key: 52636000, value: 1 },
      { key: 52630000, value: 1 },
      { key: 52470000, value: 1 },
      { key: 52050000, value: 1 },
      { key: 52000000, value: 3 },
      { key: 51980000, value: 1 },
      { key: 51923056, value: 1 },
      { key: 51880000, value: 2 },
      { key: 51800000, value: 3 },
      { key: 51781100, value: 1 },
      { key: 51600000, value: 1 },
      { key: 51380000, value: 1 },
      { key: 51340000, value: 1 },
      { key: 51296296, value: 1 },
      { key: 51250000, value: 2 },
      { key: 51163600, value: 1 },
      { key: 51150000, value: 1 },
      { key: 51000000, value: 15 },
      { key: 50880000, value: 1 },
      { key: 50800000, value: 3 },
      { key: 50688500, value: 1 },
      { key: 50500000, value: 2 },
      { key: 50478870, value: 1 },
      { key: 50278208, value: 1 },
      { key: 50180000, value: 2 },
      { key: 50110000, value: 1 },
      { key: 50080000, value: 2 },
      { key: 50031800, value: 1 },
      { key: 50010000, value: 5 },
      { key: 50000000, value: 827 },
      { key: 49990000, value: 1 },
      { key: 49800000, value: 1 },
      { key: 49767900, value: 1 },
      { key: 48571462, value: 1 },
      { key: 48369700, value: 1 },
      { key: 48000000, value: 4 },
      { key: 47812732, value: 1 },
      { key: 47798700, value: 1 },
      { key: 47639800, value: 1 },
      { key: 46916316, value: 1 },
      { key: 46666667, value: 1 },
      { key: 45652900, value: 1 },
      { key: 45644274, value: 1 },
      { key: 45610000, value: 1 },
      { key: 45600000, value: 1 },
      { key: 45200000, value: 1 },
      { key: 45000000, value: 5 },
      { key: 44750000, value: 1 },
      { key: 44042600, value: 1 },
      { key: 42375000, value: 1 },
      { key: 42330804, value: 1 },
      { key: 42000000, value: 3 },
      { key: 41734900, value: 1 },
      { key: 41666666, value: 1 },
      { key: 41269900, value: 1 },
      { key: 41000000, value: 2 },
      { key: 40268416, value: 1 },
      { key: 40000000, value: 36 },
      { key: 39000000, value: 1 },
      { key: 38990000, value: 1 },
      { key: 38880000, value: 1 },
      { key: 38843750, value: 1 },
      { key: 38800000, value: 1 },
      { key: 38680000, value: 1 },
      { key: 38632000, value: 1 },
      { key: 38550000, value: 1 },
      { key: 38500000, value: 1 },
      { key: 38000000, value: 11 },
      { key: 37940000, value: 1 },
      { key: 37670808, value: 1 },
      { key: 36980000, value: 1 },
      { key: 36900000, value: 4 },
      { key: 36800000, value: 2 },
      { key: 36600000, value: 1 },
      { key: 36583750, value: 1 },
      { key: 36235500, value: 1 },
      { key: 36080000, value: 1 },
      { key: 36000000, value: 15 },
      { key: 35800000, value: 2 },
      { key: 35548500, value: 2 },
      { key: 35312500, value: 2 },
      { key: 35129756, value: 1 },
      { key: 35072000, value: 1 },
      { key: 35000000, value: 14 },
      { key: 34500000, value: 2 },
      { key: 34253499, value: 1 },
      { key: 34090000, value: 1 },
      { key: 34065048, value: 1 },
      { key: 34000000, value: 1 },
      { key: 33800000, value: 1 },
      { key: 33750000, value: 1 },
      { key: 33553294, value: 1 },
      { key: 33500000, value: 1 },
      { key: 33333300, value: 2 },
      { key: 33023516, value: 1 },
      { key: 33000000, value: 5 },
      { key: 32060000, value: 1 },
      { key: 32000000, value: 11 },
      { key: 31800000, value: 2 },
      { key: 31680000, value: 1 },
      { key: 31580000, value: 1 },
      { key: 31492600, value: 1 },
      { key: 31450000, value: 1 },
      { key: 31111112, value: 1 },
      { key: 31000000, value: 7 },
      { key: 30890000, value: 1 },
      { key: 30860000, value: 1 },
      { key: 30800000, value: 2 },
      { key: 30303030, value: 1 },
      { key: 30280000, value: 3 },
      { key: 30260000, value: 1 },
      { key: 30200000, value: 1 },
      { key: 30160000, value: 1 },
      { key: 30100000, value: 2 },
      { key: 30080000, value: 1 },
      { key: 30010000, value: 8 },
      { key: 30000100, value: 1 },
      { key: 30000000, value: 438 },
      { key: 29998216, value: 1 },
      { key: 29990000, value: 3 },
      { key: 29980000, value: 1 },
      { key: 29889862, value: 1 },
      { key: 29745700, value: 1 },
      { key: 29737502, value: 1 },
      { key: 29500000, value: 1 },
      { key: 29200000, value: 1 },
      { key: 29000000, value: 3 },
      { key: 28930000, value: 1 },
      { key: 28880000, value: 3 },
      { key: 28571429, value: 1 },
      { key: 28250000, value: 1 },
      { key: 28000000, value: 8 },
      { key: 27667000, value: 1 },
      { key: 27630000, value: 1 },
      { key: 27215500, value: 1 },
      { key: 27100000, value: 1 },
      { key: 27000000, value: 2 },
      { key: 26890000, value: 1 },
      { key: 26780000, value: 1 },
      { key: 26700000, value: 2 },
      { key: 26666668, value: 1 },
      { key: 26660000, value: 1 },
      { key: 26500000, value: 2 },
      { key: 26373626, value: 1 },
      { key: 26315900, value: 1 },
      { key: 26000000, value: 14 },
      { key: 25890000, value: 1 },
      { key: 25800000, value: 2 },
      { key: 25680000, value: 1 },
      { key: 25642000, value: 1 },
      { key: 25600000, value: 1 },
      { key: 25560000, value: 1 },
      { key: 25555600, value: 1 },
      { key: 25300000, value: 2 },
      { key: 25100000, value: 1 },
      { key: 25004884, value: 1 },
      { key: 25000000, value: 26 },
      { key: 24621422, value: 1 },
      { key: 24128824, value: 1 },
      { key: 24000000, value: 6 },
      { key: 23980000, value: 1 },
      { key: 23857100, value: 1 },
      { key: 23333356, value: 1 },
      { key: 23282100, value: 1 },
      { key: 23157894, value: 1 },
      { key: 23000000, value: 1 },
      { key: 22876159, value: 1 },
      { key: 22800000, value: 1 },
      { key: 22751040, value: 1 },
      { key: 22616316, value: 1 },
      { key: 22400000, value: 1 },
      { key: 22200000, value: 1 },
      { key: 22000000, value: 8 },
      { key: 21996200, value: 1 },
      { key: 21918400, value: 1 },
      { key: 21800000, value: 6 },
      { key: 21680000, value: 2 },
      { key: 21557988, value: 1 },
      { key: 21500000, value: 2 },
      { key: 21485915, value: 1 },
      { key: 21314000, value: 1 },
      { key: 21187500, value: 2 },
      { key: 21110000, value: 1 },
      { key: 21057332, value: 1 },
      { key: 21052600, value: 1 },
      { key: 21000000, value: 13 },
      { key: 20998280, value: 1 },
      { key: 20963141, value: 1 },
      { key: 20880000, value: 1 },
      { key: 20860000, value: 1 },
      { key: 20830000, value: 1 },
      { key: 20800000, value: 6 },
      { key: 20750000, value: 1 },
      { key: 20697700, value: 1 },
      { key: 20680000, value: 1 },
      { key: 20620000, value: 1 },
      { key: 20600000, value: 1 },
      { key: 20580000, value: 1 },
      { key: 20552100, value: 1 },
      { key: 20552099, value: 1 },
      { key: 20500000, value: 3 },
      { key: 20360000, value: 1 },
      { key: 20350000, value: 1 },
      { key: 20300000, value: 1 },
      { key: 20200000, value: 2 },
      { key: 20180000, value: 3 },
      { key: 20170000, value: 1 },
      { key: 20160000, value: 1 },
      { key: 20080000, value: 5 },
      { key: 20060000, value: 1 },
      { key: 20030000, value: 1 },
      { key: 20020000, value: 2 },
      { key: 20010000, value: 5 },
      { key: 20000100, value: 1 },
      { key: 20000000, value: 738 },
      { key: 19990000, value: 1 },
      { key: 19907160, value: 1 },
      { key: 19800000, value: 3 },
      { key: 19775000, value: 1 },
      { key: 19680000, value: 1 },
      { key: 19459440, value: 1 },
      { key: 19390000, value: 2 },
      { key: 19050000, value: 1 },
      { key: 19014000, value: 1 },
      { key: 19000000, value: 1 },
      { key: 18990000, value: 1 },
      { key: 18972000, value: 1 },
      { key: 18910500, value: 1 },
      { key: 18900000, value: 1 },
      { key: 18880000, value: 1 },
      { key: 18740000, value: 1 },
      { key: 18662962, value: 1 },
      { key: 18660000, value: 1 },
      { key: 18600000, value: 2 },
      { key: 18455608, value: 1 },
      { key: 18060000, value: 1 },
      { key: 18040000, value: 1 },
      { key: 18000000, value: 23 },
      { key: 17990000, value: 1 },
      { key: 17970000, value: 1 },
      { key: 17890000, value: 1 },
      { key: 17586000, value: 1 },
      { key: 17580000, value: 1 },
      { key: 17570190, value: 1 },
      { key: 17536000, value: 1 },
      { key: 17367520, value: 1 },
      { key: 17361124, value: 1 },
      { key: 17126749, value: 1 },
      { key: 17000000, value: 7 },
      { key: 16950000, value: 1 },
      { key: 16888888, value: 1 },
      { key: 16880000, value: 4 },
      { key: 16869000, value: 1 },
      { key: 16800000, value: 12 },
      { key: 16780000, value: 1 },
      { key: 16680000, value: 1 },
      { key: 16647201, value: 1 },
      { key: 16600000, value: 1 },
      { key: 16580000, value: 1 },
      { key: 16350000, value: 1 },
      { key: 16280000, value: 1 },
      { key: 16000000, value: 24 },
      { key: 15880000, value: 3 },
      { key: 15800000, value: 5 },
      { key: 15699999, value: 1 },
      { key: 15660000, value: 1 },
      { key: 15625000, value: 1 },
      { key: 15200000, value: 1 },
      { key: 15080000, value: 1 },
      { key: 15054564, value: 1 },
      { key: 15028000, value: 1 },
      { key: 15000000, value: 96 },
      { key: 14900000, value: 1 },
      { key: 14831250, value: 2 },
      { key: 14600000, value: 1 },
      { key: 14400000, value: 1 },
      { key: 14195554, value: 1 },
      { key: 14000000, value: 4 },
      { key: 13880000, value: 1 },
      { key: 13800000, value: 2 },
      { key: 13798600, value: 1 },
      { key: 13770000, value: 1 },
      { key: 13749900, value: 1 },
      { key: 13701400, value: 1 },
      { key: 13680000, value: 2 },
      { key: 13600000, value: 2 },
      { key: 13500000, value: 3 },
      { key: 13483000, value: 1 },
      { key: 13444404, value: 1 },
      { key: 13333333, value: 2 },
      { key: 13282400, value: 1 },
      { key: 13190000, value: 1 },
      { key: 13130000, value: 1 },
      { key: 13071894, value: 1 },
      { key: 13045990, value: 1 },
      { key: 13000000, value: 16 },
      { key: 12897500, value: 1 },
      { key: 12857100, value: 1 },
      { key: 12800000, value: 3 },
      { key: 12640000, value: 1 },
      { key: 12600000, value: 2 },
      { key: 12580000, value: 1 },
      { key: 12500000, value: 5 },
      { key: 12380952, value: 1 },
      { key: 12359375, value: 1 },
      { key: 12345679, value: 1 },
      { key: 12300000, value: 2 },
      { key: 12200000, value: 1 },
      { key: 12100000, value: 1 },
      { key: 12030000, value: 1 },
      { key: 12000000, value: 72 },
      { key: 11961630, value: 1 },
      { key: 11880000, value: 2 },
      { key: 11813700, value: 1 },
      { key: 11800000, value: 5 },
      { key: 11764705, value: 1 },
      { key: 11764700, value: 2 },
      { key: 11760000, value: 1 },
      { key: 11680000, value: 1 },
      { key: 11665500, value: 1 },
      { key: 11660000, value: 3 },
      { key: 11600000, value: 1 },
      { key: 11590000, value: 1 },
      { key: 11586952, value: 1 },
      { key: 11518000, value: 1 },
      { key: 11500000, value: 2 },
      { key: 11473429, value: 1 },
      { key: 11470000, value: 1 },
      { key: 11400000, value: 1 },
      { key: 11380000, value: 1 },
      { key: 11376330, value: 1 },
      { key: 11375520, value: 2 },
      { key: 11363636, value: 1 },
      { key: 11337867, value: 1 },
      { key: 11300000, value: 1 },
      { key: 11250000, value: 1 },
      { key: 11240000, value: 1 },
      { key: 11230000, value: 2 },
      { key: 11220000, value: 1 },
      { key: 11180000, value: 4 },
      { key: 11111111, value: 1 },
      { key: 11110000, value: 2 },
      { key: 11100000, value: 1 },
      { key: 11000000, value: 39 },
      { key: 10980000, value: 1 },
      { key: 10965000, value: 1 },
      { key: 10923077, value: 1 },
      { key: 10900000, value: 3 },
      { key: 10880000, value: 4 },
      { key: 10824105, value: 1 },
      { key: 10800000, value: 14 },
      { key: 10770000, value: 1 },
      { key: 10760000, value: 1 },
      { key: 10757776, value: 1 },
      { key: 10680000, value: 3 },
      { key: 10660000, value: 2 },
      { key: 10602420, value: 1 },
      { key: 10600000, value: 5 },
      { key: 10580000, value: 2 },
      { key: 10526316, value: 2 },
      { key: 10515000, value: 1 },
      { key: 10500000, value: 14 },
      { key: 10490000, value: 1 },
      { key: 10390000, value: 1 },
      { key: 10280800, value: 1 },
      { key: 10280000, value: 2 },
      { key: 10210000, value: 1 },
      { key: 10208333, value: 1 },
      { key: 10204082, value: 2 },
      { key: 10200000, value: 3 },
      { key: 10160000, value: 2 },
      { key: 10121127, value: 1 },
      { key: 10120000, value: 1 },
      { key: 10100000, value: 11 },
      { key: 10090000, value: 1 },
      { key: 10080000, value: 14 },
      { key: 10060000, value: 4 },
      { key: 10050000, value: 1 },
      { key: 10033445, value: 1 },
      { key: 10030000, value: 2 },
      { key: 10020000, value: 1 },
      { key: 10010000, value: 24 },
      { key: 10000100, value: 1 },
      { key: 10000000, value: 2726 },
      { key: 9990000, value: 8 },
      { key: 9970000, value: 1 },
      { key: 9900000, value: 3 },
      { key: 9887500, value: 1 },
      { key: 9860470, value: 1 },
      { key: 9800000, value: 14 },
      { key: 9700000, value: 3 },
      { key: 9638560, value: 1 },
      { key: 9600384, value: 1 },
      { key: 9600000, value: 5 },
      { key: 9580000, value: 2 },
      { key: 9500000, value: 4 },
      { key: 9350000, value: 1 },
      { key: 9342414, value: 1 },
      { key: 9249200, value: 1 },
      { key: 9152000, value: 1 },
      { key: 9100416, value: 1 },
      { key: 9020000, value: 1 },
      { key: 9000000, value: 25 },
      { key: 8980000, value: 1 },
      { key: 8932102, value: 1 },
      { key: 8905910, value: 1 },
      { key: 8900000, value: 1 },
      { key: 8888880, value: 1 },
      { key: 8880000, value: 6 },
      { key: 8850000, value: 1 },
      { key: 8805700, value: 1 },
      { key: 8800000, value: 10 },
      { key: 8768000, value: 2 },
      { key: 8750000, value: 1 },
      { key: 8680000, value: 2 },
      { key: 8666000, value: 1 },
      { key: 8660000, value: 1 },
      { key: 8600000, value: 5 },
      { key: 8531640, value: 1 },
      { key: 8500000, value: 4 },
      { key: 8475000, value: 1 },
      { key: 8380000, value: 1 },
      { key: 8369200, value: 1 },
      { key: 8358200, value: 1 },
      { key: 8350000, value: 1 },
      { key: 8268000, value: 1 },
      { key: 8250000, value: 1 },
      { key: 8205128, value: 1 },
      { key: 8200000, value: 1 },
      { key: 8180000, value: 1 },
      { key: 8100000, value: 1 },
      { key: 8070000, value: 1 },
      { key: 8000000, value: 208 },
      { key: 7992327, value: 1 },
      { key: 7900000, value: 1 },
      { key: 7800000, value: 2 },
      { key: 7777000, value: 1 },
      { key: 7770000, value: 1 },
      { key: 7700000, value: 1 },
      { key: 7690000, value: 2 },
      { key: 7653061, value: 1 },
      { key: 7600000, value: 1 },
      { key: 7510000, value: 1 },
      { key: 7500000, value: 4 },
      { key: 7236600, value: 1 },
      { key: 7200000, value: 1 },
      { key: 7180000, value: 1 },
      { key: 7062500, value: 1 },
      { key: 7031936, value: 1 },
      { key: 7030500, value: 1 },
      { key: 7000000, value: 19 },
      { key: 6944500, value: 1 },
      { key: 6944444, value: 1 },
      { key: 6903700, value: 1 },
      { key: 6900000, value: 1 },
      { key: 6890000, value: 1 },
      { key: 6864401, value: 1 },
      { key: 6850700, value: 1 },
      { key: 6850699, value: 1 },
      { key: 6850000, value: 2 },
      { key: 6800000, value: 15 },
      { key: 6780000, value: 1 },
      { key: 6680000, value: 5 },
      { key: 6670000, value: 1 },
      { key: 6660000, value: 9 },
      { key: 6613700, value: 1 },
      { key: 6600000, value: 11 },
      { key: 6500000, value: 7 },
      { key: 6417112, value: 1 },
      { key: 6400000, value: 3 },
      { key: 6398730, value: 1 },
      { key: 6356250, value: 1 },
      { key: 6300000, value: 4 },
      { key: 6250000, value: 1 },
      { key: 6233332, value: 1 },
      { key: 6180000, value: 2 },
      { key: 6100000, value: 5 },
      { key: 6050000, value: 1 },
      { key: 6030000, value: 1 },
      { key: 6010000, value: 1 },
      { key: 6000000, value: 283 },
      { key: 5980000, value: 1 },
      { key: 5960000, value: 1 },
      { key: 5950000, value: 1 },
      { key: 5920000, value: 1 },
      { key: 5900000, value: 1 },
      { key: 5882353, value: 1 },
      { key: 5880000, value: 4 },
      { key: 5860000, value: 1 },
      { key: 5833334, value: 1 },
      { key: 5800000, value: 20 },
      { key: 5700000, value: 2 },
      { key: 5690000, value: 1 },
      { key: 5687760, value: 1 },
      { key: 5681818, value: 1 },
      { key: 5680000, value: 2 },
      { key: 5670000, value: 2 },
      { key: 5660000, value: 2 },
      { key: 5625000, value: 1 },
      { key: 5610389, value: 1 },
      { key: 5600000, value: 13 },
      { key: 5580000, value: 1 },
      { key: 5560000, value: 1 },
      { key: 5550000, value: 1 },
      { key: 5520000, value: 1 },
      { key: 5500000, value: 15 },
      { key: 5480560, value: 1 },
      { key: 5427800, value: 1 },
      { key: 5400000, value: 2 },
      { key: 5330000, value: 1 },
      { key: 5322993, value: 1 },
      { key: 5300000, value: 1 },
      { key: 5296875, value: 1 },
      { key: 5280000, value: 1 },
      { key: 5250000, value: 1 },
      { key: 5200000, value: 11 },
      { key: 5180000, value: 17 },
      { key: 5170000, value: 2 },
      { key: 5160000, value: 1 },
      { key: 5150000, value: 1 },
      { key: 5121000, value: 1 },
      { key: 5120000, value: 1 },
      { key: 5113636, value: 1 },
      { key: 5100000, value: 28 },
      { key: 5081800, value: 1 },
      { key: 5080000, value: 10 },
      { key: 5070000, value: 1 },
      { key: 5060000, value: 4 },
      { key: 5050000, value: 5 },
      { key: 5030000, value: 3 },
      { key: 5017555, value: 1 },
      { key: 5010000, value: 18 },
      { key: 5006600, value: 1 },
      { key: 5000000, value: 2600 },
      { key: 4998980, value: 1 },
      { key: 4990000, value: 1 },
      { key: 4940000, value: 1 },
      { key: 4930000, value: 1 },
      { key: 4918129, value: 1 },
      { key: 4900000, value: 5 },
      { key: 4880000, value: 1 },
      { key: 4849770, value: 1 },
      { key: 4818390, value: 1 },
      { key: 4800000, value: 16 },
      { key: 4730000, value: 1 },
      { key: 4697800, value: 1 },
      { key: 4680000, value: 1 },
      { key: 4660000, value: 1 },
      { key: 4600000, value: 2 },
      { key: 4585000, value: 1 },
      { key: 4510000, value: 1 },
      { key: 4500000, value: 9 },
      { key: 4480000, value: 1 },
      { key: 4400000, value: 1 },
      { key: 4360000, value: 1 },
      { key: 4300000, value: 1 },
      { key: 4286000, value: 1 },
      { key: 4265820, value: 1 },
      { key: 4248300, value: 1 },
      { key: 4218600, value: 1 },
      { key: 4200000, value: 1 },
      { key: 4171169, value: 1 },
      { key: 4110420, value: 1 },
      { key: 4090000, value: 1 },
      { key: 4080000, value: 2 },
      { key: 4065200, value: 1 },
      { key: 4050000, value: 1 },
      { key: 4000000, value: 67 },
      { key: 3990000, value: 1 },
      { key: 3980000, value: 4 },
      { key: 3884375, value: 1 },
      { key: 3880000, value: 1 },
      { key: 3800000, value: 15 },
      { key: 3750000, value: 1 },
      { key: 3700000, value: 2 },
      { key: 3690000, value: 1 },
      { key: 3680000, value: 2 },
      { key: 3655000, value: 1 },
      { key: 3650000, value: 3 },
      { key: 3600000, value: 27 },
      { key: 3580000, value: 2 },
      { key: 3554850, value: 1 },
      { key: 3531250, value: 2 },
      { key: 3506173, value: 1 },
      { key: 3500000, value: 23 },
      { key: 3473700, value: 1 },
      { key: 3400000, value: 1 },
      { key: 3390000, value: 1 },
      { key: 3333300, value: 1 },
      { key: 3300000, value: 2 },
      { key: 3291639, value: 1 },
      { key: 3280000, value: 1 },
      { key: 3210000, value: 1 },
      { key: 3200000, value: 6 },
      { key: 3180000, value: 2 },
      { key: 3178000, value: 1 },
      { key: 3160000, value: 1 },
      { key: 3115000, value: 1 },
      { key: 3100000, value: 5 },
      { key: 3080000, value: 1 },
      { key: 3060000, value: 2 },
      { key: 3050000, value: 1 },
      { key: 3033334, value: 1 },
      { key: 3020000, value: 1 },
      { key: 3010000, value: 5 },
      { key: 3000000, value: 1217 },
      { key: 2980000, value: 1 },
      { key: 2900000, value: 1 },
      { key: 2890000, value: 1 },
      { key: 2880000, value: 7 },
      { key: 2860000, value: 1 },
      { key: 2857143, value: 1 },
      { key: 2800000, value: 18 },
      { key: 2740280, value: 1 },
      { key: 2700000, value: 2 },
      { key: 2680000, value: 1 },
      { key: 2660000, value: 1 },
      { key: 2600000, value: 11 },
      { key: 2580000, value: 1 },
      { key: 2575693, value: 1 },
      { key: 2560000, value: 1 },
      { key: 2553000, value: 1 },
      { key: 2547000, value: 1 },
      { key: 2517791, value: 1 },
      { key: 2500000, value: 6 },
      { key: 2488395, value: 1 },
      { key: 2480000, value: 1 },
      { key: 2412000, value: 1 },
      { key: 2400000, value: 3 },
      { key: 2380000, value: 1 },
      { key: 2317919, value: 1 },
      { key: 2300000, value: 3 },
      { key: 2280000, value: 2 },
      { key: 2222300, value: 1 },
      { key: 2222200, value: 1 },
      { key: 2220000, value: 1 },
      { key: 2210000, value: 1 },
      { key: 2200000, value: 7 },
      { key: 2180000, value: 7 },
      { key: 2170000, value: 1 },
      { key: 2160000, value: 2 },
      { key: 2140000, value: 2 },
      { key: 2137400, value: 1 },
      { key: 2121292, value: 1 },
      { key: 2120000, value: 1 },
      { key: 2118750, value: 1 },
      { key: 2100000, value: 19 },
      { key: 2080000, value: 14 },
      { key: 2055210, value: 1 },
      { key: 2050000, value: 3 },
      { key: 2040000, value: 1 },
      { key: 2030000, value: 2 },
      { key: 2020000, value: 2 },
      { key: 2010000, value: 12 },
      { key: 2000000, value: 1793 },
      { key: 1980000, value: 1 },
      { key: 1968500, value: 1 },
      { key: 1960000, value: 1 },
      { key: 1950000, value: 1 },
      { key: 1947052, value: 1 },
      { key: 1930000, value: 1 },
      { key: 1919619, value: 1 },
      { key: 1900000, value: 4 },
      { key: 1890000, value: 1 },
      { key: 1888800, value: 1 },
      { key: 1880000, value: 10 },
      { key: 1875000, value: 1 },
      { key: 1870000, value: 1 },
      { key: 1850000, value: 1 },
      { key: 1820000, value: 1 },
      { key: 1800000, value: 40 },
      { key: 1795600, value: 1 },
      { key: 1781182, value: 1 },
      { key: 1765625, value: 1 },
      { key: 1740000, value: 1 },
      { key: 1700000, value: 3 },
      { key: 1688000, value: 1 },
      { key: 1685000, value: 1 },
      { key: 1680000, value: 9 },
      { key: 1670000, value: 1 },
      { key: 1666667, value: 1 },
      { key: 1666666, value: 1 },
      { key: 1660000, value: 2 },
      { key: 1620000, value: 1 },
      { key: 1600000, value: 17 },
      { key: 1584000, value: 1 },
      { key: 1580000, value: 8 },
      { key: 1570000, value: 1 },
      { key: 1560000, value: 1 },
      { key: 1550000, value: 5 },
      { key: 1500000, value: 134 },
      { key: 1488000, value: 1 },
      { key: 1450000, value: 2 },
      { key: 1421940, value: 1 },
      { key: 1412500, value: 1 },
      { key: 1400000, value: 1 },
      { key: 1380000, value: 1 },
      { key: 1370139, value: 2 },
      { key: 1343700, value: 1 },
      { key: 1333333, value: 1 },
      { key: 1330000, value: 1 },
      { key: 1325000, value: 1 },
      { key: 1320000, value: 1 },
      { key: 1300000, value: 6 },
      { key: 1281800, value: 1 },
      { key: 1280000, value: 3 },
      { key: 1260000, value: 2 },
      { key: 1250000, value: 2 },
      { key: 1240000, value: 1 },
      { key: 1230000, value: 1 },
      { key: 1217283, value: 1 },
      { key: 1210000, value: 2 },
      { key: 1200000, value: 71 },
      { key: 1185000, value: 1 },
      { key: 1180000, value: 10 },
      { key: 1136400, value: 1 },
      { key: 1136364, value: 1 },
      { key: 1131920, value: 1 },
      { key: 1130000, value: 1 },
      { key: 1129943, value: 1 },
      { key: 1120000, value: 1 },
      { key: 1111100, value: 1 },
      { key: 1110000, value: 2 },
      { key: 1100000, value: 19 },
      { key: 1086000, value: 1 },
      { key: 1080000, value: 16 },
      { key: 1070000, value: 1 },
      { key: 1066455, value: 1 },
      { key: 1061858, value: 1 },
      { key: 1060000, value: 2 },
      { key: 1059375, value: 2 },
      { key: 1058000, value: 1 },
      { key: 1050000, value: 6 },
      { key: 1040000, value: 1 },
      { key: 1030000, value: 3 },
      { key: 1027926, value: 1 },
      { key: 1027605, value: 2 },
      { key: 1026200, value: 1 },
      { key: 1020000, value: 4 },
      { key: 1011000, value: 1 },
      { key: 1010000, value: 33 },
      { key: 1000000, value: 3594 },
      { key: 999000, value: 1 },
      { key: 990000, value: 1 },
      { key: 980000, value: 7 },
      { key: 970000, value: 1 },
      { key: 962000, value: 1 },
      { key: 960000, value: 2 },
      { key: 950000, value: 1 },
      { key: 929000, value: 1 },
      { key: 928000, value: 1 },
      { key: 920000, value: 1 },
      { key: 918125, value: 1 },
      { key: 916600, value: 1 },
      { key: 910000, value: 1 },
      { key: 900000, value: 13 },
      { key: 880000, value: 13 },
      { key: 876800, value: 1 },
      { key: 860000, value: 2 },
      { key: 850000, value: 5 },
      { key: 840000, value: 1 },
      { key: 833300, value: 1 },
      { key: 829000, value: 1 },
      { key: 827000, value: 1 },
      { key: 825000, value: 1 },
      { key: 822083, value: 1 },
      { key: 820000, value: 1 },
      { key: 818000, value: 1 },
      { key: 810000, value: 8 },
      { key: 802600, value: 1 },
      { key: 800000, value: 117 },
      { key: 773440, value: 1 },
      { key: 770000, value: 2 },
      { key: 757000, value: 1 },
      { key: 750000, value: 1 },
      { key: 732500, value: 1 },
      { key: 714300, value: 1 },
      { key: 713200, value: 1 },
      { key: 710970, value: 2 },
      { key: 710000, value: 1 },
      { key: 706250, value: 5 },
      { key: 700000, value: 19 },
      { key: 690000, value: 3 },
      { key: 685070, value: 1 },
      { key: 685069, value: 1 },
      { key: 680000, value: 6 },
      { key: 670000, value: 1 },
      { key: 660000, value: 6 },
      { key: 650000, value: 3 },
      { key: 620000, value: 3 },
      { key: 610000, value: 2 },
      { key: 600000, value: 119 },
      { key: 596000, value: 1 },
      { key: 580000, value: 3 },
      { key: 570000, value: 1 },
      { key: 566000, value: 1 },
      { key: 563030, value: 1 },
      { key: 560000, value: 3 },
      { key: 555555, value: 1 },
      { key: 550000, value: 11 },
      { key: 530000, value: 2 },
      { key: 523000, value: 1 },
      { key: 520000, value: 3 },
      { key: 515000, value: 1 },
      { key: 510000, value: 24 },
      { key: 508800, value: 1 },
      { key: 508000, value: 1 },
      { key: 501000, value: 1 },
      { key: 500300, value: 1 },
      { key: 500000, value: 2013 },
      { key: 490000, value: 4 },
      { key: 481000, value: 10 },
      { key: 480000, value: 9 },
      { key: 479549, value: 1 },
      { key: 467200, value: 1 },
      { key: 463584, value: 1 },
      { key: 450000, value: 5 },
      { key: 438400, value: 1 },
      { key: 430000, value: 3 },
      { key: 420000, value: 2 },
      { key: 409000, value: 1 },
      { key: 400000, value: 37 },
      { key: 380000, value: 2 },
      { key: 374618, value: 1 },
      { key: 360000, value: 1 },
      { key: 350000, value: 2 },
      { key: 340000, value: 1 },
      { key: 320000, value: 1 },
      { key: 310000, value: 3 },
      { key: 300000, value: 386 },
      { key: 290000, value: 1 },
      { key: 280000, value: 3 },
      { key: 270000, value: 1 },
      { key: 260000, value: 1 },
      { key: 250000, value: 8 },
      { key: 240000, value: 1 },
      { key: 230000, value: 4 },
      { key: 220000, value: 1 },
      { key: 210000, value: 3 },
      { key: 200000, value: 329 },
      { key: 190000, value: 2 },
      { key: 186000, value: 1 },
      { key: 180000, value: 9 },
      { key: 160000, value: 7 },
      { key: 156000, value: 1 },
      { key: 150000, value: 46 },
      { key: 140000, value: 2 },
      { key: 132000, value: 1 },
      { key: 130500, value: 1 },
      { key: 130000, value: 4 },
      { key: 129000, value: 1 },
      { key: 127400, value: 1 },
      { key: 124000, value: 1 },
      { key: 120000, value: 3 },
      { key: 116016, value: 1 },
      { key: 114286, value: 1 },
      { key: 108108, value: 1 },
      { key: 100000, value: 750 },
      { key: 98000, value: 1 },
      { key: 95000, value: 1 },
      { key: 94000, value: 1 },
      { key: 90000, value: 5 },
      { key: 88000, value: 1 },
      { key: 87680, value: 1 },
      { key: 80000, value: 24 },
      { key: 60000, value: 31 },
      { key: 58000, value: 1 },
      { key: 53000, value: 1 },
      { key: 50000, value: 134 },
      { key: 44000, value: 1 },
      { key: 40000, value: 3 },
      { key: 39000, value: 1 },
      { key: 36000, value: 2 },
      { key: 30508, value: 1 },
      { key: 30000, value: 143 },
      { key: 25000, value: 2 },
      { key: 20000, value: 23 },
      { key: 18000, value: 1 },
      { key: 10000, value: 28 }
    ]
  }
}

export const competitionPieData = async (data) => {
  sleep(500)
  return {
    result: [
      {
        name: '10年以上',
        value: 2335
      },
      {
        name: '5~10年	',
        value: 4197
      },
      {
        name: '2~5年	',
        value: 9152
      },
      {
        name: '2年以下',
        value: 7549
      }
    ]
  }
}
