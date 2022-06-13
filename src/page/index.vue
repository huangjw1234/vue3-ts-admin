<template>
  <div class="layout">
    <el-container>
      <el-aside :width="`${isCollapse ? '64' : '239'}px`">
        <SideBar></SideBar>
      </el-aside>
      <el-container :class="{ 'true-main': isCollapse }">
        <el-header>
          <Top></Top>
        </el-header>
        <el-main>
          <div><Tags></Tags></div>
          <el-scrollbar>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import SideBar from './sidebar/index.vue'
import Top from './top/index.vue'
import Tags from './tags/index.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const isCollapse = computed(() => {
  return store.state.isCollapse
})
</script>

<style lang="less" scoped>
.layout {
  height: 100%;

  /deep/.el-container {
    height: 100%;
  }

  /deep/.el-aside {
    overflow-x: hidden;
    box-shadow: 2px 0 6px rgb(0 21 41 / 35%);
    transition: all 1s;
  }

  /deep/.el-scrollbar {
    height: calc(100% - 63px) !important;
    padding: 10px;

    .el-scrollbar__bar {
      display: none;
    }
  }

  /deep/.el-main {
    background-color: rgb(240, 242, 245);
    padding: 0;
    margin-left: 6px;
  }

  .true-main {
    width: calc(100% - 64px) !important;
    left: 64px !important;
    // transition: all 1s;
  }
}
</style>
