<template>
  <mars-dialog :draggable="false" customClass="base-pannel" right="10" top="10">
    <template v-for="(item, i) in data" :key="i">
      <div v-if="item.widget && !item.children" class="toolbar-item" @click="showWidget(item.widget)">
        <mars-icon :icon="item.icon" width="18"></mars-icon>
        <span class="title">{{ item.name }}</span>
      </div>
      <mars-dropdown-menu v-if="item.children && !item.widget" trigger="hover" placement="bottomRight">
        <div class="toolbar-item">
          <mars-icon :icon="item.icon" width="18"></mars-icon>
          <span class="title">{{ item.name }}</span>
          <mars-icon icon="down" width="18"></mars-icon>
        </div>
        <template #overlay>
          <a-menu @click="clickMenu">
            <a-menu-item v-for="child in item.children" :key="child.widget" :title="child.name">
              <mars-icon :icon="child.icon" width="18"></mars-icon>
              <span>{{ child.name }}</span>
            </a-menu-item>
          </a-menu>
        </template>
      </mars-dropdown-menu>
    </template>
  </mars-dialog>
</template>

<script setup lang="ts">
/**
 * 导航菜单按钮 （右上角）
 * @copyright 武汉大学 mars3d.cn
 * @author tankenqi 2022-01-10
 */
import { useWidget } from "@mars/common/store/widget"

import { useI18n } from "vue-i18n"
const { t } = useI18n()


const { activate } = useWidget()

const data = [
  // { name: "底图", icon: "international", widget: "manage-basemap" },
  {
    name: t("3dsim_tools"),
    icon: "toolkit",
    children: [
      { name: t("data_import"), icon: "upload-one", widget: "upload" },
      { name: t("data_query"), icon: "database-search", widget: "query" },
      { name: t("data_convert"), icon: "switch", widget: "format-convert" }
    ]
  },
  {
    name: t("analysis_tools"),
    icon: "tool",
    children: [
      { name: t("measure_on_the_graph"), icon: "ruler", widget: "measure" },
      { name: t("spatial_analysis"), icon: "analysis", widget: "analysis" },
      { name: t("coordinate_positioning"), icon: "local", widget: "location-point" },
      { name: t("plot_on_the_diagram"), icon: "hand-painted-plate", widget: "plot" },
      { name: t("comparison_of_roller_blinds"), icon: "switch-contrast", widget: "map-split" }
    ]
  },
  { name: t("layer_manage"), icon: "layers", widget: "basic-layers" }
]

const showWidget = (widget: string) => {
  activate(widget)
}

const clickMenu = ({ key }: any) => {
  showWidget(key)
}
</script>

<style lang="less">
.base-pannel {
  padding: 0 !important;
  background-image: none !important;
  border: 1px solid;
  border: none;
  border-radius: 2px !important;
  background-color: var(--mars-bg-base);
  height: 40px;

  .toolbar-item {
    display: inline-block;
    padding: 6px 12px;
    height: 100%;
    color: var(--mars-text-color);
    font-size: 15px;
    cursor: pointer;

    &:hover {
      background-color: var(--mars-select-bg);
    }
  }

  .mars-icon {
    margin-right: 5px;
    color: var(--mars-text-color);
  }
}
</style>
