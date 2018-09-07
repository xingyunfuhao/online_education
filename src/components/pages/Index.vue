<template>
<el-row style="padding-top:0px;">
	<el-row >
	<div >
		<el-carousel :interval="4000" type="card" height="280px">
		    <el-carousel-item v-for="item in pictures" :key="src">
		      <!-- <img src="/static/images/index.png" style="width:100%;height:280px"> -->
		      <img v-bind:src=item.src style="width:100%;height:280px">
		    </el-carousel-item>
	  	</el-carousel>
	<!-- <img src="/static/images/index.png" style="width:100%;height:300px;position:flex;margin-top:-20px;"> -->
	</div>
	</el-row>
	<el-row>
	<h3>培训课程</h3>
	</el-row>
		<el-row>
			  <el-col :span="8" v-for="(item, index) in courses" :key="name" :offset="index > 0 ? 2 : 0">
			    <el-card :body-style="{ padding: '0px' }">
			      <img src="/static/images/course.gif" class="image">
			      <div style="padding: 14px;">
			        <span>{{item.name}}</span>
			        <div class="bottom clearfix">
			          <time class="time">{{ currentDate }}</time>
			          <el-button type="text" class="button">课程详情</el-button>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
			</el-row>
			<el-row style="margin-top:20px;">
			  <el-col :span="8" v-for="(item, index) in courses" :key="name" :offset="index > 0 ? 2 : 0">
			    <el-card :body-style="{ padding: '0px' }">
			      <img src="/static/images/course.gif" class="image">
			      <div style="padding: 14px;">
			        <span>{{item.name}}</span>
			        <div class="bottom clearfix">
			          <time class="time">{{ currentDate }}</time>
			          <el-button type="text" class="button">课程详情</el-button>
			        </div>
			      </div>
			    </el-card>
			  </el-col>
		</el-row>
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			    currentDate: new Date(),
			    courses:[
			    	{name:'英语'},
			    	{name:'家教'},
			    	{name:'计算机'}
			    ],
			    pictures:[
			    {src:'/static/images/index.png'},
			    {src:'/static/images/timg.jpg'},
			    {src:'/static/images/index.png'}
			    ]			    			    
			    };
			}
}
</script>
<style>
h3{
	float:left;
	color: blue;
}
.el-col{
	width:355px;
}
.time {
			   font-size: 13px;
			    color: #999;
			  }
			  
			  .bottom {
			    margin-top: 13px;
			    line-height: 12px;
			  }

			  .button {
			    padding: 0;
			    float: right;
			  }

			  .image {
			    width: 100%;
			    display: inline;
			  }

			  .clearfix:before,
			  .clearfix:after {
			      display: table;
			      content: "";
			  }
			  
			  .clearfix:after {
			      clear: both
			  }
</style>