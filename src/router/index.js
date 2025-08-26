import AppLayout from '@/Layouts/AppLayouts.vue'
import { createRouter , createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/guest/LoginView.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/guest/RegistrationView.vue'),
        },
        {
            path: '/dashboard ',
            component: AppLayout,
            children: [
                {
                    path: '/feed',
                    name: 'feed',
                    component: () => import('@/views/authenticated/News.vue'),
                },
                {
                    path: '/chats',
                    name: 'chats',
                    component: () => import('@/views/authenticated/chat.vue'),
                },
                {
                    path: '/communities',
                    name: 'communities',
                    component: () => import('@/views/authenticated/communitiesView.vue'),
                },
                {
                    path: '/assignments',
                    name: 'assignments',
                    component: () => import('@/views/authenticated/assignment.vue'),
                },
                {
                    path: '/events',
                    name: 'events',
                    component: () => import('@/views/authenticated/eventView.vue'),
                },
                  {
                    path: '/profile',
                    name: 'profile',
                    component: import('@/views/authenticated/Profile.vue'),
                },
              
            ],
        },
    ],
})

export default router