<template>
    <div class="selection-component" >
      <div class="selection-show" @mouseenter="isDrop=true" @mouseleave="isDrop=false">
	     
	        <span>所有分类</span>
	        
	       <div class="selection-list" v-if="isDrop">
	        <ul>
	        	<router-link v-for="item in selections" :to="{ path: item.path }" tag="li" >
	            {{ item.label }}    
	          </router-link>
	        </ul>
	      </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    selections: {
      type: Array,
      default: [{
        label: 'test',
        path:''
      }]
    }
  },
  data () {
    return {
      isDrop: false
//    nowIndex: 0
    }
  }
//  chooseSelection (index) {
//    this.nowIndex = index
//    this.isDrop = false
//    this.$emit('on-change', this.selections[this.nowIndex])
//  }
  }

</script>

<style scoped>
.selection-component {
  position: relative;
  display: inline-block;
}
.selection-show {
  /*border: 1px solid #e3e3e3;*/
  padding: 0 20px 0 10px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  height: 25px;
  line-height: 25px;
  border-radius: 3px;
  /*background: #fff;*/
}
.selection-list {
  display: inline-block;
  position: absolute;
  left: 0;
  top: 25px;
  width: 100%;
  font-size: 15px;
  /*background: #fff;*/
  /*border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;*/
  z-index: 5;
}
.selection-list li {
  padding: 5px 15px 5px 10px;
  /*border-left: 1px solid #e3e3e3;
  border-right: 1px solid #e3e3e3;*/
  cursor: pointer;
 /* background: #fff;*/
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.selection-list li:hover {
  background: #e3e3e3;
}
</style>
