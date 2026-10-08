<template>
  <div class="homepage">
    <!-- Hero Slider Section -->
    <div class="slider">
      <div class="arrow left-arrow" @click="prevSlide" role="button" aria-label="前のスライド">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.28)" />
          <path d="M14 8l-4 4 4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <transition-group name="slide" tag="div">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="slide"
          :style="{ transform: 'translateX(' + (index - currentIndex) * 100 + '%' }"
        >
          <img :src="slide.image" alt="Slide" class="slide-image" />
          <div class="slide-text" v-html="slide.text"></div>
        </div>
      </transition-group>
      <div class="arrow right-arrow" @click="nextSlide" role="button" aria-label="次のスライド">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="12" cy="12" r="11" fill="rgba(0,0,0,0.28)" />
          <path d="M10 8l4 4-4 4" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>

    <!-- NOKORI Promotion Banner -->
    <section class="nokori-promo" :class="'theme-' + currentNokoriSlide.theme">
      <div class="nokori-promo-inner" :class="'layout-' + currentNokoriSlide.layout">
        <transition name="promo-fade" mode="out-in">
          <div class="nokori-promo-text" :key="nokoriSlideIndex">
            <span class="nokori-badge">
              <svg class="nokori-badge-icon" width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="7" y="7" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
              {{ currentNokoriSlide.badge }}
            </span>
            <h3 class="nokori-title" v-html="currentNokoriSlide.title"></h3>
            <p class="nokori-desc" v-html="currentNokoriSlide.desc"></p>

            <!-- NOKORI product: stat grid -->
            <div class="nokori-stats" v-if="currentNokoriSlide.layout === 'nokori'">
              <div class="nokori-stat" v-for="(stat, sIdx) in currentNokoriSlide.stats" :key="sIdx">
                <p class="nokori-stat-num">{{ stat.num }}<span>{{ stat.unit }}</span></p>
                <p class="nokori-stat-label">{{ stat.label }}</p>
              </div>
            </div>

            <!-- Campaign: big price callout -->
            <div class="nokori-campaign-callout" v-else-if="currentNokoriSlide.layout === 'campaign'">
              <div class="campaign-price">
                <span class="campaign-price-old">{{ currentNokoriSlide.priceOld }}</span>
                <span class="campaign-price-new">{{ currentNokoriSlide.priceNew }}</span>
              </div>
              <ul class="campaign-points">
                <li v-for="(pt, pIdx) in currentNokoriSlide.points" :key="pIdx">
                  <span class="campaign-points-check">✓</span>{{ pt }}
                </li>
              </ul>
            </div>

            <!-- Recruitment: step timeline -->
            <ol class="nokori-timeline" v-else-if="currentNokoriSlide.layout === 'recruit'">
              <li v-for="(step, tIdx) in currentNokoriSlide.steps" :key="tIdx">
                <span class="nokori-timeline-num">{{ tIdx + 1 }}</span>
                <div class="nokori-timeline-body">
                  <p class="nokori-timeline-title">{{ step.title }}</p>
                  <p class="nokori-timeline-desc">{{ step.desc }}</p>
                </div>
              </li>
            </ol>

            <div class="nokori-cta">
              <a href="#" class="nokori-btn nokori-btn--fill" @click.prevent="navigate({ link: currentNokoriSlide.link })">
                {{ currentNokoriSlide.cta }}<span class="card-button-arrow">›</span>
              </a>
            </div>
          </div>
        </transition>
        <div class="nokori-promo-media">
          <transition name="promo-fade" mode="out-in">
            <div class="nokori-illu" :key="nokoriSlideIndex">
              <!-- NOKORI product illustration -->
              <svg v-if="currentNokoriSlide.illustration === 'dashboard'" class="nokori-illu-svg" viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="nkGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#8b5cf6"/>
                    <stop offset="100%" stop-color="#ec4899"/>
                  </linearGradient>
                  <linearGradient id="nkGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#a78bfa"/>
                    <stop offset="100%" stop-color="#f472b6"/>
                  </linearGradient>
                  <radialGradient id="nkGlow" cx="50%" cy="35%" r="65%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                  </radialGradient>
                </defs>

                <!-- soft background blobs -->
                <circle class="nk-blob nk-blob--1" cx="90" cy="70" r="70" fill="url(#nkGrad1)" opacity="0.18"/>
                <circle class="nk-blob nk-blob--2" cx="330" cy="260" r="90" fill="url(#nkGrad2)" opacity="0.16"/>
                <circle cx="200" cy="170" r="150" fill="url(#nkGlow)"/>

                <!-- device / monitor -->
                <g class="nk-device">
                  <rect x="70" y="60" width="260" height="170" rx="16" fill="#1a1140"/>
                  <rect x="70" y="60" width="260" height="170" rx="16" fill="url(#nkGrad1)" opacity="0.08"/>
                  <rect x="86" y="78" width="228" height="134" rx="8" fill="#ffffff"/>
                  <rect x="156" y="230" width="88" height="10" rx="5" fill="#1a1140" opacity="0.5"/>
                  <rect x="130" y="240" width="140" height="8" rx="4" fill="#1a1140" opacity="0.25"/>

                  <!-- screen content: bar chart -->
                  <rect x="104" y="160" width="18" height="36" rx="3" fill="url(#nkGrad1)" opacity="0.55"/>
                  <rect x="130" y="144" width="18" height="52" rx="3" fill="url(#nkGrad1)" opacity="0.75"/>
                  <rect x="156" y="126" width="18" height="70" rx="3" fill="url(#nkGrad1)"/>
                  <rect x="182" y="150" width="18" height="46" rx="3" fill="url(#nkGrad1)" opacity="0.65"/>

                  <!-- top line chart -->
                  <path d="M104 110 L140 96 L168 104 L196 82 L224 90 L252 72 L280 86"
                        stroke="#ec4899" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
                  <circle class="nk-pulse-dot" cx="280" cy="86" r="5" fill="#ec4899"/>

                  <!-- small check badge -->
                  <circle cx="252" cy="110" r="16" fill="#eafaf1"/>
                  <path d="M245 110l5 5 9-10" stroke="#1f9d63" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                </g>

                <!-- stand -->
                <rect x="186" y="230" width="28" height="14" rx="3" fill="#1a1140" opacity="0.7"/>
              </svg>

              <!-- Recruitment illustration: profile/ID badge card -->
              <svg v-else-if="currentNokoriSlide.illustration === 'recruit'" class="nokori-illu-svg" viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="rcGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#2dd4bf"/>
                    <stop offset="100%" stop-color="#38bdf8"/>
                  </linearGradient>
                  <linearGradient id="rcGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#5eead4"/>
                    <stop offset="100%" stop-color="#7dd3fc"/>
                  </linearGradient>
                  <radialGradient id="rcGlow" cx="50%" cy="35%" r="65%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                  </radialGradient>
                </defs>

                <!-- soft background blobs -->
                <circle class="nk-blob nk-blob--1" cx="90" cy="70" r="70" fill="url(#rcGrad1)" opacity="0.18"/>
                <circle class="nk-blob nk-blob--2" cx="330" cy="260" r="90" fill="url(#rcGrad2)" opacity="0.16"/>
                <circle cx="200" cy="170" r="150" fill="url(#rcGlow)"/>

                <!-- ID / profile card -->
                <g class="nk-device">
                  <rect x="100" y="58" width="200" height="190" rx="18" fill="#ffffff"/>
                  <rect x="100" y="58" width="200" height="190" rx="18" fill="url(#rcGrad1)" opacity="0.06"/>
                  <rect x="100" y="58" width="200" height="46" rx="18" fill="url(#rcGrad1)"/>
                  <rect x="100" y="86" width="200" height="18" fill="url(#rcGrad1)"/>

                  <!-- avatar -->
                  <circle cx="200" cy="140" r="30" fill="url(#rcGrad2)" opacity="0.25"/>
                  <circle cx="200" cy="130" r="14" fill="url(#rcGrad1)"/>
                  <path d="M176 164c0-15 11-24 24-24s24 9 24 24" fill="url(#rcGrad1)"/>

                  <!-- text lines -->
                  <rect x="150" y="198" width="100" height="8" rx="4" fill="#0f172a" opacity="0.65"/>
                  <rect x="166" y="212" width="68" height="6" rx="3" fill="#0f172a" opacity="0.3"/>

                  <!-- approved ribbon badge -->
                  <circle cx="268" cy="218" r="20" fill="#ffffff"/>
                  <circle cx="268" cy="218" r="20" fill="url(#rcGrad1)" opacity="0.12"/>
                  <path d="M259 218l6 6 12-13" stroke="#0f766e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </g>

                <!-- graduation cap -->
                <g transform="translate(62 60)">
                  <path d="M0 10 L34 0 L68 10 L34 20 Z" fill="#0f172a"/>
                  <path d="M12 16 V32 Q34 42 56 32 V16" stroke="#0f172a" stroke-width="3" fill="none" stroke-linecap="round"/>
                  <circle class="nk-pulse-dot" cx="68" cy="10" r="3.2" fill="#38bdf8"/>
                  <path d="M68 10 V28" stroke="#38bdf8" stroke-width="2"/>
                </g>

                <!-- star accent -->
                <g class="nk-pulse-dot" transform="translate(316 160)">
                  <path d="M10 0 L12.4 7 L20 7.6 L14 12.4 L16 20 L10 15.6 L4 20 L6 12.4 L0 7.6 L7.6 7 Z" fill="#fde68a"/>
                </g>

                <!-- small floating dots -->
                <circle cx="96" cy="230" r="5" fill="url(#rcGrad1)" opacity="0.7"/>
                <circle cx="330" cy="100" r="4" fill="url(#rcGrad2)" opacity="0.6"/>
              </svg>

              <!-- Campaign illustration: discount coupon/ticket card -->
              <svg v-else class="nokori-illu-svg" viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cpGrad1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f472b6"/>
                    <stop offset="100%" stop-color="#fb923c"/>
                  </linearGradient>
                  <linearGradient id="cpGrad2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#fbcfe8"/>
                    <stop offset="100%" stop-color="#fdba74"/>
                  </linearGradient>
                  <radialGradient id="cpGlow" cx="50%" cy="35%" r="65%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
                  </radialGradient>
                </defs>

                <!-- soft background blobs -->
                <circle class="nk-blob nk-blob--1" cx="90" cy="70" r="70" fill="url(#cpGrad1)" opacity="0.18"/>
                <circle class="nk-blob nk-blob--2" cx="330" cy="260" r="90" fill="url(#cpGrad2)" opacity="0.16"/>
                <circle cx="200" cy="170" r="150" fill="url(#cpGlow)"/>

                <!-- coupon / ticket card -->
                <g class="nk-device">
                  <rect x="90" y="90" width="220" height="130" rx="16" fill="#ffffff"/>
                  <rect x="90" y="90" width="220" height="130" rx="16" fill="url(#cpGrad1)" opacity="0.06"/>
                  <!-- perforation notches -->
                  <circle cx="200" cy="90" r="10" fill="#1a1140"/>
                  <circle cx="200" cy="220" r="10" fill="#1a1140"/>
                  <!-- dashed divider -->
                  <line x1="200" y1="110" x2="200" y2="200" stroke="url(#cpGrad1)" stroke-width="2" stroke-dasharray="6 6"/>

                  <!-- left: percent -->
                  <text x="145" y="168" text-anchor="middle" font-size="40" font-weight="800" fill="url(#cpGrad1)">30%</text>
                  <text x="145" y="186" text-anchor="middle" font-size="11" font-weight="700" fill="#9a3412" opacity="0.7">OFF</text>

                  <!-- right: text lines -->
                  <rect x="226" y="140" width="64" height="8" rx="4" fill="#0f172a" opacity="0.6"/>
                  <rect x="226" y="156" width="48" height="6" rx="3" fill="#0f172a" opacity="0.3"/>
                  <circle cx="238" cy="182" r="10" fill="url(#cpGrad1)" opacity="0.15"/>
                  <path d="M233 182l4 4 8-8" stroke="#9a3412" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>

                <!-- floating gift ribbon accent -->
                <g transform="translate(62 70)">
                  <rect x="0" y="12" width="30" height="24" rx="4" fill="url(#cpGrad2)"/>
                  <rect x="0" y="12" width="30" height="7" fill="url(#cpGrad1)"/>
                  <rect x="12" y="12" width="6" height="24" fill="url(#cpGrad1)"/>
                  <path d="M6 12c0-5 8-5 8 0" stroke="url(#cpGrad1)" stroke-width="2.4" fill="none"/>
                  <path d="M24 12c0-5-8-5-8 0" stroke="url(#cpGrad1)" stroke-width="2.4" fill="none"/>
                  <circle class="nk-pulse-dot" cx="34" cy="6" r="3.4" fill="#fb923c"/>
                </g>

                <!-- confetti -->
                <circle cx="330" cy="100" r="5" fill="url(#cpGrad1)" opacity="0.7"/>
                <circle cx="96" cy="250" r="4" fill="url(#cpGrad2)" opacity="0.6"/>
              </svg>

              <div class="nk-chip" v-for="(chip, cIdx) in currentNokoriSlide.chips" :key="cIdx" :class="'nk-chip--' + (cIdx + 1)">
                <span class="nk-chip-icon">{{ chip.icon }}</span>
                <span class="nk-chip-text">{{ chip.text }}</span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </section>

    <!-- Sections (corporate-style) -->
    <section class="cards">
      <div class="cards-header">
        <h3>サービス紹介</h3>
        <p class="cards-sub">DXPRO SOLUTIONS — 信頼と実績で支えるサービスラインナップ</p>
      </div>

      <div class="cards-grid">
        <article v-for="(section, idx) in sections" :key="idx" class="card feature-card" :style="{ '--accent': accentFor(idx) }">
          <div class="card-media">
            <img :src="section.image" :alt="section.title" loading="lazy"/>
            <div class="card-accent"></div>
          </div>

          <div class="card-body">
            <h2>{{ section.title }}</h2>
            <p v-html="section.text"></p>
          </div>

          <div class="card-footer">
            <template v-if="section.external">
              <a :href="section.link" class="card-button" target="_blank" rel="noopener noreferrer">
                {{ section.button }}<span class="card-button-arrow">›</span>
              </a>
            </template>
            <template v-else>
              <a href="#" @click.prevent="navigate(section)" class="card-button">
                {{ section.button }}<span class="card-button-arrow">›</span>
              </a>
            </template>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
      slides: [
        { image: '/images/mainimg8.jpg', text: 'DXPRO SOLUTIONSは、IT分野の創造と革新をリードする' },
        { image: '/images/mainimg2.jpg', text: 'お客様の様々なニーズに徹底した管理と高度な技術力でお応えします' },
        { image: '/images/mainimg7.png', text: 'DXを通じて次世代のビジネスや生活の発展を目指していきます' },
        { image: '/images/mainimg11.jpg', text: '' },
      ],
      sections: [
        {
          title: 'ようこそ、DXPRO SOLUTIONSへ',
          text: 'DXPRO SOLUTIONSは、<br>お客様のビジネスの成長と成功を支援します。',
          image: '/images/yokoso.jpeg',
          link: '/services/greeting',
          button: '会社案内'
        },
        {
          title: 'DXPRO SOLUTIONSの採用情報',
          text: '技術力を高め共に成長しませんか？<br>一緒に社会にの発展に貢献する貴方を求めています。',
          image: '/images/saiyo3.jpg',
          link: '/Saiyo',
          button: '採用情報'
        },
        {
          title: 'DXPRO SOLUTIONSの仕事',
          text: 'お客様の多様なニーズに応えるため、<br>幅広いサービスを提供しています。',
          image: '/images/jigyo.jpg',
          link: '/about',
          button: '事業紹介'
        },
        {
          title: 'お問い合わせください',
          text: '何かご質問やご要望がございましたら、お気軽にお問い合わせください。',
          image: '/images/otoiawase2.jpg',
          link: 'https://dxpro-recruit-8b55d006ba39.herokuapp.com/contact.html',
          button: 'お問い合わせ',
          external: true   // ←ここを追加
        },
      ],
      nokoriSlideIndex: 0,
      nokoriSlideIntervalId: null,
      nokoriSlides: [
        {
          theme: 'nokori',
          layout: 'nokori',
          illustration: 'dashboard',
          badge: 'DXPRO SOLUTIONS 自社開発パッケージ',
          title: '勤怠・給与・評価を、<br class="br-pc">ひとつにまとめる「NOKORI」',
          desc: 'GPS勤怠打刻から休暇承認、給与計算、AIによる目標評価まで。<br class="br-pc">バラバラな管理をNOKORIひとつでシンプルに。外部委託ではなく、<br class="br-pc">自社エンジニアが開発・運用する国産HRプラットフォームです。',
          stats: [
            { num: '21', unit: '機能', label: '勤怠・給与・評価・タスク等' },
            { num: '5', unit: '言語', label: '日・韓・英・越・中に対応' },
            { num: 'GPS', unit: '', label: '位置情報で不正打刻を防止' },
            { num: 'AI', unit: '', label: '目標評価・スコアを自動算出' },
          ],
          chips: [
            { icon: '⏱', text: '勤怠管理' },
            { icon: '¥', text: '給与計算' },
            { icon: '🎯', text: 'AI評価' },
          ],
          cta: 'NOKORIを詳しく見る',
          link: '/Nokori',
        },
        {
          theme: 'campaign',
          layout: 'campaign',
          illustration: 'campaign',
          badge: 'NEWS：DXPRO SOLUTIONS 最新情報',
          title: 'NOKORIが<br class="br-pc">リリース記念キャンペーン実施中',
          desc: '今なら全プラン初期費用0円、月額利用料も特別価格でご案内。<br class="br-pc">導入のご相談・デモのお申し込みを随時受け付けています。<br class="br-pc">まずはお気軽にお問い合わせください。',
          priceOld: '通常 月額 ¥50,000〜',
          priceNew: '30%OFF',
          points: [
            '初期費用 0円（標準利用の場合）',
            '契約期間 1か月〜（自動更新）',
            '無料デモ・導入相談を受付中',
          ],
          chips: [
            { icon: '🎉', text: 'キャンペーン中' },
            { icon: '¥', text: '0円スタート' },
            { icon: '📅', text: '1か月〜' },
          ],
          cta: 'キャンペーン詳細を見る',
          link: '/Nokori',
        },
        {
          theme: 'recruit',
          layout: 'recruit',
          illustration: 'recruit',
          badge: '2027年度 新卒採用 選考受付中',
          title: 'DXPRO SOLUTIONSで、<br class="br-pc">次のキャリアをはじめよう。',
          desc: '2027年度新卒採用の選考を実施中です。<br class="br-pc">ITエンジニア・コンサルタント職など幅広いポジションを募集しています。<br class="br-pc">未経験からでも成長できる研修制度を用意しています。',
          steps: [
            { title: 'エントリー', desc: '履歴書・エントリーシートをご提出ください' },
            { title: '面接・選考', desc: '複数回の面接を通じて相互理解を深めます' },
            { title: '内定', desc: '研修制度を通じて安心してスタートできます' },
          ],
          chips: [
            { icon: '🎓', text: '新卒採用' },
            { icon: '📝', text: 'エントリー受付中' },
            { icon: '🤝', text: '内定まで徹底サポート' },
          ],
          cta: '採用情報を見る',
          link: '/Saiyo',
        },
      ],
    };
  },
  computed: {
    currentNokoriSlide() {
      return this.nokoriSlides[this.nokoriSlideIndex];
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    },
    goToSlide(i) {
      this.currentIndex = i;
    },
    startNokoriSlideRotation() {
      this.nokoriSlideIntervalId = setInterval(() => {
        this.nokoriSlideIndex = (this.nokoriSlideIndex + 1) % this.nokoriSlides.length;
      }, 20000);
    },
    accentFor(i) {
      // neutral / monochrome accents (subtle corporate look)
      const palette = ['#2b2b2b', '#3a3a3a', '#4a4a4a', '#5a5a5a', '#6a6a6a'];
      return palette[i % palette.length];
    },
    startSlideshow() {
      this.intervalId = setInterval(this.nextSlide, 6000);
    }
    ,
    async navigate(section) {
      try {
        await this.$router.push(section.link);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } catch (e) {
        // fallback: force location change
        this.$nextTick(() => { window.scrollTo(0,0); });
      }
    }
  },
  mounted() {
    this.startSlideshow();
    this.startNokoriSlideRotation();
    window.scrollTo(0, 0);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
    clearInterval(this.nokoriSlideIntervalId);
  }
}
</script>

<style scoped>
.homepage { font-family: 'Segoe UI', sans-serif; color: #222; background: #f4f7fa; }

/* --- NOKORI Promotion --- */
.nokori-promo {
  position: relative;
  background: linear-gradient(120deg, #1a1140, #2a1763);
  padding: 64px 6% 96px;
  transition: background 0.6s ease;
  overflow: hidden;
  box-shadow: 0 -12px 24px -12px rgba(0,0,0,0.35);
}
.nokori-promo.theme-nokori {
  background: linear-gradient(120deg, #1a1140, #2a1763);
}
.nokori-promo.theme-campaign {
  background: linear-gradient(120deg, #3a0f3d, #7a1f5c);
}
.nokori-promo.theme-recruit {
  background: linear-gradient(120deg, #06282f, #0d4a52);
}
.nokori-promo::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 110px;
  background: linear-gradient(to bottom, rgba(247,249,251,0) 0%, #f7f9fb 100%);
  pointer-events: none;
}
.nokori-promo-inner {
  position: relative;
  z-index: 1;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 48px;
  transition: flex-direction 0.1s;
}
.nokori-promo-inner.layout-campaign {
  flex-direction: row-reverse;
}
.nokori-promo-inner.layout-recruit {
  align-items: center;
}
.nokori-promo-inner.layout-recruit .nokori-promo-text {
  flex: 1 1 58%;
}
.nokori-promo-inner.layout-recruit .nokori-promo-media {
  flex: 1 1 42%;
}
.nokori-promo-text { flex: 1 1 54%; min-width: 0; }
.nokori-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #fff;
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.3);
  padding: 6px 16px;
  border-radius: 999px;
  margin-bottom: 18px;
}
.nokori-badge-icon { color: #f472b6; flex: 0 0 auto; }
.promo-fade-enter-active, .promo-fade-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.promo-fade-enter-from { opacity: 0; transform: translateY(10px); }
.promo-fade-leave-to { opacity: 0; transform: translateY(-10px); }
.nokori-title {
  font-size: clamp(22px, 2.8vw, 30px);
  font-weight: 800;
  color: #fff;
  line-height: 1.5;
  margin: 0 0 16px;
}
.nokori-desc {
  font-size: 14.5px;
  color: rgba(255,255,255,0.8);
  line-height: 1.9;
  margin: 0 0 28px;
}

.nokori-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 32px;
  padding: 20px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 16px;
}
.nokori-stat { text-align: center; }
.nokori-stat-num {
  margin: 0 0 4px;
  font-size: 22px;
  font-weight: 800;
  background: linear-gradient(120deg, #c4b5fd, #f9a8d4);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.nokori-stat-num span { font-size: 13px; font-weight: 700; margin-left: 2px; }
.nokori-stat-label {
  margin: 0;
  font-size: 11px;
  color: rgba(255,255,255,0.65);
  line-height: 1.5;
}

/* Campaign: big price callout */
.nokori-campaign-callout {
  margin-bottom: 32px;
}
.campaign-price {
  display: flex;
  align-items: baseline;
  gap: 14px;
  margin-bottom: 18px;
}
.campaign-price-old {
  font-size: 15px;
  color: rgba(255,255,255,0.55);
  text-decoration: line-through;
}
.campaign-price-new {
  font-size: 40px;
  font-weight: 900;
  background: linear-gradient(120deg, #fbcfe8, #fdba74);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.campaign-points {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.campaign-points li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(255,255,255,0.85);
}
.campaign-points-check {
  flex: 0 0 auto;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(120deg, #f472b6, #fb923c);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Recruitment: step timeline */
.nokori-timeline {
  list-style: none;
  margin: 0 0 32px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.nokori-timeline li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
}
.nokori-timeline-num {
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(120deg, #5eead4, #7dd3fc);
  color: #06282f;
  font-weight: 800;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.nokori-timeline-body { flex: 1 1 auto; }
.nokori-timeline-title {
  margin: 0 0 2px;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
}
.nokori-timeline-desc {
  margin: 0;
  font-size: 12.5px;
  color: rgba(255,255,255,0.65);
  line-height: 1.6;
}

.nokori-cta { display: flex; }
.nokori-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  padding: 14px 28px;
  border-radius: 999px;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, gap 0.2s ease;
}
.nokori-btn--fill {
  background: linear-gradient(120deg, #6c3ce9, #e3598c);
  color: #fff;
  box-shadow: 0 14px 30px rgba(108,60,233,0.4);
}
.nokori-btn--fill:hover { transform: translateY(-3px); box-shadow: 0 18px 36px rgba(108,60,233,0.5); gap: 10px; }

.nokori-promo-media {
  flex: 1 1 42%;
  max-width: 460px;
}

/* --- Illustration --- */
.nokori-illu {
  position: relative;
  width: 100%;
}
.nokori-illu-svg {
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0 24px 40px rgba(0,0,0,0.35));
}
.nk-device {
  animation: nkFloatDevice 6s ease-in-out infinite;
  transform-origin: center;
}
.nk-blob--1 { animation: nkPulse 7s ease-in-out infinite; transform-origin: 90px 70px; }
.nk-blob--2 { animation: nkPulse 8s ease-in-out infinite 1s; transform-origin: 330px 260px; }
.nk-pulse-dot {
  animation: nkDotPulse 1.8s ease-in-out infinite;
  transform-origin: 280px 86px;
}

@keyframes nkFloatDevice {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
@keyframes nkPulse {
  0%, 100% { transform: scale(1); opacity: 0.16; }
  50% { transform: scale(1.12); opacity: 0.26; }
}
@keyframes nkDotPulse {
  0%, 100% { r: 5; opacity: 1; }
  50% { r: 7.5; opacity: 0.55; }
}

.nk-chip {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border-radius: 999px;
  padding: 10px 16px 10px 10px;
  box-shadow: 0 14px 30px rgba(26,17,64,0.22);
  font-size: 13px;
  font-weight: 700;
  color: #1a1140;
  white-space: nowrap;
}
.nk-chip-icon {
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: linear-gradient(120deg, #6c3ce9, #e3598c);
  color: #fff;
  font-size: 14px;
}
.nk-chip--1 {
  top: 4%;
  left: -6%;
  animation: nkFloatChip 5.5s ease-in-out infinite;
}
.nk-chip--2 {
  top: 42%;
  right: -10%;
  animation: nkFloatChip 6.5s ease-in-out infinite 0.6s;
}
.nk-chip--3 {
  bottom: 2%;
  left: 2%;
  animation: nkFloatChip 6s ease-in-out infinite 1.2s;
}
@keyframes nkFloatChip {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(-1.5deg); }
}

@media (max-width: 900px) {
  .nokori-promo-inner,
  .nokori-promo-inner.layout-campaign,
  .nokori-promo-inner.layout-recruit { flex-direction: column; text-align: center; }
  .nokori-cta { justify-content: center; }
  .nokori-promo-media { max-width: 360px; margin: 0 auto; }
  .nk-chip--1 { left: -2%; }
  .nk-chip--2 { right: -2%; }
}
@media (max-width: 640px) {
  .nokori-promo { padding: 40px 5% 72px; }
  .nokori-badge { font-size: 11px; padding: 6px 14px; white-space: normal; text-align: left; }
  .nokori-title { font-size: 20px; line-height: 1.6; }
  .nokori-desc { font-size: 13.5px; }
  .br-pc { display: none; }
  .nokori-stats {
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    padding: 4px 16px;
  }
  .nokori-stat {
    padding: 14px 6px;
    border-bottom: 1px solid rgba(255,255,255,0.12);
  }
  .nokori-stat:nth-last-child(-n+2) { border-bottom: none; }
  .nokori-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.12); }
  .nokori-stat-num { font-size: 19px; }
  .nokori-stat-label { font-size: 10.5px; }
  .nokori-btn { padding: 12px 22px; font-size: 13px; }
  .nk-chip { font-size: 11.5px; padding: 8px 12px 8px 8px; }
  .nk-chip-icon { width: 22px; height: 22px; font-size: 12px; }

}

/* slider */
.slider { position: relative; width: 100%; height: 680px; overflow: hidden; }
.slide { position: absolute; width: 100%; height: 100%; transition: transform 0.5s ease; display: flex; align-items: center; justify-content: center; }
.slide-image { width: 100%; height: 100%; object-fit: cover; }
.slide-text { position: absolute; z-index: 4; top: 50%; left: 50%; transform: translate(-50%, -50%); max-width: 1000px; width: calc(100% - 120px); text-align: center; color: #fff; font-size: 35px; padding: 6px 8px; border-radius: 6px; text-shadow: 0 12px 18px rgba(0,0,0,0.7); font-weight: 900; background: transparent; }
.arrow { position: absolute; top: 50%; transform: translateY(-50%); font-size: 26px; color: #fff; padding: 6px; cursor: pointer; z-index: 20; border-radius: 999px; left: 16px; }
.right-arrow { right: 16px; left: auto; }

.arrow svg { width: 44px; height: 44px; display: block; }
.arrow:hover svg circle { fill: rgba(0,0,0,0.44); }

/* corporate sections */
.cards { padding: 80px 6%; background: #f7f9fb; }
.cards-header { text-align: center; margin-bottom: 44px; }
.cards-header h3 {
  font-size: 30px;
  margin: 0 0 10px;
  color: #0b66b2;
  font-weight: 800;
  position: relative;
  display: inline-block;
  padding-bottom: 16px;
}
.cards-header h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 48px;
  height: 3px;
  border-radius: 999px;
  background: #0b66b2;
}
.cards-sub { margin: 0; color: #6b7280; font-size: 14px; }

.cards-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; align-items: stretch; max-width: 1100px; margin: 24px auto 0; }
.feature-card { display: flex; flex-direction: column; background: #fff; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(15,23,42,0.07); transition: transform 0.25s ease, box-shadow 0.25s ease; }
.feature-card:hover { transform: translateY(-8px); box-shadow: 0 28px 54px rgba(15,23,42,0.14); }

.card-media { position: relative; height: 300px; overflow: hidden; }
.card-media img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.5s ease; }
.feature-card:hover .card-media img { transform: scale(1.06); }
.card-accent { position: absolute; left: 0; top: 0; bottom: 0; width: 8px; background: var(--accent, #0b66b2); }

.card-body { padding: 24px; flex: 1 1 auto; background: #fff; }
.card-meta { color: #9aa4b2; font-size: 13px; margin-bottom: 6px; }
.feature-card h2 { margin: 4px 0 12px; color: #072b44; font-size: 20px; font-weight: 800; }
.feature-card p { color: #4a5568; line-height: 1.7; font-size: 15px; }

.card-footer { padding: 18px 24px 24px; display: flex; justify-content: center; }
.card-button {
  padding: 13px 20px;
  background: var(--accent, #0b66b2);
  color: #fff;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 10px 22px rgba(11,102,178,0.2);
  width: 100%;
  max-width: 220px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease, gap 0.2s ease;
}
.card-button-arrow { font-size: 17px; transition: transform 0.2s ease; }
.card-button:hover { transform: translateY(-3px); box-shadow: 0 16px 30px rgba(11,102,178,0.3); gap: 10px; }

.card-button:focus { outline: 3px solid rgba(11,102,178,0.14); outline-offset: 2px; }

@media (max-width: 1024px) { .cards-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) { .cards-grid { grid-template-columns: 1fr; } .slider { height: 420px; } .card-media { height: 200px; } }
@media (max-width: 640px) {
  .slider { height: 360px; }
  .slide-text {
    font-size: 14px;
    top: 50%;
    bottom: auto;
    width: calc(100% - 40px);
    transform: translate(-50%, -50%); /* 横中央・縦中央 */
  }
}
</style>