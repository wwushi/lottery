import type { IPrizeConfig } from '@/types/storeType'
import { defineStore } from 'pinia'
import { defaultCurrentPrize, defaultPrizeList } from './data'

export const usePrizeConfig = defineStore('prize', {
  state() {
    return {
      prizeConfig: {
        prizeList: defaultPrizeList,
        currentPrize: defaultCurrentPrize,
      },
    }
  },
  getters: {
    // 获取全部配置
    getPrizeConfigAll(state) {
      return state.prizeConfig
    },
    // 获取奖品列表
    getPrizeConfig(state) {
      return state.prizeConfig.prizeList
    },
    // 根据id获取配置
    getPrizeConfigById(state) {
      return (id: number | string) => {
        return state.prizeConfig.prizeList.find(item => item.id === id)
      }
    },
    // 获取当前奖项
    getCurrentPrize(state) {
      return state.prizeConfig.currentPrize
    },

  },
  actions: {
    // 设置奖项
    setPrizeConfig(prizeList: IPrizeConfig[]) {
      this.prizeConfig.prizeList = prizeList
    },
    // 添加奖项
    addPrizeConfig(prizeConfigItem: IPrizeConfig) {
      this.prizeConfig.prizeList.push(prizeConfigItem)
    },
    // 删除奖项
    deletePrizeConfig(prizeConfigItemId: number | string) {
      this.prizeConfig.prizeList = this.prizeConfig.prizeList.filter(item => item.id !== prizeConfigItemId)
    },
    // 更新奖项数据
    updatePrizeConfig(prizeConfigItem: IPrizeConfig) {
      const prizeListLength = this.prizeConfig.prizeList.length
      
      // 处理普通奖项
      if (prizeConfigItem.isUsed) {
        let foundNextPrize = false
        // 尝试找到下一个未使用的普通奖项
        if (prizeListLength > 0) {
          for (let i = 0; i < prizeListLength; i++) {
            if (!this.prizeConfig.prizeList[i].isUsed) {
              this.prizeConfig.currentPrize = this.prizeConfig.prizeList[i]
              foundNextPrize = true
              break
            }
          }
        }
      }
    },
    // 删除全部奖项
    deleteAllPrizeConfig() {
      this.prizeConfig.prizeList = [] as IPrizeConfig[]
    },
    // 设置当前奖项
    setCurrentPrize(prizeConfigItem: IPrizeConfig) {
      this.prizeConfig.currentPrize = prizeConfigItem
    },
    // 重置所有配置
    resetDefault() {
      this.prizeConfig = {
        prizeList: defaultPrizeList,
        currentPrize: defaultCurrentPrize,
      }
    },
    // 重置所有奖项到未开始状态
    resetAllPrizeStatus() {
      // 重置所有普通奖项状态
      this.prizeConfig.prizeList.forEach(prize => {
        prize.isUsed = false
        prize.isUsedCount = 0
        // 重置各批次抽取状态
        if (prize.separateCount && prize.separateCount.countList) {
          prize.separateCount.countList.forEach(separate => {
            separate.isUsedCount = 0
          })
        }
      })
      // 设置第一个未使用的普通奖项为当前奖项
      const firstUnusedPrize = this.prizeConfig.prizeList.find(prize => !prize.isUsed)
      if (firstUnusedPrize) {
        this.setCurrentPrize(firstUnusedPrize)
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        // 如果要存储在sessionStorage中
        storage: sessionStorage,
        key: 'prizeConfig',
      },
    ],
  },
})
