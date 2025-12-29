import { storeToRefs } from 'pinia'
import useStore from '@/store'

export function localStorageListener() {
  const store = useStore()
  const { globalConfig, prizeConfig, personConfig, system } = store
  
  // 定义一个比较两个对象是否相同的函数
  const isEqual = (obj1: any, obj2: any) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2)
  }
  
  // 定义一个更新store的函数
  const updateStoreFromLocalStorage = (storeKey: string) => {
    console.log('Updating store from localStorage:', storeKey)
    try {
      // 直接从localStorage中读取最新数据
      const localStorageData = localStorage.getItem(storeKey)
      if (localStorageData) {
        const newData = JSON.parse(localStorageData)
        console.log('New data from localStorage:', newData)
        
        // 根据不同的 store key 更新相应的 store
        switch (storeKey) {
          case 'globalConfig':
            // globalConfig 的数据结构是 { globalConfig: {...} }
            if (newData.globalConfig && !isEqual(newData.globalConfig, globalConfig.globalConfig)) {
              console.log('Updating globalConfig:', newData.globalConfig)
              Object.assign(globalConfig.globalConfig, newData.globalConfig)
            } else {
              console.log('globalConfig is already up to date, skipping update')
            }
            break
          case 'prizeConfig':
            // prizeConfig 的数据结构是直接存储的 prizeConfig 对象
            if (newData.prizeList && !isEqual(newData, prizeConfig.prizeConfig)) {
              console.log('Updating prizeConfig:', newData)
              Object.assign(prizeConfig.prizeConfig, newData)
            } else {
              console.log('prizeConfig is already up to date, skipping update')
            }
            break
          case 'personConfig':
            // personConfig 的数据结构是直接存储的 personConfig 对象
            if (newData.allPersonList && !isEqual(newData, personConfig.personConfig)) {
              console.log('Updating personConfig:', newData)
              Object.assign(personConfig.personConfig, newData)
            } else {
              console.log('personConfig is already up to date, skipping update')
            }
            break
          case 'system':
            // system 的数据结构是直接存储的属性
            console.log('Updating system:', newData)
            let needUpdate = false
            if (newData.hasOwnProperty('isMobile') && system.isMobile !== newData.isMobile) {
              system.isMobile = newData.isMobile
              needUpdate = true
            }
            if (newData.hasOwnProperty('isChrome') && system.isChrome !== newData.isChrome) {
              system.isChrome = newData.isChrome
              needUpdate = true
            }
            if (!needUpdate) {
              console.log('system is already up to date, skipping update')
            }
            break
        }
      }
    } catch (error) {
      console.error('Failed to parse localStorage data:', error)
    }
  }
  
  // 监听 localStorage 变化
  window.addEventListener('storage', (event) => {
    console.log('Storage event triggered:', event)
    // 检查变化的数据是否是我们关心的 store
    const storeKeys = ['globalConfig', 'prizeConfig', 'personConfig', 'system']
    if (storeKeys.includes(event.key || '')) {
      updateStoreFromLocalStorage(event.key || '')
    }
  })
  
  // 也监听我们自定义的事件，确保同一标签页内也能更新
  window.addEventListener('localStorage:manualUpdate', (event) => {
    const customEvent = event as CustomEvent
    const { storeKey } = customEvent.detail
    console.log('Manual update event triggered for:', storeKey)
    updateStoreFromLocalStorage(storeKey)
  })
}

// 手动触发更新事件的函数，用于同一标签页内的更新
export function triggerLocalStorageUpdate(storeKey: string) {
  window.dispatchEvent(new CustomEvent('localStorage:manualUpdate', {
    detail: {
      storeKey
    }
  }))
}
