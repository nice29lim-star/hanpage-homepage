<template>
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col relative overflow-hidden font-sans">
    
    <!-- 🌠 은은한 프리미엄 백그라운드 그라디언트 빛무리 -->
    <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/40 blur-[150px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[150px] pointer-events-none"></div>

    <!-- 대시보드 상단 네비게이션 헤더 -->
    <header class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200/80 w-full shadow-sm">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- 왼쪽 브랜드 -->
        <router-link to="/" class="flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-lg shadow-md shadow-blue-500/20">
            한
          </div>
          <div class="flex flex-col">
            <span class="text-base font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">한페이지</span>
            <span class="text-[10px] text-slate-400 font-bold tracking-wider uppercase">Administrative Portal</span>
          </div>
        </router-link>

        <!-- 오른쪽 사용자 상태 및 로그아웃 -->
        <div class="flex items-center gap-4">
          <div class="hidden sm:flex flex-col text-right">
            <span class="text-xs font-bold text-slate-800">{{ userEmail }}</span>
            <span class="text-[10px] text-blue-600 font-extrabold flex items-center gap-1 justify-end">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
              인증 최고 관리자
            </span>
          </div>
          <button 
            @click="handleLogout"
            class="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-red-50 hover:text-red-600 border border-slate-200 text-slate-600 text-xs font-bold transition-all duration-300 flex items-center gap-2"
          >
            <LogOut class="w-3.5 h-3.5" />
            로그아웃
          </button>
        </div>
      </div>
    </header>

    <!-- 대시보드 메인 본문 -->
    <main class="flex-grow max-w-7xl mx-auto w-full px-6 py-10 z-10 flex flex-col gap-10">
      
      <!-- 대시보드 정보 헤더 -->
      <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]">
        <div class="flex flex-col gap-2 max-w-2xl">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold w-fit">
            🚀 통합 대시보드 v2.0
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">실시간 교육 서비스 통합 제어 센터</h2>
          <p class="text-xs md:text-sm text-slate-500 font-normal leading-relaxed">
            한페이지 홈페이지에 접수된 고객들의 소중한 교육 문의를 모니터링하고, 활동 현장 갤러리에 업로드할 미디어(사진/영상)를 안전하게 관리합니다.
          </p>
        </div>
        
        <!-- 대시보드 컨트롤 탭 -->
        <div class="flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner w-full lg:w-auto">
          <button 
            @click="activeSubTab = 'inquiries'"
            :class="activeSubTab === 'inquiries' ? 'bg-white text-blue-600 shadow-md font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'"
            class="flex-1 lg:flex-none px-6 py-3 rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText class="w-3.5 h-3.5" />
            문의 접수 목록 ({{ inquiries.length }})
          </button>
          <button 
            @click="activeSubTab = 'gallery'"
            :class="activeSubTab === 'gallery' ? 'bg-white text-blue-600 shadow-md font-extrabold' : 'text-slate-500 hover:text-slate-900 font-medium'"
            class="flex-1 lg:flex-none px-6 py-3 rounded-xl text-xs transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Image class="w-3.5 h-3.5" />
            현장 갤러리 관리 ({{ galleryItems.length }})
          </button>
        </div>
      </div>

      <!-- 서브 탭 1: 문의 목록 관리 -->
      <section v-if="activeSubTab === 'inquiries'" class="flex flex-col gap-6">
        <div class="flex items-center justify-between border-b border-slate-200 pb-4">
          <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
            실시간 고객 접수 내역
          </h3>
          <button 
            @click="fetchInquiries" 
            class="text-xs px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold transition-all duration-200 shadow-sm flex items-center gap-1.5"
          >
            🔄 목록 새로고침
          </button>
        </div>

        <!-- 로딩 -->
        <div v-if="isInquiriesLoading" class="flex flex-col items-center justify-center py-24 gap-4 bg-white border border-slate-200 rounded-3xl">
          <div class="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
          <p class="text-slate-500 text-sm font-medium">실시간 문의 목록 로딩 중...</p>
        </div>

        <!-- 빈 내역 -->
        <div v-else-if="inquiries.length === 0" class="bg-white rounded-3xl py-24 border border-slate-200 text-center flex flex-col items-center gap-4 shadow-sm">
          <span class="text-5xl">📭</span>
          <h4 class="text-lg font-bold text-slate-900">현재 접수된 교육 문의가 없습니다.</h4>
          <p class="text-xs text-slate-500 max-w-sm mx-auto">메인 페이지의 접수 폼이 활성화되면 실시간으로 이곳에 고객 데이터가 쌓입니다.</p>
        </div>

        <!-- 테이블 목록 -->
        <div v-else class="overflow-x-auto w-full bg-white rounded-3xl border border-slate-200 shadow-sm">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th class="py-5 px-6">접수 일시</th>
                <th class="py-5 px-6">신청교사 / 학교명</th>
                <th class="py-5 px-6">연락처 및 이메일</th>
                <th class="py-5 px-6">관심 프로그램</th>
                <th class="py-5 px-6">문의 사항 상세</th>
                <th class="py-5 px-6">처리 상태</th>
                <th class="py-5 px-6 text-center">제어</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr 
                v-for="item in inquiries" 
                :key="item.id"
                class="hover:bg-slate-50/50 transition-colors"
              >
                <!-- 접수 일시 -->
                <td class="py-5 px-6 text-xs text-slate-500 font-medium whitespace-nowrap">
                  {{ formatDate(item.created_at) }}
                </td>
                <!-- 신청교사 / 학교명 -->
                <td class="py-5 px-6 whitespace-nowrap">
                  <div class="font-bold text-slate-900 text-sm">{{ item.name }}</div>
                  <div class="text-xs text-slate-500 mt-0.5">{{ item.school_name }}</div>
                </td>
                <!-- 연락처 및 이메일 -->
                <td class="py-5 px-6 whitespace-nowrap">
                  <div class="font-bold text-slate-800 text-xs flex items-center gap-1">📞 {{ item.phone }}</div>
                  <div class="text-xs text-slate-500 mt-1 flex items-center gap-1 text-[11px]">✉️ {{ item.email }}</div>
                </td>
                <!-- 관심 프로그램 -->
                <td class="py-5 px-6 whitespace-nowrap">
                  <span class="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                    {{ item.program_interest }}
                  </span>
                </td>
                <!-- 문의 사항 상세 -->
                <td class="py-5 px-6 max-w-xs md:max-w-sm">
                  <p class="text-xs text-slate-600 font-light leading-relaxed line-clamp-3 whitespace-pre-line">
                    {{ item.content }}
                  </p>
                </td>
                <!-- 처리 상태 변경 -->
                <td class="py-5 px-6 whitespace-nowrap">
                  <select 
                    v-model="item.status"
                    @change="updateInquiryStatus(item.id, item.status)"
                    :class="{
                      'bg-orange-50 text-orange-600 border-orange-200': item.status === '접수',
                      'bg-amber-50 text-amber-600 border-amber-200': item.status === '검토중',
                      'bg-emerald-50 text-emerald-600 border-emerald-200': item.status === '완료'
                    }"
                    class="text-xs font-bold px-3 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all duration-200"
                  >
                    <option value="접수">🔴 신규 접수</option>
                    <option value="검토중">🟡 내부 검토중</option>
                    <option value="완료">🟢 상담 완료</option>
                  </select>
                </td>
                <!-- 제어 -->
                <td class="py-5 px-6 text-center whitespace-nowrap">
                  <button 
                    @click="deleteInquiry(item.id)"
                    class="p-2 rounded-xl bg-white hover:bg-red-50 border border-slate-200 hover:border-red-200 text-slate-400 hover:text-red-500 transition-all duration-200 shadow-sm"
                  >
                    <Trash2 class="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- 서브 탭 2: 갤러리 업로드 및 삭제 관리 -->
      <section v-if="activeSubTab === 'gallery'" class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- 왼쪽: 실시간 미디어 업로더 (Supabase Storage 직접 업로드 연동) -->
        <div class="lg:col-span-4 w-full lg:sticky lg:top-28">
          <div class="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 flex flex-col gap-6">
            
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-200">
              <Plus class="w-5 h-5 text-blue-600" />
              신규 활동 미디어 등록
            </h3>

            <form @submit.prevent="uploadMedia" class="flex flex-col gap-5">
              
              <!-- 제목 -->
              <div class="flex flex-col gap-2">
                <label for="g-title" class="text-xs font-bold text-slate-600">활동 타이틀 <span class="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="g-title" 
                  v-model="galleryForm.title"
                  required
                  placeholder="예: 서울수리중학교 강점 발굴단"
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm transition-all duration-200"
                />
              </div>

              <!-- 미디어 타입 -->
              <div class="flex flex-col gap-2">
                <label for="g-type" class="text-xs font-bold text-slate-600">미디어 카테고리 <span class="text-red-500">*</span></label>
                <select 
                  id="g-type" 
                  v-model="galleryForm.media_type"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-sm transition-all duration-200"
                >
                  <option value="image">현장 사진 업로드 (Image)</option>
                  <option value="video">현장 비디오 업로드 (Video)</option>
                </select>
              </div>

              <!-- 설명 -->
              <div class="flex flex-col gap-2">
                <label for="g-desc" class="text-xs font-bold text-slate-600">간략한 설명 (생략 가능)</label>
                <textarea 
                  id="g-desc" 
                  v-model="galleryForm.description"
                  rows="3"
                  placeholder="학생들이 참여했던 모습에 대한 간단한 묘사를 적어주세요."
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-1 focus:ring-blue-600 text-xs transition-all duration-200 resize-none"
                ></textarea>
              </div>

              <!-- 파일 직접 선택 업로더 -->
              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-slate-600">미디어 파일 직접 선택 <span class="text-red-500">*</span></label>
                
                <div 
                  @dragover.prevent="isDragging = true"
                  @dragleave.prevent="isDragging = false"
                  @drop.prevent="handleFileDrop"
                  :class="[
                    isDragging ? 'border-blue-500 bg-blue-50/50' : 'border-slate-200 hover:border-blue-400 bg-slate-50',
                    galleryFile ? 'border-emerald-500 bg-emerald-50/50' : ''
                  ]"
                  class="w-full aspect-video border border-dashed rounded-2xl flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-all duration-300 group relative"
                  @click="triggerFileInput"
                >
                  <input 
                    type="file" 
                    ref="fileInput" 
                    @change="handleFileChange"
                    accept="image/*,video/*"
                    required
                    class="hidden"
                  />
                  
                  <div class="flex flex-col items-center gap-2 group-hover:scale-105 transition-all duration-300" v-if="!galleryFile">
                    <UploadCloud class="w-10 h-10 text-slate-400 group-hover:text-blue-500 transition-all duration-300" />
                    <p class="text-xs text-slate-700 font-bold">드래그 앤 드롭 또는 클릭하여 업로드</p>
                    <p class="text-[10px] text-slate-400 font-medium">사진(PNG, JPG) 및 비디오(MP4 등)</p>
                  </div>
                  
                  <div class="flex flex-col items-center gap-2 animate-fadeIn" v-else>
                    <Check class="w-10 h-10 text-emerald-600" />
                    <p class="text-xs text-emerald-800 font-bold max-w-[200px] truncate">{{ galleryFile.name }}</p>
                    <p class="text-[10px] text-slate-500 font-semibold">크기: {{ formatBytes(galleryFile.size) }}</p>
                    <button 
                      type="button" 
                      @click.stop="clearFile"
                      class="text-[10px] text-red-500 hover:underline mt-1.5 font-bold focus:outline-none"
                    >
                      파일 취소하기
                    </button>
                  </div>
                </div>
              </div>

              <!-- 업로드 버튼 -->
              <button 
                type="submit" 
                :disabled="isUploading"
                class="w-full py-4 mt-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm font-extrabold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isUploading">Storage 직접 업로드 및 등록</span>
                <span v-else class="flex items-center gap-2">
                  <div class="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  스토리지 저장 및 전송 중... {{ uploadPercent }}%
                </span>
              </button>
            </form>
          </div>
        </div>

        <!-- 오른쪽: 현재 등록된 갤러리 목록 및 삭제 제어 -->
        <div class="lg:col-span-8 w-full flex flex-col gap-6">
          <div class="flex items-center justify-between border-b border-slate-200 pb-4">
            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2">
              📂 현재 업로드된 미디어 ({{ galleryItems.length }})
            </h3>
            <button 
              @click="fetchGallery" 
              class="text-xs px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold transition-all duration-200 shadow-sm flex items-center gap-1.5"
            >
              🔄 목록 새로고침
            </button>
          </div>

          <!-- 로딩 -->
          <div v-if="isGalleryLoading" class="flex flex-col items-center justify-center py-24 gap-4 bg-white border border-slate-200 rounded-3xl">
            <div class="w-10 h-10 border-4 border-blue-600/20 border-t-blue-600 rounded-full animate-spin"></div>
            <p class="text-slate-500 text-sm font-medium">실시간 갤러리 목록 로딩 중...</p>
          </div>

          <!-- 빈 내역 -->
          <div v-else-if="galleryItems.length === 0" class="bg-white rounded-3xl py-24 border border-slate-200 text-center flex flex-col items-center gap-4 shadow-sm">
            <span class="text-5xl">🖼️</span>
            <h4 class="text-lg font-bold text-slate-900">등록된 활동 갤러리가 없습니다.</h4>
            <p class="text-xs text-slate-500 max-w-sm mx-auto">왼쪽 업로더 양식을 작성하고 이미지를 직접 드롭해 올리시면 즉시 연동됩니다!</p>
          </div>

          <!-- 그리드 목록 -->
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              v-for="item in galleryItems" 
              :key="item.id"
              class="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all duration-300 h-full relative"
            >
              <div>
                <!-- 미디어 썸네일 -->
                <div class="aspect-video w-full bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
                  <img 
                    v-if="item.media_type === 'image'"
                    :src="item.media_url" 
                    :alt="item.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div v-else class="w-full h-full bg-gradient-to-tr from-blue-50 to-indigo-50 flex flex-col items-center justify-center gap-2">
                    <Video class="w-8 h-8 text-blue-600 animate-pulse" />
                    <span class="text-xs text-slate-500 font-bold">현장 동영상 파일 (.mp4)</span>
                  </div>
                  
                  <!-- 미디어 정보 뱃지 -->
                  <span 
                    :class="item.media_type === 'image' ? 'bg-blue-50 text-blue-600 border-blue-100' : 'bg-indigo-50 text-indigo-600 border-indigo-100'"
                    class="absolute top-3 left-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full border shadow-sm"
                  >
                    {{ item.media_type === 'image' ? 'PHOTO' : 'VIDEO' }}
                  </span>
                </div>

                <!-- 타이틀 및 설명 -->
                <div class="p-5 flex flex-col gap-2">
                  <h4 class="font-bold text-slate-900 text-sm line-clamp-1 group-hover:text-blue-600 transition-colors">{{ item.title }}</h4>
                  <p class="text-xs text-slate-500 font-light line-clamp-2 leading-relaxed" v-if="item.description">
                    {{ item.description }}
                  </p>
                </div>
              </div>

              <!-- 제어 패널 (물리적 파일 동시 삭제) -->
              <div class="px-5 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <a 
                  :href="item.media_url" 
                  target="_blank" 
                  class="text-xs text-slate-500 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 hover:underline"
                >
                  <ExternalLink class="w-3.5 h-3.5" />
                  파일 링크 확인
                </a>
                
                <button 
                  @click="deleteGalleryItem(item.id, item.media_url)"
                  class="px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-600 border border-red-100 hover:border-red-600 text-red-500 hover:text-white text-xs font-bold transition-all duration-200 flex items-center gap-1 shadow-sm"
                >
                  <Trash2 class="w-3.5 h-3.5" />
                  영구 삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../utils/supabase'
import Swal from 'sweetalert2'
import { LogOut, Trash2, Plus, UploadCloud, Check, Image, Video, ExternalLink, FileText } from 'lucide-vue-next'

const router = useRouter()
const userEmail = ref('admin@hanpage.com')

// --- 🧭 탭 제어 ---
const activeSubTab = ref('inquiries')

// --- ✉️ 1. 실시간 고객 문의 데이터 로직 ---
const isInquiriesLoading = ref(false)
const inquiries = ref([])

const fetchInquiries = async () => {
  isInquiriesLoading.value = true
  try {
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    inquiries.value = data || []
  } catch (err) {
    console.error('문의 목록 로드 에러:', err.message)
  } finally {
    isInquiriesLoading.value = false
  }
}

// 문의 상태 수정 (UPDATE 연동)
const updateInquiryStatus = async (id, newStatus) => {
  try {
    const { error } = await supabase
      .from('inquiries')
      .update({ status: newStatus })
      .eq('id', id)

    if (error) throw error

    Swal.fire({
      icon: 'success',
      title: '상태 업데이트 완료!',
      text: `문의 상태가 '${newStatus}'(으)로 실시간 반영되었습니다.`,
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      background: '#ffffff',
      color: '#0f172a'
    })
  } catch (err) {
    console.error('문의 상태 업데이트 에러:', err.message)
  }
}

// 문의 삭제 (DELETE 연동)
const deleteInquiry = async (id) => {
  const result = await Swal.fire({
    title: '문의 내역을 영구 삭제하시겠습니까?',
    text: '이 작업은 취소할 수 없습니다.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#3b82f6',
    confirmButtonText: '삭제하기',
    cancelButtonText: '취소',
    background: '#ffffff',
    color: '#0f172a'
  })

  if (result.isConfirmed) {
    try {
      const { error } = await supabase
        .from('inquiries')
        .delete()
        .eq('id', id)

      if (error) throw error

      Swal.fire({
        icon: 'success',
        title: '삭제 완료!',
        text: '접수 내역이 테이블에서 영구 폐기되었습니다.',
        background: '#ffffff',
        color: '#0f172a'
      })
      fetchInquiries()
    } catch (err) {
      console.error('문의 삭제 에러:', err.message)
    }
  }
}

// --- 📸 2. 활동 갤러리 미디어 데이터 로직 ---
const isGalleryLoading = ref(false)
const galleryItems = ref([])

const fetchGallery = async () => {
  isGalleryLoading.value = true
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    galleryItems.value = data || []
  } catch (err) {
    console.error('갤러리 리스트 로드 에러:', err.message)
  } finally {
    isGalleryLoading.value = false
  }
}

// --- 📤 3. 미디어 파일 직접 업로드 처리 (Storage 연동) ---
const isUploading = ref(false)
const uploadPercent = ref(0)
const isDragging = ref(false)
const galleryFile = ref(null)
const fileInput = ref(null)

const galleryForm = ref({
  title: '',
  media_type: 'image',
  description: ''
})

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileChange = (e) => {
  const files = e.target.files
  if (files && files.length > 0) {
    galleryFile.value = files[0]
  }
}

const handleFileDrop = (e) => {
  isDragging.value = false
  const files = e.dataTransfer.files
  if (files && files.length > 0) {
    galleryFile.value = files[0]
  }
}

const clearFile = () => {
  galleryFile.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// 메인 업로드 통합 컨트롤러
const uploadMedia = async () => {
  if (!galleryFile.value) {
    Swal.fire({
      icon: 'error',
      title: '파일이 선택되지 않았습니다',
      text: '업로드할 사진 또는 비디오 파일을 선택해 주세요.',
      background: '#ffffff',
      color: '#0f172a'
    })
    return
  }

  isUploading.value = true
  uploadPercent.value = 10
  try {
    const file = galleryFile.value
    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 10)}.${fileExt}`
    const filePath = `${galleryForm.value.media_type}s/${fileName}`

    uploadPercent.value = 30

    // A. Supabase Storage에 파일 직접 업로드
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('hanpage-media')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (uploadError) throw uploadError

    uploadPercent.value = 70

    // B. Public URL(공개 링크) 주소 획득
    const { data: { publicUrl } } = supabase.storage
      .from('hanpage-media')
      .getPublicUrl(filePath)

    uploadPercent.value = 85

    // C. Database gallery 테이블에 업로드 완료 정보 INSERT
    const { error: dbError } = await supabase
      .from('gallery')
      .insert([
        {
          title: galleryForm.value.title,
          description: galleryForm.value.description,
          media_type: galleryForm.value.media_type,
          media_url: publicUrl
        }
      ])

    if (dbError) throw dbError

    uploadPercent.value = 100

    Swal.fire({
      icon: 'success',
      title: '미디어 등록 완료!',
      text: '선택하신 미디어가 Supabase Storage에 직접 보관되었으며 메인 페이지에 실시간 반영됩니다.',
      background: '#ffffff',
      color: '#0f172a'
    })

    // 폼 및 파일 리셋
    galleryForm.value = {
      title: '',
      media_type: 'image',
      description: ''
    }
    clearFile()
    fetchGallery()

  } catch (err) {
    console.error('미디어 업로드 및 등록 중 에러:', err.message)
    Swal.fire({
      icon: 'error',
      title: '업로드 오류 발생',
      text: `오류가 발생했습니다: ${err.message}. Supabase Storage 버킷 'hanpage-media'가 존재하고 Public Access 정책이 수립되어 있는지 확인하세요.`,
      background: '#ffffff',
      color: '#0f172a'
    })
  } finally {
    isUploading.value = false
    uploadPercent.value = 0
  }
}

// 갤러리 아이템 삭제 (DB 레코드 삭제 + Storage 물리 파일 동시 제거)
const deleteGalleryItem = async (id, mediaUrl) => {
  const result = await Swal.fire({
    title: '미디어 항목을 영구 파기하시겠습니까?',
    text: '데이터베이스 및 Supabase Storage의 실제 물리 파일이 동시에 영구 삭제됩니다.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#ef4444',
    cancelButtonColor: '#3b82f6',
    confirmButtonText: '삭제하기',
    cancelButtonText: '취소',
    background: '#ffffff',
    color: '#0f172a'
  })

  if (result.isConfirmed) {
    try {
      // A. Public URL 주소로부터 파일 스토리지 상대 경로 추출
      const pathParts = mediaUrl.split('/hanpage-media/')
      if (pathParts.length > 1) {
        const storageFilePath = pathParts[1]

        // Storage 버킷에서 물리적으로 파일 삭제
        const { error: storageDeleteError } = await supabase.storage
          .from('hanpage-media')
          .remove([storageFilePath])

        if (storageDeleteError) {
          console.warn('스토리지 물리 파일 파괴 중 경고:', storageDeleteError.message)
        }
      }

      // B. Database 레코드 영구 삭제
      const { error: dbError } = await supabase
        .from('gallery')
        .delete()
        .eq('id', id)

      if (dbError) throw dbError

      Swal.fire({
        icon: 'success',
        title: '미디어 파기 완료!',
        text: '갤러리 레코드와 물리 미디어가 안전하게 폐기되었습니다.',
        background: '#ffffff',
        color: '#0f172a'
      })
      fetchGallery()

    } catch (err) {
      console.error('갤러리 삭제 처리 에러:', err.message)
      Swal.fire({
        icon: 'error',
        title: '삭제 중 에러',
        text: `오류가 발생했습니다: ${err.message}`,
        background: '#ffffff',
        color: '#0f172a'
      })
    }
  }
}

// --- 🚪 4. 인증 상태 검증 및 로그아웃 ---
const checkAdminSession = async () => {
  const { data: { session } } = await supabase.auth.getSession()
  if (session) {
    userEmail.value = session.user.email
  } else {
    router.push('/admin/login')
  }
}

const handleLogout = async () => {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    
    Swal.fire({
      icon: 'info',
      title: '로그아웃 되었습니다.',
      text: '안전하게 로그아웃 세션이 파기되었습니다.',
      timer: 1500,
      showConfirmButton: false,
      background: '#ffffff',
      color: '#0f172a'
    })
    
    setTimeout(() => {
      router.push('/admin/login')
    }, 1500)
  } catch (err) {
    console.error('로그아웃 중 오류:', err.message)
  }
}

// --- 🛠️ 5. 기타 유틸리티 ---
const formatDate = (isoString) => {
  if (!isoString) return ''
  const date = new Date(isoString)
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
}

const formatBytes = (bytes, decimals = 2) => {
  if (!+bytes) return '0 Bytes'
  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
}

// 초기 로딩
onMounted(() => {
  checkAdminSession()
  fetchInquiries()
  fetchGallery()
})
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
.animate-fadeIn {
  animation: fadeIn 0.25s ease-out forwards;
}
</style>
