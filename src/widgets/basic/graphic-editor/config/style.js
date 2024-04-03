const styleConfig = {
  // 点状
  label: {
    name: "文字",
    primitive: true,
    style: [
      { name: "text", label: "内容", type: "textarea", defval: "" },

      {
        name: "font_family",
        label: "字体",
        type: "combobox",
        defval: "微软雅黑",
        data: [
          { label: "微软雅黑", value: "微软雅黑" },
          { label: "宋体", value: "宋体" },
          { label: "楷体", value: "楷体" },
          { label: "隶书", value: "隶书" },
          { label: "黑体", value: "黑体" }
        ]
      },
      { name: "font_size", label: "字体大小", type: "number", min: 3, step: 1, defval: 30.0 },
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

      { name: "color", label: "颜色", type: "color", defval: "#ffffff" },
      { name: "outline", label: "是否衬色", type: "radio", defval: false },
      {
        name: "outlineColor",
        label: "衬色颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineWidth",
        label: "衬色宽度",
        type: "number",
        min: 1,
        max: 5,
        step: 1,
        defval: 3.0,
        show(style, allStyle, graphicType) {
          return style.outline
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
        name: "backgroundPadding",
        label: "背景内边距",
        type: "number",
        step: 1,
        defval: 5,
        show(style, allStyle, graphicType) {
          return style.background
        }
      },

      { name: "pixelOffsetX", label: "横向偏移像素", type: "number", step: 1, defval: 0.0 },
      { name: "pixelOffsetY", label: "纵向偏移像素", type: "number", step: 1, defval: 0.0 },

      {
        name: "scaleByDistance",
        label: "是否按视距缩放",
        type: "radio",
        defval: false
      },
      {
        name: "scaleByDistance_far",
        label: "上限",
        type: "number",
        step: 1,
        defval: 1000000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_farValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 0.1,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_near",
        label: "下限",
        type: "number",
        step: 1,
        defval: 1000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_nearValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },
      { name: "visibleDepth", label: "是否被遮挡", type: "radio", defval: true },
      {
        name: "addHeight",
        label: "偏移高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return graphicType !== "point" && graphicType !== "billboard" && graphicType !== "label"
        }
      }
    ]
  },
  canvasLabel: {
    name: "Canvas文字",
    style: [
      { name: "text", label: "内容", type: "textarea", defval: "" },

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
      { name: "font_size", label: "字体大小", type: "number", min: 3, step: 1, defval: 30.0 },
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

      { name: "color", label: "颜色", type: "color", defval: "#ffffff" },
      { name: "stroke", label: "是否衬色", type: "radio", defval: false },
      {
        name: "strokeColor",
        label: "衬色颜色",
        type: "color",
        defval: "#000000",
        show(style, allStyle, graphicType) {
          return style.stroke
        }
      },
      {
        name: "strokeWidth",
        label: "衬色宽度",
        type: "number",
        min: 1,
        max: 5,
        step: 1,
        defval: 3.0,
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
        name: "backgroundPadding",
        label: "背景内边距",
        type: "number",
        step: 1,
        defval: 5,
        show(style, allStyle, graphicType) {
          return style.background
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 1,
        max: 10,
        step: 1,
        defval: 4.0,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      { name: "pixelOffsetX", label: "横向偏移像素", type: "number", step: 1, defval: 0.0 },
      { name: "pixelOffsetY", label: "纵向偏移像素", type: "number", step: 1, defval: 0.0 },

      {
        name: "scaleByDistance",
        label: "是否按视距缩放",
        type: "radio",
        defval: false
      },
      {
        name: "scaleByDistance_far",
        label: "上限",
        type: "number",
        step: 1,
        defval: 1000000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_farValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 0.1,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_near",
        label: "下限",
        type: "number",
        step: 1,
        defval: 1000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_nearValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },
      { name: "visibleDepth", label: "是否被遮挡", type: "radio", defval: true }
    ]
  },
  point: {
    name: "点标记",
    primitive: true,
    style: [
      { name: "pixelSize", label: "像素大小", type: "number", step: 1, defval: 10.0 },
      { name: "color", label: "颜色", type: "color", defval: "#3388ff" },

      { name: "outline", label: "是否边框", type: "radio", defval: true },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 0,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      {
        name: "scaleByDistance",
        label: "是否按视距缩放",
        type: "radio",
        defval: false
      },
      {
        name: "scaleByDistance_far",
        label: "上限",
        type: "number",
        step: 1,
        defval: 1000000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_farValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 0.1,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_near",
        label: "下限",
        type: "number",
        step: 1,
        defval: 1000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_nearValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },
      { name: "visibleDepth", label: "是否被遮挡", type: "radio", defval: true }
    ]
  },
  billboard: {
    name: "图标点标记",
    primitive: true,
    extends: ["divBillboard", "canvasBillboard"],
    style: [
      { name: "image", label: "图标", type: "label", defval: "" },
      { name: "opacity", label: "透明度", type: "slider", defval: 1.0, min: 0, max: 1, step: 0.01 },
      { name: "scale", label: "大小比例", type: "number", step: 1, defval: 1.0 },
      { name: "rotationDegree", label: "旋转角度", type: "number", step: 1, defval: 0.0 },

      {
        name: "horizontalOrigin",
        label: "横向对齐",
        type: "combobox",
        valType: "number",
        defval: 0,
        data: [
          { label: "左边", value: -1 },
          { label: "居中", value: 0 },
          { label: "右边", value: 1 }
        ]
      },
      {
        name: "verticalOrigin",
        label: "垂直对齐",
        type: "combobox",
        valType: "number",
        defval: 1,
        data: [
          { label: "顶部", value: 1 },
          { label: "居中", value: 0 },
          { label: "底部", value: -1 }
        ]
      },

      {
        name: "scaleByDistance",
        label: "是否按视距缩放",
        type: "radio",
        defval: false
      },
      {
        name: "scaleByDistance_far",
        label: "上限",
        type: "number",
        step: 1,
        defval: 1000000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_farValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 0.1,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_near",
        label: "下限",
        type: "number",
        step: 1,
        defval: 1000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_nearValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },
      { name: "visibleDepth", label: "是否被遮挡", type: "radio", defval: true }
    ]
  },
  div: {
    name: "DIV点标记",
    extends: ["divBoderLabel", "divLightPoint", "divUpLabel", "popup", "tooltip"],
    style: [
      {
        name: "color",
        label: "颜色",
        type: "color",
        defval: "#00ffff",
        show(style, allStyle, graphicType) {
          return graphicType === "divLightPoint" || graphicType === "divBoderLabel" || graphicType === "divUpLabel"
        }
      },
      {
        name: "boderColor",
        label: "边框颜色",
        type: "color",
        defval: "#00ffff",
        show(style, allStyle, graphicType) {
          return graphicType === "divBoderLabel"
        }
      },
      {
        name: "size",
        label: "大小",
        type: "number",
        step: 1,
        defval: 10,
        show(style, allStyle, graphicType) {
          return graphicType === "divLightPoint"
        }
      },

      {
        name: "horizontalOrigin",
        label: "横向定位",
        type: "combobox",
        valType: "number",
        defval: 0,
        data: [
          { label: "左边", value: 1 },
          { label: "居中", value: 0 },
          { label: "右边", value: -1 }
        ]
      },
      {
        name: "verticalOrigin",
        label: "垂直定位",
        type: "combobox",
        valType: "number",
        defval: 0,
        data: [
          { label: "顶部", value: -1 },
          { label: "居中", value: 0 },
          { label: "底部", value: 1 }
        ]
      },

      {
        name: "scaleByDistance",
        label: "是否按视距缩放",
        type: "radio",
        defval: false
      },
      {
        name: "scaleByDistance_far",
        label: "上限",
        type: "number",
        step: 1,
        defval: 1000000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_farValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 0.1,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_near",
        label: "下限",
        type: "number",
        step: 1,
        defval: 1000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_nearValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },
      { name: "testPoint", label: "是否显示测试点", type: "radio", defval: false },
      { name: "html", label: "Html文本", type: "label", defval: "" }
    ]
  },
  divPlane: {
    name: "DIV三维平面",
    style: [
      { name: "scale", label: "比例", type: "number", step: 1, defval: 1.0 },
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 90.0 },

      {
        name: "horizontalOrigin",
        label: "横向定位",
        type: "combobox",
        valType: "number",
        defval: 0,
        data: [
          { label: "左边", value: 1 },
          { label: "居中", value: 0 },
          { label: "右边", value: -1 }
        ]
      },
      {
        name: "verticalOrigin",
        label: "垂直定位",
        type: "combobox",
        valType: "number",
        defval: 0,
        data: [
          { label: "顶部", value: -1 },
          { label: "居中", value: 0 },
          { label: "底部", value: 1 }
        ]
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },

      { name: "testPoint", label: "是否显示测试点", type: "radio", defval: false },
      { name: "html", label: "Html文本", type: "label", defval: "" }
    ]
  },

  fontBillboard: {
    name: "字体点标记",
    style: [
      { name: "iconClass", label: "Class样式", type: "label", defval: "fa fa-automobile" },
      { name: "iconSize", label: "图标大小", type: "number", step: 1, defval: 50 },

      { name: "color", label: "颜色", type: "color", defval: "#00ffff" },

      {
        name: "horizontalOrigin",
        label: "横向对齐",
        type: "combobox",
        valType: "number",
        defval: 0,
        data: [
          { label: "左边", value: 1 },
          { label: "居中", value: 0 },
          { label: "右边", value: -1 }
        ]
      },
      {
        name: "verticalOrigin",
        label: "垂直对齐",
        type: "combobox",
        valType: "number",
        defval: 1,
        data: [
          { label: "顶部", value: -1 },
          { label: "居中", value: 0 },
          { label: "底部", value: 1 }
        ]
      },

      { name: "rotationDegree", label: "旋转角度", type: "number", step: 1, defval: 0.0 },

      {
        name: "scaleByDistance",
        label: "是否按视距缩放",
        type: "radio",
        defval: false
      },
      {
        name: "scaleByDistance_far",
        label: "上限",
        type: "number",
        step: 1,
        defval: 1000000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_farValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 0.1,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_near",
        label: "下限",
        type: "number",
        step: 1,
        defval: 1000.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },
      {
        name: "scaleByDistance_nearValue",
        label: "比例值",
        type: "number",
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.scaleByDistance
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },
      { name: "visibleDepth", label: "是否被遮挡", type: "radio", defval: true }
    ]
  },
  model: {
    name: "gltf模型",
    primitive: true,
    style: [
      { name: "url", label: "路径", type: "label", defval: "" },
      { name: "scale", label: "比例", type: "number", step: 1, defval: 1.0 },
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      { name: "minimumPixelSize", label: "最小像素大小", type: "number", step: 1, defval: 0.0 },

      {
        name: "opacity",
        label: "透明度",
        type: "slider",
        defval: 1.0,
        min: 0,
        max: 1,
        step: 0.01
      },

      {
        name: "silhouette",
        label: "是否轮廓",
        type: "radio",
        defval: false
      },
      {
        name: "silhouetteColor",
        label: "轮廓颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.silhouette
        }
      },
      {
        name: "silhouetteSize",
        label: "轮廓宽度",
        type: "number",
        step: 1,
        defval: 2.0,
        show(style, allStyle, graphicType) {
          return style.silhouette
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      { name: "runAnimations", label: "是否动画", type: "radio", defval: true },

      { name: "hasShadows", label: "是否阴影", type: "radio", defval: true },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      }
    ]
  },
  circle: {
    name: "圆",
    primitive: true,
    style: [
      { name: "radius", label: "半径", type: "number", step: 1, defval: 0.0 },
      {
        name: "height",
        label: "高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" },

          { label: "放大扩散线", value: "ScanLine" },
          { label: "半径扫描", value: "CircleScan" },
          { label: "波纹扩散", value: "CircleWave" },
          { label: "雷达线", value: "RadarLine" },
          { label: "波纹雷达扫描", value: "RadarWave" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },
      {
        name: "stRotationDegree",
        label: "填充方向",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.fill !== false
        }
      },
      {
        name: "rotationDegree",
        label: "旋转角度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.fill !== false
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false
        // show(style, allStyle, graphicType) {
        //   return false // 面无法切换
        // }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  ellipse: {
    name: "椭圆",
    style: [
      { name: "semiMinorAxis", label: "短半径", type: "number", step: 1, defval: 0.0 },
      { name: "semiMajorAxis", label: "长半径", type: "number", step: 1, defval: 0.0 },
      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" },

          { label: "放大扩散线", value: "ScanLine" },
          { label: "半径扫描", value: "CircleScan" },
          { label: "波纹扩散", value: "CircleWave" },
          { label: "雷达线", value: "RadarLine" },
          { label: "波纹雷达扫描", value: "RadarWave" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },
      {
        name: "stRotationDegree",
        label: "填充方向",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.fill !== false
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      { name: "rotationDegree", label: "旋转角度", type: "number", step: 1, defval: 0.0 },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return false // 面无法切换
        }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  cylinder: {
    name: "圆锥体",
    primitive: true,
    style: [
      { name: "topRadius", label: "顶部半径", type: "number", step: 1, defval: 0.0 },
      { name: "bottomRadius", label: "底部半径", type: "number", step: 1, defval: 100.0 },
      { name: "length", label: "锥体高度", type: "number", step: 1, defval: 100.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "波纹扩散", value: "CircleWave" },
          { label: "条纹扩散", value: "CylinderWave" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },
      { name: "slices", label: "边线边数", type: "number", step: 1, defval: 128 },
      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      }
    ]
  },
  frustum: {
    name: "四棱椎体",
    style: [
      { name: "color", label: "颜色", type: "color", defval: "rgba(0,255,0,0.4)" },
      { name: "length", label: "长度", type: "number", min: 1.0, max: 999999999.0, step: 1.0, defval: 1.0 },
      { name: "angle", label: "夹角1", type: "slider", min: 0.1, max: 89.0, step: 0.01, defval: 1.0 },
      { name: "angle2", label: "夹角2", type: "slider", min: 0.1, max: 89.0, step: 0.01, defval: 1.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      }
    ]
  },
  ellipsoid: {
    name: "球体",
    primitive: true,
    style: [
      { name: "radii_x", label: "X半径", type: "number", step: 1, defval: 100.0 },
      { name: "radii_y", label: "Y半径", type: "number", step: 1, defval: 100.0 },
      { name: "radii_z", label: "Z半径", type: "number", step: 1, defval: 100.0 },

      { name: "innerRadii_x", label: "内部X半径", type: "number", step: 1, defval: 0.0 },
      { name: "innerRadii_y", label: "内部Y半径", type: "number", step: 1, defval: 0.0 },
      { name: "innerRadii_z", label: "内部Z半径", type: "number", step: 1, defval: 0.0 },

      { name: "minimumClockDegree", label: "最小时钟角度", type: "number", defval: 0.0 },
      { name: "maximumClockDegree", label: "最大时钟角度", type: "number", defval: 360.0 },
      { name: "minimumConeDegree", label: "最小锥角", type: "number", defval: 0.0 },
      { name: "maximumConeDegree", label: "最大圆锥角", type: "number", defval: 180.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "波纹", value: "EllipsoidWave" },
          { label: "电弧", value: "EllipsoidElectric" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      }
    ]
  },
  plane: {
    name: "平面",
    primitive: true,
    style: [
      { name: "dimensions_x", label: "长度", type: "number", step: 1, defval: 100.0 },
      { name: "dimensions_y", label: "宽度", type: "number", step: 1, defval: 100.0 },

      {
        name: "plane_normal",
        label: "方向",
        type: "combobox",
        defval: "z",
        data: [
          { label: "X轴", value: "x" },
          { label: "Y轴", value: "y" },
          { label: "Z轴", value: "z" }
        ]
      },
      { name: "plane_distance", label: "偏移距离", type: "number", step: 1, defval: 0.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      }
    ]
  },
  doubleSidedPlane: {
    name: "双面渲染图片平面",
    primitive: true,
    style: [
      { name: "image", label: "填充的图片", type: "label" },
      { name: "opacity", label: "透明度", type: "slider", min: 0, max: 1, step: 0.1, defval: 1 },
      { name: "noWhite", label: "不显示白色", type: "radio", defval: true },

      { name: "dimensions_x", label: "长度", type: "number", step: 1, defval: 100.0 },
      { name: "dimensions_y", label: "宽度", type: "number", step: 1, defval: 100.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 }
    ]
  },
  box: {
    name: "盒子",
    primitive: true,
    style: [
      { name: "dimensions_x", label: "盒子长度", type: "number", step: 1, defval: 100.0 },
      { name: "dimensions_y", label: "盒子宽度", type: "number", step: 1, defval: 100.0 },
      { name: "dimensions_z", label: "盒子高度", type: "number", step: 1, defval: 100.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      }
    ]
  },
  particleSystem: {
    name: "粒子效果",
    style: [
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      { name: "particleSize", label: "粒子大小", type: "slider", defval: 1.0, min: 0, max: 60.0, step: 1 },
      { name: "emissionRate", label: "发射速率", type: "slider", defval: 100.0, min: 0.0, max: 500.0, step: 1 },
      { name: "gravity", label: "重力因子", type: "slider", defval: 0.0, min: -20.0, max: 20.0, step: 0.1 },
      { name: "transX", label: "偏移值X", type: "slider", defval: 0.0, min: -50.0, max: 50.0, step: 0.1 },
      { name: "transY", label: "偏移值Y", type: "slider", defval: 0.0, min: -50.0, max: 50.0, step: 0.1 },
      { name: "transZ", label: "偏移值Z", type: "slider", defval: 0.0, min: -50.0, max: 50.0, step: 0.1 },

      { name: "startScale", label: "开始比例", type: "slider", defval: 1.0, min: 0.0, max: 10.0, step: 1 },
      { name: "endScale", label: "结束比例", type: "slider", defval: 1.0, min: 0.0, max: 10.0, step: 1 },
      { name: "minimumParticleLife", label: "最小寿命", type: "slider", defval: 3.0, min: 0.1, max: 30.0, step: 0.1 },
      { name: "maximumParticleLife", label: "最大寿命", type: "slider", defval: 6.0, min: 0.1, max: 30.0, step: 0.1 }
    ]
  },
  cloud: {
    name: "积云",
    style: [
      { name: "scaleX", label: "比例X", type: "number", step: 1, defval: 1.0 },
      { name: "scaleY", label: "比例Y", type: "number", step: 1, defval: 1.0 },
      { name: "maximumSizeX", label: "最大尺寸X", type: "number", step: 1, defval: 1.0 },
      { name: "maximumSizeY", label: "最大尺寸Y", type: "number", step: 1, defval: 1.0 },
      { name: "maximumSizeZ", label: "最大尺寸Z", type: "number", step: 1, defval: 1.0 },
      { name: "slice", label: "切片", type: "slider", defval: 1.0, min: 0, max: 1, step: 0.01 },
      { name: "brightness", label: "亮度", type: "slider", defval: 1.0, min: 0, max: 1, step: 0.01 }
    ]
  },
  lightCone: {
    name: "光锥体",
    style: [
      { name: "color", label: "颜色", type: "color", defval: "#00ffff" },
      { name: "radius", label: "底部半径", type: "number", min: 1.0, max: 999999999, step: 1, defval: 100.0 },
      { name: "height", label: "锥体高度", type: "number", min: 1.0, max: 999999999.0, step: 1, defval: 1000.0 },
      { name: "setHeight", label: "指定坐标高度", type: "number", min: 0.0, max: 999999999.0, step: 1, defval: 0.0 }
    ]
  },
  tetrahedron: {
    name: "四面体",
    style: [
      { name: "color", label: "颜色", type: "color", defval: "#000000" },
      { name: "width", label: "顶部大小", type: "number", step: 1, defval: 20.0 },
      { name: "height", label: "椎体高度", type: "number", step: 1, defval: 30.0 },

      { name: "animation", label: "是否动画", type: "radio", defval: true },
      {
        name: "moveHeight",
        label: "动画高度",
        type: "number",
        step: 1,
        defval: 30.0,
        show(style, allStyle, graphicType) {
          return style.animation
        }
      },
      {
        name: "moveDuration",
        label: "动画时长",
        type: "number",
        min: 1.0,
        max: 999999999,
        step: 1,
        defval: 2.0,
        show(style, allStyle, graphicType) {
          return style.animation
        }
      },
      {
        name: "rotationAngle",
        label: "旋转角度",
        type: "number",
        step: 1,
        defval: 1.0,
        show(style, allStyle, graphicType) {
          return style.animation
        }
      }
    ]
  },
  rectangularSensor: {
    name: "相控阵雷达范围",
    style: [
      { name: "color", label: "颜色", type: "color", defval: "#00FF00" },
      { name: "lineColor", label: "边线颜色", type: "color", defval: "#ffffff" },
      { name: "radius", label: "半径", type: "number", min: 1.0, max: 999999999, step: 1, defval: 1.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      { name: "xHalfAngleDegree", label: "上下夹角", type: "slider", min: 0.0, max: 89.0, step: 0.01, defval: 1.0 },
      { name: "yHalfAngleDegree", label: "左右夹角", type: "slider", min: 0.0, max: 89.0, step: 0.01, defval: 1.0 },
      { name: "showScanPlane", label: "扫描面", type: "radio", defval: false },
      {
        name: "scanPlaneColor",
        label: "扫描面颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.showScanPlane
        }
      },
      {
        name: "scanPlaneMode",
        label: "扫描面方向",
        type: "combobox",
        defval: "vertical",
        data: [
          { label: "垂直方向", value: "vertical" },
          { label: "水平方向", value: "horizontal" }
        ],
        show(style, allStyle, graphicType) {
          return style.showScanPlane
        }
      },
      {
        name: "scanPlaneRate",
        label: "扫描速率",
        type: "number",
        min: 1.0,
        max: 100,
        step: 0.1,
        defval: 3.0,
        show(style, allStyle, graphicType) {
          return style.showScanPlane
        }
      }
    ]
  },
  camberRadar: {
    name: "双曲面雷达范围",
    style: [
      { name: "color", label: "颜色", type: "color", defval: "#ffffff" },
      { name: "radius", label: "内曲面半径", type: "number", min: 1.0, max: 999999999.0, step: 1, defval: 1.0, toFixed: 1 },
      {
        name: "startRadius",
        label: "外曲面半径",
        type: "number",
        min: 1.0,
        max: 999999999.0,
        step: 1,
        defval: 1.0,
        toFixed: 1
      },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      { name: "startFovH", label: "左横截面角度", type: "slider", min: -180.0, max: 180.0, step: 0.01, defval: 1.0 },
      { name: "endFovH", label: "右横截面角度", type: "slider", min: -180.0, max: 180.0, step: 0.01, defval: 1.0 },
      { name: "startFovV", label: "垂直起始角度", type: "slider", min: 0.0, max: 90.0, step: 0.01, defval: 1.0 },
      { name: "endFovV", label: "垂直结束角度", type: "slider", min: 0.0, max: 90.0, step: 0.01, defval: 1.0 }
    ]
  },

  jammingRadar: {
    name: "自定义干扰雷达",
    style: [
      { name: "scale", label: "大小比例", type: "slider", min: 0.1, max: 10.0, step: 0.1, defval: 1.0 },
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "autoColor", label: "是否内置渐变色", type: "radio", defval: true },
      {
        name: "color",
        label: "颜色",
        type: "color",
        defval: "rgba(255,0,0,0.5)",
        show(style, allStyle, graphicType) {
          return !style.autoColor
        }
      },
      {
        name: "outline",
        label: "是否显示边线",
        type: "radio",
        defval: false
      },
      {
        name: "outlineColor",
        label: "边线颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return !style.autoColor
        }
      }
    ]
  },

  fixedJammingRadar: {
    name: "固定算法干扰雷达",
    style: [
      { name: "scale", label: "大小比例", type: "slider", min: 0.1, max: 10.0, step: 0.1, defval: 1.0 },
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "autoColor", label: "是否内置渐变色", type: "radio", defval: true },
      {
        name: "color",
        label: "颜色",
        type: "color",
        defval: "#00FF00",
        show(style, allStyle, graphicType) {
          return !style.autoColor
        }
      },
      {
        name: "outline",
        label: "是否显示边线",
        type: "radio",
        defval: false
      },
      {
        name: "outlineColor",
        label: "边线颜色",
        type: "color",
        defval: "#00FF00",
        show(style, allStyle, graphicType) {
          return !style.autoColor
        }
      },

      { name: "pt", label: "发射功率", type: "number", defval: 8e6 },
      { name: "gt", label: "天线主瓣增益", type: "number", defval: 500 },
      { name: "lambda", label: "信号波长(lambda)", type: "number", defval: 0.056 },
      { name: "sigma", label: "反射截面积(sigma)", type: "number", defval: 3 },
      { name: "n", label: "脉冲积累数", type: "number", defval: 16 },
      { name: "k", label: "玻尔兹曼常数", type: "number", defval: 138e-25 },
      { name: "t0", label: "绝对温度", type: "number", defval: 290 },
      { name: "bn", label: "接收机通频带宽度", type: "number", defval: 16e5 },
      { name: "fn", label: "接收机噪声系数", type: "number", defval: 5 },
      { name: "sn", label: "接收机最小可检测信噪比", type: "number", defval: 2 }
    ]
  },

  satellite: {
    name: "卫星",
    primitive: false,
    style: [
      { name: "tle1", label: "tle1", type: "text", defval: "" },
      { name: "tle2", label: "tle2", type: "text", defval: "" },

      { name: "path_width", label: "线宽", type: "number", step: 1, defval: 4.0 },
      { name: "path_color", label: "颜色", type: "color", defval: "#3388ff" },

      { name: "model_url", label: "路径", type: "text", defval: "" },
      { name: "model_scale", label: "比例", type: "number", step: 1, defval: 1.0 },
      { name: "model_minimumPixelSize", label: "最小像素大小", type: "number", step: 1, defval: 0.0 },
      {
        name: "model_distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "model_distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.model_distanceDisplayCondition
        }
      },
      {
        name: "model_distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.model_distanceDisplayCondition
        }
      }
    ]
  },
  conicSensor: {
    name: "卫星圆锥体",
    style: [
      { name: "color", label: "颜色", type: "color", defval: "rgba(255,0,0,0.4)" },
      { name: "length", label: "长度", type: "number", min: 1.0, max: 999999999.0, step: 1.0, defval: 1.0 },
      { name: "angle", label: "夹角", type: "slider", min: 1.0, max: 89.0, step: 0.01, defval: 1.0 },
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      { name: "topShow", label: "显示顶盖", type: "radio", defval: true },
      { name: "shadowShow", label: "地面投影", type: "radio", defval: false }
    ]
  },
  rectSensor: {
    name: "卫星四棱椎体",
    style: [
      { name: "color", label: "颜色", type: "color", defval: "rgba(0,255,0,0.4)" },
      { name: "length", label: "长度", type: "number", min: 1.0, max: 999999999.0, step: 1.0, defval: 1.0 },
      { name: "angle1", label: "夹角1", type: "slider", min: 0.1, max: 89.0, step: 0.01, defval: 1.0 },
      { name: "angle2", label: "夹角2", type: "slider", min: 0.1, max: 89.0, step: 0.01, defval: 1.0 },

      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },

      { name: "topShow", label: "显示顶盖", type: "radio", defval: true }
    ]
  },
  pointLight: {
    name: "点光源",
    style: [
      { name: "color", label: "光颜色", type: "color", defval: "rgba(0,255,0,0.4)" },
      { name: "intensity", label: "光强度", type: "number", min: 1.0, max: 10000.0, step: 1, defval: 1.0 },
      { name: "radius", label: "点光源半径", type: "number", min: 1.0, max: 10000.0, step: 1, defval: 1.0 }
    ]
  },
  spotLight: {
    name: "聚光灯",
    style: [
      { name: "color", label: "光颜色", type: "color", defval: "rgba(0,255,0,0.4)" },
      { name: "intensity", label: "光强度", type: "number", min: 1.0, max: 999999999.0, step: 1, defval: 1.0 },
      { name: "radius", label: "聚光灯半径", type: "number", min: 1.0, max: 999999999.0, step: 1, defval: 1.0 },
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "innerCone", label: "内圆锥角", type: "slider", min: 0.0, max: 45, step: 0.1, defval: 10.0 },
      { name: "outerCone", label: "外圆锥角", type: "slider", min: 0.0, max: 45, step: 0.1, defval: 10.0 }
    ]
  },

  pointVisibility: {
    name: "圆形可视域区域",
    style: [
      { name: "radius", label: "半径", type: "slider", min: 1.0, max: 3000.0, step: 1, defval: 1.0 },
      { name: "showFrustum", label: "视椎体框线", type: "radio", defval: false }
    ]
  },
  coneVisibility: {
    name: "扇形可视域区域",
    style: [
      { name: "radius", label: "半径", type: "slider", min: 1.0, max: 3000.0, step: 1, defval: 1.0 },
      { name: "heading", label: "方向角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "pitch", label: "俯仰角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "roll", label: "翻滚角", type: "slider", min: 0.0, max: 360.0, step: 0.01, defval: 0.0 },
      { name: "showFrustum", label: "视椎体框线", type: "radio", defval: false }
    ]
  },

  viewDome: {
    name: "开敞度分析球",
    style: [
      { name: "radius", label: "半径", type: "number", min: 1.0, max: 999999999.0, step: 1, defval: 1.0 },
      { name: "visibleColor", label: "可见区域颜色", type: "color", defval: "rgba(0,183,239, 0.5)" },
      { name: "hiddenColor", label: "不可见区域颜色", type: "color", defval: "rgba(227,108,9, 0.5)" }
    ]
  },

  // 线状
  polyline: {
    name: "线",
    primitive: true,
    extends: ["curve", "brushLine", "distanceMeasure", "heightMeasure"],
    style: [
      { name: "width", label: "线宽", type: "number", step: 1, defval: 4.0 },
      {
        name: "materialType",
        label: "线型",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "实线", value: "Color" },
          { label: "虚线", value: "PolylineDash" },
          { label: "衬色线", value: "PolylineOutline" },
          { label: "箭头", value: "PolylineArrow" },
          { label: "光晕", value: "PolylineGlow" },

          { label: "OD线", value: "ODLine" },
          { label: "闪烁线", value: "LineFlicker" },
          { label: "轨迹线", value: "LineTrail" },
          { label: "泛光线", value: "LineBloom" },
          { label: "流动颜色", value: "LineFlowColor" },

          { label: "流动blue", value: "LineFlow", defval: { image: "img/textures/line-arrow-blue.png", repeat_x: 10 } },
          { label: "流动dovetail", value: "LineFlow-2", defval: { image: "img/textures/line-arrow-dovetail.png", repeat_x: 10 } },
          { label: "流动arrow", value: "LineFlow-3", defval: { image: "img/textures/line-arrow-right.png", repeat_x: 10 } },
          { label: "流动aqua", value: "LineFlow-4", defval: { image: "img/textures/line-color-aqua.png", repeat_x: 10 } },
          { label: "流动azure", value: "LineFlow-5", defval: { image: "img/textures/line-color-azure.png", repeat_x: 10 } },
          { label: "流动red", value: "LineFlow-6", defval: { image: "img/textures/line-color-red.png", color: "#ff0000", repeat_x: 10 } },
          { label: "流动yellow", value: "LineFlow-7", defval: { image: "img/textures/line-color-yellow.png", color: "#ffff00", repeat_x: 10 } },
          { label: "流动colour", value: "LineFlow-8", defval: { image: "img/textures/line-colour.png", repeat_x: 10 } },
          { label: "流动gradual", value: "LineFlow-9", defval: { image: "img/textures/line-gradual.png", repeat_x: 10 } },
          { label: "流动pulse", value: "LineFlow-10", defval: { image: "img/textures/line-pulse.png" } },
          { label: "流动sprite", value: "LineFlow-11", defval: { image: "img/textures/line-sprite.png", repeat_x: 10 } },
          { label: "流动tarans", value: "LineFlow-13", defval: { image: "img/textures/line-tarans.png" } },
          { label: "流动vertebral", value: "LineFlow-14", defval: { image: "img/textures/line-vertebral.png", repeat_x: 10 } },
          { label: "流动vertebral-blue", value: "LineFlow-15", defval: { image: "img/textures/line-vertebral-blue.png", repeat_x: 10 } },
          { label: "流动fence-line", value: "LineFlow-16", defval: { image: "img/textures/fence-line.png", repeat_x: 10 } },
          { label: "流动transarrow", value: "LineFlow-17", defval: { image: "img/textures/line-arrow-trans.png", repeat_x: 10 } }
        ],
        show(style, allStyle, graphicType) {
          return this.data.some((item) => item.value === style.materialType)
        }
      },
      { name: "closure", label: "是否闭合", type: "radio", defval: false },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.diffHeight || style.diffHeight !== 0
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  path: {
    name: "路径",
    style: [
      { name: "width", label: "线宽", type: "number", step: 1, defval: 4.0 },
      { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
      { name: "leadTime", label: "轨迹前", type: "number", step: 1, defval: 0.0 },
      { name: "trailTime", label: "轨迹保留", type: "number", step: 1, defval: 9999 }
    ]
  },
  polylineVolume: {
    name: "管道线",
    primitive: true,
    style: [
      {
        name: "shape",
        label: "形状",
        type: "combobox",
        defval: "pipeline",
        data: [
          { label: "空心管", value: "pipeline" },
          { label: "实心管", value: "circle" },
          { label: "星状管", value: "star" }
        ]
      },
      { name: "radius", label: "半径", type: "number", step: 1, defval: 10.0 },
      {
        name: "thicknes",
        label: "厚度",
        type: "number",
        step: 1,
        defval: 3.0,
        show(style, allStyle, graphicType) {
          return style.shape === "pipeline"
        }
      },
      {
        name: "slices",
        label: "边线边数",
        type: "number",
        min: 1,
        max: 360,
        step: 1,
        defval: 90
      },

      {
        name: "startAngle",
        label: "开始角度",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.1,
        defval: 0.0
      },

      {
        name: "materialType",
        label: "材质类型",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "实线", value: "Color" },
          { label: "轨迹线", value: "LineTrail" },
          { label: "泛光线", value: "LineBloom" },
          { label: "流动颜色", value: "LineFlowColor" },

          { label: "流动line", value: "LineFlow", defval: { image: "img/textures/fence-line.png", repeat_x: 10 } },
          { label: "流动fence", value: "LineFlow-1", defval: { image: "img/textures/fence.png", repeat_x: 10 } }
        ],
        show(style, allStyle, graphicType) {
          return this.data.some((item) => item.value === style.materialType)
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#000000",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      }
    ]
  },
  wall: {
    name: "墙体",
    primitive: true,
    style: [
      { name: "diffHeight", label: "墙高", type: "number", step: 1, defval: 100.0 },

      { name: "fill", label: "是否填充", type: "radio", defval: true },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" },
          { label: "文本", value: "Text" },

          { label: "走马灯", value: "WallScroll" },

          { label: "流动arrow", value: "LineFlow", defval: { image: "img/textures/arrow.png", repeat_x: 10 } },
          { label: "流动arrowh", value: "LineFlow-1", defval: { image: "img/textures/arrow-h.png", repeat_x: 10 } },
          { label: "流动fence", value: "LineFlow-2", defval: { image: "img/textures/fence.png", axisY: true } },
          { label: "流动line", value: "LineFlow-3", defval: { image: "img/textures/fence-line.png", axisY: true } }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },

      { name: "closure", label: "是否闭合", type: "radio", defval: false },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        defval: 1.0,
        show(data) {
          return data.outline === true
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(data) {
          return data.outline === true
        }
      },
      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false
      }
    ]
  },
  scrollWall: {
    name: "走马灯围墙",
    style: [
      { name: "diffHeight", label: "墙高", type: "number", step: 1, defval: 100.0 },
      { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
      { name: "speed", label: "速度", type: "number", step: 1, defval: 10 },
      { name: "reverse", label: "方向", type: "radio", defval: true },
      {
        name: "style",
        label: "样式",
        type: "combobox",
        defval: 1,
        data: [
          { label: "样式1", value: 1 },
          { label: "样式2", value: 2 }
        ]
      }
    ]
  },
  thickWall: {
    name: "厚度墙",
    style: [
      { name: "diffHeight", label: "墙高", type: "number", step: 100, defval: 9999.0 },
      { name: "width", label: "墙厚度", type: "number", step: 1, defval: 9999.0 },
      { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
      { name: "opacity", label: "透明度", type: "number", step: 0.1, min: 0.0, max: 1.0, defval: 1.0 },
      { name: "closure", label: "是否闭合", type: "radio", defval: false },
      { name: "hasShadows", label: "是否阴影", type: "radio", defval: false }
    ]
  },
  diffuseWall: {
    name: "扩散围墙",
    style: [
      { name: "diffHeight", label: "墙高", type: "number", step: 1, defval: 100.0 },
      { name: "color", label: "颜色", type: "color", defval: "#3388ff" },
      { name: "speed", label: "速度", type: "number", step: 1, defval: 10 }
    ]
  },

  corridor: {
    name: "走廊",
    primitive: true,
    style: [
      {
        name: "height",
        label: "高程",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      { name: "width", label: "走廊宽度", type: "number", step: 1, defval: 100.0 },
      {
        name: "cornerType",
        label: "顶点样式",
        type: "combobox",
        valType: "number",
        defval: 0,
        data: [
          { label: "圆滑", value: 0 },
          { label: "斜接", value: 1 },
          { label: "斜切", value: 2 }
        ]
      },

      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "网格", value: "Grid" }
        ],
        show(style, allStyle, graphicType) {
          return this.data.some((item) => item.value === style.materialType)
        }
      },

      {
        name: "outline",
        label: "是否边框",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          // return !style.diffHeight || style.diffHeight !== 0
          return false // 无法切换
        }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  road: {
    name: "道路",
    style: [
      { name: "opacity", label: "透明度", type: "slider", min: 0.0, max: 1.0, step: 0.1, defval: 1.0 },
      { name: "width", label: "路宽度", type: "number", min: 0.0, step: 1, defval: 1.0 },
      { name: "height", label: "路高度", type: "number", min: 0.0, step: 1, defval: 1.0 }
    ]
  },

  // 面状
  rectangle: {
    name: "矩形",
    primitive: true,
    style: [
      {
        name: "height",
        label: "高程",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" },

          { label: "文本", value: "Text" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1,
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show(style, allStyle, graphicType) {
          return style.outline
        }
      },

      { name: "rotationDegree", label: "旋转角度", type: "number", step: 1, defval: 0.0 },
      { name: "stRotationDegree", label: "材质角度", type: "number", step: 1, defval: 0.0 },
      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false
        // show(style, allStyle, graphicType) {
        //   return false // 面无法切换
        // }
      },
      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  polygon: {
    name: "面",
    primitive: true,
    extends: [
      "video2D",
      "attackArrow",
      "attackArrowPW",
      "attackArrowYW",
      "closeVurve",
      "straightArrow",
      "doubleArrow",
      "fineArrow",
      "fineArrowYW",
      "areaMeasure",
      "gatheringPlace",
      "isosTriangle",
      "lune",
      "regular"
    ],
    style: [
      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" },
          { label: "文本", value: "Text" },

          { label: "渐变面", value: "PolyGradient" },
          { label: "水面", value: "Water" },
          { label: "蓝光水面", value: "WaterLight" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },

      {
        name: "stRotationDegree",
        label: "填充方向",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0,
        show: (style) => {
          return style.fill !== false
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1.0,
        show: (style) => {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show: (style) => {
          return style.outline
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false
        // show(style, allStyle, graphicType) {
        //   return false // 面无法切换
        // }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  sector: {
    name: "扇形面",
    style: [
      {
        name: "radius",
        label: "半径",
        type: "number",
        step: 0.1,
        defval: 0.0
      },
      {
        name: "startAngle",
        label: "开始角度",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0
      },
      {
        name: "endAngle",
        label: "结束角度",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0
      },
      {
        name: "noCenter",
        label: "不连中心点",
        type: "radio",
        defval: false
      },

      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "fill",
        label: "是否填充",
        type: "radio",
        defval: true,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },
      {
        name: "materialType",
        label: "填充材质",
        type: "combobox",
        defval: "Color",
        data: [
          { label: "纯色", value: "Color" },
          { label: "图片", value: "Image", defval: { image: "img/tietu/gugong.jpg" } },
          { label: "网格", value: "Grid" },
          { label: "条纹", value: "Stripe" },
          { label: "棋盘", value: "Checkerboard" },
          { label: "文本", value: "Text" },

          { label: "渐变面", value: "PolyGradient" },
          { label: "水面", value: "Water" },
          { label: "蓝光水面", value: "WaterLight" }
        ],
        show(style, allStyle, graphicType) {
          return style.fill !== false && this.data.some((item) => item.value === style.materialType)
        }
      },

      {
        name: "stRotationDegree",
        label: "填充方向",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0,
        show: (style) => {
          return style.fill !== false
        }
      },

      { name: "outline", label: "是否边框", type: "radio", defval: false },
      {
        name: "outlineWidth",
        label: "边框宽度",
        type: "number",
        min: 0,
        step: 1,
        defval: 1.0,
        show: (style) => {
          return style.outline
        }
      },
      {
        name: "outlineColor",
        label: "边框颜色",
        type: "color",
        defval: "#ffffff",
        show: (style) => {
          return style.outline
        }
      },

      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },

      {
        name: "hasShadows",
        label: "是否阴影",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return false // 面无法切换
        }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  pit: {
    name: "井",
    style: [
      { name: "diffHeight", label: "井深度", type: "number", step: 1, defval: 0.0 },
      { name: "splitNum", label: "插值数", type: "number", step: 1, defval: 50 },
      { name: "image", label: "墙面贴图", type: "label" },
      { name: "imageBottom", label: "底面贴图", type: "label" }
    ]
  },
  water: {
    name: "水面",
    style: [
      { name: "opacity", label: "透明度", type: "slider", min: 0.0, max: 1.0, step: 0.1, defval: 1.0 },

      { name: "baseWaterColor", label: "基础颜色", type: "color", defval: "#123e59" },
      { name: "blendColor", label: "混合颜色", type: "color", defval: "#123e59" },
      { name: "normalMap", label: "反射图片", type: "label", defval: "img/textures/waterNormals.jpg" },
      { name: "frequency", label: "波数", type: "number", min: 1, max: 100000, step: 1, defval: 9000 },
      { name: "amplitude", label: "水波振幅", type: "number", min: 0, max: 100, step: 1, defval: 5.0 },
      { name: "animationSpeed", label: "动画速度", type: "slider", min: 0, max: 1, step: 0.01, defval: 0.03 },
      { name: "specularIntensity", label: "反射强度", type: "slider", min: 0, max: 1, step: 0.1, defval: 0.5 },

      {
        name: "stRotationDegree",
        label: "填充方向",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0,
        show: (style) => {
          return style.fill !== false
        }
      },
      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return !style.clampToGround
        }
      },

      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return false // 面无法切换
        }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  video: {
    name: "视频",
    style: [
      {
        name: "diffHeight",
        label: "立体高度",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return graphicType === "wall"
        }
      },
      {
        name: "stRotationDegree",
        label: "填充方向",
        type: "slider",
        min: 0.0,
        max: 360.0,
        step: 0.01,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.fill !== false && !style.diffHeight
        }
      },
      {
        name: "distanceDisplayCondition",
        label: "是否按视距显示",
        type: "radio",
        defval: false
      },
      {
        name: "distanceDisplayCondition_far",
        label: "最大距离",
        type: "number",
        step: 1,
        defval: 100000.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "distanceDisplayCondition_near",
        label: "最小距离",
        type: "number",
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.distanceDisplayCondition
        }
      },
      {
        name: "clampToGround",
        label: "是否贴地",
        type: "radio",
        defval: false,
        show(style, allStyle, graphicType) {
          return false // 面无法切换
        }
      },
      {
        name: "zIndex",
        label: "层级顺序",
        type: "number",
        min: 0,
        step: 1,
        defval: 0.0,
        show(style, allStyle, graphicType) {
          return style.clampToGround
        }
      }
    ]
  },
  reflectionWater: {
    name: "反射水面",
    style: [
      { name: "color", label: "水面颜色", type: "color", defval: "#7badd0" },
      { name: "opacity", label: "透明度", type: "slider", min: 0.0, max: 1.0, step: 0.1, defval: 0.9 },
      { name: "normalMap", label: "水扰动的法线图", type: "label", defval: "img/textures/waterNormals.jpg" },
      { name: "reflectivity", label: "反射率", type: "slider", min: 0.0, max: 1.0, step: 0.1, defval: 0.5 },
      { name: "ripple", label: "波纹大小", type: "number", min: 0.0, max: 1000.0, step: 1, defval: 50.0 },
      { name: "shiny", label: "光照强度", type: "number", min: 1.0, max: 1000.0, step: 1.0, defval: 100.0 },
      { name: "animationSpeed", label: "动画速度", type: "number", min: 0.1, max: 10.0, step: 0.1, defval: 1.0 },
      { name: "specularIntensity", label: "反射强度", type: "slider", min: 0.0, max: 0.9, step: 0.01, defval: 0.3 },
      { name: "distortion", label: "倒影扭曲程度", type: "number", min: 0.0, max: 10.0, step: 0.1, defval: 3.7 }
    ]
  }
}

// 部分矢量对应与其他基本类型完全相同配置时，复制配置
for (const key in styleConfig) {
  styleConfig[key].type = key // 标识类型
  if (styleConfig[key].primitive) {
    styleConfig[key + "P"] = styleConfig[key]
  }
  if (styleConfig[key].extends) {
    styleConfig[key].extends.forEach((element) => {
      styleConfig[element] = styleConfig[key]
    })
  }
}

// window.styleConfig = styleConfig
export default styleConfig
