<template>
  <div class="nokori-page">

    <!-- ① Hero Section -->
    <section class="nokori-hero">
      <div class="hero-grid-pattern"></div>
      <div class="hero-scrim"></div>
      <div class="wrap hero-inner">
        <div class="hero-copy">
          <p class="hero-eyebrow" data-reveal>Solutions&nbsp;&nbsp;/&nbsp;&nbsp;ソリューション</p>
          <span class="hero-ai-flag" data-reveal style="--delay: 40ms"><svg class="ai-mark" width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg> AI搭載 業務管理パッケージ</span>
          <h1 class="hero-title" data-reveal style="--delay: 100ms">
            属人化・紙運用から、<br>
            チームで動く<span class="hero-accent">統合人事管理</span>へ。
          </h1>
          <p class="hero-lead" data-reveal style="--delay: 200ms">
            NOKORIは、勤怠・休暇・給与・目標評価・タスクをひとつのクラウドで一元管理するオールインワンHRプラットフォームです。<br class="br-pc">
            GPS打刻とAIによる自動評価で、管理部門の業務負担を大幅に軽減します。
          </p>

          <div class="hero-stats" data-reveal style="--delay: 240ms">
            <div class="hero-stat">
              <p class="hero-stat-num">21機能</p>
              <p class="hero-stat-label">勤怠・課題・給与・評価など</p>
            </div>
            <div class="hero-stat">
              <p class="hero-stat-num">5言語</p>
              <p class="hero-stat-label">日・韓・英・越・中に対応</p>
            </div>
            <div class="hero-stat">
              <p class="hero-stat-num">GPS</p>
              <p class="hero-stat-label">位置情報で不正打刻を防止</p>
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
            <transition name="note-fade" mode="out-in">
              <div :key="panelNoteIndex">
                <span>{{ String(panelNoteIndex + 1).padStart(2, '0') }}</span>{{ panelNotes[panelNoteIndex] }}
              </div>
            </transition>
          </div>
          <div class="panel-inner">
            <div class="panel-header">
              <div>
                <p class="panel-eyebrow">NOKORI Solution Overview</p>
                <h3 class="panel-heading">オールインワンHR管理ソリューション</h3>
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
                  <span class="mock-stat-num">{{ heroStats.tasks }}</span>
                  <span class="mock-stat-label">進行中タスク</span>
                </div>
                <div class="mock-stat">
                  <span class="mock-stat-num">{{ heroStats.pending }}</span>
                  <span class="mock-stat-label">承認待ち</span>
                </div>
                <div class="mock-stat mock-stat--accent">
                  <span class="mock-stat-num">{{ heroStats.onTimeRate }}%</span>
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
                  <p class="mock-float-sub">休暇申請 #L-1042</p>
                </div>
              </div>
              <div class="mock-float mock-float--ai">
                <span class="mock-float-pulse"></span>
                <span class="mock-float-icon mock-float-icon--ai"><svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span>
                <transition name="notice-fade" mode="out-in">
                  <div :key="heroNoticeIndex">
                    <p class="mock-float-title">{{ heroNoticePool[heroNoticeIndex].title }}</p>
                    <p class="mock-float-sub">{{ heroNoticePool[heroNoticeIndex].sub }}</p>
                  </div>
                </transition>
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
          <p class="sec-sub">勤怠・休暇・給与・目標評価の4領域を統合し、HR業務の全工程をカバーします。</p>
        </div>
        <div class="ov-grid">
          <div class="ov-item" v-for="(ov, i) in overviews" :key="ov.num"
               data-reveal :style="{ '--delay': i * 80 + 'ms' }">
            <div class="ov-image" v-html="overviewImages[i]"></div>
            <div class="ov-icon" v-html="overviewIcons[i]"></div>
            <h3 class="ov-name">{{ ov.title }}</h3>
            <p class="ov-desc">{{ ov.desc }}</p>
            <div class="ov-ai-note">
              <span class="ov-ai-badge"><svg class="ai-mark" width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg> AI</span>
              <p>{{ ov.aiNote }}</p>
            </div>
            <span class="ov-bg-num">{{ ov.num }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ③ CTA Banner -->
    <section class="mid-banner">
      <div class="mid-banner-deco"></div>
      <div class="wrap mid-banner-inner" data-reveal>
        <div class="mid-banner-text">
          <span class="mid-banner-flag"><svg class="ai-mark" width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg> READY TO START</span>
          <p class="mid-banner-title">勤怠・休暇・給与・評価業務を、<br class="br-sp">ひとつの流れに。</p>
          <p class="mid-banner-sub">まずは現在のHR管理方法をもとに、NOKORIでどこまで効率化できるか確認できます。</p>
        </div>
        <div class="mid-banner-btns">
          <a class="btn-banner" @click.prevent="goToLogin">NOKORIを見る</a>
          <a class="btn-banner btn-banner--ghost" @click.prevent="scrollTo('features')">機能を見る</a>
        </div>
      </div>
    </section>

    <!-- ④ Challenges & Strengths Section (merged) -->
    <section class="challenges-section" id="challenges">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">CHALLENGES &amp; SOLUTIONS</p>
          <h2 class="sec-title">こんな課題を、NOKORIはこう解決します</h2>
          <p class="sec-sub">属人化した勤怠・休暇・給与・評価の課題を、業務領域ごとに具体的な機能で解決します。</p>
        </div>
        <div class="cs-grid">
          <div class="cs-card" v-for="(cs, i) in challengeSolutions" :key="cs.tag"
               data-reveal :style="{ '--delay': i * 90 + 'ms' }">
            <div class="cs-image" v-html="challengeImages[i]"></div>
            <div class="cs-body">
              <span class="cs-tag">{{ cs.tag }}</span>
              <div class="cs-problem">
                <span class="cs-label cs-label--problem">現状の課題</span>
                <strong class="cs-problem-title">{{ cs.problemTitle }}</strong>
                <p class="cs-problem-desc">{{ cs.problemDesc }}</p>
              </div>
              <div class="cs-solution">
                <span class="cs-label cs-label--solution"><svg class="ai-mark" width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>NOKORIの解決策</span>
                <strong class="cs-solution-title">{{ cs.solutionTitle }}</strong>
                <p class="cs-solution-desc">{{ cs.solutionDesc }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="cs-extra-head" data-reveal>
          <h3 class="cs-extra-title">さらに、NOKORIならではの強み</h3>
        </div>
        <div class="cs-extra-grid">
          <div class="cs-extra-card" v-for="(item, i) in extraStrengths" :key="item.title"
               data-reveal :style="{ '--delay': i * 80 + 'ms' }">
            <div class="cs-extra-icon" v-html="extraStrengthIcons[i]"></div>
            <h4 class="cs-extra-name">{{ item.title }}</h4>
            <p class="cs-extra-desc">{{ item.desc }}</p>
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
          <p class="sec-sub">勤怠・休暇・給与・目標評価・タスク・日報まで、中小企業のHR業務に必要な機能を網羅しています。</p>
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
              <span class="feat-ai-badge"><svg class="ai-mark" width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg> AI</span>
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
          <span class="ai-badge"><svg class="ai-mark" width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg> AI ENGINE</span>
          <h2 class="sec-title ai-title">蓄積データを分析し、<br>次の一手を提案するAIエンジン</h2>
          <p class="sec-sub ai-sub">勤怠・目標・休暇・給与データをリアルタイムに分析し、パターン検知・将来予測・改善提案までを自動で行います。</p>
        </div>

        <div class="ai-showcase">
          <!-- スコアカード -->
          <div class="ai-score-card" data-reveal style="--delay: 100ms">
            <p class="ai-score-label">
              AI 半期評価予測
              <span class="ai-live-dot"></span>
            </p>
            <div class="ai-score-main">
              <span class="ai-score-num">{{ aiScore }}</span>
              <span class="ai-score-den">/ 100点</span>
            </div>
            <div class="ai-grade-track">
              <span v-for="g in grades" :key="g" :class="['ai-grade-dot', { 'is-current': g === currentGrade }]">{{ g }}</span>
            </div>
            <p class="ai-score-note" v-if="nextGradeLabel">グレード <strong>{{ nextGradeLabel }}</strong> まであと {{ nextGradeGap }}点</p>
            <p class="ai-score-note" v-else>最高グレード <strong>S+</strong> を達成中です</p>
          </div>

          <!-- インサイトリスト -->
          <transition-group name="insight-swap" tag="div" class="ai-insight-list" appear>
            <div class="ai-insight" v-for="(ins, i) in aiInsights" :key="ins.title"
                 :style="{ '--delay': 120 + i * 60 + 'ms' }">
              <span :class="['ai-insight-icon', 'icon-' + ins.level]" v-html="ins.icon"></span>
              <div class="ai-insight-body">
                <div class="ai-insight-top">
                  <p class="ai-insight-title">{{ ins.title }}</p>
                  <span :class="['ai-insight-tag', 'tag-' + ins.level]">{{ ins.levelLabel }}</span>
                </div>
                <p class="ai-insight-desc">{{ ins.desc }}</p>
                <span class="ai-insight-conf">AI信頼度 {{ ins.conf }}%</span>
              </div>
            </div>
          </transition-group>
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

    <!-- ⑦ Workflow Section -->
    <section class="workflow-section" id="workflow">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">WORKFLOW</p>
          <h2 class="sec-title">登録から活用まで、迷わない運用フロー</h2>
          <p class="sec-sub">日々の勤怠・休暇申請から評価・レポート活用まで、現場の流れに沿って確認できます。</p>
        </div>
        <div class="wf-flow">
          <div class="wf-item" v-for="(step, i) in workflowSteps" :key="step.title">
            <div class="wf-step"
                 data-reveal :style="{ '--delay': i * 90 + 'ms' }">
              <span class="wf-num">{{ i + 1 }}</span>
              <span class="wf-ai-badge" v-if="step.ai"><svg class="ai-mark" width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg> AI</span>
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

    <!-- ⑧-2 Before / After Section -->
    <section class="compare-section" id="compare">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">BEFORE / AFTER</p>
          <h2 class="sec-title">NOKORI導入による変化</h2>
          <p class="sec-sub">分散した勤怠・休暇・給与情報と属人化した評価業務を、NOKORIでひとつの仕組みに整理します。</p>
        </div>
        <div class="compare-grid">
          <div class="compare-col compare-col--before" data-reveal>
            <p class="compare-label">導入前</p>
            <ul class="compare-list">
              <li v-for="item in beforeItems" :key="item">
                <span class="compare-mark compare-mark--before">✕</span>{{ item }}
              </li>
            </ul>
          </div>
          <div class="compare-arrow" data-reveal>→</div>
          <div class="compare-col compare-col--after" data-reveal style="--delay: 100ms">
            <p class="compare-label">導入後</p>
            <ul class="compare-list">
              <li v-for="item in afterItems" :key="item">
                <span class="compare-mark compare-mark--after">✓</span>{{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ⑧-25 Pricing Section -->
    <section class="pricing-section" id="pricing">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">PRICING</p>
          <h2 class="sec-title">料金プラン</h2>
          <p class="sec-sub">必要な業務に合わせてサービスを選択できます。各サービスは1カ月ごとの定期決済でご利用いただけます。人数課金ではない定額制のため、他社HRシステムと比較してもコストを抑えて導入いただけます。</p>
        </div>

        <div class="pr-campaign" data-reveal>
          <span class="pr-campaign-badge"> リリース記念キャンペーン</span>
          <p class="pr-campaign-text">2027年3月31日までのお申し込みで、ご契約開始から1年間、月額料金を30％割引いたします。</p>
        </div>

        <div class="pr-grid">
          <div class="pr-card" :class="{ 'pr-card--main': plan.highlight }"
               v-for="(plan, i) in pricingPlans" :key="plan.name"
               data-reveal :style="{ '--delay': i * 90 + 'ms' }">
            <span class="pr-plan-tag" v-if="plan.tag">{{ plan.tag }}</span>
            <h3 class="pr-plan-name">{{ plan.name }}</h3>
            <p class="pr-plan-desc">{{ plan.desc }}</p>
            <ul class="pr-feature-list">
              <li v-for="f in plan.features" :key="f">{{ f }}</li>
            </ul>
            <p class="pr-coming" v-if="plan.coming">{{ plan.coming }}</p>
            <div class="pr-price-box">
              <p class="pr-price-regular">通常価格 <s>{{ plan.regular.toLocaleString() }}円</s></p>
              <p class="pr-price-label">リリース記念価格</p>
              <p class="pr-price-main"><span class="pr-price-num">{{ plan.campaign.toLocaleString() }}</span><span class="pr-price-unit">円／月</span></p>
              <p class="pr-price-tax">税込{{ plan.taxed.toLocaleString() }}円</p>
            </div>
          </div>
        </div>

        <div class="pr-common" data-reveal>
          <h3 class="pr-common-title">全プラン共通</h3>
          <div class="pr-common-grid">
            <div class="pr-common-item">
              <p class="pr-common-label">初期費用</p>
              <p class="pr-common-value">0円</p>
            </div>
            <div class="pr-common-item">
              <p class="pr-common-label">基本ユーザー</p>
              <p class="pr-common-value">5名まで</p>
            </div>
            <div class="pr-common-item">
              <p class="pr-common-label">契約単位</p>
              <p class="pr-common-value">1か月</p>
            </div>
          </div>
        </div>

        <div class="pr-compare-cta" data-reveal>
          <p class="pr-compare-title">他社サービスとの違いを確認</p>
          <p class="pr-compare-sub">機能、初期費用、月額利用料をまとめて比較できます。</p>
          <button class="pr-compare-link" @click="goToCompare">他社サービスとの機能・料金比較を見る <span>›</span></button>
        </div>

        <ul class="pr-notes">
          <li>※表示価格は税別です。</li>
          <li>※2027年3月31日までに新規申し込みを完了した場合、有料利用開始月から12か月間リリース記念価格を適用します。</li>
          <li>※13か月目以降は通常価格へ移行します。</li>
          <li>※追加ユーザー、追加ストレージ、データ移行、個別支援およびカスタマイズには別途費用が発生します。</li>
        </ul>
      </div>
    </section>

    <!-- ⑧-3 FAQ Section -->
    <section class="faq-section" id="faq">
      <div class="wrap">
        <div class="sec-head" data-reveal>
          <p class="sec-en">FAQ</p>
          <h2 class="sec-title">よくあるご質問</h2>
          <p class="sec-sub">NOKORIの機能・導入方法・運用についてよくいただくご質問をご紹介します。</p>
        </div>
        <div class="faq-list">
          <div class="faq-item" v-for="(faq, i) in paginatedFaqs" :key="faq.q"
               :class="{ 'is-open': openFaqIndex === faq.originalIndex }"
               :style="{ '--delay': i * 60 + 'ms' }">
            <button class="faq-question" @click="toggleFaq(faq.originalIndex)">
              <span class="faq-q-mark">Q</span>
              <span class="faq-q-text">{{ faq.q }}</span>
              <span class="faq-toggle-icon">{{ openFaqIndex === faq.originalIndex ? '−' : '+' }}</span>
            </button>
            <transition
              name="faq-collapse"
              @enter="onFaqEnter"
              @after-enter="onFaqAfterEnter"
              @leave="onFaqLeave"
            >
              <div class="faq-answer" v-if="openFaqIndex === faq.originalIndex">
                <span class="faq-a-mark">A</span>
                <p>{{ faq.a }}</p>
              </div>
            </transition>
          </div>
        </div>
        <div class="faq-pagination" v-if="totalFaqPages > 1">
          <button class="faq-page-arrow" @click="prevFaqPage" :disabled="faqPage === 1" aria-label="前のページ">‹</button>
          <button
            v-for="n in faqPageNumbers"
            :key="n"
            class="faq-page-btn"
            :class="{ 'is-active': faqPage === n }"
            @click="goToFaqPage(n)"
          >{{ n }}</button>
          <button class="faq-page-arrow" @click="nextFaqPage" :disabled="faqPage === totalFaqPages" aria-label="次のページ">›</button>
          <span class="faq-page-indicator">{{ faqPage }} / {{ totalFaqPages }}ページ（全{{ faqs.length }}件）</span>
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
          <div class="cs-date">11月1日より公開予定です。</div>
          <p class="cs-note">ご不便をおかけいたしますが、<br>今しばらくお待ちください。</p>
        </div>
      </div>
    </transition>

    <!-- Support Chat Widget (FAQ Q&A) -->
    <div class="chatbot-widget">
      <transition name="chat-panel-fade">
        <div class="chatbot-panel" v-if="chatOpen">
          <div class="chatbot-header">
            <div class="chatbot-header-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M7.5 9.5h9M7.5 12.5h5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </div>
            <div class="chatbot-header-text">
              <p class="chatbot-title">NOKORI サポートデスク</p>
              <p class="chatbot-sub">導入・機能に関するご質問にお答えします</p>
            </div>
            <button class="chatbot-close" @click="toggleChat" aria-label="閉じる">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
          </div>

          <div class="chatbot-body" ref="chatBody">
            <div
              v-for="(msg, idx) in chatMessages"
              :key="idx"
              class="chat-msg"
              :class="msg.role === 'bot' ? 'chat-msg-bot' : 'chat-msg-user'"
            >
              <div class="chat-bubble">
                <p>{{ msg.text }}</p>
              </div>
            </div>

            <div class="chat-msg chat-msg-bot" v-if="chatThinking">
              <div class="chat-bubble chat-typing">
                <span></span><span></span><span></span>
              </div>
            </div>

            <div class="chat-suggestions" v-if="!chatThinking && chatSuggestions.length">
              <button
                v-for="(s, si) in chatSuggestions"
                :key="si"
                class="chat-suggest-btn"
                @click="sendSuggestion(s)"
              >{{ s }}</button>
            </div>
          </div>

          <form class="chatbot-input-row" @submit.prevent="sendChatMessage">
            <input
              type="text"
              v-model="chatInput"
              placeholder="ご質問を入力してください"
              class="chatbot-input"
            />
            <button type="submit" class="chatbot-send" aria-label="送信">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </button>
          </form>
        </div>
      </transition>

      <button class="chatbot-fab" @click="toggleChat" :class="{ 'is-open': chatOpen }">
        <svg v-if="!chatOpen" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 5.5h16v10.5a1 1 0 0 1-1 1H9l-4.2 3.4a.5.5 0 0 1-.8-.4V6.5a1 1 0 0 1 1-1z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><circle cx="9" cy="10.5" r="1" fill="currentColor"/><circle cx="12.5" cy="10.5" r="1" fill="currentColor"/><circle cx="16" cy="10.5" r="1" fill="currentColor"/></svg>
        <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NokoriPage',
  data() {
    return {
      showComingSoon: false,
      heroChecklist: [
        'GPS打刻による正確な勤怠管理',
        '人事業務のオールインワン管理',
        '多段階の電子承認ワークフロー',
        'AIによる自動評価・日報要約',
      ],
      mockStatus: ['記録中', '承認待ち', '処理済み', '評価中'],
      mockProgress: [82, 64, 47, 91],
      heroStats: { tasks: 128, pending: 7, onTimeRate: 98 },
      heroNoticePool: [
        { title: 'AIが優先タスクを検知', sub: '3件の遅延リスクを通知' },
        { title: '休暇残日数の消化期限が接近', sub: '2名が消化推奨期限に近接' },
        { title: '残業時間の増加傾向を検知', sub: '1名の残業が平均の1.4倍' },
        { title: '月次給与レポートを自動生成', sub: '経営会議用サマリーが完成' },
        { title: '打刻漏れの疑いを検知', sub: '明日までに修正が必要な件数4件' },
        { title: '評価グレード更新を検知', sub: '目標達成率+18%のメンバーあり' },
      ],
      heroNoticeIndex: 0,
      panelNotes: [
        '承認待ち業務の確認時間を削減',
        'GPS打刻で不正・なりすましを防止',
        '休暇残日数をリアルタイムに可視化',
        '給与明細の発行をワンクリックで自動化',
        'AIが評価データを分析し等級を自動算出',
        'チャット・通話・ストレージも標準搭載',
      ],
      panelNoteIndex: 0,
      overviews: [
        { num: '01', title: '勤怠管理', desc: 'GPSベースの出退勤打刻で、承認済み場所でのみ打刻可能。遅刻・早退・欠勤を自動判定し、月別勤怠を一括管理します。', aiNote: 'AIが打刻漏れや出勤日数の減少トレンドを検知し、早めに通知します。' },
        { num: '02', title: '休暇管理', desc: '有給・半休・時間休暇など多様な申請に対応し、正社員・契約社員で異なる承認ルールを柔軟に設定できます。', aiNote: 'AIが残休暇日数の消化期限を検知し、計画的な取得を提案します。' },
        { num: '03', title: '給与管理', desc: '給与バッチ処理と明細の自動生成、PDF発行、給与ロックによる改ざん防止までを一貫してデジタル化します。', aiNote: 'AIが給与データの異常値・乖離を検知し、確認すべき項目を提示します。' },
        { num: '04', title: '目標・評価管理', desc: '個人別目標の設定から2段階承認、半期評価までを一元管理し、人事評価の透明性を高めます。', aiNote: 'AIが評価データを自動でスコアリングし、改善提案まで生成します。' },
      ],
      overviewIcons: [
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="3" width="18" height="18" rx="1" stroke="currentColor" stroke-width="1.3" opacity="0.35"/></svg>',
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M4 19V10M11 19V5M18 19v-7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M3 19h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="14" rx="1" stroke="currentColor" stroke-width="1.6"/><path d="M8 9h8M8 13h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
        '<svg width="30" height="30" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      ],
      overviewImages: [
        `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="180" fill="#eaf1fd"/>
          <circle cx="160" cy="96" r="58" fill="#0f52a0" opacity="0.08"/>
          <circle cx="160" cy="96" r="34" fill="#0f52a0" opacity="0.12"/>
          <path d="M160 58c-18 0-32 14-32 32 0 24 32 56 32 56s32-32 32-56c0-18-14-32-32-32z" fill="#0f52a0"/>
          <circle cx="160" cy="90" r="12" fill="#fff"/>
          <circle cx="160" cy="90" r="5.5" fill="#0f52a0"/>
          <rect x="118" y="38" width="30" height="30" rx="6" fill="#fff" stroke="#0f52a0" stroke-width="2"/>
          <path d="M126 53l6 6 12-13" stroke="#0f52a0" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="222" cy="128" r="20" fill="#fff" stroke="#0f52a0" stroke-width="2"/>
          <path d="M222 118v11l7 4" stroke="#0f52a0" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="180" fill="#eaf8f1"/>
          <rect x="96" y="46" width="128" height="104" rx="10" fill="#fff" stroke="#1f9d63" stroke-width="2.4"/>
          <rect x="96" y="46" width="128" height="26" rx="10" fill="#1f9d63"/>
          <rect x="114" y="36" width="8" height="20" rx="4" fill="#1f9d63"/>
          <rect x="198" y="36" width="8" height="20" rx="4" fill="#1f9d63"/>
          <rect x="114" y="92" width="22" height="18" rx="3" fill="#cdeedd"/>
          <rect x="146" y="92" width="22" height="18" rx="3" fill="#cdeedd"/>
          <rect x="178" y="92" width="22" height="18" rx="3" fill="#1f9d63"/>
          <path d="M183 101l4 4 8-9" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="114" y="118" width="22" height="18" rx="3" fill="#cdeedd"/>
          <rect x="146" y="118" width="22" height="18" rx="3" fill="#cdeedd"/>
        </svg>`,
        `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="180" fill="#fdf3e3"/>
          <rect x="104" y="40" width="88" height="110" rx="8" fill="#fff" stroke="#c7811a" stroke-width="2.4"/>
          <path d="M122 60h52M122 76h52M122 92h32" stroke="#e7c38b" stroke-width="3" stroke-linecap="round"/>
          <circle cx="226" cy="112" r="34" fill="#f3b84a"/>
          <text x="226" y="122" font-family="Arial, sans-serif" font-size="30" font-weight="700" fill="#fff" text-anchor="middle">¥</text>
          <rect x="104" y="112" width="88" height="38" rx="8" fill="#c7811a" opacity="0.1"/>
          <path d="M116 128l10 10 10-14" stroke="#c7811a" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        `<svg viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="180" fill="#f0edfb"/>
          <rect x="92" y="110" width="22" height="40" rx="3" fill="#8a6fe8"/>
          <rect x="124" y="92" width="22" height="58" rx="3" fill="#8a6fe8" opacity="0.65"/>
          <rect x="156" y="70" width="22" height="80" rx="3" fill="#8a6fe8"/>
          <rect x="188" y="52" width="22" height="98" rx="3" fill="#6c3ce9"/>
          <path d="M92 86l32-20 32 12 40-34" stroke="#6c3ce9" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="196" cy="44" r="8" fill="#fff" stroke="#6c3ce9" stroke-width="2.4"/>
          <path d="M226 38l10 10 16-18" stroke="#6c3ce9" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" transform="translate(0 46)"/>
          <circle cx="250" cy="110" r="22" fill="#fff" stroke="#6c3ce9" stroke-width="2.2"/>
          <path d="M250 98v12l9 6" stroke="#6c3ce9" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
      ],
      challengeSolutions: [
        {
          tag: 'Attendance',
          problemTitle: '勤怠・残業管理が属人化している',
          problemDesc: '紙やExcelでの打刻・残業集計が中心で、入力漏れや不正打刻が発生しやすい状況が続いています。',
          solutionTitle: 'GPSベースのスマート出退勤',
          solutionDesc: '承認済みの場所・半径内でのみ打刻可能。AIが打刻漏れや出勤日数の異常を自動検知し、事前にアラートします。',
          solutionDetail: 'GPS打刻機能は、あらかじめ承認した場所・半径内でのみ出退勤の打刻を受け付けるため、不正打刻やなりすまし打刻を根本から防止します。遅刻・早退・欠勤は規定時刻との比較で自動判定され、管理者の承認後は打刻内容が編集不可になるため改ざんの心配もありません。AIが打刻漏れや出勤日数の減少トレンドを検知し、本人・管理者へ早めに通知するため、月末の勤怠修正作業も大幅に減らせます。',
        },
        {
          tag: 'Leave',
          problemTitle: '休暇申請・残日数管理がアナログ',
          problemDesc: '正社員・契約社員で異なる休暇ルールを手作業で管理しており、残日数の把握や承認状況の確認に手間がかかります。',
          solutionTitle: '休暇管理の自動化＆多段階承認',
          solutionDesc: '雇用形態ごとに申請ルールを設定でき、残日数は自動計算。AIが消化期限を検知し、本人・管理者へ自動で通知します。',
          solutionDetail: '休暇管理機能では、有給・半休・時間休暇など多様な休暇タイプに対応し、正社員と契約社員で異なる申請ルール（契約社員は上限なしで自由申請＋承認制など）を柔軟に設定できます。管理者・部門長・チームリーダーによる多段階承認権限を設定でき、残休暇日数は自動計算されるため本人・管理者双方がいつでも正確な残日数を確認できます。AIが残休暇の消化期限を検知し、計画的な取得を促す通知を自動で送信します。',
        },
        {
          tag: 'Payroll',
          problemTitle: '給与計算・明細発行に時間がかかる',
          problemDesc: '給与バッチ処理や明細作成が手作業中心で、改ざんリスクや集計ミスの防止に多くの工数を要します。',
          solutionTitle: '給与バッチ処理の完全自動化',
          solutionDesc: '給与バッチ実行で明細を自動生成しPDF発行。給与ロック機能とAIの異常値検知で改ざん・集計ミスを防止します。',
          solutionDetail: '給与管理機能では、給与バッチ（Run）処理を実行するだけで、メンバーごとの給与明細（Slip）が自動生成されます。PDF形式での給与明細発行・ダウンロードに対応し、給与ロック機能により確定後のデータ改ざんを防止します。管理者専用の給与バッチ管理画面から処理状況の確認や再計算が行え、AIが給与データの異常値・乖離を検知して確認が必要な項目を自動で知らせます。',
        },
        {
          tag: 'Goals & Evaluation',
          problemTitle: '人事評価が感覚的でデータに基づかない',
          problemDesc: '評価基準が担当者ごとに異なり、勤怠・目標・日報などのデータが評価に十分活用されていません。',
          solutionTitle: 'AIによる自動評価・等級算出',
          solutionDesc: '2段階承認の目標管理と連動し、AIが勤怠・達成率・日報提出率を分析して半期評価の等級と改善点を自動算出します。',
          solutionDetail: '目標・評価管理機能では、メンバーごとに個人目標を設定し、2段階の承認ワークフローを経て確定します。評価入力後は、AIが勤怠・目標達成率・日報提出率などのデータを分析して半期評価の等級を自動算出し、次のグレードに到達するための改善提案まで自動生成します。評価基準が属人化しがちな人事評価業務を、データに基づいて標準化できます。',
        },
      ],
      challengeImages: [
        `<svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="160" fill="#f4f6fb"/>
          <rect x="18" y="16" width="284" height="128" rx="10" fill="#fff" stroke="#dbe2f0" stroke-width="1.4"/>
          <rect x="18" y="16" width="284" height="14" rx="10" fill="#eef0f5"/>
          <rect x="18" y="23" width="284" height="7" fill="#eef0f5"/>
          <circle cx="28" cy="23" r="2.4" fill="#f58e8e"/>
          <circle cx="37" cy="23" r="2.4" fill="#f3c15c"/>
          <circle cx="46" cy="23" r="2.4" fill="#86d19f"/>
          <text x="58" y="26.5" font-family="Arial, sans-serif" font-size="7" fill="#8891a3">nokori.app/attendance</text>
          <rect x="18" y="30" width="284" height="20" fill="#0f52a0"/>
          <text x="30" y="43.5" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#fff">NOKORI<tspan fill="#cfe0f6" font-weight="400"> ｜ 勤怠管理（GPS打刻）</tspan></text>
          <circle cx="90" cy="104" r="30" fill="#eaf1fd" stroke="#0f52a0" stroke-width="2"/>
          <path d="M90 88v16l11 7" stroke="#0f52a0" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
          <rect x="140" y="64" width="150" height="20" rx="5" fill="#eaf1fd"/>
          <circle cx="152" cy="74" r="4" fill="#1f9d63"/>
          <text x="162" y="77" font-family="Arial, sans-serif" font-size="8.5" fill="#1a1140">出勤 09:02 承認範囲内</text>
          <rect x="140" y="90" width="150" height="20" rx="5" fill="#eaf1fd"/>
          <circle cx="152" cy="100" r="4" fill="#1f9d63"/>
          <text x="162" y="103" font-family="Arial, sans-serif" font-size="8.5" fill="#1a1140">退勤 18:07 打刻完了</text>
          <rect x="140" y="116" width="150" height="20" rx="5" fill="#fdf1e2"/>
          <circle cx="152" cy="126" r="4" fill="#c7811a"/>
          <text x="162" y="129" font-family="Arial, sans-serif" font-size="8.5" fill="#1a1140">AI：出勤日数の減少を検知</text>
        </svg>`,
        `<svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="160" fill="#f4faf6"/>
          <rect x="18" y="16" width="284" height="128" rx="10" fill="#fff" stroke="#d7ecdf" stroke-width="1.4"/>
          <rect x="18" y="16" width="284" height="14" rx="10" fill="#eaf4ee"/>
          <rect x="18" y="23" width="284" height="7" fill="#eaf4ee"/>
          <circle cx="28" cy="23" r="2.4" fill="#f58e8e"/>
          <circle cx="37" cy="23" r="2.4" fill="#f3c15c"/>
          <circle cx="46" cy="23" r="2.4" fill="#86d19f"/>
          <text x="58" y="26.5" font-family="Arial, sans-serif" font-size="7" fill="#8891a3">nokori.app/leave</text>
          <rect x="18" y="30" width="284" height="20" fill="#1f9d63"/>
          <text x="30" y="43.5" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#fff">NOKORI<tspan fill="#cdeedd" font-weight="400"> ｜ 休暇管理（申請・承認）</tspan></text>
          <rect x="34" y="60" width="110" height="78" rx="8" fill="#eafaf0" stroke="#1f9d63" stroke-width="1.4"/>
          <text x="46" y="76" font-family="Arial, sans-serif" font-size="8" fill="#1a1140">残有給日数</text>
          <text x="46" y="106" font-family="Arial, sans-serif" font-size="24" font-weight="700" fill="#1f9d63">12.5</text>
          <text x="46" y="122" font-family="Arial, sans-serif" font-size="7.5" fill="#5a6478">日 / 年20日</text>
          <rect x="158" y="60" width="132" height="24" rx="6" fill="#eafaf0"/>
          <circle cx="170" cy="72" r="4" fill="#1f9d63"/>
          <text x="180" y="75" font-family="Arial, sans-serif" font-size="8" fill="#1a1140">部門長承認 完了</text>
          <rect x="158" y="88" width="132" height="24" rx="6" fill="#eafaf0"/>
          <circle cx="170" cy="100" r="4" fill="#c7811a"/>
          <text x="180" y="103" font-family="Arial, sans-serif" font-size="8" fill="#1a1140">管理者承認 審査中</text>
          <rect x="158" y="116" width="132" height="20" rx="6" fill="#fdf1e2"/>
          <text x="166" y="129" font-family="Arial, sans-serif" font-size="8" fill="#1a1140">AI：消化期限まであと18日</text>
        </svg>`,
        `<svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="160" fill="#fdf8ef"/>
          <rect x="18" y="16" width="284" height="128" rx="10" fill="#fff" stroke="#f0ddb3" stroke-width="1.4"/>
          <rect x="18" y="16" width="284" height="14" rx="10" fill="#fbf0dc"/>
          <rect x="18" y="23" width="284" height="7" fill="#fbf0dc"/>
          <circle cx="28" cy="23" r="2.4" fill="#f58e8e"/>
          <circle cx="37" cy="23" r="2.4" fill="#f3c15c"/>
          <circle cx="46" cy="23" r="2.4" fill="#86d19f"/>
          <text x="58" y="26.5" font-family="Arial, sans-serif" font-size="7" fill="#8891a3">nokori.app/payroll</text>
          <rect x="18" y="30" width="284" height="20" fill="#c7811a"/>
          <text x="30" y="43.5" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#fff">NOKORI<tspan fill="#fbe6bf" font-weight="400"> ｜ 給与管理（給与明細/Slip）</tspan></text>
          <rect x="34" y="60" width="130" height="78" rx="8" fill="#fdf3e3" stroke="#c7811a" stroke-width="1.4"/>
          <text x="46" y="76" font-family="Arial, sans-serif" font-size="8" fill="#1a1140">2026年9月分 給与明細</text>
          <path d="M46 86h106M46 98h106M46 110h70" stroke="#e7c38b" stroke-width="2.6" stroke-linecap="round"/>
          <rect x="46" y="120" width="60" height="12" rx="4" fill="#c7811a"/>
          <text x="52" y="129" font-family="Arial, sans-serif" font-size="7" fill="#fff">PDF発行済み</text>
          <circle cx="238" cy="86" r="30" fill="#f3b84a"/>
          <text x="238" y="94" font-family="Arial, sans-serif" font-size="26" font-weight="700" fill="#fff" text-anchor="middle">¥</text>
          <rect x="196" y="120" width="84" height="20" rx="6" fill="#fdf1e2"/>
          <text x="204" y="133" font-family="Arial, sans-serif" font-size="7.5" fill="#1a1140">AI：異常値なし・確定OK</text>
        </svg>`,
        `<svg viewBox="0 0 320 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="320" height="160" fill="#f6f3fc"/>
          <rect x="18" y="16" width="284" height="128" rx="10" fill="#fff" stroke="#e0d7f6" stroke-width="1.4"/>
          <rect x="18" y="16" width="284" height="14" rx="10" fill="#f1ecfb"/>
          <rect x="18" y="23" width="284" height="7" fill="#f1ecfb"/>
          <circle cx="28" cy="23" r="2.4" fill="#f58e8e"/>
          <circle cx="37" cy="23" r="2.4" fill="#f3c15c"/>
          <circle cx="46" cy="23" r="2.4" fill="#86d19f"/>
          <text x="58" y="26.5" font-family="Arial, sans-serif" font-size="7" fill="#8891a3">nokori.app/evaluation</text>
          <rect x="18" y="30" width="284" height="20" fill="#6c3ce9"/>
          <text x="30" y="43.5" font-family="Arial, sans-serif" font-size="9.5" font-weight="700" fill="#fff">NOKORI<tspan fill="#e4d9fb" font-weight="400"> ｜ 目標・評価管理（AI分析）</tspan></text>
          <circle cx="78" cy="106" r="36" fill="none" stroke="#e7def8" stroke-width="10"/>
          <path d="M78 70a36 36 0 1 1 -25.5 61.5" fill="none" stroke="#6c3ce9" stroke-width="10" stroke-linecap="round"/>
          <text x="78" y="111" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#1a1140" text-anchor="middle">A+</text>
          <rect x="140" y="68" width="150" height="14" rx="4" fill="#ece5fb"/>
          <rect x="140" y="68" width="112" height="14" rx="4" fill="#8a6fe8"/>
          <text x="140" y="62" font-family="Arial, sans-serif" font-size="7.5" fill="#5a6478">目標達成率 82%</text>
          <rect x="140" y="96" width="150" height="14" rx="4" fill="#ece5fb"/>
          <rect x="140" y="96" width="96" height="14" rx="4" fill="#6c3ce9"/>
          <text x="140" y="90" font-family="Arial, sans-serif" font-size="7.5" fill="#5a6478">日報提出率 70%</text>
          <rect x="140" y="122" width="150" height="20" rx="6" fill="#f1edfb"/>
          <text x="148" y="135" font-family="Arial, sans-serif" font-size="7.5" fill="#1a1140">AI提案：来期グレードB到達まであと8点</text>
        </svg>`,
      ],
      features: [
        {
          tag: 'Attendance',
          title: '勤怠管理',
          desc: 'GPSベースの出退勤打刻（承認済み場所・半径設定あり）に対応。昼休憩の自動差引、月別の一括登録・修正・削除、管理者承認後は編集不可のワークフローまで一貫して管理します。',
          aiNote: 'AIが打刻漏れや出勤日数の減少トレンドを検知し、注意すべきポイントを早期に通知します。',
        },
        {
          tag: 'Leave',
          title: '休暇管理',
          desc: '有給・半休・時間休暇など多様な休暇タイプに対応。正社員と契約社員で異なる申請ルールを設定でき、管理者・部門長・チームリーダーによる多段階承認が可能です。',
          aiNote: 'AIが残休暇日数の消化期限を検知し、計画的な取得を本人へ自動で通知します。',
        },
        {
          tag: 'Payroll',
          title: '給与管理',
          desc: '給与バッチ処理と明細（Slip）の自動生成、PDF給与明細の発行・ダウンロードに対応。給与ロック機能により改ざんを防止し、管理者専用の給与バッチ管理画面で一元管理します。',
          aiNote: 'AIが給与データの異常値・乖離を検知し、確認が必要な項目を自動で知らせます。',
        },
        {
          tag: 'Goals & Evaluation',
          title: '目標・評価管理',
          desc: '個人別目標の設定から2段階承認ワークフロー、評価入力までを一元管理。AIによる半期評価の自動等級算出と改善提案の自動生成に対応します。',
          aiNote: 'AIが評価データをスコアリングし、次のグレードまでの改善ポイントを自動提示します。',
        },
        {
          tag: 'Task & Workflow',
          title: 'タスク・ワークフロー管理',
          desc: '業務タスクの作成・割当・進捗管理に加え、電子決裁・承認プロセスエンジンでカスタム承認ラインを設定。申請から承認までを電子化し、業務の透明性を高めます。',
          aiNote: 'AIが期限と負荷状況から遅延リスクの高いタスクを自動判定し、優先度の高い案件をトップに表示します。',
        },
        {
          tag: 'Report & Collaboration',
          title: '日報・社内コミュニケーション',
          desc: '日々の業務報告の作成とコメント・スタンプでのリアクション、社内掲示板でのお知らせ・いいね・コメントに加え、グループチャット・音声/ビデオ通話・画面共有・クラウドストレージまでを標準搭載。別途Slackやチャットツール、ストレージサービスを契約する必要がありません。',
          aiNote: 'AIが日々の日報を自動で要約し、管理者が全メンバーの状況を短時間で把握できるようにします。',
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
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 11h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
          title: '打刻漏れの疑い（平日データ未登録）',
          level: 'warn',
          levelLabel: '注意',
          desc: '今月分の平日勤怠に未入力が検出されました。打刻忘れがあれば早めの修正が必要です。未入力は欠勤扱いになる場合があります。',
          conf: 89,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 17l5-6 4 3 5-7 4 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 20h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
          title: '出勤日数が減少トレンドです',
          level: 'warn',
          levelLabel: '注意',
          desc: '直近3か月の平均出勤日数が減少傾向にあります。体調・業務環境に問題がないか確認をおすすめします。',
          conf: 88,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          title: '今月の残業はゼロです',
          level: 'good',
          levelLabel: '良好',
          desc: '直近の残業実績なし。ワークライフバランスが保てています。このペースを維持しましょう。',
          conf: 72,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
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
      insightPool: [
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="M16 16l5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9 11h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
          title: '打刻漏れの疑い（平日データ未登録）',
          level: 'warn',
          levelLabel: '注意',
          desc: '今月分の平日勤怠に未入力が検出されました。打刻忘れがあれば早めの修正が必要です。未入力は欠勤扱いになる場合があります。',
          conf: 89,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 17l5-6 4 3 5-7 4 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 20h18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
          title: '出勤日数が減少トレンドです',
          level: 'warn',
          levelLabel: '注意',
          desc: '直近3か月の平均出勤日数が減少傾向にあります。体調・業務環境に問題がないか確認をおすすめします。',
          conf: 88,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/><path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
          title: '今月の残業はゼロです',
          level: 'good',
          levelLabel: '良好',
          desc: '直近の残業実績なし。ワークライフバランスが保てています。このペースを維持しましょう。',
          conf: 72,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.7"/><path d="M8 9h8M8 13h8M8 17h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
          title: 'スキルアップコンテンツを活用しましょう',
          level: 'info',
          levelLabel: '情報',
          desc: '目標達成率の向上余地があります。教育コンテンツの活用で改善が期待できます。',
          conf: 68,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M4 12l3-3 3 3 4-5 4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="18" cy="7" r="1.6" fill="currentColor"/></svg>',
          title: '目標達成率が前月より向上しています',
          level: 'good',
          levelLabel: '良好',
          desc: '今期の目標達成率が前月比で改善しました。このペースであれば次回評価でのグレードアップが期待できます。',
          conf: 81,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 8v5l3 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.8"/></svg>',
          title: '残業時間が増加傾向です',
          level: 'warn',
          levelLabel: '注意',
          desc: '直近2週間の残業時間が平均を上回っています。業務量の調整やタスクの再配分を検討することをおすすめします。',
          conf: 84,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M9 12.5l2 2 4-5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" stroke-width="1.5"/></svg>',
          title: '日報提出率が良好です',
          level: 'good',
          levelLabel: '良好',
          desc: '直近1ヶ月の日報提出率が95%を超えています。業務品質スコアの安定した維持が期待できます。',
          conf: 77,
        },
        {
          icon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 18v-2a4 4 0 0 1 4-4h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="8" cy="7" r="2.6" stroke="currentColor" stroke-width="1.6"/><path d="M14 20v-2a4 4 0 0 1 4-4h0" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.4"/><circle cx="18" cy="10" r="2.2" stroke="currentColor" stroke-width="1.6" opacity="0.4"/></svg>',
          title: '有給残日数が消化期限に近づいています',
          level: 'info',
          levelLabel: '情報',
          desc: '一部メンバーの有給残日数が消化推奨期限に近づいています。計画的な取得をおすすめする通知を送信しました。',
          conf: 70,
        },
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
      extraStrengths: [
        { title: 'オールインワン統合', desc: '勤怠・休暇・給与・目標評価・タスク・日報・掲示板・チャット・通話・画面共有・クラウドストレージまで、HR業務とコラボレーションのすべてを1つのプラットフォームで完結できます。' },
        { title: '多段階承認＆多言語対応', desc: '管理者・部門長・チームリーダーに承認権限を付与できる体制と、日・韓・英・越・中の5言語対応で多国籍な組織にも導入しやすい設計です。' },
      ],
      extraStrengthIcons: [
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" stroke-width="1.5" opacity="0.5"/><path d="M7.5 14l2.5-3 2 2 4.5-5.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '<svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M12 3.5l7 3v5c0 4.5-3 7.5-7 8.5-4-1-7-4-7-8.5v-5l7-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" opacity="0.55"/><path d="M9 12l2 2 4-4.5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>',
      ],
      workflowSteps: [
        { title: '勤怠・休暇登録', desc: 'GPS打刻による出退勤記録や、有給・半休などの休暇申請を日々登録します。' },
        { title: '多段階承認', desc: '管理者・部門長・チームリーダーによる承認フローで申請内容を処理します。' },
        { title: '給与・評価反映', desc: '承認された勤怠・休暇データが給与計算や人事評価に自動で反映されます。' },
        { title: '日報・情報共有', desc: '日々の日報作成とAIによる自動要約、社内掲示板・チャットでの情報共有を行います。', ai: true },
        { title: 'レポート活用', desc: '蓄積データをダッシュボードで分析し、次の経営判断・改善施策に活用します。', ai: true },
      ],
      benefits: [
        {
          title: 'HR業務の一元化',
          desc: '勤怠・休暇・給与・目標評価・採用までを1つのプラットフォームに集約し、個別ツールの併用や二重入力の手間を解消します。'
        },
        {
          title: 'コラボツールの併用が不要',
          desc: '社内チャット・音声/ビデオ通話・画面共有・クラウドストレージも標準搭載。他社のチャットツールやストレージサービスを別途契約する必要がなく、コストと管理の手間を削減します。'
        },
        {
          title: '不正防止と正確性の向上',
          desc: 'GPSベースの打刻認証と自動計算により、不正打刻や集計ミスを防ぎ、給与・勤怠データの正確性を高めます。'
        },
        {
          title: '管理負担の軽減',
          desc: 'AIによる評価算出・日報要約・自動通知を活用することで、管理者が確認・集計にかける時間を大幅に削減します。'
        },
      ],
      beforeItems: [
        '勤怠・休暇・給与が別々のExcelや紙に分散している',
        '打刻の不正や入力漏れが発生しやすい',
        '休暇残日数や承認状況が本人・管理者ともに把握しづらい',
        '人事評価が担当者の感覚に依存しデータが活用されていない',
      ],
      afterItems: [
        '勤怠・休暇・給与・評価情報をNOKORIに一元化',
        'GPS認証打刻で不正打刻・記入漏れを防止',
        '残休暇日数や承認状況をダッシュボードでリアルタイムに確認',
        'AIが評価データを分析し等級・改善ポイントを自動算出',
      ],
      pricingPlans: [
        {
          name: 'オールインワン統合プラン',
          tag: 'すべての機能',
          highlight: true,
          desc: '勤怠・休暇・給与・目標評価からチャット・タスク管理まで、すべての機能を利用できるプランです。',
          features: [
            '勤怠・休暇・給与管理',
            '目標・評価管理（AI分析）',
            'タスク・日報・チャット・掲示板',
          ],
          regular: 49800,
          campaign: 34860,
          taxed: 38000,
        },
        {
          name: '勤怠・休暇管理プラン',
          desc: '勤怠・休暇申請と承認フローを管理するプランです。',
          features: [
            'GPSベースの出退勤打刻',
            '休暇申請・多段階承認',
            '残日数自動計算・通知',
          ],
          regular: 24800,
          campaign: 17360,
          taxed: 19000,
        },
        {
          name: '給与管理プラン',
          coming: '2026年12月受付開始予定',
          desc: '給与計算・明細発行に関する業務を管理するプランです。',
          features: [
            '給与バッチ処理・自動計算',
            '給与明細（Slip）PDF発行',
            'AIによる異常値検知',
          ],
          regular: 29800,
          campaign: 20860,
          taxed: 23000,
        },
        {
          name: '目標・評価管理プラン',
          coming: '2026年12月受付開始予定',
          desc: '個人目標の設定から評価確定までを管理するプランです。',
          features: [
            '目標設定・2段階承認',
            'AIによる自動評価・等級算出',
            '改善提案の自動生成',
          ],
          regular: 19800,
          campaign: 13860,
          taxed: 15000,
        },
      ],
      faqs: [
        {
          q: 'NOKORIはどのような企業・組織向けのシステムですか？',
          a: '社員数十名規模の企業から数百名規模の多部署組織まで、プロジェクト単位でタスク・工数・承認業務を抱える組織に適しています。特に建設・IT・製造・士業など、案件ごとに人員と原価を管理する業種で高い導入効果が出ています。業種特有の帳票や承認ルールがある場合も、初期設定でカスタマイズして対応します。',
        },
        {
          q: '既存のExcelやメールでの運用から移行できますか？',
          a: 'はい。まず現在お使いのExcelテンプレートや稟議メールのフォーマットを共有いただき、弊社担当が1〜2週間ほどで現行運用を整理した移行計画書を作成します。既存データはCSVで一括インポートできるため、過去案件の工数実績や承認履歴もそのまま引き継げます。',
        },
        {
          q: '必要な機能だけを選んで導入できますか？',
          a: 'はい、モジュール単位でのご契約が可能です。例えば初年度は「タスク管理＋承認フロー」のみでスタートし、運用が定着した翌四半期に「工数集計」「レポート機能」を追加するといった段階導入の実績が多数ございます。追加時にデータ移行の手戻りは発生しません。',
        },
        {
          q: 'AI機能は具体的に何をしてくれますか？',
          a: '主に3つの機能を提供します。①期限・担当者の負荷状況から遅延リスクの高いタスクを自動検知してアラート表示、②承認申請が平均処理日数を超えて滞留した場合に担当者と上長へ通知、③過去の工数実績から今後1〜3ヶ月の人員稼働予測をグラフで提示します。いずれも判断材料の提供が目的で、最終決定は人が行う設計です。',
        },
        {
          q: '導入までどのくらいの期間がかかりますか？',
          a: '標準的な導入スケジュールは、要件ヒアリング（1週間）→初期設定・権限設計（1〜2週間）→試験運用（2週間）→本稼働の計4〜6週間です。組織構造が複雑な場合や既存データ量が多い場合は8週間程度を見込んでいただくこともあります。',
        },
        {
          q: '無料トライアルはありますか？',
          a: 'はい、14日間の無料トライアルをご用意しています。実際の本番環境に近い形で、ご担当者様のアカウントを発行し、タスク登録・工数入力・承認申請まで一通りの操作を体験いただけます。トライアル終了後の自動課金はございませんのでご安心ください。',
        },
        {
          q: '利用料金の体系はどのようになっていますか？',
          a: '基本は「月額基本料＋利用ユーザー数に応じた従量課金」の2階建て体系です。利用人数20名規模の標準プランで月額一定額からのご案内となり、工数管理・AI分析などのオプション機能は追加モジュール料金となります。正式な見積りは組織規模と必要機能をヒアリングした上で1週間程度でご提示します。',
        },
        {
          q: '契約期間の縛りはありますか？',
          a: '最低契約期間は6ヶ月からとなります。それ以降は月単位の自動更新で、解約をご希望の場合は解約希望月の前月末までにご連絡いただければ違約金なく解約いただけます。年間契約の場合は月額料金の割引もご用意しています。',
        },
        {
          q: 'スマートフォンやタブレットからも利用できますか？',
          a: 'はい。iOS・Android標準ブラウザ（Safari／Chrome）に最適化したレスポンシブ画面で、外出先からのタスク確認・工数入力・承認（承認/差し戻し操作）が可能です。通知はブラウザのプッシュ通知またはメールで受け取れます。',
        },
        {
          q: '専用アプリのインストールは必要ですか？',
          a: '不要です。NOKORIはクラウド型のWebシステムのため、会社貸与・個人端末を問わずブラウザからログインするだけでご利用いただけます。端末ごとのアプリ更新作業が発生しないため、IT管理部門の運用負荷も抑えられます。',
        },
        {
          q: 'データはどこに保存されますか？安全性は大丈夫ですか？',
          a: '国内データセンター（東京リージョン）でデータを保管し、通信はTLS1.2以上で暗号化、保存データもAES-256で暗号化しています。IPアドレス制限・二要素認証・操作ログの取得にも対応しており、情報システム部門様のセキュリティ審査資料もご提供可能です。',
        },
        {
          q: 'アクセス権限は部署やメンバーごとに細かく設定できますか？',
          a: 'はい。役職（管理者／マネージャー／一般メンバー）、所属部署、プロジェクト参加者という3軸で権限マトリクスを組めます。例えば「他部署のタスクは閲覧のみ可、自部署は編集可、承認は課長職以上のみ」といった設定を管理画面から行えます。',
        },
        {
          q: '承認フローは複数段階（多段階承認）に対応していますか？',
          a: '対応しています。申請金額や案件区分に応じて承認ルートを分岐させる条件分岐承認や、担当→課長→部長という直列の多段階承認、どちらでも設定可能です。承認ルートはドラッグ＆ドロップのフロー図エディタで組み替えられます。',
        },
        {
          q: '承認が滞留している場合、通知は来ますか？',
          a: 'はい。各ステップごとに「標準処理日数」を設定でき、それを超えると承認者本人に加え、設定した上長にもエスカレーション通知が届きます。通知はメールとシステム内バッジの両方で表示されるため見落としを防げます。',
        },
        {
          q: '工数入力は1日ごと、週ごとなど単位を選べますか？',
          a: '日次入力・週次まとめ入力のどちらにも対応しています。現場作業が多い部署は日次、デスクワーク中心の部署は週次というように、部署ごとに入力ルールを変えることも可能です。入力忘れがある場合はリマインド通知も設定できます。',
        },
        {
          q: 'プロジェクトごとの原価・利益をリアルタイムで把握できますか？',
          a: 'はい。メンバーごとの人件費単価（時給換算）を事前登録しておくことで、入力された工数から人件費を自動算出し、外注費・経費と合算した実際原価をダッシュボードにリアルタイム反映します。予算に対する進捗消化率もグラフで確認できます。',
        },
        {
          q: '他システム（勤怠・会計ソフトなど）と連携できますか？',
          a: '主要な勤怠管理ソフト（キングオブタイム、ジョブカン等）や会計ソフト（freee、マネーフォワード等）とのCSV連携実績がございます。API連携についても個別にご相談いただければ、貴社の利用システムに応じて連携可否・開発工数をご案内します。',
        },
        {
          q: 'レポートやダッシュボードはカスタマイズできますか？',
          a: 'はい。表示する指標（進捗率・工数消化率・原価率など）、グラフ種類（棒グラフ・折れ線・円グラフ）、集計期間（週次・月次・四半期）を部署や役職ごとに個別設定できます。経営会議用のサマリーレポートはPDF出力にも対応しています。',
        },
        {
          q: '複数の部署・拠点をまたいだプロジェクトにも対応できますか？',
          a: '対応しております。本社・支社・協力会社の担当者を同一プロジェクトに招待し、タスク・工数・承認情報を一元管理できます。拠点ごとに異なる就業カレンダー（祝日設定等）を適用することも可能です。',
        },
        {
          q: '操作に不慣れなメンバーでも使いこなせますか？',
          a: '主要な操作は3クリック以内で完了するよう画面設計しています。導入時には30分程度のオンライン操作説明会を実施し、操作マニュアル（PDF・動画）もご提供します。導入後1ヶ月間は専任担当が操作サポートに対応します。',
        },
        {
          q: 'サポート体制はどうなっていますか？',
          a: '平日9:00〜18:00はメール・チャットでの問い合わせに対応し、通常のお問い合わせは1営業日以内に返信します。システム障害など緊急性の高い事象は優先対応とし、原則4時間以内の一次回答を目標としています。',
        },
        {
          q: '導入時の初期設定（組織構造・権限設定など）は代行してもらえますか？',
          a: 'はい。有償の導入支援プランでは、組織図の登録、部署・役職ごとの権限設計、承認フローの構築、既存データの移行作業までを弊社担当が代行いたします。貴社側でご準備いただくのは組織情報と移行対象データのみです。',
        },
        {
          q: 'システムの利用人数を途中で増やす・減らすことはできますか？',
          a: '可能です。繁忙期の増員や組織再編時の人数変更は、管理画面から申請いただければ翌月請求分から反映されます。大幅な減員の場合は契約プランの見直しもあわせてご提案します。',
        },
        {
          q: 'AIによる予測機能の精度はどの程度ですか？',
          a: '過去の工数実績データが3ヶ月分以上蓄積された時点から予測精度が安定してきます。導入直後はデータ量が少ないため参考値としてご案内し、半年〜1年の運用後には実績とのズレが小さくなる傾向にあります。予測はあくまで判断支援であり、最終的な意思決定は担当者が行う前提です。',
        },
        {
          q: 'タスクの優先順位付けはAIが自動で行ってくれるのですか？',
          a: '期限までの残日数、担当者の保有タスク量、他タスクとの依存関係をスコア化し、優先度の高いタスクを上位に表示します。ただしスコアはあくまで提案であり、最終的な優先順位の確定・変更は担当者・管理者が手動で行えます。',
        },
        {
          q: '障害やメンテナンスによるシステム停止時間はありますか？',
          a: '定期メンテナンスは原則第2日曜日の深夜2:00〜5:00に実施し、1週間前までに事前告知します。直近1年間の実績として、計画外の障害による停止は年間平均99.9%以上の稼働率を維持しています。障害発生時は状況をステータスページで随時更新します。',
        },
        {
          q: '解約時にデータはどうなりますか？',
          a: 'ご契約終了日の30日前までに、蓄積されたタスク・工数・承認履歴などのデータをCSV形式で一括エクスポートいただけます。解約後のデータは弊社サーバー上で90日間保持した後、完全に削除いたします。削除証明書の発行も可能です。',
        },
        {
          q: '一部の部署だけで試験導入し、後から全社展開することは可能ですか？',
          a: '可能です。実際に多くのお客様が、まず1部署・10〜20名規模でスモールスタートし、3ヶ月程度運用を定着させた後、他部署へ展開するステップを踏んでいます。展開時の追加設定費用は初期導入時より抑えたプランをご用意しています。',
        },
        {
          q: '英語など多言語での利用に対応していますか？',
          a: '現在は日本語UIでの提供が基本となります。外国籍メンバーが在籍する組織様向けに、画面表示の英語対応については開発ロードマップ上でご相談を承っております。ご要望の多い機能から優先的に検討しておりますので、お問い合わせ時にご要望をお聞かせください。',
        },
        {
          q: '導入後、運用方法の見直しや追加機能の要望は相談できますか？',
          a: 'はい。導入後3ヶ月・6ヶ月のタイミングで定期的な運用レビューを実施し、利用状況データをもとに改善提案を行っています。追加機能のご要望は開発ロードマップに反映し、優先度に応じて今後のアップデートで実装を検討します。',
        },
        {
          q: 'まずは何から始めればよいですか？',
          a: 'お問い合わせフォームより現在の課題（紙・Excel運用の限界、承認の属人化など）をお聞かせください。1週間以内に初回ヒアリングの日程調整をご連絡し、貴社の業務フローに即したデモンストレーションと概算お見積りをご提示します。',
        },
      ],
      openFaqIndex: null,
      faqPage: 1,
      faqPerPage: 6,
      aiScore: 78,
      gradeThresholds: [
        { g: 'D', min: 0 },
        { g: 'C', min: 25 },
        { g: 'B', min: 45 },
        { g: 'B+', min: 60 },
        { g: 'A', min: 86 },
        { g: 'A+', min: 90 },
        { g: 'S', min: 94 },
        { g: 'S+', min: 98 },
      ],
      chatOpen: false,
      chatInput: '',
      chatThinking: false,
      chatMessages: [
        {
          role: 'bot',
          text: 'お問い合わせありがとうございます。NOKORIサポートデスクです。導入・料金・機能・セキュリティなど、ご不明点がございましたらお気軽にご質問ください。',
        },
      ],
      chatSuggestions: [
        '料金体系を教えて',
        '無料トライアルはありますか？',
        'セキュリティは大丈夫？',
        '導入までの期間は？',
      ],
      featureChatDetails: [
        'GPS打刻機能では、スマートフォンの位置情報と連動し、あらかじめ承認した場所・半径内でのみ出勤・退勤の打刻を受け付けます。昼休憩時間は自動で差し引き計算され、遅刻・早退・欠勤も規定時刻との比較で自動判定されます。管理者の承認後は打刻内容が編集不可になるため、後からの改ざんも防止できます。月別の勤怠を一括登録・修正・削除できる管理画面もあり、月末の集計作業を大幅に削減します。',
        '休暇管理機能では、有給・半休・時間休暇など多様な休暇タイプを申請できます。正社員は残日数に応じた申請、契約社員は上限なしで自由に申請し承認制で運用する、といった雇用形態ごとの違いにも対応します。管理者・部門長・チームリーダーによる多段階承認権限が設定でき、残休暇日数は自動計算され本人・管理者双方からいつでも確認できます。',
        '給与管理機能では、給与バッチ（Run）処理を実行すると、メンバーごとの給与明細（Slip）が自動生成されます。PDF形式での給与明細発行・ダウンロードに対応し、給与ロック機能により確定後のデータ改ざんを防止します。管理者専用の給与バッチ管理画面から、処理状況の確認や再計算も行えます。',
        '目標・評価管理機能では、メンバーごとに個人目標を設定し、2段階の承認ワークフローを経て確定します。評価入力後は、AIが半期評価の等級を自動算出し、次のグレードに到達するための改善提案まで自動生成します。評価基準が属人化しがちな人事評価業務を、データに基づいて標準化できます。',
        'タスク・ワークフロー管理機能では、業務タスクの作成・割当・進捗管理に加え、電子決裁・承認プロセスエンジンでカスタム承認ラインを自由に設定できます。1人あたり平均20〜30件のタスクを抱える現場でも、AIが期限と負荷状況から遅延リスクの高いタスクを自動でトップに表示するため、優先順位の判断時間を削減できます。',
        '日報・社内コミュニケーション機能では、日々の業務報告の作成に加え、コメントやスタンプ（絵文字）でのリアクションができます。AIが日報の内容を自動で要約するため、管理者は全メンバーの状況を短時間で把握可能です。社内掲示板でのお知らせ投稿・ピン留め・いいね・コメント、リアルタイムのグループチャットも同じプラットフォーム内で利用できます。',
      ],
      extraStrengthChatDetails: [
        'オールインワン統合の強みは、勤怠・休暇・給与・目標評価・タスク・日報・掲示板・チャットといった、通常は複数の別ツールに分かれがちなHR業務を、すべて1つのプラットフォームに集約できる点です。社内チャット・音声/ビデオ通話・画面共有・クラウドストレージも標準搭載しているため、SlackやZoom、Google Driveのような別会社のコラボツールを追加で契約する必要がなく、情報の二重入力や連携漏れも発生しません。',
        '多段階承認＆多言語対応の強みは、管理者だけでなく部門長・チームリーダーにも役割ベースで承認権限を付与できる柔軟な体制と、日本語・韓国語・英語・ベトナム語・中国語の5言語に対応している点です。外国人労働者が多い現場や多国籍企業でも、導入後すぐに運用を開始できます。',
      ],
    };
  },
  computed: {
    totalFaqPages() {
      return Math.ceil(this.faqs.length / this.faqPerPage);
    },
    paginatedFaqs() {
      const start = (this.faqPage - 1) * this.faqPerPage;
      return this.faqs
        .map((faq, i) => ({ ...faq, originalIndex: i }))
        .slice(start, start + this.faqPerPage);
    },
    faqPageNumbers() {
      return Array.from({ length: this.totalFaqPages }, (_, i) => i + 1);
    },
    currentGrade() {
      let g = 'D';
      this.gradeThresholds.forEach((t) => {
        if (this.aiScore >= t.min) g = t.g;
      });
      return g;
    },
    nextGradeLabel() {
      const idx = this.gradeThresholds.findIndex((t) => t.g === this.currentGrade);
      const next = this.gradeThresholds[idx + 1];
      return next ? next.g : null;
    },
    nextGradeGap() {
      const idx = this.gradeThresholds.findIndex((t) => t.g === this.currentGrade);
      const next = this.gradeThresholds[idx + 1];
      return next ? next.min - this.aiScore : 0;
    },
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
    goToCompare() {
      this.$router.push('/NokoriCompare');
    },
    closeComingSoon() {
      this.showComingSoon = false;
    },
    toggleFaq(i) {
      this.openFaqIndex = this.openFaqIndex === i ? null : i;
    },
    onFaqEnter(el) {
      el.style.height = '0px';
      el.style.opacity = '0';
      // force reflow so the transition from 0 is applied
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.style.transition = 'height 0.28s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.22s ease';
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
    },
    onFaqAfterEnter(el) {
      el.style.height = 'auto';
      el.style.transition = '';
    },
    onFaqLeave(el) {
      el.style.height = el.scrollHeight + 'px';
      el.style.opacity = '1';
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.style.transition = 'height 0.22s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.18s ease';
      el.style.height = '0px';
      el.style.opacity = '0';
    },
    toggleChat() {
      this.chatOpen = !this.chatOpen;
      if (this.chatOpen) {
        this.$nextTick(() => this.scrollChatToBottom());
      }
    },
    scrollChatToBottom() {
      const body = this.$refs.chatBody;
      if (body) body.scrollTop = body.scrollHeight;
    },
    sendSuggestion(text) {
      this.chatInput = text;
      this.sendChatMessage();
    },
    findBestFaqAnswer(question) {
      const normalize = (str) =>
        str
          .toLowerCase()
          .replace(/[？?！!。、,.・\s]/g, '');
      const q = normalize(question);
      if (!q) return null;

      // Keyword dictionary mapped to faq indexes, covering all 30 FAQs.
      // Includes Japanese + common Korean/English terms for mixed-language input.
      const keywordMap = [
        { keywords: ['どのような企業', '対象企業', '業種', '向けのシステム'], index: 0 },
        { keywords: ['excel', 'エクセル', 'メール', '移行', '이행', '마이그레이션'], index: 1 },
        { keywords: ['必要な機能だけ', '一部機能', '段階導入', '選んで導入'], index: 2 },
        { keywords: ['ai機能', 'ai는', 'ai는뭐', '人工知能', 'ai分析', 'ai란'], index: 3 },
        { keywords: ['期間', 'どのくらい', '導入まで', 'スケジュール', '導入기간', '기간'], index: 4 },
        { keywords: ['トライアル', '無料', 'お試し', '체험', '무료'], index: 5 },
        { keywords: ['料金', '値段', '価格', 'いくら', 'コスト', '가격', '요금', '비용'], index: 6 },
        { keywords: ['契約', '縛り', '最低契約', '解約条件', '계약'], index: 7 },
        { keywords: ['スマホ', 'スマートフォン', 'モバイル', 'タブレット', '모바일'], index: 8 },
        { keywords: ['アプリ', 'インストール', 'app', '앱'], index: 9 },
        { keywords: ['セキュリティ', '安全', '暗号化', 'データ漏洩', '保存先', '보안'], index: 10 },
        { keywords: ['アクセス権限', '権限設定', '閲覧権限', '권한'], index: 11 },
        { keywords: ['承認フロー', '多段階承認', '承認ルート', '결재'], index: 12 },
        { keywords: ['承認が滞留', '承認遅れ', '通知', '滞留'], index: 13 },
        { keywords: ['工数入力', '工数管理', '日次', '週次', '공수'], index: 14 },
        { keywords: ['原価', '利益', 'リアルタイム', '収支', '원가'], index: 15 },
        { keywords: ['連携', '勤怠', '会計ソフト', 'api連携', '연동'], index: 16 },
        { keywords: ['レポート', 'ダッシュボード', 'カスタマイズ', '리포트'], index: 17 },
        { keywords: ['複数拠点', '複数部署', '拠点', '支社', '여러부서'], index: 18 },
        { keywords: ['操作に不慣れ', '使いこなせ', '初心者', '操作方法'], index: 19 },
        { keywords: ['サポート体制', 'サポート', '問い合わせ', '対応時間', '서포트'], index: 20 },
        { keywords: ['初期設定', '代行', '組織構造登録', '導入支援'], index: 21 },
        { keywords: ['利用人数', 'ライセンス', '増やす', '減らす', '인원'], index: 22 },
        { keywords: ['予測精度', 'ai予測', '精度どの程度'], index: 23 },
        { keywords: ['優先順位', 'タスク優先度', '自動で行って'], index: 24 },
        { keywords: ['障害', 'メンテナンス', '停止時間', '稼働率'], index: 25 },
        { keywords: ['解約', 'やめる', '退会', 'データ削除', '해지'], index: 26 },
        { keywords: ['試験導入', 'スモールスタート', '一部部署', '全社展開'], index: 27 },
        { keywords: ['英語', '多言語', '外国語', '언어'], index: 28 },
        { keywords: ['運用見直し', '追加機能', '要望', '相談できます'], index: 29 },
        {
          keywords: [
            'まずは何', '何から始め', 'どうすればいい', '導入したい', '導入希望',
            '도입하고싶', '도입하고 싶', '도입', '시작하고싶', '어떻게시작', '문의하고싶',
          ],
          index: 30,
        },
      ];

      for (const entry of keywordMap) {
        if (entry.keywords.some((kw) => q.includes(normalize(kw)))) {
          return this.faqs[entry.index];
        }
      }

      // Fallback: score every FAQ by counting shared characters (2-gram) with the question + answer.
      let bestScore = 0;
      let bestFaq = null;
      this.faqs.forEach((faq) => {
        const target = normalize(faq.q + faq.a);
        let score = 0;
        for (let i = 0; i < q.length - 1; i += 1) {
          const gram = q.substring(i, i + 2);
          if (gram.length === 2 && target.includes(gram)) score += 1;
        }
        if (score > bestScore) {
          bestScore = score;
          bestFaq = faq;
        }
      });

      return bestScore >= 2 ? bestFaq : null;
    },
    buildFeatureAnswer(feature, index) {
      const detail = this.featureChatDetails[index];
      return `【${feature.title}】${detail}`;
    },
    buildSolutionAnswer(item, index) {
      const detail = this.challengeSolutions[index].solutionDetail;
      return `【課題】${item.problemTitle}\n${item.problemDesc}\n\n【NOKORIの解決策：${item.solutionTitle}】${detail}`;
    },
    buildExtraStrengthAnswer(item, index) {
      const detail = this.extraStrengthChatDetails[index];
      return `【${item.title}】${detail}`;
    },
    findFeatureOrStrengthAnswer(q, normalize) {
      // Feature-specific keyword map (product function Q&A).
      const featureMap = [
        { keywords: ['勤怠', '出勤', '退勤', 'gps打刻', '打刻', '遅刻', '早退'], index: 0 },
        { keywords: ['タスク管理', 'タスク機能', 'タスクって', '残タスク'], index: 1 },
        { keywords: ['工数管理', '原価管理', 'コスト分析', '工数機能'], index: 2 },
        { keywords: ['承認フロー管理', '承認機能', '内部統制', '電子承認'], index: 3 },
        { keywords: ['ダッシュボード機能', 'レポート機能', '可視化機能'], index: 4 },
        { keywords: ['人事管理', '給与管理', '休暇残', '有給', '給与明細'], index: 5 },
      ];
      for (const entry of featureMap) {
        if (entry.keywords.some((kw) => q.includes(normalize(kw)))) {
          return this.buildFeatureAnswer(this.features[entry.index], entry.index);
        }
      }

      // General "what features / what can it do" question → summarize all features with detail.
      const featureGeneralKw = ['機能一覧', 'どんな機能', '何ができ', '機能について教えて', '提供機能', '기능이뭐', '어떤기능'];
      if (featureGeneralKw.some((kw) => q.includes(normalize(kw)))) {
        const list = this.features
          .map((f, i) => `■${f.title}\n${this.featureChatDetails[i]}`)
          .join('\n\n');
        return `NOKORIは以下6つの機能モジュールで構成されています。必要なものから選んで導入いただけます。\n\n${list}`;
      }

      // Problem → Solution keyword map (旧「課題」「選ばれる理由」を統合).
      const solutionMap = [
        { keywords: ['gps打刻', '不正打刻', '打刻漏れ', '勤怠属人化'], index: 0 },
        { keywords: ['休暇残日数', '休暇アナログ', '休暇申請管理'], index: 1 },
        { keywords: ['給与計算時間', '給与明細発行', '給与バッチ'], index: 2 },
        { keywords: ['人事評価感覚的', 'ai評価', 'ai等級', '評価データ'], index: 3 },
      ];
      for (const entry of solutionMap) {
        if (entry.keywords.some((kw) => q.includes(normalize(kw)))) {
          return this.buildSolutionAnswer(this.challengeSolutions[entry.index], entry.index);
        }
      }

      const extraStrengthMap = [
        { keywords: ['オールインワン', '統合プラットフォーム', 'コラボツール不要'], index: 0 },
        { keywords: ['多段階承認', '多言語対応', '5言語'], index: 1 },
      ];
      for (const entry of extraStrengthMap) {
        if (entry.keywords.some((kw) => q.includes(normalize(kw)))) {
          return this.buildExtraStrengthAnswer(this.extraStrengths[entry.index], entry.index);
        }
      }

      const strengthGeneralKw = ['なぜ選ばれ', '選ばれる理由', '強みは', 'メリットは', '長所', '장점'];
      if (strengthGeneralKw.some((kw) => q.includes(normalize(kw)))) {
        const list = this.extraStrengths
          .map((s, i) => `■${s.title}\n${this.extraStrengthChatDetails[i]}`)
          .join('\n\n');
        return `NOKORIが選ばれる理由として、各課題への具体的な解決策に加えて以下のような強みがあります。\n\n${list}\n\n詳しい課題別の解決策は「どんな課題」と聞いていただければご案内します。`;
      }

      // Current challenges (before) / effect after introduction.
      const challengeGeneralKw = ['どんな課題', '課題解決', '困りごと', '悩み', '문제해결'];
      if (challengeGeneralKw.some((kw) => q.includes(normalize(kw)))) {
        const list = this.challengeSolutions
          .map((c) => `■${c.problemTitle}\n現状：${c.problemDesc}\n解決策：${c.solutionTitle}－${c.solutionDesc}`)
          .join('\n\n');
        return `多くのお客様が導入前に抱えていた課題と、NOKORI導入後の解決策です。\n\n${list}`;
      }

      // Workflow / usage flow.
      const workflowKw = ['利用の流れ', '使い方の流れ', 'ワークフロー', '運用の流れ', '사용흐름'];
      if (workflowKw.some((kw) => q.includes(normalize(kw)))) {
        const list = this.workflowSteps.map((s, i) => `${i + 1}. ${s.title}：${s.desc}`).join('\n');
        return `NOKORIの標準的な利用フローは、タスクの登録から着手・承認・振り返りまで以下の5ステップで完結します。\n\n${list}\n\n各ステップの操作ログはすべて記録されるため、後から振り返り分析にもそのまま活用できます。`;
      }

      //導入効果 / benefits.
      const benefitKw = ['導入効果', '導入メリット', 'どんな効果', '効果は', '도입효과'];
      if (benefitKw.some((kw) => q.includes(normalize(kw)))) {
        const list = this.benefits.map((b) => `■${b.title}\n${b.desc}`).join('\n\n');
        return `導入企業様から実際にいただいている効果・感想として、主に以下の3点が挙げられます。\n\n${list}`;
      }

      return null;
    },
    findBotAnswer(question) {
      const normalize = (str) =>
        str
          .toLowerCase()
          .replace(/[？?！!。、,.・\s]/g, '');
      const q = normalize(question);
      if (!q) return null;

      // 1) Try exact FAQ knowledge base first (most reliable, curated answers).
      const faqAnswer = this.findBestFaqAnswer(question);
      if (faqAnswer) return faqAnswer.a;

      // 2) Try feature/strength/workflow/benefit knowledge (free-form product Q&A).
      const featureAnswer = this.findFeatureOrStrengthAnswer(q, normalize);
      if (featureAnswer) return featureAnswer;

      return null;
    },
    sendChatMessage() {
      const text = this.chatInput.trim();
      if (!text || this.chatThinking) return;

      this.chatMessages.push({ role: 'user', text });
      this.chatInput = '';
      this.chatThinking = true;
      this.chatSuggestions = [];
      this.$nextTick(() => this.scrollChatToBottom());

      setTimeout(() => {
        const replyText =
          this.findBotAnswer(text) ||
          '申し訳ございません、該当する回答が見つかりませんでした。恐れ入りますが、お問い合わせフォームより担当者へ直接ご質問ください。折り返しご連絡いたします。';

        this.chatMessages.push({ role: 'bot', text: replyText });
        this.chatThinking = false;
        if (!replyText.startsWith('申し訳ございません')) {
          this.chatSuggestions = [];
        } else {
          this.chatSuggestions = [
            '料金体系を教えて',
            'どんな機能がある？',
            '導入までの流れは？',
          ];
        }
        this.$nextTick(() => this.scrollChatToBottom());
      }, 600 + Math.random() * 500);
    },
    goToFaqPage(n) {
      if (n < 1 || n > this.totalFaqPages || n === this.faqPage) return;
      this.faqPage = n;
      this.openFaqIndex = null;
      this.$nextTick(() => {
        const el = document.getElementById('faq');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    },
    prevFaqPage() {
      this.goToFaqPage(this.faqPage - 1);
    },
    nextFaqPage() {
      this.goToFaqPage(this.faqPage + 1);
    },
    initReveal() {
      if (this._observer) this._observer.disconnect();
      const targets = this.$el.querySelectorAll('[data-reveal]:not(.is-visible)');
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
    clamp(val, min, max) {
      return Math.max(min, Math.min(max, val));
    },
    rotateHeroNotice() {
      // Rotate the floating "AI notice" card to a different message from the pool, on a quick cadence.
      let nextNoticeIndex = Math.floor(Math.random() * this.heroNoticePool.length);
      if (nextNoticeIndex === this.heroNoticeIndex) {
        nextNoticeIndex = (nextNoticeIndex + 1) % this.heroNoticePool.length;
      }
      this.heroNoticeIndex = nextNoticeIndex;
    },
    rotatePanelNote() {
      this.panelNoteIndex = (this.panelNoteIndex + 1) % this.panelNotes.length;
    },
    updateLiveMetrics() {
      // Hero dashboard mock: task counters random-walk within a realistic range.
      this.heroStats = {
        tasks: this.clamp(this.heroStats.tasks + Math.round((Math.random() - 0.5) * 8), 95, 160),
        pending: this.clamp(this.heroStats.pending + Math.round((Math.random() - 0.5) * 3), 2, 15),
        onTimeRate: this.clamp(this.heroStats.onTimeRate + Math.round((Math.random() - 0.5) * 3), 88, 99),
      };

      // Hero dashboard module progress bars: small random walk per module.
      this.mockProgress = this.mockProgress.map((p) =>
        this.clamp(p + Math.round((Math.random() - 0.5) * 6), 20, 98)
      );

      // AI score: small random walk within a realistic range.
      const scoreDelta = Math.round((Math.random() - 0.5) * 6); // -3 ~ +3
      this.aiScore = this.clamp(this.aiScore + scoreDelta, 58, 96);

      // Category breakdown: small random walk per category, recompute percentage.
      this.aiCategories = this.aiCategories.map((cat) => {
        const delta = Math.round((Math.random() - 0.5) * 2); // -1 ~ +1
        const score = this.clamp(cat.score + delta, 0, cat.max);
        return { ...cat, score, pct: Math.round((score / cat.max) * 100) };
      });

      // Occasionally swap one insight card's comment/icon/level for a different one from the pool,
      // so the text content itself rotates over time, not just the confidence number.
      if (Math.random() < 0.5) {
        const swapIndex = Math.floor(Math.random() * this.aiInsights.length);
        const currentTitles = this.aiInsights.map((ins) => ins.title);
        const candidates = this.insightPool.filter((p) => !currentTitles.includes(p.title));
        if (candidates.length) {
          const next = candidates[Math.floor(Math.random() * candidates.length)];
          const updated = [...this.aiInsights];
          updated[swapIndex] = { ...next };
          this.aiInsights = updated;
        }
      }

      // AI confidence per insight: small random walk.
      this.aiInsights = this.aiInsights.map((ins) => {
        const delta = Math.round((Math.random() - 0.5) * 4); // -2 ~ +2
        return { ...ins, conf: this.clamp(ins.conf + delta, 55, 99) };
      });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$nextTick(() => this.initReveal());
    this._liveTimer = setInterval(() => this.updateLiveMetrics(), 4000);
    this._noticeTimer = setInterval(() => this.rotateHeroNotice(), 2600);
    this._panelNoteTimer = setInterval(() => this.rotatePanelNote(), 6000);
  },
  beforeUnmount() {
    if (this._observer) this._observer.disconnect();
    if (this._liveTimer) clearInterval(this._liveTimer);
    if (this._noticeTimer) clearInterval(this._noticeTimer);
    if (this._panelNoteTimer) clearInterval(this._panelNoteTimer);
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
   NOTE: defined on .nokori-page (not :root) because this is a
   scoped <style> block — vue-loader can't attach the scope
   attribute to <html>, so `:root { ... }` never matches and
   the custom properties would silently stay undefined.
===================================================== */
.nokori-page {
  --navy:   #1a1140;
  --navy2:  #2a1763;
  --blue:   #6c3ce9;
  --blue2:  #c23a86;
  --accent: #ffb23e;
  --text:   #1c2433;
  --sub:    #4e5a6e;
  --border: #e4e0f5;
  --bg:     #f7f5ff;
  --white:  #ffffff;
  --grad-main: linear-gradient(120deg, #4b21b8 0%, #7d2fcf 45%, #b22d78 100%);
  --grad-soft: linear-gradient(135deg, rgba(108,60,233,0.12), rgba(178,45,120,0.12));
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

.br-sp { display: none; }

/* =====================================================
   Section header pattern
===================================================== */
.sec-head {
  margin-bottom: 60px;
}
.sec-head--light .sec-en,
.sec-head--light .sec-title,
.sec-head--light .sec-sub {
  color: #fff;
}
.sec-head--light .sec-en { opacity: 0.6; }
.sec-head--light .sec-sub { opacity: 0.8; }

.sec-en {
  display: inline-flex;
  align-items: center;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.2em;
  color: #010101;
  text-transform: uppercase;
  background: #fff;
  padding: 7px 16px;
  border-radius: 20px;
  margin-bottom: 18px;
  box-shadow: 0 8px 18px rgba(108,60,233,0.28);
}

.sec-title {
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 14px;
  line-height: 1.4;
  letter-spacing: -0.01em;
}

.sec-sub {
  font-size: 14.5px;
  color: #5a6478;
  line-height: 2;
  letter-spacing: 0.01em;
  margin: 0;
  max-width: 58ch;
}

/* =====================================================
   Buttons
===================================================== */
.btn-fill {
  display: inline-block;
  background: var(--grad-main);
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: none;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 10px 26px rgba(108,60,233,0.35);
  transition: transform 0.18s, box-shadow 0.18s;
}
.btn-fill:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(108,60,233,0.45); }

.btn-ghost {
  display: inline-block;
  background: rgba(255,255,255,0.08);
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: 2px solid rgba(255,255,255,0.55);
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.18s, background 0.18s, transform 0.18s;
}
.btn-ghost:hover { border-color: #fff; background: rgba(255,255,255,0.18); transform: translateY(-2px); }

.btn-line {
  display: inline-block;
  background: transparent;
  color: #6c3ce9;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: 2px solid #6c3ce9;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.18s, color 0.18s, transform 0.18s;
}
.btn-line:hover { background: var(--grad-main); color: #fff; border-color: transparent; transform: translateY(-2px); }

.btn-accent {
  display: inline-block;
  background: linear-gradient(120deg, #ffb23e, #ff7a3e);
  color: #1a1140;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.04em;
  padding: 14px 36px;
  border: none;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(255,138,62,0.35);
  transition: transform 0.18s, box-shadow 0.18s;
}
.btn-accent:hover { transform: translateY(-2px); box-shadow: 0 14px 30px rgba(255,138,62,0.45); }

/* =====================================================
   Hero
===================================================== */
.nokori-hero {
  background: var(--grad-main);
  color: #fff;
  padding: 108px 0 96px;
  position: relative;
  overflow: hidden;
}

.hero-grid-pattern {
  position: absolute;
  inset: 0;
  background: #1a1140;
  pointer-events: none;
}
.hero-grid-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 18%, rgba(255,178,62,0.3), transparent 42%),
    radial-gradient(circle at 88% 12%, rgba(178,45,120,0.32), transparent 45%),
    radial-gradient(circle at 80% 88%, rgba(108,60,233,0.4), transparent 50%);
  filter: blur(10px);
}
.hero-grid-pattern::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
  background-size: 46px 46px;
  mask-image: linear-gradient(180deg, rgba(0,0,0,0.5), transparent 80%);
}

/* Readability scrim: guarantees text contrast over the colorful blobs,
   regardless of where the bright patches fall. */
.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(100deg, rgba(10,5,28,0.55) 0%, rgba(10,5,28,0.32) 45%, rgba(10,5,28,0.08) 75%);
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
  color: #ffd98a;
  white-space: nowrap;
}
.hero-accent::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2px;
  height: 8px;
  background: rgba(255,178,62,0.3);
  z-index: -1;
}

.hero-eyebrow {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero-ai-flag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.03em;
  color: #1a1140;
  background: linear-gradient(120deg, #ffd98a, #ffb23e);
  border: none;
  padding: 7px 16px;
  border-radius: 20px;
  margin-bottom: 20px;
}

.ai-mark {
  flex-shrink: 0;
  display: inline-block;
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
  color: #ffd98a;
  margin: 0 0 6px;
}
.hero-stat-label {
  font-size: 11.5px;
  color: rgba(255,255,255,0.68);
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
  color: rgba(255,255,255,0.85);
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero-check-mark {
  color: #ffd98a;
  font-weight: 700;
  flex-shrink: 0;
}

/* --- Hero visual: dashboard mockup --- */
/* --- Hero panel: solution overview card --- */
.hero-panel {
  position: relative;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 24px;
  box-shadow: 0 30px 64px rgba(42,23,99,0.35);
  margin-top: 24px;
}

.panel-note {
  position: absolute;
  left: 20px;
  top: -18px;
  background: #fff;
  color: #000000;
  padding: 10px 18px;
  border-radius: 999px;
  font-size: 15px;
  line-height: 1.5;
  box-shadow: 0 12px 26px rgba(108,60,233,0.4);
  z-index: 2;
  overflow: hidden;
}
.panel-note > div {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}
.panel-note span {
  font-size: 14px;
  font-weight: 800;
  color: #ffd98a;
  flex-shrink: 0;
}

.note-fade-enter-active,
.note-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.note-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.note-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
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
  font-weight: 800;
  color: #1a1140;
  margin: 0;
}
.panel-badge {
  flex-shrink: 0;
  background: var(--grad-main);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 5px 14px;
  border-radius: 20px;
}

/* --- Panel mock: dashboard-style illustration --- */
.panel-mock {
  position: relative;
  background: #faf8ff;
  border: 1px solid #ece7fb;
  border-radius: 16px;
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
  background: var(--grad-main);
  border-color: transparent;
}
.mock-stat--accent .mock-stat-num { color: #fff; }
.mock-stat--accent .mock-stat-label { color: rgba(255,255,255,0.75); }
.mock-stat-num {
  font-size: 17px;
  font-weight: 800;
  color: #1a1140;
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
  border-radius: 10px;
  background: linear-gradient(135deg, #6c3ce9, #ff5da2);
  color: #fff;
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
  color: #1a1140;
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
.status-0 { color: #6c3ce9; background: #f0eaff; }
.status-1 { color: #b9791f; background: #fbf1de; }
.status-2 { color: #d6457e; background: #ffe4f0; }
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
  background: var(--grad-main);
  transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
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

.notice-fade-enter-active,
.notice-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.notice-fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.notice-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
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
  background: linear-gradient(150deg, #ffb23e, #ff5da2);
  color: #fff;
}
.mock-float-pulse {
  position: absolute;
  left: 8px;
  top: 8px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255,178,62,0.35);
  animation: mockPulseRing 2s ease-out infinite;
}
@keyframes mockPulseRing {
  0% { transform: scale(0.9); opacity: 0.8; }
  100% { transform: scale(1.7); opacity: 0; }
}
.mock-float-title {
  font-size: 11.5px;
  font-weight: 700;
  color: #1a1140;
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
  background: var(--bg);
  padding: 88px 0;
}

.ov-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.ov-item {
  padding: 38px 30px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: #fff;
  transition: transform 0.18s, box-shadow 0.18s;
  position: relative;
  overflow: hidden;
}
.ov-item:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(108,60,233,0.14); }

.ov-image {
  width: calc(100% + 60px);
  margin: -38px -30px 22px;
  height: 150px;
  overflow: hidden;
}
.ov-image :deep(svg) {
  width: 100%;
  height: 100%;
  display: block;
}

.ov-bg-num {
  position: absolute;
  right: 10px;
  bottom: -18px;
  font-size: 72px;
  font-weight: 800;
  color: #6c3ce9;
  opacity: 0.06;
  line-height: 1;
  pointer-events: none;
  font-family: Georgia, 'Times New Roman', serif;
}

.ov-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--grad-main);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
}

.ov-name {
  font-size: 16px;
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 12px;
  position: relative;
}

.ov-desc {
  font-size: 13.5px;
  color: #5a6478;
  line-height: 1.95;
  margin: 0;
  position: relative;
}

.ov-ai-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-top: 20px;
  padding-top: 16px;
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
  color: #8891a3;
  line-height: 1.8;
  margin: 0;
}

/* =====================================================
   Mid Banner
===================================================== */
.mid-banner {
  background: var(--grad-main);
  padding: 56px 0;
  position: relative;
  overflow: hidden;
}
.mid-banner-deco {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 92% 20%, rgba(255,255,255,0.16), transparent 45%),
    radial-gradient(circle at 6% 100%, rgba(255,255,255,0.1), transparent 50%);
  pointer-events: none;
}

.mid-banner-inner {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 28px;
}

.mid-banner-text { flex: 1; min-width: 240px; }

.mid-banner-flag {
  display: inline-flex;
  align-items: center;
  font-size: 10.5px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #fff;
  background: rgba(255,255,255,0.16);
  border: 1px solid rgba(255,255,255,0.35);
  padding: 6px 14px;
  border-radius: 999px;
  margin-bottom: 14px;
}

.mid-banner-title {
  color: #fff;
  font-size: 20px;
  font-weight: 800;
  margin: 0 0 10px;
  letter-spacing: 0.01em;
  line-height: 1.5;
}

.mid-banner-sub {
  color: rgba(255,255,255,0.75);
  font-size: 13px;
  margin: 0;
  line-height: 1.7;
}

.mid-banner-btns {
  display: flex;
  gap: 12px;
  flex-shrink: 0;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.btn-banner {
  display: inline-block;
  background: #fff;
  color: #6c3ce9;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 13px 30px;
  border: 1px solid #fff;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: 0 10px 24px rgba(10,5,28,0.25);
  transition: background 0.18s, border-color 0.18s, color 0.18s, transform 0.18s;
}
.btn-banner:hover { background: transparent; color: #fff; transform: translateY(-2px); }

.btn-banner--ghost {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255,255,255,0.5);
}
.btn-banner--ghost:hover { background: rgba(255,255,255,0.15); border-color: #fff; color: #fff; }

/* =====================================================
   Challenges Section
===================================================== */
.challenges-section {
  background: #fff;
  padding: 88px 0;
  position: relative;
  overflow: hidden;
}
.challenges-section::before,
.challenges-section::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  background: var(--grad-soft);
  pointer-events: none;
  animation: chFloat 7s ease-in-out infinite;
}
.challenges-section::before {
  width: 220px;
  height: 220px;
  top: -80px;
  right: -60px;
}
.challenges-section::after {
  width: 160px;
  height: 160px;
  bottom: -60px;
  left: -40px;
  animation-delay: 1.2s;
}
@keyframes chFloat {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-16px) scale(1.06); }
}

.cs-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 26px;
}

.cs-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  transition: box-shadow 0.15s, transform 0.15s, border-color 0.15s;
  display: flex;
  flex-direction: column;
}
.cs-card:hover { box-shadow: 0 16px 32px rgba(108,60,233,0.14); transform: translateY(-4px); border-color: transparent; }

.cs-image {
  width: 100%;
  line-height: 0;
}
.cs-image :deep(svg) {
  display: block;
  width: 100%;
  height: auto;
}

.cs-body {
  padding: 22px 24px 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.cs-tag {
  align-self: flex-start;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #6c3ce9;
  background: var(--grad-soft);
  padding: 4px 10px;
  border-radius: 999px;
}

.cs-label {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.04em;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 6px;
}
.cs-label--problem {
  color: #b23b3b;
  background: #fbeaea;
}
.cs-label--solution {
  color: #b9791f;
  background: #fbf1de;
}

.cs-problem-title {
  display: block;
  font-size: 14.5px;
  font-weight: 800;
  color: #1a1140;
  margin-bottom: 4px;
}
.cs-problem-desc {
  margin: 0;
  font-size: 13px;
  color: #5a6478;
  line-height: 1.85;
}

.cs-solution {
  padding-top: 10px;
  border-top: 1px dashed var(--border);
}
.cs-solution-title {
  display: block;
  font-size: 14.5px;
  font-weight: 800;
  color: #1a1140;
  margin-bottom: 4px;
}
.cs-solution-desc {
  margin: 0;
  font-size: 13px;
  color: #5a6478;
  line-height: 1.85;
}

.cs-extra-head {
  margin: 56px 0 24px;
  text-align: center;
}
.cs-extra-title {
  font-size: 19px;
  font-weight: 800;
  color: #1a1140;
}

.cs-extra-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.cs-extra-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  transition: box-shadow 0.15s, transform 0.15s, border-color 0.15s;
}
.cs-extra-card:hover { box-shadow: 0 14px 28px rgba(108,60,233,0.14); transform: translateY(-3px); border-color: transparent; }

.cs-extra-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--grad-soft);
  color: #6c3ce9;
  margin: 0 auto 14px;
}

.cs-extra-name {
  font-size: 15px;
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 8px;
}
.cs-extra-desc {
  margin: 0;
  font-size: 13px;
  color: #5a6478;
  line-height: 1.85;
}

/* =====================================================
   Features Section
===================================================== */
.features-section {
  background: var(--bg);
  padding: 88px 0;
}


.feat-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
}

.feat-card {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 40px 36px;
  transition: transform 0.18s, box-shadow 0.18s;
  position: relative;
}
.feat-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(108,60,233,0.14); }

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
  color: #8891a3;
  line-height: 1.85;
  margin: 0;
}

.feat-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.feat-icon {
  width: 46px;
  height: 46px;
  border-radius: 14px;
  background: var(--grad-main);
  color: #fff;
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
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #6c3ce9;
  text-transform: uppercase;
  border: none;
  padding: 4px 12px;
  margin-bottom: 18px;
  border-radius: 999px;
  background: var(--grad-soft);
}

.feat-title {
  font-size: 18px;
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 14px;
}

.feat-desc {
  font-size: 13.5px;
  color: #5a6478;
  line-height: 1.95;
  margin: 0;
  max-width: 48ch;
}

/* =====================================================
   AI Engine Section
===================================================== */
.ai-section {
  background: #140b33;
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
  background: radial-gradient(circle, rgba(255,93,162,0.2), transparent 70%);
  pointer-events: none;
}

.ai-head { max-width: 720px; margin-bottom: 48px; position: relative; z-index: 1; }

.ai-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #ffd98a;
  border: none;
  background: var(--grad-main);
  padding: 6px 16px;
  margin-bottom: 18px;
  border-radius: 999px;
  color: #fff;
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
  background: linear-gradient(160deg, #2a1763, #1a1140);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 18px;
  padding: 30px 26px;
  display: flex;
  flex-direction: column;
}

.ai-score-label {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  margin: 0 0 12px;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 7px;
}

.ai-live-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6);
  animation: aiLivePulse 2s infinite;
}
@keyframes aiLivePulse {
  0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.55); }
  70% { box-shadow: 0 0 0 6px rgba(74, 222, 128, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
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
  color: #ffd98a;
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
  border-radius: 6px;
}
.ai-grade-dot.is-current {
  color: #1a1140;
  background: #ffd98a;
  border-color: #ffd98a;
}

.ai-score-note {
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  margin: 0;
}
.ai-score-note strong { color: #ffd98a; }

.ai-insight-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
}

.ai-insight {
  background: linear-gradient(160deg, #241552, #170e3a);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  padding: 18px 22px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.insight-swap-enter-active,
.insight-swap-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
  transition-delay: var(--delay, 0ms);
}
.insight-swap-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.insight-swap-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
.insight-swap-leave-active {
  position: absolute;
  transition-delay: 0ms;
}
.insight-swap-move {
  transition: transform 0.5s ease;
}

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
  color: rgba(255,255,255,0.68);
  line-height: 1.9;
  margin: 0 0 10px;
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
  border-radius: 3px;
  background: rgba(255,255,255,0.1);
  overflow: hidden;
}
.ai-cat-bar-fill {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #ff5da2, #ffd98a);
  transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
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
  gap: 10px;
}

.ai-action {
  background: linear-gradient(160deg, #241552, #170e3a);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
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
  background: linear-gradient(160deg, #1a1140, #2a1763);
  padding: 88px 0;
}

.str-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.str-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  padding: 40px 28px;
  transition: background 0.15s, transform 0.15s;
}
.str-card:hover { background: rgba(255,255,255,0.1); transform: translateY(-4px); }
.str-card:hover .str-icon { transform: scale(1.1) rotate(-6deg); background: var(--grad-main); color: #fff; }

.str-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255,255,255,0.08);
  color: #ff8fc4;
  margin-bottom: 18px;
  transition: transform 0.25s ease, background 0.25s ease, color 0.25s ease;
}

.str-num {
  font-size: 20px;
  font-weight: 800;
  color: #ff5da2;
  opacity: 0.5;
  line-height: 1;
  margin-bottom: 10px;
}

.str-name {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 14px;
}

.str-desc {
  font-size: 13.5px;
  color: rgba(255,255,255,0.68);
  line-height: 1.95;
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
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 16px;
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
  background: var(--grad-main);
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
  border: none;
  border-radius: 10px;
  padding: 2px 8px;
  margin: 0 0 8px 8px;
  vertical-align: middle;
}

.wf-title {
  font-size: 14px;
  font-weight: 800;
  color: #1a1140;
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
  background: #fff;
  padding: 88px 0;
}

.ben-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.ben-card {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 44px 36px;
  transition: transform 0.18s, box-shadow 0.18s;
}
.ben-card:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(108,60,233,0.12); }

.ben-header {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
}

.ben-num {
  font-size: 24px;
  font-weight: 800;
  background: var(--grad-main);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  line-height: 1;
}

.ben-title {
  font-size: 16px;
  font-weight: 800;
  color: #1a1140;
  margin: 0;
}

.ben-desc {
  font-size: 13.5px;
  color: #5a6478;
  line-height: 1.95;
  margin: 0;
  max-width: 50ch;
}

/* =====================================================
   Before / After (Compare) Section
===================================================== */
.compare-section {
  background: var(--bg);
  padding: 88px 0;
}

.compare-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: stretch;
  gap: 20px;
}

.compare-col {
  background: #fff;
  border-radius: 20px;
  padding: 34px 32px;
  border: 1px solid var(--border);
}
.compare-col--before { border-top: 4px solid #c9c2da; }
.compare-col--after {
  border-top: 4px solid transparent;
  border-image: var(--grad-main) 1;
  box-shadow: 0 20px 44px rgba(108,60,233,0.14);
}

.compare-label {
  display: inline-block;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  margin: 0 0 18px;
  padding: 5px 16px;
  border-radius: 999px;
}
.compare-col--before .compare-label { color: #6b7688; background: #eef0f4; }
.compare-col--after .compare-label { color: #fff; background: var(--grad-main); }

.compare-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.compare-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  color: #2b3348;
  line-height: 1.9;
}

.compare-mark {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 800;
  margin-top: 1px;
}
.compare-mark--before { color: #b3261e; background: #fde6e4; }
.compare-mark--after { color: #fff; background: var(--grad-main); }

.compare-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: 300;
  color: #c9bdf0;
}

/* =====================================================
   Pricing Section
===================================================== */
.pricing-section {
  background: #f7f8fc;
  padding: 88px 0;
}

.pr-campaign {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px 16px;
  background: linear-gradient(90deg, #fff4e5, #fdeaf2);
  border: 1px solid #f6d9b8;
  border-radius: 14px;
  padding: 16px 22px;
  margin-bottom: 36px;
}
.pr-campaign-badge {
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 800;
  color: #b9791f;
}
.pr-campaign-text {
  margin: 0;
  font-size: 13px;
  color: #5a6478;
  line-height: 1.8;
}

.pr-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 48px;
}

.pr-card {
  position: relative;
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s;
}
.pr-card:hover { transform: translateY(-4px); box-shadow: 0 18px 36px rgba(108,60,233,0.12); }
.pr-card--main {
  border-color: transparent;
  box-shadow: 0 18px 40px rgba(108,60,233,0.18);
  background: linear-gradient(180deg, #fbf9ff, #fff);
}
.pr-card--main::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 18px;
  padding: 1.5px;
  background: var(--grad-main);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.pr-plan-tag {
  align-self: flex-start;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #6c3ce9;
  background: var(--grad-soft);
  padding: 3px 10px;
  border-radius: 999px;
  margin-bottom: 10px;
}

.pr-plan-name {
  font-size: 16px;
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 8px;
}

.pr-plan-desc {
  font-size: 12.5px;
  color: #5a6478;
  line-height: 1.8;
  margin: 0 0 16px;
  min-height: 3.6em;
}

.pr-feature-list {
  list-style: none;
  margin: 0 0 14px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pr-feature-list li {
  font-size: 12px;
  color: #3a4256;
  padding-left: 16px;
  position: relative;
  line-height: 1.6;
}
.pr-feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #1f9d63;
  font-weight: 700;
  font-size: 11px;
}

.pr-coming {
  font-size: 11px;
  font-weight: 700;
  color: #b9791f;
  background: #fbf1de;
  border-radius: 6px;
  padding: 5px 10px;
  margin: 0 0 14px;
  align-self: flex-start;
}

.pr-price-box {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px dashed var(--border);
}
.pr-price-regular {
  margin: 0 0 4px;
  font-size: 11.5px;
  color: #8891a3;
}
.pr-price-regular s { color: #b7bfcf; }
.pr-price-label {
  margin: 0 0 2px;
  font-size: 11px;
  font-weight: 700;
  color: #e3598c;
}
.pr-price-main {
  margin: 0 0 4px;
  display: flex;
  align-items: baseline;
  gap: 4px;
}
.pr-price-num {
  font-size: 28px;
  font-weight: 800;
  color: #1a1140;
}
.pr-price-unit {
  font-size: 12px;
  color: #5a6478;
}
.pr-price-tax {
  margin: 0;
  font-size: 11px;
  color: #8891a3;
}

.pr-common {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 28px 30px;
  margin-bottom: 36px;
}
.pr-common-title {
  font-size: 14.5px;
  font-weight: 800;
  color: #1a1140;
  margin: 0 0 18px;
}
.pr-common-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.pr-common-item {
  text-align: center;
  padding: 14px;
  background: var(--bg);
  border-radius: 12px;
}
.pr-common-label {
  margin: 0 0 6px;
  font-size: 11.5px;
  color: #8891a3;
}
.pr-common-value {
  margin: 0;
  font-size: 17px;
  font-weight: 800;
  color: #1a1140;
}

.pr-compare-cta {
  text-align: center;
  background: var(--grad-soft);
  border-radius: 16px;
  padding: 30px 24px;
  margin-bottom: 28px;
}
.pr-compare-title {
  margin: 0 0 6px;
  font-size: 15px;
  font-weight: 800;
  color: #1a1140;
}
.pr-compare-sub {
  margin: 0 0 16px;
  font-size: 12.5px;
  color: #5a6478;
}
.pr-compare-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fff;
  border: 1px solid #d8c9f7;
  color: #6c3ce9;
  font-size: 13px;
  font-weight: 700;
  padding: 11px 22px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.pr-compare-link:hover { background: var(--grad-main); color: #fff; border-color: transparent; }

.pr-notes {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.pr-notes li {
  font-size: 11px;
  color: #8891a3;
  line-height: 1.8;
}

/* =====================================================
   FAQ Section
===================================================== */
.faq-section {
  background: #fff;
  padding: 88px 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq-item {
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  transition: box-shadow 0.18s, border-color 0.18s;
  animation: faqFadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
  animation-delay: var(--delay, 0ms);
}
.faq-item.is-open {
  border-color: transparent;
  box-shadow: 0 16px 34px rgba(108,60,233,0.12);
}

@keyframes faqFadeIn {
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  border: none;
  padding: 20px 24px;
  text-align: left;
  cursor: pointer;
  font-family: inherit;
}

.faq-q-mark {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--grad-main);
  color: #fff;
  font-size: 13px;
  font-weight: 800;
}

.faq-q-text {
  flex: 1;
  font-size: 14px;
  font-weight: 700;
  color: #1a1140;
  line-height: 1.6;
}

.faq-toggle-icon {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--bg);
  color: #6c3ce9;
  font-size: 16px;
  font-weight: 700;
}

.faq-answer {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 0 24px 22px 24px;
}
.faq-a-mark {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--bg);
  color: #6c3ce9;
  font-size: 13px;
  font-weight: 800;
}
.faq-answer p {
  margin: 0;
  font-size: 13.5px;
  color: #5a6478;
  line-height: 2;
  max-width: 54ch;
}

.faq-collapse-enter-active,
.faq-collapse-leave-active {
  overflow: hidden;
}
.faq-collapse-enter-from,
.faq-collapse-leave-to {
  opacity: 0;
}

.faq-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 36px;
}
.faq-page-btn,
.faq-page-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  padding: 0 6px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fff;
  color: #5a6478;
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.18s;
  font-family: inherit;
}
.faq-page-btn:hover,
.faq-page-arrow:hover:not(:disabled) {
  border-color: #6c3ce9;
  color: #6c3ce9;
}
.faq-page-btn.is-active {
  background: var(--grad-main);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 8px 18px rgba(108,60,233,0.25);
}
.faq-page-arrow {
  font-size: 18px;
}
.faq-page-arrow:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.faq-page-indicator {
  width: 100%;
  text-align: center;
  margin-top: 6px;
  font-size: 12px;
  color: #9aa3b5;
}

/* =====================================================
   Contact Section
===================================================== */
.contact-section {
  background: var(--bg);
  padding: 96px 0;
  border-top: none;
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

  .str-grid { grid-template-columns: repeat(2, 1fr); }
  .cs-grid { grid-template-columns: 1fr; }

  .ben-grid { grid-template-columns: repeat(2, 1fr); }

  .pr-grid { grid-template-columns: repeat(2, 1fr); }
  .pr-common-grid { grid-template-columns: repeat(3, 1fr); }

  .wf-flow { flex-direction: column; }
  .wf-item { flex-direction: column; }
  .wf-arrow { transform: rotate(90deg); margin: 4px 0; }

  .ai-showcase { grid-template-columns: 1fr; }
  .ai-category-grid { grid-template-columns: repeat(3, 1fr); }
  .ai-action-list { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .wrap { padding: 0 20px; }
  .nokori-hero { padding: 64px 0 52px; }
  .hero-lead .br-pc { display: none; }
  .br-sp { display: inline; }
  .hero-inner { grid-template-columns: 1fr; gap: 40px; }
  .hero-eyebrow { font-size: 10px; }
  .hero-title { line-height: 1.5; }
  .hero-lead { font-size: 13.5px; margin-bottom: 32px; }
  .hero-cta { flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content: center; gap: 8px; }
  .hero-cta a {
    flex: 1 1 0;
    width: auto;
    max-width: 100%;
    text-align: center;
    padding: 11px 8px;
    box-sizing: border-box;
    border-radius: 999px;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.02em;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    isolation: isolate;
  }
  .hero-cta a::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0) 55%);
    pointer-events: none;
  }
  .hero-cta a:active { transform: scale(0.97); }
  .hero-cta .btn-fill { box-shadow: 0 8px 18px rgba(108,60,233,0.4); }
  .hero-cta .btn-accent { box-shadow: 0 8px 16px rgba(255,138,62,0.4); }
  .hero-cta .btn-ghost {
    background: rgba(255,255,255,0.08);
    border-width: 1.5px;
    border-color: rgba(255,255,255,0.4);
    backdrop-filter: blur(8px);
  }
  .hero-panel { margin-top: 32px; border-radius: 18px; }
  .panel-note { left: 14px; top: -16px; padding: 8px 14px; font-size: 10.5px; max-width: calc(100% - 28px); }
  .panel-note span { font-size: 10.5px; }
  .panel-inner { padding: 28px 20px 22px; }
  .panel-mock { margin-bottom: 36px; border-radius: 14px; }
  .mock-stats { grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .mock-stat { padding: 8px 8px; }
  .mock-stat-num { font-size: 15px; }
  .mock-stat-label { font-size: 9px; }
  .mock-float { padding: 8px 12px; max-width: calc(100% - 20px); }
  .mock-float-title { font-size: 10.5px; }
  .mock-float-sub { font-size: 9px; }
  .hero-stats { gap: 18px; }
  .hero-checklist { grid-template-columns: 1fr; }

  .ov-grid { grid-template-columns: 1fr; }
  .ov-item { padding: 28px 22px; }
  .ov-image { width: calc(100% + 44px); margin: -28px -22px 18px; height: 130px; }

  .ch-row { flex-direction: column; gap: 10px; padding: 22px 18px; }
  .ch-left { min-width: auto; }
  .ch-ai-fix { margin-left: 0; }

  .cs-extra-grid { grid-template-columns: 1fr; }

  .feat-grid { grid-template-columns: 1fr; }
  .feat-card { padding: 30px 24px; }

  .str-grid { grid-template-columns: 1fr 1fr; }
  .str-card { padding: 28px 20px; }

  .ben-grid { grid-template-columns: 1fr; }
  .ben-card { padding: 32px 24px; }

  .pr-grid { grid-template-columns: 1fr; }
  .pr-common-grid { grid-template-columns: 1fr; }
  .pr-campaign { flex-direction: column; align-items: flex-start; }

  .compare-grid { grid-template-columns: 1fr; }
  .compare-arrow { transform: rotate(90deg); padding: 4px 0; }
  .compare-col { padding: 28px 24px; }

  .faq-question { padding: 16px 18px; gap: 10px; }
  .faq-q-text { font-size: 13px; }
  .faq-answer { padding: 0 18px 18px 18px; }

  .contact-wrap { flex-direction: column; gap: 30px; }
  .contact-btns { flex-direction: column; width: 100%; }
  .contact-btns a { width: 100%; text-align: center; box-sizing: border-box; }

  .mid-banner-inner { flex-direction: column; align-items: flex-start; }
  .mid-banner-btns { width: 100%; }
  .mid-banner-btns a { flex: 1; text-align: center; }

  .ai-category-grid { grid-template-columns: repeat(2, 1fr); }
  .ai-action-list { grid-template-columns: 1fr; }

  .overview-section,
  .challenges-section,
  .features-section,
  .ai-section,
  .strength-section,
  .workflow-section,
  .benefits-section,
  .contact-section { padding: 60px 0; }
}

@media (max-width: 480px) {
  .hero-title { font-size: 22px; }
  .hero-ai-flag { font-size: 10.5px; padding: 6px 12px; }
  .hero-stats { flex-direction: column; gap: 12px; padding-bottom: 20px; }
  .hero-stat-label { max-width: none; }
  .sec-title { font-size: 19px; }
  .sec-sub { font-size: 13px; }
  .mock-stats { grid-template-columns: 1fr 1fr; }
  .mock-stats .mock-stat:last-child { grid-column: span 2; }
  .mock-float { position: static; margin-top: 10px; width: 100%; box-sizing: border-box; animation: none; }
  .mock-float-pulse { display: none; }
  .str-grid { grid-template-columns: 1fr; }
  .contact-btns { flex-direction: column; }
  .ai-category-grid { grid-template-columns: 1fr 1fr; }
  .ov-item, .feat-card, .ben-card { padding: 24px 18px; }
  .ai-action-list { grid-template-columns: 1fr; }
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

/* =====================================================
   Support Chat Widget
===================================================== */
.chatbot-widget {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 900;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
}

.chatbot-fab {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #1a1f2e;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 24px rgba(17, 20, 31, 0.3);
  transition: transform 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;
}
.chatbot-fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(17, 20, 31, 0.38);
  background: #23293c;
}
.chatbot-fab.is-open {
  background: #343b4f;
}

.chatbot-panel {
  width: 348px;
  max-width: calc(100vw - 48px);
  height: 490px;
  max-height: calc(100vh - 140px);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 20px 48px rgba(20, 22, 32, 0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #e3e5ea;
}

.chatbot-header {
  background: #1a1f2e;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 11px;
  color: #fff;
  flex-shrink: 0;
}
.chatbot-header-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  flex-shrink: 0;
}
.chatbot-header-text {
  flex: 1;
  min-width: 0;
}
.chatbot-title {
  margin: 0;
  font-size: 13.5px;
  font-weight: 800;
}
.chatbot-sub {
  margin: 2px 0 0;
  font-size: 11px;
  opacity: 0.85;
}
.chatbot-close {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  line-height: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.14s;
}
.chatbot-close:hover {
  color: #fff;
}

.chatbot-body {
  flex: 1;
  overflow-y: auto;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f5f6f8;
}

.chat-msg {
  display: flex;
}
.chat-msg-bot {
  justify-content: flex-start;
}
.chat-msg-user {
  justify-content: flex-end;
}
.chat-bubble {
  max-width: 82%;
  padding: 10px 14px;
  border-radius: 10px;
  font-size: 12.5px;
  line-height: 1.7;
}
.chat-bubble p {
  margin: 0;
  white-space: pre-line;
}
.chat-msg-bot .chat-bubble {
  background: #fff;
  border: 1px solid #e3e5ea;
  color: #2a2e38;
  border-bottom-left-radius: 2px;
}
.chat-msg-user .chat-bubble {
  background: #1a1f2e;
  color: #fff;
  border-bottom-right-radius: 2px;
}

.chat-typing {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 13px 16px;
}
.chat-typing span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #aeb3bf;
  animation: chatTypingBounce 1.2s infinite ease-in-out;
}
.chat-typing span:nth-child(2) {
  animation-delay: 0.15s;
}
.chat-typing span:nth-child(3) {
  animation-delay: 0.3s;
}
@keyframes chatTypingBounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.5;
  }
  30% {
    transform: translateY(-4px);
    opacity: 1;
  }
}

.chat-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
}
.chat-suggest-btn {
  border: 1px solid #d7dae1;
  background: #fff;
  color: #343b4f;
  font-size: 11px;
  font-weight: 700;
  padding: 7px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.14s;
  font-family: inherit;
}
.chat-suggest-btn:hover {
  background: #1a1f2e;
  color: #fff;
  border-color: #1a1f2e;
}

.chatbot-input-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid #e3e5ea;
  background: #fff;
  flex-shrink: 0;
}
.chatbot-input {
  flex: 1;
  border: 1px solid #d7dae1;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 12.5px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.16s;
}
.chatbot-input:focus {
  border-color: #1a1f2e;
}
.chatbot-send {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  border: none;
  background: #1a1f2e;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.16s;
}
.chatbot-send:hover {
  background: #343b4f;
}

.chat-panel-fade-enter-active,
.chat-panel-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.chat-panel-fade-enter-from,
.chat-panel-fade-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

@media (max-width: 600px) {
  .chatbot-widget {
    right: 16px;
    bottom: 16px;
  }
  .chatbot-panel {
    width: calc(100vw - 32px);
    height: calc(100vh - 120px);
  }
}
</style>
