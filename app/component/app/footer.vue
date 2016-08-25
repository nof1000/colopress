<!-- HTML -->
<template>
  <nav class="left">
  </nav>
  <nav class="right">
    <button class="button"></button>
  </nav>
</template>

<!-- Javascript -->
<script>
export default {};
</script>

<!-- Stylesheet -->
<style>
  @import '../../stylesheet/variables';
  @import '../../stylesheet/colors';

  .app .footer {
    align-items: center;
    background: transparent;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    left: 0; bottom: 0;
    position: absolute;
    width: 100%; height: 4rem;
    z-index: $layout-middle;

    .right { padding: 0 1rem; }

    .button {
      background: #fff;
      border-radius: 50%;
      border: none;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 1);
      cursor: pointer;
      outline: none;
      width: 2.4rem; height: 2.4rem;
    }
  }
</style>
