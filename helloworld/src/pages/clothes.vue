<template>
	<div>
		<div class="right">
			<!--<goods :name='name' :price='price' :goodPath='goodPath'></goods>-->
			<div class="index-board-item"
		        v-for="(item, index) in boardList"
		        :class="[{'line-last' : (index+1)% 4 === 0}, 'index-board-' + item.id]"> 
		          <div class="index-board-item-inner" >
		            <h2>{{ item.title }}</h2>
		            <span class="size">{{ item.size }}</span>
		            <span class="price">{{ item.price }}</span>
		            <div class="index-board-button">
		              <router-link class="button" :to="{path: item.toKey}">立即购买</router-link>
		            </div>  
		          </div>
		    </div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				boardList: [
						        {
						          title: '米色连衣裙',
						          size: 'S|M|L',
						          price:'200',
						          id: 'rice',
						          toKey: 'dress',
						          saleout: false
						        },
						        {
						          title: '白色背心连衣裙',
						          size: 'S|M|L',
						          price:'280',
						          id: 'back',
						          toKey: 'count',
						          saleout: false
						        },
						        {
						          title: '蓝白v领连衣裙',
						          size: 'S|M|L',
						          price:'210',
						          id: 'v',
						          toKey: 'forecast',
						          saleout: true
						        },
						        {
						          title: '飞鸟印花吊带连衣裙',
						          size: 'S|M|L',
						          price:'245',
						          id: 'bird',
						          toKey: 'publish',
						          saleout: false
						        },
						        {
						          title:'蓝色格子连衣裙',
						          size: 'S|M|L',
						          price:'245',
						          id: 'blue',
						          toKey: 'publish',
						          saleout: false
						        }
						      ],

			}
		}
	}
</script>

<style scoped>
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 230px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 40px;
  margin-bottom: 50px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-top: 270px;
}
.index-board-rice .index-board-item-inner{
  background: url(../assets/images/dress.jpg) no-repeat;
}
.index-board-back .index-board-item-inner{
  background: url(../assets/images/dress1.jpg) no-repeat;
}
.index-board-v .index-board-item-inner{
  background: url(../assets/images/dress2.jpg) no-repeat;
}
.index-board-bird .index-board-item-inner{
  background: url(../assets/images/dress3.jpg) no-repeat;
}
.index-board-blue .index-board-item-inner{
  background: url(../assets/images/dress4.jpg) no-repeat;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.size{
	color: ;
	font-size: ;
}
.price{
	float:right;
	margin-right: 20px;
}
.right{
	padding-top:70px;
}
/*.bottom{
	background: #4682B4;
}*/
</style>