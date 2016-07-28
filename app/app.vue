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

export default {
  components: {
    'app-header': AppHeader
  }
};
</script>

<!-- Stylesheet -->
<style>
  @import './stylesheet/colors';
  @import './stylesheet/variables';

  * { padding: 0; margin: 0; line-height: 1; box-sizing: border-box; }

  html, body {
    width: 100%; height: 100%;
    font: normal 20px/100% 'Roboto', sans-serif;
  }

  .app {
    position: relative;
    background: $color-app;
    width: 100%; height: 100%;

    .header {
      position: absolute;
      display: flex;
      width: 100%; height: 4rem;
      left: 0; top: 0;
      z-index: $layout-middle;
    }

    .content {
      position: relative;
      width: 100%; height: 100%;
      z-index: $layout-bottom;
    }

    .footer {
      position: absolute;
      display: flex;
      width: 100%; height: 4rem;
      left: 0; bottom: 0;
      z-index: $layout-middle;
    }

  }
</style>
