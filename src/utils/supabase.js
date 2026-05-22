/**
 * 🛠️ 한페이지 Supabase 연동 모듈
 * 
 * ------------------------------------------------------------------------
 * 📝 [Supabase 테이블 생성 SQL 스크립트]
 * 아래의 SQL 쿼리를 Supabase 대시보드(Settings -> SQL Editor)에 복사하여 실행해 주세요.
 * ------------------------------------------------------------------------
 * 
 * -- 1. 문의 접수 테이블 (inquiries) 생성
 * create table inquiries (
 *   id uuid default gen_random_uuid() primary key,
 *   name text not null,
 *   school_name text not null,
 *   program_interest text not null,
 *   content text not null,
 *   status text default '접수' not null,
 *   created_at timestamp with time zone default timezone('utc'::text, now()) not null
 * );
 * 
 * -- 2. 활동 갤러리 테이블 (gallery) 생성
 * create table gallery (
 *   id uuid default gen_random_uuid() primary key,
 *   title text not null,
 *   description text,
 *   media_url text not null,
 *   media_type text not null,
 *   order_index integer default 0,
 *   created_at timestamp with time zone default timezone('utc'::text, now()) not null
 * );
 * 
 * ------------------------------------------------------------------------
 * 📁 [Supabase Storage 버킷 생성 가이드]
 * 1. Supabase 대시보드 -> Storage 메뉴로 이동합니다.
 * 2. 'New Bucket' 버튼을 클릭하고 버킷명을 `hanpage-media`로 생성합니다.
 * 3. ⚠️ 중요: 버킷을 'Public' (공개) 상태로 체크해 주셔야 갤러리 이미지와 비디오가 웹사이트에 보입니다.
 * 4. Storage Policies 설정에서 관리자 계정만 업로드/삭제할 수 있도록 업로드 정책을 설정하거나,
 *    테스트용으로 편하게 전체 INSERT, DELETE, SELECT 권한을 Public에 오픈해주셔도 괜찮습니다.
 * ------------------------------------------------------------------------
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// 템플릿 환경 변수 상태인지 모니터링하여 개발자 콘솔 경고
if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes('your-project-id')) {
  console.warn(
    '⚠️ [한페이지 알림] Supabase 접속 정보가 올바르지 않거나 기본 플레이스홀더 값입니다. \n' +
    '프로젝트 루트의 .env 파일에 실제 Supabase URL과 Anon Key를 입력해 주시면 실시간 데이터 연동이 개시됩니다.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
