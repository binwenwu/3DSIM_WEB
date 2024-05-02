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
        value: "geotiff -> tms tiles",
        label: "geotiff -> tms tiles"
      },
      {
        value: "obj -> 3dtiles",
        label: "obj -> 3dtiles"
      },
      {
        value: "netcdf -> kml",
        label: "netcdf -> kml"
      },
      {
        value: "laz/las -> 3dtiles",
        label: "laz/las -> 3dtiles"
      }
    ]
  }
]
