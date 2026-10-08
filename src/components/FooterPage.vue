<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-top">
        <div class="footer-columns">
          <div class="footer-column">
            <h3 class="footer-title">会社案内</h3>
            <ul class="footer-links">
              <li><router-link to="/services/greeting" class="footer-link" @click="scrollToTop">ご挨拶</router-link></li>
              <li><router-link to="/services/overview" class="footer-link" @click="scrollToTop">会社概要</router-link></li>
              <li><router-link to="/services/access" class="footer-link" @click="scrollToTop">アクセス</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">事業紹介</h3>
            <ul class="footer-links">
              <li><router-link to="/about" class="footer-link" @click="scrollToTop">事業内容</router-link></li>
              <li><router-link to="/about" class="footer-link" @click="scrollToTop">サービス</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">採用情報</h3>
            <ul class="footer-links">
              <li><router-link to="/Recruitment" class="footer-link" @click="scrollToTop">新卒採用</router-link></li>
              <li><router-link to="/SubRecruitment" class="footer-link" @click="scrollToTop">中途採用</router-link></li>
              <li><router-link to="/Saiyo" class="footer-link" @click="scrollToTop">採用ポジション</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">その他</h3>
            <ul class="footer-links">
              <li><router-link to="/privacy" class="footer-link" @click="scrollToTop">プライバシーポリシー</router-link></li>
              <li>
                <a 
                  href="https://dxpro-recruit-8b55d006ba39.herokuapp.com/contact.html" 
                  class="footer-link"
                >
                  お問い合わせ
                </a>
              </li>
              <li><router-link to="/Intranet" class="footer-link" @click="scrollToTop">イントラネット</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="footer-cta">
          <h3 class="cta-title">お問い合わせ</h3>
          <p class="cta-text">ご質問やご相談がございましたら、お気軽にお問い合わせください。</p>
                <a 
                  href="https://dxpro-recruit-8b55d006ba39.herokuapp.com/contact.html" 
                  class="cta-button"
                >
                  お問い合わせフォーム
                </a>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-logo">
          <router-link to="/" @click="scrollToTop">
            <img src="/images/logo_new_removebg_preview.png" alt="DXPRO SOLUTIONS" class="footer-logo-img">
          </router-link>
        </div>
        
        <div class="footer-info">
          <p class="copyright">&copy; 2026 DXPRO SOLUTIONS. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드러운 스크롤 효과
      });
    }
  }
};
</script>

<style scoped>
/* 기존 스타일은 동일하게 유지 */
.main-footer {
  background-color: #333333;
  color: #ffffff;
  padding: 60px 0 30px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-columns {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
}

.footer-column {
  flex: 1;
  min-width: 200px;
  margin-bottom: 30px;
  padding-right: 20px;
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
  position: relative;
  padding-bottom: 10px;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #0067c0;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #ffffff;
  text-decoration: underline;
}

.footer-cta {
  width: 35%;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 30px;
  height: 230px;
  border-radius: 8px;
}

.cta-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: #ffffff;
}

.cta-text {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  font-size: 14px;
}

.cta-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #0067c0;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #004b8a;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer-logo-img {
  height: 40px;
  width: auto;
  opacity: 0.8;
  transition: all 0.3s ease;
}

.footer-logo-img:hover {
  opacity: 1;
}

.copyright {
  font-size: 15px;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 992px) {
  .footer-columns {
    width: 100%;
  }
  
  .footer-cta {
    width: 100%;
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .footer-column {
    min-width: 50%;
  }
}
</style>