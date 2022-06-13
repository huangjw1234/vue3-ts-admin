<template>
  <div class="tags">
    <el-tabs
      v-model="active"
      type="card"
      class="demo-tabs"
      :collapse="false"
      @tab-click="openTag"
      @tab-remove="removeTag"
    >
      <el-tab-pane
        v-for="item in tagList"
        :key="item.value"
        :label="item.label"
        :name="item.value"
        :closable="item.close"
      ></el-tab-pane>
    </el-tabs>
    <div class="dropdown">
      <el-dropdown>
        <el-button type="primary">
          更多<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><div>关闭其他</div></el-dropdown-item>
            <el-dropdown-item
              ><div @click="clearTagList">关闭所有</div></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch, toRefs, Ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { TabsPaneContext, TabPanelName } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'

const store = useStore()
const router = useRouter()

interface tag {
  label: string
  value: string
  params: Record<string, any>
  query: Record<string, any>
  meta: any
  group: Array<any>
  close?: boolean
}

const tagList = computed(() => {
  return store.getters.tagList
})

const tags = computed(() => {
  return store.getters.tag
})

const { active, openTag, removeTag, clearTagList } = useTab(tagList, tags)

function useTab(tagList: Ref<Array<tag>>, tags: Ref<tag>) {
  const active = ref<string | number>('')

  const setActive = () => {
    active.value = tags.value?.value
  }

  watch(
    () => tags.value,
    () => {
      setActive()
    }
  )

  onMounted(() => {
    setActive()
  })

  const openTag = (tab: TabsPaneContext) => {
    let activeTab: any = tab.props
    const { tags, key }: { tags: tag; key: number } = findTag(
      tagList,
      activeTab.name || activeTab.value
    )
    router.push({
      path: activeTab.value || activeTab.name,
      query: tags.query,
    })
  }

  const removeTag = (name: TabPanelName | string) => {
    const { tags, key } = findTag(tagList, name)
    store.commit('DEL_TAG', tags)
    //删除当前激活的tag跳回上一个
    if (active.value === tags.value) {
      let tab = {
        props: tagList.value[key == 0 ? key : key - 1],
      }
      openTag(tab as any)
      store.commit('ADD_TAG', tab.props)
    }
    store.commit('REFRESH_TAG_CLOAE')
  }

  const clearTagList = () => {
    store.commit('CLEAR_ALL_TAG')
  }

  return {
    active,
    openTag,
    removeTag,
    clearTagList,
  }
}

function findTag(
  tagList: Ref<Array<tag>>,
  value: any
): { tags: tag; key: number } {
  let tags!: tag
  let key: number = 0
  tagList.value.map((item: tag, index: number) => {
    if (item.value == value) {
      tags = item
      key = index
    }
  })
  return {
    tags,
    key,
  }
}
</script>

<style lang="less" scoped>
.tags {
  width: calc(100% - 20px);
  border-top: 1px solid #f6f6f6;
  height: 40px;
  background-color: white;
  padding: 0 10px;
  display: flex;
  align-content: center;
  justify-content: space-between;

  .demo-tabs {
    width: calc(100% - 100px);

    .el-tabs__content {
      padding: 32px;
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
    }
  }

  /deep/.el-tabs__nav {
    border: none;
  }

  /deep/.el-tabs__item {
    border: none;
  }

  /deep/.el-tabs__item.is-active {
    border-bottom: 2px solid #409eff;
  }

  .dropdown {
    display: flex;
    align-items: center;
  }
}
</style>
