/**
 * =========================================================================
 * Hero Visual Canvas — Subtle Coordinate Matrix
 * =========================================================================
 * 
 * Minimalist, high-performance background element.
 * Renders a subtle interactive topological grid with mathematical wave harmonics.
 * - Auto-pauses when out of viewport (IntersectionObserver) to preserve battery.
 * - Respects prefers-reduced-motion.
 * - Lightweight vanilla 2D canvas with zero dependencies.
 */

(function () {
  'use strict';

  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId = null;
  let isVisible = true;
  let width = 0;
  let height = 0;
  let time = 0;

  // Check prefers-reduced-motion
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let prefersReducedMotion = mediaQuery.matches;
  mediaQuery.addEventListener('change', (e) => {
    prefersReducedMotion = e.matches;
    if (prefersReducedMotion && animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      renderStaticFrame();
    } else if (!prefersReducedMotion && isVisible) {
      loop();
    }
  });

  // Mouse interaction state (soft damping)
  const mouse = {
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    active: false
  };

  // Grid Configuration
  const COLS = 16;
  const ROWS = 12;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);

    if (prefersReducedMotion) {
      renderStaticFrame();
    }
  }

  // Draw delicate grid lines and subtle coordinate points
  function draw() {
    ctx.clearRect(0, 0, width, height);

    const cellW = width / (COLS - 1);
    const cellH = height / (ROWS - 1);

    // Calculate grid nodes with subtle organic offset
    const points = [];
    for (let r = 0; r < ROWS; r++) {
      points[r] = [];
      for (let c = 0; c < COLS; c++) {
        const baseX = c * cellW;
        const baseY = r * cellH;

        // Wave displacement
        const wave1 = Math.sin(c * 0.4 + time * 0.0012) * 6;
        const wave2 = Math.cos(r * 0.45 + time * 0.0016) * 5;

        // Mouse proximity repulsion (gentle)
        let dx = mouse.x - baseX;
        let dy = mouse.y - baseY;
        let dist = Math.sqrt(dx * dx + dy * dy);
        let mouseOffset = 0;
        if (dist < 180 && mouse.active) {
          const factor = (1 - dist / 180);
          mouseOffset = -factor * 16;
        }

        points[r][c] = {
          x: baseX + wave2 * 0.3,
          y: baseY + wave1 + mouseOffset,
          intensity: (Math.sin(c * 0.3 + r * 0.3 + time * 0.001) + 1) * 0.5
        };
      }
    }

    // Draw horizontal connecting lines (very subtle)
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';

    for (let r = 0; r < ROWS; r++) {
      ctx.beginPath();
      for (let c = 0; c < COLS; c++) {
        const p = points[r][c];
        if (c === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }

    // Draw vertical connecting lines (very subtle)
    for (let c = 0; c < COLS; c++) {
      ctx.beginPath();
      for (let r = 0; r < ROWS; r++) {
        const p = points[r][c];
        if (r === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      }
      ctx.stroke();
    }

    // Draw coordinate crosses and accent node points
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const p = points[r][c];
        
        // Only draw points inside safe bounds
        if (p.x < -10 || p.x > width + 10 || p.y < -10 || p.y > height + 10) continue;

        // Highlight every 3rd node with a micro cross
        if ((r + c) % 3 === 0) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
          ctx.beginPath();
          ctx.moveTo(p.x - 2.5, p.y);
          ctx.lineTo(p.x + 2.5, p.y);
          ctx.moveTo(p.x, p.y - 2.5);
          ctx.lineTo(p.x, p.y + 2.5);
          ctx.stroke();
        } else {
          // Subtle dot
          const alpha = 0.08 + p.intensity * 0.12;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }

        // Distinctive single amber highlight node moving slowly
        const highlightCol = Math.floor((Math.sin(time * 0.0004) * 0.5 + 0.5) * (COLS - 3)) + 1;
        const highlightRow = Math.floor((Math.cos(time * 0.0003) * 0.5 + 0.5) * (ROWS - 3)) + 1;
        if (r === highlightRow && c === highlightCol) {
          ctx.fillStyle = 'rgba(245, 158, 11, 0.7)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 7, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }
  }

  function renderStaticFrame() {
    time = 2400;
    draw();
  }

  function loop(timestamp) {
    if (!isVisible || prefersReducedMotion) return;

    time = timestamp || 0;

    // Smooth mouse follow
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    draw();
    animationFrameId = requestAnimationFrame(loop);
  }

  // Mouse / Pointer Event Listeners
  const heroContainer = canvas.parentElement;
  if (heroContainer) {
    heroContainer.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    });

    heroContainer.addEventListener('mouseleave', () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    });
  }

  // Pause when offscreen for 0% CPU consumption
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isVisible = entry.isIntersecting;
      if (isVisible && !prefersReducedMotion) {
        if (!animationFrameId) {
          animationFrameId = requestAnimationFrame(loop);
        }
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
      }
    });
  }, { threshold: 0.05 });

  observer.observe(canvas);

  // Resize handling with debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 100);
  }, { passive: true });

  // Init
  resize();
  if (!prefersReducedMotion) {
    animationFrameId = requestAnimationFrame(loop);
  } else {
    renderStaticFrame();
  }
})();
