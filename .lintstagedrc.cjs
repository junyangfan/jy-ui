module.exports = {
  '*.{js,ts,vue,jsx,tsx}': () => ['yarn lint', 'vue-tsc --noEmit'],
}
