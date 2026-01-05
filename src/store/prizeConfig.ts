import type { IPrizeConfig } from '@/types/storeType'
import { defineStore } from 'pinia'
import { defaultCurrentPrize, defaultPrizeList } from './data'

export const usePrizeConfig = defineStore('prize', {
  state() {
    return {
      prizeConfig: {
        prizeList: defaultPrizeList,
        currentPrize: defaultCurrentPrize,
        temporaryPrize: {
          id: '',
          name: '',
          prizeName: '',
          sort: 0,
          isAll: false,
          count: 1,
          isUsedCount: 0,
          separateCount: {
            enable: true,
            countList: [],
          },
          desc: '',
          isShow: false,
          isUsed: false,
          frequency: 1,
        } as IPrizeConfig,
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
    // 获取临时的奖项
    getTemporaryPrize(state) {
      return state.prizeConfig.temporaryPrize
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
      // 检查是否是临时奖项 - 通过id前缀识别，更可靠
      const isTemporaryPrize = prizeConfigItem.id && prizeConfigItem.id.startsWith('temporary_')
      const prizeListLength = this.prizeConfig.prizeList.length
      
      if (prizeConfigItem.isUsed) {
        let foundNextPrize = false
        let nextPrize: IPrizeConfig | null = null
        
        // 尝试从prizeList中找到下一个未使用的奖项
        if (prizeListLength > 0) {
          for (let i = 0; i < prizeListLength; i++) {
            if (!this.prizeConfig.prizeList[i].isUsed) {
              nextPrize = this.prizeConfig.prizeList[i]
              foundNextPrize = true
              break
            }
          }
        }
        
        // 处理临时奖项
        if (isTemporaryPrize) {
          // 1. 立即隐藏临时奖项，避免继续显示
          this.prizeConfig.temporaryPrize.isShow = false
          
          // 2. 如果找到下一个奖项，设置为当前奖项
          if (foundNextPrize && nextPrize) {
            this.setCurrentPrize(nextPrize)
          }
          
          // 3. 重置临时奖项数据，确保它不会继续影响当前抽奖流程
          this.resetTemporaryPrize()
        }
        // 处理普通奖项
        else {
          // 如果找到下一个奖项，设置为当前奖项
          if (foundNextPrize && nextPrize) {
            this.setCurrentPrize(nextPrize)
            // 重置临时奖项，因为我们已经回到了正常奖项流程
            this.resetTemporaryPrize()
          }
        }
      }
      else {
        return
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
    // 设置临时奖项
    setTemporaryPrize(prizeItem: IPrizeConfig) {
      if (prizeItem.isShow === false) {
        for (let i = 0; i < this.prizeConfig.prizeList.length; i++) {
          if (this.prizeConfig.prizeList[i].isUsed === false) {
            this.setCurrentPrize(this.prizeConfig.prizeList[i])

            break
          }
        }
        this.resetTemporaryPrize()

        return
      }

      this.prizeConfig.temporaryPrize = prizeItem
    },
    // 重置临时奖项
    resetTemporaryPrize() {
      this.prizeConfig.temporaryPrize = {
        id: '',
        name: '',
        prizeName: '',
        sort: 0,
        isAll: false,
        count: 1,
        isUsedCount: 0,
        separateCount: {
          enable: true,
          countList: [],
        },
        desc: '',
        isShow: false,
        isUsed: false,
        frequency: 1,
      } as IPrizeConfig
    },
    // 重置所有配置
    resetDefault() {
      this.prizeConfig = {
        prizeList: defaultPrizeList,
        currentPrize: defaultCurrentPrize,
        temporaryPrize: {
          id: '',
          name: '',
          prizeName: '',
          sort: 0,
          isAll: false,
          count: 1,
          isUsedCount: 0,
          separateCount: {
            enable: true,
            countList: [],
          },
          desc: '',
          isShow: false,
          isUsed: false,
          frequency: 1,
        } as IPrizeConfig,
      }
    },
    // 重置所有奖项到未开始状态
    resetAllPrizeStatus() {
      // 重置所有奖项状态
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
      // 设置第一个未使用的奖项为当前奖项
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
