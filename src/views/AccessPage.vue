<template>
  <div class="access-page">
    <header class="page-header">
      <div>
        <h1 class="page-title">アクセス</h1>
        <p class="page-sub">主要オフィスへの行き方と所在地情報</p>
      </div>
      <div class="title-divider" aria-hidden></div>
    </header>

    <section class="access-grid">
      <aside class="office-list" aria-label="Offices list">
        <OfficeCard
          v-for="(office, idx) in offices"
          :key="office.id"
          :office="office"
          @select="selectOffice(idx)"
          @directions="openDirections"
          @copy="copyAddress"
        />
      </aside>

      <div class="map-area">
        <div class="map-frame">
          <div class="map-placeholder" v-if="!mapLoaded">
            <div class="spinner" aria-hidden></div>
          </div>
          <iframe
            :src="offices[selectedIndex].mapEmbed"
            width="100%"
            height="100%"
            style="border:0;"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            :title="offices[selectedIndex].name + ' 地図'"
            @load="onMapLoad"
          ></iframe>
        </div>
        <div class="map-footer">
          <div class="map-info">
            <strong>{{ offices[selectedIndex].name }}</strong>
            <span class="muted">{{ offices[selectedIndex].address }}</span>
            <div class="muted small" v-if="offices[selectedIndex].phone">{{ offices[selectedIndex].phone }} • {{ offices[selectedIndex].hours }}</div>
          </div>
          <div class="map-cta">
            <button class="btn btn-primary" @click="openDirections(offices[selectedIndex].address)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 11l14-8v18L3 11z" fill="#fff"/>
              </svg>
              経路を開く
            </button>
            <button class="btn btn-outline" @click="copyAddress(offices[selectedIndex].address)">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M16 1H4c-1 0-2 .9-2 2v12h2V3h12V1z" fill="#111827"/>
                <path d="M20 5H8c-1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h12v14z" fill="#111827"/>
              </svg>
              住所をコピー
            </button>
          </div>
        </div>
      </div>
    </section>

    <div v-if="toast" class="toast" role="status" aria-live="polite">{{ toast }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import OfficeCard from '@/components/OfficeCard.vue';
import sharedOffices from '@/data/offices';

export default defineComponent({
  name: 'AccessPage',
  components: { OfficeCard },
  data() {
    return {
      selectedIndex: 0,
      toast: null,
      mapLoaded: false,
      offices: []
    };
  },
  created() {
    // initialize shared offices data
    this.offices = sharedOffices;
  },
  methods: {
    selectOffice(idx) {
      if (this.selectedIndex === idx) return;
      this.mapLoaded = false;
      this.selectedIndex = idx;
    },
    copyAddress(text) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          this.showToast('住所をコピーしました');
        });
      } else {
        const el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.showToast('住所をコピーしました');
      }
    },
    openDirections(address) {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
      window.open(url, '_blank');
    },
    onMapLoad() {
      // called when iframe finishes loading
      this.mapLoaded = true;
    },
    showToast(msg) {
      this.toast = msg;
      clearTimeout(this._toastTimer);
      this._toastTimer = setTimeout(() => (this.toast = null), 2500);
    }
  },
  beforeUnmount() {
    clearTimeout(this._toastTimer);
  }
});
</script>

<style scoped>
.access-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 20px;
  font-family: 'Noto Sans JP', 'Helvetica Neue', Arial, sans-serif;
  color: #111827;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 36px;
}

.page-title {
  font-size: 2.25rem;
  font-weight: 700;
  margin: 0 0 6px 0;
}
.page-sub {
  color: #6b7280;
  font-size: 0.98rem;
  margin: 0;
}

.title-divider {
  width: 64px;
  height: 4px;
  background: linear-gradient(90deg, #111827, #374151);
  border-radius: 2px;
}

.access-grid {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 28px;
  align-items: start;
}

.office-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.office-card.compact {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(16,24,40,0.06);
  border: 1px solid rgba(17,24,39,0.04);
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}
.office-card.compact:focus,
.office-card.compact:hover {
  transform: translateY(-4px);
  box-shadow: 0 18px 40px rgba(16,24,40,0.08);
}
.office-card.compact.active {
  border-color: rgba(17,24,39,0.12);
  box-shadow: 0 20px 44px rgba(17,24,39,0.08);
}

.office-meta {
  margin-bottom: 10px;
}
.office-name {
  font-size: 1.05rem;
  margin: 0 0 6px 0;
  font-weight: 700;
}
.address {
  margin: 0 0 8px 0;
  color: #475569;
  font-size: 0.95rem;
}
.email {
  display: inline-block;
  color: #111827;
  text-decoration: underline;
  font-size: 0.95rem;
}

.card-actions {
  display: flex;
  gap: 8px;
}
.btn {
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 0.92rem;
}
.btn-primary {
  background: #111827;
  color: #fff;
  border-color: rgba(17,24,39,0.12);
}
.btn-outline {
  background: transparent;
  color: #111827;
  border: 1px solid rgba(17,24,39,0.08);
}
.btn:active { transform: translateY(1px); }

.map-area {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.map-frame {
  background: #f8fafc;
  border-radius: 12px;
  height: 520px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(2,6,23,0.06);
}
.map-frame iframe { width: 100%; height: 100%; border: none; }

.map-placeholder {
  position: absolute;
  inset: 0;
  display:flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.85));
  z-index: 10;
}
.spinner{
  width:36px;height:36px;border-radius:50%;border:4px solid rgba(0,0,0,0.08);border-top-color:rgba(17,24,39,0.85);animation:spin 1s linear infinite;
}
@keyframes spin{to{transform:rotate(360deg)}}

.btn svg { vertical-align:middle; margin-right:8px; }

:root{ --accent: #111827; --muted:#6b7280 }

.map-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid rgba(17,24,39,0.04);
}
.map-info strong { display:block; }
.map-info .muted { color: #6b7280; font-size: 0.95rem; }

.toast {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: rgba(17,24,39,0.96);
  color: #fff;
  padding: 12px 18px;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(15,23,42,0.2);
  z-index: 1200;
}

@media (max-width: 1000px) {
  .access-grid { grid-template-columns: 1fr; }
  .map-frame { height: 420px; }
}

@media (max-width: 600px) {
  .access-page { padding: 28px 14px; }
  .page-title { font-size: 1.6rem; }
  .map-frame { height: 340px; }
}
</style>