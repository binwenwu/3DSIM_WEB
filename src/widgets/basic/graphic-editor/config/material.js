// 材质对应的api文档: https://mars3d.cn/api/MaterialType.html
const materialConfig = {
  Color: [{ name: "color", label: "颜色", type: "color", defval: "#3388ff" }],

  PolylineDash: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "gapColor", label: "间隔颜色", type: "color", defval: "rgba(255,255,255,0)" },
    { name: "dashLength", label: "虚线间长", type: "number", step: 1, defval: 16.0 }
  ],
  PolylineOutline: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "outlineColor", label: "衬色", type: "color", defval: "rgba(255,255,255,0)" },
    { name: "outlineWidth", label: "衬色宽度", type: "number", min: 0, max: 20, step: 1, defval: 1.0 }
  ],
  PolylineArrow: [{ name: "color", label: "颜色", type: "color", defval: "#3388ff" }],
  PolylineGlow: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "glowPower", label: "高亮强度", type: "number", min: 0, max: 1, step: 0.1, defval: 0.25 },
    { name: "taperPower", label: "渐变效果", type: "number", min: 0, max: 20, step: 0.1, defval: 1.0 }
  ],
  LineFlow: [
    { name: "image", label: "图片", type: "label", defval: "img/textures/fence.png" },
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 },

    {
      name: "repeat_x",
      label: "X重复数量",
      type: "number",
      step: 1,
      defval: 1,
      show(style, allStyle, graphicType) {
        return !style.axisY
      }
    },
    {
      name: "repeat_y",
      label: "Y重复数量",
      type: "number",
      step: 1,
      defval: 1,
      show(style, allStyle, graphicType) {
        return style.axisY
      }
    },

    { name: "axisY", label: "Y轴朝上", type: "radio", defval: false }
  ],
  LineFlowColor: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "alpha", label: "透明度", type: "slider", min: 0, max: 1, step: 0.1, defval: 1 },
    { name: "percent", label: "比例", type: "number", min: 0, max: 1, step: 0.01, defval: 0.04 },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 },
    { name: "startTime", label: "开始时间", type: "number", step: 1, defval: 0 }
  ],
  ODLine: [
    { name: "color", label: "颜色", type: "color", defval: "#ff0000" },
    { name: "bgColor", label: "背景颜色", type: "color", defval: "#000000" },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 },
    { name: "startTime", label: "开始时间", type: "number", step: 1, defval: 0 },
    {
      name: "bidirectional",
      label: " 运行形式",
      type: "combobox",
      defval: "0",
      data: [
        { label: "正向运动", type: "number", value: "0" },
        { label: "反向运动", type: "number", value: "1" },
        { label: "双向运动", type: "number", value: "2" }
      ]
    }
  ],
  LineFlicker: [
    { name: "color", label: "泛光颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
  ],
  LineTrail: [
    { name: "color", label: "轨迹颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
  ],
  LineBloom: [
    { name: "color", label: "泛光颜色", type: "color", defval: "#3388ff" },
    { name: "glow", label: "泛光强度", type: "number", step: 1, defval: 1 },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
  ],

  WallScroll: [
    { name: "image", label: "图片", type: "label", defval: "img/textures/fence.png" },
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "count", label: "数量", type: "number", min: 0, step: 1, defval: 1 },
    { name: "speed", label: "速度", type: "number", min: 0, step: 1, defval: 10 },
    { name: "reverse", label: "方向往上", type: "radio", defval: false },
    { name: "bloom", label: "是否泛光", type: "radio", defval: false },
    { name: "axisY", label: "Y轴朝上", type: "radio", defval: false }
  ],

  Image: [
    { name: "image", label: "图片", type: "label", defval: "" },
    { name: "transparent", label: "是否透明", type: "radio", defval: false },
    {
      name: "opacity",
      label: "透明度",
      type: "slider",
      min: 0,
      max: 1,
      step: 0.1,
      defval: 1,
      show(style, allStyle, graphicType) {
        return style.transparent === true
      }
    },
    { name: "repeat_x", label: "X重复次数", type: "number", step: 1, defval: 1 },
    { name: "repeat_y", label: "Y重复次数", type: "number", step: 1, defval: 1 }
  ],
  Text: [
    {
      name: "text",
      label: "文本内容",
      type: "textarea",
      defval: "文字"
    },
    {
      name: "font_family",
      label: "字体",
      type: "combobox",
      defval: "楷体",
      data: [
        { label: "微软雅黑", value: "微软雅黑" },
        { label: "宋体", value: "宋体" },
        { label: "楷体", value: "楷体" },
        { label: "隶书", value: "隶书" },
        { label: "黑体", value: "黑体" }
      ]
    },
    { name: "font_size", label: "字体大小", type: "number", step: 1, defval: 100 },
    {
      name: "font_weight",
      label: "是否加粗",
      type: "combobox",
      defval: "normal",
      data: [
        { label: "是", value: "bold" },
        { label: "否", value: "normal" }
      ]
    },
    {
      name: "font_style",
      label: "是否斜体",
      type: "combobox",
      defval: "normal",
      data: [
        { label: "是", value: "italic" },
        { label: "否", value: "normal" }
      ]
    },
    { name: "color", label: "文本颜色", type: "color", defval: "#FFFF00" },

    { name: "stroke", label: "是否描边", type: "radio", defval: false },
    {
      name: "strokeColor",
      label: "描边颜色",
      type: "color",
      defval: "#ffffff",
      show(style, allStyle, graphicType) {
        return style.stroke
      }
    },
    {
      name: "strokeWidth",
      label: "描边宽度",
      type: "number",
      min: 1,
      max: 5,
      step: 1,
      defval: 1,
      show(style, allStyle, graphicType) {
        return style.stroke
      }
    },

    {
      name: "background",
      label: "是否背景",
      type: "radio",
      defval: false
    },
    {
      name: "backgroundColor",
      label: "背景颜色",
      type: "color",
      defval: "#000000",
      show(style, allStyle, graphicType) {
        return style.background
      }
    },
    {
      name: "padding",
      label: "背景内边距",
      type: "number",
      step: 1,
      defval: 5,
      show(style, allStyle, graphicType) {
        return style.background
      }
    }
  ],
  Grid: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "cellAlpha", label: "填充透明度", type: "slider", min: 0, max: 1, step: 0.1, defval: 0.1 },
    { name: "lineCount", label: "网格数量", type: "number", step: 1, defval: 10 },
    { name: "lineThickness", label: "网格宽度", type: "number", step: 1, defval: 2 }
  ],
  Checkerboard: [
    { name: "evenColor", label: "主色", type: "color", defval: "#000000" },
    { name: "oddColor", label: "衬色", type: "color", defval: "#ffffff" },
    { name: "repeat_x", label: "横向数量", type: "number", step: 1, defval: 10 },
    { name: "repeat_y", label: "纵向数量", type: "number", step: 1, defval: 10 }
  ],
  Stripe: [
    { name: "evenColor", label: "主色", type: "color", defval: "#000000" },
    { name: "oddColor", label: "衬色", type: "color", defval: "#ffffff" },
    { name: "repeat", label: "数量", type: "number", step: 1, defval: 10 },
    { name: "orientation", label: "方向", type: "radio", defval: false },
    { name: "offset", label: "起始位置", type: "number", step: 1, defval: 0 }
  ],
  PolyGradient: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "alphaPower", label: "透明系数", type: "number", min: 0, max: 50, step: 0.1, defval: 1.5 },
    { name: "diffusePower", label: "漫射系数", type: "number", min: 0, max: 50, step: 0.1, defval: 1.6 }
  ],
  PolyAsphalt: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "size", label: "透明系数", type: "number", min: 0, max: 10, step: 0.01, defval: 0.02 },
    { name: "frequency", label: "漫射系数", type: "number", min: 0, max: 10, step: 0.01, defval: 0.2 }
  ],
  PolyBlob: [
    { name: "evenColor", label: "主色", type: "color", defval: "#000000" },
    { name: "oddColor", label: "衬色", type: "color", defval: "#ffffff" },
    { name: "frequency", label: "漫射系数", type: "number", min: 0, max: 50, step: 0.1, defval: 10.0 }
  ],
  PolyWood: [
    { name: "evenColor", label: "主色", type: "color", defval: "#000000" },
    { name: "oddColor", label: "衬色", type: "color", defval: "#ffffff" },
    { name: "frequency", label: "漫射系数", type: "number", min: 0, max: 50, step: 0.1, defval: 10.0 },
    { name: "noiseScale", label: "噪波比例", type: "number", min: 0, max: 50, step: 0.01, defval: 0.7 },
    { name: "grainFrequency", label: "颗粒的频率", type: "number", min: 0, max: 100, step: 0.1, defval: 27 }
  ],
  Water: [
    { name: "baseWaterColor", label: "基础颜色", type: "color", defval: "#123e59" },
    { name: "blendColor", label: "混合颜色", type: "color", defval: "#123e59" },
    { name: "normalMap", label: "反射图片", type: "label", defval: "img/textures/waterNormals.jpg" },
    { name: "frequency", label: "波数", type: "number", min: 1, max: 100000, step: 1, defval: 9000 },
    { name: "amplitude", label: "水波振幅", type: "number", min: 0, max: 100, step: 1, defval: 5.0 },
    { name: "animationSpeed", label: "动画速度", type: "slider", min: 0, max: 1, step: 0.01, defval: 0.03 },
    { name: "specularIntensity", label: "反射强度", type: "slider", min: 0, max: 1, step: 0.1, defval: 0.5 }
  ],
  WaterLight: [
    { name: "specularMap", label: "反射图片", type: "label", defval: "img/textures/poly-stone.jpg" },
    { name: "alpha", label: "透明度", type: "slider", min: 0, max: 1, step: 0.1, defval: 0.2 }
  ],

  RectSlide: [
    { name: "image", label: "图片", type: "label", defval: "" },
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "秒刷新数", type: "number", step: 1, defval: 60 },
    { name: "pure", label: "是否纯色", type: "radio", defval: false }
  ],

  ScanLine: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "速度", type: "number", min: 0, step: 1, defval: 10 }
  ],
  CircleScan: [
    { name: "image", label: "图片", type: "label", defval: "img/textures/circle-scan.png" },
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" }
  ],
  CircleWave: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "count", label: "数量", type: "number", step: 1, defval: 1 },
    { name: "gradient", label: "圈间系数", type: "slider", min: 0, max: 1, step: 0.1, defval: 0.1 },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
  ],
  RadarLine: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "速度", type: "number", min: 0, step: 1, defval: 10 }
  ],

  CylinderWave: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "repeat", label: "圈数量", type: "number", step: 1, defval: 30 },
    { name: "thickness", label: "圈宽度比例", type: "slider", min: 0.01, max: 0.99, step: 0.01, defval: 0.3 },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
  ],

  EllipsoidWave: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
  ],
  EllipsoidElectric: [
    { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
    { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
  ]
}

// 部分矢量对应与其他基本类型完全相同配置时，复制配置
materialConfig.Image2 = materialConfig.Image
materialConfig.PolyFacet = materialConfig.PolyBlob
materialConfig.PolyGrass = materialConfig.PolyBlob
materialConfig.RadarWave = materialConfig.RadarLine

// window.materialConfig = materialConfig
export default materialConfig
