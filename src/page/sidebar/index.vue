<template>
  <div class="aside">
    <div :class="{ 'is-Collapse': !isCollapse }" class="logo">
      <img src="../../assets/logo.png" alt="" />
    </div>
    <div class="menu">
      <el-scrollbar>
        <el-menu
          active-text-color="#409eff"
          background-color="#20222a"
          :class="{
            'el-menu-vertical-demo': true,
            'is-Collapse': !isCollapse,
            'no-Collapse': isCollapse,
          }"
          :default-active="route.path"
          text-color="#fff"
          :router="false"
          :unique-opened="true"
          :collapse="isCollapse"
        >
          <el-sub-menu
            v-for="item in routerList"
            :key="item.name"
            :index="item.path"
          >
            <template #title>
              <el-icon><component :is="item.icon"></component></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="item2 in item.children"
              :key="item2.path"
              :index="item2.path"
              @click="open(item2)"
            >
              <el-icon><component :is="item2.icon"></component></el-icon>
              <span>{{ item2.name }}</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import routerList from './router'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const store = useStore()

const isCollapse = computed(() => {
  return store.getters.isCollapse
})

const open = (item: any) => {
  let action = {
    label: item.name,
    value: item.path,
    params: {},
    query: {},
    meta: {},
    group: [],
  }
  router.push({
    path: item.path,
  })
}
</script>

<style lang="less" scoped>
.aside {
  height: 100%;

  .menu {
    height: calc(100% - 64px);
    background-color: #20222a;

    /deep/.el-menu {
      border-right: none;
    }

    .no-Collapse {
      width: 65px;
    }

    .is-Collapse {
      width: 240px;
    }

    /deep/.el-scrollbar {
      padding: 0;
      height: 100% !important;

      .el-scrollbar__wrap {
        // overflow: hidden;
        // overflow: scroll;
        margin-bottom: -17px;
      }
    }
  }
}
.logo {
  height: 64px;
  background-color: #20222a;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 80%;
  }
}
</style>
