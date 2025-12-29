import { Pinia } from 'pinia';
import useStore from '@/store';

export function piniaSyncPlugin(pinia: Pinia) {
  // 监听所有store的变化
  pinia.use(({ store }) => {
    // 只监听特定的store
    const allowedStores = ['person', 'prize', 'global', 'system'];
    if (allowedStores.includes(store.$id)) {
      // 监听store的变化
      store.$subscribe((mutation, state) => {
        console.log(`Store ${store.$id} changed:`, mutation, state);
        
        // 当store变化时，手动触发一个自定义事件
        window.dispatchEvent(new CustomEvent('pinia:storeChanged', {
          detail: {
            storeId: store.$id,
            mutation,
            state
          }
        }));
      }, { deep: true });
    }
  });
}

// 在应用初始化时调用此函数，设置事件监听
export function initPiniaSync() {
  // 监听自定义事件，更新所有store
  window.addEventListener('pinia:storeChanged', (event) => {
    const customEvent = event as CustomEvent;
    const { storeId } = customEvent.detail;
    console.log(`Received store change event for ${storeId}`);
    
    // 这里不需要手动更新store，因为Pinia会自动处理
    // 但是如果需要在其他标签页中更新，我们需要使用localStorage
    // 不过由于我们已经使用了pinia-plugin-persist，数据会自动持久化到localStorage
    // 其他标签页会通过localStorage的storage事件来更新
  });
}
