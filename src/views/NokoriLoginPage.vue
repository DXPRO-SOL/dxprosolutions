<template>
  <div class="nokori-login">
    <main class="login-main">
      <div class="login-logo-wrap">
        <span class="login-logo-mark">N</span>
        <span class="login-logo-text">NOKORI</span>
      </div>

      <div class="login-panel">
        <h1 class="login-panel-title">ユーザー ログイン</h1>

        <form class="login-form" @submit.prevent="login">
          <div class="login-field">
            <label class="login-label">ID（メールアドレス）</label>
            <input v-model="username" type="text" class="login-input" placeholder="IDを入力してください" required />
          </div>

          <div class="login-field">
            <label class="login-label">パスワード</label>
            <input v-model="password" type="password" class="login-input" placeholder="パスワードを入力してください" required />
          </div>

          <label class="login-remember">
            <input type="checkbox" v-model="remember" />
            <span>契約者権限でログイン</span>
          </label>

          <p v-if="errorMessage" class="login-error">{{ errorMessage }}</p>

          <button type="submit" class="login-submit" :disabled="loading">
            {{ loading ? 'ログイン中…' : 'ログイン' }}
          </button>
        </form>

        <div class="login-links">
          <a href="#" @click.prevent="openComingSoon">IDをお忘れですか？</a>
          <span class="login-links-sep">|</span>
          <a href="#" @click.prevent="openComingSoon">パスワードをお忘れですか？</a>
        </div>
      </div>

      <button type="button" class="login-signup-btn" @click="openComingSoon">
        今すぐ始める！ NOKORI 会員登録
      </button>
    </main>

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
  name: 'NokoriLoginPage',
  data() {
    return {
      username: '',
      password: '',
      remember: false,
      loading: false,
      errorMessage: '',
      showComingSoon: false,
    };
  },
  methods: {
    login() {
      this.errorMessage = '';
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.errorMessage = 'IDまたはパスワードが正しくありません。';
      }, 700);
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
.nokori-login {
  min-height: 100vh;
  background: #f4f5f7;
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif;
  color: #1c2433;
  display: flex;
  flex-direction: column;
}

/* Main */
.login-main {
  flex: 1;
  width: 100%;
  margin: 0 auto;
  padding: 80px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 32px;
}
.login-logo-mark {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: #0f52a0;
  color: #fff;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-logo-text {
  font-size: 20px;
  font-weight: 800;
  color: #152040;
  letter-spacing: 0.06em;
}

/* Login panel: plain, centered, minimal */
.login-panel {
  background: #fff;
  border: 1px solid #dde1e8;
  border-radius: 4px;
  width: 100%;
  max-width: 360px;
  padding: 34px 32px 26px;
}

.login-panel-title {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #152040;
  margin: 0 0 22px;
  padding-bottom: 18px;
  border-bottom: 2px solid #152040;
}

.login-form { display: flex; flex-direction: column; gap: 14px; }
.login-field { display: flex; flex-direction: column; gap: 6px; }
.login-label {
  font-size: 11.5px;
  font-weight: 700;
  color: #4e5a6e;
}
.login-input {
  width: 100%;
  padding: 13px 14px;
  border: 1px solid #ccd2dc;
  border-radius: 3px;
  font-size: 13.5px;
  color: #152040;
  box-sizing: border-box;
  background: #fff;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.login-input::placeholder { color: #9aa3b5; }
.login-input:focus {
  outline: none;
  border-color: #0f52a0;
  box-shadow: 0 0 0 3px rgba(15,82,160,0.1);
}

.login-error {
  font-size: 11.5px;
  color: #b3261e;
  margin: 0;
}

.login-submit {
  margin-top: 6px;
  width: 100%;
  padding: 13px;
  background: #152040;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.18s;
}
.login-submit:hover { background: #0f1830; }
.login-submit:disabled { opacity: 0.6; cursor: not-allowed; }

.login-remember {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11.5px;
  color: #6b7688;
  cursor: pointer;
  margin-top: 6px;
}
.login-remember input { accent-color: #0f52a0; }

.login-links {
  text-align: center;
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid #eef0f4;
}
.login-links a {
  font-size: 11.5px;
  color: #6b7688;
  text-decoration: none;
}
.login-links a:hover { color: #0f52a0; text-decoration: underline; }
.login-links-sep {
  margin: 0 10px;
  color: #d8dde6;
  font-size: 11.5px;
}

.login-signup-btn {
  margin-top: 22px;
  width: 100%;
  max-width: 360px;
  padding: 13px;
  background: #d99a3d;
  color: #fff;
  border: none;
  border-radius: 3px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: background 0.18s;
}
.login-signup-btn:hover { background: #c48a2f; }

/* Responsive */
@media (max-width: 480px) {
  .login-main { padding: 56px 18px 40px; }
  .login-panel { padding: 28px 22px 22px; }
}

/* Coming Soon modal (reused pattern) */
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
  border-radius: 8px;
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
  border-radius: 4px;
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
