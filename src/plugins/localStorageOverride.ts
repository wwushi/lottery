export function initLocalStorageOverride() {
  // 保存原始方法
  const originalSetItem = localStorage.setItem;
  const originalRemoveItem = localStorage.removeItem;
  const originalClear = localStorage.clear;

  // 重写setItem
  localStorage.setItem = function(key: string, value: string) {
    const oldValue = localStorage.getItem(key);
    originalSetItem.call(this, key, value);
    
    // 触发标准storage事件
    window.dispatchEvent(new StorageEvent('storage', {
      key: key,
      oldValue: oldValue,
      newValue: value,
      url: window.location.href,
      storageArea: localStorage
    }));
    
    // 触发自定义事件，确保同一标签页内也能更新
    window.dispatchEvent(new CustomEvent('localStorage:manualUpdate', {
      detail: {
        storeKey: key
      }
    }));
  };

  // 重写removeItem
  localStorage.removeItem = function(key: string) {
    const oldValue = localStorage.getItem(key);
    originalRemoveItem.call(this, key);
    
    // 触发标准storage事件
    window.dispatchEvent(new StorageEvent('storage', {
      key: key,
      oldValue: oldValue,
      newValue: null,
      url: window.location.href,
      storageArea: localStorage
    }));
    
    // 触发自定义事件，确保同一标签页内也能更新
    window.dispatchEvent(new CustomEvent('localStorage:manualUpdate', {
      detail: {
        storeKey: key
      }
    }));
  };

  // 重写clear
  localStorage.clear = function() {
    // 保存所有键值对以便触发事件
    const oldValues: Record<string, string | null> = {};
    const storeKeys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        oldValues[key] = localStorage.getItem(key);
        storeKeys.push(key);
      }
    }
    
    originalClear.call(this);
    
    // 对每个清除的键触发storage事件和自定义事件
    for (const key of storeKeys) {
      window.dispatchEvent(new StorageEvent('storage', {
        key: key,
        oldValue: oldValues[key],
        newValue: null,
        url: window.location.href,
        storageArea: localStorage
      }));
      
      // 触发自定义事件，确保同一标签页内也能更新
      window.dispatchEvent(new CustomEvent('localStorage:manualUpdate', {
        detail: {
          storeKey: key
        }
      }));
    }
  };
}
