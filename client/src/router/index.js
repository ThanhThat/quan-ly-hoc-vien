import { createRouter, createWebHistory } from 'vue-router'
import StudentList from '@/views/student/StudentList.vue'
import CourseList from '@/views/course/CourseList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/students',
    },
    {
      path: '/students',
      name: 'studentList',
      component: StudentList,
    },
    {
      path: '/courses',
      name: 'courses',
      component: CourseList,
    },
  ],
})

export default router
