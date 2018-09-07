<template>
	<el-container>
			<el-header class="title">
				<img src="/static/images/logo.png" style="width:40px;height:40px;">
				<h4>在线教育系统注册</h4>
			</el-header>
			<div class="ms-login">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				  <el-form-item label="手机号" prop="name">
				    <el-input v-model="ruleForm.name"></el-input>
				  </el-form-item>
				  <el-form-item label="密码" prop="pass">
				    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item label="确认密码" prop="checkPass">
				    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
				  </el-form-item>
				  <el-form-item prop="smscode">
                    <div class="inline-ele">
                        <el-input type="text" placeholder="请输入短信验证码" v-model="ruleForm.smscode" @keyup.enter.native="submitForm('user')" style="width:160px;"></el-input>
                        <el-button type="primary" style="margin-left:5px;width:100px" :disabled="smscode.disabled" @click="handleSendSmsCode">{{smscode.tip}}</el-button>
                    </div>
                </el-form-item>
				  <el-form-item>
				    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
				    <el-button @click="resetForm('ruleForm')">重置</el-button>
				  </el-form-item>
				</el-form>
			</div>
	</el-container>
</template>

<script>
 export default{
 	data(){
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
 		return{
 			smscode:{
                    tip: '发送验证码',
                    time: 60,
                    timer: null,
                    disabled: false
                },
 			ruleForm:{
 				name:'',
 				pass:'',
 				checkPass:'',
 				smscode:''
 			},
 			rules:{
 				name: [
 					{ required: true, message: '请输入手机号码', trigger: 'blur' },
		           {
                            validator: function (rule, value, callback) {
                                var MobileRegex = /^1[0-9]{10}$/;
                                if (!MobileRegex.test(value)) {
                                    callback(new Error('手机号码格式不正确！'))
                                } else {
                                    callback();
                                }
                            },
                            trigger: 'blur'
                        }
		          ],
		        pass: [
	            { validator: validatePass, trigger: 'blur' }
	          	],
	          	checkPass: [
	            { validator: validatePass2, trigger: 'blur' }
	          	],
	          	smscode: [
                        {required: true, message: '请输入短信验证码', trigger: 'blur' },
                        // { min: 4, max: 4, message: '长度为4个字符', trigger: 'blur' }
                    ]
		 			}
 		}
 	},
 	methods: {
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
      },
      /*handleSendSmsCode() {
                var $this = this;
                $this.sendSmsCode($this.ruleForm.name,function(res){
                    $this.smscode.tip = $this.smscode.time+"秒后重试"
                    $this.smscode.disabled = true;
                    $this.smscode.timer = setInterval(function(){
                        $this.smscode.time--;
                        if($this.smscode.time>0){
                            $this.smscode.tip = $this.smscode.time+"秒后重试"
                        }else{
                            clearInterval($this.smscode.timer);
                            $this.smscode.disabled = false;
                            $this.smscode.time = 60;
                            $this.smscode.tip = "重新发送"
                        }
                    }, 1000);
                }, function(res){
                    $this.$message.error('发送验证码失败！'+res.msg);
                })
                
            },*/
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
        left:48%;
        top:55%;
        width:360px;
        margin:-150px 0 0 -190px;
        padding:50px 60px 10px 15px;
        border-radius: 5px;
        background: #fff;
    }
.inline-ele{
	display: flex;
	flex-wrap: nowrap;
	justify-content: flex-start;
}
</style>