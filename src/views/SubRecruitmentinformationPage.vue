<template>
  <div class="recruit-page">
    <!-- ヘッダー -->
    <section class="rc-hero">
      <div class="inner rc-hero-inner">
        <div class="rc-hero-text">
          <p class="rc-eyebrow">Recruit — Mid-Career</p>
          <h1 class="rc-title">中途採用情報</h1>
          <p class="rc-lead">経験とスキルを活かし、共に事業を成長させる仲間を求めています。</p>
        </div>
        <div class="rc-hero-stats">
          <div class="rc-stat" v-for="hs in heroStats" :key="hs.label">
            <p class="rc-stat-label">{{ hs.label }}</p>
            <p class="rc-stat-value">{{ hs.value }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ハイライト -->
    <section class="rc-highlight">
      <div class="inner">
        <div class="rc-highlight-grid">
          <div class="rc-highlight-item" v-for="(h, i) in highlights" :key="h.title">
            <span class="rc-highlight-num">{{ String(i + 1).padStart(2,'0') }}</span>
            <h3 class="rc-highlight-title">{{ h.title }}</h3>
            <p class="rc-highlight-desc">{{ h.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 情報テーブル + サイドバー -->
    <section class="rc-body">
      <div class="inner rc-body-grid">
        <div class="rc-table">
          <div
            v-for="(item, index) in recruitData"
            :key="index"
            class="rc-row"
          >
            <span class="rc-label">
              <span class="rc-label-mark"></span>
              {{ item.label }}
            </span>
            <p class="rc-value" v-html="item.value"></p>
          </div>
        </div>

        <aside class="rc-sidebar">
          <div class="rc-side-card">
            <p class="rc-side-eyebrow">Entry</p>
            <h3 class="rc-side-title">応募のご案内</h3>
            <ul class="rc-side-list">
              <li v-for="s in sideSummary" :key="s">{{ s }}</li>
            </ul>
            <a
              href="https://dxpro-recruit-8b55d006ba39.herokuapp.com/login.html?msg=login_required"
              class="rc-btn"
              target="_blank" rel="noopener noreferrer"
            >
              応募する
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M11 6.5L7.5 3M11 6.5L7.5 10"
                  stroke="currentColor" stroke-width="1.4" stroke-linecap="square"/>
              </svg>
            </a>
            <a
              href="https://dxpro-recruit-8b55d006ba39.herokuapp.com/contact.html"
              class="rc-btn-line"
              target="_blank" rel="noopener noreferrer"
            >お問い合わせ</a>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MidRecruitmentPage",
  data() {
    return {
      heroStats: [
        { label: '雇用形態', value: '正社員 / 契約社員' },
        { label: '給与', value: '経歴による' },
        { label: '勤務地', value: '本社 / 客先常駐' },
      ],
      highlights: [
        { title: '経験を正当に評価', desc: 'これまでのキャリア・スキルを正しく評価し、待遇に反映します。' },
        { title: 'フレックス勤務', desc: '案件に応じた柔軟な勤務体系で、ライフスタイルに合わせて働けます。' },
        { title: '充実の福利厚生', desc: '各種手当・社会保険を完備し、安心して長く働ける環境を整えています。' },
      ],
      sideSummary: [
        '書類選考 → 面接 → 内定',
        '経験・スキルに応じ選考短縮あり',
        '完全週休2日制・年間休日多数',
        '遠方の方には寮支援制度あり',
      ],
      recruitData: [
        {
          label: "募集部門",
          value:
            "プロジェクトマネージャー（PM）<br>ソフトウェア開発者（SE / PL）<br>コンサルタント",
        },
        { label: "雇用形態", value: "&nbsp;&nbsp;&nbsp;正社員<br>&nbsp;&nbsp;&nbsp;契約社員" },
        { label: "給与", value: "履歴・経歴による（応相談）" },
        { label: "勤務地", value: "本社またはお客様先" },
        { label: "勤務時間", value: "案件による<br>営業時間：09:00 ~ 18:00<br>フレックス勤務制有り" },
        {
          label: "昇給・賞与",
          value: `
            ・経験・能力を正当に評価し、未経験分野もチャレンジ可能<br>
            ・PM/PL希望者はマネジメント経験を反映した査定<br>
            ・年1回の昇給と業績に応じた賞与で頑張りを還元<br><br>
          `,
        },
        {
          label: "諸手当",
          value:
            "時間外手当 / 通勤手当 / 住宅手当 / 家族手当 / 能力手当 / 寮支援制度あり",
        },
        {
          label: "休日・休暇",
          value: "完全週休2日制（土日）・祝日・年末年始・有給休暇",
        },
        {
          label: "社会保険",
          value: "健康保険 / 厚生年金 / 雇用保険 / 労災保険",
        },
        {
          label: "選考プロセス",
          value:
            "書類選考 → 一次面接 → 技術ヒアリング → 内定<br>※スキル・経験に応じて一部選考ステップを省略する場合あり",
        },
      ],
    };
  },
};
</script>

<style scoped>
.recruit-page {
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', 'Meiryo', sans-serif;
  color: #1c2433;
  background: #fff;
}
.inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 32px;
}

/* ── Hero ── */
.rc-hero {
  background: #0a1228;
  padding: 92px 0 0;
  overflow: hidden;
}
.rc-hero-inner {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 56px;
  align-items: end;
  padding-bottom: 56px;
}
.rc-eyebrow {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #7daaff;
  text-transform: uppercase;
  margin: 0 0 20px;
}
.rc-title {
  font-size: clamp(28px, 3.6vw, 42px);
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.01em;
  margin: 0 0 16px;
}
.rc-lead {
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  line-height: 1.8;
  margin: 0;
}
.rc-hero-stats {
  display: flex;
  flex-direction: column;
  border-left: 1px solid rgba(255,255,255,0.15);
  padding-left: 32px;
}
.rc-stat {
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.rc-stat:first-child { padding-top: 0; }
.rc-stat:last-child { border-bottom: none; padding-bottom: 0; }
.rc-stat-label {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  letter-spacing: 0.06em;
  margin: 0 0 6px;
}
.rc-stat-value {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

/* ── Highlight ── */
.rc-highlight {
  background: #0a1228;
  padding: 0 0 88px;
}
.rc-highlight-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.12);
}
.rc-highlight-item {
  background: #111a34;
  padding: 32px 28px;
}
.rc-highlight-num {
  display: block;
  font-size: 22px;
  font-weight: 800;
  color: #3d5694;
  margin-bottom: 14px;
}
.rc-highlight-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 10px;
}
.rc-highlight-desc {
  font-size: 12.5px;
  color: rgba(255,255,255,0.55);
  line-height: 1.8;
  margin: 0;
}

/* ── Body ── */
.rc-body {
  padding: 80px 0 96px;
  background: #f5f7fc;
}
.rc-body-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 40px;
  align-items: start;
}
.rc-table {
  background: #fff;
  border: 1px solid #e2e6f0;
}
.rc-row {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 24px;
  padding: 24px 28px;
  border-bottom: 1px solid #e2e6f0;
}
.rc-row:last-child { border-bottom: none; }
.rc-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  font-weight: 700;
  color: #0f2652;
  letter-spacing: 0.04em;
  padding-top: 2px;
}
.rc-label-mark {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-top: 6px;
  background: #2d72d9;
  flex-shrink: 0;
}
.rc-value {
  font-size: 14px;
  color: #3a4155;
  line-height: 1.9;
  margin: 0;
}

/* ── Sidebar ── */
.rc-sidebar {
  position: sticky;
  top: 24px;
}
.rc-side-card {
  background: #0a1228;
  padding: 32px 26px;
  display: flex;
  flex-direction: column;
}
.rc-side-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #7daaff;
  text-transform: uppercase;
  margin: 0 0 12px;
}
.rc-side-title {
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  margin: 0 0 20px;
}
.rc-side-list {
  list-style: none;
  padding: 0;
  margin: 0 0 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.rc-side-list li {
  font-size: 12.5px;
  color: rgba(255,255,255,0.7);
  line-height: 1.7;
  padding-left: 16px;
  position: relative;
}
.rc-side-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 8px;
  height: 1px;
  background: #2d72d9;
}

/* ── Buttons ── */
.rc-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #fff;
  color: #0a1228;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 15px 0;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;
  margin-bottom: 10px;
}
.rc-btn:hover { background: #2d72d9; color: #fff; }
.rc-btn-line {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 14px 0;
  border: 1px solid rgba(255,255,255,0.3);
  text-decoration: none;
  transition: border-color 0.2s, background 0.2s;
}
.rc-btn-line:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

/* ── Responsive ── */
@media (max-width: 900px) {
  .rc-body-grid { grid-template-columns: 1fr; }
  .rc-sidebar { position: static; }
}
@media (max-width: 768px) {
  .rc-hero-inner { grid-template-columns: 1fr; gap: 32px; }
  .rc-hero-stats { border-left: none; padding-left: 0; border-top: 1px solid rgba(255,255,255,0.15); padding-top: 20px; }
  .rc-highlight-grid { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .inner { padding: 0 20px; }
  .rc-hero { padding: 64px 0 0; }
  .rc-hero-inner { padding-bottom: 40px; }
  .rc-highlight { padding-bottom: 56px; }
  .rc-body { padding: 48px 0 64px; }
  .rc-row { grid-template-columns: 1fr; gap: 8px; padding: 20px 20px; }
}
</style>
