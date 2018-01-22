import ServiceCreate from '@/components/maintenance/Service.Create';
import ServiceIndex from '@/components/maintenance/Service.Index';

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

  }

];
