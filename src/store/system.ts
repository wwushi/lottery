import { defineStore } from 'pinia'
// import { IPrizeConfig } from '@/types/storeType';
export const useSystem = defineStore('system', {
  state() {
    return {
      isMobile: false,
      isChrome: true,
      lotteryStatus: 0, // 0为初始状态，1为抽奖准备状态，2为抽奖中状态，3为抽奖结束状态
    }
  },
  getters: {
    getIsMobile(state) {
      return state.isMobile
    },
    getIsChrome(state) {
      return state.isChrome
    },
    getLotteryStatus(state) {
      return state.lotteryStatus
    },
  },
  actions: {
    setIsMobile(isMobile: boolean) {
      this.isMobile = isMobile
    },
    setIsChrome(isChrome: boolean) {
      this.isChrome = isChrome
    },
    setLotteryStatus(status: number) {
      this.lotteryStatus = status
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        // 如果要存储在localStorage中
        storage: localStorage,
        key: 'system',
      },
    ],
  },
})
