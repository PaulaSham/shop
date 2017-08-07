<template>
  <div class="sales-board">
  	<div class="top">
      <img  class="dress" src="../../assets/images/dress2.jpg"> 
      <div class="sales-board-form">
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  数量：
              </div>
              <div class="sales-board-line-right">
                <v-counter @on-change="onParamChange('buyNum', $event)"></v-counter>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  尺码：
              </div>
              <div class="sales-board-line-right">
                  <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection>
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">
                  总价：
              </div>
              <div class="sales-board-line-right">
                  {{ price }} 元
              </div>
          </div>
          <div class="sales-board-line">
              <div class="sales-board-line-left">&nbsp;</div>
              <div class="sales-board-line-right">
                  <div class="button" @click="showPayDialog">
                    立即购买
                  </div>
              </div>
          </div>
      </div>
      </div>
      <div>
	      <div class="sales-board-des">
	        <h2>details</h2>
	        <div class="detail">
	        <img src="../../assets/goods/dress.jpg">
	        </div>
	      </div>
	    </div>
      <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <table class="buy-dialog-table">
          <tr>
            <th>购买数量</th>
            <th>尺码</th>
            <th>总价</th>
          </tr>
          <tr>
            <td>{{ buyNum }}</td>
            <td>{{ buyType.label }}</td>
            <td>{{ price }}</td>
          </tr>
        </table>
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
        <div class="button buy-dialog-btn" @click="confirmBuy">
          确认购买
        </div>
      </my-dialog>
      <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
        支付失败
      </my-dialog>
      <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order>
  </div>
</template>

<script>
import VSelection from '../../components/base/selection'
import VCounter from '../../components/base/counter'
import VChooser from '../../components/base/chooser'
import VMulChooser from '../../components/base/multiplyChooser'
import Dialog from '../../components/base/dialog'
import BankChooser from '../../components/bankChooser'
import CheckOrder from '../../components/checkOrder'
import SlideShow from '../../components/slideShow'
export default {
  components: {
    VSelection,
    VCounter,
    VChooser,
    VMulChooser,
    MyDialog: Dialog,
    BankChooser,
    CheckOrder,
    SlideShow
  },
  data () {
    return {
      buyNum: 0,
      buyType: {},
      price: 0,
      versionList: [
        {
          label: '客户版',
          value: 0
        },
        {
          label: '代理商版',
          value: 1
        },
        {
          label: '专家版',
          value: 2
        }
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: 'S',
          value: 0
        },
        {
          label: 'M',
          value: 1
        },
        {
          label: 'L',
          value: 2
        }
      ],
      isShowPayDialog: false,
      bankId: null,
      orderId: null,
      isShowCheckOrder: false,
      isShowErrDialog: false
    }
  },
  methods: {
    onParamChange (attr, val) {
      this[attr] = val
      this.getPrice()
    },
    getPrice () {
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
      }
      this.$http.post('/api/getPrice', reqParams)
      .then((res) => {
        this.price = res.data.amount
      })
    },
    showPayDialog () {
      this.isShowPayDialog = true
    },
    hidePayDialog () {
      this.isShowPayDialog = false
    },
    hideErrDialog () {
      this.isShowErrDialog = false
    },
    hideCheckOrder () {
      this.isShowCheckOrder = false
    },
    onChangeBanks (bankObj) {
      this.bankId = bankObj.id
    },
    confirmBuy () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        bankId: this.bankId
      }
      this.$http.post('/api/createOrder', reqParams)
      .then((res) => {
        this.orderId = res.data.orderId
        this.isShowCheckOrder = true
        this.isShowPayDialog = false
      }, (err) => {
        this.isShowBuyDialog = false
        this.isShowErrDialog = true
      })
    }
  },
  mounted () {
    this.buyNum = 1
    this.buyType = this.buyTypes[0]
    this.getPrice()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4682B4;
  color: #fff;
  border: 1px solid #4fc08d;
}
.top img{
	float: left;
}
.sales-board-form{
	left: 400px;
	padding-top:50px;
	padding-left:400px;
}
.sales-board-line{
	padding-bottom: 10px;
}
.sales-board-line-left{
	float:left;

}
.sales-board-line-right{
	padding-left: 40px;

}
.sales-board-des{
	padding-top:100px ;
}
.sales-board-des h2{
	font-size:25px;
	color:#4682B4;
	font-family: Lucida Bright,cursive;
	text-align: center;
}
.detail{
	padding-top: 20px;
}
.sales-board{
	padding-top: 70px;
}

</style>