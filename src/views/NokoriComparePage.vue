<template>
  <div class="compare-page">
    <section class="cp-hero">
      <div class="wrap">
        <a class="cp-back" @click.prevent="goBack">‹ 料金プランへ戻る</a>
        <p class="cp-en">SERVICE COMPARISON</p>
        <h1 class="cp-title">他社サービスとの比較</h1>
        <p class="cp-sub">
          勤怠・休暇・給与から目標評価、タスク・日報・社内コラボまで。<br class="br-pc">
          必要な機能と導入コストをまとめて比較しました。
        </p>
        <div class="cp-badges">
          <span class="cp-badge">中小企業向けHRプラットフォーム</span>
          <span class="cp-badge">初期費用0円</span>
          <span class="cp-badge">1か月単位で利用可能</span>
        </div>
      </div>
    </section>

    <section class="cp-section">
      <div class="wrap">
        <div class="cp-section-head">
          <p class="cp-section-en">FUNCTIONS</p>
          <h2 class="cp-section-title">機能比較</h2>
          <p class="cp-section-sub">勤怠・給与・評価・コラボ業務を、ひとつのシステムで。</p>
        </div>

        <div class="cp-table-wrap">
          <table class="cp-table">
            <thead>
              <tr>
                <th class="cp-th-label">比較項目</th>
                <th class="cp-th-main">
                  <span class="cp-recommend">RECOMMENDED</span>
                  NOKORI
                </th>
                <th>A社</th>
                <th>B社</th>
                <th>C社</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in featureRows" :key="row.label">
                <td class="cp-row-label">{{ row.label }}</td>
                <td class="cp-cell cp-cell--main"><span :class="row.nokori ? 'cp-mark cp-mark--yes' : 'cp-mark cp-mark--no'">{{ row.nokori ? '○' : '－' }}</span></td>
                <td class="cp-cell"><span :class="row.a ? 'cp-mark cp-mark--yes' : 'cp-mark cp-mark--no'">{{ row.a ? '○' : '－' }}</span></td>
                <td class="cp-cell"><span :class="row.b ? 'cp-mark cp-mark--yes' : 'cp-mark cp-mark--no'">{{ row.b ? '○' : '－' }}</span></td>
                <td class="cp-cell"><span :class="row.c ? 'cp-mark cp-mark--yes' : 'cp-mark cp-mark--no'">{{ row.c ? '○' : '－' }}</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="cp-table-note">○：機能あり / －：機能なし</p>
      </div>
    </section>

    <section class="cp-section cp-section--alt">
      <div class="wrap">
        <div class="cp-section-head">
          <p class="cp-section-en">COST</p>
          <h2 class="cp-section-title">導入費用・月額料金比較</h2>
          <p class="cp-section-sub">初期費用を抑え、必要な期間から始められます。</p>
        </div>

        <div class="cp-table-wrap">
          <table class="cp-table">
            <thead>
              <tr>
                <th class="cp-th-label">比較項目</th>
                <th class="cp-th-main">
                  <span class="cp-recommend">RECOMMENDED</span>
                  NOKORI
                </th>
                <th>A社</th>
                <th>B社</th>
                <th>C社</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="cp-row-label">初期費用（税別）</td>
                <td class="cp-cell cp-cell--main cp-price">0円</td>
                <td class="cp-cell cp-price">300,000円～</td>
                <td class="cp-cell cp-price">200,000円～</td>
                <td class="cp-cell cp-price">100,000円～</td>
              </tr>
              <tr>
                <td class="cp-row-label">月額利用料（税別）</td>
                <td class="cp-cell cp-cell--main cp-price">49,800円</td>
                <td class="cp-cell cp-price">150,000円～</td>
                <td class="cp-cell cp-price">80,000円～</td>
                <td class="cp-cell cp-price">50,000円～</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="cp-table-note">※各社の最上位プラン、または本比較に関連するサービスをすべて導入した構成を基準に比較しています。</p>
        <p class="cp-table-note">※NOKORIはオールインワン統合プランのリリース記念価格です。通常価格は月額49,800円（税別）です。</p>
      </div>
    </section>

    <section class="cp-summary">
      <div class="wrap cp-summary-grid">
        <div class="cp-summary-card">
          <p class="cp-summary-label">初期費用</p>
          <p class="cp-summary-value">0円</p>
          <p class="cp-summary-note">標準利用の場合</p>
        </div>
        <div class="cp-summary-card">
          <p class="cp-summary-label">月額利用料</p>
          <p class="cp-summary-value">34,860円〜</p>
          <p class="cp-summary-note">オールインワン統合・リリース記念価格（税別）</p>
        </div>
        <div class="cp-summary-card">
          <p class="cp-summary-label">契約期間</p>
          <p class="cp-summary-value">1か月から</p>
          <p class="cp-summary-note">1か月ごとの自動更新</p>
        </div>
      </div>
    </section>

    <section class="cp-cta">
      <div class="wrap cp-cta-inner">
        <h2 class="cp-cta-title">まずは実際の画面をご覧ください</h2>
        <p class="cp-cta-sub">現在の業務や帳票を確認しながら、NOKORIでの管理方法をご案内します。</p>
        <div class="cp-cta-btns">
          <a class="cp-btn cp-btn--fill" @click.prevent="openComingSoon">無料デモを申し込む</a>
          <a class="cp-btn cp-btn--line" @click.prevent="openComingSoon">導入について相談する</a>
        </div>
      </div>
    </section>

    <transition name="cs-fade">
      <div class="cs-overlay" v-if="showComingSoon" @click.self="closeComingSoon">
        <div class="cs-modal">
          <button class="cs-close" @click="closeComingSoon" aria-label="閉じる">×</button>
          <p class="cs-icon">🚧</p>
          <h3 class="cs-title">準備中です</h3>
          <p class="cs-desc">この機能は現在準備中です。公開まで今しばらくお待ちください。</p>
          <button class="cs-ok" @click="closeComingSoon">閉じる</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NokoriComparePage',
  data() {
    return {
      showComingSoon: false,
      featureRows: [
        { label: 'GPSベースの勤怠打刻', nokori: true, a: true, b: false, c: false },
        { label: '休暇申請・多段階承認', nokori: true, a: true, b: false, c: true },
        { label: '給与バッチ処理・明細発行', nokori: true, a: false, b: true, c: false },
        { label: 'AIによる自動評価・等級算出', nokori: true, a: false, b: false, c: false },
        { label: 'タスク・日報管理', nokori: true, a: true, b: false, c: true },
        { label: 'チャット・通話・画面共有・ストレージ標準搭載', nokori: true, a: false, b: false, c: false },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.push('/Nokori');
      this.$nextTick(() => {
        const el = document.getElementById('pricing');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    },
    openComingSoon() {
      this.showComingSoon = true;
    },
    closeComingSoon() {
      this.showComingSoon = false;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.compare-page {
  --grad-main: linear-gradient(120deg, #6c3ce9, #e3598c);
  --grad-soft: linear-gradient(120deg, rgba(108,60,233,0.08), rgba(227,89,140,0.08));
  --border: #e6e2f2;
  --bg: #f7f8fc;
  background: #fff;
}

.wrap {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 24px;
}

/* --- Hero --- */
.cp-hero {
  background: linear-gradient(160deg, #1a1140, #2a1763);
  color: #fff;
  padding: 56px 0 72px;
  text-align: center;
}
.cp-back {
  display: inline-block;
  font-size: 13px;
  color: rgba(255,255,255,0.75);
  margin-bottom: 28px;
  cursor: pointer;
  transition: color 0.15s;
}
.cp-back:hover { color: #fff; }
.cp-en {
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #d8c9f7;
  margin: 0 0 10px;
}
.cp-title {
  font-size: clamp(26px, 4vw, 36px);
  font-weight: 800;
  margin: 0 0 18px;
}
.cp-sub {
  font-size: 14px;
  color: rgba(255,255,255,0.78);
  line-height: 1.9;
  margin: 0 auto 28px;
  max-width: 560px;
}
.cp-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.cp-badge {
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.25);
  padding: 7px 16px;
  border-radius: 999px;
}

/* --- Sections --- */
.cp-section {
  padding: 72px 0;
  background: #fff;
}
.cp-section--alt {
  background: var(--bg);
}
.cp-section-head {
  text-align: center;
  margin-bottom: 40px;
}
.cp-section-en {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: #6c3ce9;
  margin: 0 0 8px;
}
.cp-section-title {
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 10px;
}
.cp-section-sub {
  font-size: 13.5px;
  color: #5a6478;
  margin: 0;
}

/* --- Table --- */
.cp-table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: 14px;
}
.cp-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 560px;
  background: #fff;
}
.cp-table thead th {
  font-size: 13px;
  font-weight: 700;
  color: #5a6478;
  padding: 16px 14px;
  border-bottom: 1px solid var(--border);
  text-align: center;
  white-space: nowrap;
}
.cp-th-label { text-align: left; color: #8891a3; }
.cp-th-main {
  color: #6c3ce9;
  background: var(--grad-soft);
  position: relative;
}
.cp-recommend {
  display: block;
  font-size: 9.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #e3598c;
  margin-bottom: 4px;
}
.cp-row-label {
  font-size: 13px;
  color: #1a1140;
  padding: 14px;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
}
.cp-cell {
  text-align: center;
  padding: 14px;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
  color: #5a6478;
}
.cp-cell--main {
  background: var(--grad-soft);
  font-weight: 700;
  color: #1a1140;
}
.cp-mark--yes { color: #1f9d63; font-weight: 800; }
.cp-mark--no { color: #c3c9d6; }
.cp-price { font-weight: 700; color: #1a1140; }
.cp-table-note {
  font-size: 11.5px;
  color: #8891a3;
  margin: 12px 2px 0;
}

/* --- Summary --- */
.cp-summary {
  padding: 56px 0;
  background: #fff;
}
.cp-summary-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}
.cp-summary-card {
  text-align: center;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 20px;
}
.cp-summary-label {
  font-size: 12px;
  color: #8891a3;
  margin: 0 0 8px;
}
.cp-summary-value {
  font-size: 24px;
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 8px;
}
.cp-summary-note {
  font-size: 11.5px;
  color: #8891a3;
  margin: 0;
}

/* --- CTA --- */
.cp-cta {
  background: linear-gradient(160deg, #1a1140, #2a1763);
  color: #fff;
  padding: 64px 0;
  text-align: center;
}
.cp-cta-title {
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 800;
  margin: 0 0 12px;
}
.cp-cta-sub {
  font-size: 13.5px;
  color: rgba(255,255,255,0.78);
  margin: 0 0 28px;
}
.cp-cta-btns {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}
.cp-btn {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  padding: 14px 32px;
  border-radius: 999px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.18s, box-shadow 0.18s;
}
.cp-btn--fill {
  background: var(--grad-main);
  color: #fff;
  box-shadow: 0 10px 26px rgba(108,60,233,0.4);
}
.cp-btn--fill:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(108,60,233,0.5); }
.cp-btn--line {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.5);
}
.cp-btn--line:hover { border-color: #fff; background: rgba(255,255,255,0.1); transform: translateY(-2px); }

/* --- Coming soon modal (shared pattern) --- */
.cs-overlay {
  position: fixed;
  inset: 0;
  background: rgba(20,12,45,0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  padding: 20px;
}
.cs-modal {
  position: relative;
  background: #fff;
  border-radius: 20px;
  padding: 40px 32px;
  max-width: 360px;
  width: 100%;
  text-align: center;
  box-shadow: 0 30px 60px rgba(20,12,45,0.3);
}
.cs-close {
  position: absolute;
  top: 14px;
  right: 14px;
  background: none;
  border: none;
  font-size: 20px;
  color: #8891a3;
  cursor: pointer;
}
.cs-icon { font-size: 36px; margin: 0 0 10px; }
.cs-title { font-size: 18px; font-weight: 800; color: #1a1140; margin: 0 0 10px; }
.cs-desc { font-size: 13px; color: #5a6478; line-height: 1.8; margin: 0 0 24px; }
.cs-ok {
  background: var(--grad-main);
  color: #fff;
  border: none;
  font-size: 13.5px;
  font-weight: 700;
  padding: 11px 32px;
  border-radius: 999px;
  cursor: pointer;
}
.cs-fade-enter-active, .cs-fade-leave-active { transition: opacity 0.2s ease; }
.cs-fade-enter-from, .cs-fade-leave-to { opacity: 0; }

/* --- Responsive --- */
@media (max-width: 768px) {
  .cp-hero { padding: 44px 0 56px; }
  .cp-summary-grid { grid-template-columns: 1fr; }
  .br-pc { display: none; }
}
</style>
