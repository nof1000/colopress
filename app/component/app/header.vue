<!-- HTML -->
<template>
  <a href="#">
    <svg class="logo light" viewBox="0 0 128 128">
      <use xlink:href="../../asset/image/icons.svg#logo"/>
    </svg>
  </a>
  <nav>
    <ul>
      <li>
        <svg class="button gradient" viewBox="0 0 18 18">
          <linearGradient id="SVG_GRADIENT" x1="0" x2="18" y1="9" y2="9" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#febc15"/>
            <stop offset=".5" stop-color="#ee1c51"/>
            <stop offset=".58" stop-color="#e51d51"/>
            <stop offset=".71" stop-color="#cb1f52"/>
            <stop offset=".88" stop-color="#a22152"/>
            <stop offset="1" stop-color="#7f2453"/>
          </linearGradient>
          <rect fill="url(#SVG_GRADIENT)" width="18" height="18"/>
        </svg>
      </li>
      <li>
        <svg class="button palette" viewBox="0 0 18 18">
          <g>
            <rect fill="#e9f679" x="0" y="0" width="6.5" height="18"/>
            <rect fill="#9bdf46" x="6" y="0" width="6.5" height="18"/>
            <rect fill="#25a55f" x="12" y="0" width="6.5" height="18"/>
          </g>
        </svg>
      </li>
      <li>
        <svg class="button color focus" viewBox="0 0 18 18">
          <rect fill="#ffdd12" width="18" height="18"/>
        </svg>
      </li>
    </ul>
  </nav>
</template>

<!-- Javascript -->
<script>
export default {}
</script>

<!-- Stylesheet -->
<style>
  @import '../../stylesheet/variables';
  @import '../../stylesheet/colors';

  .app .header {
    align-items: center;
    background: transparent;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    left: 0; top: 0;
    padding: 2rem 1rem;
    position: absolute;
    width: 100%; height: 4rem;
    z-index: $layout-middle;

    .logo { width: 2rem; height: 2rem; }
    .logo.light { fill: $color-light; }
    .logo.dark { fill: $color-dark; }

    ul {
      display: flex;
      flex-flow: row nowrap;

      li {
        list-style: none;

        .button {
          background: transparent;
          border-radius: 50%;
          cursor: pointer;
          display: inline-block;
          margin-left: 1.25rem;
          outline: none;
          width: 1.25rem; height: 1.25rem;

          &.color { box-shadow: 0 4pt 12pt rgba(255, 221, 18, 0.7); }
          &.palette { box-shadow: 0 6pt 12pt rgba(155, 223, 70, 0.7); }
          &.gradient { box-shadow: 0 6pt 12pt rgba(240, 46, 74, 0.7); }

          filter: grayscale(1);
          &:hover,
          &.focus { filter: none; }
        }
      }
    }
  }
</style>
