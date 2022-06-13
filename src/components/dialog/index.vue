<template>
  <div>
    <el-dialog
      v-model="dialogShow"
      :title="title"
      :width="`${width}%`"
      :close-on-click-modal="false"
      :append-to-body="appendToBody"
    >
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cance">{{ cancelText }}</el-button>
          <el-button type="primary" @click="confirm">{{
            confirmText
          }}</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, defineProps, defineEmits } from 'vue'

interface Props {
  dialogVisible: boolean
  title?: string
  cancelText?: string
  confirmText?: string
  width?: number
  appendToBody?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  dialogVisible: false,
  title: '新增',
  cancelText: '取消',
  confirmText: '确定',
  width: 30,
  appendToBody: false,
})

const dialogShow = computed({
  get() {
    return props.dialogVisible
  },
  set(visible: boolean) {
    emit('update:dialogVisible', visible)
  },
})

/**
 * 父组件要定义一个函数与cance或者confirm函数相关联，
 */
const emit = defineEmits<{
  (e: 'cance', dialogVisible: boolean): void
  (e: 'confirm', dialogVisible: boolean): void
  (e: 'update:dialogVisible', dialogVisible: boolean): void
}>()

const cance = () => {
  emit('update:dialogVisible', false)
}

const confirm = () => {
  emit('update:dialogVisible', false)
}
</script>

<style lang="less" scoped></style>
