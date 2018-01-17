import Home from '@/components/home/Home';
import Cce from '@/components/home/Home.Cce';
import Collegiate from '@/components/home/Home.Collegiate';
import Commissions from '@/components/home/Home.Commissions';
import Community from '@/components/home/Home.Community';
import Directory from '@/components/home/Home.Directory';
import Email from '@/components/home/Home.Email';
import Images from '@/components/home/Home.Images';
import Roles from '@/components/home/Home.Roles';
import Services from '@/components/home/Home.Services';
import Support from '@/components/home/Home.Support';

export const HomeRouters = [

  {

    path: '/',
    name: 'home',
    component: Home

  },

  {
    path: '/home-cce',
    name: 'home.cce',
    component: Cce
  },

  {
    path: '/home-collegiate',
    name: 'home.collegiate',
    component: Collegiate
  },

  {
    path: '/home-commissions',
    name: 'home.commissions',
    component: Commissions
  },

  {
    path: '/home-community',
    name: 'home.community',
    component: Community
  },

  {
    path: '/home-directory',
    name: 'home.directory',
    component: Directory
  },

  {
    path: '/home-email',
    name: 'home.email',
    component: Email
  },

  {
    path: '/home-images',
    name: 'home.images',
    component: Images
  },

  {
    path: '/home-roles',
    name: 'home.roles',
    component: Roles
  },

  {
    path: '/home-services',
    name: 'home.services',
    component: Services
  },

  {
    path: '/home-support',
    name: 'home.support',
    component: Support
  }

]
