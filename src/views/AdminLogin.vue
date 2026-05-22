<template>
  <div class="min-h-screen bg-brand-lightBg text-slate-800 flex items-center justify-center px-6 relative overflow-hidden">
    
    <!-- 🌠 배경 장식용 백그라운드 오라 -->
    <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-indigo/10 blur-[120px] pointer-events-none"></div>

    <div class="w-full max-w-md z-10">
      
      <!-- 뒤로가기 넛지 링크 -->
      <router-link to="/" class="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-blue mb-8 transition-smooth">
        <span>←</span> 메인 홈페이지로 돌아가기
      </router-link>

      <!-- 로그인 카드 컨테이너 -->
      <div class="glass-card p-8 md:p-10 rounded-3xl border border-slate-200/60 shadow-2xl relative overflow-hidden">
        
        <!-- 로고 브랜딩 -->
        <div class="flex flex-col items-center gap-3 text-center mb-8">
          <div class="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center font-black text-white text-2xl shadow-lg shadow-brand-blue/20">한</div>
          <h2 class="text-2xl font-black tracking-tight text-slate-900 mt-2">한페이지 관리 포털</h2>
          <p class="text-xs text-slate-500 font-light leading-relaxed">
            한페이지 공식 사이트 관리자 전용 인증 공간입니다.
          </p>
        </div>

        <!-- 로그인 폼 -->
        <form @submit.prevent="handleLogin" class="flex flex-col gap-5">
          
          <!-- 이메일 주소 -->
          <div class="flex flex-col gap-2">
            <label for="email" class="text-xs font-bold text-slate-500">이메일 주소</label>
            <input 
              type="email" 
              id="email" 
              v-model="email"
              required
              placeholder="admin@hanpage.com"
              class="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth"
            />
          </div>

          <!-- 비밀번호 -->
          <div class="flex flex-col gap-2">
            <label for="password" class="text-xs font-bold text-slate-500">비밀번호</label>
            <input 
              type="password" 
              id="password" 
              v-model="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth"
            />
          </div>

          <!-- 보안 경고 알림 문구 -->
          <p class="text-[11px] text-slate-400 leading-normal font-light">
            ⚠️ 최초 계정은 Supabase 웹 대시보드(Authentication -> Users)에서 생성한 이메일과 비밀번호로만 로그인이 허용됩니다.
          </p>

          <!-- 로그인 버튼 -->
          <button 
            type="submit" 
            :disabled="isLoading"
            class="w-full py-4 mt-2 rounded-2xl bg-gradient-brand hover:bg-gradient-brand-hover text-white text-sm font-extrabold shadow-xl shadow-brand-blue/15 hover:shadow-brand-blue/25 hover:-translate-y-0.5 transition-smooth flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!isLoading">보안 관리 영역 접속하기</span>
            <span v-else class="flex items-center gap-2">
              <div class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              계정 인증 및 세션 검증 중...
            </span>
          </button>
        </form>
      </div>

      <!-- 카피라이트 -->
      <p class="text-center text-slate-400 text-xs mt-8">
        © 2026 한페이지(Hanpage). 모든 보안 상태 기록 중.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../utils/supabase'
import Swal from 'sweetalert2'

const router = useRouter()
const email = ref('')
const password = ref('')
const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })

    if (error) throw error

    // 로그인 성공 시 기분 좋은 팝업
    Swal.fire({
      icon: 'success',
      title: '관리자 인증 성공!',
      text: '안전한 대시보드로 이동합니다.',
      timer: 1500,
      showConfirmButton: false,
      background: '#ffffff',
      color: '#0f172a'
    })

    // 즉시 대시보드로 리다이렉트
    setTimeout(() => {
      router.push('/admin')
    }, 1500)

  } catch (err) {
    console.error('로그인 에러:', err.message)
    
    // 에러 팝업 세팅
    Swal.fire({
      icon: 'error',
      title: '로그인 실패',
      text: '이메일 주소 또는 비밀번호가 유효하지 않거나 등록되지 않은 계정입니다. Supabase 대시보드를 다시 확인해 주세요.',
      confirmButtonText: '다시 시도',
      confirmButtonColor: '#2563eb',
      background: '#ffffff',
      color: '#0f172a'
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Scoped 스타일 */
</style>
