<!-- HTML -->
<template>
  <div class="app">
    <header class="header">

    </header>
    <main role="main" class="content">

    </main>
    <footer class="footer">

    </footer>
  </div>
</template>

<!-- Javascript -->
<script>
export default {  }
</script>

<!-- Stylesheet -->
<style>
  * { padding: 0; margin: 0; line-height: 1; box-sizing: border-box; }
  html, body { width: 100%; height: 100%; }

  .app {
    position: relative;
    background: #212121;
    width: 100%;
    height: 100%;
  }

  .app .header {
    position: absolute;
    display: flex;
    width: 100%;
    height: 4rem;
    left: 0; top: 0;
  }

  .app .content {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .app .footer {
    position: absolute;
    display: flex;
    width: 100%;
    height: 4rem;
    left: 0; bottom: 0;
  }
</style>
