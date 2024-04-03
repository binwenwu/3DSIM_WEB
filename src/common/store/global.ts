/**
 * store 状态管理
 * @copyright 武汉大学 mars3d.cn
 * @author tankenqi 2022-02-19
 */
import { Store, createStore } from "vuex"
import { InjectionKey } from "vue"

export interface Global {
  SceneInfo?: any
}

export const key: InjectionKey<Store<Global>> = Symbol("global")

export const store = createStore<Global>({
  state: {
    SceneInfo: null
  },

  mutations: {
    updateSceneInfo(state, value: any) {
      state.SceneInfo = value
    }
  }
})
