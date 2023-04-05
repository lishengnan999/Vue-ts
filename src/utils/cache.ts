class LocalCache {
  // 保存缓存
  setCache(key: string, value: any) {
    // 本地保存
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  getCache(key: string) {
    // obj => string => obj
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
