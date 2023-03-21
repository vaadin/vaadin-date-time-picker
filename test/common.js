var ua = navigator.userAgent;
var ie11 = /Trident/.test(ua);

async function nextRender(element) {
  return new Promise(resolve => {
    Polymer.RenderStatus.afterNextRender(element, resolve);
  });
}
