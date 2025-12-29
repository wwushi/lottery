<!-- eslint-disable vue/no-parsing-error -->
<script setup lang='ts'>
import type { IPersonConfig } from '@/types/storeType'
import DaiysuiTable from '@/components/DaiysuiTable/index.vue'
import i18n from '@/locales/i18n'
import useStore from '@/store'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import * as XLSX from 'xlsx'

const { t } = useI18n()
const personConfig = useStore().personConfig

const { getAlreadyPersonList: alreadyPersonList, getAlreadyPersonDetail: alreadyPersonDetail } = storeToRefs(personConfig)
// const personList = ref<any[]>(
//     alreadyPersonList
// )

// const deleteAll = () => {
//     personConfig.deleteAllPerson()
// }

const isDetail = ref(false)
function handleMoveNotPerson(row: IPersonConfig) {
  personConfig.moveAlreadyToNot(row)
}

// 一键将所有已中奖人员移入未中奖名单
function resetAllWinner() {
  personConfig.resetAlreadyPerson()
}

// 导出中奖人员列表
function exportResult() {
  // 准备导出数据
  const exportData = isDetail.value ? alreadyPersonDetail.value : alreadyPersonList.value
  
  if (exportData.length === 0) {
    return
  }
  
  // 深拷贝数据，避免修改原数据
  const data = JSON.parse(JSON.stringify(exportData))
  
  // 处理数据格式
  data.forEach((item: any) => {
    // 将数组类型的奖品名称转换为字符串
    if (Array.isArray(item.prizeName)) {
      item.prizeName = item.prizeName.join(', ')
    }
    
    // 将数组类型的获奖时间转换为字符串
    if (Array.isArray(item.prizeTime)) {
      item.prizeTime = item.prizeTime.join(', ')
    }
    
    // 删除不需要导出的字段
    delete item.id
    delete item.isWin
    delete item.isShow
    delete item.prizeId
  })
  
  // 转换为Excel格式并导出
  const worksheet = XLSX.utils.json_to_sheet(data)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, '中奖人员列表')
  XLSX.writeFile(workbook, '中奖人员列表.xlsx')
}

const tableColumnsList = [
  {
    label: i18n.global.t('data.number'),
    props: 'uid',
    sort: true,
  },
  {
    label: i18n.global.t('data.name'),
    props: 'name',
  },
  {
    label: i18n.global.t('data.avatar'),
    props: 'avatar',
    formatValue(row: any) {
       return row.avatar ? `<img src="${row.avatar}" alt="avatar" style="width: 50px; height: 50px;"/>` : '-';
    }
  },
  {
    label: i18n.global.t('data.department'),
    props: 'department',
  },
  {
    label: i18n.global.t('data.identity'),
    props: 'identity',
  },
  {
    label: i18n.global.t('data.prizeName'),
    props: 'prizeName',
    sort: true,
  },
  {
    label: i18n.global.t('data.operation'),
    actions: [
      {
        label: i18n.global.t('data.removePerson'),
        type: 'btn-info',
        onClick: (row: IPersonConfig) => {
          handleMoveNotPerson(row)
        },
      },
    ],
  },
]
const tableColumnsDetail = [
  {
    label: i18n.global.t('data.number'),
    props: 'uid',
    sort: true,
  },
  {
    label: i18n.global.t('data.number'),
    props: 'name',
  },
  {
    label: i18n.global.t('data.avatar'),
    props: 'avatar',
    formatValue(row: any) {
       return row.avatar ? `<img src="${row.avatar}" alt="avatar" style="width: 50px; height: 50px;"/>` : '-';
    }
  },
  {
    label: i18n.global.t('data.department'),
    props: 'department',
  },
  {
    label: i18n.global.t('data.identity'),
    props: 'identity',
  },
  {
    label: i18n.global.t('data.prizeName'),
    props: 'prizeName',
    sort: true,
  },
  {
    label: i18n.global.t('data.prizeTime'),
    props: 'prizeTime',

  },
  {
    label: i18n.global.t('data.operation'),
    actions: [
      {
        label: i18n.global.t('data.removePerson'),
        type: 'btn-info',
        onClick: (row: IPersonConfig) => {
          handleMoveNotPerson(row)
        },
      },

    ],
  },
]
</script>

<template>
  <div class="overflow-y-auto">
    <h2>{{ t('viewTitle.winnerManagement') }}</h2>
    <div class="flex items-center justify-start gap-10">
      <div>
        <span>{{ t('table.luckyPeopleNumber') }}：</span>
        <span>{{ alreadyPersonList.length }}</span>
      </div>
      <div class="flex flex-col">
        <div class="form-control">
          <label class="cursor-pointer label">
            <span class="label-text">{{ t('table.detail') }}:</span>
            <input v-model="isDetail" type="checkbox" class="border-solid toggle toggle-primary border-1">
          </label>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="btn btn-secondary btn-sm" @click="exportResult">
          {{ t('button.exportResult') }}
        </button>
        <button class="btn btn-warning btn-sm" @click="resetAllWinner">
          {{ t('button.resetAllWinner') }}
        </button>
      </div>
    </div>
    <DaiysuiTable v-if="!isDetail" :table-columns="tableColumnsList" :data="alreadyPersonList" />

    <DaiysuiTable v-if="isDetail" :table-columns="tableColumnsDetail" :data="alreadyPersonDetail" />
  </div>
</template>

<style lang='scss' scoped></style>
