<template>
  <div class="login-container">
    <div class="main">
      <el-card class="box-card">
        <div class="card-header">
          <span>登录</span>
        </div>
        <div class="form">
          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"
            size="large"
          >
            <el-form-item label="" prop="username">
              <el-input
                v-model="ruleForm.username"
                :prefix-icon="User"
                autocomplete="off"
                :clearable="true"
              />
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                v-model="ruleForm.password"
                type="password"
                :prefix-icon="Lock"
                autocomplete="off"
                :clearable="true"
              />
            </el-form-item>
            <el-form-item class="submit">
              <el-button type="primary" @click.stop="submitForm(ruleFormRef)"
                >提交</el-button
              >
              <el-button @click="resetForm(ruleFormRef)">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { ElMessage, ElLoading } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()

const ruleFormRef = ref<FormInstance>()

const ruleForm = reactive({
  username: 'admin',
  password: '123456',
})

const { submitForm, resetForm, rules } = useRuleForm()

function useRuleForm() {
  const rules = reactive<FormRules>({
    username: [{ required: true, message: '请输入账号！', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码！', trigger: 'blur' }],
  })

  const submitForm = async (formEl: FormInstance | undefined) => {
    const loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)',
    })
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      if (valid) {
        setTimeout(() => {
          ElMessage({
            message: '登录成功！',
            type: 'success',
          })
          router.push({
            name: '首页',
          })
          loading.close()
        }, 2000)
      } else {
        setTimeout(() => {
          ElMessage.error('登录失败！', fields as any)
          return false
        })
      }
    })
  }

  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  return {
    submitForm,
    resetForm,
    rules,
  }
}
</script>

<style lang="less" scoped>
.login-container {
  width: 100%;
  height: 100%;
  background: url(http://www.17sucai.com/preview/242158/2015-01-10/%E7%99%BB%E5%BD%95/images/cloud.jpg)
    0 bottom repeat-x #049ec4;
  animation: animate-cloud 20s linear infinite;
}

.main {
  position: absolute;
  top: 35%;
  left: 50%;
  margin-left: -240px;
}

.box-card {
  width: 480px;

  .form {
    width: 300px;
    margin: 20px auto;

    .submit {
      text-align: center;

      /deep/.el-form-item__content {
        display: block;
      }
    }
  }
}

.card-header {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: #409eff;
  padding: 20px 0 10px 0;
}

@-webkit-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-moz-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-ms-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
@-o-keyframes animate-cloud {
  from {
    background-position: 600px 100%;
  }
  to {
    background-position: 0 100%;
  }
}
</style>
