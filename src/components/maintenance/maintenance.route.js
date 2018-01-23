import ServiceCreate from '@/components/maintenance/Service.Create';
import ServiceIndex from '@/components/maintenance/Service.Index';
import ServiceShow from '@/components/maintenance/Service.Show';

export const MaintenanceRoutes = [

  {

    path: '/maintenance/service/create',
    name: 'maintenance.service.create',
    component: ServiceCreate

  },

  {

    path: 'maintenance/service',
    name: 'maintenance.service',
    component: ServiceIndex

  },

  {

    path: 'maintenance/service/show/:service',
    name: 'maintenance.service.show',
    component: ServiceShow

  }

];
