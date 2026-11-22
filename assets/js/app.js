/**
 * =========================================================================
 * Aahir Pavan Yadav — Portfolio Interactive Logic
 * =========================================================================
 * 
 * - Seamless synchronization with PORTFOLIO_CONFIG
 * - Responsive navigation & IntersectionObserver active tracking
 * - Project filtering & accessible interactive modal dialog
 * - Email clipboard copy & feedback toast
 * - Contact form mailto generator
 * - Command palette (Cmd+K / Ctrl+K)
 * - Back to top & accessible subtle custom cursor
 */

(function () {
  'use strict';

  // Grab config if available
  const config = window.PORTFOLIO_CONFIG || {};

  // DOM Elements
  const header = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const mobileDrawerClose = document.querySelector('.mobile-drawer-close');
  const backToTopBtn = document.querySelector('.back-to-top');
  const toastContainer = document.querySelector('.toast-container');
  const copyEmailBtns = document.querySelectorAll('.copy-email-btn');

  // Modal Elements
  const projectModal = document.getElementById('projectModal');
  const modalCloseBtn = projectModal ? projectModal.querySelector('.modal-close-btn') : null;
  const modalTitle = document.getElementById('modalTitle');
  const modalTagline = document.getElementById('modalTagline');
  const modalDescription = document.getElementById('modalDescription');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalStack = document.getElementById('modalStack');
  const modalPreviewImg = document.getElementById('modalPreviewImg');
  const modalStatus = document.getElementById('modalStatus');
  const modalGithubLink = document.getElementById('modalGithubLink');
  const modalDemoLink = document.getElementById('modalDemoLink');

  // Command Palette Elements
  const cmdkModal = document.getElementById('cmdkModal');
  const cmdkInput = document.getElementById('cmdkInput');
  const cmdkList = document.getElementById('cmdkList');
  const cmdkTriggers = document.querySelectorAll('.cmdk-trigger-btn');

  // =========================================================================
  // 1. Toast Notification System
  // =========================================================================
  function showToast(message, duration = 3000) {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.innerHTML = `
      <svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    // Force reflow for CSS transition
    void toast.offsetWidth;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (toast.parentElement) toast.parentElement.removeChild(toast);
      }, 300);
    }, duration);
  }

  // =========================================================================
  // 2. Header Scroll & Active Section Tracking
  // =========================================================================
  function handleScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header background elevation
    if (header) {
      if (scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Smooth scroll to top
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // IntersectionObserver for active navigation highlight
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -65% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  // =========================================================================
  // 3. Mobile Navigation Drawer
  // =========================================================================
  function openMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileDrawer);
  }

  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeMobileDrawer);
  }

  // Close drawer when clicking mobile links
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // =========================================================================
  // 4. Project Filtering
  // =========================================================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(8px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // =========================================================================
  // 5. Project Detail Modal
  // =========================================================================
  function openProjectModal(projectData) {
    if (!projectModal) return;

    if (modalTitle) modalTitle.textContent = projectData.title;
    if (modalTagline) modalTagline.textContent = projectData.tagline;
    if (modalDescription) modalDescription.textContent = projectData.description;

    if (modalStatus) {
      modalStatus.textContent = projectData.status;
      if (projectData.status.toLowerCase().includes('prototype')) {
        modalStatus.className = 'project-status-badge prototype';
      } else {
        modalStatus.className = 'project-status-badge';
      }
    }

    if (modalPreviewImg) {
      modalPreviewImg.src = `assets/images/projects/${projectData.id}.svg`;
      modalPreviewImg.alt = `${projectData.title} Preview`;
    }

    if (modalHighlights) {
      modalHighlights.innerHTML = '';
      if (projectData.highlights && projectData.highlights.length) {
        projectData.highlights.forEach((h) => {
          const li = document.createElement('li');
          li.className = 'modal-highlight-item';
          li.textContent = h;
          modalHighlights.appendChild(li);
        });
      }
    }

    if (modalStack) {
      modalStack.innerHTML = '';
      if (projectData.stack && projectData.stack.length) {
        projectData.stack.forEach((tech) => {
          const span = document.createElement('span');
          span.className = 'stack-tag';
          span.textContent = tech;
          modalStack.appendChild(span);
        });
      }
    }

    // GitHub link handling
    if (modalGithubLink) {
      if (projectData.githubUrl && projectData.githubUrl !== '#') {
        modalGithubLink.href = projectData.githubUrl;
        modalGithubLink.classList.remove('disabled');
      } else {
        modalGithubLink.href = '#';
        modalGithubLink.classList.add('disabled');
      }
    }

    // Demo link handling
    if (modalDemoLink) {
      if (projectData.hasLiveDemo && projectData.demoUrl && projectData.demoUrl !== '#') {
        modalDemoLink.href = projectData.demoUrl;
        modalDemoLink.classList.remove('disabled');
      } else {
        modalDemoLink.href = '#';
        modalDemoLink.classList.add('disabled');
      }
    }

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Hook up inspect buttons and preview clicks
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-project-trigger]');
    if (trigger) {
      e.preventDefault();
      const projectId = trigger.getAttribute('data-project-trigger');
      const projectList = (config.projects) || [];
      const project = projectList.find((p) => p.id === projectId);
      if (project) {
        openProjectModal(project);
      }
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // =========================================================================
  // 6. Copy Email to Clipboard
  // =========================================================================
  copyEmailBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-email') || (config.contact && config.contact.email) || 'contact@pavandev.in';
      
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email)
          .then(() => {
            showToast(`Copied email to clipboard: ${email}`);
          })
          .catch(() => {
            fallbackCopy(email);
          });
      } else {
        fallbackCopy(email);
      }
    });
  });

  function fallbackCopy(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(`Copied email: ${text}`);
    } catch (err) {
      showToast(`Email: ${text}`);
    }
    document.body.removeChild(textArea);
  }

  // =========================================================================
  // 7. Contact Form Handling
  // =========================================================================
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('formName');
      const emailInput = document.getElementById('formEmail');
      const messageInput = document.getElementById('formMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        showToast('Please fill out all fields before sending.');
        return;
      }

      // Generate mailto link
      const targetEmail = (config.contact && config.contact.email) || 'contact@pavandev.in';
      const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
      const body = encodeURIComponent(`Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      const mailtoUrl = `mailto:${targetEmail}?subject=${subject}&body=${body}`;

      showToast('Opening default email client...');
      window.location.href = mailtoUrl;

      // Reset form
      contactForm.reset();
    });
  }

  // =========================================================================
  // 8. Command Palette (Cmd + K / Ctrl + K)
  // =========================================================================
  function openCmdk() {
    if (!cmdkModal) return;
    cmdkModal.classList.add('active');
    if (cmdkInput) {
      cmdkInput.value = '';
      setTimeout(() => cmdkInput.focus(), 50);
    }
    filterCmdkItems('');
  }

  function closeCmdk() {
    if (!cmdkModal) return;
    cmdkModal.classList.remove('active');
  }

  cmdkTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCmdk();
    });
  });

  if (cmdkModal) {
    cmdkModal.addEventListener('click', (e) => {
      if (e.target === cmdkModal) closeCmdk();
    });
  }

  // Keyboard shortcut Cmd+K / Ctrl+K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (cmdkModal && cmdkModal.classList.contains('active')) {
        closeCmdk();
      } else {
        openCmdk();
      }
    } else if (e.key === 'Escape') {
      closeCmdk();
      closeProjectModal();
      closeMobileDrawer();
    }
  });

  // Filter Command Palette Items
  function filterCmdkItems(query) {
    if (!cmdkList) return;
    const items = cmdkList.querySelectorAll('.cmdk-item');
    const q = query.toLowerCase().trim();

    items.forEach((item) => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  if (cmdkInput) {
    cmdkInput.addEventListener('input', (e) => {
      filterCmdkItems(e.target.value);
    });
  }

  // Command palette item selection
  if (cmdkList) {
    cmdkList.addEventListener('click', (e) => {
      const item = e.target.closest('.cmdk-item');
      if (!item) return;

      const action = item.getAttribute('data-action');
      closeCmdk();

      if (action === 'navigate') {
        const target = item.getAttribute('data-target');
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (action === 'copy-email') {
        const email = (config.contact && config.contact.email) || 'contact@pavandev.in';
        fallbackCopy(email);
      } else if (action === 'open-project') {
        const projectId = item.getAttribute('data-project');
        const projectList = (config.projects) || [];
        const project = projectList.find((p) => p.id === projectId);
        if (project) {
          setTimeout(() => openProjectModal(project), 150);
        }
      }
    });
  }

  // =========================================================================
  // 9. Custom Cursor (Non-intrusive)
  // =========================================================================
  const cursorDot = document.querySelector('.custom-cursor-dot');
  const cursorRing = document.querySelector('.custom-cursor-ring');

  if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top = mouseY + 'px';
    }, { passive: true });

    function renderCursor() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top = ringY + 'px';
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Hover effect over clickable items
    const clickables = document.querySelectorAll('a, button, [role="button"], input, textarea');
    clickables.forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
})();
