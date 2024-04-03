<!-- 空间分析 -->
<template>
  <mars-dialog title="空间分析" :visible="true" right="10" top="85" width="340">
    <div class="mars-dialog__content">
      <div class="f-mb analysis">

        <template v-for="(item, i) in data" :key="i">
          <div class="tool">
            <div class="tool-thum" @click="showWidget(item.widget)" :style="{background: `rgb(${item.rgb[0]}, ${item.rgb[1]}, ${item.rgb[2]})`}">
              <img class="tool-thum_img" :src="item.icon" />
            </div>
            <span>{{ item.name }}</span>
          </div>
        </template>


      </div>
    </div>
  </mars-dialog>
</template>



<script setup lang="ts">
/**
 * 空间分析
 * @copyright 贪肯奇 mars3d.cn
 * @author 武汉大学 2022-01-10
 */
import { useWidget } from "@mars/common/store/widget"

const { activate, disable } = useWidget()

const data = [
  { name: "日照分析", icon: "./img/rzfx-59ce9635.svg", rgb: [221, 117, 27], widget: "sunshine-analysis" },
  { name: "可视域", icon: "./img/ksy-b2f3c8fd.svg", rgb: [61, 227, 244], widget: "visual-analysis" },
  { name: "方量分析", icon: "./img/flfx-298eb069.svg", rgb: [85, 213, 160], widget: "volume-analysis" },
  { name: "地形开挖", icon: "./img/dxkw-55fb7d9f.svg", rgb: [186, 188, 49], widget: "dig-analysis" },
  { name: "地表透明", icon: "./img/dbtm-eb049008.svg", rgb: [221, 117, 27], widget: "surface-transparency" },
  { name: "坡度坡向", icon: "./img/pdpx-f313c10c.svg", rgb: [192, 146, 254], widget: "slope-aspect" },
  { name: "淹没分析", icon: "./img/inundation.svg", rgb: [55, 188, 65], widget: "inundation-analysis" },
  { name: "开敞度", icon: "./img/openness.svg", rgb: [149, 211, 51], widget: "openness-analysis" },
  { name: "天际线", icon: "./img/skyline.svg", rgb: [136, 184, 255], widget: "skyline-analysis" }
]


const showWidget = (widget: string) => {
  disable("analysis")
  activate(widget)
}


</script>

<style scoped lang="less">
.mars-dialog .mars-dialog__content[data-v-0a5fe581] {
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 5px;
}

.analysis {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-left: 20px;
}

.tool {
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
  height: 96px;
  box-sizing: border-box;
  margin: 0 30px 10px 0;
  text-align: center;
  padding-top: 12px;
}

.tool .tool-thum {
  transition: all 0.2s ease;
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: #fd960f;
}

.tool .tool-thum .tool-thum_img {
  width: 24px;
  height: 24px;
  margin: 13px;
}
</style>
