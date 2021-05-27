
const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/admin',
    name: 'main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/admin/patient-vaccinations'
      },
      {
        path: 'users/:id?',
        name: 'user_read',
        meta: {
          title: 'Usuários',
          icon: 'las la-user-shield'
        },
        props: route => route.params,
        component: ()=>import('pages/Users.vue')
      },
      {
        path: 'patients/:id?',
        name: 'patients_read',
        meta: {
          title: 'Pacientes',
          icon: 'las la-users'
        },
        props: route => route.params,
        component: ()=>import('pages/Patients.vue')
      },
      {
        path: 'vendors/:id?',
        name: 'vendor_read',
        meta: {
          title: 'Fabricantes',
          icon: 'las la-pills'
        },
        props: route => route.params,
        component: ()=>import('pages/Vendors.vue')
      },
      {
        path: 'vaccines/:id?',
        name: 'vaccine_read',
        meta: {
          title: 'Vacinas',
          icon: 'las la-syringe'
        },
        props: route => route.params,
        component: ()=>import('pages/Vaccines.vue')
      },
      {
        path: 'vaccine-stocks/:id?',
        name: 'vaccine_stock_read',
        meta: {
          title: 'Estoque de Vacinas',
          icon: 'las la-briefcase-medical'
        },
        props: route => route.params,
        component: ()=>import('pages/VaccineStocks.vue')
      },
      {
        path: 'patient-vaccinations/:id?',
        name: 'patient_vaccination_read',
        meta: {
          title: 'Vacinação de pacientes',
          icon: 'las la-user-nurse'
        },
        props: route => route.params,
        component: ()=>import('pages/PatientVaccinations.vue')
      },
      {
        path: 'roles/:id?',
        name: 'role_read',
        meta: {
          title: 'Funções',
          icon: 'las la-id-badge'
        },
        props: route => route.params,
        component: ()=>import('pages/Roles.vue')
      },
      {
        path: '/logout',
        name: 'logout',
        meta: {
          title: 'Sair',
          icon: 'las la-sign-out-alt'
        },
        beforeEnter: (to,from,next)=>{
          location.href = `${location.origin}/api/logout`;
        }
      },
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
