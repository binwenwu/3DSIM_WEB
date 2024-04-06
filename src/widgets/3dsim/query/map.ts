import type { GuiItem } from "@mars/components/mars-ui/mars-gui"

export const options: GuiItem[] = [
  {
    type: "select",
    field: "feature",
    label: "Feature",
    value: "Building",
    data: [
      {
        value: "Mountain",
        label: "Mountain"
      },
      {
        value: "WaterBody",
        label: "WaterBody"
      },
      {
        value: "SnowArea",
        label: "SnowArea"
      },
      {
        value: "Ocean",
        label: "Ocean"
      },
      {
        value: "Relief",
        label: "Relief"
      },
      {
        value: "PhysicalField",
        label: "PhysicalField"
      },
      {
        value: "AgriculturalArea",
        label: "AgriculturalArea"
      },
      {
        value: "WaterFacility",
        label: "WaterFacility"
      },
      {
        value: "TransportationFacility",
        label: "TransportationFacility"
      },
      {
        value: "Building",
        label: "Building"
      },
      {
        value: "Pipeline",
        label: "Pipeline"
      },
      {
        value: "Courtyard",
        label: "Courtyard"
      },
      {
        value: "ArtificialLandform",
        label: "ArtificialLandform"
      }
    ]
  },
  {
    type: "select",
    field: "product",
    label: "Product",
    value: "3DTiles",
    data: [
      {
        value: "CityGML",
        label: "CityGML"
      },
      {
        value: "3DTiles",
        label: "3DTiles"
      },
      {
        value: "OSG",
        label: "OSG"
      },
      {
        value: "I3S",
        label: "I3S"
      },
      {
        value: "RasterRelief",
        label: "RasterRelief"
      },
      {
        value: "PointCloud",
        label: "PointCloud"
      },
      {
        value: "PhysicalField",
        label: "PhysicalField"
      },
      {
        value: "3DMesh",
        label: "3DMesh"
      }
    ]
  },
  {
    type: "inputGroup",
    field: "lon",
    label: "Longitude",
    value: [-180, 180],
    units: ["°", "°"]
  },
  {
    type: "inputGroup",
    field: "lat",
    label: "Latitude",
    value: [-90, 90],
    units: ["°", "°"]
  },
  {
    type: "inputGroup",
    field: "validFrom",
    label: "ValidFrom",
    value: [1900, 1, 1],
    units: ["年", "月", "日"]
  },
  {
    type: "inputGroup",
    field: "validTo",
    label: "ValidTo",
    value: [2099, 12, 31],
    units: ["年", "月", "日"]
  },
  {
    type: "inputGroup",
    field: "viewedRange",
    label: "VRange",
    value: [0, 9999999],
    units: ["m", "m"]
  },
  {
    type: "radio",
    field: "assetType",
    label: "Asset",
    value: "3DScene",
    data: [
      {
        value: "All",
        label: "All"
      },
      {
        value: "3DModel",
        label: "3DModel"
      },
      {
        value: "3DScene",
        label: "3DScene"
      }
    ]
  }
]
