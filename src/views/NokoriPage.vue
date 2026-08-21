<template>
  <div class="nokori-page">

    <!-- ① Hero Section -->
    <section class="nokori-hero">
      <div class="hero-grid-pattern"></div>
      <div class="wrap hero-inner">
        <div class="hero-copy">
          <p class="hero-eyebrow" data-reveal>Solutions&nbsp;&nbsp;/&nbsp;&nbsp;ソリューション</p>
          <span class="hero-ai-flag" data-reveal style="--delay: 40ms">✦ AI搭載 業務管理パッケージ</span>
          <h1 class="hero-title" data-reveal style="--delay: 100ms">
            属人化・工数ロスから、<br>
            チームで動く<span class="hero-accent">スマート管理</span>へ。
          </h1>
          <p class="hero-lead" data-reveal style="--delay: 200ms">
            NOKORIは、タスク・工数・承認フローをひとつのクラウドで一元管理します。<br class="br-pc">
            現場のリアルタイム進捗と経営の意思決定をつなぐ業務管理パッケージです。
          </p>

          <div class="hero-stats" data-reveal style="--delay: 240ms">
            <div class="hero-stat">
              <p class="hero-stat-num">4領域</p>
              <p class="hero-stat-label">タスク・工数・承認・レポートを統合</p>
            </div>
            <div class="hero-stat">
              <p class="hero-stat-num">Cloud</p>
              <p class="hero-stat-label">現場と管理部門で共有</p>
            </div>
            <div class="hero-stat">
              <p class="hero-stat-num">DX</p>
              <p class="hero-stat-label">紙・Excel業務を削減</p>
            </div>
          </div>

          <div class="hero-cta" data-reveal style="--delay: 300ms">
            <a class="btn-fill" @click.prevent="goToLogin">NOKORIを見る</a>
            <a class="btn-accent" @click.prevent="scrollTo('features')">機能を確認する</a>
            <a class="btn-ghost" @click.prevent="openComingSoon">相談する</a>
          </div>

          <ul class="hero-checklist" data-reveal style="--delay: 340ms">
            <li v-for="item in heroChecklist" :key="item">
              <span class="hero-check-mark">✓</span>{{ item }}
            </li>
          </ul>
        </div>

        <div class="hero-panel" data-reveal style="--delay: 250ms">
          <div class="panel-note">
            <span>01</span>承認待ち業務の探索時間を削減
          </div>
          <div class="panel-inner">
            <div class="panel-header">
              <div>
                <p class="panel-eyebrow">NOKORI Solution Overview</p>
                <h3 class="panel-heading">業務管理ソリューション</h3>
              </div>
              <span class="panel-badge">Cloud</span>
            </div>
            <div class="panel-mock">
              <div class="mock-toolbar">
                <span class="mock-dot"></span>
                <span class="mock-dot"></span>
                <span class="mock-dot"></span>
                <span class="mock-toolbar-title">NOKORI Dashboard</span>
              </div>
              <div class="mock-stats">
                <div class="mock-stat">
                  <span class="mock-stat-num">128</span>
                  <span class="mock-stat-label">進行中タスク</span>
                </div>
                <div class="mock-stat">
                  <span class="mock-stat-num">7</span>
                  <span class="mock-stat-label">承認待ち</span>
                </div>
                <div class="mock-stat mock-stat--accent">
                  <span class="mock-stat-num">98%</span>
                  <span class="mock-stat-label">期日遵守率</span>
                </div>
              </div>
              <div class="mock-list">
                <div class="mock-row" v-for="(ov, i) in overviews" :key="ov.num">
                  <div class="mock-row-icon" v-html="overviewIcons[i]"></div>
                  <div class="mock-row-body">
                    <div class="mock-row-top">
                      <span class="mock-row-title">{{ ov.title }}</span>
                      <span class="mock-row-status" :class="'status-' + i">{{ mockStatus[i] }}</span>
                    </div>
                    <div class="mock-row-bar">
                      <span class="mock-row-bar-fill" :style="{ width: mockProgress[i] + '%' }"></span>
                    </div>
                  </div>
                  <span class="mock-row-pct">{{ mockProgress[i] }}%</span>
                </div>
              </div>

              <div class="mock-float mock-float--check">
                <span class="mock-float-icon">✓</span>
                <div>
                  <p class="mock-float-title">承認が完了しました</p>
                  <p class="mock-float-sub">工数申請 #A-1042</p>
                </div>
              </div>
              <div class="mock-float mock-float--ai">
                <span class="mock-float-pulse"></span>
                <span class="mock-float-icon mock-float-icon--ai">✦</span>
                <div>
                  <p class="mock-float-title">AIが優先タスクを検知</p>
                  <p class="mock-float-sub">3件の遅延リスクを通知</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

    <!-- ② Overview Grid -->
    <section class="overview-section" id="overview">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">OVERVIEW</p>
          <h2 class="sec-title">NOKORIパッケージ 4つの管理領域</h2>
          <p class="sec-sub">タスク・工数・承認・レポートの4領域を統合し、プロジェクト管理の全工程をカバーします。</p>
        </div>
        <div class="ov-grid">
          <div class="ov-item" v-for="(ov, i) in overviews" :key="ov.num"
               data-reveal :style="{ '--delay': i * 80 + 'ms' }">
            <div class="ov-icon" v-html="overviewIcons[i]"></div>
            <h3 class="ov-name">{{ ov.title }}</h3>
            <p class="ov-desc">{{ ov.desc }}</p>
            <div class="ov-ai-note">
              <span class="ov-ai-badge">✦ AI</span>
              <p>{{ ov.aiNote }}</p>
            </div>
            <span class="ov-bg-num">{{ ov.num }}</span>
          </div>
        </div>

        <div class="ov-flow" data-reveal>
          <p class="ov-flow-label">一元管理フロー</p>
          <div class="ov-flow-track">
            <span class="ov-flow-item" v-for="(ov, i) in overviews" :key="ov.title">
              {{ ov.title }}<span class="ov-flow-arrow" v-if="i < overviews.length - 1">→</span>
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- ③ CTA Banner -->
    <section class="mid-banner">
      <div class="wrap mid-banner-inner" data-reveal>
        <div class="mid-banner-text">
          <p class="mid-banner-title">タスク・工数・承認業務を、ひとつの流れに。</p>
          <p class="mid-banner-sub">まずは現在の管理方法をもとに、NOKORIでどこまで効率化できるか確認できます。</p>
        </div>
        <div class="mid-banner-btns">
          <a class="btn-banner" @click.prevent="goToLogin">NOKORIを見る</a>
          <a class="btn-banner btn-banner--ghost" @click.prevent="scrollTo('features')">機能を見る</a>
        </div>
      </div>
    </section>

    <!-- ④ Challenges Section -->
    <section class="challenges-section" id="challenges">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">CHALLENGES</p>
          <h2 class="sec-title">こんな課題はありませんか？</h2>
          <p class="sec-sub">情報の分散は、確認作業・工数管理・承認対応の遅延につながります。</p>
        </div>
        <div class="ch-table">
          <div class="ch-row" v-for="(ch, i) in challenges" :key="ch.title"
               data-reveal data-reveal-dir="left" :style="{ '--delay': i * 70 + 'ms' }">
            <div class="ch-left">
              <span class="ch-mark"></span>
              <strong>{{ ch.title }}</strong>
            </div>
            <p class="ch-right">{{ ch.desc }}</p>
            <p class="ch-ai-fix"><span class="ch-ai-badge">✦ AI</span>{{ ch.aiFix }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑤ Features Section -->
    <section class="features-section" id="features">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">FUNCTIONS</p>
          <h2 class="sec-title">NOKORIの主要機能</h2>
          <p class="sec-sub">勤怠・タスク・人事・管理者機能・AIエンジンまで、業務に必要な機能を網羅しています。</p>
        </div>

        <!-- 5大コア機能ハイライト（各機能にAIを搭載） -->
        <div class="feat-grid">
          <div class="feat-card"
               v-for="(feat, i) in features" :key="feat.title"
               data-reveal :style="{ '--delay': i * 90 + 'ms' }">
            <div class="feat-top">
              <div class="feat-icon" v-html="featureIcons[i]"></div>
              <div class="feat-index">{{ String(i + 1).padStart(2, '0') }}</div>
            </div>
            <div class="feat-tag">{{ feat.tag }}</div>
            <h3 class="feat-title">{{ feat.title }}</h3>
            <p class="feat-desc">{{ feat.desc }}</p>
            <div class="feat-ai-note">
              <span class="feat-ai-badge">✦ AI</span>
              <p>{{ feat.aiNote }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑤-2 AI Engine Section -->
    <section class="ai-section" id="ai-engine">
      <div class="wrap">
        <div class="ai-head" data-reveal>
          <span class="ai-badge">✦ AI ENGINE</span>
          <h2 class="sec-title ai-title">蓄積データを分析し、次の一手を提案するAIエンジン</h2>
          <p class="sec-sub ai-sub">勤怠・目標・休暇・給与データをリアルタイムに分析し、パターン検知・将来予測・改善提案までを自動で行います。</p>
        </div>

        <div class="ai-showcase">
          <!-- スコアカード -->
          <div class="ai-score-card" data-reveal style="--delay: 100ms">
            <p class="ai-score-label">AI 半期評価予測</p>
            <div class="ai-score-main">
              <span class="ai-score-num">78</span>
              <span class="ai-score-den">/ 100点</span>
            </div>
            <div class="ai-grade-track">
              <span v-for="g in grades" :key="g" :class="['ai-grade-dot', { 'is-current': g === 'B+' }]">{{ g }}</span>
            </div>
            <p class="ai-score-note">グレード <strong>A</strong> まであと 8点</p>
          </div>

          <!-- インサイトリスト -->
          <div class="ai-insight-list">
            <div class="ai-insight" v-for="(ins, i) in aiInsights" :key="ins.title"
                 data-reveal :style="{ '--delay': 120 + i * 60 + 'ms' }">
              <span class="ai-insight-emoji">{{ ins.emoji }}</span>
              <div class="ai-insight-body">
                <div class="ai-insight-top">
                  <p class="ai-insight-title">{{ ins.title }}</p>
                  <span :class="['ai-insight-tag', 'tag-' + ins.level]">{{ ins.levelLabel }}</span>
                </div>
                <p class="ai-insight-desc">{{ ins.desc }}</p>
                <span class="ai-insight-conf">AI信頼度 {{ ins.conf }}%</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 評価カテゴリ内訳 -->
        <div class="ai-category-grid">
          <div class="ai-cat" v-for="(cat, i) in aiCategories" :key="cat.name"
               data-reveal :style="{ '--delay': i * 70 + 'ms' }">
            <div class="ai-cat-head">
              <p class="ai-cat-name">{{ cat.name }}</p>
              <p class="ai-cat-score">{{ cat.score }}<span> / {{ cat.max }}点</span></p>
            </div>
            <div class="ai-cat-bar">
              <span class="ai-cat-bar-fill" :style="{ width: cat.pct + '%' }"></span>
            </div>
          </div>
        </div>

        <!-- アクションプラン例 -->
        <div class="ai-action-block" data-reveal>
          <h3 class="ai-action-title">AIが提示するアクションプラン（例）</h3>
          <div class="ai-action-list">
            <div class="ai-action" v-for="ac in aiActions" :key="ac.title">
              <span class="ai-action-priority" :class="'pri-' + ac.priority">優先度：{{ ac.priorityLabel }}</span>
              <p class="ai-action-name">{{ ac.title }}</p>
              <p class="ai-action-desc">{{ ac.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑥ Integrated System Section -->
    <section class="strength-section">
      <div class="wrap">
        <div class="sec-head sec-head--light" data-reveal>
          <p class="sec-en">STRENGTHS</p>
          <h2 class="sec-title">NOKORIが選ばれる4つの理由</h2>
          <p class="sec-sub">業務管理のあらゆる場面で、現場と管理の両方を支えます。</p>
        </div>
        <div class="str-grid">
          <div class="str-card" v-for="(item, i) in intItems" :key="item.title"
               data-reveal :style="{ '--delay': i * 80 + 'ms' }">
            <p class="str-num">{{ String(i + 1).padStart(2, '0') }}</p>
            <h4 class="str-name">{{ item.title }}</h4>
            <p class="str-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑦ Workflow Section -->
    <section class="workflow-section" id="workflow">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">WORKFLOW</p>
          <h2 class="sec-title">登録から活用まで、迷わない運用フロー</h2>
          <p class="sec-sub">日々の業務がどのように変わるかを、現場の流れに沿って確認できます。</p>
        </div>
        <div class="wf-flow">
          <div class="wf-item" v-for="(step, i) in workflowSteps" :key="step.title">
            <div class="wf-step"
                 data-reveal :style="{ '--delay': i * 90 + 'ms' }">
              <span class="wf-num">{{ i + 1 }}</span>
              <span class="wf-ai-badge" v-if="step.ai">✦ AI</span>
              <h4 class="wf-title">{{ step.title }}</h4>
              <p class="wf-desc">{{ step.desc }}</p>
            </div>
            <div class="wf-arrow" v-if="i < workflowSteps.length - 1">→</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑧ Benefits Section -->
    <section class="benefits-section" id="benefits">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">BENEFITS</p>
          <h2 class="sec-title">導入で期待できる効果</h2>
          <p class="sec-sub">管理負担を軽減しながら、精度と透明性を高めます。</p>
        </div>
        <div class="ben-grid">
          <div class="ben-card" v-for="(ben, i) in benefits" :key="ben.title"
               data-reveal :style="{ '--delay': i * 100 + 'ms' }">
            <div class="ben-header">
              <span class="ben-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="ben-title">{{ ben.title }}</h3>
            </div>
            <p class="ben-desc">{{ ben.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑨ Contact / CTA Section -->
    <section class="contact-section" id="contact">
      <div class="wrap contact-wrap" data-reveal>
        <div class="contact-text">
          <p class="sec-en">CONTACT</p>
          <h2 class="sec-title">NOKORIの詳細・ご相談はこちら</h2>
          <p class="sec-sub">
            タスク・工数・承認フローをひとつにつなぐ業務管理パッケージ。<br>
            貴社の業務フローに合わせた導入提案を行います。
          </p>
        </div>
        <div class="contact-btns">
          <a
            href="https://dxpro-recruit-8b55d006ba39.herokuapp.com/contact.html"
            class="btn-fill"
            target="_blank"
            rel="noopener noreferrer"
          >お問い合わせ・資料請求</a>
          <router-link to="/" class="btn-line">トップページへ戻る</router-link>
        </div>
      </div>
    </section>

    <!-- Coming Soon Modal -->
    <transition name="modal-fade">
      <div class="cs-overlay" v-if="showComingSoon" @click.self="closeComingSoon">
        <div class="cs-modal">
          <button class="cs-close" @click="closeComingSoon" aria-label="閉じる">×</button>
          <div class="cs-icon">i</div>
          <h3 class="cs-title">準備中のお知らせ</h3>
          <p class="cs-desc">現在、こちらの機能は準備中のため<br>ご利用いただけません。</p>
          <div class="cs-date">10月1日より公開予定です。</div>
          <p class="cs-note">ご不便をおかけいたしますが、<br>今しばらくお待ちください。</p>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'NokoriPage',
  data() {
    return {
      showComingSoon: false,
      heroChecklist: [
        'タスク進捗のリアルタイム可視化',
        '工数・原価データのデジタル化',
        '承認プロセスの電子化',
        'レポート・分析の自動生成',
      ],
      mockStatus: ['進行中', '記録中', '承認待ち', '更新済み'],
      mockProgress: [82, 64, 47, 91],
      overviews: [
        { num: '01', title: 'タスク管理', desc: 'プロジェクト・担当者・期限を一元管理し、残タスクをリアルタイムで把握できます。', aiNote: 'AIが優先度の高いタスクを自動で判定し、トップに表示します。' },
        { num: '02', title: '工数・原価管理', desc: '作業時間の記録・集計・分析を通じ、プロジェクトの収益性を可視化します。', aiNote: 'AIが工数の偏りを検知し、収益性改善のヒントを提示します。' },
        { num: '03', title: '承認フロー電子化', desc: '申請・承認プロセスをデジタル化し、業務の透明性と処理効率を向上させます。', aiNote: 'AIが滞留中の承認を検知し、対応の優先順位を提案します。' },
        { num: '04', title: 'レポート・分析', desc: 'ダッシュボードで進捗・工数・コストをひと目で把握し、迅速な経営判断を支援します。', aiNote: 'AIが蓄積データから将来のトレンドを予測しグラフ化します。' },
      ],
      overviewIcons: [
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" stroke-width="1.3" opacity="0.35"/></svg>',
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M4 19V10M11 19V5M18 19v-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3 19h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="1" stroke="currentColor" stroke-width="1.6"/><path d="M8 9h8M8 13h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      ],
      challenges: [
        { title: 'タスクの抜け漏れが発生しやすい', desc: 'メール・口頭・Excelで分散管理されており、担当者や期限が不明瞭になりやすい状況が続いています。', aiFix: 'AIが遅延リスクの高いタスクを自動検知し、事前にアラートします。' },
        { title: '工数管理が紙・Excel中心', desc: '記入漏れや集計ミスが発生しやすく、プロジェクト原価の把握に多くの時間を要します。', aiFix: 'AIが入力漏れ・異常値を検知し、集計ミスを未然に防ぎます。' },
        { title: '承認状況の可視化が困難', desc: '申請・承認の履歴が各担当者に分散しており、進捗確認や差し戻し対応に手間がかかります。', aiFix: 'AIが滞留中の申請を自動検出し、担当者へリマインドします。' },
        { title: '全体進捗のリアルタイム把握が難しい', desc: '各メンバーの作業状況をタイムリーに確認できず、遅延や問題の発見が遅れるリスクがあります。', aiFix: 'AIが進捗データを分析し、遅延の兆候を早期に通知します。' },
      ],
      features: [
        {
          tag: 'Attendance',
          title: '勤怠管理',
          desc: '出勤・退勤・遅刻・早退をGPS打刻でリアルタイムに記録します。勤務時間の集計や残業時間の管理も自動で行います。',
          aiNote: 'AIが打刻漏れや出勤日数の減少トレンドを検知し、注意すべきポイントを早期に通知します。',
        },
        {
          tag: 'Task Management',
          title: 'タスク管理',
          desc: 'プロジェクトごとにタスクを登録・割り当て・期限設定できます。残タスクや完了状況をリアルタイムで可視化し、担当者間の情報共有を促進します。',
          aiNote: 'AIが利用頻度の高い機能を分析し、担当タスクや優先度の高い案件をトップ画面に自動表示します。',
        },
        {
          tag: 'Cost Management',
          title: '工数・原価管理',
          desc: '日々の作業時間を記録・集計し、プロジェクト別のコスト分析を行います。見積もりと実績の乖離を早期に検出し、収益性の改善を支援します。',
          aiNote: 'AIが勤務時間の偏りや残業傾向を検知し、ワークバランスの改善提案を自動で通知します。',
        },
        {
          tag: 'Approval Workflow',
          title: '承認フロー管理',
          desc: '各種申請・承認プロセスを電子化し、業務の効率化と透明性を実現します。権限設定と承認履歴の管理により、内部統制の強化にも対応します。',
          aiNote: 'AIが打刻漏れ・未処理の申請を検知し、対応が必要な項目を信頼度スコア付きで知らせます。',
        },
        {
          tag: 'Dashboard & Report',
          title: 'レポート・ダッシュボード',
          desc: 'プロジェクトの進捗・工数・コストをリアルタイムで可視化します。経営判断に必要なデータをダッシュボードから即座に取得できます。',
          aiNote: '出勤・目標・稼働データの推移をAIがトレンド分析し、将来予測グラフとして自動生成します。',
        },
        {
          tag: 'HR & Payroll',
          title: '人事・給与管理',
          desc: '社員情報・休暇残・給与明細を一元管理します。休暇申請の承認や有給付与、給与計算までを一貫してデジタル化します。',
          aiNote: '評価データをAIがスコアリングし、次のグレードまでの改善ポイントとアクションプランを自動提示します。',
        },
      ],
      featureIcons: [
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 4v16M4 12h16M14 6l6 6-6 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="1" stroke="currentColor" stroke-width="1.6"/><path d="M7 9h10M7 13h7M7 17h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" stroke-width="1.3" opacity="0.35"/></svg>',
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M4 19V10M11 19V5M18 19v-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3 19h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="8" r="3.2" stroke="currentColor" stroke-width="1.6"/><path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M16 9h4M16 13h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
      ],
      grades: ['D', 'C', 'B', 'B+', 'A', 'A+', 'S', 'S+'],
      aiInsights: [
        {
          emoji: '🔍',
          title: '打刻漏れの疑い（平日データ未登録）',
          level: 'warn',
          levelLabel: '注意',
          desc: '今月分の平日勤怠に未入力が検出されました。打刻忘れがあれば早めの修正が必要です。未入力は欠勤扱いになる場合があります。',
          conf: 89,
        },
        {
          emoji: '📉',
          title: '出勤日数が減少トレンドです',
          level: 'warn',
          levelLabel: '注意',
          desc: '直近3か月の平均出勤日数が減少傾向にあります。体調・業務環境に問題がないか確認をおすすめします。',
          conf: 88,
        },
        {
          emoji: '✅',
          title: '今月の残業はゼロです',
          level: 'good',
          levelLabel: '良好',
          desc: '直近の残業実績なし。ワークライフバランスが保てています。このペースを維持しましょう。',
          conf: 72,
        },
        {
          emoji: '📚',
          title: 'スキルアップコンテンツを活用しましょう',
          level: 'info',
          levelLabel: '情報',
          desc: '目標達成率の向上余地があります。教育コンテンツの活用で改善が期待できます。',
          conf: 68,
        },
      ],
      aiCategories: [
        { name: '出勤・時間管理', score: 22, max: 28, pct: 78 },
        { name: '目標管理', score: 24, max: 32, pct: 75 },
        { name: '業務品質', score: 12, max: 16, pct: 75 },
        { name: '残業管理', score: 10, max: 12, pct: 83 },
        { name: '休暇管理', score: 10, max: 12, pct: 83 },
      ],
      aiActions: [
        {
          title: 'GPS打刻で出勤を記録する',
          priority: 'high',
          priorityLabel: '高',
          desc: 'GPS認証による打刻を習慣化することで、出勤・時間管理の評価精度が向上します。',
        },
        {
          title: '直近3ヶ月以内の目標を登録する',
          priority: 'high',
          priorityLabel: '高',
          desc: '目標管理は評価全体の3割超を占める最重要項目です。今期の個人目標を登録しましょう。',
        },
        {
          title: '日報を毎日提出する',
          priority: 'high',
          priorityLabel: '高',
          desc: '日報提出率を高めることで、業務品質スコアの改善につながります。',
        },
        {
          title: '有休申請を計画的に行う',
          priority: 'low',
          priorityLabel: '低',
          desc: '計画的な有休申請・承認の積み重ねが、休暇管理スコアの底上げにつながります。',
        },
      ],
      intItems: [
        { title: 'リアルタイム可視化', desc: 'タスク・工数・承認状況をダッシュボードでいつでも確認でき、経営判断の精度を高めます。' },
        { title: 'トレーサビリティ', desc: '操作・変更・承認の履歴を完全に記録し、業務フローの透明性を確保します。' },
        { title: 'AIによる予測・改善提案', desc: '蓄積データをAIが分析し、異常検知・将来予測・改善アクションまで自動で提示します。' },
        { title: '内部統制の強化', desc: '権限管理と承認履歴の記録により、監査・報告対応に必要な証跡を整備できます。' },
      ],
      workflowSteps: [
        { title: 'タスク登録', desc: '案件・担当者・期限を登録し、業務内容を標準化します。' },
        { title: '進捗記録', desc: '日々の作業状況・工数をデジタルで入力します。' },
        { title: '承認申請', desc: '完了報告や各種申請を電子承認フローで処理します。' },
        { title: '状況確認', desc: '進捗・承認状況をダッシュボードでリアルタイムに確認します。', ai: true },
        { title: 'レポート活用', desc: '蓄積データを分析し、次の意思決定・改善に活用します。', ai: true },
      ],
      benefits: [
        {
          title: '業務効率化',
          desc: 'ExcelやメールなどへのID分散情報を集約し、確認・承認・報告にかかる時間を大幅に削減します。'
        },
        {
          title: '原価・品質管理の向上',
          desc: '工数の抜け漏れを防ぎ、プロジェクトごとのコストと品質を正確に管理することで収益性の安定化を支援します。'
        },
        {
          title: '内部統制・透明性の強化',
          desc: '履歴管理・承認フロー・権限設定により、監査や報告審査に必要な情報をいつでも整理・提示できます。'
        },
      ],
    };
  },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
    openComingSoon() {
      this.showComingSoon = true;
    },
    goToLogin() {
      this.$router.push('/NokoriLogin');
    },
    closeComingSoon() {
      this.showComingSoon = false;
    },
    initReveal() {
      const targets = this.$el.querySelectorAll('[data-reveal]');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target;
              const delay = el.style.getPropertyValue('--delay') || '0ms';
              setTimeout(() => {
                el.classList.add('is-visible');
              }, parseInt(delay));
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      targets.forEach((el) => observer.observe(el));
      this._observer = observer;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => this.initReveal());
  },
  beforeUnmount() {
    if (this._observer) this._observer.disconnect();
  },
};
</script>

<style scoped>
/* =====================================================
   Scroll Reveal Animations
===================================================== */

/* 基本: 下からフェードイン */
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: var(--delay, 0ms);
}

/* 左からスライドイン */
[data-reveal][data-reveal-dir="left"] {
  transform: translateX(-24px);
}

/* 表示状態 */
[data-reveal].is-visible {
  opacity: 1;
  transform: translate(0, 0);
}

/* =====================================================
   Design tokens
===================================================== */
:root {
  --navy:   #152040;
  --navy2:  #1d2e54;
  --blue:   #0f52a0;
  --blue2:  #1565c0;
  --accent: #d99a3d;
  --text:   #1c2433;
  --sub:    #4e5a6e;
  --border: #d8dde6;
  --bg:     #f5f6f8;
  --white:  #ffffff;
}

/* =====================================================
   Base
===================================================== */
.nokori-page {
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif;
  color: #1c2433;
  background: #ffffff;
  line-height: 1.7;
}

.wrap {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 32px;
}

/* =====================================================
   Section header pattern
===================================================== */
.sec-head {
  margin-bottom: 52px;
}
.sec-head--light .sec-en,
.sec-head--light .sec-title,
.sec-head--light .sec-sub {
  color: #fff;
}
.sec-head--light .sec-en { opacity: 0.6; }
.sec-head--light .sec-sub { opacity: 0.8; }

.sec-en {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2em;
  color: #0f52a0;
  text-transform: uppercase;
  border-left: 3px solid #0f52a0;
  padding-left: 10px;
  margin-bottom: 14px;
}

.sec-title {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 700;
  color: #152040;
  margin: 0 0 14px;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.sec-sub {
  font-size: 14px;
  color: #4e5a6e;
  line-height: 1.85;
  margin: 0;
}

/* =====================================================
   Buttons
===================================================== */
.btn-fill {
  display: inline-block;
  background: #0f52a0;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: 2px solid #0f52a0;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.btn-fill:hover { background: #0d3f7e; border-color: #0d3f7e; }

.btn-ghost {
  display: inline-block;
  background: transparent;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: 2px solid rgba(255,255,255,0.55);
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.18s, background 0.18s;
}
.btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.08); }

.btn-line {
  display: inline-block;
  background: transparent;
  color: #0f52a0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: 2px solid #0f52a0;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.btn-line:hover { background: #0f52a0; color: #fff; }

.btn-accent {
  display: inline-block;
  background: #d99a3d;
  color: #152040;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: 2px solid #d99a3d;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s;
}
.btn-accent:hover { background: #c48a2f; border-color: #c48a2f; }

/* =====================================================
   Hero
===================================================== */
.nokori-hero {
  background: #152040;
  color: #fff;
  padding: 108px 0 96px;
  position: relative;
  overflow: hidden;
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.9), transparent 85%);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
}

.hero-accent {
  position: relative;
  color: #ffd08a;
  white-space: nowrap;
}
.hero-accent::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2px;
  height: 8px;
  background: rgba(217,154,61,0.28);
  z-index: -1;
}

.hero-eyebrow {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero-ai-flag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 700;
  letter-spacing: 0.03em;
  color: #ffd08a;
  background: rgba(217,154,61,0.16);
  border: 1px solid rgba(217,154,61,0.4);
  padding: 6px 14px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(28px, 4vw, 48px);
  font-weight: 700;
  line-height: 1.45;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
}

.hero-lead {
  font-size: 15px;
  color: rgba(255,255,255,0.75);
  line-height: 1.9;
  margin-bottom: 44px;
  max-width: 640px;
}

.hero-cta {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero-stats {
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
  margin-bottom: 32px;
  padding-bottom: 28px;
  border-bottom: 1px solid rgba(255,255,255,0.14);
}
.hero-stat-num {
  font-size: 20px;
  font-weight: 800;
  color: #ffd08a;
  margin: 0 0 6px;
}
.hero-stat-label {
  font-size: 11.5px;
  color: rgba(255,255,255,0.6);
  margin: 0;
  line-height: 1.6;
  max-width: 160px;
}

.hero-checklist {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px 24px;
}
.hero-checklist li {
  font-size: 12.5px;
  color: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero-check-mark {
  color: #ffd08a;
  font-weight: 700;
  flex-shrink: 0;
}

/* --- Hero visual: dashboard mockup --- */
/* --- Hero panel: solution overview card --- */
.hero-panel {
  position: relative;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 24px 54px rgba(0,0,0,0.32);
  margin-top: 24px;
}

.panel-note {
  position: absolute;
  left: 20px;
  top: -18px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #152040;
  color: #fff;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 11.5px;
  line-height: 1.5;
  box-shadow: 0 12px 26px rgba(0,0,0,0.3);
  z-index: 2;
}
.panel-note span {
  font-size: 14px;
  font-weight: 800;
  color: #ffd08a;
  flex-shrink: 0;
}

.panel-inner {
  padding: 34px 30px 28px;
}

.panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaecf0;
}
.panel-eyebrow {
  font-size: 10.5px;
  letter-spacing: 0.1em;
  color: #8891a3;
  text-transform: uppercase;
  margin: 0 0 6px;
}
.panel-heading {
  font-size: 18px;
  font-weight: 700;
  color: #152040;
  margin: 0;
}
.panel-badge {
  flex-shrink: 0;
  background: #eef4fd;
  color: #0f52a0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 5px 12px;
  border-radius: 20px;
}

/* --- Panel mock: dashboard-style illustration --- */
.panel-mock {
  position: relative;
  background: #f7f8fa;
  border: 1px solid #eaecf0;
  border-radius: 8px;
  padding: 16px 18px 20px;
  margin-bottom: 40px;
}

.mock-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}
.mock-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d8dde6;
}
.mock-dot:nth-child(1) { background: #ff8a80; }
.mock-dot:nth-child(2) { background: #ffd08a; }
.mock-dot:nth-child(3) { background: #8ad9a1; }
.mock-toolbar-title {
  margin-left: 8px;
  font-size: 11px;
  font-weight: 600;
  color: #9aa3b5;
  letter-spacing: 0.03em;
}

.mock-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 16px;
}
.mock-stat {
  background: #fff;
  border: 1px solid #eaecf0;
  border-radius: 6px;
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.mock-stat--accent {
  background: #152040;
  border-color: #152040;
}
.mock-stat--accent .mock-stat-num { color: #ffd08a; }
.mock-stat--accent .mock-stat-label { color: rgba(255,255,255,0.6); }
.mock-stat-num {
  font-size: 17px;
  font-weight: 800;
  color: #152040;
  line-height: 1;
}
.mock-stat-label {
  font-size: 10px;
  color: #8891a3;
}

.mock-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.mock-row {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 1px solid #eaecf0;
  border-radius: 6px;
  padding: 10px 12px;
  transition: box-shadow 0.18s, transform 0.18s;
}
.mock-row:hover {
  box-shadow: 0 8px 18px rgba(21,32,64,0.08);
  transform: translateY(-1px);
}
.mock-row-icon {
  flex-shrink: 0;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background: #eef4fd;
  color: #0f52a0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mock-row-icon svg { width: 18px; height: 18px; }
.mock-row-body { flex: 1; min-width: 0; }
.mock-row-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
}
.mock-row-title {
  font-size: 12.5px;
  font-weight: 700;
  color: #152040;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mock-row-status {
  flex-shrink: 0;
  font-size: 9.5px;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 10px;
  letter-spacing: 0.02em;
}
.status-0 { color: #0f52a0; background: #eef4fd; }
.status-1 { color: #b9791f; background: #fbf1de; }
.status-2 { color: #c4562b; background: #fdebe3; }
.status-3 { color: #2f9e5e; background: #e6f6ec; }
.mock-row-bar {
  height: 5px;
  border-radius: 3px;
  background: #eef0f4;
  overflow: hidden;
}
.mock-row-bar-fill {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #0f52a0, #4d8fd6);
}
.mock-row-pct {
  flex-shrink: 0;
  font-size: 11px;
  font-weight: 700;
  color: #adb8c8;
  width: 32px;
  text-align: right;
}

.mock-float {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff;
  border-radius: 10px;
  padding: 10px 14px;
  box-shadow: 0 14px 30px rgba(21,32,64,0.16);
  white-space: nowrap;
  z-index: 3;
}
.mock-float--check {
  top: -18px;
  right: -14px;
  animation: mockFloatY 4.2s ease-in-out infinite;
}
.mock-float--ai {
  bottom: -18px;
  left: -14px;
  animation: mockFloatY 4.2s ease-in-out infinite 0.8s;
}
@keyframes mockFloatY {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
.mock-float-icon {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #e6f6ec;
  color: #2f9e5e;
  font-size: 13px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mock-float-icon--ai {
  background: linear-gradient(150deg, #d99a3d, #b9791f);
  color: #fff;
}
.mock-float-pulse {
  position: absolute;
  left: 8px;
  top: 8px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(217,154,61,0.35);
  animation: mockPulseRing 2s ease-out infinite;
}
@keyframes mockPulseRing {
  0% { transform: scale(0.9); opacity: 0.8; }
  100% { transform: scale(1.7); opacity: 0; }
}
.mock-float-title {
  font-size: 11.5px;
  font-weight: 700;
  color: #152040;
  margin: 0;
}
.mock-float-sub {
  font-size: 10px;
  color: #8891a3;
  margin: 2px 0 0;
}

/* =====================================================
   Overview Section
===================================================== */
.overview-section {
  background: #f5f6f8;
  padding: 88px 0;
}

.ov-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #d8dde6;
}

.ov-item {
  padding: 36px 28px;
  border-right: 1px solid #d8dde6;
  background: #fff;
  transition: background 0.15s;
  position: relative;
  overflow: hidden;
}
.ov-item:last-child { border-right: none; }
.ov-item:hover { background: #f0f4fa; }

.ov-bg-num {
  position: absolute;
  right: 10px;
  bottom: -18px;
  font-size: 72px;
  font-weight: 800;
  color: #152040;
  opacity: 0.04;
  line-height: 1;
  pointer-events: none;
  font-family: Georgia, 'Times New Roman', serif;
}

.ov-icon {
  width: 46px;
  height: 46px;
  border-radius: 8px;
  background: #eef4fd;
  color: #0f52a0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  position: relative;
}

.ov-name {
  font-size: 16px;
  font-weight: 700;
  color: #152040;
  margin: 0 0 10px;
  position: relative;
}

.ov-desc {
  font-size: 13px;
  color: #4e5a6e;
  line-height: 1.8;
  margin: 0;
  position: relative;
}

.ov-ai-note {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 16px;
  padding-top: 14px;
  border-top: 1px dashed #e2e6ee;
  position: relative;
}
.ov-ai-badge {
  flex-shrink: 0;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #b9791f;
  background: #fbf1de;
  border: 1px solid #eaceA0;
  padding: 2px 7px;
  margin-top: 1px;
}
.ov-ai-note p {
  font-size: 11.5px;
  color: #7a8496;
  line-height: 1.65;
  margin: 0;
}

.ov-flow {
  margin-top: 28px;
  border: 1px solid #d8dde6;
  background: #fff;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}
.ov-flow-label {
  font-size: 12px;
  font-weight: 700;
  color: #152040;
  margin: 0;
  flex-shrink: 0;
  padding-right: 20px;
  border-right: 1px solid #d8dde6;
}
.ov-flow-track {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}
.ov-flow-item {
  font-size: 13px;
  font-weight: 600;
  color: #0f52a0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.ov-flow-arrow {
  color: #adb8c8;
  font-weight: 400;
  margin: 0 2px;
}

/* =====================================================
   Mid Banner
===================================================== */
.mid-banner {
  background: #1d2e54;
  padding: 44px 0;
}

.mid-banner-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
}

.mid-banner-text { flex: 1; min-width: 240px; }

.mid-banner-title {
  color: #fff;
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 8px;
  letter-spacing: 0.02em;
}

.mid-banner-sub {
  color: rgba(255,255,255,0.65);
  font-size: 12.5px;
  margin: 0;
  line-height: 1.7;
}

.mid-banner-btns {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.btn-banner {
  display: inline-block;
  background: #fff;
  color: #1d2e54;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.06em;
  padding: 11px 28px;
  border: 1px solid #fff;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.18s, border-color 0.18s, color 0.18s;
}
.btn-banner:hover { background: transparent; color: #fff; }

.btn-banner--ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.5);
}
.btn-banner--ghost:hover { background: rgba(255,255,255,0.1); border-color: #fff; color: #fff; }

/* =====================================================
   Challenges Section
===================================================== */
.challenges-section {
  background: #fff;
  padding: 88px 0;
}

.ch-table {
  border-top: 1px solid #d8dde6;
}

.ch-row {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 8px 48px;
  padding: 28px 0;
  border-bottom: 1px solid #d8dde6;
  transition: background 0.12s;
}
.ch-row:hover { background: #f8f9fb; }

.ch-left {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  min-width: 280px;
  flex-shrink: 0;
}

.ch-mark {
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0f52a0;
  margin-top: 8px;
  flex-shrink: 0;
}

.ch-left strong {
  font-size: 14px;
  font-weight: 700;
  color: #152040;
  line-height: 1.6;
}

.ch-right {
  font-size: 13px;
  color: #4e5a6e;
  line-height: 1.85;
  margin: 0;
  flex: 1;
}

.ch-ai-fix {
  flex-basis: 100%;
  margin: 4px 0 0 294px;
  font-size: 12px;
  color: #7a8496;
  line-height: 1.7;
  display: flex;
  align-items: flex-start;
  gap: 8px;
}
.ch-ai-badge {
  flex-shrink: 0;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #b9791f;
  background: #fbf1de;
  border: 1px solid #eaceA0;
  padding: 2px 7px;
  margin-top: 1px;
}

/* =====================================================
   Features Section
===================================================== */
.features-section {
  background: #f5f6f8;
  padding: 88px 0;
}


.feat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  background: #d8dde6;
  border: 1px solid #d8dde6;
}

.feat-card {
  background: #fff;
  padding: 40px 36px;
  transition: background 0.15s;
  position: relative;
}
.feat-card:hover { background: #f8fafe; }

.feat-ai-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  padding-top: 18px;
  border-top: 1px dashed #e2e6ee;
}
.feat-ai-badge {
  flex-shrink: 0;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #b9791f;
  background: #fbf1de;
  border: 1px solid #eaceA0;
  padding: 3px 8px;
  margin-top: 1px;
}
.feat-ai-note p {
  font-size: 12px;
  color: #7a8496;
  line-height: 1.7;
  margin: 0;
}

.feat-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.feat-icon {
  width: 46px;
  height: 46px;
  border-radius: 8px;
  background: #eef4fd;
  color: #0f52a0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feat-index {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #adb8c8;
  margin: 0;
}

.feat-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #0f52a0;
  text-transform: uppercase;
  border: 1px solid #ccddf5;
  padding: 3px 10px;
  margin-bottom: 16px;
  background: #eef4fd;
}

.feat-title {
  font-size: 18px;
  font-weight: 700;
  color: #152040;
  margin: 0 0 12px;
}

.feat-desc {
  font-size: 13px;
  color: #4e5a6e;
  line-height: 1.85;
  margin: 0;
}

/* =====================================================
   AI Engine Section
===================================================== */
.ai-section {
  background: #0d1730;
  padding: 88px 0;
  position: relative;
  overflow: hidden;
}
.ai-section::before {
  content: '';
  position: absolute;
  top: -120px;
  right: -80px;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(217,154,61,0.16), transparent 70%);
  pointer-events: none;
}

.ai-head { max-width: 720px; margin-bottom: 48px; position: relative; z-index: 1; }

.ai-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #ffd08a;
  border: 1px solid rgba(217,154,61,0.4);
  background: rgba(217,154,61,0.08);
  padding: 5px 14px;
  margin-bottom: 18px;
}

.ai-title { color: #fff; }
.ai-sub { color: rgba(255,255,255,0.62); }

.ai-showcase {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 28px;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;
}

.ai-score-card {
  background: #152040;
  border: 1px solid rgba(255,255,255,0.1);
  padding: 30px 26px;
  display: flex;
  flex-direction: column;
}

.ai-score-label {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  margin: 0 0 12px;
  letter-spacing: 0.04em;
}

.ai-score-main {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 22px;
}
.ai-score-num {
  font-size: 46px;
  font-weight: 800;
  color: #ffd08a;
  line-height: 1;
}
.ai-score-den {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
}

.ai-grade-track {
  display: flex;
  gap: 4px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}
.ai-grade-dot {
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,0.35);
  border: 1px solid rgba(255,255,255,0.15);
  padding: 4px 7px;
}
.ai-grade-dot.is-current {
  color: #0d1730;
  background: #ffd08a;
  border-color: #ffd08a;
}

.ai-score-note {
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  margin: 0;
}
.ai-score-note strong { color: #ffd08a; }

.ai-insight-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.08);
}

.ai-insight {
  background: #101c3c;
  padding: 18px 22px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.ai-insight-emoji { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
.ai-insight-body { flex: 1; }

.ai-insight-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
  flex-wrap: wrap;
}

.ai-insight-title {
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.ai-insight-tag {
  font-size: 10px;
  font-weight: 700;
  padding: 2px 9px;
  letter-spacing: 0.03em;
}
.tag-warn { color: #ffb066; background: rgba(255,176,102,0.12); }
.tag-good { color: #7fd99a; background: rgba(127,217,154,0.12); }
.tag-info { color: #8ab4f8; background: rgba(138,180,248,0.12); }

.ai-insight-desc {
  font-size: 12.5px;
  color: rgba(255,255,255,0.6);
  line-height: 1.75;
  margin: 0 0 8px;
}

.ai-insight-conf {
  font-size: 11px;
  color: rgba(255,255,255,0.35);
}

.ai-category-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  margin-bottom: 48px;
  position: relative;
  z-index: 1;
}

.ai-cat-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 10px;
}
.ai-cat-name {
  font-size: 12px;
  color: rgba(255,255,255,0.65);
  margin: 0;
}
.ai-cat-score {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  margin: 0;
}
.ai-cat-score span {
  font-size: 10px;
  font-weight: 400;
  color: rgba(255,255,255,0.4);
}

.ai-cat-bar {
  height: 4px;
  background: rgba(255,255,255,0.1);
  overflow: hidden;
}
.ai-cat-bar-fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #d99a3d, #ffd08a);
}

.ai-action-block {
  position: relative;
  z-index: 1;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 40px;
}

.ai-action-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 22px;
}

.ai-action-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.08);
}

.ai-action {
  background: #101c3c;
  padding: 22px 20px;
}

.ai-action-priority {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 9px;
  margin-bottom: 12px;
}
.pri-high { color: #ff9d9d; background: rgba(255,157,157,0.12); }
.pri-low { color: #9fb4d9; background: rgba(159,180,217,0.12); }

.ai-action-name {
  font-size: 13.5px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 8px;
  line-height: 1.5;
}

.ai-action-desc {
  font-size: 12px;
  color: rgba(255,255,255,0.55);
  line-height: 1.7;
  margin: 0;
}

/* =====================================================
   Strengths Section
===================================================== */
.strength-section {
  background: #152040;
  padding: 88px 0;
}

.str-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.1);
}

.str-card {
  background: #1d2e54;
  padding: 40px 28px;
  transition: background 0.15s;
}
.str-card:hover { background: #243664; }

.str-num {
  font-size: 28px;
  font-weight: 800;
  color: rgba(255,255,255,0.12);
  line-height: 1;
  margin-bottom: 16px;
}

.str-name {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 12px;
}

.str-desc {
  font-size: 13px;
  color: rgba(255,255,255,0.6);
  line-height: 1.8;
  margin: 0;
}

/* =====================================================
   Workflow Section
===================================================== */
.workflow-section {
  background: #fff;
  padding: 88px 0;
}

.wf-flow {
  display: flex;
  align-items: stretch;
  gap: 0;
  flex-wrap: wrap;
}

.wf-item {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
}

.wf-step {
  background: #f5f6f8;
  border: 1px solid #d8dde6;
  padding: 26px 20px 24px;
  text-align: center;
  flex: 1;
  min-width: 150px;
}

.wf-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #0f52a0;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 14px;
}

.wf-ai-badge {
  display: inline-block;
  font-size: 9.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #b9791f;
  background: #fbf1de;
  border: 1px solid #eaceA0;
  padding: 2px 7px;
  margin: 0 0 8px 8px;
  vertical-align: middle;
}

.wf-title {
  font-size: 14px;
  font-weight: 700;
  color: #152040;
  margin: 0 0 8px;
}

.wf-desc {
  font-size: 12px;
  color: #4e5a6e;
  line-height: 1.7;
  margin: 0;
}

.wf-arrow {
  flex-shrink: 0;
  width: 32px;
  text-align: center;
  color: #adb8c8;
  font-size: 18px;
  font-weight: 300;
}

/* =====================================================
   Benefits Section
===================================================== */
.benefits-section {
  background: #f5f6f8;
  padding: 88px 0;
}

.ben-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: #d8dde6;
  border: 1px solid #d8dde6;
}

.ben-card {
  background: #fff;
  padding: 44px 36px;
}

.ben-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #eaecf0;
}

.ben-num {
  font-size: 24px;
  font-weight: 800;
  color: #cfd7e6;
  line-height: 1;
}

.ben-title {
  font-size: 16px;
  font-weight: 700;
  color: #152040;
  margin: 0;
}

.ben-desc {
  font-size: 13px;
  color: #4e5a6e;
  line-height: 1.85;
  margin: 0;
}

/* =====================================================
   Contact Section
===================================================== */
.contact-section {
  background: #fff;
  padding: 96px 0;
  border-top: 3px solid #152040;
}

.contact-wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 60px;
  flex-wrap: wrap;
}

.contact-text {
  flex: 1;
  min-width: 260px;
}
.contact-text .sec-title { margin-bottom: 12px; }

.contact-btns {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
  min-width: 200px;
  justify-content: center;
  padding-top: 8px;
}

/* =====================================================
   Responsive
===================================================== */
@media (max-width: 960px) {
  .ov-grid { grid-template-columns: repeat(2, 1fr); }
  .ov-item { border-right: none; border-bottom: 1px solid #d8dde6; }
  .ov-item:nth-child(odd) { border-right: 1px solid #d8dde6; }
  .ov-item:last-child { border-right: none; border-bottom: none; }

  .str-grid { grid-template-columns: repeat(2, 1fr); }

  .wf-flow { flex-direction: column; }
  .wf-item { flex-direction: column; }
  .wf-arrow { transform: rotate(90deg); margin: 4px 0; }

  .ai-showcase { grid-template-columns: 1fr; }
  .ai-category-grid { grid-template-columns: repeat(3, 1fr); }
  .ai-action-list { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .wrap { padding: 0 20px; }
  .nokori-hero { padding: 72px 0 64px; }
  .hero-lead .br-pc { display: none; }
  .hero-inner { grid-template-columns: 1fr; gap: 44px; }
  .hero-panel { margin-top: 40px; }
  .panel-mock { margin-bottom: 46px; }
  .mock-stats { grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .mock-float { padding: 8px 12px; }
  .mock-float-title { font-size: 10.5px; }
  .mock-float-sub { font-size: 9px; }
  .hero-stats { gap: 20px; }
  .hero-checklist { grid-template-columns: 1fr; }

  .ov-grid { grid-template-columns: 1fr; }
  .ov-item { border-right: none !important; border-bottom: 1px solid #d8dde6; }
  .ov-item:last-child { border-bottom: none; }

  .ch-row { flex-direction: column; gap: 10px; }
  .ch-left { min-width: auto; }
  .ch-ai-fix { margin-left: 0; }

  .feat-grid { grid-template-columns: 1fr; }

  .str-grid { grid-template-columns: 1fr 1fr; }

  .ben-grid { grid-template-columns: 1fr; }

  .contact-wrap { flex-direction: column; gap: 36px; }
  .contact-btns { flex-direction: row; }

  .mid-banner-inner { flex-direction: column; align-items: flex-start; }

  .ai-category-grid { grid-template-columns: repeat(2, 1fr); }
  .ai-action-list { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 24px; }
  .sec-title { font-size: 20px; }
  .str-grid { grid-template-columns: 1fr; }
  .contact-btns { flex-direction: column; }
  .ai-category-grid { grid-template-columns: 1fr 1fr; }
}

/* =====================================================
   Coming Soon Modal
===================================================== */
.cs-overlay {
  position: fixed;
  inset: 0;
  background: rgba(10, 16, 32, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
}

.cs-modal {
  position: relative;
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 420px;
  padding: 44px 36px 36px;
  text-align: center;
  box-shadow: 0 30px 70px rgba(0,0,0,0.3);
}

.cs-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: #9aa3b5;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.15s;
}
.cs-close:hover { color: #4e5a6e; }

.cs-icon {
  width: 68px;
  height: 68px;
  margin: 0 auto 20px;
  border-radius: 50%;
  background: #e9edfb;
  color: #3454d1;
  font-size: 26px;
  font-weight: 800;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cs-title {
  font-size: 20px;
  font-weight: 800;
  color: #152040;
  margin: 0 0 18px;
}

.cs-desc {
  font-size: 14px;
  color: #4e5a6e;
  line-height: 1.8;
  margin: 0 0 24px;
}

.cs-date {
  background: #eef2fd;
  color: #234ed9;
  font-weight: 800;
  font-size: 15px;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 22px;
}

.cs-note {
  font-size: 12.5px;
  color: #8891a3;
  line-height: 1.8;
  margin: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
