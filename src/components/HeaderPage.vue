<template>
  <header>
    <nav>
      <ul>
        <li @mouseover="showSubMenu('home')" @mouseleave="hideSubMenu">Home
          <ul v-if="activeMenu === 'home'">
            <li><router-link to="/">Main</router-link></li>
          </ul>
        </li>
        <li @mouseover="showSubMenu('about')" @mouseleave="hideSubMenu">About
          <ul v-if="activeMenu === 'about'">
            <li><router-link to="/about">About Us</router-link></li>
          </ul>
        </li>
        <li @mouseover="showSubMenu('services')" @mouseleave="hideSubMenu">Services
          <ul v-if="activeMenu === 'services'">
            <li><router-link to="/services">Our Services</router-link></li>
          </ul>
        </li>
        <li @mouseover="showSubMenu('contact')" @mouseleave="hideSubMenu">Contact
          <ul v-if="activeMenu === 'contact'">
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: ''
    };
  },
  methods: {
    showSubMenu(menu) {
      this.activeMenu = menu;
    },
    hideSubMenu() {
      this.activeMenu = '';
    }
  }
};
</script>

<style>
header {
  background-color: var(--surface);
  color: var(--text);
  padding: 12px 0;
  border-bottom: 1px solid rgba(2,6,23,0.04);
}

nav { display: flex; align-items: center; }

nav ul { list-style-type: none; padding: 0; margin: 0; display: flex; gap: 8px; }

nav ul li { position: relative; }

nav ul li ul { position: absolute; top: 100%; left: 0; background: var(--surface); border-radius: 8px; box-shadow: 0 10px 30px rgba(2,6,23,0.06); padding: 8px 0; min-width: 180px; }

nav ul li ul li { display: block; padding: 6px 14px; }

nav a { color: var(--text); text-decoration: none; font-weight: 700; padding: 8px 10px; display: inline-block; }

nav a:hover { color: var(--accent); }
</style>