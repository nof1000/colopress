<!-- HTML -->
<template>
  <div class="app">
    <header class="header">
      <app-header></app-header>
    </header>
    <main role="main" class="content">
      <app-content></app-content>
    </main>
    <footer class="footer">
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<!-- Javascript -->
<script>
import AppHeader from './component/app/header';
import AppContent from './component/app/content';
import AppFooter from './component/app/footer';

export default {
  components: {
    'app-header': AppHeader,
    'app-content': AppContent,
    'app-footer': AppFooter
  }
};
</script>

<!-- Stylesheet -->
<style>
  @import './stylesheet/variables';
  @import './stylesheet/colors';

  @import './stylesheet/basic';

  .app {
    background: $color-app;
    display: block;
    position: relative;
    width: 100%; height: 100%;
  }
</style>
