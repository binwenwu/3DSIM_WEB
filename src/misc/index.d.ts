/**
 * ts下为window定义全局变量
 * @copyright 武汉大学 mars3d.cn
 * @author 木遥 2022-01-01
 */

export {}
declare global {
  interface Window {
    buildTime: Date // 打包时间
    toolBarMenuData: any
    map: any,
    geoserverIp: string,
    mapWork: any // 存储当前业务的地图工作对象，以便传递给其他辅助组件使用
  }
}
