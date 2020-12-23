<template>
  <div class="tag-list_main">
    <div
      class="tag-list"
      v-if="(tagData.companys && tagData.companys.length) || (tagData.people && tagData.people.length)"
    >
      <template v-if="tagData.companys && tagData.companys.length && showTags.includes('company')">
        <span
          class="tag tag-company"
          v-for="(v, index) in tagData.companys"
          :key="`company_${index}`"
          @click="turnTo(v.csfId)"
        >
          <span v-html="modifyCompanyName(v.name, v.secu, v.bond)"></span>
          <span v-if="typeof v.pos === 'number' && v.weight" :style="{ color: color[v.pos] }">
            <i :class="v.pos === 1 ? 'positive-icon' : v.pos === 2 ? 'negative-icon' : 'neutral-icon'"></i>
            {{ v.weight && (v.weight * 100).toFixed(2) }}%
          </span>
        </span>
      </template>

      <template v-if="tagData.peoples && tagData.peoples.length && showTags.includes('people')">
        <span class="tag tag-people" v-for="(v, index) in tagData.peoples" :key="`people_${index}`">
          <span>{{ v.name }}</span>
          <span v-if="typeof v.pos === 'number' && v.weight" :style="{ color: color[v.pos] }">
            <i :class="v.pos === 1 ? 'positive-icon' : v.pos === 2 ? 'negative-icon' : 'neutral-icon'"></i>
            {{ v.weight && (v.weight * 100).toFixed(2) }}%
          </span>
        </span>
      </template>
      <template v-if="tagData.products && tagData.products.length && showTags.includes('product')">
        <span class="tag tag-product" v-for="(item, index) in tagData.products" :key="`product_${index}`">
          {{ item.name || '--' }}
        </span>
      </template>
      <template v-if="tagData.industries && tagData.industries.length && showTags.includes('industry')">
        <span class="tag tag-industry" v-for="(item, index) in tagData.industries" :key="`industry_${index}`">
          {{ item.name || '--' }}
        </span>
      </template>
      <template v-if="tagData.events && tagData.events.length && showTags.includes('event')">
        <span class="tag tag-event" v-for="(item, index) in tagData.events" :key="`event_${index}`">
          <event-subject :event="item" :subjects="item.eventEntityList"></event-subject>
        </span>
      </template>
    </div>
  </div>
</template>

<script>
import eventSubject from './event-subject'
export default {
  name: 'tag-list',
  data() {
    return {
      showMore: false,
      text: {
        0: '中',
        1: '正',
        2: '负'
      },
      color: {
        0: '#000',
        1: '#C81919',
        2: '#009b37'
      }
    }
  },
  props: {
    tagData: {
      required: true,
      type: Object
    },
    showTags: {
      required: true,
      type: Array
    }
  },
  computed: {},
  components: { eventSubject },
  methods: {
    turnTo(csfId) {
      let url = this.$router.resolve({
        path: '/company',
        query: { csfId: csfId }
      })
      // window.open(url.href)
      this.$message.info('功能开发')
    },
    modifyCompanyName(html, code, bond) {
      if ((typeof code == 'string' && code.trim() === '') || !code) return html
      let str = ''
      if (typeof code === 'string') code = code.split(',')
      for (let i = 0; i < code.length; i++) {
        let _code = code[i].split('_')
        switch (_code[1]) {
          case 'SH':
            if (_code[0].substring(0, 1) == '9') {
              str += ' [ 上交所 : B股 ]'
            } else {
              str += ' [ 上交所 : A股 ]'
            }
            break
          case 'SZ':
            if (_code[0].substring(0, 1) == '2') {
              str += ' [ 深交所 : B股 ]'
            } else {
              str += ' [ 深交所 : A股 ]'
            }
            break
          case 'HK':
            str += ' [ 港交所 ]'
            break
          case 'NQ':
            str += ' [ 纳斯达克 ]'
            break
          case 'NY':
            str += ' [ 纽交所 ]'
            break
          case 'QS':
            str += ' [ NEEQ ]'
            break
          default:
        }
      }
      str = bond ? str + '<span class="news-list-bond">' + (this.lan == 'en' ? 'Bond' : '债') + '</span>' : str
      html = html + str
      return html
    }
  }
}
</script>
<style lang="scss" scoped>
$company: #207cff;
$companyBorder: rgba(32, 124, 255, 0.5);

$people: #c59001;
$eopleBorder: rgba(197, 144, 1, 0.5);

$product: #00b8a5;
$productBorder: rgba(0, 184, 165, 0.5);

$industry: #555fdc;
$industryBorder: rgba(85, 95, 220, 0.5);

$event: #ae4f2e;
$eventBorder: rgba(174, 79, 46, 0.5);

$bond: #d09700;
$posBg: #f7f7f7;
$posZhong: #000;
$posZheng: #c81919;
$posFu: #009b37;

.event-tag {
  display: inline-block;
  padding: 0 8px;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  border-radius: 4px;
  color: white;
  margin-right: 8px;
  margin-bottom: 5px;
  cursor: pointer;

  .sign {
    display: inline-block;
    vertical-align: middle;
    height: 12px;
    margin: -2px 4px 0 4px;
    border-left: 1px solid white;
  }
}
.tag-list {
  width: 100%;
  height: auto;
  text-align: left;
  font-size: 12px;
  margin-bottom: 6px;

  .tag {
    display: inline-block;
    padding: 0 4px;
    border-radius: 4px;
    margin-right: 12px;
    box-sizing: border-box;
    line-height: 22px;
    box-sizing: border-box;
    margin-bottom: 4px;
  }

  .tag-company {
    border: 1px solid $companyBorder;
    color: $company;
    cursor: pointer;
  }

  .tag-people {
    border: 1px solid #ccc;
    color: $people;
  }

  .tag-product {
    border: 1px solid $productBorder;
    color: $product;
  }

  .tag-industry {
    border: 1px solid $industryBorder;
    color: $industry;
  }

  .tag-event {
    border: 1px solid $eventBorder;
    color: $event;
  }
}
.positive-icon,
.negative-icon,
.neutral-icon {
  display: inline-block;
  width: 14px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: contain;
  vertical-align: middle;
  margin: 0 0 0 4px;
}

.positive-icon {
  background-image: url(~@/assets/imgs/icons/positive.png);
}
.negative-icon {
  background-image: url(~@/assets/imgs/icons/negative.png);
}
.neutral-icon {
  background-image: url(~@/assets/imgs/icons/neutral.png);
}
</style>