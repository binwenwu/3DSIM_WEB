import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/marsgis',
  name: 'Marsgis',
  component: LAYOUT,
  redirect: '/marsgis/index',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 1,
    icon: 'ant-design:global-outlined',
    title: t('routes.demo.marsgis.3dearth'),
  },
  children: [
    {
      path: 'index',
      name: 'MarsgisPage',
      component: () => import('/@/views/marsgis/views/index.vue'),
      meta: {
        title: t('routes.demo.marsgis.3dearth'),
        hideMenu: false,
      },
    },
  ],
};

export default charts;