/**
 * store 状态管理
 * @copyright 武汉大学 mars3d.cn
 * @author tankenqi 2022-02-19
 */
import { Store, createStore } from "vuex"
import { InjectionKey } from "vue"

export interface Test {
  count?: number
}

export const key: InjectionKey<Store<Test>> = Symbol("test")

export const store = createStore<Test>({
  state: {
    count: 0
  }
})
