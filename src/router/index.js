import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../utils/supabase'

// 라우트 정의
const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: { title: '한페이지 - 진로 및 디지털 교육 솔루션' }
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/AdminLogin.vue'),
    meta: { title: '관리자 로그인 - 한페이지' }
  },
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: () => import('../views/AdminDashboard.vue'),
    meta: { 
      requiresAuth: true,
      title: '관리자 대시보드 - 한페이지'
    }
  },
  // 잘못된 경로 입력 시 메인으로 리다이렉트
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    // 문의하기 스크롤 넛지 등 해시 태그 지원
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// 🔐 네비게이션 가드: 관리자 영역 진입 시 로그인 여부 검사
router.beforeEach(async (to, from, next) => {
  // 문서 타이틀 변경
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // 인증이 필요한 페이지인지 확인
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Supabase 현재 세션 획득
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      // 로그인되어 있지 않으면 로그인 페이지로 이동
      next({ name: 'AdminLogin' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
