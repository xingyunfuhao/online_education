<template>
<el-row>
	<div class="logo">
		<img src="/static/images/logo.png" style="width:40px;height:40px;">
	</div>
	<div>
		<ul>
			<li><el-button type="text" >首页</el-button></li>
			<li>
				<el-dropdown >
				  <el-button type="text">
				    课程中心<i class="el-icon-arrow-down el-icon--right"></i>
				  </el-button>
				  <el-dropdown-menu slot="dropdown">
				    <el-dropdown-item>英语</el-dropdown-item>
				    <el-dropdown-item>计算机</el-dropdown-item>
				    <el-dropdown-item>家教</el-dropdown-item>
				  </el-dropdown-menu>
				</el-dropdown>
			</li>
			<li><el-button type="text" >用户中心</el-button></li>
		</ul>
	</div>
	<div class="bt">
		<router-link to="/register"><el-button type="text" class="right_up">注册</el-button></router-link>&nbsp&nbsp|<router-link to="/login"><el-button type="text" class="right_up">登录</el-button></router-link>
	</div>
</el-row>
</template>

<script>
</script>


<style>
el-row{
	margin-bottom: 0px;
	height:30px;
}
.logo{	
	position:absolute;
	top: 10px;
	float: left;
}
ul{
	position:relative;
	top:-10px;
}
li{
	width:270px;
	float:left;
	list-style: none;

}
.bt{
	position: absolute;
	top: -5px;
	left:90%;
}
.el-button--text{
	font-size:16px;
}
.right_up{
	font-size: 14px;
}
</style>
