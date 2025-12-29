<script setup lang='ts'>
import type { IPrizeConfig } from '../../types/storeType'
import EditSeparateDialog from '@/components/NumberSeparate/EditSeparateDialog.vue'
import i18n from '@/locales/i18n'
import useStore from '@/store'

import { storeToRefs } from 'pinia'

import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

// 定义事件
const emit = defineEmits(['resetPrizeStatus', 'selectPrize'])

const { t } = useI18n()
const prizeConfig = useStore().prizeConfig
const globalConfig = useStore().globalConfig
const system = useStore().system
const { getPrizeConfig: localPrizeList, getCurrentPrize: currentPrize, getTemporaryPrize: temporaryPrize } = storeToRefs(prizeConfig)
const { getIsShowPrizeList: isShowPrizeList } = storeToRefs(globalConfig)
const { getIsMobile: isMobile } = storeToRefs(system)
const prizeListRef = ref()
const prizeListContainerRef = ref()

const temporaryPrizeRef = ref()
const selectedPrize = ref<IPrizeConfig | null>()

// 添加抽奖状态支持，接收来自父组件的抽奖状态
const props = defineProps<{
  lotteryStatus?: number // 0为初始状态， 1为抽奖准备状态，2为抽奖中状态，3为抽奖结束状态
}>()

// 默认抽奖状态
const currentLotteryStatus = ref(0)

// 监听props变化
watch(() => props.lotteryStatus, (newStatus) => {
  if (newStatus !== undefined) {
    currentLotteryStatus.value = newStatus
  }
})

// 只有在抽奖中（状态2）和抽奖结束（状态3）时不允许切换奖项，抽奖准备状态（状态1）和初始状态（状态0）都可以切换奖项
const canSwitchPrize = computed(() => {
  return currentLotteryStatus.value !== 2 && currentLotteryStatus.value !== 3
})

// 获取prizeListRef高度
function getPrizeListHeight() {
  let height = 200
  if (prizeListRef.value) {
    height = (prizeListRef.value as HTMLElement).offsetHeight
  }

  return height
}
const prizeShow = ref(structuredClone(isShowPrizeList.value))

function addTemporaryPrize() {
  temporaryPrizeRef.value.showModal()
}

function deleteTemporaryPrize() {
  temporaryPrize.value.isShow = false
  prizeConfig.setTemporaryPrize(temporaryPrize.value)
}
function submitTemporaryPrize() {
  if (!temporaryPrize.value.name || !temporaryPrize.value.count) {
    // eslint-disable-next-line no-alert
    alert(i18n.global.t('error.completeInformation'))
    return
  }
  temporaryPrize.value.isShow = true
  temporaryPrize.value.id = new Date().getTime().toString()
  prizeConfig.setCurrentPrize(temporaryPrize.value)
}
function selectPrize(item: IPrizeConfig) {
  selectedPrize.value = item
  selectedPrize.value.isUsedCount = 0
  selectedPrize.value.isUsed = false

  if (selectedPrize.value.separateCount.countList.length > 1) {
    return
  }
  selectedPrize.value.separateCount = {
    enable: true,
    countList: [
      {
        id: '0',
        count: item.count,
        isUsedCount: 0,
      },
    ],
  }
}
function submitData(value: any) {
  selectedPrize.value!.separateCount.countList = value
  selectedPrize.value = null
}
function changePersonCount() {
  temporaryPrize.value.separateCount.countList = []
}
function setCurrentPrize() {
  for (let i = 0; i < localPrizeList.value.length; i++) {
    if (localPrizeList.value[i].isUsedCount < localPrizeList.value[i].count) {
      prizeConfig.setCurrentPrize(localPrizeList.value[i])

      return
    }
  }
}
onMounted(() => {
  // 确保prizeListContainerRef存在时才设置样式
  if (prizeListContainerRef.value) {
    prizeListContainerRef.value.style.height = `${getPrizeListHeight()}px`
  }
  setCurrentPrize()
})
</script>

<template>
  <div class="flex items-center">
    <dialog id="my_modal_1" ref="temporaryPrizeRef" class="border-none modal">
      <div class="modal-box">
        <h3 class="text-lg font-bold">
          {{ t('dialog.titleTemporary') }}
        </h3>
        <div class="flex flex-col gap-3">
          <label class="flex w-full max-w-xs">
            <div class="label">
              <span class="label-text">{{ t('table.name') }}:</span>
            </div>
            <input
              v-model="temporaryPrize.name" type="text" :placeholder="t('placeHolder.name')"
              class="max-w-xs input-sm input input-bordered"
            >
          </label>
          <label class="flex w-full max-w-xs">
            <div class="label">
              <span class="label-text">{{ t('table.prizeName') }}:</span>
            </div>
            <input
              v-model="temporaryPrize.prizeName" type="text" :placeholder="t('placeHolder.name')"
              class="max-w-xs input-sm input input-bordered"
            >
          </label>
          <label class="flex w-full max-w-xs">
            <div class="label">
              <span class="label-text">{{ t('table.fullParticipation') }}</span>
            </div>
            <input
              type="checkbox" :checked="temporaryPrize.isAll"
              class="mt-2 border-solid checkbox checkbox-secondary border-1"
              @change="temporaryPrize.isAll = !temporaryPrize.isAll"
            >
          </label>
          <label class="flex w-full max-w-xs">
            <div class="label">
              <span class="label-text">{{ t('table.setLuckyNumber') }}</span>
            </div>
            <input
              v-model="temporaryPrize.count" type="number" :placeholder="t('placeHolder.winnerCount')" class="max-w-xs input-sm input input-bordered"
              @change="changePersonCount"
            >
          </label>
          <label class="flex w-full max-w-xs">
            <div class="label">
              <span class="label-text">{{ t('table.luckyPeopleNumber') }}</span>
            </div>
            <input
              v-model="temporaryPrize.isUsedCount" disabled type="number" :placeholder="t('placeHolder.winnerCount')"
              class="max-w-xs input-sm input input-bordered"
            >
          </label>
          <label v-if="temporaryPrize.separateCount" class="flex w-full max-w-xs">
            <div class="label">
              <span class="label-text">{{ t('table.onceNumber') }}</span>
            </div>
            <div class="flex justify-start h-full" @click="selectPrize(temporaryPrize)">
              <ul
                v-if="temporaryPrize.separateCount.countList.length"
                class="flex flex-wrap w-full h-full gap-1 p-0 pt-1 m-0 cursor-pointer"
              >
                <li
                  v-for="se in temporaryPrize.separateCount.countList"
                  :key="se.id" class="relative flex items-center justify-center w-8 h-8 bg-slate-600/60 separated"
                >
                  <div
                    class="flex items-center justify-center w-full h-full tooltip"
                    :data-tip="`${t('tooltip.doneCount') + se.isUsedCount}/${se.count}`"
                  >
                    <div
                      class="absolute left-0 z-50 h-full bg-blue-300/80"
                      :style="`width:${se.isUsedCount * 100 / se.count}%`"
                    />
                    <span>{{ se.count }}</span>
                  </div>
                </li>
              </ul>
              <button v-else class="btn btn-secondary btn-xs">{{ t('button.setting') }}</button>
            </div>
          </label>
        </div>
        <div class="modal-action">
          <form method="dialog" class="flex gap-3">
            <button class="btn btn-sm" @click="submitTemporaryPrize">
              {{ t('button.confirm') }}
            </button>
            <button class="btn btn-sm">
              {{ t('button.cancel') }}
            </button>
          </form>
        </div>
      </div>
    </dialog>
    <EditSeparateDialog
      :total-number="selectedPrize?.count" :separated-number="selectedPrize?.separateCount.countList"
      @submit-data="submitData"
    />
    <div ref="prizeListContainerRef">
      <div v-if="temporaryPrize.isShow" class="h-20 w-72">
        <div 
          class="relative flex flex-row items-center justify-between w-full h-full shadow-xl card bg-base-100 cursor-pointer"
          :class="{
                      'current-prize': currentPrize.id === temporaryPrize.id,
                      'opacity-50 cursor-not-allowed': temporaryPrize.isUsed || currentLotteryStatus === 2 || currentLotteryStatus === 3
                    }"
          @click="!temporaryPrize.isUsed && canSwitchPrize && emit('selectPrize', temporaryPrize)"
        >
          <div
            v-if="temporaryPrize.isUsed"
            class="absolute z-50 w-full h-full bg-gray-800/70 item-mask rounded-xl"
          />
          <div class="flex flex-col justify-center items-center p-0 text-center card-body">
            <div class="flex flex-col justify-center items-center tooltip tooltip-left" :data-tip="temporaryPrize.prizeName || temporaryPrize.name">
              <h2 class="p-0 m-0 overflow-hidden w-28 card-title whitespace-nowrap text-ellipsis">
                {{temporaryPrize.name }}
              </h2>
              <p class="p-0 m-0 text-sm text-gray-500">
                {{ temporaryPrize.prizeName }}
              </p>
            </div>
            <div class="relative w-3/4 mt-[-4px]">
              <p class="absolute inset-0 z-40 p-0 m-0 flex items-center justify-center font-medium text-white">
                {{ temporaryPrize.isUsedCount }}/{{
                  temporaryPrize.count }}
              </p>
              <progress
                class="w-full h-6 progress progress-primary" :value="temporaryPrize.isUsedCount"
                :max="temporaryPrize.count"
              />
            </div>
            <!-- <p class="p-0 m-0">{{ item.isUsedCount }}/{{ item.count }}</p> -->
          </div>
          <div class="flex flex-col gap-1 mr-2">
            <div class="tooltip tooltip-left" :data-tip="t('tooltip.edit')">
              <div class="cursor-pointer hover:text-blue-400" :class="{'opacity-50 cursor-not-allowed': currentLotteryStatus === 2 || currentLotteryStatus === 3}" @click="canSwitchPrize && addTemporaryPrize">
                <svg-icon name="edit" />
              </div>
            </div>
            <div class="tooltip tooltip-left" :data-tip="t('tooltip.delete')">
              <div class="cursor-pointer hover:text-blue-400" :class="{'opacity-50 cursor-not-allowed': currentLotteryStatus === 2 || currentLotteryStatus === 3}" @click="canSwitchPrize && deleteTemporaryPrize">
                <svg-icon name="delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <transition name="prize-list" :appear="true">
        <div v-if="prizeShow && !isMobile && !temporaryPrize.isShow" class="flex items-center">
          <ul ref="prizeListRef" class="flex flex-col gap-3 p-2 rounded-xl bg-slate-500/50">
            <li v-for="item in localPrizeList" :key="item.id">
              <div
                  v-if="item.isShow"
                  class="relative flex flex-row items-center justify-between w-64 h-20 shadow-xl card bg-base-100 cursor-pointer"
                  :class="{
                    'current-prize': currentPrize.id === item.id,
                    'lottery-in-progress': currentPrize.id === item.id && currentLotteryStatus === 2,
                    'opacity-50 cursor-not-allowed': item.isUsed || currentLotteryStatus === 2 || currentLotteryStatus === 3
                  }"
                  @click="!item.isUsed && canSwitchPrize && emit('selectPrize', item)"
                >
                <div
                  v-if="item.isUsed"
                  class="absolute z-50 w-full h-full bg-gray-800/70 item-mask rounded-xl"
                />
                <div class="flex flex-col justify-center items-center p-0 text-center card-body">
                  <div class="flex flex-col justify-center items-center tooltip tooltip-left" :data-tip="item.prizeName || item.name">
                    <h2
                      class="w-24 p-0 m-0 overflow-hidden text-center card-title whitespace-nowrap text-ellipsis"
                    >
                      {{ item.name }}
                    </h2>
                    <p class="p-0 m-0 text-sm text-gray-500">
                      {{ item.prizeName }}
                    </p>
                  </div>
                  <div class="relative w-3/4 mt-[-4px]">
                    <p class="absolute inset-0 z-40 p-0 m-0 flex items-center justify-center font-medium text-white">
                    {{ item.isUsedCount }}/{{
                      item.count }}
                  </p>
                    <progress
                      class="w-full h-6 progress progress-primary" :value="item.isUsedCount"
                      :max="item.count"
                    />
                  </div>
                  <!-- <p class="p-0 m-0">{{ item.isUsedCount }}/{{ item.count }}</p> -->
                </div>
              </div>
            </li>
          </ul>
          <div class="flex flex-col gap-3">
            <!-- 重置抽奖状态按钮 -->
            <div class="tooltip tooltip-right" :data-tip="t('button.resetPrizeStatus')">
              <div
                class="flex items-center justify-center w-6 h-8 rounded-r-lg cursor-pointer prize-option bg-slate-500/50"
                :class="{'opacity-50 cursor-not-allowed': currentLotteryStatus === 2 || currentLotteryStatus === 3}"
                @click="canSwitchPrize && emit('resetPrizeStatus')"
              >
                <svg-icon name="reset" class="w-full h-full" />
              </div>
            </div>
            <div class="tooltip tooltip-right" :data-tip="t('tooltip.prizeList')">
              <div
                class="flex items-center w-6 h-8 rounded-r-lg cursor-pointer prize-option bg-slate-500/50"
                @click="prizeShow = !prizeShow"
              >
                <svg-icon name="arrow_left" class="w-full h-full" />
              </div>
            </div>
            <div class="tooltip tooltip-right" :data-tip="t('tooltip.addActivity')">
              <div
                class="flex items-center w-6 h-8 rounded-r-lg cursor-pointer prize-option bg-slate-500/50"
                :class="{'opacity-50 cursor-not-allowed': currentLotteryStatus === 2 || currentLotteryStatus === 3}"
                @click="canSwitchPrize && addTemporaryPrize"
              >
                <svg-icon name="add" class="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <transition name="prize-operate" :appear="true">
      <div v-show="!prizeShow" class="flex flex-col gap-3 absolute left-0 bottom-0 translate-y-3/4 z-20">
        <!-- 重置抽奖状态按钮 - 收起状态 -->
        <div class="tooltip tooltip-right" :data-tip="t('button.resetPrizeStatus')">
          <div
            class="flex items-center justify-center w-6 h-8 rounded-r-lg cursor-pointer prize-option bg-slate-500/50"
            :class="{'opacity-50 cursor-not-allowed': currentLotteryStatus === 2 || currentLotteryStatus === 3}"
            @click="canSwitchPrize && emit('resetPrizeStatus')"
          >
            <svg-icon name="reset" class="w-full h-full" />
          </div>
        </div>
        <div class="tooltip tooltip-right" :data-tip="t('tooltip.prizeList')">
          <div
            class="flex items-center w-6 h-8 rounded-r-lg cursor-pointer prize-option bg-slate-500/50"
            @click="prizeShow = !prizeShow"
          >
            <svg-icon name="arrow_right" class="w-full h-full" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style lang='scss' scoped>
.label {
    width: 120px;
}

.prize-list-enter-active {
    -webkit-animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.prize-list-leave-active {
    -webkit-animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.prize-operate-enter-active {
    // 延时显示
    animation: show-operate 0.6s;
    -webkit-animation: show-operate 0.6s;
}

.current-prize {
    position: relative;
    border-radius: 20px;
    /* 只保留柔和的光圈效果 */
    box-shadow: 
        0 0 0 2px rgba(79, 207, 112, 0.8),
        0 0 12px rgba(79, 207, 112, 0.5);
    transition: box-shadow 0.3s ease;
}

/* 抽奖中状态，保持与普通选中状态一致的光圈效果 */
.lottery-in-progress {
    box-shadow: 
        0 0 0 2px rgba(79, 207, 112, 0.8),
        0 0 16px rgba(79, 207, 112, 0.7);
    transition: box-shadow 0.3s ease;
}

/* 确保奖项卡片内部布局正确 */
.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 0;
    margin: 0;
}

/* 确保h2标题正确显示 */
.card-title {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* 确保进度条和计数文字正确对齐 */
.card-body p {
    margin: 0;
    padding: 0;
}

.card-body progress {
    margin: 0;
    padding: 0;
}



@-webkit-keyframes slide-right {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(30px);
        transform: translateX(30px);
    }
}

@keyframes slide-right {
    0% {
        -webkit-transform: translateX(-200px);
        transform: translateX(-200px);
    }

    100% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
}

@-webkit-keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(-100px);
        transform: translateX(-100px);
    }
}

@keyframes slide-left {
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }

    100% {
        -webkit-transform: translateX(-400px);
        transform: translateX(-400px);
    }
}

@-webkit-keyframes show-operate {
    0% {
        opacity: 0;
    }

    99% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes show-operate {
    0% {
        opacity: 0;
    }

    99% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
</style>