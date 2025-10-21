---
permalink: /assets/js/open-panel-analytics-setup.js
---
// Transpiled to ES5 for compatibility with Uglifier
window.op =
  window.op ||
  function () {
    var args = Array.prototype.slice.call(arguments);
    (window.op.q = window.op.q || []).push(args);
  };
window.op("init", {
  clientId: "{{ site.openpanel_analytics }}",
  trackScreenViews: true,
  trackOutgoingLinks: true,
  trackAttributes: true,
});
