import * as mars3d from "mars3d"

const Cesium = mars3d.Cesium

let map: mars3d.Map // 地图对象

// 初始化当前业务
export function onMounted(mapInstance: mars3d.Map): void {
  map = mapInstance // 记录map
}
// 释放当前业务
export function onUnmounted(): void {
  map = null
}

export function downloadFile(fileName: string, content: string) {
  mars3d.Util.downloadFile(fileName, content)
}

export function julianToDate(julianToDate: any) {
  return Cesium.JulianDate.toDate(julianToDate)
}

export function getMapCurrentTime() {
  const start = map.clock.currentTime.clone()
  const stop = Cesium.JulianDate.addSeconds(start, 10, new Cesium.JulianDate())

  return { start: Cesium.JulianDate.toDate(start), stop: Cesium.JulianDate.toDate(stop) }
}

