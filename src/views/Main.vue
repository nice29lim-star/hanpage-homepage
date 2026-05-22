<template>
  <!-- 🌟 맑고 화사한 라이트 모드 메인 컨테이너 (산뜻한 화이트/블루 테마) -->
  <div class="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-brand-blue/30 selection:text-brand-blue relative overflow-hidden">
    
    <!-- 🌠 화사한 파스텔톤 백그라운드 빛무리 오라 (어둡고 칙칙한 느낌 제거) -->
    <div class="absolute top-[-10%] left-[-15%] w-[600px] h-[600px] rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[15%] right-[-10%] w-[700px] h-[700px] rounded-full bg-brand-sky/8 blur-[150px] pointer-events-none"></div>
    <div class="absolute top-[35%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[130px] pointer-events-none"></div>

    <!-- 🌐 1. 헤더 내비게이션 바 (글래스모피즘 & Scroll Spy 탑재) -->
    <header class="sticky top-0 z-50 transition-smooth w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md shadow-sm">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- 로고 (푸른색/인디고 품격있는 그라디언트 텍스트) -->
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-brand-blue/25 group-hover:scale-105 transition-smooth">한</div>
          <span class="text-xl font-extrabold tracking-wider bg-gradient-to-r from-brand-blue to-brand-indigo bg-clip-text text-transparent group-hover:text-brand-indigo transition-smooth">한페이지</span>
        </a>

        <!-- 데스크톱 메뉴 (Scroll Spy 활성화) -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide">
          <a 
            href="#about" 
            :class="activeSection === 'about' ? 'text-brand-blue border-b-2 border-brand-blue pb-1' : 'text-slate-600 hover:text-brand-blue border-b-2 border-transparent pb-1'"
            class="transition-smooth"
          >
            브랜드 스토리
          </a>
          <a 
            href="#team" 
            :class="activeSection === 'team' ? 'text-brand-blue border-b-2 border-brand-blue pb-1' : 'text-slate-600 hover:text-brand-blue border-b-2 border-transparent pb-1'"
            class="transition-smooth"
          >
            강사 소개
          </a>
          <a 
            href="#programs" 
            :class="activeSection === 'programs' ? 'text-brand-blue border-b-2 border-brand-blue pb-1' : 'text-slate-600 hover:text-brand-blue border-b-2 border-transparent pb-1'"
            class="transition-smooth"
          >
            교육 프로그램
          </a>
          <a 
            href="#gallery" 
            :class="activeSection === 'gallery' ? 'text-brand-blue border-b-2 border-brand-blue pb-1' : 'text-slate-600 hover:text-brand-blue border-b-2 border-transparent pb-1'"
            class="transition-smooth"
          >
            활동 갤러리
          </a>
          <a 
            href="#contact" 
            :class="activeSection === 'contact' ? 'text-brand-blue border-b-2 border-brand-blue pb-1' : 'text-slate-600 hover:text-brand-blue border-b-2 border-transparent pb-1'"
            class="transition-smooth"
          >
            교육 문의
          </a>
        </nav>

        <!-- 데스크톱 관리자 버튼 -->
        <div class="hidden md:flex items-center gap-4">
          <router-link to="/admin" class="text-xs px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 transition-smooth font-bold text-slate-700 hover:text-brand-blue shadow-sm">
            관리자 모드
          </router-link>
          <a href="#contact" class="px-5 py-2.5 rounded-xl bg-gradient-brand hover:bg-gradient-brand-hover text-white text-sm font-extrabold shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/35 hover:-translate-y-0.5 transition-smooth flex items-center gap-1.5">
            <Sparkles class="w-4 h-4" />
            문의하기
          </a>
        </div>

        <!-- 모바일 햄버거 메뉴 버튼 -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-brand-blue focus:outline-none shadow-sm">
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- 모바일 서브 메뉴 모달 -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 px-6 py-8 flex flex-col gap-6 shadow-2xl z-40">
          <a href="#about" @click="isMobileMenuOpen = false" :class="activeSection === 'about' ? 'text-brand-blue font-bold' : 'text-slate-600'" class="text-lg font-medium hover:text-brand-blue transition-smooth">브랜드 스토리</a>
          <a href="#team" @click="isMobileMenuOpen = false" :class="activeSection === 'team' ? 'text-brand-blue font-bold' : 'text-slate-600'" class="text-lg font-medium hover:text-brand-blue transition-smooth">강사 소개</a>
          <a href="#programs" @click="isMobileMenuOpen = false" :class="activeSection === 'programs' ? 'text-brand-blue font-bold' : 'text-slate-600'" class="text-lg font-medium hover:text-brand-blue transition-smooth">교육 프로그램</a>
          <a href="#gallery" @click="isMobileMenuOpen = false" :class="activeSection === 'gallery' ? 'text-brand-blue font-bold' : 'text-slate-600'" class="text-lg font-medium hover:text-brand-blue transition-smooth">활동 갤러리</a>
          <a href="#contact" @click="isMobileMenuOpen = false" :class="activeSection === 'contact' ? 'text-brand-blue font-bold' : 'text-slate-600'" class="text-lg font-medium hover:text-brand-blue transition-smooth">교육 문의</a>
          <hr class="border-slate-200/60" />
          <div class="flex flex-col gap-3">
            <router-link to="/admin" @click="isMobileMenuOpen = false" class="py-3 text-center rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-smooth">
              관리자 모드
            </router-link>
            <a href="#contact" @click="isMobileMenuOpen = false" class="py-3 text-center rounded-xl bg-gradient-brand text-white font-extrabold shadow-lg shadow-brand-blue/20">
              실시간 문의하기
            </a>
          </div>
        </div>
      </transition>
    </header>

    <!-- 🚀 2. 메인 히어로 섹션 (Pure White & Light Blue) -->
    <section class="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-white">
      <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        <!-- 왼쪽 콘텐츠 블록 -->
        <div class="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
          
          <!-- 슬로건 뱃지 -->
          <div class="inline-flex items-center justify-center lg:justify-start">
            <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-blue/8 border border-brand-blue/15 text-brand-blue shadow-sm">
              <Sparkles class="w-3.5 h-3.5" />
              100% 학생 중심 참여형 교육 솔루션
            </span>
          </div>

          <!-- 메인 타이틀 -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            <span class="block text-slate-900 mb-2 font-black">텍스트가 아닌</span>
            <span class="block bg-gradient-to-r from-brand-blue via-brand-indigo to-brand-sky bg-clip-text text-transparent pb-1">경험으로 배우는 진로</span>
          </h1>

          <!-- 서브 카피 (밝은 배경 가독성 확보) -->
          <p class="text-base md:text-lg lg:text-xl text-slate-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            초·중·고등학교 맞춤형 진로 교육 및 디지털 교육 솔루션 전문 기업, <strong class="font-extrabold text-brand-blue">한페이지</strong>. 우리는 이론 중심의 한계를 깨고 학생들이 생생히 몰입하는 순간을 창조합니다.
          </p>

          <!-- 행동 유도 버튼 세트 (CTA) -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
            <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-brand hover:bg-gradient-brand-hover text-white text-base font-extrabold shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/35 hover:-translate-y-1 transition-smooth flex items-center justify-center gap-2">
              교육 문의하기
              <ArrowRight class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- 오른쪽 비주얼 대시보드 그래픽 -->
        <div class="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none aspect-square group/hero-visual">
          <div class="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-brand-blue to-brand-sky opacity-15 blur-2xl group-hover/hero-visual:opacity-25 transition-smooth pointer-events-none"></div>
          
          <!-- 화사하고 맑은 화이트 대시보드 카드 -->
          <div class="absolute inset-0 rounded-3xl bg-white border border-slate-100 flex flex-col justify-center p-8 shadow-2xl overflow-hidden hover:-translate-y-1 transition-all duration-500">
            <!-- 윈도우 컨트롤 닷 -->
            <div class="absolute top-4 left-4 flex gap-1.5">
              <span class="w-3 h-3 rounded-full bg-red-400"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span class="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            
            <div class="absolute top-4 right-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Status</div>
            
            <!-- 다이나믹 통계 카드 리스트 -->
            <div class="flex flex-col gap-5 w-full mt-4">
              <!-- 만족도 카드 -->
              <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-100/60 transition-smooth shadow-sm">
                <div class="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-xl shadow-sm">💡</div>
                <div class="flex-grow">
                  <h4 class="text-xs font-bold text-slate-500">체험 만족도 평균</h4>
                  <div class="flex items-baseline gap-2 mt-1">
                    <p class="text-2xl font-black text-brand-blue">98.7%</p>
                    <span class="text-[10px] text-emerald-600 font-bold flex items-center">▲ 1.2% (전년비)</span>
                  </div>
                </div>
              </div>
              
              <!-- 참여 학교 수 카드 -->
              <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-100/60 transition-smooth shadow-sm">
                <div class="w-12 h-12 rounded-xl bg-brand-indigo/10 flex items-center justify-center text-xl shadow-sm">🏫</div>
                <div class="flex-grow">
                  <h4 class="text-xs font-bold text-slate-500">누적 참여 학교 수</h4>
                  <div class="flex items-baseline gap-2 mt-1">
                    <p class="text-2xl font-black text-slate-800">320개교 돌파</p>
                    <span class="text-[10px] text-brand-indigo font-bold">전국 초·중·고 학사 연동</span>
                  </div>
                </div>
              </div>
              
              <!-- 레크리에이션 카드 -->
              <div class="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-brand-blue/30 hover:bg-slate-100/60 transition-smooth shadow-sm">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-xl shadow-sm">🔥</div>
                <div class="flex-grow">
                  <h4 class="text-xs font-bold text-slate-500">현장형 레크리에이션 구성</h4>
                  <p class="text-xs font-bold text-slate-600 mt-1">웃음과 소통 중심 몰입도 100% 보장</p>
                </div>
              </div>
            </div>
            
            <div class="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-brand-sky/10 blur-xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- 부드러운 스크롤 지시계 -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" class="text-slate-400 hover:text-brand-blue transition-smooth flex flex-col items-center text-xs gap-1 font-semibold">
          마우스 아래로
          <span class="text-lg">↓</span>
        </a>
      </div>
    </section>

    <!-- 📖 3. 브랜드 스토리 (About Us - 맑은 화이트 레이아웃) -->
    <section id="about" class="py-24 px-6 relative bg-white border-t border-b border-slate-100">
      <div class="max-w-6xl mx-auto flex flex-col gap-16">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-blue uppercase tracking-widest">About Us</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">왜 한페이지 교육이어야 할까요?</h2>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 핵심 가치 2단 레이아웃 (새하얀 톤과 그림자 데코) -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <!-- 카드 1: 교육 철학 -->
          <div class="bg-slate-50/80 border border-slate-100 p-10 rounded-3xl hover:bg-white hover:border-brand-blue/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6">
            <div class="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Compass class="w-7 h-7" />
            </div>
            <h3 class="text-2xl font-bold text-slate-800">이론과 텍스트를 넘어선 실전형 체험 교육</h3>
            <p class="text-slate-600 font-medium leading-relaxed">
              기존의 조용하고 졸린 강의식 진로 교육에서 완전히 탈피합니다. 학생들이 능동적으로 소통하고, 움직이며, 직접 기획하고 실행하는 <strong class="text-brand-blue">100% 몰입형 참여 중심 프로그램</strong>을 지향합니다.
            </p>
          </div>

          <!-- 카드 2: 핵심 가치 -->
          <div class="bg-slate-50/80 border border-slate-100 p-10 rounded-3xl hover:bg-white hover:border-brand-blue/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6">
            <div class="w-14 h-14 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
              <Award class="w-7 h-7" />
            </div>
            <h3 class="text-2xl font-bold text-slate-800">학생 주도성 강화 및 감성 EQ 역량 발견</h3>
            <p class="text-slate-600 font-medium leading-relaxed">
              주변의 기대와 막연한 미래 앞에서 불안한 중·고등학생들의 내면을 케어합니다. 자기 이해를 기반으로 한 '진로 설계'와 급변하는 디지털 시대에 꼭 필요한 '디지털 창의 협동 역량'을 스스로 발견해 냅니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 👥 4. 브랜드 사람들 (Our Team - 캐릭터 잘림 현상 완벽 조치!) -->
    <section id="team" class="py-24 px-6 bg-[#F8FAFC]">
      <div class="max-w-6xl mx-auto flex flex-col gap-16">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-blue uppercase tracking-widest">Our Team</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">한페이지를 만드는 사람들</h2>
          <p class="text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base">
            형식적인 교육이 아닌, 뜨거운 열정과 위트로 청소년들의 마음을 움직이는 최고의 전문가 크루입니다.
          </p>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 팀원 카드 리스트 -->
        <div class="flex flex-col gap-12">
          
          <!-- 대표 강사 서윤호 (와이드 카드 레이아웃) -->
          <div class="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-2xl relative overflow-hidden group">
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-blue/10 transition-smooth"></div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <!-- 왼쪽: 대표 이미지 (둥근 사각형 + p-2 + object-contain을 통한 잘림 해결!) -->
              <div class="lg:col-span-5 flex flex-col items-center text-center gap-6">
                <div class="relative">
                  <div class="absolute inset-0 bg-brand-blue rounded-3xl blur-md opacity-10 group-hover:opacity-20 transition-smooth pointer-events-none"></div>
                  <!-- rounded-full에서 rounded-3xl로 전격 변경하여 캐릭터 잘림을 근본 방지합니다. -->
                  <div class="w-52 h-52 md:w-60 md:h-60 rounded-3xl border-4 border-slate-100 bg-white shadow-xl overflow-hidden flex items-center justify-center p-2.5 relative z-10 transition-smooth group-hover:border-brand-blue/40">
                    <img src="/assets/images/characters/ceo.png" alt="서윤호 대표" class="w-full h-full object-contain transform hover:scale-105 transition-smooth" />
                  </div>
                </div>
                
                <div class="flex flex-col gap-1">
                  <span class="text-xs font-extrabold tracking-wider text-brand-blue bg-brand-blue/8 border border-brand-blue/15 px-4 py-1.5 rounded-full w-max mx-auto uppercase">Representative Instructor</span>
                  <h3 class="text-2xl md:text-3xl font-black text-slate-800 mt-2">서윤호 대표</h3>
                </div>

                <!-- 질문 슬로건 -->
                <div class="w-full py-4 px-5 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-2 relative">
                  <span class="absolute top-2 left-3 text-3xl text-brand-blue/15 font-serif leading-none">“</span>
                  <p class="text-slate-700 text-sm font-bold italic leading-relaxed mt-2">
                    "전하고자 하는 의미가 잘 전달되면 좋은 강사일까?"
                  </p>
                  <p class="text-slate-700 text-sm font-bold italic leading-relaxed">
                    "재미있게만 하면 좋은 강사일까?"
                  </p>
                  <span class="absolute bottom-1 right-3 text-3xl text-brand-blue/15 font-serif leading-none">”</span>
                </div>
              </div>
              
              <!-- 오른쪽: 약력 그리드 & 진정성 있는 고민/인사말 (완전 라이트 스타일) -->
              <div class="lg:col-span-7 flex flex-col gap-8 text-left">
                
                <!-- 이력 소개 -->
                <div>
                  <h4 class="text-base font-bold text-slate-800 mb-4 flex items-center gap-2 border-b border-slate-100 pb-2">
                    <Award class="w-5 h-5 text-brand-blue" />
                    프로필 및 이력 소개
                  </h4>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <!-- 이력 목록들 -->
                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold">전문사회 업체 <strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[스테이지온]</strong> 대표</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[청소년 레크리에이션]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[자기주도 학습]</strong> 컨설팅 및 지도자</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[나를 알리는 스피치]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[회복탄력성 · 자존감향상]</strong> 강연가</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[동기부여]</strong> 강연가</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[진로·인성·동기부여 콘서트]</strong> 기획/강연</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[디지털 윤리]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[기업 단합 팀빌딩]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 hover:border-brand-blue/30 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/15 flex items-center justify-center text-brand-blue text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-bold"><strong class="text-slate-800 group-hover/chip:text-brand-blue transition-smooth">[비즈니스 역량 강화]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center text-slate-500 text-[10px] font-bold shrink-0">前</div>
                      <span class="text-xs md:text-sm font-bold">공연예술단 <strong class="text-slate-700 group-hover/chip:text-brand-indigo transition-smooth">[심술]</strong> 단장</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-slate-200 flex items-center justify-center text-slate-500 text-[10px] font-bold shrink-0">前</div>
                      <span class="text-xs md:text-sm font-bold">청소년센터 연기지도 강사</span>
                    </div>
                  </div>
                </div>

                <!-- 인사말 & 고민글 -->
                <div class="flex flex-col gap-4 border-t border-slate-100 pt-6">
                  <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</h4>
                  <div class="text-slate-650 text-sm md:text-base font-medium leading-relaxed flex flex-col gap-4">
                    <p>
                      안녕하세요! 수년간 초, 중, 고등학교 뿐만 아니라 여러 무대에서 강의해 오며 어떻게 하면 아이들의 흥미와 전하고자 하는 가치를 다 만족시킬 수 있을지 매 순간 진지하게 성찰해 왔습니다.
                    </p>
                    <p class="border-l-2 border-brand-blue pl-4 italic text-slate-800 bg-slate-50/80 py-3 pr-3 rounded-r-xl font-bold">
                      적어도 우리 아이들의 머리와 가슴속에 긍정적인 파동을 심어줄 수 있다면, 그리고 시간이 흐른 뒤에도 소중하고 뜻깊은 순간으로 추억될 수만 있다면 그것이 최고의 가치라 여기며 매 강의마다 진정성을 쏟아내고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 매니저 2인 그리드 (둥근 사각형 p-2 object-contain 캐릭터 잘림 완벽 제거!) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- 박주연 매니저 -->
            <div class="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl flex flex-col gap-6 relative group overflow-hidden">
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-blue/10 transition-smooth"></div>
              
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <!-- 캐릭터 이미지 잘림 방지 (rounded-3xl + object-contain) -->
                <div class="relative shrink-0">
                  <div class="absolute inset-0 bg-brand-blue rounded-3xl blur-md opacity-10 group-hover:opacity-20 transition-smooth pointer-events-none"></div>
                  <div class="w-32 h-32 rounded-3xl border-4 border-slate-100 bg-slate-50 shadow-md overflow-hidden flex items-center justify-center p-2 relative z-10 transition-smooth group-hover:border-brand-blue/40">
                    <img src="/assets/images/characters/manager1.png" alt="박주연 매니저" class="w-full h-full object-contain transform hover:scale-105 transition-smooth" />
                  </div>
                </div>
                
                <!-- 기본 정보 -->
                <div class="flex flex-col gap-2 text-center sm:text-left">
                  <span class="text-xs font-extrabold text-brand-blue bg-brand-blue/8 border border-brand-blue/15 px-3 py-1.5 rounded-full w-max mx-auto sm:mx-0">Program Manager</span>
                  <h3 class="text-2xl font-bold text-slate-800">박주연 매니저</h3>
                  <div class="flex items-start gap-1.5 text-xs text-slate-500 mt-1 justify-center sm:justify-start font-semibold">
                    <Sparkles class="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" />
                    <span>現 한페이지 교육 프로그램 운영 및 강의 매니저</span>
                  </div>
                </div>
              </div>

              <!-- 슬로건 멘트 -->
              <div class="border-t border-slate-100 pt-6 flex-grow flex flex-col justify-center">
                <p class="text-slate-700 text-sm md:text-base font-bold italic leading-relaxed text-center sm:text-left relative pl-4 border-l-2 border-brand-blue/30 bg-slate-50/50 py-3 pr-3 rounded-r-xl">
                  "사소한 일상 속에서도 즐거움을 찾아내고, 긍정적인 에너지로 학생들과 같은 눈높이에서 트렌디하게 소통하며, 가능성을 발견하고 성장을 응원하는 진로 가이드"
                </p>
              </div>
            </div>

            <!-- 이승규 매니저 -->
            <div class="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-xl flex flex-col gap-6 relative group overflow-hidden">
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-indigo/5 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-indigo/10 transition-smooth"></div>
              
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <!-- 캐릭터 이미지 잘림 방지 (rounded-3xl + object-contain) -->
                <div class="relative shrink-0">
                  <div class="absolute inset-0 bg-brand-indigo rounded-3xl blur-md opacity-10 group-hover:opacity-20 transition-smooth pointer-events-none"></div>
                  <div class="w-32 h-32 rounded-3xl border-4 border-slate-100 bg-slate-50 shadow-md overflow-hidden flex items-center justify-center p-2 relative z-10 transition-smooth group-hover:border-brand-indigo/40">
                    <img src="/assets/images/characters/manager2.png" alt="이승규 매니저" class="w-full h-full object-contain transform hover:scale-105 transition-smooth" />
                  </div>
                </div>
                
                <!-- 기본 정보 -->
                <div class="flex flex-col gap-2 text-center sm:text-left">
                  <span class="text-xs font-extrabold text-brand-indigo bg-brand-indigo/8 border border-brand-indigo/15 px-3 py-1.5 rounded-full w-max mx-auto sm:mx-0">Program Manager</span>
                  <h3 class="text-2xl font-bold text-slate-800">이승규 매니저</h3>
                  <div class="flex items-start gap-1.5 text-xs text-slate-500 mt-1 justify-center sm:justify-start font-semibold">
                    <Sparkles class="w-3.5 h-3.5 text-brand-indigo shrink-0 mt-0.5" />
                    <span>現 한페이지 교육 프로그램 운영 및 강의 매니저</span>
                  </div>
                </div>
              </div>

              <!-- 슬로건 멘트 -->
              <div class="border-t border-slate-100 pt-6 flex-grow flex flex-col justify-center">
                <p class="text-slate-700 text-sm md:text-base font-bold italic leading-relaxed text-center sm:text-left relative pl-4 border-l-2 border-brand-indigo/30 bg-slate-50/50 py-3 pr-3 rounded-r-xl">
                  "지루하지 않지만 가볍지도 않게 즐거운 대화 속에서 아이들 스스로 자신의 가능성을 발견하도록 돕고, 꿈은 '내가 좋아하는 것'을 알아가는 작은 순간에서 시작됨을 알려주는 따뜻한 진로 가이드"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🎨 5. 핵심 프로그램 소개 (Our Solutions) -->
    <section id="programs" class="py-24 px-6 bg-[#F1F5F9]/50 border-t border-b border-slate-100 relative">
      <div class="max-w-6xl mx-auto flex flex-col gap-12">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-blue uppercase tracking-widest">Our Solutions</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">성장을 위한 핵심 교육 콘텐츠</h2>
          <p class="text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base">
            진로 콘텐츠와 디지털 콘텐츠로 구분되어 학교의 행사 요구에 최적화된 맞춤형 선택을 보장합니다.
          </p>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 탭 버튼 세트 -->
        <div class="flex justify-center mt-4">
          <div class="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button 
              @click="activeTab = 'career'"
              :class="activeTab === 'career' ? 'bg-gradient-brand text-white shadow-md' : 'text-slate-400 hover:text-brand-blue hover:bg-slate-50'"
              class="px-6 py-3 rounded-xl font-extrabold text-sm transition-smooth flex items-center gap-2"
            >
              🎨 진로 콘텐츠
            </button>
            <button 
              @click="activeTab = 'digital'"
              :class="activeTab === 'digital' ? 'bg-gradient-brand text-white shadow-md' : 'text-slate-400 hover:text-brand-blue hover:bg-slate-50'"
              class="px-6 py-3 rounded-xl font-extrabold text-sm transition-smooth flex items-center gap-2"
            >
              💻 디지털 콘텐츠
            </button>
          </div>
        </div>

        <!-- 탭 콘텐츠 카드 렌더링 -->
        <transition name="fade" mode="out-in">
          
          <!-- 진로 콘텐츠 3종 -->
          <div v-if="activeTab === 'career'" key="career" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            
            <!-- 강점 발굴단 -->
            <div class="bg-white p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-8 h-full border-t-4 border-t-brand-blue shadow-md">
              <div class="flex flex-col gap-5">
                <span class="text-[10px] font-extrabold px-3 py-1.5 rounded-full bg-brand-blue/8 text-brand-blue w-max uppercase">추천: 신입생, 자유학기제</span>
                <div class="text-4xl font-black text-brand-blue/30">01</div>
                <h3 class="text-xl font-bold text-slate-800">강점 발굴단</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">
                  모두가 참여하여 웃고 소통하며 어색함을 말끔히 깨부수고, 다채로운 참여 게임 속에서 각자의 고유한 강점과 팀워크를 자연스럽게 발견하는 협력 중심 팀빌딩 프로그램입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-blue hover:text-brand-indigo transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 마인드 부스터 -->
            <div class="bg-white p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-8 h-full border-t-4 border-t-brand-indigo shadow-md">
              <div class="flex flex-col gap-5">
                <span class="text-[10px] font-extrabold px-3 py-1.5 rounded-full bg-brand-indigo/8 text-brand-indigo w-max uppercase">추천: 학년 행사, 힐링 토크</span>
                <div class="text-4xl font-black text-brand-indigo/30">02</div>
                <h3 class="text-xl font-bold text-slate-800">마인드 부스터</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">
                  마이크와 스토리텔링, 그리고 몰입형 레크리에이션이 긴밀하게 결합되어 학생들의 닫힌 내면과 걱정거리가 스르르 풀리는 고품격 양방향 토크 강연 콘서트 교육입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-indigo hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 우리의 캔버스 -->
            <div class="bg-white p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-8 h-full border-t-4 border-t-brand-sky shadow-md">
              <div class="flex flex-col gap-5">
                <span class="text-[10px] font-extrabold px-3 py-1.5 rounded-full bg-brand-sky/8 text-brand-sky w-max uppercase">추천: 학교 축제, 전일제</span>
                <div class="text-4xl font-black text-brand-sky/30">03</div>
                <h3 class="text-xl font-bold text-slate-800">우리의 캔버스</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">
                  기획부터 현장 무대 운영, 그리고 체험부스 조성까지 3단계 프로세스를 따라, 아이들 스스로가 주축이 되어 생생하게 이끌어 나가는 대규모 청소년 진로 축제 솔루션입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-sky hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- 디지털 콘텐츠 3종 -->
          <div v-else key="digital" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            
            <!-- 나의 강점 스캐너 -->
            <div class="bg-white p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-8 h-full border-t-4 border-t-brand-blue shadow-md">
              <div class="flex flex-col gap-5">
                <span class="text-[10px] font-extrabold px-3 py-1.5 rounded-full bg-brand-blue/8 text-brand-blue w-max uppercase">데이터 진단 / 학급 보고서</span>
                <div class="text-4xl font-black text-brand-blue/30">01</div>
                <h3 class="text-xl font-bold text-slate-800">나의 강점 스캐너</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">
                  체계적인 데이터 진단 설문으로 각자의 재능 분포를 분석하며, 담당 교사에게는 학급 성향 및 강점 트렌드를 지표로 명료하게 제공하는 인공지능 분석 진단 솔루션입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-blue hover:text-brand-indigo transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 나 사용 설명서 -->
            <div class="bg-white p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-8 h-full border-t-4 border-t-brand-indigo shadow-md">
              <div class="flex flex-col gap-5">
                <span class="text-[10px] font-extrabold px-3 py-1.5 rounded-full bg-brand-indigo/8 text-brand-indigo w-max uppercase">AI 활용 / 포트폴리오</span>
                <div class="text-4xl font-black text-brand-indigo/30">02</div>
                <h3 class="text-xl font-bold text-slate-800">나 사용 설명서</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">
                  필터 없는 AI 의존의 부작용을 고찰하고, 자체 개발 워크시트로 진정성 있는 자기성찰을 거친 뒤, 생성형 AI 아트 기술을 활용해 세상에 하나뿐인 나만의 포트폴리오 북을 제작합니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-indigo hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 일상의 발명가 -->
            <div class="bg-white p-8 rounded-3xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between gap-8 h-full border-t-4 border-t-brand-sky shadow-md">
              <div class="flex flex-col gap-5">
                <span class="text-[10px] font-extrabold px-3 py-1.5 rounded-full bg-brand-sky/8 text-brand-sky w-max uppercase">노코딩 AI 코딩 / 실생활 해결</span>
                <div class="text-4xl font-black text-brand-sky/30">03</div>
                <h3 class="text-xl font-bold text-slate-800">일상의 발명가</h3>
                <p class="text-slate-600 font-medium text-sm leading-relaxed">
                  어려운 프로그래밍 전공지식 없이 오직 대화형 AI 프롬프트를 조율하여, 나만의 창의 앱 프로토타입을 손수 빌드해 보는 실생활 밀착형 노코딩 테크 교육입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-extrabold text-brand-sky hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- 📸 6. 활동 갤러리 및 성과 (Social Proof - 8개 풍성한 미디어 그리드로 확장!) -->
    <section id="gallery" class="py-24 px-6 relative bg-white">
      <div class="max-w-6xl mx-auto flex flex-col gap-16">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-blue uppercase tracking-widest">Social Proof</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">생생한 현장 갤러리</h2>
          <p class="text-slate-500 font-medium max-w-xl mx-auto text-sm md:text-base">
            참여 학생들이 직접 기획하고 소통했던 한페이지 교육 솔루션의 생동감 넘치는 행사 갤러리입니다.
          </p>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 로딩 표시자 -->
        <div v-if="isGalleryLoading" class="flex flex-col items-center justify-center py-20 gap-4">
          <div class="w-10 h-10 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin"></div>
          <p class="text-slate-500 text-sm">실시간 현장 갤러리 불러오는 중...</p>
        </div>

        <!-- 갤러리 리스트 렌더링 (그리드 대폭 늘려 풍성함 제공!) -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="item in galleryItems" 
            :key="item.id"
            @click="openMediaModal(item)"
            class="bg-white rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full border border-slate-100 shadow-md"
          >
            <!-- 썸네일 컨테이너 -->
            <div class="aspect-video w-full bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-100">
              
              <!-- 이미지 타입 -->
              <img 
                v-if="item.media_type === 'image'" 
                :src="item.media_url" 
                :alt="item.title"
                class="w-full h-full object-cover transition-smooth group-hover:scale-105"
              />
              
              <!-- 비디오 타입 -->
              <div v-else class="w-full h-full relative flex items-center justify-center">
                <video 
                  :src="item.media_url" 
                  muted 
                  playsinline 
                  class="w-full h-full object-cover"
                ></video>
                <div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-smooth flex items-center justify-center">
                  <div class="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center shadow-lg shadow-brand-blue/30 transform group-hover:scale-110 transition-smooth">
                    <Play class="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            </div>

            <!-- 설명 본문 -->
            <div class="p-5 flex-grow flex flex-col gap-2 justify-between">
              <div>
                <h3 class="font-extrabold text-slate-800 text-base leading-snug group-hover:text-brand-blue transition-smooth line-clamp-1">
                  {{ item.title }}
                </h3>
                <p class="text-slate-500 font-medium text-xs leading-relaxed mt-2 line-clamp-2">
                  {{ item.description }}
                </p>
              </div>
              <div class="flex items-center justify-between border-t border-slate-50 pt-3 mt-4 text-[10px] text-slate-400 font-bold">
                <span class="flex items-center gap-1 text-brand-blue bg-brand-blue/5 px-2 py-0.5 rounded">
                  <CheckCircle class="w-3 h-3" />
                  진행완료
                </span>
                <span>현장 스케치</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ✉️ 7. 실시간 온라인 교육 문의 접수 (산뜻하고 또렷한 라이트 폼 디자인) -->
    <section id="contact" class="py-24 px-6 relative bg-[#F8FAFC] border-t border-slate-100">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        <!-- 왼쪽 안내 텍스트 -->
        <div class="lg:col-span-5 flex flex-col gap-8 text-center lg:text-left">
          <div class="flex flex-col gap-3">
            <span class="text-sm font-bold text-brand-indigo uppercase tracking-widest">Get In Touch</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              함께 써 내려갈 <br />
              <span class="text-brand-blue bg-brand-blue/8 px-1 rounded">성장의 첫 페이지</span>
            </h2>
          </div>
          
          <p class="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
            학교의 학사 일정(축제, 자유기 학기제, 명사 초청 콘서트 등)에 딱 들어맞는 맞춤형 세부 기획안과 실시간 견적 안내를 무상으로 제공해 드립니다. 주저하지 마시고 지금 노크해 주세요!
          </p>

          <div class="flex flex-col gap-4 mt-2">
            <!-- 직접 연락 채널 -->
            <div class="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-smooth hover:border-brand-blue/30">
              <div class="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center shadow-sm">
                <Phone class="w-5 h-5" />
              </div>
              <div class="text-left">
                <p class="text-[10px] font-bold text-slate-400 uppercase">대표 강사 핫라인</p>
                <p class="text-sm font-extrabold text-slate-800 mt-0.5">010-8503-2130</p>
              </div>
            </div>

            <div class="flex items-center gap-4 p-4.5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-smooth hover:border-brand-blue/30">
              <div class="w-11 h-11 rounded-xl bg-brand-indigo/10 text-brand-indigo flex items-center justify-center shadow-sm">
                <Mail class="w-5 h-5" />
              </div>
              <div class="text-left">
                <p class="text-[10px] font-bold text-slate-400 uppercase">공식 교육 제안 이메일</p>
                <p class="text-sm font-extrabold text-slate-800 mt-0.5">official@hanpage.net</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 오른쪽 문의 양식 카드 (가독성 극대화된 라이트 폼) -->
        <div class="lg:col-span-7 w-full relative">
          <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-blue to-brand-indigo opacity-10 blur-xl pointer-events-none"></div>
          
          <div class="relative bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-2xl">
            <h3 class="text-xl font-bold text-slate-900 mb-2">실시간 제안서 신청 양식</h3>
            <p class="text-xs text-slate-500 font-medium mb-6">모든 정보는 안전하게 관리되며 상담 목적 외에 절대 수집/활용되지 않습니다.</p>
            
            <form @submit.prevent="submitInquiry" class="flex flex-col gap-5">
              
              <!-- 성명 & 학교/기관명 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-xs font-bold text-slate-600">담당 선생님 성함 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="inquiryForm.name"
                    required
                    placeholder="예: 홍길동"
                    class="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth shadow-sm"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="school" class="text-xs font-bold text-slate-600">소속 학교 / 기관명 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="text" 
                    id="school" 
                    v-model="inquiryForm.school_name"
                    required
                    placeholder="예: 한국고등학교"
                    class="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth shadow-sm"
                  />
                </div>
              </div>

              <!-- 연락처 & 이메일 주소 -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="flex flex-col gap-2">
                  <label for="phone" class="text-xs font-bold text-slate-600">연락처 번호 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="inquiryForm.phone"
                    required
                    placeholder="예: 010-1234-5678"
                    class="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth shadow-sm"
                  />
                </div>

                <div class="flex flex-col gap-2">
                  <label for="email" class="text-xs font-bold text-slate-600">이메일 주소 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="inquiryForm.email"
                    required
                    placeholder="예: teacher@school.hs.kr"
                    class="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth shadow-sm"
                  />
                </div>
              </div>

              <!-- 관심 교육 카테고리 -->
              <div class="flex flex-col gap-2">
                <label for="program" class="text-xs font-bold text-slate-600">관심 프로그램 선택 <span class="text-brand-pink">*</span></label>
                <select 
                  id="program" 
                  v-model="inquiryForm.program_interest"
                  required
                  class="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-700 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth shadow-sm cursor-pointer"
                >
                  <option value="" disabled selected>프로그램을 선택해 주세요</option>
                  <optgroup label="🎨 진로 콘텐츠">
                    <option value="진로_강점 발굴단">강점 발굴단 (팀빌딩/체험)</option>
                    <option value="진로_마인드 부스터">마인드 부스터 (토크 콘서트)</option>
                    <option value="진로_우리의 캔버스">우리의 캔버스 (기획 페스티벌)</option>
                  </optgroup>
                  <optgroup label="💻 디지털 콘텐츠">
                    <option value="디지털_나의 강점 스캐너">나의 강점 스캐너 (데이터 진단)</option>
                    <option value="디지털_나 사용 설명서">나 사용 설명서 (AI 포트폴리오)</option>
                    <option value="디지털_일상의 발명가">일상의 발명가 (바이브 AI 코딩)</option>
                  </optgroup>
                  <option value="기타 행사 및 소통 문의">기타 교육 및 레크리에이션 문의</option>
                </select>
              </div>

              <!-- 상세 문의 사항 -->
              <div class="flex flex-col gap-2">
                <label for="content" class="text-xs font-bold text-slate-600">문의 사항 상세 기재 <span class="text-brand-pink">*</span></label>
                <textarea 
                  id="content" 
                  v-model="inquiryForm.content"
                  required
                  rows="4"
                  placeholder="예: 희망 교육 대상 학년, 예상 참여 학생수, 교육 희망 날짜 등을 적어주시면 상세 맞춤 견적이 수립됩니다."
                  class="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm transition-smooth resize-none shadow-sm"
                ></textarea>
              </div>

              <!-- 동의성 체크박스 -->
              <div class="flex items-start gap-2.5 mt-1">
                <input 
                  type="checkbox" 
                  id="agree" 
                  required
                  checked
                  class="mt-1 w-4 h-4 rounded text-brand-blue bg-white border-slate-300 focus:ring-brand-blue cursor-pointer"
                />
                <label for="agree" class="text-xs text-slate-500 leading-normal cursor-pointer select-none font-medium">
                  개인정보 수집 및 문의 접수를 위한 목적에 동의합니다. (한페이지는 개인정보를 안전하게 보호하며 마케팅 목적으로 활용하지 않습니다.)
                </label>
              </div>

              <!-- 서브밋 버튼 -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full py-4 mt-2 rounded-2xl bg-gradient-brand hover:bg-gradient-brand-hover text-white text-base font-extrabold shadow-xl shadow-brand-blue/20 hover:shadow-brand-blue/35 transition-smooth flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">성장의 첫 페이지 개시하기</span>
                <span v-else class="flex items-center gap-2">
                  <div class="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  실시간 서버 접수 중...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- 🏷️ 8. 리얼 푸터 정보 영역 -->
    <footer class="w-full py-8 px-6 bg-white border-t border-slate-100 text-center text-xs text-slate-500 font-bold">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 한페이지(Hanpage). All rights reserved.</p>
        <div class="flex items-center gap-4 text-slate-500">
          <router-link to="/admin" class="hover:text-brand-blue transition-smooth">관리자 관리 포털</router-link>
          <span>|</span>
          <span>대표 강사 서윤호</span>
          <span>|</span>
          <span>연락처 010-8503-2130</span>
        </div>
      </div>
    </footer>

    <!-- 🔍 9. 상세 미디어 모달 팝업 -->
    <transition name="fade">
      <div 
        v-if="selectedMedia" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md"
        @click.self="closeMediaModal"
      >
        <div class="bg-white border border-slate-100 rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative">
          <!-- 닫기 버튼 -->
          <button 
            @click="closeMediaModal"
            class="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-smooth focus:outline-none z-10"
          >
            <X class="w-5 h-5" />
          </button>
          
          <!-- 미디어 내용 -->
          <div class="aspect-video w-full bg-slate-950 flex items-center justify-center border-b border-slate-100">
            <img 
              v-if="selectedMedia.media_type === 'image'" 
              :src="selectedMedia.media_url" 
              :alt="selectedMedia.title"
              class="max-w-full max-h-full object-contain"
            />
            <video 
              v-else 
              :src="selectedMedia.media_url" 
              controls 
              autoplay
              playsinline
              class="w-full h-full object-contain"
            ></video>
          </div>
          
          <!-- 텍스트 설명 -->
          <div class="p-6 md:p-8 text-left bg-white">
            <h3 class="text-xl font-bold text-slate-900 leading-snug">
              {{ selectedMedia.title }}
            </h3>
            <p class="text-slate-600 font-medium text-sm leading-relaxed mt-3">
              {{ selectedMedia.description }}
            </p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { supabase } from '../utils/supabase'
import Swal from 'sweetalert2'
import { 
  Menu, X, Sparkles, Download, ArrowRight, Compass, Award, 
  ChevronRight, Play, CheckCircle, Phone, Mail 
} from 'lucide-vue-next'

// --- 🧭 모바일 상태 제어 ---
const isMobileMenuOpen = ref(false)

// --- 🎨 탭 제어 ---
const activeTab = ref('career')

// --- 🧭 Scroll Spy & Active Navigation ---
const activeSection = ref('')
const sections = ['about', 'team', 'programs', 'gallery', 'contact']

const handleScroll = () => {
  const scrollPosition = window.scrollY + 120 // 약간의 오프셋
  
  // 현재 뷰포트에 있는 섹션 탐색
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section
        break
      }
    }
  }
}

// --- 📸 활동 갤러리 로직 (풍성한 8개 고품질 미디어로 확장!) ---
const isGalleryLoading = ref(false)
const galleryItems = ref([])
const selectedMedia = ref(null)

const fallbackGallery = [
  {
    id: 'dummy-1',
    title: '동두천고등학교 강점 발굴단 프로젝트',
    description: '어색했던 신입생들이 재미있는 강점 카드 찾기 게임과 실전 팀 레크리에이션 속에서 마음을 터놓고 서로의 미래를 뜨겁게 격려했던 생생한 교육 현장입니다.',
    media_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop',
    media_type: 'image'
  },
  {
    id: 'dummy-2',
    title: '용인서원중학교 나 사용 설명서 AI 캠프',
    description: '맹목적인 인공지능 복제가 아닌, 필로우지 카드로 나의 개성을 돌아보고 직접 생성형 AI와 대화해 본인만의 소중한 감성 포트폴리오 북을 기획 제작했습니다.',
    media_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    media_type: 'image'
  },
  {
    id: 'dummy-3',
    title: '한페이지 대표 교육 비디오 스케치',
    description: '무대 위의 강연과 무대 아래의 주체적 축제가 함께 어우러지는 한페이지 진로 페스티벌의 생동감 넘치는 행사 현장 하이라이트 영상입니다.',
    media_url: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-high-school-students-laughing-together-41857-large.mp4',
    media_type: 'video'
  },
  {
    id: 'dummy-4',
    title: '서울중앙여고 디지털 프론티어 AI 해커톤',
    description: '어려운 텍스트 코딩 암기 없이 오직 대화형 AI 프롬프트 엔진을 사용해 실생활의 불편을 즉시 해소하는 아이디어 메이커 교육 현장입니다.',
    media_url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop',
    media_type: 'image'
  },
  {
    id: 'dummy-5',
    title: '한페이지 크루 스포트라이트 팀빌딩 쇼츠',
    description: '서로를 배려하며 뜨거운 눈빛과 적극적인 미소로 협력 챌린지를 완수해 나가는 한페이지 청소년들의 리얼 협동 순간입니다.',
    media_url: 'https://assets.mixkit.co/videos/preview/mixkit-holding-hands-of-people-sitting-in-a-circle-42171-large.mp4',
    media_type: 'video'
  },
  {
    id: 'dummy-6',
    title: '경기모바일과학고 노코딩 앱 발명 콘서트',
    description: '자신의 스마트폰으로 실시간 프로토타입 앱을 완성한 학생들이 동료 학생과 교사 앞에서 자신이 구상한 발명 가치를 신나게 시연해 내고 있습니다.',
    media_url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
    media_type: 'image'
  },
  {
    id: 'dummy-7',
    title: '안양예고 회복탄력성 토크 콘서트 강연',
    description: '진로와 학업 스트레스로 고민하는 청소년들을 보듬으며, 긍정 감정과 자존감을 끌어올려 자신만의 스피치 역량을 발견하게 해 준 따뜻한 강연 현장입니다.',
    media_url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=600&auto=format&fit=crop',
    media_type: 'image'
  },
  {
    id: 'dummy-8',
    title: '학기말 창의 인성 캠프 현장 스케치',
    description: '한 학기 동안 열심히 달려온 청소년들이 한자리에 모여, 음악과 함께 열정적으로 팀빌딩 챌린지를 극복해 낸 한페이지의 종합 축제 비디오입니다.',
    media_url: 'https://assets.mixkit.co/videos/preview/mixkit-multiethnic-group-of-young-people-studying-together-41855-large.mp4',
    media_type: 'video'
  }
]

// 갤러리 실시간 데이터 로드
const fetchGallery = async () => {
  isGalleryLoading.value = true
  try {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .order('order_index', { ascending: true })
      .order('created_at', { ascending: false })
      
    if (error) throw error
    
    if (data && data.length > 0) {
      galleryItems.value = data
    } else {
      galleryItems.value = fallbackGallery
    }
  } catch (err) {
    console.error('갤러리 로딩 중 에러:', err.message)
    galleryItems.value = fallbackGallery
  } finally {
    isGalleryLoading.value = false
  }
}

// 미디어 모달 제어
const openMediaModal = (item) => {
  selectedMedia.value = item
}

const closeMediaModal = () => {
  selectedMedia.value = null
}

// --- ✉️ 온라인 문의 신청 폼 제출 로직 ---
const isSubmitting = ref(false)
const inquiryForm = ref({
  name: '',
  school_name: '',
  email: '',
  phone: '',
  program_interest: '',
  content: ''
})

const submitInquiry = async () => {
  isSubmitting.value = true
  try {
    const { error } = await supabase
      .from('inquiries')
      .insert([
        {
          name: inquiryForm.value.name,
          school_name: inquiryForm.value.school_name,
          email: inquiryForm.value.email,
          phone: inquiryForm.value.phone,
          program_interest: inquiryForm.value.program_interest,
          content: inquiryForm.value.content,
          status: '접수'
        }
      ])
      
    if (error) throw error

    // 성공 알림 팝업 (SweetAlert2 - 산뜻한 라이트 테마)
    Swal.fire({
      icon: 'success',
      title: '접수가 성공적으로 완료되었습니다!',
      text: '한페이지 크루가 기재해주신 이메일과 연락처로 24시간 내에 신속히 회신해 드리겠습니다.',
      confirmButtonText: '확인',
      confirmButtonColor: '#2563eb',
      background: '#ffffff',
      color: '#1e293b'
    })

    // 폼 초기화
    inquiryForm.value = {
      name: '',
      school_name: '',
      email: '',
      phone: '',
      program_interest: '',
      content: ''
    }
  } catch (err) {
    console.error('문의 접수 중 에러:', err.message)
    
    Swal.fire({
      icon: 'warning',
      title: '실시간 DB 접수 알림',
      text: '현재 로컬 접속 테스트 중이거나 Supabase 연동 변수가 활성화되지 않았습니다. 대표 번호(010-8503-2130) 또는 이메일로 바로 연락 주시면 즉시 상담해 드립니다!',
      confirmButtonText: '확인',
      confirmButtonColor: '#4f46e5',
      background: '#ffffff',
      color: '#1e293b'
    })
  } finally {
    isSubmitting.value = false
  }
}

// 라이프사이클 훅
onMounted(() => {
  fetchGallery()
  window.addEventListener('scroll', handleScroll)
  // 마운트 시 초기 실행
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Scoped 스타일 */
</style>
