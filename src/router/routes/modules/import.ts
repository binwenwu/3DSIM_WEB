import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/import',
  name: 'Import',
  component: LAYOUT,
  redirect: '/import/index',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 2,
    icon: 'ant-design:cloud-upload-outlined',
    title: t('routes.demo.import.import'),
  },
  children: [
    {
      path: 'index',
      name: 'UploadPage',
      component: () => import('/@/views/import/index.vue'),
      meta: {
        title: t('routes.demo.import.import'),
        hideMenu: false,
      },
    },
  ],
};

export default dashboard;
