<template>
  <div>首页</div>
  <el-button @click="dialogClick">打开dialog</el-button>
  <Dialog
    v-model:dialogVisible="dialogVisible"
    @cance="cance"
    @confirm="confirm"
  />
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue'
import Dialog from '/@/components/dialog/index.vue'
import { deepClone } from '/@/util/util'

const dialogVisible = ref<boolean>(false)

const arr = [1, 'string', false, { name: 1, age: 2 }, [1, 2, 3, 4, 5]]

const { dialogClick, cance, confirm } = useDialog()

function useDialog() {
  const dialogClick = () => {
    dialogVisible.value = true
  }

  const cance = (e: boolean) => {
    dialogVisible.value = e
  }

  const confirm = (e: boolean) => {
    dialogVisible.value = e
  }

  return {
    dialogClick,
    cance,
    confirm,
  }
}
</script>

<style lang="less" scoped></style>
