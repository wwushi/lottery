<script setup lang='ts'>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  data: {
    type: Array as any,
    default: [] as any[],
  },
  tableColumns: {
    type: Array,
    default: [] as any[],
  },
})
const { t } = useI18n()

// 排序状态管理
const sortField = ref<string>('')
const sortOrder = ref<'asc' | 'desc'>('asc')

const dataColumns = computed<any[]>(() => {
  // 不带有actions的列
  const columns = props.tableColumns.filter((item: any) => !item.actions)

  return columns
})

const actionsColumns = computed<any[]>(() => {
  // 带有actions的列
  const columns = props.tableColumns.filter((item: any) => item.actions)

  return columns
})

// 排序处理函数
const handleSort = (field: string) => {
  if (sortField.value === field) {
    // 如果点击的是当前排序字段，切换排序方向
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    // 否则，设置新的排序字段和默认排序方向
    sortField.value = field
    sortOrder.value = 'asc'
  }
}

// 排序后的数据
const sortedData = computed(() => {
  if (!sortField.value) {
    return props.data
  }

  return [...props.data].sort((a, b) => {
    const aValue = a[sortField.value]
    const bValue = b[sortField.value]

    // 处理数组类型的值，比如prizeName是数组
    const getValue = (val: any) => {
      if (Array.isArray(val)) {
        return val.join(',')
      }
      return val
    }

    const aVal = getValue(aValue)
    const bVal = getValue(bValue)

    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return sortOrder.value === 'asc' 
        ? aVal.localeCompare(bVal) 
        : bVal.localeCompare(aVal)
    } else if (typeof aVal === 'number' && typeof bVal === 'number') {
      return sortOrder.value === 'asc' 
        ? aVal - bVal 
        : bVal - aVal
    } else {
      return 0
    }
  })
})
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table min-w-[600px]">
      <!-- head -->
      <thead>
        <tr>
          <th />
          <th 
            v-for="(item, index) in dataColumns" 
            :key="index"
            class="cursor-pointer"
            @click="item.sort && handleSort(item.props)"
          >
            <div class="flex items-center gap-1">
              {{ item.label }}
              <span v-if="item.sort">
                <svg v-if="sortField === item.props && sortOrder === 'asc'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                </svg>
                <svg v-else-if="sortField === item.props && sortOrder === 'desc'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 opacity-50">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-10.5 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </span>
            </div>
          </th>
          <th v-for="(item, index) in actionsColumns" :key="index">
            {{ t('table.operation') }}
          </th>
          <th />
        </tr>
      </thead>
      <tbody v-if="sortedData.length > 0">
        <!-- row  -->
        <tr v-for="item in sortedData" :key="item.id" class="hover">
          <th>{{ item.id }}</th>
          <td v-for="(column, index) in dataColumns" :key="index">
            <span v-if="column.formatValue" v-html="column.formatValue(item)"></span>
            <span v-else>{{ item[column.props] }}</span>
          </td>
          <!-- action -->
          <td v-for="(column, index) in actionsColumns" :key="index" class="flex gap-2">
            <button
              v-for="action in column.actions" :key="action.name" class="btn btn-xs" :class="action.type"
              @click="action.onClick(item)"
            >
              {{ action.label }}
            </button>
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="5" class="text-center">
            {{ t('table.noneData') }}
          </td>
        </tr>
      </tbody>
      <!-- foot -->
    </table>
  </div>
</template>

<style lang='scss' scoped>
tr.hover:hover {
  background-color: #FE5555 !important;
  color: white;
}
</style>
