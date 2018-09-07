<template>
<el-container>
	<el-header>
		<head-nav></head-nav>
	</el-header>
	<el-main>
		<index></index>
	</el-main>
	<el-footer>
		<footer-nav></footer-nav>
	</el-footer>
</el-container>
</template>
<script>
import HeadNav from '@/components/common/HeadNav'
import Index from '@/components/pages/Index'
import Footer from '@/components/common/Footer'
export default {
	components:{
		'index':Index,
		'head-nav':HeadNav,
		'footer-nav':Footer
	}
}
</script>

<style>
el-main{
	margin:0px;
	padding:0px;
}
</style>