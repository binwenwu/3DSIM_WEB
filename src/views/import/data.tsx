import { FormSchema } from '@/components/Form';

export const step1Schemas: FormSchema[] = [
  {
    field: 'feature',
    helpMessage: 'Feature type',
    component: 'Select',
    label: 'Feature',
    required: true,
    defaultValue: 'Building',
    componentProps: {
      options: [
        {
          label: 'Mountain',
          value: 'Mountain',
        },
        {
          label: 'Mountain',
          value: 'Mountain',
        },
        {
          label: 'SnowArea',
          value: 'SnowArea',
        },
        {
          label: 'Ocean',
          value: 'Ocean',
        },
        {
          label: 'Relief',
          value: 'Relief',
        },
        {
          label: 'PhysicalField',
          value: 'PhysicalField',
        },
        {
          label: 'AgriculturalArea',
          value: 'AgriculturalArea',
        },
        {
          label: 'WaterFacility',
          value: 'WaterFacility',
        },
        {
          label: 'TransportationFacility',
          value: 'TransportationFacility',
        },
        {
          label: 'Building',
          value: 'Building',
        },
        {
          label: 'Pipeline',
          value: 'Pipeline',
        },
        {
          label: 'Courtyard',
          value: 'Courtyard',
        },
        {
          label: 'ArtificialLandform',
          value: 'ArtificialLandform',
        },
      ],
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'product',
    helpMessage: 'Product type',
    component: 'Select',
    label: 'Product',
    required: true,
    defaultValue: '3DTiles',
    componentProps: {
      options: [
        {
          label: '3DTiles',
          value: '3DTiles',
        },
        {
          label: 'OSG',
          value: 'OSG',
        },
        {
          label: 'I3S',
          value: 'I3S',
        },
        {
          label: 'RasterRelief',
          value: 'RasterRelief',
        },
        {
          label: 'PointCloud',
          value: 'PointCloud',
        },
        {
          label: 'PhysicalField',
          value: 'PhysicalField',
        },
        {
          label: '3DMesh',
          value: '3DMesh',
        },
        {
          label: 'CityGML',
          value: 'CityGML',
        },
      ],
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'viewpoint',
    helpMessage: 'Viewpoint hierarchy',
    component: 'Select',
    label: 'Viewpoint',
    defaultValue: '10',
    componentProps: {
      options: [
        {
          label: '1',
          value: '1',
        },
        {
          label: '2',
          value: '2',
        },
        {
          label: '3',
          value: '3',
        },
        {
          label: '4',
          value: '4',
        },
        {
          label: '5',
          value: '5',
        },
        {
          label: '6',
          value: '6',
        },
        {
          label: '7',
          value: '7',
        },
        {
          label: '8',
          value: '8',
        },
        {
          label: '9',
          value: '9',
        },
        {
          label: '10',
          value: '10',
        },
        {
          label: '11',
          value: '11',
        },
        {
          label: '12',
          value: '12',
        },
        {
          label: '13',
          value: '13',
        },
        {
          label: '14',
          value: '14',
        },
        {
          label: '15',
          value: '15',
        },
        {
          label: '16',
          value: '16',
        },
      ],
    },
    colProps: {
      span: 24,
    },
  },
  {
    field: 'spatial',
    component: 'Input',
    helpMessage: 'Spatial range format: minLon,minLat,maxLon,maxLat',
    label: 'Spatial',
    defaultValue: '114,23,115,24',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'time',
    helpMessage: 'Effective time',
    component: 'RangePicker',
    label: 'Time',
    required: true,
    defaultValue: ['1900-01-01', '2099-12-31'],
    show: true,
  },
];


