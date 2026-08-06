(function () {
  function applyConfig() {
    var cfg = window.TAXRES_CONFIG;
    if (!cfg) return;

    // data-link="book" -> BOOK_URL
    // data-link="app"  -> APP_URL
    document.querySelectorAll('[data-link]').forEach(function (el) {
      var key = el.getAttribute('data-link');
      if (key === 'book' && cfg.BOOK_URL) {
        el.href = cfg.BOOK_URL;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      } else if (key === 'app' && cfg.APP_URL) {
        el.href = cfg.APP_URL;
        el.target = '_blank';
        el.rel = 'noopener noreferrer';
      }
    });

    // data-email="contact" -> mailto:CONTACT_EMAIL
    document.querySelectorAll('[data-email]').forEach(function (el) {
      var key = el.getAttribute('data-email');
      if (key === 'contact' && cfg.CONTACT_EMAIL) {
        el.href = 'mailto:' + cfg.CONTACT_EMAIL;
        if (!el.textContent.trim() || el.textContent.trim() === cfg.CONTACT_EMAIL) {
          el.textContent = cfg.CONTACT_EMAIL;
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyConfig);
  } else {
    applyConfig();
  }
})();

// Analytics — only fires if IDs are configured in config.js
(function() {
  var cfg = window.TAXRES_CONFIG || {};
  if (cfg.GA4_ID) {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + cfg.GA4_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', cfg.GA4_ID);
  }
  if (cfg.CLARITY_ID) {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window,document,"clarity","script",cfg.CLARITY_ID);
  }
})();
