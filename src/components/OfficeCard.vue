<template>
  <article class="office-card comp" @click="$emit('select')" role="button" tabindex="0">
    <div class="meta">
      <h4 class="name">{{ office.name }}</h4>
      <p class="address">{{ office.address }}</p>
      <p class="phone" v-if="office.phone">Tel: {{ office.phone }}</p>
      <p class="hours" v-if="office.hours">{{ office.hours }}</p>
      <a v-if="office.email" :href="`mailto:${office.email}`" class="email">{{ office.email }}</a>
    </div>
    <div class="actions">
      <button class="btn btn-primary" @click.stop="$emit('directions', office.address)">
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <path d="M3 11l14-8v18L3 11z" fill="#fff"/>
        </svg>
        行き方
      </button>
      <button class="btn btn-outline" @click.stop="$emit('copy', office.address)">
        コピー
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: 'OfficeCard',
  props: {
    office: { type: Object, required: true }
  }
}
</script>

<style scoped>
.office-card.comp { display:flex; flex-direction:column; gap:10px; padding:16px; border-radius:10px; background:#fff; box-shadow:0 8px 20px rgba(2,6,23,0.04); border:1px solid rgba(2,6,23,0.04); }
.name{font-weight:700;margin:0 0 6px}
.address{color:#5b6b7a;margin:0 0 6px}
.phone,.hours{font-size:13px;color:#6b7280;margin:0}
.actions{display:flex;gap:8px;margin-top:8px}
.btn{padding:8px 12px;border-radius:8px;font-weight:700;border:1px solid transparent;cursor:pointer}
.btn-primary{background:var(--accent, #111827);color:#fff}
.btn-outline{background:transparent;border:1px solid rgba(17,24,39,0.08);color:var(--accent,#111827)}
</style>
