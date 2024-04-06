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
    type: "select",
    field: "cityGMLFileType",
    label: "FileType",
    value: "GML",
    data: [
      {
        label: "GML",
        value: "GML"
      },
      {
        label: "XML",
        value: "XML"
      }
    ],
    show(data) {
      return data.product === "CityGML"
    }
  },
  {
    type: "select",
    field: "_3DTilesFileType",
    label: "FileType",
    value: "b3dm",
    data: [
      {
        label: "b3dm",
        value: "b3dm"
      },
      {
        label: "i3dm",
        value: "i3dm"
      },
      {
        label: "pnts",
        value: "pnts"
      },
      {
        label: "cmpt",
        value: "cmpt"
      },
      {
        label: "glb",
        value: "glb"
      }
    ],
    show(data) {
      return data.product === "3DTiles"
    }
  },
  {
    type: "select",
    field: "osgFileType",
    label: "FileType",
    value: "osgb",
    data: [
      {
        label: "osgb",
        value: "osgb"
      }
    ],
    show(data) {
      return data.product === "OSG"
    }
  },
  {
    type: "select",
    field: "i3sFileType",
    label: "FileType",
    value: "bin",
    data: [
      {
        label: "bin",
        value: "bin"
      },
      {
        label: "splk",
        value: "splk"
      }
    ],
    show(data) {
      return data.product === "I3S"
    }
  },
  {
    type: "select",
    field: "reliefFileType",
    label: "FileType",
    value: "GEOTIFF",
    data: [
      {
        label: "GEOTIFF",
        value: "GEOTIFF"
      },
      {
        label: "JPG",
        value: "JPG"
      },
      {
        label: "PNG",
        value: "PNG"
      }
    ],
    show(data) {
      return data.product === "RasterRelief"
    }
  },
  {
    type: "select",
    field: "pointCloudFileType",
    label: "FileType",
    value: "LAZ",
    data: [
      {
        label: "XYZ",
        value: "XYZ"
      },
      {
        label: "LAS",
        value: "LAS"
      },
      {
        label: "LAZ",
        value: "LAZ"
      }
    ],
    show(data) {
      return data.product === "PointCloud"
    }
  },
  {
    type: "select",
    field: "physicalFieldFileType",
    label: "FileType",
    value: "NETCDF",
    data: [
      {
        label: "NETCDF",
        value: "NETCDF"
      },
      {
        label: "HDF",
        value: "HDF"
      }
    ],
    show(data) {
      return data.product === "PhysicalField"
    }
  },
  {
    type: "select",
    field: "_3DMeshFileType",
    label: "FileType",
    value: "PLY",
    data: [
      {
        label: "PLY",
        value: "PLY"
      },
      {
        label: "OBJ",
        value: "OBJ"
      },
      {
        label: "FBX",
        value: "FBX"
      }
    ],
    show(data) {
      return data.product === "3DMesh"
    }
  }
]
