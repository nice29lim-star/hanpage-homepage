<template>
  <div class="min-h-screen bg-brand-dark-dark text-slate-100 flex flex-col relative overflow-hidden">
    
    <!-- 🌠 백그라운드 디자인 빛무리 -->
    <div class="absolute top-[-25%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[130px] pointer-events-none"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-pink/10 blur-[130px] pointer-events-none"></div>

    <!-- 대시보드 상단 제어 바 -->
    <header class="sticky top-0 z-40 glass-card border-b border-slate-200/60 w-full">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- 왼쪽 브랜드 -->
        <router-link to="/" class="flex items-center gap-2.5 group">
          <div class="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center font-bold text-slate-900 text-base">한</div>
          <span class="text-lg font-black tracking-wide bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:text-brand-pink transition-smooth">한페이지 대시보드</span>
        </router-link>

        <!-- 오른쪽 사용자 상태 및 로그아웃 -->
        <div class="flex items-center gap-4">
          <div class="hidden sm:flex flex-col text-right">
            <span class="text-xs font-semibold text-slate-600">{{ userEmail }}</span>
            <span class="text-[10px] text-brand-purple-light font-bold">인증 관리자 계정</span>
          </div>
          <button 
            @click="handleLogout"
            class="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-red-500/10 border border-slate-200/80 hover:border-red-500/40 text-slate-600 hover:text-red-400 text-xs font-bold transition-smooth flex items-center gap-2"
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
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white border border-slate-200/60 p-8 rounded-3xl shadow-lg">
        <div class="flex flex-col gap-2">
          <h2 class="text-2xl md:text-3xl font-black text-slate-900">실시간 학사 파트너 관리 포털</h2>
          <p class="text-xs md:text-sm text-slate-400 font-light leading-relaxed">
            고객들이 제출한 소중한 진로 교육 문의를 모니터링하고, 활동 갤러리에 업로드할 사진 및 동영상을 실시간 통합 제어합니다.
          </p>
        </div>
        
        <!-- 대시보드 컨트롤 탭 (넛지) -->
        <div class="flex p-1 rounded-xl bg-slate-100 border border-slate-200/80 shadow-inner">
          <button 
            @click="activeSubTab = 'inquiries'"
            :class="activeSubTab === 'inquiries' ? 'bg-gradient-brand text-slate-900 shadow-md' : 'text-slate-400 hover:text-slate-900'"
            class="px-5 py-2.5 rounded-lg text-xs font-bold transition-smooth flex items-center gap-1.5"
          >
            <FileText class="w-3.5 h-3.5" />
            문의 접수 목록 ({{ inquiries.length }})
          </button>
          <button 
            @click="activeSubTab = 'gallery'"
            :class="activeSubTab === 'gallery' ? 'bg-gradient-brand text-slate-900 shadow-md' : 'text-slate-400 hover:text-slate-900'"
            class="px-5 py-2.5 rounded-lg text-xs font-bold transition-smooth flex items-center gap-1.5"
          >
            <Image class="w-3.5 h-3.5" />
            활동 갤러리 관리 ({{ galleryItems.length }})
          </button>
        </div>
      </div>

      <!-- 서브 탭 1: 문의 목록 관리 -->
      <section v-if="activeSubTab === 'inquiries'" class="flex flex-col gap-6">
        <div class="flex items-center justify-between border-b border-slate-200/60 pb-4">
          <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-brand-pink animate-pulse"></span>
            실시간 고객 접수 내역
          </h3>
          <button @click="fetchInquiries" class="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-slate-200/80 hover:bg-white/10 text-slate-600 hover:text-slate-900 transition-smooth">
            목록 새로고침
          </button>
        </div>

        <!-- 로딩 -->
        <div v-if="isInquiriesLoading" class="flex flex-col items-center justify-center py-20 gap-4">
          <div class="w-10 h-10 border-4 border-brand-purple/20 border-t-brand-purple rounded-full animate-spin"></div>
          <p class="text-slate-400 text-sm">실시간 문의 목록 로딩 중...</p>
        </div>

        <!-- 빈 내역 -->
        <div v-else-if="inquiries.length === 0" class="glass-card rounded-3xl py-20 border border-slate-200/60 text-center flex flex-col items-center gap-4">
          <span class="text-4xl">📭</span>
          <h4 class="text-lg font-bold text-slate-900">현재 접수된 교육 문의가 없습니다.</h4>
          <p class="text-xs text-slate-400 max-w-sm mx-auto">메인 페이지의 접수 폼이 활성화되면 실시간으로 이곳에 고객 데이터가 쌓입니다.</p>
        </div>

        <!-- 테이블 목록 -->
        <div v-else class="overflow-x-auto w-full glass-card rounded-3xl border border-slate-200/60 shadow-xl">
          <table class="w-full text-left border-collapse text-sm">
            <thead>
              <tr class="bg-slate-50 border-b border-slate-200/80 border-slate-200/60 text-slate-400 text-xs font-bold uppercase tracking-wider">
                <th class="py-5 px-6">접수 일시</th>
                <th class="py-5 px-6">신청교사 / 학교명</th>
                <th class="py-5 px-6">관심 프로그램</th>
                <th class="py-5 px-6">문의 사항 상세</th>
                <th class="py-5 px-6">처리 상태</th>
                <th class="py-5 px-6 text-center">제어 제어</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              <tr 
                v-for="item in inquiries" 
                :key="item.id"
                class="hover:bg-white/[0.02] transition-smooth"
              >
                <!-- 접수 일시 -->
                <td class="py-4 px-6 text-xs text-slate-400 font-medium whitespace-nowrap">
                  {{ formatDate(item.created_at) }}
                </td>
                <!-- 신청교사 / 학교명 -->
                <td class="py-4 px-6 whitespace-nowrap">
                  <div class="font-bold text-slate-900">{{ item.name }}</div>
                  <div class="text-xs text-slate-400 mt-0.5">{{ item.school_name }}</div>
                </td>
                <!-- 관심 프로그램 -->
                <td class="py-4 px-6 whitespace-nowrap">
                  <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {{ item.program_interest }}
                  </span>
                </td>
                <!-- 문의 사항 상세 -->
                <td class="py-4 px-6 max-w-xs md:max-w-sm">
                  <p class="text-xs text-slate-600 font-light leading-relaxed line-clamp-3 whitespace-pre-line">
                    {{ item.content }}
                  </p>
                </td>
                <!-- 처리 상태 변경 (UPDATE 연동) -->
                <td class="py-4 px-6 whitespace-nowrap">
                  <select 
                    v-model="item.status"
                    @change="updateInquiryStatus(item.id, item.status)"
                    :class="{
                      'bg-red-500/10 text-red-400 border-red-500/20': item.status === '접수',
                      'bg-yellow-500/10 text-yellow-400 border-yellow-500/20': item.status === '검토중',
                      'bg-emerald-500/10 text-emerald-600 border-emerald-500/20': item.status === '완료'
                    }"
                    class="text-xs font-bold px-3 py-1.5 rounded-lg border focus:outline-none focus:ring-1 focus:ring-brand-purple cursor-pointer transition-smooth"
                  >
                    <option value="접수">신규 접수</option>
                    <option value="검토중">내부 검토중</option>
                    <option value="완료">상담 완료</option>
                  </select>
                </td>
                <!-- 제어 제어 -->
                <td class="py-4 px-6 text-center whitespace-nowrap">
                  <button 
                    @click="deleteInquiry(item.id)"
                    class="p-2 rounded-lg bg-white/5 hover:bg-red-500/15 border border-slate-200/80 hover:border-red-500/30 text-slate-400 hover:text-red-400 transition-smooth"
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
        <div class="lg:col-span-4 w-full sticky top-28">
          <div class="glass-card p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden flex flex-col gap-6">
            
            <h3 class="text-lg font-bold text-slate-900 flex items-center gap-2 pb-3 border-b border-slate-200/60">
              <Plus class="w-5 h-5 text-brand-purple-light" />
              신규 활동 미디어 등록
            </h3>

            <form @submit.prevent="uploadMedia" class="flex flex-col gap-5">
              
              <!-- 제목 -->
              <div class="flex flex-col gap-2">
                <label for="g-title" class="text-xs font-bold text-slate-400">활동 타이틀 <span class="text-brand-pink">*</span></label>
                <input 
                  type="text" 
                  id="g-title" 
                  v-model="galleryForm.title"
                  required
                  placeholder="예: 서울수리중학교 강점 발굴단"
                  class="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-200/80 text-slate-900 placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm transition-smooth"
                />
              </div>

              <!-- 미디어 타입 -->
              <div class="flex flex-col gap-2">
                <label for="g-type" class="text-xs font-bold text-slate-400">미디어 카테고리 <span class="text-brand-pink">*</span></label>
                <select 
                  id="g-type" 
                  v-model="galleryForm.media_type"
                  required
                  class="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-200/80 text-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm transition-smooth"
                >
                  <option value="image">현장 사진 업로드 (Image)</option>
                  <option value="video">현장 비디오 업로드 (Video)</option>
                </select>
              </div>

              <!-- 설명 -->
              <div class="flex flex-col gap-2">
                <label for="g-desc" class="text-xs font-bold text-slate-400">간략한 설명 (생략 가능)</label>
                <textarea 
                  id="g-desc" 
                  v-model="galleryForm.description"
                  rows="3"
                  placeholder="학생들이 참여했던 모습에 대한 간단한 묘사를 적어주세요."
                  class="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-200/80 text-slate-900 placeholder-slate-600 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple text-sm transition-smooth resize-none text-xs"
                ></textarea>
              </div>

              <!-- 파일 직접 선택 업로더 -->
              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-slate-400">미디어 파일 직접 선택 <span class="text-brand-pink">*</span></label>
                
                <div 
                  @dragover.prevent="isDragging = true"
                  @dragleave.prevent="isDragging = false"
                  @drop.prevent="handleFileDrop"
                  :class="[
                    isDragging ? 'border-brand-indigo bg-brand-indigo/5' : 'border-slate-200/80 hover:border-brand-purple/40 bg-slate-900/40',
                    galleryFile ? 'border-emerald-500/40 bg-emerald-500/5' : ''
                  ]"
                  class="w-full aspect-video border border-dashed rounded-2xl flex flex-col items-center justify-center p-4 text-center cursor-pointer transition-smooth group relative"
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
                  
                  <div class="flex flex-col items-center gap-2 group-hover:scale-105 transition-smooth" v-if="!galleryFile">
                    <UploadCloud class="w-10 h-10 text-slate-400 group-hover:text-brand-purple-light transition-smooth" />
                    <p class="text-xs text-slate-600 font-semibold">드래그 앤 드롭 또는 클릭하여 업로드</p>
                    <p class="text-[10px] text-slate-400 font-light">사진(PNG, JPG) 및 비디오(MP4 등)</p>
                  </div>
                  
                  <div class="flex flex-col items-center gap-2" v-else>
                    <Check class="w-10 h-10 text-emerald-600" />
                    <p class="text-xs text-emerald-600 font-bold max-w-[200px] truncate">{{ galleryFile.name }}</p>
                    <p class="text-[10px] text-slate-400 font-medium">크기: {{ formatBytes(galleryFile.size) }}</p>
                    <button 
                      type="button" 
                      @click.stop="clearFile"
                      class="text-[10px] text-red-400 hover:underline mt-1 focus:outline-none"
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
                class="w-full py-4 mt-2 rounded-2xl bg-gradient-brand hover:bg-gradient-brand-hover text-slate-900 text-sm font-extrabold shadow-xl shadow-brand-pink/20 hover:shadow-brand-pink/35 transition-smooth flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
          <div class="flex items-center justify-between border-b border-slate-200/60 pb-4">
            <h3 class="text-xl font-bold text-slate-900 flex items-center gap-2">
              📂 현재 업로드된 미디어 ({{ galleryItems.length }})
            </h3>
            <button @click="fetchGallery" class="text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-slate-200/80 hover:bg-white/10 text-slate-600 hover:text-slate-900 transition-smooth">
              목록 새로고침
            </button>
          </div>

          <!-- 로딩 -->
          <div v-if="isGalleryLoading" class="flex flex-col items-center justify-center py-20 gap-4">
            <div class="w-10 h-10 border-4 border-brand-purple/20 border-t-brand-purple rounded-full animate-spin"></div>
            <p class="text-slate-400 text-sm">실시간 갤러리 목록 로딩 중...</p>
          </div>

          <!-- 빈 내역 -->
          <div v-else-if="galleryItems.length === 0" class="glass-card rounded-3xl py-20 border border-slate-200/60 text-center flex flex-col items-center gap-4">
            <span class="text-4xl">🖼️</span>
            <h4 class="text-lg font-bold text-slate-900">등록된 활동 갤러리가 없습니다.</h4>
            <p class="text-xs text-slate-400 max-w-sm mx-auto">왼쪽 업로더 양식을 작성하고 이미지를 직접 드롭해 올리시면 즉시 연동됩니다!</p>
          </div>

          <!-- 그리드 목록 -->
          <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              v-for="item in galleryItems" 
              :key="item.id"
              class="glass-card rounded-2xl overflow-hidden border border-slate-200/60 shadow-md flex flex-col justify-between group h-full relative"
            >
              <div>
                <!-- 미디어 썸네일 -->
                <div class="aspect-video w-full bg-slate-900 relative overflow-hidden flex items-center justify-center border-b border-slate-200/60">
                  <img 
                    v-if="item.media_type === 'image'"
                    :src="item.media_url" 
                    :alt="item.title"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div v-else class="w-full h-full bg-gradient-to-tr from-brand-purple/20 to-brand-pink/20 flex flex-col items-center justify-center gap-2">
                    <Video class="w-8 h-8 text-brand-pink" />
                    <span class="text-xs text-slate-600 font-bold">현장 동영상 파일 (.mp4)</span>
                  </div>
                  
                  <!-- 미디어 정보 뱃지 -->
                  <span 
                    :class="item.media_type === 'image' ? 'bg-brand-purple/20 text-brand-purple-light border-brand-purple/30' : 'bg-brand-pink/20 text-brand-pink border-brand-pink/30'"
                    class="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded-full border"
                  >
                    {{ item.media_type === 'image' ? 'PHOTO' : 'VIDEO' }}
                  </span>
                </div>

                <!-- 타이틀 및 설명 -->
                <div class="p-5 flex flex-col gap-2">
                  <h4 class="font-bold text-slate-900 text-sm line-clamp-1">{{ item.title }}</h4>
                  <p class="text-xs text-slate-400 font-light line-clamp-2 leading-relaxed" v-if="item.description">
                    {{ item.description }}
                  </p>
                </div>
              </div>

              <!-- 제어 패널 (물리적 파일 동시 삭제) -->
              <div class="px-5 py-4 bg-slate-900/40 border-t border-slate-200/60 flex items-center justify-between">
                <a 
                  :href="item.media_url" 
                  target="_blank" 
                  class="text-xs text-slate-400 hover:text-slate-900 transition-smooth flex items-center gap-1 hover:underline"
                >
                  <ExternalLink class="w-3.5 h-3.5" />
                  파일 링크 확인
                </a>
                
                <button 
                  @click="deleteGalleryItem(item.id, item.media_url)"
                  class="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500 border border-red-500/20 hover:border-red-500 text-red-400 hover:text-slate-900 text-xs font-bold transition-smooth flex items-center gap-1"
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
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
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
      .order('order_index', { ascending: true })
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
          media_url: publicUrl,
          order_index: 0
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
      text: `죄송합니다. 오류가 발생했습니다: ${err.message}. Supabase Storage 버킷 'hanpage-media'가 생성되었는지, 권한이 있는지 확인해 주세요.`,
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
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: '삭제하기',
    cancelButtonText: '취소',
    background: '#ffffff',
    color: '#0f172a'
  })

  if (result.isConfirmed) {
    try {
      // A. Public URL 주소로부터 파일 스토리지 상대 경로 추출
      // URL 구조 예시: https://[project].supabase.co/storage/v1/object/public/hanpage-media/images/[filename]
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
/* Scoped 스타일 */
</style>
