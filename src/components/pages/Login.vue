<template>
		<el-container>
			<el-header class="title">
				<img src="/static/images/logo.png" style="width:40px;height:40px;">
				<h4>在线教育系统登录</h4>
			</el-header>
			<div class="ms-login">
				<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="70px" class="demo-ruleForm" label="left">
					<el-form-item label="账号" prop="number">
				    <el-input v-model.number="ruleForm2.age"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
				  </el-form-item>				  
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
				    <el-button @click="resetForm('ruleForm2')">重置</el-button>
				    <router-link to="/register"><el-button class="bt_r">去注册</el-button></router-link>
				  </el-form-item>
				</el-form>
			</div>
		</el-container>
</template>


<script>
export default{
	data(){
		var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          number: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          number: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
	},
	methods:{
		submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
	}
}
</script>


<style>
.title{
	width:100%;
	margin-top:70px;
}
.ms-login{
        position: absolute;
        left:50%;
        top:55%;
        width:325px;
        margin:-150px 0 0 -190px;
        padding:40px 50px 10px 15px;
        border-radius: 5px;
        background: #fff;
    }
    .bt_r{
    	margin-left: 7px;
    }
</style>