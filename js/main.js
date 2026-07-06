/* SCAI Space — GSAP scroll animations
   - .gs-reveal        : fade/slide-in on scroll (staggered per batch)
   - [data-parallax]   : scroll-scrubbed parallax drift; value = speed (-0.4 … 0.6)
   - .bg [data-parallax]: fixed background layer, drifts against full page scroll
*/
(function () {
  'use strict';

  /* '?noanim' disables all animation — handy for layout debugging/screenshots */
  if (/[?&]noanim/.test(window.location.search)) return;

  /* '?instant' fast-forwards tweens to their end states (testing) */
  if (/[?&]instant/.test(window.location.search) && typeof gsap !== 'undefined') {
    gsap.globalTimeline.timeScale(1000);
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (typeof gsap === 'undefined') {
    document.documentElement.classList.add('no-gsap');
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Nav: stronger glass once the page is scrolled ---------- */
  var nav = document.querySelector('[data-section="nav"]');
  if (nav) {
    ScrollTrigger.create({
      start: 40,
      end: 'max',
      onEnter: function () { nav.classList.add('is-scrolled'); },
      onLeaveBack: function () { nav.classList.remove('is-scrolled'); }
    });
  }

  /* ---------- Nav: scroll-spy — highlight the section being viewed ---------- */
  (function () {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link[href^="#"]'));
    if (!links.length) return;
    var targets = links
      .map(function (link) {
        var el = document.querySelector(link.getAttribute('href'));
        return el ? { link: link, el: el } : null;
      })
      .filter(Boolean);
    if (!targets.length) return;

    var current = null;
    function update() {
      var probe = window.scrollY + window.innerHeight * 0.3;
      var active = targets[0];
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].el.offsetTop <= probe) active = targets[i];
      }
      /* near page bottom: force the last target active */
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        active = targets[targets.length - 1];
      }
      if (active === current) return;
      current = active;
      targets.forEach(function (t) { t.link.classList.toggle('is-active', t === active); });
    }
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  })();

  if (reduceMotion) {
    gsap.set('.gs-reveal', { clearProps: 'all' });
    return;
  }

  /* ---------- Reveal-on-scroll (per-element triggers, staggered per section) ----------
     Per-element start-based ScrollTriggers are evaluated on every scroll tick and
     refresh, so they can't be skipped by fast scrolling or anchor jumps (unlike
     IntersectionObserver-based ScrollTrigger.batch). */
  gsap.set('.gs-reveal', { autoAlpha: 0, y: 44 });

  function reveal(el, delay) {
    gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: delay || 0, overwrite: true });
  }

  var covered = new Set();
  gsap.utils.toArray('section, header, footer').forEach(function (sec) {
    sec.querySelectorAll('.gs-reveal').forEach(function (el, i) {
      covered.add(el);
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: function () { reveal(el, Math.min(i, 6) * 0.08); } /* stagger within a section */
      });
    });
  });

  /* Catch any reveal element outside a section/header/footer */
  gsap.utils.toArray('.gs-reveal').forEach(function (el) {
    if (covered.has(el)) return;
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: function () { reveal(el); } });
  });

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });

  /* ---------- Parallax ---------- */
  gsap.utils.toArray('[data-parallax]').forEach(function (el) {
    var speed = parseFloat(el.getAttribute('data-parallax'));
    if (isNaN(speed) || speed === 0) return;

    if (el.closest('[data-section="bg"]')) {
      /* Fixed backdrop: slow drift proportional to total page scroll */
      gsap.to(el, {
        y: function () { return -speed * ScrollTrigger.maxScroll(window) * 0.12; },
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.8, invalidateOnRefresh: true }
      });
    } else if (el.closest('[data-section="doodles"]')) {
      /* Full-page doodle layer (scrolls with page): drift at a fraction of total
         scroll so each doodle floats at its own depth. +speed = foreground (drifts
         up faster than scroll), -speed = background (lags behind). */
      gsap.to(el, {
        y: function () { return -speed * ScrollTrigger.maxScroll(window) * 0.06; },
        ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: 0.8, invalidateOnRefresh: true }
      });
    } else {
      /* In-flow decoration: drift while its section crosses the viewport */
      var trigger = el.closest('section, footer, header') || el;
      gsap.fromTo(el,
        { y: -speed * 140 },
        {
          y: speed * 140,
          ease: 'none',
          scrollTrigger: {
            trigger: trigger,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
            invalidateOnRefresh: true
          }
        });
    }
  });

  /* ---------- Hero: gentle counter-scroll depth ---------- */
  var heroCopy = document.querySelector('.hero [data-hero-copy]');
  var heroVisual = document.querySelector('.hero [data-hero-visual]');
  [{ el: heroCopy, y: 90 }, { el: heroVisual, y: 150 }].forEach(function (item) {
    if (!item.el) return;
    gsap.to(item.el, {
      y: item.y,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6
      }
    });
  });
})();


/* ===== SKAI interactive components (no GSAP dependency) ===== */
(function () {
  'use strict';

  /* ---------- Footprint: count-up stats ---------- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        var el = entry.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var start = null;
        var tick = function (ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / 1200, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased).toLocaleString('en-IN') + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Footprint: marker tooltips ---------- */
  var mapWrap = document.querySelector('.footprint-map-wrap');
  if (mapWrap) {
    var tip = mapWrap.querySelector('.footprint-tooltip');
    mapWrap.querySelectorAll('.footprint-marker').forEach(function (m) {
      m.addEventListener('mouseenter', function () {
        var wrapBox = mapWrap.getBoundingClientRect();
        var box = m.getBoundingClientRect();
        tip.textContent = m.getAttribute('data-place');
        tip.style.left = (box.left + box.width / 2 - wrapBox.left) + 'px';
        tip.style.top = (box.top - wrapBox.top) + 'px';
        tip.classList.add('is-on');
      });
      m.addEventListener('mouseleave', function () { tip.classList.remove('is-on'); });
    });
  }

  /* ---------- SKAI film: click poster to play embedded video ---------- */
  document.querySelectorAll('.svideo-frame[data-video]').forEach(function (frame) {
    var video = frame.querySelector('.svideo-video');
    var poster = frame.querySelector('.svideo-poster');
    if (!video || !poster) return;
    poster.addEventListener('click', function () {
      frame.classList.add('is-playing');
      var p = video.play();
      if (p && typeof p.catch === 'function') { p.catch(function () {}); }
    });
    video.addEventListener('pause', function () {
      if (video.currentTime === 0 || video.ended) frame.classList.remove('is-playing');
    });
  });

  /* ---------- Learning cycle diagram ---------- */
  var ring = document.querySelector('.cycle-ring');
  if (ring) {
    var nodes = Array.prototype.slice.call(ring.querySelectorAll('.cycle-node'));
    var inner = ring.querySelector('.cycle-center-inner');
    var stepEl = ring.querySelector('.cycle-center-step');
    var titleEl = ring.querySelector('.cycle-center-title');
    var textEl = ring.querySelector('.cycle-center-text');
    var idx = 0;
    var timer = null;

    var show = function (i) {
      idx = i;
      nodes.forEach(function (n, j) { n.classList.toggle('is-active', j === i); });
      inner.style.opacity = '0';
      setTimeout(function () {
        stepEl.textContent = '0' + (i + 1);
        titleEl.textContent = nodes[i].getAttribute('data-title');
        textEl.textContent = nodes[i].getAttribute('data-text');
        inner.style.opacity = '1';
      }, 180);
    };
    var auto = function () {
      timer = setInterval(function () { show((idx + 1) % nodes.length); }, 3500);
    };

    nodes.forEach(function (n, i) {
      n.addEventListener('click', function () {
        clearInterval(timer);
        show(i);
        auto();
      });
    });
    auto();
  }

  /* ---------- Operating model flow ---------- */
  var opNodes = document.querySelectorAll('.opmodel-node');
  var opPanels = document.querySelectorAll('.opmodel-panel');
  opNodes.forEach(function (n, i) {
    n.addEventListener('click', function () {
      opNodes.forEach(function (m, j) { m.classList.toggle('is-active', j === i); });
      opPanels.forEach(function (p, j) { p.classList.toggle('is-active', j === i); });
    });
  });

  /* ---------- Lightboxes: mission passport + Swiftee video ---------- */
  (function () {
    var boxes = document.querySelectorAll('[data-lightbox]');
    if (!boxes.length) return;
    var boxMap = {};
    boxes.forEach(function (b) { boxMap[b.getAttribute('data-lightbox')] = b; });

    var closeAll = function () {
      boxes.forEach(function (b) {
        b.setAttribute('data-open', 'false');
        b.setAttribute('aria-hidden', 'true');
        var video = b.querySelector('[data-lightbox-video]');
        if (video) video.pause();
      });
    };

    document.querySelectorAll('[data-lightbox-trigger]').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var box = boxMap[trigger.getAttribute('data-lightbox-trigger')];
        if (!box) return;
        closeAll();
        box.setAttribute('data-open', 'true');
        box.setAttribute('aria-hidden', 'false');
        var video = box.querySelector('[data-lightbox-video]');
        if (video) {
          video.currentTime = 0;
          video.play().catch(function () {});
        }
      });
    });

    document.querySelectorAll('[data-lightbox-close]').forEach(function (el) {
      el.addEventListener('click', closeAll);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });
  })();

  /* ---------- Nav: Contact-us dropdown ---------- */
  (function () {
    var contact = document.querySelector('[data-contact]');
    if (!contact) return;
    var btn = contact.querySelector('.nav-btn-demo');
    var close = function () {
      contact.setAttribute('data-open', 'false');
      btn.setAttribute('aria-expanded', 'false');
    };
    var open = function () {
      contact.setAttribute('data-open', 'true');
      btn.setAttribute('aria-expanded', 'true');
    };
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      (contact.getAttribute('data-open') === 'true') ? close() : open();
    });
    document.addEventListener('click', function (e) {
      if (!contact.contains(e.target)) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  })();

  /* ---------- Skills trainer ---------- */
  var LEVEL_XP = 20;
  var MAX_XP = 100;
  document.querySelectorAll('.skillsx-card').forEach(function (card, i) {
    var baseXp = 12 + ((i * 13) % 40); /* varied starting mastery per skill */
    var xp = 0;
    var fill = card.querySelector('.skillsx-fill');
    var levelEl = card.querySelector('.skillsx-level');

    var render = function () {
      fill.style.width = xp + '%';
      if (xp >= MAX_XP) {
        levelEl.textContent = 'Mastered ✦';
        card.classList.add('is-max');
      } else {
        levelEl.textContent = 'Lv ' + (Math.floor(xp / LEVEL_XP) + 1);
      }
    };

    if ('IntersectionObserver' in window) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          io2.disconnect();
          xp = baseXp;
          render();
        });
      }, { threshold: 0.4 });
      io2.observe(card);
    } else {
      xp = baseXp;
      render();
    }

    card.addEventListener('click', function () {
      if (xp >= MAX_XP) return;
      xp = Math.min(xp + 17, MAX_XP);
      render();
      card.classList.remove('is-xp');
      void card.offsetWidth; /* restart the +XP animation */
      card.classList.add('is-xp');
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    var a = item.querySelector('.faq-a');
    q.addEventListener('click', function () {
      var open = item.classList.toggle('is-open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
    });
  });

  /* ---------- Flying Swiftee — wanders the screen along a Lissajous path ---------- */
  (function () {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fly = document.querySelector('.swiftee-fly');
    if (!fly || prefersReduced) return;
    var face = fly.querySelector('.swiftee-fly-face');
    var prevX = null;
    var ticking = false;

    function place() {
      ticking = false;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      var t = max > 0 ? window.scrollY / max : 0;               /* 0 → 1 down the page */
      var vw = window.innerWidth, vh = window.innerHeight;
      var bw = fly.offsetWidth, bh = fly.offsetHeight;

      /* two different frequencies → a gentle wandering (Lissajous) flight path */
      var x = vw * 0.5 + vw * 0.34 * Math.sin(t * Math.PI * 3.0) - bw / 2;
      var y = vh * 0.46 + vh * 0.30 * Math.sin(t * Math.PI * 5.0 + 0.9) - bh / 2;

      x = Math.max(8, Math.min(vw - bw - 8, x));
      y = Math.max(96, Math.min(vh - bh - 16, y));            /* keep clear of the top bar */

      fly.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)';
      if (prevX !== null && Math.abs(x - prevX) > 0.4) {
        face.style.transform = (x < prevX) ? 'scaleX(-1)' : 'scaleX(1)';
      }
      prevX = x;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(place);
    }

    place();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', place);
  })();
})();
