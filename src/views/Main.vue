<template>
  <div class="min-h-screen bg-brand-dark-dark text-slate-100 flex flex-col selection:bg-brand-pink selection:text-white relative overflow-hidden">
    
    <!-- 🌠 배경 장식용 백그라운드 빛무리 오라 -->
    <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blue/20 blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-pink/15 blur-[150px] pointer-events-none"></div>
    <div class="absolute top-[40%] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none"></div>

    <!-- 🌐 1. 헤더 내비게이션 바 (글래스모피즘) -->
    <header class="sticky top-0 z-50 glass-card transition-smooth w-full border-b border-slate-200/60">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <!-- 로고 -->
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-brand-purple/35 group-hover:scale-105 transition-smooth">한</div>
          <span class="text-xl font-extrabold tracking-wider bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent group-hover:text-brand-pink transition-smooth">한페이지</span>
        </a>

        <!-- 데스크톱 메뉴 -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="#about" class="text-slate-600 hover:text-brand-blue transition-smooth">브랜드 스토리</a>
          <a href="#team" class="text-slate-600 hover:text-brand-blue transition-smooth">강사 소개</a>
          <a href="#programs" class="text-slate-600 hover:text-brand-blue transition-smooth">교육 프로그램</a>
          <a href="#gallery" class="text-slate-600 hover:text-brand-blue transition-smooth">활동 갤러리</a>
          <a href="#contact" class="text-slate-600 hover:text-brand-blue transition-smooth">교육 문의</a>
        </nav>

        <!-- 데스크톱 관리자 버튼 -->
        <div class="hidden md:flex items-center gap-4">
          <router-link to="/admin" class="text-xs px-4 py-2 rounded-lg bg-white/5 border border-slate-200/80 hover:bg-white/10 transition-smooth font-medium text-slate-600 hover:text-brand-blue">
            관리자 모드
          </router-link>
          <a href="#contact" class="px-5 py-2.5 rounded-xl bg-gradient-brand hover:bg-gradient-brand-hover text-white text-sm font-bold shadow-lg shadow-brand-pink/25 hover:shadow-brand-pink/40 hover:-translate-y-0.5 transition-smooth flex items-center gap-1.5">
            <Sparkles class="w-4 h-4" />
            문의하기
          </a>
        </div>

        <!-- 모바일 햄버거 메뉴 버튼 -->
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden p-2 rounded-lg bg-white/5 border border-slate-200/80 text-slate-600 hover:text-brand-blue focus:outline-none">
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- 모바일 서브 메뉴 모달 -->
      <transition name="fade">
        <div v-if="isMobileMenuOpen" class="md:hidden absolute top-20 left-0 w-full glass-card border-b border-slate-200/80 px-6 py-8 flex flex-col gap-6 shadow-2xl z-40">
          <a href="#about" @click="isMobileMenuOpen = false" class="text-lg font-medium text-slate-600 hover:text-brand-blue transition-smooth">브랜드 스토리</a>
          <a href="#team" @click="isMobileMenuOpen = false" class="text-lg font-medium text-slate-600 hover:text-brand-blue transition-smooth">강사 소개</a>
          <a href="#programs" @click="isMobileMenuOpen = false" class="text-lg font-medium text-slate-600 hover:text-brand-blue transition-smooth">교육 프로그램</a>
          <a href="#gallery" @click="isMobileMenuOpen = false" class="text-lg font-medium text-slate-600 hover:text-brand-blue transition-smooth">활동 갤러리</a>
          <a href="#contact" @click="isMobileMenuOpen = false" class="text-lg font-medium text-slate-600 hover:text-brand-blue transition-smooth">교육 문의</a>
          <hr class="border-slate-200/60" />
          <div class="flex flex-col gap-3">
            <router-link to="/admin" @click="isMobileMenuOpen = false" class="py-3 text-center rounded-xl bg-white/5 border border-slate-200/80 text-slate-600 font-medium hover:bg-white/10 transition-smooth">
              관리자 모드
            </router-link>
            <a href="#contact" @click="isMobileMenuOpen = false" class="py-3 text-center rounded-xl bg-gradient-brand text-slate-900 font-bold shadow-lg shadow-brand-pink/20">
              실시간 문의하기
            </a>
          </div>
        </div>
      </transition>
    </header>

    <!-- 🚀 2. 메인 히어로 섹션 (Hero Section) -->
    <section class="relative min-h-[85vh] flex items-center justify-center px-6 py-20 overflow-hidden">
      <div class="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        <!-- 왼쪽 콘텐츠 블록 -->
        <div class="lg:col-span-7 flex flex-col gap-8 text-center lg:text-left">
          
          <!-- 슬로건 뱃지 (넛지) -->
          <div class="inline-flex items-center justify-center lg:justify-start">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-blue/10 border border-brand-blue/20 text-brand-blue shadow-inner">
              <Sparkles class="w-3.5 h-3.5" />
              100% 학생 중심 참여형 교육 솔루션
            </span>
          </div>

          <!-- 메인 타이틀 -->
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            <span class="block text-slate-900 mb-2">텍스트가 아닌</span>
            <span class="block bg-gradient-to-r from-brand-blue to-brand-sky bg-clip-text text-transparent pb-1">경험으로 배우는 진로</span>
          </h1>

          <!-- 서브 카피 -->
          <p class="text-base md:text-lg lg:text-xl text-slate-600 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
            초·중·고등학교 맞춤형 진로 교육 및 디지털 교육 솔루션 전문 기업, <strong class="font-bold text-white">한페이지</strong>. 우리는 이론 중심의 한계를 깨고 학생들이 생생히 몰입하는 순간을 창조합니다.
          </p>

          <!-- 행동 유도 버튼 세트 (CTA - 넛지) -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-4">
            <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-brand hover:bg-gradient-brand-hover text-white text-base font-extrabold shadow-xl shadow-brand-pink/20 hover:shadow-brand-pink/35 hover:-translate-y-1 transition-smooth flex items-center justify-center gap-2">
              교육 문의하기
            </a>
          </div>
        </div>

        <!-- 오른쪽 비주얼 일러스트 / 대시보드 그래픽 -->
        <div class="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none aspect-square group/hero-visual">
          <!-- 🔮 백그라운드 네온 발광 효과 -->
          <div class="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-brand-purple to-brand-pink opacity-20 blur-2xl group-hover/hero-visual:opacity-35 transition-smooth pointer-events-none"></div>
          
          <div class="absolute inset-0 rounded-3xl bg-white/40 border border-slate-200/80 flex flex-col justify-center p-8 shadow-2xl backdrop-blur-md overflow-hidden hover:-translate-y-1 transition-all duration-500">
            <!-- 윈도우 컨트롤 닷 -->
            <div class="absolute top-4 left-4 flex gap-1.5">
              <span class="w-3 h-3 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.4)]"></span>
              <span class="w-3 h-3 rounded-full bg-yellow-500/60 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></span>
              <span class="w-3 h-3 rounded-full bg-green-500/60 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
            </div>
            
            <div class="absolute top-4 right-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Live Status</div>
            
            <!-- 다이나믹 통계 카드 리스트 -->
            <div class="flex flex-col gap-5 w-full mt-4">
              <!-- 만족도 카드 -->
              <div class="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-slate-200/60 hover:border-brand-pink/20 hover:bg-white/[0.06] transition-smooth shadow-inner">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-sky/5 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(37,99,235,0.06)]">💡</div>
                <div class="flex-grow">
                  <h4 class="text-xs font-bold text-slate-400">체험 만족도 평균</h4>
                  <div class="flex items-baseline gap-2 mt-1">
                    <p class="text-2xl font-black bg-gradient-to-r from-brand-pink-light to-brand-pink bg-clip-text text-transparent">98.7%</p>
                    <span class="text-[10px] text-emerald-400 font-bold flex items-center">▲ 1.2% (전년비)</span>
                  </div>
                </div>
              </div>
              
              <!-- 참여 학교 수 카드 -->
              <div class="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-slate-200/60 hover:border-brand-indigo/20 hover:bg-slate-100/50 transition-smooth shadow-inner">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-indigo/10 to-brand-blue/5 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(79,70,229,0.06)]">🏫</div>
                <div class="flex-grow">
                  <h4 class="text-xs font-bold text-slate-400">누적 참여 학교 수</h4>
                  <div class="flex items-baseline gap-2 mt-1">
                    <p class="text-2xl font-black text-white">320개교 돌파</p>
                    <span class="text-[10px] text-brand-blue font-bold">전국 초·중·고 학사 연동</span>
                  </div>
                </div>
              </div>
              
              <!-- 레크리에이션 카드 -->
              <div class="flex items-center gap-4 p-4.5 rounded-2xl bg-white/[0.03] border border-slate-200/60 hover:border-emerald-500/20 hover:bg-slate-100/50 transition-smooth shadow-inner">
                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/5 flex items-center justify-center text-xl shadow-[0_0_15px_rgba(16,185,129,0.06)]">🔥</div>
                <div class="flex-grow">
                  <h4 class="text-xs font-bold text-slate-400">현장형 레크리에이션 구성</h4>
                  <p class="text-xs font-semibold text-slate-600 mt-1">웃음과 소통 중심 몰입도 100% 보장</p>
                </div>
              </div>
            </div>
            
            <!-- 장식 데코용 흐릿한 플로팅 네온 링 -->
            <div class="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-brand-pink/20 blur-xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- 부드러운 스크롤 지시계 (넛지) -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" class="text-slate-400 hover:text-brand-blue transition-smooth flex flex-col items-center text-xs gap-1 font-semibold">
          마우스 아래로
          <span class="text-lg">↓</span>
        </a>
      </div>
    </section>

    <!-- 📖 3. 브랜드 스토리 (About Us) -->
    <section id="about" class="py-24 px-6 relative bg-white/[0.01] border-t border-b border-slate-200/60">
      <div class="max-w-6xl mx-auto flex flex-col gap-16">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-pink uppercase tracking-widest">About Us</span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">왜 한페이지 교육이어야 할까요?</h2>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 핵심 가치 2단 레이아웃 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          <!-- 카드 1: 교육 철학 -->
          <div class="glass-card p-10 rounded-3xl glass-card-hover flex flex-col gap-6">
            <div class="w-14 h-14 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue">
              <Compass class="w-7 h-7" />
            </div>
            <h3 class="text-2xl font-bold text-white">이론과 텍스트를 넘어선 실전형 체험 교육</h3>
            <p class="text-slate-600 font-light leading-relaxed">
              기존의 조용하고 졸린 강의식 진로 교육에서 완전히 탈피합니다. 학생들이 능동적으로 소통하고, 움직이며, 직접 기획하고 실행하는 <strong>100% 몰입형 참여 중심 프로그램</strong>을 지향합니다.
            </p>
          </div>

          <!-- 카드 2: 핵심 가치 -->
          <div class="glass-card p-10 rounded-3xl glass-card-hover flex flex-col gap-6">
            <div class="w-14 h-14 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink">
              <Award class="w-7 h-7" />
            </div>
            <h3 class="text-2xl font-bold text-white">학생 주도성 강화 및 감성 EQ 역량 발견</h3>
            <p class="text-slate-600 font-light leading-relaxed">
              주변의 기대와 막연한 미래 앞에서 불안한 중·고등학생들의 내면을 케어합니다. 자기 이해를 기반으로 한 '진로 설계'와 급변하는 디지털 시대에 꼭 필요한 '디지털 창의 협동 역량'을 스스로 발견해 냅니다.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 👥 4. 브랜드 사람들 (Our Team - 캐릭터 연동) -->
    <section id="team" class="py-24 px-6">
      <div class="max-w-6xl mx-auto flex flex-col gap-16">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-blue uppercase tracking-widest">Our Team</span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">한페이지를 만드는 사람들</h2>
          <p class="text-slate-400 font-light max-w-xl mx-auto text-sm md:text-base">
            형식적인 교육이 아닌, 뜨거운 열정과 위트로 청소년들의 마음을 움직이는 최고의 전문가 크루입니다.
          </p>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 팀원 카드 리스트 (3인 구성 및 실제 캐릭터 매칭) -->
        <div class="flex flex-col gap-12">
          
          <!-- 대표 강사 서윤호 (와이드 카드 레이아웃) -->
          <div class="glass-card p-8 md:p-12 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden group">
            <!-- 배경 장식 효과 -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-blue/20 transition-smooth"></div>
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              <!-- 왼쪽: 대표 이미지 & 철학적 슬로건 -->
              <div class="lg:col-span-5 flex flex-col items-center text-center gap-6">
                <div class="relative">
                  <div class="absolute inset-0 bg-gradient-brand rounded-full blur-md opacity-30 group-hover:opacity-50 transition-smooth pointer-events-none"></div>
                  <div class="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-slate-200/80 bg-slate-50 shadow-2xl overflow-hidden flex items-center justify-center relative z-10 transition-smooth group-hover:border-brand-blue/50">
                    <img src="/assets/images/characters/ceo.png" alt="서윤호 대표" class="w-full h-full object-cover transform hover:scale-105 transition-smooth" />
                  </div>
                </div>
                
                <div class="flex flex-col gap-1">
                  <span class="text-xs font-extrabold tracking-wider text-brand-blue bg-brand-blue/10 border border-brand-blue/20 px-4 py-1.5 rounded-full w-max mx-auto uppercase">Representative Instructor</span>
                  <h3 class="text-2xl md:text-3xl font-black text-white mt-2">서윤호 대표</h3>
                </div>

                <!-- 질문 슬로건 -->
                <div class="w-full py-4 px-5 rounded-2xl bg-white/5 border border-slate-200/60 flex flex-col gap-2 relative">
                  <span class="absolute top-2 left-3 text-3xl text-brand-blue/20 font-serif leading-none">“</span>
                  <p class="text-slate-700 text-sm font-semibold italic leading-relaxed mt-2">
                    "전하고자 하는 의미가 잘 전달되면 좋은 강사일까?"
                  </p>
                  <p class="text-slate-700 text-sm font-semibold italic leading-relaxed">
                    "재미있게만 하면 좋은 강사일까?"
                  </p>
                  <span class="absolute bottom-1 right-3 text-3xl text-brand-blue/20 font-serif leading-none">”</span>
                </div>
              </div>
              
              <!-- 오른쪽: 약력 그리드 & 진정성 있는 고민/인사말 -->
              <div class="lg:col-span-7 flex flex-col gap-8 text-left">
                
                <!-- 이력 소개 -->
                <div>
                  <h4 class="text-base font-bold text-white mb-4 flex items-center gap-2 border-b border-slate-200/60 pb-2">
                    <Award class="w-5 h-5 text-brand-pink" />
                    프로필 및 이력 소개
                  </h4>
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <!-- 現 이력 -->
                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium">전문사회 업체 <strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[스테이지온]</strong> 대표</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[청소년 레크리에이션]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[자기주도 학습]</strong> 컨설팅 및 지도자</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[나를 알리는 스피치]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[회복탄력성 · 자존감향상]</strong> 강연가</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[동기부여]</strong> 강연가</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[진로·인성·동기부여 콘서트]</strong> 기획/강연</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[디지털 윤리]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[기업 단합 팀빌딩]</strong> 강사</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-brand-blue/5 border border-brand-purple/10 hover:border-brand-purple/30 hover:bg-brand-blue/10 text-slate-700 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover/chip:scale-105 transition-smooth text-[10px] font-black shrink-0">現</div>
                      <span class="text-xs md:text-sm font-medium"><strong class="text-white group-hover/chip:text-brand-blue transition-smooth">[비즈니스 역량 강화]</strong> 강사</span>
                    </div>

                    <!-- 前 이력 -->
                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-slate-200/60 hover:border-white/20 hover:bg-white/10 text-slate-400 hover:text-slate-600 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-white/10 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover/chip:scale-105 transition-smooth text-[10px] font-bold shrink-0">前</div>
                      <span class="text-xs md:text-sm font-medium">공연예술단 <strong class="text-slate-700 group-hover/chip:text-slate-100 transition-smooth">[심술]</strong> 단장</span>
                    </div>

                    <div class="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-slate-200/60 hover:border-white/20 hover:bg-white/10 text-slate-400 hover:text-slate-600 transition-smooth group/chip">
                      <div class="w-6 h-6 rounded-lg bg-white/10 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover/chip:scale-105 transition-smooth text-[10px] font-bold shrink-0">前</div>
                      <span class="text-xs md:text-sm font-medium">청소년센터 연기지도 강사</span>
                    </div>
                  </div>
                </div>

                <!-- 인사말 & 고민글 -->
                <div class="flex flex-col gap-4 border-t border-slate-200/60 pt-6">
                  <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</h4>
                  <div class="text-slate-600 text-sm md:text-base font-light leading-relaxed flex flex-col gap-4">
                    <p>
                      안녕하세요! 수년부터 초, 중, 고등학교 뿐만 아니라 대학교에서 강의를 해오며 좋은 강사와 강의에 대해 깊이 고민해왔습니다. 아직도 고민의 '정답'은 찾지 못했지만 계속해서 묻고 또 물어가며 학생들에게 조금 더 좋은 강사가 되기 위해 힘쓰고 있습니다.
                    </p>
                    <p class="border-l-2 border-brand-pink pl-4 italic text-slate-700 bg-white/[0.02] py-3 pr-3 rounded-r-xl">
                      적어도 학생들의 기억에 남는 한 순간이 될 수 있다면, 시간이 흐른 후에도 그 기억이 소중히 여겨질 수 있다면 그것이 조금이나마 좋은 강의라고 생각하며 학생들과의 만남을 소중히 여기고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 매니저 2인 그리드 (대칭 구조) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- 박주연 매니저 -->
            <div class="glass-card p-8 md:p-10 rounded-3xl glass-card-hover flex flex-col gap-6 relative group overflow-hidden">
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-brand-pink/10 rounded-full blur-2xl pointer-events-none group-hover:bg-brand-pink/20 transition-smooth"></div>
              
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <!-- 캐릭터 이미지 -->
                <div class="relative shrink-0">
                  <div class="absolute inset-0 bg-brand-pink rounded-full blur-md opacity-20 group-hover:opacity-40 transition-smooth pointer-events-none"></div>
                  <div class="w-32 h-32 rounded-full border-4 border-slate-200/80 bg-slate-50 shadow-xl overflow-hidden flex items-center justify-center relative z-10 transition-smooth group-hover:border-brand-indigo/50">
                    <img src="/assets/images/characters/manager1.png" alt="박주연 매니저" class="w-full h-full object-cover transform hover:scale-105 transition-smooth" />
                  </div>
                </div>
                
                <!-- 기본 정보 -->
                <div class="flex flex-col gap-2 text-center sm:text-left">
                  <span class="text-xs font-bold text-brand-pink bg-brand-pink/10 border border-brand-pink/20 px-3 py-1 rounded-full w-max mx-auto sm:mx-0">Program Manager</span>
                  <h3 class="text-2xl font-bold text-white">박주연 매니저</h3>
                  <div class="flex items-start gap-1.5 text-xs text-slate-400 mt-1 justify-center sm:justify-start">
                    <Sparkles class="w-3.5 h-3.5 text-brand-pink shrink-0 mt-0.5" />
                    <span>現 한페이지 교육 프로그램 운영 및 강의 매니저</span>
                  </div>
                </div>
              </div>

              <!-- 슬로건 멘트 -->
              <div class="border-t border-slate-200/60 pt-6 flex-grow flex flex-col justify-center">
                <p class="text-slate-600 text-sm md:text-base font-medium italic leading-relaxed text-center sm:text-left relative pl-4 border-l-2 border-brand-pink/40 bg-white/[0.01] py-3 pr-3 rounded-r-xl">
                  "사소한 일상 속에서도 즐거움을 찾아내고, 긍정적인 에너지로 학생들과 같은 눈높이에서 트렌디하게 소통하는, 가능성을 발견하고 성장을 응원하는 진로 가이드"
                </p>
              </div>
            </div>

            <!-- 이승규 매니저 -->
            <div class="glass-card p-8 md:p-10 rounded-3xl glass-card-hover flex flex-col gap-6 relative group overflow-hidden">
              <div class="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-indigo-500/20 transition-smooth"></div>
              
              <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <!-- 캐릭터 이미지 -->
                <div class="relative shrink-0">
                  <div class="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-smooth pointer-events-none"></div>
                  <div class="w-32 h-32 rounded-full border-4 border-slate-200/80 bg-slate-50 shadow-xl overflow-hidden flex items-center justify-center relative z-10 transition-smooth group-hover:border-brand-blue/50">
                    <img src="/assets/images/characters/manager2.png" alt="이승규 매니저" class="w-full h-full object-cover transform hover:scale-105 transition-smooth" />
                  </div>
                </div>
                
                <!-- 기본 정보 -->
                <div class="flex flex-col gap-2 text-center sm:text-left">
                  <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full w-max mx-auto sm:mx-0">Program Manager</span>
                  <h3 class="text-2xl font-bold text-white">이승규 매니저</h3>
                  <div class="flex items-start gap-1.5 text-xs text-slate-400 mt-1 justify-center sm:justify-start">
                    <Sparkles class="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>現 한페이지 교육 프로그램 운영 및 강의 매니저</span>
                  </div>
                </div>
              </div>

              <!-- 슬로건 멘트 -->
              <div class="border-t border-slate-200/60 pt-6 flex-grow flex flex-col justify-center">
                <p class="text-slate-600 text-sm md:text-base font-medium italic leading-relaxed text-center sm:text-left relative pl-4 border-l-2 border-indigo-500/40 bg-white/[0.01] py-3 pr-3 rounded-r-xl">
                  "지루하지 않지만 가볍지도 않게 즐거운 대화 속에서 아이들 스스로 자신의 가능성을 발견하도록 돕는 강사! 꿈은 '내가 좋아하는 것'을 알아가는 작은 순간에서 시작됨을 알려주는 그 시작을 함께하는 교육을 함께하는 진로 가이드"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 🎨 5. 핵심 프로그램 소개 (Our Solutions) -->
    <section id="programs" class="py-24 px-6 bg-white/60 border-t border-b border-slate-200/60 relative">
      <div class="max-w-6xl mx-auto flex flex-col gap-12">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-pink uppercase tracking-widest">Our Solutions</span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">성장을 위한 핵심 교육 콘텐츠</h2>
          <p class="text-slate-400 font-light max-w-xl mx-auto text-sm md:text-base">
            진로 콘텐츠와 디지털 콘텐츠로 분리되어 학교 학사일정 및 요구에 최적화된 선택을 지원합니다.
          </p>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 탭 버튼 세트 (넛지) -->
        <div class="flex justify-center mt-4">
          <div class="inline-flex p-1.5 rounded-2xl bg-slate-50 border border-slate-200/80 glass-card">
            <button 
              @click="activeTab = 'career'"
              :class="activeTab === 'career' ? 'bg-gradient-brand text-white shadow-lg' : 'text-slate-400 hover:text-brand-blue'"
              class="px-6 py-3 rounded-xl font-bold text-sm transition-smooth flex items-center gap-2"
            >
              🎨 진로 콘텐츠
            </button>
            <button 
              @click="activeTab = 'digital'"
              :class="activeTab === 'digital' ? 'bg-gradient-brand text-white shadow-lg' : 'text-slate-400 hover:text-brand-blue'"
              class="px-6 py-3 rounded-xl font-bold text-sm transition-smooth flex items-center gap-2"
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
            <div class="glass-card p-8 rounded-3xl glass-card-hover flex flex-col justify-between gap-8 h-full border-t-2 border-t-brand-purple">
              <div class="flex flex-col gap-5">
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue w-max">추천: 신입생, 자유학기제</span>
                <div class="text-4xl font-extrabold text-brand-blue">01</div>
                <h3 class="text-xl font-bold text-white">강점 발굴단</h3>
                <p class="text-slate-600 font-light text-sm leading-relaxed">
                  모두가 참여하여 웃고 떠들며 어색함을 말끔히 깨부수고, 재미있는 게임 속에서 각자의 고유한 강점과 팀워크를 자연스럽게 발견하는 협력 중심 팀빌딩 프로그램입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 마인드 부스터 -->
            <div class="glass-card p-8 rounded-3xl glass-card-hover flex flex-col justify-between gap-8 h-full border-t-2 border-t-brand-pink">
              <div class="flex flex-col gap-5">
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink w-max">추천: 학년 전체 행사, 힐링</span>
                <div class="text-4xl font-extrabold text-brand-pink">02</div>
                <h3 class="text-xl font-bold text-white">마인드 부스터</h3>
                <p class="text-slate-600 font-light text-sm leading-relaxed">
                  스토리텔링과 역동적인 미디어 공연이 긴밀하게 결합되어 학생들의 눈과 귀, 그리고 닫힌 마음이 스르르 열리는 신개념 양방향 토크 콘서트 형식의 감성 교육입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-pink hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 우리의 캔버스 -->
            <div class="glass-card p-8 rounded-3xl glass-card-hover flex flex-col justify-between gap-8 h-full border-t-2 border-t-indigo-500">
              <div class="flex flex-col gap-5">
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 w-max">추천: 학교 축제, 전일제</span>
                <div class="text-4xl font-extrabold text-indigo-400">03</div>
                <h3 class="text-xl font-bold text-white">우리의 캔버스</h3>
                <p class="text-slate-600 font-light text-sm leading-relaxed">
                  무대 아래(기획), 무대 위(운영), 무대 밖(현장 체험)의 체계적인 3단계 프로세스를 기반으로 이루어지며, 청소년들 스스로가 처음부터 끝까지 직접 주도하고 생생하게 실행해 내는 대규모 진로 페스티벌입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>
          </div>

          <!-- 디지털 콘텐츠 3종 -->
          <div v-else key="digital" class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            
            <!-- 나의 강점 스캐너 -->
            <div class="glass-card p-8 rounded-3xl glass-card-hover flex flex-col justify-between gap-8 h-full border-t-2 border-t-brand-purple">
              <div class="flex flex-col gap-5">
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue w-max">데이터 진단 / 학급 보고서</span>
                <div class="text-4xl font-extrabold text-brand-blue">01</div>
                <h3 class="text-xl font-bold text-white">나의 강점 스캐너</h3>
                <p class="text-slate-600 font-light text-sm leading-relaxed">
                  과학적 데이터 기반 진단 설문으로 개개인의 특화 강점을 분석하며, 담당 교사에게는 학급/학년 전체 성향 지표를 일목요연하게 시각화하여 전달하는 스마트 진단 분석 솔루션입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 나 사용 설명서 -->
            <div class="glass-card p-8 rounded-3xl glass-card-hover flex flex-col justify-between gap-8 h-full border-t-2 border-t-brand-pink">
              <div class="flex flex-col gap-5">
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink w-max">AI 활용 / 포트폴리오</span>
                <div class="text-4xl font-extrabold text-brand-pink">02</div>
                <h3 class="text-xl font-bold text-white">나 사용 설명서</h3>
                <p class="text-slate-600 font-light text-sm leading-relaxed">
                  필터 없는 AI 기술의 의존성과 위험성을 올바로 직시하고, 전용 '필로우지 키트' 내면 성찰 활동을 거쳐 주체적으로 생성형 AI를 활용한 자신만의 비주얼 포트폴리오 책자를 제작합니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-brand-pink hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>

            <!-- 일상의 발명가 -->
            <div class="glass-card p-8 rounded-3xl glass-card-hover flex flex-col justify-between gap-8 h-full border-t-2 border-t-indigo-500">
              <div class="flex flex-col gap-5">
                <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 w-max">노코딩 AI 코딩 / 실생활 해결</span>
                <div class="text-4xl font-extrabold text-indigo-400">03</div>
                <h3 class="text-xl font-bold text-white">일상의 발명가</h3>
                <p class="text-slate-600 font-light text-sm leading-relaxed">
                  어려운 코딩 문법 암기 없이 오직 대화형 AI 프롬프트 엔진을 사용해 나의 기발한 아이디어를 현장에서 프로토타입 앱으로 구현하며, 실생활의 불편을 즉시 해소하는 아이디어 메이커 교육입니다.
                </p>
              </div>
              <a href="#contact" class="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-brand-blue transition-smooth">
                상세 문의하기 <ChevronRight class="w-4 h-4" />
              </a>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- 📸 6. 활동 갤러리 및 성과 (Social Proof) -->
    <section id="gallery" class="py-24 px-6 relative">
      <div class="max-w-6xl mx-auto flex flex-col gap-16">
        
        <!-- 섹션 타이틀 -->
        <div class="text-center flex flex-col gap-4">
          <span class="text-sm font-bold text-brand-blue uppercase tracking-widest">Social Proof</span>
          <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">생생한 현장 갤러리</h2>
          <p class="text-slate-400 font-light max-w-xl mx-auto text-sm md:text-base">
            참여 학생들이 직접 몰입하고, 창의적으로 소통했던 한페이지 교육 솔루션의 생동감 넘치는 순간들입니다.
          </p>
          <div class="w-12 h-1 bg-gradient-brand mx-auto rounded-full mt-2"></div>
        </div>

        <!-- 로딩 표시자 -->
        <div v-if="isGalleryLoading" class="flex flex-col items-center justify-center py-20 gap-4">
          <div class="w-10 h-10 border-4 border-brand-blue/20 border-t-brand-purple rounded-full animate-spin"></div>
          <p class="text-slate-400 text-sm">실시간 현장 갤러리 불러오는 중...</p>
        </div>

        <!-- 갤러리 리스트 렌더링 (그리드) -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="item in galleryItems" 
            :key="item.id"
            @click="openMediaModal(item)"
            class="glass-card rounded-2xl overflow-hidden glass-card-hover cursor-pointer group flex flex-col h-full border border-slate-200/60 shadow-lg shadow-black/30"
          >
            <!-- 썸네일 컨테이너 -->
            <div class="aspect-video w-full bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-200/60">
              
              <!-- 이미지 타입 -->
              <img 
                v-if="item.media_type === 'image'" 
                :src="item.media_url" 
                :alt="item.title"
                class="w-full h-full object-cover transition-smooth group-hover:scale-105"
                loading="lazy"
              />

              <!-- 비디오 타입 (플레이 마커 제공) -->
              <div v-else class="relative w-full h-full">
                <!-- 비디오 자체 스케치 썸네일 느낌을 주기 위해 어두운 오버레이 처리 -->
                <div class="absolute inset-0 bg-brand-dark-dark/40 group-hover:bg-brand-dark-dark/20 transition-smooth z-10 flex items-center justify-center">
                  <div class="w-14 h-14 rounded-full bg-brand-pink flex items-center justify-center text-white shadow-xl shadow-brand-pink/40 group-hover:scale-110 transition-smooth">
                    <Play class="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
                <!-- 이미지 URL이 비디오 썸네일 대신 있을 경우 표시용 또는 디폴트 딥 다크 배경 -->
                <div class="w-full h-full bg-gradient-to-tr from-brand-purple/30 to-brand-pink/30 flex items-center justify-center">
                  <span class="text-sm font-semibold tracking-wide text-white">현장 동영상 클릭 재생</span>
                </div>
              </div>
            </div>

            <!-- 미디어 세부 설명 -->
            <div class="p-6 flex flex-col gap-2">
              <h4 class="text-base font-bold text-white group-hover:text-brand-blue transition-smooth line-clamp-1">
                {{ item.title }}
              </h4>
              <p v-if="item.description" class="text-xs font-light text-slate-400 line-clamp-2 leading-relaxed">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 📽️ 7. 비디오/이미지 팝업 모달창 (글래스모피즘 오버레이) -->
    <transition name="fade">
      <div v-if="selectedMedia" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-dark-dark/90 backdrop-blur-md">
        
        <!-- 바깥 클릭 시 닫기 -->
        <div class="absolute inset-0 cursor-default" @click="closeMediaModal"></div>

        <!-- 모달 컨텐츠 윈도우 -->
        <div class="glass-card rounded-3xl w-full max-w-4xl border border-slate-200/80 overflow-hidden shadow-2xl relative z-10 flex flex-col">
          
          <!-- 헤더 및 닫기 버튼 -->
          <div class="px-6 py-4 flex items-center justify-between border-b border-slate-200/60">
            <h3 class="font-bold text-white text-base md:text-lg">{{ selectedMedia.title }}</h3>
            <button @click="closeMediaModal" class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-600 hover:text-brand-blue transition-smooth">
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- 미디어 뷰어 영역 -->
          <div class="bg-black/90 aspect-video flex items-center justify-center p-2">
            
            <!-- 이미지 렌더링 -->
            <img 
              v-if="selectedMedia.media_type === 'image'" 
              :src="selectedMedia.media_url" 
              :alt="selectedMedia.title"
              class="max-w-full max-h-[70vh] object-contain"
            />

            <!-- 비디오 렌더링 (HTML5) -->
            <video 
              v-else 
              :src="selectedMedia.media_url" 
              controls 
              autoplay
              class="w-full h-full object-contain"
            ></video>
          </div>

          <!-- 미디어 세부 묘사 -->
          <div v-if="selectedMedia.description" class="p-6 bg-slate-50/60 text-slate-600 text-sm font-light leading-relaxed border-t border-slate-200/60">
            {{ selectedMedia.description }}
          </div>
        </div>
      </div>
    </transition>

    <!-- 📞 8. 문의하기 및 푸터 (Contact Us) -->
    <section id="contact" class="py-24 px-6 relative bg-white/[0.01] border-t border-slate-200/60 flex-grow">
      <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        <!-- 왼쪽: 기업 및 담당자 안내 -->
        <div class="lg:col-span-5 flex flex-col gap-10">
          <div class="flex flex-col gap-4">
            <span class="text-sm font-bold text-brand-pink uppercase tracking-widest">Contact Us</span>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">성장의 첫 페이지를<br />한페이지와 함께</h2>
            <div class="w-12 h-1 bg-gradient-brand rounded-full mt-2"></div>
          </div>

          <p class="text-slate-600 font-light leading-relaxed text-sm md:text-base">
            학교 학사 일정, 교육 대상 인원, 선호 테마에 최적화된 맞춤 커리큘럼을 무상 설계해 드립니다. 지금 가볍게 문의를 남겨주시면, 담당 강사가 24시간 내 친절한 제안서와 안내를 드립니다.
          </p>

          <!-- 넛지형 담당자 세부 정보 카드 -->
          <div class="glass-card p-6 rounded-2xl flex flex-col gap-4 border border-slate-200/60">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-slate-200/80 flex items-center justify-center">
                <img src="/assets/images/characters/ceo.png" alt="서윤호 대표강사" class="w-full h-full object-cover" />
              </div>
              <div>
                <h4 class="font-bold text-white text-sm">서윤호 대표강사</h4>
                <p class="text-xs text-brand-blue font-medium">초·중·고 교육 협력 파트 총괄</p>
              </div>
            </div>

            <hr class="border-slate-200/60" />

            <!-- 원클릭 통화 연결 넛지 -->
            <div class="flex flex-col gap-3 text-xs md:text-sm text-slate-600">
              <a href="tel:010-8503-2130" class="flex items-center gap-2.5 hover:text-brand-pink transition-smooth group font-semibold">
                <div class="w-8 h-8 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink group-hover:scale-105 transition-smooth">
                  <Phone class="w-4 h-4" />
                </div>
                전화 연결: 010-8503-2130
              </a>
              <a href="mailto:hanpage1@naver.com" class="flex items-center gap-2.5 hover:text-brand-blue transition-smooth group font-semibold">
                <div class="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue group-hover:scale-105 transition-smooth">
                  <Mail class="w-4 h-4" />
                </div>
                이메일: hanpage1@naver.com
              </a>
            </div>
          </div>
        </div>

        <!-- 오른쪽: 실시간 문의 접수 폼 (넛지 및 Supabase 연동) -->
        <div class="lg:col-span-7 w-full">
          <div class="glass-card p-8 md:p-10 rounded-3xl border border-slate-200/80 shadow-2xl relative overflow-hidden">
            
            <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <CheckCircle class="w-5.5 h-5.5 text-brand-pink" />
              신속 교육 프로그램 신청 폼
            </h3>

            <form @submit.prevent="submitInquiry" class="flex flex-col gap-6">
              
              <!-- 성명 & 학교명 (반응형 2열 그리드) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- 담당자 성명 -->
                <div class="flex flex-col gap-2">
                  <label for="name" class="text-xs font-bold text-slate-400">신청자 성명 / 담당 교사명 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="inquiryForm.name"
                    required
                    placeholder="예: 홍길동 교사"
                    class="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple-light focus:ring-1 focus:ring-brand-purple-light focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-sm transition-smooth"
                  />
                </div>

                <!-- 학교 및 기관명 -->
                <div class="flex flex-col gap-2">
                  <label for="school" class="text-xs font-bold text-slate-400">학교명 / 교육 기관명 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="text" 
                    id="school" 
                    v-model="inquiryForm.school_name"
                    required
                    placeholder="예: 한국고등학교"
                    class="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple-light focus:ring-1 focus:ring-brand-purple-light focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-sm transition-smooth"
                  />
                </div>
              </div>

              <!-- 연락처 & 이메일 주소 (반응형 2열 그리드) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- 연락처 -->
                <div class="flex flex-col gap-2">
                  <label for="phone" class="text-xs font-bold text-slate-400">연락처 번호 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="inquiryForm.phone"
                    required
                    placeholder="예: 010-1234-5678"
                    class="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple-light focus:ring-1 focus:ring-brand-purple-light focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-sm transition-smooth"
                  />
                </div>

                <!-- 이메일 주소 -->
                <div class="flex flex-col gap-2">
                  <label for="email" class="text-xs font-bold text-slate-400">이메일 주소 <span class="text-brand-pink">*</span></label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="inquiryForm.email"
                    required
                    placeholder="예: teacher@school.hs.kr"
                    class="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple-light focus:ring-1 focus:ring-brand-purple-light focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-sm transition-smooth"
                  />
                </div>
              </div>

              <!-- 관심 교육 카테고리 -->
              <div class="flex flex-col gap-2">
                <label for="program" class="text-xs font-bold text-slate-400">관심 프로그램 선택 <span class="text-brand-pink">*</span></label>
                <select 
                  id="program" 
                  v-model="inquiryForm.program_interest"
                  required
                  class="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200/80 text-slate-600 focus:outline-none focus:border-brand-purple-light focus:ring-1 focus:ring-brand-purple-light focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-sm transition-smooth"
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
                <label for="content" class="text-xs font-bold text-slate-400">문의 사항 상세 기재 <span class="text-brand-pink">*</span></label>
                <textarea 
                  id="content" 
                  v-model="inquiryForm.content"
                  required
                  rows="4"
                  placeholder="예: 희망 교육 대상 학년, 예상 참여 학생수, 교육 희망 날짜 등을 적어주시면 상세 맞춤 견적이 수립됩니다."
                  class="w-full px-4 py-3.5 rounded-xl bg-slate-50/60 border border-slate-200/80 text-white placeholder-slate-500 focus:outline-none focus:border-brand-purple-light focus:ring-1 focus:ring-brand-purple-light focus:shadow-[0_0_15px_rgba(168,85,247,0.3)] text-sm transition-smooth resize-none"
                ></textarea>
              </div>

              <!-- 동의성 체크박스 넛지 -->
              <div class="flex items-start gap-2.5 mt-1">
                <input 
                  type="checkbox" 
                  id="agree" 
                  required
                  checked
                  class="mt-1 w-4 h-4 rounded text-brand-pink bg-slate-50 border-slate-200/80 focus:ring-brand-pink cursor-pointer"
                />
                <label for="agree" class="text-xs text-slate-400 leading-normal cursor-pointer select-none">
                  개인정보 수집 및 문의 접수를 위한 목적에 동의합니다. (한페이지는 개인정보를 안전하게 보호하며 마케팅 목적으로 활용하지 않습니다.)
                </label>
              </div>

              <!-- 서브밋 버튼 -->
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full py-4 mt-2 rounded-2xl bg-gradient-brand hover:bg-gradient-brand-hover text-white text-base font-extrabold shadow-xl shadow-brand-pink/20 hover:shadow-brand-pink/35 transition-smooth flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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

    <!-- 🏷️ 9. 리얼 푸터 정보 영역 -->
    <footer class="w-full py-8 px-6 bg-white/80 border-t border-slate-200/60 text-center text-xs text-slate-400 font-medium">
      <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 한페이지(Hanpage). All rights reserved.</p>
        <div class="flex items-center gap-4 text-slate-400">
          <router-link to="/admin" class="hover:text-brand-blue transition-smooth">관리자 관리 포털</router-link>
          <span>|</span>
          <span>대표 강사 서윤호</span>
          <span>|</span>
          <span>연락처 010-8503-2130</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
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

// --- 📸 활동 갤러리 로직 ---
const isGalleryLoading = ref(false)
const galleryItems = ref([])
const selectedMedia = ref(null)

// 💡 갤러리 안전장치용 고품질 더미 데이터 (Supabase 연결이 아직 안 되었거나 비어 있을 때 렌더링)
const fallbackGallery = [
  {
    id: 'dummy-1',
    title: '동두천고등학교 강점 발굴단 프로젝트',
    description: '어색했던 신입생들이 레크리에이션 게임 속에서 자신의 강점 카드를 찾고 서로의 비전을 뜨겁게 격려했던 생생한 진로 팀빌딩 현장입니다.',
    media_url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop',
    media_type: 'image'
  },
  {
    id: 'dummy-2',
    title: '용인서원중학교 나 사용 설명서 AI 캠프',
    description: '무조건적인 생성형 AI 복사가 아닌, 필로우지 카드로 나의 개성을 돌아보고 직접 AI와 대화해 본인만의 감성 포트폴리오 북을 제작했던 순간입니다.',
    media_url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
    media_type: 'image'
  },
  {
    id: 'dummy-3',
    title: '한페이지 대표 교육 비디오 스케치',
    description: '무대 위의 강연과 무대 아래의 주체적 축제가 함께 어우러지는 한페이지 진로 페스티벌의 생동감 넘치는 행사 현장 하이라이트 영상입니다.',
    media_url: 'https://assets.mixkit.co/videos/preview/mixkit-group-of-high-school-students-laughing-together-41857-large.mp4',
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
      // 데이터가 없으면 화려한 더미데이터로 대체
      galleryItems.value = fallbackGallery
    }
  } catch (err) {
    console.error('갤러리 로딩 중 에러:', err.message)
    // 에러 발생 시에도 화면이 깨지지 않게 더미데이터 탑재
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

    // 성공 알림 팝업 (SweetAlert2)
    Swal.fire({
      icon: 'success',
      title: '접수가 성공적으로 완료되었습니다!',
      text: '한페이지 크루가 기재해주신 이메일과 연락처로 24시간 내에 신속히 회신해 드리겠습니다.',
      confirmButtonText: '확인',
      confirmButtonColor: '#a855f7',
      background: '#0f172a',
      color: '#f8fafc'
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
    
    // 에러 시 사용자 친절 안내 및 예외 처리
    Swal.fire({
      icon: 'warning',
      title: '실시간 DB 접수 알림',
      text: '현재 로컬 접속 테스트 중이거나 Supabase 연동 변수가 활성화되지 않았습니다. 대표 번호(010-8503-2130) 또는 이메일로 바로 연락 주시면 즉시 상담해 드립니다!',
      confirmButtonText: '확인',
      confirmButtonColor: '#ec4899',
      background: '#0f172a',
      color: '#f8fafc'
    })
  } finally {
    isSubmitting.value = false
  }
}

// 라이프사이클 훅
onMounted(() => {
  fetchGallery()
})
</script>

<style scoped>
/* Scoped 스타일 */
</style>
