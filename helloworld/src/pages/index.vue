<template>
  <div class="index-wrap">
    <div class="index-right">
      <slide-show :slides="slides" :inv="invTime"></slide-show>
    </div>
   </div>
</template>

<script>
import slideShow from '../components/slideShow'
export default {
  components: {
    slideShow
  },
  created: function () {
    this.$http.get('api/getNewsList')
    .then((res) => {
      this.newsList = res.data
    }, (err) => {
      console.log(err)
    })
  },
  data () {
    return {
      invTime: 2000,
      slides: [
        {
          src: require('../assets/slideShow/pic1.png'), //不用require的话变成img标签，webpack不知道，用js引入
          title: 'xxx1',
          href: 'dress'
        },
        {
          src: require('../assets/slideShow/white.jpg'),
          title: 'xxx2',
          href: 'dress'
        },
        {
          src: require('../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'dress'
        },
        {
          src: require('../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'dress'
        }
      ],
//    boardList: [
//      {
//        title: '开放产品',
//        description: '开放产品是一款开放产品',
//        id: 'car',
//        toKey: 'analysis',
//        saleout: false
//      },
//      {
//        title: '品牌营销',
//        description: '品牌营销帮助你的产品更好地找到定位',
//        id: 'earth',
//        toKey: 'count',
//        saleout: false
//      },
//      {
//        title: '使命必达',
//        description: '使命必达快速迭代永远保持最前端的速度',
//        id: 'loud',
//        toKey: 'forecast',
//        saleout: true
//      },
//      {
//        title: '勇攀高峰',
//        description: '帮你勇闯高峰，到达事业的顶峰',
//        id: 'hill',
//        toKey: 'publish',
//        saleout: false
//      }
//    ],
//    newsList: [],
//    productList: {
//      pc: {
//        title: 'PC产品',
//        list: [
//          {
//            name: '数据统计',
//            url: 'http://starcraft.com'
//          },
//          {
//            name: '数据预测',
//            url: 'http://warcraft.com'
//          },
//          {
//            name: '流量分析',
//            url: 'http://overwatch.com',
//            hot: true
//          },
//          {
//            name: '广告发布',
//            url: 'http://hearstone.com'
//          }
//        ]
//      },
//      app: {
//        title: '手机应用类',
//        last: true,
//        list: [
//          {
//            name: '91助手',
//            url: 'http://weixin.com'
//          },
//          {
//            name: '产品助手',
//            url: 'http://twitter.com',
//            hot: true
//          },
//          {
//            name: '智能地图',
//            url: 'http://maps.com'
//          },
//          {
//            name: '团队语音',
//            url: 'http://phone.com'
//          }
//        ]
//      }
      }
    }
 }
</script>

<style scoped>
.index-wrap {
  margin: 0 auto;
  overflow: hidden;
}
.index-right {
  width: 1105px; 
}
</style>
