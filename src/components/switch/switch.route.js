import Switch from '@/components/switch/Switch'
import SwitchNew from '@/components/switch/Switch.New';

export const SwitchRouters = [

  {

    path: '/switch',
    name: 'switch.index',
    component: Switch

  },

  {

    path: '/switch/new',
    name: 'switch.new',
    component: SwitchNew

  }

]
