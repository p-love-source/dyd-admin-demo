<template>
    <div class>
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
        >
            <el-form-item label="用户名" prop="username">
                <el-input v-model.number="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <!-- <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>-->
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <button class="user-name" @click="loginClick">登录</button>
    </div>
</template>

<script>
import { Button, FormItem, Form } from "element-ui";
export default {
    data() {
        var checkAge = (rule, value, callback) => {
            if (!value) {
                return callback(new Error("用户名不能为空"));
            }
            // TODO 缺少一个用户名验证
            callback();
            // setTimeout(() => {
            //     if (!Number.isInteger(value)) {
            //         callback(new Error("请输入数字值"));
            //     } else {
            //         if (value < 18) {
            //             callback(new Error("必须年满18岁"));
            //         } else {
            //             callback();
            //         }
            //     }
            // }, 1000);
        };
        var validatePass = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            } else {
                if (this.ruleForm.checkPass !== "") {
                    this.$refs.ruleForm.validateField("checkPass");
                }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请再次输入密码"));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error("两次输入密码不一致!"));
            } else {
                callback();
            }
        };
        return {
            ruleForm: {
                pass: "",
                // checkPass: "",
                username: ""
            },
            rules: {
                pass: [{ validator: validatePass, trigger: "blur" }],
                // checkPass: [{ validator: validatePass2, trigger: "blur" }],
                username: [{ validator: checkAge, trigger: "blur" }]
            }
        };
    },
    methods: {
        loginClick() {
            this.$store.dispatch("user/getData", "123");
        },
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    // alert("submit!");
                    console.log(this.ruleForm);
                    this.$store.dispatch("user/login", this.ruleForm);
                    // this.$router.push("/index");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>

<style lang='less' scoped>
.user-name {
    // color: $theme-color;
    // color: @fontCr;
}
</style>