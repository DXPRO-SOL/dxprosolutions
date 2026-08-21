<template>
  <div class="services-page">
    <!-- Hero セクション -->
    <section class="services-hero">
      <div class="hero-content">
        <h1 class="hero-title">IT専門ソリューションで<br>ビジネス革新を実現します</h1>
        <p class="hero-subtitle">
          現状のヒアリングから設計・開発・運用まで<br>
          お客様の業務課題に合わせて一貫して対応します
        </p>
        <div class="scroll-indicator" @click="scrollToServices">
          <span>スクロールダウン</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M7 10L12 15L17 10" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- サービス グリッド -->
    <section class="services-grid" ref="servicesGrid">
      <div class="grid-container">
        <!-- システムコンサルティング -->
        <div class="service-card consulting">
          <div class="card-content">
            <h3 class="service-title">システムコンサルティング</h3>
            <p class="service-desc">現状業務のヒアリングから課題整理、改善計画の策定・実行支援まで対応します</p>
            <button class="detail-button" @click="openDialog('consulting')">詳細を見る</button>
          </div>
        </div>

        <!-- Web/モバイル開発 -->
        <div class="service-card development">
          <div class="card-content">
            <h3 class="service-title">Web/モバイル開発</h3>
            <p class="service-desc">要件定義から設計・実装・テスト・リリースまで一貫して開発します</p>
            <button class="detail-button" @click="openDialog('webMobileDevelopment')">詳細を見る</button>
          </div>
        </div>

        <!-- システム運用 -->
        <div class="service-card operation">
          <div class="card-content">
            <h3 class="service-title">システム運用</h3>
            <p class="service-desc">監視・障害対応・定期メンテナンスまで、稼働中システムを継続的に支えます</p>
            <button class="detail-button" @click="openDialog('maintenance')">詳細を見る</button>
          </div>
        </div>

        <!-- ERP導入 -->
        <div class="service-card erp">
          <div class="card-content">
            <h3 class="service-title">ERP導入</h3>
            <p class="service-desc">SAP/Oracle等のERPパッケージ選定から導入・定着支援まで対応します</p>
            <button class="detail-button" @click="openDialog('sapebs')">詳細を見る</button>
          </div>
        </div>

        <!-- データ移行 -->
        <div class="service-card data">
          <div class="card-content">
            <h3 class="service-title">データ移行</h3>
            <p class="service-desc">既存システムからの移行計画立案・実行・移行後の検証まで対応します</p>
            <button class="detail-button" @click="openDialog('db')">詳細を見る</button>
          </div>
        </div>

        <!-- NOKORI（自社パッケージ） -->
        <div class="service-card nokori">
          <div class="card-content">
            <span class="service-badge">自社パッケージ</span>
            <h3 class="service-title">NOKORI</h3>
            <p class="service-desc">タスク・工数・承認フローを一元管理するクラウド型業務管理パッケージです</p>
            <button class="detail-button" @click="goToNokori">詳細を見る</button>
          </div>
        </div>
      </div>
    </section>

    <!-- モーダル -->
    <transition name="modal">
      <div v-if="activeDialog" class="service-modal" @click.self="closeDialog">
        <div class="modal-container">
          <div class="modal-header">
            <h2>{{ modalContents[activeDialog].title }}</h2>
            <button class="close-button" @click="closeDialog">✕</button>
          </div>
          <div class="modal-content service-detail"
               v-html="modalContents[activeDialog].content"></div>
          <div class="modal-footer">
            <button class="contact-button" @click="goToContact">お問い合わせ</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  data() {
    return {
      activeDialog: null,
      modalContents: {
      consulting: {
      title: "システムコンサルティング",
      content: `
        <div class="info-block">
          <h3>提供内容</h3>
          <ul>
            <li>現行業務・システムの現状把握とヒアリング</li>
            <li>課題の整理と改善プランの策定</li>
            <li>RPA・業務自動化ツールの選定と導入支援</li>
            <li>セキュリティポリシー・運用ルールの整備</li>
          </ul>
        </div><br>

        <div class="info-block">
          <h3>こんな課題に対応します</h3>
          <ul>
            <li>手作業や紙業務が多く、非効率な業務プロセスがある</li>
            <li>システムが乱立し、データ連携ができていない</li>
            <li>DXを進めたいが、何から着手すべきか分からない</li>
            <li>既存システムの保守性・拡張性に不安がある</li>
          </ul>
        </div><br>

        <div class="tools-list">
          <h3>使用技術・ツール</h3>
          <div class="tool-item">RPAツール（UiPath, Automation Anywhere）</div>
          <div class="tool-item">BIツール（Power BI, Tableau）</div>
          <div class="tool-item">Figma / Miro</div>
        </div><br>

        <div class="method-grid">
          <h3>進め方</h3>
          <div class="method-item">ヒアリング・現状分析</div>
          <div class="method-item">課題整理・改善提案</div>
          <div class="method-item">ツール選定・導入支援</div>
          <div class="method-item">運用定着・効果検証</div>
        </div>
      `
    },

    maintenance: {
      title: "システム運用",
      content: `
        <div class="info-block">
          <h3>提供内容</h3>
          <ul>
            <li>24時間365日のシステム監視・障害検知</li>
            <li>性能監視とキャパシティプランニング</li>
            <li>セキュリティパッチ適用・脆弱性対応</li>
            <li>バックアップ運用・障害復旧対応</li>
          </ul>
        </div><br>

        <div class="info-block">
          <h3>こんな課題に対応します</h3>
          <ul>
            <li>障害発生時の対応体制が整っていない</li>
            <li>アクセス増加時の性能劣化が心配</li>
            <li>セキュリティ対応を継続的に行う人員が不足している</li>
            <li>運用保守を外部に任せて開発リソースを確保したい</li>
          </ul>
        </div><br>

        <div class="tools-list">
          <h3>使用技術・ツール</h3>
          <div class="tool-item">監視ツール（Zabbix, Datadog）</div>
          <div class="tool-item">クラウド（AWS, Azure）</div>
          <div class="tool-item">チケット管理（JIRA, ServiceNow）</div>
        </div><br>

        <div class="method-grid">
          <h3>進め方</h3>
          <div class="method-item">監視設計・アラート設定</div>
          <div class="method-item">日次・月次の性能レポート</div>
          <div class="method-item">パッチ適用・脆弱性対応</div>
          <div class="method-item">バックアップ・障害復旧対応</div>
        </div>
      `
    },

    sapebs: {
      title: "ERP導入",
      content: `
        <div class="info-block">
          <h3>提供内容</h3>
          <ul>
            <li>SAP S/4HANA / Oracle EBS の導入・移行支援</li>
            <li>業務プロセスに合わせたアドオン開発・カスタマイズ</li>
            <li>多言語・多通貨など海外拠点対応</li>
            <li>既存システムとのデータ連携設計</li>
          </ul>
        </div><br>

        <div class="info-block">
          <h3>こんな課題に対応します</h3>
          <ul>
            <li>会計・生産・在庫などのシステムが分断されている</li>
            <li>海外拠点との業務・データ統合を進めたい</li>
            <li>老朽化したERPをS/4HANAへ刷新したい</li>
            <li>導入後の運用・保守まで任せられる相手を探している</li>
          </ul>
        </div><br>

        <div class="tools-list">
          <h3>使用技術・ツール</h3>
          <div class="tool-item">SAP S/4HANA</div>
          <div class="tool-item">Oracle EBS</div>
          <div class="tool-item">Fiori / UI5</div>
          <div class="tool-item">Git / CI/CD</div>
        </div><br>

        <div class="method-grid">
          <h3>進め方</h3>
          <div class="method-item">業務分析・要件定義</div>
          <div class="method-item">ERP設定・アドオン開発</div>
          <div class="method-item">テスト・検証</div>
          <div class="method-item">ユーザートレーニング</div>
          <div class="method-item">本番移行・運用支援</div>
        </div>
      `
    },

    db: {
      title: "データ移行",
      content: `
        <div class="info-block">
          <h3>提供内容</h3>
          <ul>
            <li>データベース移行（Oracle, SQL Server, MySQL 等）</li>
            <li>オンプレミス環境からクラウドへの移行</li>
            <li>データクレンジング・整合性チェック</li>
            <li>移行後の動作検証・性能チューニング</li>
          </ul>
        </div><br>

        <div class="info-block">
          <h3>こんな課題に対応します</h3>
          <ul>
            <li>老朽化したオンプレDBをクラウドへ移行したい</li>
            <li>移行時のダウンタイムを最小限にしたい</li>
            <li>データの重複・不整合を整理してから移行したい</li>
            <li>移行後のトラブルに備えて検証をしっかり行いたい</li>
          </ul>
        </div><br>

        <div class="tools-list">
          <h3>使用技術・ツール</h3>
          <div class="tool-item">Oracle / SQL Server / MySQL</div>
          <div class="tool-item">AWS / Azure / GCP</div>
          <div class="tool-item">ETLツール（Talend, Informatica）</div>
          <div class="tool-item">Git / CI/CD</div>
        </div><br>

        <div class="method-grid">
          <h3>進め方</h3>
          <div class="method-item">現行データ分析・評価</div>
          <div class="method-item">移行計画策定・バックアップ準備</div>
          <div class="method-item">テスト移行・データ検証</div>
          <div class="method-item">本番移行・運用サポート</div>
        </div>
      `
    },
        webMobileDevelopment: {
          title: "Web/モバイル開発",
          content: `
            <div class="info-block">
              <h3>提供内容</h3>
              <ul>
                <li>フロントエンド/バックエンド開発（React, Vue, Node.js, Laravel）</li>
                <li>モバイルアプリ開発（iOS, Android, Flutter, React Native）</li>
                <li>UI/UXデザインとユーザビリティ改善</li>
                <li>クラウド環境構築（AWS, Azure, GCP）</li>
              </ul>
            </div><br>

            <div class="info-block">
              <h3>こんな課題に対応します</h3>
              <ul>
                <li>既存サイト・アプリの使い勝手やパフォーマンスを改善したい</li>
                <li>新規サービスをゼロから設計・開発してほしい</li>
                <li>アクセス集中時にも安定して稼働する基盤にしたい</li>
                <li>リリース後の運用・機能追加まで任せられる体制がほしい</li>
              </ul>
            </div><br>

            <div class="tools-list">
              <h3>使用技術・ツール</h3>
              <div class="tool-item">React / Vue</div>
              <div class="tool-item">Flutter / React Native</div>
              <div class="tool-item">AWS / Azure</div>
              <div class="tool-item">Figma / Adobe XD</div>
              <div class="tool-item">GitHub / GitLab</div>
            </div><br>

            <div class="method-grid">
              <h3>進め方</h3>
              <div class="method-item">要件定義・業務分析</div>
              <div class="method-item">UI/UX設計・プロトタイピング</div>
              <div class="method-item">アジャイル開発・段階的リリース</div>
              <div class="method-item">テスト・品質保証</div>
              <div class="method-item">本番リリース・運用サポート</div>
            </div>
          `
        }
      }
    }
  },
  methods: {
    openDialog(type) {
      this.activeDialog = type;
      document.body.style.overflow = 'hidden';
    },
    closeDialog() {
      this.activeDialog = null;
      document.body.style.overflow = '';
    },
    scrollToServices() {
      const section = this.$refs.servicesGrid;
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    goToNokori() {
      this.$router.push('/Nokori');
    },
    goToContact() {
      // 모달 닫고 body overflow 복구
      this.closeDialog();

      // 라우터 이동
      window.location.href = 'https://dxpro-recruit-8b55d006ba39.herokuapp.com/contact.html';

    }
  }
}
</script>


<style scoped>
/* Base Styles */
.services-page {
  font-family: 'Noto Sans KR', 'Helvetica Neue', Arial, sans-serif;
  color: #333;
  line-height: 1.6;
}

/* Hero Section */
.services-hero {
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  color: white;
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero-content {
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 1.4rem;
  max-width: 700px;
  margin: 0 auto 40px;
  opacity: 0.9;
}

.scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  opacity: 0.8;
  animation: bounce 2s infinite;
  cursor: pointer;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Services Grid */
.services-grid {
  padding: 80px 20px;
  background-color: #f9fafc;
}

.grid-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.service-card {
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  z-index: 2;
}

.service-card.consulting::before { background: linear-gradient(90deg, #4b6cb7, #182848); }
.service-card.development::before { background: linear-gradient(90deg, #11998e, #38ef7d); }
.service-card.operation::before { background: linear-gradient(90deg, #8e2de2, #4a00e0); }
.service-card.erp::before { background: linear-gradient(90deg, #f46b45, #eea849); }
.service-card.data::before { background: linear-gradient(90deg, #1d976c, #93f9b9); }
.service-card.nokori::before { background: linear-gradient(90deg, #0a1228, #2d72d9); }

.service-badge {
  display: inline-block;
  align-self: flex-start;
  background: #eef3ff;
  color: #2d72d9;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}

.card-content {
  padding: 30px;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-icon {
  margin-bottom: 20px;
  color: #2c3e50;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.service-desc {
  font-size: 1rem;
  color: #555;
  margin-bottom: 20px;
  flex-grow: 1;
}

.service-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 25px;
}

.service-features span {
  background: #f0f4f8;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #2c3e50;
}

.detail-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  color: #2c3e50;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  width: fit-content;
}

.detail-button:hover {
  background: #f0f4f8;
  transform: translateX(5px);
}

/* Modal Dialog */
.service-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.7);
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* Vue transition 클래스 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.service-modal .modal-container {
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
  transform: translateY(20px);
  transition: transform 0.3s ease;
  position: relative;
}

.close-button {
  position: absolute;
  top: 25px;
  right: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f7fa;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: #e1e5eb;
  transform: rotate(90deg);
}

.modal-header {
  padding: 40px;
  border-bottom: none;
  background: linear-gradient(90deg, #1a2a6c, #b21f1f, #fdbb2d);
  color: white;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

.modal-header h2 {
  font-size: 2rem;
  font-weight: 800;
  margin: 0;
  color: white;
}
.case-block {
  background: #fff;
  border-left: 5px solid #f46b45;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.case-block h5 {
  margin-top: 0;
  color: #3a7bd5;
  font-weight: 700;
}

.case-block ul {
  padding-left: 20px;
  margin-top: 10px;
}

.case-block ul li {
  margin-bottom: 8px;
  line-height: 1.6;
}
/* Modal Content 대기업식 블록 */
.service-detail {
  padding: 40px;
  background: #f9fafc;
}

.service-detail h3 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 30px 0 15px;
  color: #1a2a6c;
}

.service-detail ul li {
  position: relative;
  padding-left: 25px;
}

.service-detail ul li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: #3a7bd5;
  font-weight: bold;
}

/* 정보 블록 */
.info-block {
  background: white;
  padding: 20px 25px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  border-left: 4px solid #3a7bd5;
}

/* ケーススタディ */
.case-study {
  background: #fff;
  padding: 25px;
  border-radius: 12px;
  border-left: 5px solid #f46b45;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

/* CTA 버튼 크게 */
.modal-footer {
  padding: 30px 40px;
  border-top: none;
}

.contact-button {
  width: 100%;
  font-size: 1.1rem;
  padding: 15px;
  border-radius: 40px;
}
.contact-button {
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(90deg, #3a7bd5, #00d2ff);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(58, 123, 213, 0.4);
}

/* Modal Content Styles */
.service-detail h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #f0f4f8;
}

.service-detail h4 {
  font-size: 1.2rem;
  color: #3a7bd5;
  margin: 20px 0 10px;
}

.service-detail p {
  font-size: 1rem;
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 20px;
}

.service-detail ol, .service-detail ul {
  padding-left: 20px;
  margin-bottom: 20px;
}

.service-detail li {
  margin-bottom: 10px;
  line-height: 1.6;
}

.expertise-grid, .features-grid, .modules-grid, .method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.expertise-item, .feature-item, .module-item, .method-item {
  background: #f8fafc;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #3a7bd5;
}

.tools-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.tool-item {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.case-study {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
  border-left: 3px solid #3a7bd5;
}

.case-study h4 {
  margin-top: 0;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

th {
  background: #f8fafc;
  font-weight: 600;
}

tr:hover {
  background: #f5f9ff;
}

/* Animation */
.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: all 0.3s ease;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.1rem;
  }
  
  .grid-container {
    grid-template-columns: 1fr;
  }
  
  .modal-header {
    padding: 20px;
  }
  
  .modal-content {
    padding: 20px;
  }
  
  .expertise-grid, .features-grid, .modules-grid, .method-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .services-hero {
    padding: 80px 20px;
  }
  
  .hero-title {
    font-size: 1.8rem;
  }
  
  .service-title {
    font-size: 1.3rem;
  }
  
  .modal-header h2 {
    font-size: 1.5rem;
  }
  
  .modal-footer {
    justify-content: center;
  }
}
</style>