import type { AppRouteModule } from '@/router/types';

import { getParentLayout, LAYOUT } from '@/router/constant';
import { t } from '@/hooks/web/useI18n';

const charts: AppRouteModule = {
  path: '/charts',
  name: 'Charts',
  component: LAYOUT,
  redirect: '/charts/marsgis',
  meta: {
    hideChildrenInMenu: true,
    orderNo: 500,
    icon: 'ion:bar-chart-outline',
    title: t('routes.demo.charts.3dearth'),
  },
  children: [
    {
      path: 'marsgis',
      name: 'Marsgis',
      component: () => import('/@/marsgis/views/index.vue'),
      meta: {
        title: t('routes.demo.charts.3dearth'),
        hideMenu: false,
      },
    },
  ],
};

export default charts;
