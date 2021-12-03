import App from "./App.svelte";

Object.assign(window, {
  app: new App({
    target: document.querySelector('#app')!,
  })
});
