<template>
  <div class="top">
    <div class="top-left">
      <div>
        <el-icon :size="26" @click="setCollapse">
          <Operation />
        </el-icon>
      </div>
    </div>
    <div class="top-title">
      <el-input v-model="search" class="search" placeholder="请输入搜索内容" />
    </div>
    <div class="top-right">
      <div>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          :size="30"
        />
      </div>
      <div>
        <el-dropdown>
          <span class="el-dropdown-link">
            系统管理员
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item><div>个人中心</div></el-dropdown-item>
              <el-dropdown-item
                ><div @click.stop="logOut">退出登录</div></el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { Operation, ArrowDown } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const router = useRouter()
const store = useStore()
const search = ref('')

const isCollapse = computed(() => {
  return store.state.isCollapse
})

const setCollapse = () => {
  store.commit('SET_COLLAPSE', !isCollapse.value)
}

const logOut = () => {
  ElMessageBox.confirm('确定退出登录？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      router.push({
        name: 'login',
      })
      ElMessage({
        type: 'success',
        message: '退出成功！',
      })
    })
    .catch(() => {})
}
</script>

<style lang="less" scoped>
.top {
  position: relative;
  height: 100%;
}

.top-left {
  position: absolute;
  top: 15px;
  left: 0px;

  > div {
    line-height: 26px;
  }
}

.top-title {
  position: absolute;
  left: 90px;
  top: 15px;

  .search {
    width: 300px;
    font-size: 13px;
  }

  /deep/.el-input__wrapper {
    border: 0;
    box-shadow: none;
  }
}

.top-right {
  position: absolute;
  top: 15px;
  right: 0px;
  display: flex;
  align-items: center;

  > div {
    padding-left: 10px;
  }
}
</style>
