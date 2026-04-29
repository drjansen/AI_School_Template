/* =========================================================
   Nexus Academy – Interactive JavaScript
   ========================================================= */

(function () {
  'use strict';

  /* ── Navbar scroll behaviour ──────────────────────────── */
  const navbar = document.getElementById('navbar');

  function handleScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ── Mobile nav toggle ────────────────────────────────── */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile nav when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Fade-in on scroll (IntersectionObserver) ─────────── */
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(el => io.observe(el));
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Animated stat bars (outcomes section) ───────────── */
  const barFills = document.querySelectorAll('.outcome-bar-fill');

  if (barFills.length && 'IntersectionObserver' in window) {
    const barIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const target = fill.getAttribute('data-width') || '0';
          fill.style.width = target + '%';
          barIO.unobserve(fill);
        }
      });
    }, { threshold: 0.4 });

    barFills.forEach(fill => barIO.observe(fill));
  } else {
    barFills.forEach(fill => {
      fill.style.width = (fill.getAttribute('data-width') || '0') + '%';
    });
  }

  /* ── FAQ accordion ────────────────────────────────────── */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn    = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      faqItems.forEach(i => {
        i.classList.remove('open');
        const a = i.querySelector('.faq-answer');
        a.style.maxHeight = null;
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if it was closed)
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Waitlist form ────────────────────────────────────── */
  const form        = document.getElementById('waitlist-form');
  const formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      /* --- helpers --- */
      function setError(fieldId, msg) {
        const field = document.getElementById(fieldId);
        const errEl = document.getElementById(fieldId + '-error');
        if (field)  field.classList.add('invalid');
        if (errEl)  errEl.textContent = msg;
        valid = false;
      }

      function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const errEl = document.getElementById(fieldId + '-error');
        if (field)  field.classList.remove('invalid');
        if (errEl)  errEl.textContent = '';
      }

      /* --- validate first name --- */
      const firstName = document.getElementById('first-name');
      clearError('first-name');
      if (!firstName || firstName.value.trim().length < 2) {
        setError('first-name', 'Please enter your first name.');
      }

      /* --- validate last name --- */
      const lastName = document.getElementById('last-name');
      clearError('last-name');
      if (!lastName || lastName.value.trim().length < 2) {
        setError('last-name', 'Please enter your last name.');
      }

      /* --- validate email --- */
      const email = document.getElementById('email');
      clearError('email');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailPattern.test(email.value.trim())) {
        setError('email', 'Please enter a valid email address.');
      }

      /* --- validate track --- */
      const track = document.getElementById('track');
      clearError('track');
      if (!track || !track.value) {
        setError('track', 'Please select a track.');
      }

      /* --- submit if valid --- */
      if (valid) {
        // Simulate async submission
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting…';

        setTimeout(() => {
          form.style.display = 'none';
          formSuccess.classList.add('visible');
        }, 800);
      }
    });

    // Live validation: clear error on input
    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('invalid');
        const errEl = document.getElementById(field.id + '-error');
        if (errEl) errEl.textContent = '';
      });
    });
  }

})();
