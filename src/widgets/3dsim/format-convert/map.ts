import type { GuiItem } from "@mars/components/mars-ui/mars-gui"

export const options: GuiItem[] = [
  {
    type: "select",
    field: "type",
    label: "Type",
    value: "laz/las -> 3dtiles",
    data: [
      {
        value: "osgb -> 3dtiles",
        label: "osgb -> 3dtiles"
      },
      {
        value: "citygml -> 3dtiles",
        label: "citygml -> 3dtiles"
      },
      {
        value: "laz/las -> 3dtiles",
        label: "laz/las -> 3dtiles"
      },
      {
        value: "geotiff -> tms tiles",
        label: "geotiff -> tms tiles"
      },
      {
        value: "obj -> gltf",
        label: "obj -> gltf"
      },
      {
        value: "netcdf -> geotiff",
        label: "netcdf -> geotiff"
      }
    ]
  }
]
