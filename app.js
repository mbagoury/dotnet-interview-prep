// ============================================================================
// Senior .NET & Architecture Interview Platform - Application Logic
// ============================================================================

(function () {
  'use strict';

  // --- STATE STORE ---
  const state = {
    currentView: 'view-interview',
    theme: localStorage.getItem('dotnet_interview_theme') || 'dark',
    soundEnabled: localStorage.getItem('dotnet_interview_sound') !== 'false',

    interview: {
      isActive: false,
      isPaused: false,
      candidateName: '',
      candidateRole: '',
      presetId: 'senior-general',
      selectedChapters: [],
      questionCount: 15,
      difficultyMix: 'balanced',
      questions: [],
      currentIndex: 0,
      evaluations: {}, // keyed by question id: { score: number, tags: [], notes: '' }
      totalSeconds: 0,
      timerHandle: null
    },

    explorer: {
      searchQuery: '',
      category: 'all',
      chapterId: 'all',
      tier: 'all',
      starredOnly: false,
      starredIds: new Set(JSON.parse(localStorage.getItem('dotnet_starred_qs') || '[]')),
      expandedIds: new Set()
    },

    solid: {
      activePrinciple: 'SRP',
      checklist: JSON.parse(localStorage.getItem('dotnet_solid_checklist') || '{}')
    },

    flashcards: {
      chapterId: 'all',
      deck: [],
      currentIndex: 0,
      isFlipped: false
    },

    top5: {
      searchQuery: '',
      category: 'all',
      chapterId: 'all',
      expandedIds: new Set()
    },

    auth: {
      isAuthenticated: false,
      currentUser: null,
      config: null
    },

    history: JSON.parse(localStorage.getItem('dotnet_interview_history') || '[]')
  };

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSound();
    initScrollToTop();
    applySolidFeatureFlag();
    initNavigation();
    initAuthSystem();
    initInterviewSetup();
    initTop5View();
    initQuestionExplorer();
    initSolidMasterclass();
    initRevisionView();
    initFlashcards();
    initCandidateHistory();
    initReportModal();
    updateGlobalCounters();
  });

  // --- THEME MANAGEMENT (DARK MODE ON / OFF) ---
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeUI();

    const checkbox = document.getElementById('dark-mode-checkbox');
    const container = document.getElementById('theme-toggle-box');

    if (checkbox) {
      checkbox.checked = state.theme === 'dark';
      checkbox.addEventListener('change', (e) => {
        setTheme(e.target.checked ? 'dark' : 'light');
      });
    }

    if (container) {
      container.addEventListener('click', (e) => {
        // If clicked on container rather than checkbox directly, toggle it
        if (e.target.tagName !== 'INPUT') {
          toggleTheme();
        }
      });
    }

    // Keyboard shortcut: Alt+D to toggle theme
    document.addEventListener('keydown', (e) => {
      if (e.altKey && (e.key === 'd' || e.key === 'D')) {
        e.preventDefault();
        toggleTheme();
      }
    });
  }

  function toggleTheme() {
    const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dotnet_interview_theme', theme);
    updateThemeUI();
    showToast(theme === 'dark' ? '🌙 Dark Mode: ON' : '☀️ Dark Mode: OFF (Light Mode)', 'info');
  }

  function updateThemeUI() {
    const isDark = state.theme === 'dark';
    const checkbox = document.getElementById('dark-mode-checkbox');
    const icon = document.getElementById('dark-mode-icon');
    const pill = document.getElementById('dark-mode-pill');

    if (checkbox) checkbox.checked = isDark;
    if (icon) icon.textContent = isDark ? '🌙' : '☀️';
    if (pill) {
      pill.textContent = isDark ? 'ON' : 'OFF';
      pill.className = `theme-status-pill ${isDark ? 'on' : 'off'}`;
    }
  }

  // --- SOUND EFFECTS (WEB AUDIO API SYNTHESIZER) ---
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function initSound() {
    const btn = document.getElementById('sound-toggle-btn');
    updateSoundUI();

    if (btn) {
      btn.addEventListener('click', () => {
        state.soundEnabled = !state.soundEnabled;
        localStorage.setItem('dotnet_interview_sound', state.soundEnabled);
        updateSoundUI();
        if (state.soundEnabled) playChime('score');
        showToast(state.soundEnabled ? '🔊 Sound effects enabled' : '🔇 Sound effects muted', 'info');
      });
    }
  }

  function updateSoundUI() {
    const btn = document.getElementById('sound-toggle-btn');
    const icon = document.getElementById('sound-icon');
    if (icon) icon.textContent = state.soundEnabled ? '🔊' : '🔇';
    if (btn) btn.classList.toggle('muted', !state.soundEnabled);
  }

  function playChime(type = 'score') {
    if (!state.soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === 'score') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      } else if (type === 'next') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === 'finish') {
        [523.25, 659.25, 783.99].forEach((freq, i) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.connect(g);
          g.connect(ctx.destination);
          o.frequency.value = freq;
          g.gain.setValueAtTime(0.08, now + i * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
          o.start(now + i * 0.08);
          o.stop(now + i * 0.08 + 0.35);
        });
      }
    } catch (e) {
      // Audio context silently handled
    }
  }

  // --- FLOATING SCROLL TO TOP ---
  function initScrollToTop() {
    const btn = document.getElementById('scroll-top-btn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 280) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- C# CODE SYNTAX HIGHLIGHTER ---
  function highlightCSharp(code) {
    if (!code) return '';
    let escaped = escapeHtml(code);

    // Comments: // ...
    escaped = escaped.replace(/(\/\/[^\n]*)/g, '<span class="cs-com">$1</span>');

    // Strings: "..." or $"..."
    escaped = escaped.replace(/(\$?"(?:\\"|[^"\n])*")/g, '<span class="cs-str">$1</span>');

    // Keywords
    const keywords = /\b(public|private|protected|internal|class|interface|record|struct|override|abstract|virtual|async|await|return|new|var|string|int|decimal|bool|void|using|throw|if|else|switch|case|default|foreach|in|yield|where|sealed|readonly|static|get|set|init)\b/g;
    escaped = escaped.replace(keywords, (match, p1) => {
      return `<span class="cs-kw">${p1}</span>`;
    });

    // Types / Interfaces
    escaped = escaped.replace(/\b(I[A-Z][a-zA-Z0-9_]*|Task|Exception|NotSupportedException|Console|File|CancellationToken|DateTime|Guid|IEnumerable|List|Dictionary)\b/g, '<span class="cs-type">$1</span>');

    return escaped;
  }

  // --- ROUTING / NAVIGATION ---
  function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-tab-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.dataset.view;
        switchView(targetView);
      });
    });

    const brandBtn = document.getElementById('brand-home-btn');
    if (brandBtn) {
      brandBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchView('view-interview');
      });
    }
  }

  function switchView(viewId) {
    // Auth Guard Check
    const requireAuth = state.auth.config ? state.auth.config.auth?.requireAuth !== false : true;
    if (requireAuth && !state.auth.isAuthenticated && viewId !== 'view-login') {
      showToast('🔒 Access restricted. Please sign in to continue.', 'warning');
      switchView('view-login');
      return;
    }

    // SOLID Masterclass Feature Flag Guard
    const activeCfg = state.auth.config || (typeof window !== 'undefined' ? window.APP_CONFIG : null) || DEFAULT_CONFIG;
    const isSolidEnabled = Boolean(activeCfg && activeCfg.features && activeCfg.features.solidMasterclass === true);
    if (viewId === 'view-solid' && !isSolidEnabled) {
      showToast('⚠️ The SOLID Masterclass page is currently disabled in system configuration.', 'warning');
      switchView('view-interview');
      return;
    }

    // If logged in and navigating to view-login, redirect to main cockpit
    if (viewId === 'view-login' && state.auth.isAuthenticated) {
      switchView('view-interview');
      return;
    }

    state.currentView = viewId;

    // Update active nav button
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === viewId);
    });

    // Update visible view section
    document.querySelectorAll('.view-section').forEach(section => {
      section.classList.toggle('active', section.id === viewId);
    });

    // Sub-view refreshes
    if (viewId === 'view-top5') {
      renderTop5View();
    } else if (viewId === 'view-explorer') {
      renderExplorerQuestions();
    } else if (viewId === 'view-revision') {
      renderRevisionView();
    } else if (viewId === 'view-flashcards') {
      setupFlashcardDeck();
    } else if (viewId === 'view-history') {
      renderCandidateHistory();
    }
  }

  function updateGlobalCounters() {
    const totalCount = INTERVIEW_DATA.questions.length;
    const badge = document.getElementById('total-q-badge');
    if (badge) {
      badge.textContent = `${totalCount} Qs`;
    }
  }

  // ==========================================================================
  // AUTHENTICATION, CONFIG & FEATURE FLAGS CONTROLLER
  // ==========================================================================

  const DEFAULT_CONFIG = {
    features: {
      solidMasterclass: false
    },
    auth: {
      requireAuth: true,
      sessionTimeoutMinutes: 120
    },
    users: [
      {
        id: "u1",
        username: "architect",
        name: "Alex Vance",
        email: "architect@dotnet.local",
        password: "Admin@123",
        role: "Lead Architect",
        avatar: "AV"
      },
      {
        id: "u2",
        username: "interviewer",
        name: "Sarah Connor",
        email: "interviewer@dotnet.local",
        password: "Admin@123",
        role: "Senior Technical Interviewer",
        avatar: "SC"
      },
      {
        id: "u3",
        username: "admin",
        name: "David Miller",
        email: "admin@dotnet.local",
        password: "Admin@123",
        role: "Platform Administrator",
        avatar: "DM"
      }
    ]
  };

  async function fetchFreshConfig() {
    // If preloaded via window.APP_CONFIG (from config.js), use it immediately
    if (typeof window !== 'undefined' && window.APP_CONFIG) {
      state.auth.config = JSON.parse(JSON.stringify(window.APP_CONFIG));
    }
    try {
      const response = await fetch(`config.json?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      });
      if (response.ok) {
        state.auth.config = await response.json();
        return state.auth.config;
      }
    } catch (e) {
      // Quietly fall back when opening via file:/// protocol or offline
    }
    if (!state.auth.config) {
      state.auth.config = DEFAULT_CONFIG;
    }
    return state.auth.config;
  }

  async function initAuthSystem() {
    // 1. Fetch latest config.json with cache-busting
    await fetchFreshConfig();

    // 2. Apply SOLID Masterclass dynamic visibility flag
    applySolidFeatureFlag();

    // 3. Attach Form & UI Listeners
    setupAuthListeners();

    // 4. Restore Existing User Session if available
    restoreUserSession();
  }

  function applySolidFeatureFlag() {
    const cfg = state.auth.config || (typeof window !== 'undefined' ? window.APP_CONFIG : null) || DEFAULT_CONFIG;
    const isSolidEnabled = Boolean(cfg && cfg.features && cfg.features.solidMasterclass === true);
    const solidTab = document.getElementById('tab-solid');
    const brandSub = document.getElementById('brand-subtitle');

    if (solidTab) {
      solidTab.classList.toggle('feature-hidden', !isSolidEnabled);
      if (!isSolidEnabled) {
        solidTab.style.setProperty('display', 'none', 'important');
      } else {
        solidTab.style.removeProperty('display');
      }
    }

    if (brandSub) {
      brandSub.textContent = isSolidEnabled
        ? 'Chapters 1–20 Full Reference + SOLID Masterclass'
        : 'Chapters 1–20 Full Architecture Reference';
    }

    // If disabled and currently on view-solid, redirect away
    if (!isSolidEnabled && state.currentView === 'view-solid') {
      switchView('view-interview');
    }
  }

  function setupAuthListeners() {
    // Auto-sync config changes when returning to the browser window
    window.addEventListener('focus', async () => {
      await fetchFreshConfig();
      applySolidFeatureFlag();
    });

    document.addEventListener('visibilitychange', async () => {
      if (!document.hidden) {
        await fetchFreshConfig();
        applySolidFeatureFlag();
      }
    });

    // Login Form Submit
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleLogin();
      });
    }

    // Password Toggle Visibility
    const toggleBtn = document.getElementById('toggle-password-btn');
    const passwordInput = document.getElementById('login-password');
    if (toggleBtn && passwordInput) {
      toggleBtn.addEventListener('click', () => {
        const isPassword = passwordInput.type === 'password';
        passwordInput.type = isPassword ? 'text' : 'password';
        toggleBtn.textContent = isPassword ? '🙈' : '👁️';
      });
    }

    // Logout Button
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        handleLogout();
      });
    }

    // Sign In button in header (when not logged in)
    const loginNavBtn = document.getElementById('login-nav-btn');
    if (loginNavBtn) {
      loginNavBtn.addEventListener('click', () => {
        switchView('view-login');
      });
    }
  }

  async function handleLogin() {
    const usernameInput = document.getElementById('login-username');
    const passwordInput = document.getElementById('login-password');
    const rememberCheckbox = document.getElementById('login-remember-me');
    const errorAlert = document.getElementById('login-error-alert');

    const enteredUsername = (usernameInput?.value || '').trim();
    const enteredPassword = passwordInput?.value || '';

    if (!enteredUsername || !enteredPassword) {
      showLoginError('Please enter both username/email and password.');
      return;
    }

    // Always fetch latest config from config.json directly so any password changes take effect immediately!
    const config = await fetchFreshConfig();
    const users = config?.users || DEFAULT_CONFIG.users;

    const matchedUser = users.find(u => {
      const matchName = u.username.toLowerCase() === enteredUsername.toLowerCase() ||
                        u.email.toLowerCase() === enteredUsername.toLowerCase();
      const matchPass = u.password === enteredPassword;
      return matchName && matchPass;
    });

    if (matchedUser) {
      if (errorAlert) errorAlert.style.display = 'none';

      // Authenticate
      state.auth.isAuthenticated = true;
      state.auth.currentUser = matchedUser;

      // Remember session
      if (rememberCheckbox && rememberCheckbox.checked) {
        localStorage.setItem('dotnet_interview_user', JSON.stringify({
          userId: matchedUser.id,
          username: matchedUser.username,
          loginTime: Date.now()
        }));
      }

      // Update candidate name default to current user
      const candidateNameInput = document.getElementById('candidate-name-input');
      if (candidateNameInput && candidateNameInput.value === 'Candidate 1') {
        candidateNameInput.value = `${matchedUser.name}'s Candidate`;
      }

      updateAuthUI();
      applySolidFeatureFlag();
      playChime('finish');
      showToast(`👋 Welcome back, ${matchedUser.name} (${matchedUser.role})!`, 'success');

      // Navigate to main cockpit
      switchView('view-interview');
    } else {
      showLoginError('Invalid username/email or password. Please check your credentials in config.json.');
      playChime('error');
    }
  }

  function showLoginError(msg) {
    const errorAlert = document.getElementById('login-error-alert');
    if (errorAlert) {
      errorAlert.textContent = `❌ ${msg}`;
      errorAlert.style.display = 'flex';
    }
  }

  function handleLogout() {
    localStorage.removeItem('dotnet_interview_user');
    state.auth.isAuthenticated = false;
    state.auth.currentUser = null;

    updateAuthUI();
    showToast('🚪 You have been signed out.', 'info');
    switchView('view-login');
  }

  function restoreUserSession() {
    const saved = localStorage.getItem('dotnet_interview_user');
    if (saved) {
      try {
        const session = JSON.parse(saved);
        const users = state.auth.config?.users || DEFAULT_CONFIG.users;
        const matched = users.find(u => u.id === session.userId || u.username === session.username);
        if (matched) {
          state.auth.isAuthenticated = true;
          state.auth.currentUser = matched;
          updateAuthUI();
          return;
        }
      } catch (e) {
        localStorage.removeItem('dotnet_interview_user');
      }
    }

    // If no valid session and requireAuth is active, enforce login view
    const requireAuth = state.auth.config?.auth?.requireAuth !== false;
    if (requireAuth) {
      updateAuthUI();
      switchView('view-login');
    } else {
      updateAuthUI();
    }
  }

  function updateAuthUI() {
    const userProfileHeader = document.getElementById('user-profile-header');
    const loginNavBtn = document.getElementById('login-nav-btn');
    const headerAvatar = document.getElementById('header-user-avatar');
    const headerName = document.getElementById('header-user-name');
    const headerRole = document.getElementById('header-user-role');
    const navTabs = document.querySelector('.nav-tabs');

    if (state.auth.isAuthenticated && state.auth.currentUser) {
      const u = state.auth.currentUser;
      if (userProfileHeader) userProfileHeader.style.display = 'flex';
      if (loginNavBtn) loginNavBtn.style.display = 'none';
      if (headerAvatar) headerAvatar.textContent = u.avatar || u.name.substring(0, 2).toUpperCase();
      if (headerName) headerName.textContent = u.name;
      if (headerRole) headerRole.textContent = u.role;
      if (navTabs) navTabs.style.opacity = '1';
    } else {
      if (userProfileHeader) userProfileHeader.style.display = 'none';
      if (loginNavBtn) loginNavBtn.style.display = '';
      if (navTabs && state.auth.config?.auth?.requireAuth !== false) {
        navTabs.style.opacity = '0.45';
      }
    }
  }

  // ==========================================================================
  // 1. CONDUCT INTERVIEW CONTROLLER
  // ==========================================================================

  function initInterviewSetup() {
    // Populate Presets List
    const presetContainer = document.getElementById('preset-list-container');
    if (presetContainer) {
      presetContainer.innerHTML = INTERVIEW_DATA.presets.map((preset, index) => `
        <div class="preset-card ${index === 0 ? 'selected' : ''}" data-preset-id="${preset.id}">
          <div>
            <div class="preset-title">
              <span>🎯</span> ${escapeHtml(preset.name)}
            </div>
            <div class="preset-meta">${escapeHtml(preset.description)}</div>
          </div>
          <span class="badge badge-standard">${preset.questionIds.length} Qs • ${preset.durationMinutes}m</span>
        </div>
      `).join('');

      presetContainer.querySelectorAll('.preset-card').forEach(card => {
        card.addEventListener('click', () => {
          presetContainer.querySelectorAll('.preset-card').forEach(c => c.classList.remove('selected'));
          card.classList.add('selected');
          state.interview.presetId = card.dataset.presetId;
          // Uncheck custom chapters when preset is clicked
          uncheckAllChapters();
        });
      });
    }

    // Populate Chapter Checklist
    const chapterContainer = document.getElementById('chapter-checklist-container');
    if (chapterContainer) {
      chapterContainer.innerHTML = INTERVIEW_DATA.chapters.map(ch => `
        <label class="chapter-check-item">
          <input type="checkbox" value="${ch.id}" class="chapter-checkbox">
          <span>${escapeHtml(ch.name)} (${ch.count})</span>
        </label>
      `).join('');

      chapterContainer.querySelectorAll('.chapter-checkbox').forEach(cb => {
        cb.addEventListener('change', () => {
          // Deselect presets if user custom-picks chapters
          if (presetContainer) {
            presetContainer.querySelectorAll('.preset-card').forEach(c => c.classList.remove('selected'));
          }
          state.interview.presetId = 'custom';
        });
      });
    }

    // Reset button
    const resetBtn = document.getElementById('reset-setup-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        document.getElementById('candidate-name-input').value = 'Candidate 1';
        document.getElementById('candidate-role-select').value = 'Senior .NET Backend Engineer';
        document.getElementById('question-count-select').value = '15';
        document.getElementById('difficulty-mix-select').value = 'balanced';
        uncheckAllChapters();
        if (presetContainer) {
          const firstCard = presetContainer.querySelector('.preset-card');
          if (firstCard) {
            presetContainer.querySelectorAll('.preset-card').forEach(c => c.classList.remove('selected'));
            firstCard.classList.add('selected');
            state.interview.presetId = firstCard.dataset.presetId;
          }
        }
      });
    }

    // Start Interview Button
    const startBtn = document.getElementById('start-interview-btn');
    if (startBtn) {
      startBtn.addEventListener('click', startInterviewSession);
    }

    // Live Cockpit Controls
    initLiveCockpitControls();
  }

  function uncheckAllChapters() {
    document.querySelectorAll('.chapter-checkbox').forEach(cb => cb.checked = false);
  }

  function startInterviewSession() {
    const candidateName = document.getElementById('candidate-name-input').value.trim() || 'Candidate 1';
    const candidateRole = document.getElementById('candidate-role-select').value;
    const countVal = document.getElementById('question-count-select').value;
    const diffMix = document.getElementById('difficulty-mix-select').value;

    let selectedQuestions = [];

    // Check if preset selected
    if (state.interview.presetId && state.interview.presetId !== 'custom') {
      const preset = INTERVIEW_DATA.presets.find(p => p.id === state.interview.presetId);
      if (preset) {
        selectedQuestions = preset.questionIds
          .map(id => INTERVIEW_DATA.questions.find(q => q.id === id))
          .filter(Boolean);
      }
    }

    // If custom or preset returned empty, gather by chapters
    if (selectedQuestions.length === 0) {
      const checkedBoxes = Array.from(document.querySelectorAll('.chapter-checkbox:checked'));
      const selectedChapterIds = checkedBoxes.map(cb => parseInt(cb.value, 10));

      let pool = INTERVIEW_DATA.questions;
      if (selectedChapterIds.length > 0) {
        pool = pool.filter(q => selectedChapterIds.includes(q.chapterId));
      }

      // Filter by difficulty mix
      if (diffMix === 'standard') {
        pool = pool.filter(q => !q.isAdvanced);
      } else if (diffMix === 'advanced') {
        pool = pool.filter(q => q.isAdvanced);
      }

      // Shuffle and slice
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      const limit = countVal === 'all' ? shuffled.length : parseInt(countVal, 10);
      selectedQuestions = shuffled.slice(0, Math.min(limit, shuffled.length));
    }

    if (selectedQuestions.length === 0) {
      showToast('⚠️ No questions found matching your selection. Please select at least one chapter or preset.', 'warning');
      return;
    }

    // Set interview state
    state.interview.isActive = true;
    state.interview.isPaused = false;
    state.interview.candidateName = candidateName;
    state.interview.candidateRole = candidateRole;
    state.interview.questions = selectedQuestions;
    state.interview.currentIndex = 0;
    state.interview.evaluations = {};
    state.interview.totalSeconds = 0;

    // Initialize blank evaluations for each question
    selectedQuestions.forEach(q => {
      state.interview.evaluations[q.id] = {
        score: 0,
        tags: [],
        notes: ''
      };
    });

    // Start timer
    startInterviewTimer();

    // Switch panels
    document.getElementById('interview-setup-panel').style.display = 'none';
    document.getElementById('interview-live-panel').style.display = 'grid';

    // Update Live candidate badges
    document.getElementById('live-candidate-name').textContent = candidateName;
    document.getElementById('live-candidate-role').textContent = candidateRole;
    const initials = candidateName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'C';
    document.getElementById('live-candidate-avatar').textContent = initials;

    // Render Question Nav Dots
    renderQuestionNavGrid();

    // Load first question
    loadLiveQuestion(0);
  }

  function startInterviewWithQuestions(questionsList, sessionTitle) {
    if (!questionsList || questionsList.length === 0) {
      showToast('⚠️ No questions selected for this session.', 'warning');
      return;
    }

    const nameInput = document.getElementById('candidate-name-input');
    const roleSelect = document.getElementById('candidate-role-select');
    const candidateName = (nameInput ? nameInput.value.trim() : '') || 'Candidate 1';
    const candidateRole = roleSelect ? roleSelect.value : 'Senior .NET Backend Engineer';

    state.interview.isActive = true;
    state.interview.isPaused = false;
    state.interview.candidateName = candidateName;
    state.interview.candidateRole = candidateRole;
    state.interview.questions = questionsList;
    state.interview.currentIndex = 0;
    state.interview.evaluations = {};
    state.interview.totalSeconds = 0;

    questionsList.forEach(q => {
      state.interview.evaluations[q.id] = {
        score: 0,
        tags: [],
        notes: ''
      };
    });

    startInterviewTimer();

    const setupPanel = document.getElementById('interview-setup-panel');
    const livePanel = document.getElementById('interview-live-panel');
    if (setupPanel) setupPanel.style.display = 'none';
    if (livePanel) livePanel.style.display = 'grid';

    const nameEl = document.getElementById('live-candidate-name');
    const roleEl = document.getElementById('live-candidate-role');
    const avatarEl = document.getElementById('live-candidate-avatar');
    if (nameEl) nameEl.textContent = candidateName;
    if (roleEl) roleEl.textContent = candidateRole;
    if (avatarEl) {
      const initials = candidateName.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() || 'C';
      avatarEl.textContent = initials;
    }

    renderQuestionNavGrid();
    loadLiveQuestion(0);
    switchView('view-interview');
    playChime('start');
    showToast(`🚀 Started live interview with ${questionsList.length} question(s)!`, 'success');
  }

  function startInterviewTimer() {
    clearInterval(state.interview.timerHandle);
    state.interview.timerHandle = setInterval(() => {
      if (!state.interview.isPaused) {
        state.interview.totalSeconds++;
        updateTimerDisplay();
      }
    }, 1000);
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const mins = Math.floor(state.interview.totalSeconds / 60);
    const secs = state.interview.totalSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    const el = document.getElementById('interview-total-timer');
    if (el) el.textContent = formatted;
  }

  function initLiveCockpitControls() {
    // Drawer triggers
    document.querySelectorAll('.disclosure-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const card = trigger.closest('.disclosure-card');
        if (card) {
          card.classList.toggle('open');
          const icon = trigger.querySelector('.trigger-icon');
          if (icon) {
            icon.textContent = card.classList.contains('open') ? '▾' : '▸';
          }
        }
      });
    });

    // Pause / Resume Timer
    const pauseBtn = document.getElementById('pause-timer-btn');
    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        state.interview.isPaused = !state.interview.isPaused;
        pauseBtn.textContent = state.interview.isPaused ? '▶️' : '⏸️';
        pauseBtn.title = state.interview.isPaused ? 'Resume Timer' : 'Pause Timer';
        showToast(state.interview.isPaused ? 'Timer paused' : 'Timer resumed', 'info');
      });
    }

    // Scoring buttons (1-5)
    const scoreButtons = document.querySelectorAll('.score-btn');
    scoreButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const score = parseInt(btn.dataset.score, 10);
        const curQ = state.interview.questions[state.interview.currentIndex];
        if (curQ) {
          state.interview.evaluations[curQ.id].score = score;
          highlightActiveScore(score);
          renderQuestionNavGrid();
        }
      });
    });

    // Observation Tags
    const tagButtons = document.querySelectorAll('.quick-tag');
    tagButtons.forEach(tagBtn => {
      tagBtn.addEventListener('click', () => {
        const tag = tagBtn.dataset.tag;
        const curQ = state.interview.questions[state.interview.currentIndex];
        if (!curQ) return;

        const evalItem = state.interview.evaluations[curQ.id];
        const idx = evalItem.tags.indexOf(tag);
        if (idx > -1) {
          evalItem.tags.splice(idx, 1);
          tagBtn.classList.remove('active');
        } else {
          evalItem.tags.push(tag);
          tagBtn.classList.add('active');
        }
      });
    });

    // Live Notes input sync
    const notesInput = document.getElementById('live-interviewer-notes');
    if (notesInput) {
      notesInput.addEventListener('input', (e) => {
        const curQ = state.interview.questions[state.interview.currentIndex];
        if (curQ) {
          state.interview.evaluations[curQ.id].notes = e.target.value;
        }
      });
    }

    // Navigation buttons
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const skipBtn = document.getElementById('skip-question-btn');
    const finishBtn = document.getElementById('finish-interview-btn');
    const abortBtn = document.getElementById('abort-interview-btn');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (state.interview.currentIndex > 0) {
          loadLiveQuestion(state.interview.currentIndex - 1);
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.interview.currentIndex < state.interview.questions.length - 1) {
          loadLiveQuestion(state.interview.currentIndex + 1);
        }
      });
    }

    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        if (state.interview.currentIndex < state.interview.questions.length - 1) {
          loadLiveQuestion(state.interview.currentIndex + 1);
        } else {
          showToast('Already on the final question.', 'info');
        }
      });
    }

    if (finishBtn) {
      finishBtn.addEventListener('click', finishInterviewSession);
    }

    if (abortBtn) {
      abortBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to abandon this interview session? Any unsaved evaluation data will be lost.')) {
          clearInterval(state.interview.timerHandle);
          state.interview.isActive = false;
          document.getElementById('interview-live-panel').style.display = 'none';
          document.getElementById('interview-setup-panel').style.display = 'block';
        }
      });
    }
  }

  function loadLiveQuestion(index) {
    const total = state.interview.questions.length;
    if (index < 0 || index >= total) return;

    state.interview.currentIndex = index;
    const q = state.interview.questions[index];
    const evalData = state.interview.evaluations[q.id] || { score: 0, tags: [], notes: '' };

    // Update Progress
    const progressPct = Math.round(((index + 1) / total) * 100);
    document.getElementById('live-progress-bar').style.width = `${progressPct}%`;
    document.getElementById('live-progress-text').textContent = `Question ${index + 1} of ${total}`;

    // Update Metadata & Badges
    document.getElementById('live-q-chapter').textContent = q.chapter;
    document.getElementById('live-q-id').textContent = q.id;
    document.getElementById('live-q-category').textContent = q.category;
    document.getElementById('live-q-advanced-tag').style.display = q.isAdvanced ? 'inline-flex' : 'none';

    // Update Text Content
    document.getElementById('live-q-text').textContent = q.q;
    document.getElementById('live-q-answer').textContent = q.a;
    document.getElementById('live-q-bp').textContent = q.bp;
    document.getElementById('live-q-wu').textContent = q.wu;

    // Reset/Highlight Score buttons
    highlightActiveScore(evalData.score);

    // Update Quick Observation Tags
    document.querySelectorAll('.quick-tag').forEach(tagBtn => {
      const tag = tagBtn.dataset.tag;
      tagBtn.classList.toggle('active', evalData.tags.includes(tag));
    });

    // Update Notes field
    document.getElementById('live-interviewer-notes').value = evalData.notes || '';

    // Update Nav Buttons visibility
    const prevBtn = document.getElementById('prev-question-btn');
    const nextBtn = document.getElementById('next-question-btn');
    const finishBtn = document.getElementById('finish-interview-btn');

    prevBtn.disabled = index === 0;
    if (index === total - 1) {
      nextBtn.style.display = 'none';
      finishBtn.style.display = 'inline-flex';
    } else {
      nextBtn.style.display = 'inline-flex';
      finishBtn.style.display = 'none';
    }

    // Refresh Navigation Dot matrix
    renderQuestionNavGrid();
  }

  function highlightActiveScore(score) {
    document.querySelectorAll('.score-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.score, 10) === score);
    });
  }

  function renderQuestionNavGrid() {
    const grid = document.getElementById('question-nav-grid');
    if (!grid) return;

    grid.innerHTML = state.interview.questions.map((q, idx) => {
      const evalData = state.interview.evaluations[q.id];
      const isCurrent = idx === state.interview.currentIndex;
      const isScored = evalData && evalData.score > 0;
      let classes = 'nav-dot';
      if (isCurrent) classes += ' current';
      if (isScored) classes += ' scored';

      return `<div class="${classes}" data-index="${idx}" title="Jump to Q${idx + 1}">${idx + 1}</div>`;
    }).join('');

    grid.querySelectorAll('.nav-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        loadLiveQuestion(parseInt(dot.dataset.index, 10));
      });
    });
  }

  function finishInterviewSession() {
    clearInterval(state.interview.timerHandle);

    const questions = state.interview.questions;
    let totalScore = 0;
    let scoredCount = 0;
    const maxScore = questions.length * 5;

    // Calculate Scores & Domain metrics
    const domainScores = {};

    questions.forEach(q => {
      const ev = state.interview.evaluations[q.id];
      const score = ev.score || 0;
      if (score > 0) scoredCount++;
      totalScore += score;

      const domain = q.category || 'General';
      if (!domainScores[domain]) {
        domainScores[domain] = { scored: 0, max: 0, count: 0 };
      }
      domainScores[domain].scored += score;
      domainScores[domain].max += 5;
      domainScores[domain].count++;
    });

    const overallPct = Math.round((totalScore / maxScore) * 100);

    // Decision Logic
    let decision = 'Not Recommended';
    if (overallPct >= 85) decision = 'Strong Senior Hire 🌟';
    else if (overallPct >= 72) decision = 'Hire - Senior .NET Engineer 👍';
    else if (overallPct >= 60) decision = 'Solid Mid-Level / Lean Hire ⚖️';
    else if (overallPct >= 45) decision = 'Needs Improvement ⚠️';

    const sessionRecord = {
      id: 'session_' + Date.now(),
      date: new Date().toISOString(),
      candidateName: state.interview.candidateName,
      candidateRole: state.interview.candidateRole,
      totalSeconds: state.interview.totalSeconds,
      totalScore,
      maxScore,
      overallPct,
      decision,
      domainScores,
      questions: questions.map(q => ({
        id: q.id,
        num: q.num,
        chapter: q.chapter,
        category: q.category,
        q: q.q,
        a: q.a,
        bp: q.bp,
        score: state.interview.evaluations[q.id].score,
        tags: state.interview.evaluations[q.id].tags,
        notes: state.interview.evaluations[q.id].notes
      }))
    };

    // Save to history store
    state.history.unshift(sessionRecord);
    localStorage.setItem('dotnet_interview_history', JSON.stringify(state.history));

    // Show Report Modal
    openEvaluationReport(sessionRecord);
  }

  // ==========================================================================
  // TOP 5 QUESTIONS PER SECTION CONTROLLER (INTERVIEWER CHEAT SHEET)
  // ==========================================================================

  function initTop5View() {
    // Populate Chapter Jump Select
    const chapterSelect = document.getElementById('top5-chapter-select');
    if (chapterSelect && INTERVIEW_DATA.top5PerSection) {
      chapterSelect.innerHTML = '<option value="all">All 20 Sections (100 Questions)</option>' +
        INTERVIEW_DATA.top5PerSection.map(sec => `
          <option value="${sec.chapterId}">${sec.icon} ${sec.title}</option>
        `).join('');

      chapterSelect.addEventListener('change', (e) => {
        state.top5.chapterId = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
        renderTop5View();
      });
    }

    // Search input
    const searchInput = document.getElementById('top5-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        state.top5.searchQuery = e.target.value.trim().toLowerCase();
        renderTop5View();
      }, 200));
    }

    // Category Filter Pills scoped to #top5-category-chips
    const categoryContainer = document.getElementById('top5-category-chips');
    if (categoryContainer) {
      categoryContainer.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          categoryContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.top5.category = pill.dataset.category;
          renderTop5View();
        });
      });
    }

    // Expand / Collapse All
    const expandAllBtn = document.getElementById('top5-expand-all-btn');
    const collapseAllBtn = document.getElementById('top5-collapse-all-btn');

    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        if (INTERVIEW_DATA.top5PerSection) {
          INTERVIEW_DATA.top5PerSection.forEach(sec => {
            sec.questionIds.forEach(id => state.top5.expandedIds.add(id));
          });
        }
        renderTop5View();
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        state.top5.expandedIds.clear();
        renderTop5View();
      });
    }

    // Print Cheat Sheet Button
    const printBtn = document.getElementById('top5-print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Initial render
    renderTop5View();
  }

  function renderTop5View() {
    const container = document.getElementById('top5-sections-container');
    const countLabel = document.getElementById('top5-count-label');
    if (!container || !INTERVIEW_DATA.top5PerSection) return;

    const query = state.top5.searchQuery;
    const cat = state.top5.category;
    const chap = state.top5.chapterId;

    let totalQuestionsCount = 0;
    let matchingSectionsCount = 0;

    const sectionsHtml = INTERVIEW_DATA.top5PerSection.map(sec => {
      // Check chapter filter
      if (chap !== 'all' && sec.chapterId !== chap) {
        return '';
      }

      // Check category filter
      if (cat !== 'all' && sec.category !== cat) {
        return '';
      }

      // Resolve questions
      let questions = sec.questionIds.map(id => INTERVIEW_DATA.questions.find(q => q.id === id)).filter(Boolean);

      // Apply search query if present
      if (query) {
        const secMatches = sec.title.toLowerCase().includes(query) || sec.focus.toLowerCase().includes(query);
        if (!secMatches) {
          questions = questions.filter(q => {
            return q.id.toLowerCase().includes(query) ||
              q.q.toLowerCase().includes(query) ||
              (q.a && q.a.toLowerCase().includes(query)) ||
              (q.bp && q.bp.toLowerCase().includes(query)) ||
              (q.wu && q.wu.toLowerCase().includes(query));
          });
          if (questions.length === 0) {
            return '';
          }
        }
      }

      totalQuestionsCount += questions.length;
      matchingSectionsCount++;

      return `
        <div class="top5-section-card" id="top5-sec-${sec.chapterId}">
          <div class="top5-section-header">
            <div class="top5-section-title-wrap">
              <div class="top5-section-icon">${sec.icon}</div>
              <div>
                <h3 class="top5-section-title">${escapeHtml(sec.title)}</h3>
                <div class="top5-section-meta">
                  <span class="badge" style="background: rgba(99, 102, 241, 0.15); color: #c7d2fe;">${escapeHtml(sec.category)}</span>
                  <span class="badge badge-standard">5 Must-Ask Questions</span>
                </div>
              </div>
            </div>

            <div class="top5-section-actions">
              <button class="btn btn-primary btn-sm start-section-interview-btn" data-chapter-id="${sec.chapterId}" title="Launch live interview with these 5 questions">
                <span>🚀</span> Interview This Section
              </button>
              <button class="btn btn-outline btn-sm copy-top5-section-btn" data-chapter-id="${sec.chapterId}" title="Copy all 5 questions for interview script/notes">
                <span>📋</span> Copy 5 Qs
              </button>
            </div>
          </div>

          <div class="top5-interviewer-focus">
            <strong>🎯 What Interviewers Should Listen For:</strong> ${escapeHtml(sec.focus)}
          </div>

          <div class="top5-questions-list">
            ${questions.map((q, idx) => {
              const isExpanded = state.top5.expandedIds.has(q.id);
              const isStarred = state.explorer.starredIds.has(q.id);

              return `
                <div class="top5-q-item ${isExpanded ? 'expanded' : ''}" id="top5-card-${q.id}" data-id="${q.id}">
                  <div class="top5-q-header">
                    <div class="top5-q-rank-box">
                      <span class="top5-rank-badge">#${idx + 1}</span>
                      <span class="badge ${q.isAdvanced ? 'badge-advanced' : 'badge-standard'}">${q.id}</span>
                    </div>

                    <div class="top5-q-title-area">
                      <div class="top5-q-title toggle-top5-q" data-id="${q.id}">
                        ${escapeHtml(q.q)}
                      </div>
                    </div>

                    <div class="top5-q-actions">
                      <button class="btn-ask-live ask-top5-live-btn" data-id="${q.id}" title="Launch live interview with this question">
                        <span>🎙️</span> Ask
                      </button>
                      <button class="btn btn-outline btn-sm copy-top5-q-btn" data-id="${q.id}" title="Copy question">
                        📋
                      </button>
                      <button class="star-btn ${isStarred ? 'starred' : ''} top5-star-btn" data-id="${q.id}" title="${isStarred ? 'Remove favorite' : 'Bookmark question'}">
                        ${isStarred ? '⭐' : '☆'}
                      </button>
                      <button class="btn btn-outline btn-sm toggle-top5-q" data-id="${q.id}" title="Toggle Details">
                        ${isExpanded ? '▴' : '▾'}
                      </button>
                    </div>
                  </div>

                  <div class="top5-q-details">
                    <!-- Standard Expected Answer -->
                    <div style="background: rgba(99, 102, 241, 0.05); border-left: 3px solid var(--accent-primary); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                      <strong style="color: #a5b4fc; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">📖 Expected Senior Answer:</strong>
                      <p style="font-size: 0.92rem; line-height: 1.55; color: var(--text-primary);">${escapeHtml(q.a)}</p>
                    </div>

                    <!-- Best Practice -->
                    <div style="background: var(--success-bg); border-left: 3px solid var(--success); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                      <strong style="color: #6ee7b7; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">💡 Best Practice & Code Pattern:</strong>
                      <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-primary);">${escapeHtml(q.bp)}</p>
                    </div>

                    <!-- Anti-Pattern -->
                    <div style="background: var(--danger-bg); border-left: 3px solid var(--danger); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
                      <strong style="color: #fca5a5; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">⚠️ Red Flag / Common Junior Mistake:</strong>
                      <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-primary);">${escapeHtml(q.wu)}</p>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }).join('');

    if (matchingSectionsCount === 0) {
      container.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 3rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No matching sections found</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Try clearing your search keyword or selecting "All Topics".</p>
        </div>
      `;
    } else {
      container.innerHTML = sectionsHtml;
    }

    if (countLabel) {
      countLabel.textContent = `Showing ${matchingSectionsCount} sections (${totalQuestionsCount} questions)`;
    }

    // Toggle expand/collapse
    container.querySelectorAll('.toggle-top5-q').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (state.top5.expandedIds.has(id)) {
          state.top5.expandedIds.delete(id);
        } else {
          state.top5.expandedIds.add(id);
        }
        const card = document.getElementById(`top5-card-${id}`);
        if (card) {
          card.classList.toggle('expanded', state.top5.expandedIds.has(id));
          const btn = card.querySelector('.toggle-top5-q.btn');
          if (btn) btn.textContent = state.top5.expandedIds.has(id) ? '▴' : '▾';
        }
      });
    });

    // Start Live Interview for this whole Section
    container.querySelectorAll('.start-section-interview-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chId = parseInt(btn.dataset.chapterId, 10);
        const sec = INTERVIEW_DATA.top5PerSection.find(s => s.chapterId === chId);
        if (!sec) return;
        const questions = sec.questionIds.map(id => INTERVIEW_DATA.questions.find(q => q.id === id)).filter(Boolean);
        startInterviewWithQuestions(questions, `${sec.title} (Top 5)`);
      });
    });

    // Ask single question in live interview
    container.querySelectorAll('.ask-top5-live-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.id;
        const q = INTERVIEW_DATA.questions.find(item => item.id === qid);
        if (!q) return;
        startInterviewWithQuestions([q], `Live: ${q.id}`);
      });
    });

    // Copy single question text
    container.querySelectorAll('.copy-top5-q-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.id;
        const q = INTERVIEW_DATA.questions.find(item => item.id === qid);
        if (!q) return;
        const textToCopy = `[${q.id}] ${q.q}\n\nExpected Senior Answer:\n${q.a}\n\nBest Practice:\n${q.bp}\n\nRed Flags / Watch Out:\n${q.wu}`;
        copyToClipboard(textToCopy, `Copied question ${q.id} to clipboard!`);
      });
    });

    // Copy entire section script
    container.querySelectorAll('.copy-top5-section-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const chId = parseInt(btn.dataset.chapterId, 10);
        const sec = INTERVIEW_DATA.top5PerSection.find(s => s.chapterId === chId);
        if (!sec) return;
        const questions = sec.questionIds.map(id => INTERVIEW_DATA.questions.find(q => q.id === id)).filter(Boolean);
        let script = `=== ${sec.title} - Top 5 Interview Questions ===\n`;
        script += `Interviewer Focus: ${sec.focus}\n\n`;
        questions.forEach((q, idx) => {
          script += `${idx + 1}. [${q.id}] ${q.q}\n`;
          script += `   • Expected Answer: ${q.a}\n`;
          script += `   • Best Practice: ${q.bp}\n`;
          script += `   • Red Flag: ${q.wu}\n\n`;
        });
        copyToClipboard(script, `Copied 5 interview questions for ${sec.title}!`);
      });
    });

    // Star/Bookmark question
    container.querySelectorAll('.top5-star-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (state.explorer.starredIds.has(id)) {
          state.explorer.starredIds.delete(id);
          btn.classList.remove('starred');
          btn.textContent = '☆';
          showToast(`Removed ${id} from bookmarks`, 'info');
        } else {
          state.explorer.starredIds.add(id);
          btn.classList.add('starred');
          btn.textContent = '⭐';
          showToast(`Saved ${id} to bookmarks`, 'info');
        }
        localStorage.setItem('dotnet_starred_qs', JSON.stringify(Array.from(state.explorer.starredIds)));
      });
    });
  }

  // ==========================================================================
  // 2. QUESTION BANK EXPLORER CONTROLLER
  // ==========================================================================

  function initQuestionExplorer() {
    // Populate Chapter Filter Select
    const chapterFilter = document.getElementById('explorer-chapter-filter');
    if (chapterFilter) {
      chapterFilter.innerHTML = '<option value="all">All 20 Chapters</option>' +
        INTERVIEW_DATA.chapters.map(ch => `
          <option value="${ch.id}">${ch.name} (${ch.count} Qs)</option>
        `).join('');

      chapterFilter.addEventListener('change', (e) => {
        state.explorer.chapterId = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
        renderExplorerQuestions();
      });
    }

    // Search Input
    const searchInput = document.getElementById('explorer-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        state.explorer.searchQuery = e.target.value.trim().toLowerCase();
        renderExplorerQuestions();
      }, 200));
    }

    // Category Filter Pills
    document.querySelectorAll('#view-explorer .filter-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        document.querySelectorAll('#view-explorer .filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.explorer.category = pill.dataset.category;
        renderExplorerQuestions();
      });
    });

    // Tier Filter
    const tierFilter = document.getElementById('explorer-tier-filter');
    if (tierFilter) {
      tierFilter.addEventListener('change', (e) => {
        state.explorer.tier = e.target.value;
        renderExplorerQuestions();
      });
    }

    // Starred Only Filter Button
    const starredBtn = document.getElementById('filter-starred-only-btn');
    if (starredBtn) {
      starredBtn.addEventListener('click', () => {
        state.explorer.starredOnly = !state.explorer.starredOnly;
        starredBtn.classList.toggle('active', state.explorer.starredOnly);
        starredBtn.style.borderColor = state.explorer.starredOnly ? 'var(--warning)' : '';
        starredBtn.style.color = state.explorer.starredOnly ? 'var(--warning)' : '';
        renderExplorerQuestions();
      });
    }

    // Expand All / Collapse All
    const expandAllBtn = document.getElementById('expand-all-questions-btn');
    const collapseAllBtn = document.getElementById('collapse-all-questions-btn');

    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        const matching = getFilteredQuestions();
        matching.forEach(q => state.explorer.expandedIds.add(q.id));
        renderExplorerQuestions();
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', () => {
        state.explorer.expandedIds.clear();
        renderExplorerQuestions();
      });
    }

    // Initial render
    renderExplorerQuestions();
  }

  function getFilteredQuestions() {
    const qList = INTERVIEW_DATA.questions;
    const query = state.explorer.searchQuery;
    const cat = state.explorer.category;
    const chap = state.explorer.chapterId;
    const tier = state.explorer.tier;
    const starredOnly = state.explorer.starredOnly;

    return qList.filter(q => {
      // Category check
      if (cat !== 'all' && q.category !== cat) return false;

      // Chapter check
      if (chap !== 'all' && q.chapterId !== chap) return false;

      // Tier check
      if (tier === 'standard' && q.isAdvanced) return false;
      if (tier === 'advanced' && !q.isAdvanced) return false;

      // Starred check
      if (starredOnly && !state.explorer.starredIds.has(q.id)) return false;

      // Query check across q, a, bp, wu, and chapter
      if (query) {
        const matchesQ = q.q.toLowerCase().includes(query);
        const matchesA = q.a.toLowerCase().includes(query);
        const matchesBP = q.bp.toLowerCase().includes(query);
        const matchesWU = q.wu.toLowerCase().includes(query);
        const matchesCh = q.chapter.toLowerCase().includes(query);
        const matchesId = q.id.toLowerCase().includes(query);
        if (!matchesQ && !matchesA && !matchesBP && !matchesWU && !matchesCh && !matchesId) {
          return false;
        }
      }

      return true;
    });
  }

  function renderExplorerQuestions() {
    const container = document.getElementById('explorer-question-cards');
    const countLabel = document.getElementById('explorer-count-label');
    if (!container) return;

    const filtered = getFilteredQuestions();
    if (countLabel) {
      countLabel.textContent = `Showing ${filtered.length} of ${INTERVIEW_DATA.questions.length} questions`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 3rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No matching questions found</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Try adjusting your search terms or clearing your topic filters.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(q => {
      const isStarred = state.explorer.starredIds.has(q.id);
      const isExpanded = state.explorer.expandedIds.has(q.id);

      return `
        <div class="question-item-card ${isExpanded ? 'expanded' : ''}" id="card-${q.id}" data-id="${q.id}">
          <div class="q-header-top">
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
              <span class="badge ${q.isAdvanced ? 'badge-advanced' : 'badge-standard'}">${q.id}</span>
              <span class="badge badge-chapter">${escapeHtml(q.chapter)}</span>
              <span class="badge" style="background: rgba(255,255,255,0.04); color: var(--text-secondary);">${escapeHtml(q.category)}</span>
            </div>
            
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <button class="star-btn ${isStarred ? 'starred' : ''}" data-id="${q.id}" title="${isStarred ? 'Remove from favorites' : 'Bookmark question'}">
                ${isStarred ? '⭐' : '☆'}
              </button>
              <button class="btn btn-outline btn-sm toggle-card-btn" data-id="${q.id}">
                ${isExpanded ? 'Collapse ▴' : 'Expand ▾'}
              </button>
            </div>
          </div>

          <div class="q-title toggle-card-btn" data-id="${q.id}">${escapeHtml(q.q)}</div>

          <div class="q-details-collapsed">
            <!-- Answer -->
            <div style="background: rgba(99, 102, 241, 0.05); border-left: 3px solid var(--accent-primary); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
              <strong style="color: #a5b4fc; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">Standard Answer:</strong>
              <p style="font-size: 0.92rem; line-height: 1.55; color: var(--text-primary);">${escapeHtml(q.a)}</p>
            </div>

            <!-- Best Practice -->
            <div style="background: var(--success-bg); border-left: 3px solid var(--success); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
              <strong style="color: #6ee7b7; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">💡 Best Practice / Fast Example:</strong>
              <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-primary);">${escapeHtml(q.bp)}</p>
            </div>

            <!-- Anti-Pattern -->
            <div style="background: var(--danger-bg); border-left: 3px solid var(--danger); padding: 0.75rem 1rem; border-radius: var(--radius-sm);">
              <strong style="color: #fca5a5; font-size: 0.85rem; display: block; margin-bottom: 0.25rem;">⚠️ Wrong Usage Problem (Anti-Pattern):</strong>
              <p style="font-size: 0.9rem; line-height: 1.5; color: var(--text-primary);">${escapeHtml(q.wu)}</p>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners for expand/collapse and star
    container.querySelectorAll('.toggle-card-btn').forEach(el => {
      el.addEventListener('click', () => {
        const id = el.dataset.id;
        if (state.explorer.expandedIds.has(id)) {
          state.explorer.expandedIds.delete(id);
        } else {
          state.explorer.expandedIds.add(id);
        }
        const card = document.getElementById(`card-${id}`);
        if (card) {
          card.classList.toggle('expanded');
          const btn = card.querySelector('.toggle-card-btn.btn');
          if (btn) btn.textContent = card.classList.contains('expanded') ? 'Collapse ▴' : 'Expand ▾';
        }
      });
    });

    container.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        if (state.explorer.starredIds.has(id)) {
          state.explorer.starredIds.delete(id);
          btn.classList.remove('starred');
          btn.textContent = '☆';
          showToast(`Removed ${id} from bookmarks`, 'info');
        } else {
          state.explorer.starredIds.add(id);
          btn.classList.add('starred');
          btn.textContent = '⭐';
          showToast(`Saved ${id} to bookmarks`, 'info');
        }
        localStorage.setItem('dotnet_starred_qs', JSON.stringify(Array.from(state.explorer.starredIds)));
      });
    });
  }

  // ==========================================================================
  // 3. SOLID MASTERCLASS CONTROLLER (Document 3)
  // ==========================================================================

  function initSolidMasterclass() {
    const data = INTERVIEW_DATA.solidMasterclass;
    if (!data) return;

    // Render Quick Map Table
    const tableBody = document.querySelector('#solid-quick-map-table tbody');
    if (tableBody) {
      tableBody.innerHTML = data.quickMap.map(row => `
        <tr>
          <td><strong style="color: #a5b4fc;">${escapeHtml(row.principle)}</strong><br><small style="color: var(--text-muted);">${escapeHtml(row.name)}</small></td>
          <td>${escapeHtml(row.arabic)}</td>
          <td><code style="color: #6ee7b7; background: rgba(0,0,0,0.3); padding: 0.2rem 0.4rem; border-radius: 4px;">${escapeHtml(row.patterns)}</code></td>
          <td><span style="color: #fca5a5;">${escapeHtml(row.antiPattern)}</span></td>
        </tr>
      `).join('');
    }

    // Principle Tabs
    const tabs = document.querySelectorAll('.solid-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.solid.activePrinciple = tab.dataset.principle;
        renderSolidPrincipleDetail();
      });
    });

    // Render Initial Principle Detail
    renderSolidPrincipleDetail();

    // Render Unified Example
    const unifiedCode = document.getElementById('unified-code-block');
    if (unifiedCode) {
      unifiedCode.textContent = data.unifiedExample.code;
    }

    const unifiedBreakdown = document.getElementById('unified-breakdown-container');
    if (unifiedBreakdown) {
      unifiedBreakdown.innerHTML = data.unifiedExample.breakdown.map(item => `
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 0.85rem;">
          <strong style="color: var(--accent-primary); font-size: 0.95rem; display: block; margin-bottom: 0.3rem;">${escapeHtml(item.principle)}</strong>
          <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">${escapeHtml(item.how)}</p>
        </div>
      `).join('');
    }

    // Copy Unified Code Button
    const copyCodeBtn = document.getElementById('copy-unified-code-btn');
    if (copyCodeBtn) {
      copyCodeBtn.addEventListener('click', () => {
        copyToClipboard(data.unifiedExample.code, 'Unified C# Code copied to clipboard!');
      });
    }

    // Copy SOLID Interview Pitch
    const copyPitchBtn = document.getElementById('copy-solid-pitch-btn');
    if (copyPitchBtn) {
      copyPitchBtn.addEventListener('click', () => {
        copyToClipboard(data.intro.interviewAnswer, 'English interview pitch copied to clipboard!');
      });
    }

    // Render Self-Interview Checklist
    const checklistContainer = document.getElementById('solid-checklist-container');
    if (checklistContainer) {
      checklistContainer.innerHTML = data.selfReviewQuestions.map((qText, idx) => {
        const isChecked = !!state.solid.checklist[idx];
        return `
          <label style="display: flex; align-items: flex-start; gap: 0.6rem; padding: 0.65rem 0.85rem; background: rgba(255, 255, 255, 0.02); border-radius: var(--radius-sm); cursor: pointer;">
            <input type="checkbox" class="solid-chk" data-idx="${idx}" ${isChecked ? 'checked' : ''} style="accent-color: var(--accent-primary); margin-top: 0.25rem;">
            <span style="font-size: 0.9rem; color: ${isChecked ? 'var(--text-muted)' : 'var(--text-primary)'}; text-decoration: ${isChecked ? 'line-through' : 'none'};">${escapeHtml(qText)}</span>
          </label>
        `;
      }).join('');

      checklistContainer.querySelectorAll('.solid-chk').forEach(cb => {
        cb.addEventListener('change', (e) => {
          const idx = e.target.dataset.idx;
          state.solid.checklist[idx] = e.target.checked;
          localStorage.setItem('dotnet_solid_checklist', JSON.stringify(state.solid.checklist));
          const textSpan = e.target.nextElementSibling;
          if (textSpan) {
            textSpan.style.textDecoration = e.target.checked ? 'line-through' : 'none';
            textSpan.style.color = e.target.checked ? 'var(--text-muted)' : 'var(--text-primary)';
          }
        });
      });
    }
  }

  function renderSolidPrincipleDetail() {
    const container = document.getElementById('solid-detail-container');
    if (!container) return;

    const principleId = state.solid.activePrinciple;
    const pData = INTERVIEW_DATA.solidMasterclass.principles.find(p => p.id === principleId);
    if (!pData) return;

    container.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem;">
          <span class="badge badge-standard">${escapeHtml(pData.id)}</span>
          <h4 style="font-size: 1.25rem; font-weight: 700;">${escapeHtml(pData.title)}</h4>
        </div>
        <div style="font-size: 0.95rem; color: #a5b4fc; font-weight: 600; margin-bottom: 0.5rem;">${escapeHtml(pData.tagline)}</div>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">${escapeHtml(pData.meaning)}</p>
      </div>

      <!-- Side-by-Side Code Comparison -->
      <div class="code-compare-grid">
        <div class="code-box code-box-bad">
          <div class="code-box-header">
            <span>❌ الاستخدام الخاطئ (Anti-pattern)</span>
            <button class="btn btn-outline btn-sm copy-snippet-btn" data-text="${encodeURIComponent(pData.badCode)}">Copy</button>
          </div>
          <pre>${escapeHtml(pData.badCode)}</pre>
        </div>

        <div class="code-box code-box-good">
          <div class="code-box-header">
            <span>✅ التصميم الأفضل (Clean Architecture)</span>
            <button class="btn btn-outline btn-sm copy-snippet-btn" data-text="${encodeURIComponent(pData.goodCode)}">Copy</button>
          </div>
          <pre>${escapeHtml(pData.goodCode)}</pre>
        </div>
      </div>

      <!-- Associated Design Patterns & Consequences -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; margin-top: 1.25rem;">
        
        <div style="background: rgba(99, 102, 241, 0.05); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: var(--radius-md); padding: 1rem;">
          <h5 style="color: #a5b4fc; font-size: 0.95rem; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>🧩</span> Patterns التي تساعد في التطبيق
          </h5>
          <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem; color: var(--text-secondary);">
            ${pData.patterns.map(pat => `
              <li><strong>${escapeHtml(pat.name)}:</strong> ${escapeHtml(pat.desc)}</li>
            `).join('')}
          </ul>
        </div>

        <div style="background: var(--danger-bg); border: 1px solid var(--danger-border); border-radius: var(--radius-md); padding: 1rem;">
          <h5 style="color: #fca5a5; font-size: 0.95rem; margin-bottom: 0.6rem; display: flex; align-items: center; gap: 0.4rem;">
            <span>⚠️</span> المشاكل والأضرار عند عدم التطبيق
          </h5>
          <ul style="padding-left: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem; color: var(--text-secondary);">
            ${pData.consequences.map(con => `
              <li>${escapeHtml(con)}</li>
            `).join('')}
          </ul>
        </div>

      </div>
    `;

    // Attach copy button listeners
    container.querySelectorAll('.copy-snippet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = decodeURIComponent(btn.dataset.text);
        copyToClipboard(text, 'Code snippet copied!');
      });
    });
  }

  // ==========================================================================
  // 3.5 SENIOR .NET / BACKEND REVISION CONTROLLER (25 Chapters — 75 Q&As)
  // ==========================================================================

  const revisionState = {
    searchQuery: '',
    selectedChapter: 'all',
    selectedCategory: 'all',
    allExpanded: false,
    mastered: new Set(JSON.parse(localStorage.getItem('dotnet_revision_mastered') || '[]')),
    checklist: new Set(JSON.parse(localStorage.getItem('dotnet_revision_checklist') || '[]'))
  };

  function initRevisionView() {
    if (typeof REVISION_DATA === 'undefined') return;

    // 1. Populate Chapter Dropdown
    const chapterSelect = document.getElementById('revision-chapter-select');
    if (chapterSelect) {
      chapterSelect.innerHTML = '<option value="all">All 25 Chapters (75 Questions)</option>' +
        REVISION_DATA.chapters.map(ch => `
          <option value="${ch.id}">${ch.num}. ${escapeHtml(ch.name.replace(/^Chapter\s+\d+\s+[—-]\s+/, ''))} (${ch.qRange})</option>
        `).join('');

      chapterSelect.addEventListener('change', (e) => {
        revisionState.selectedChapter = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
        renderRevisionQuestions();
      });
    }

    // 2. Populate Category Filter Pills
    const categoryPillsContainer = document.getElementById('revision-category-pills');
    if (categoryPillsContainer) {
      const categories = ['All', ...new Set(REVISION_DATA.chapters.map(ch => ch.category))];
      categoryPillsContainer.innerHTML = categories.map(cat => `
        <button class="revision-pill ${cat === 'All' ? 'active' : ''}" data-cat="${cat}">${escapeHtml(cat)}</button>
      `).join('');

      categoryPillsContainer.querySelectorAll('.revision-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          categoryPillsContainer.querySelectorAll('.revision-pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          revisionState.selectedCategory = pill.dataset.cat === 'All' ? 'all' : pill.dataset.cat;
          renderRevisionQuestions();
        });
      });
    }

    // 3. Search input handler
    const searchInput = document.getElementById('revision-search-input');
    const clearSearchBtn = document.getElementById('revision-search-clear-btn');
    if (searchInput) {
      const handleSearch = debounce(() => {
        revisionState.searchQuery = searchInput.value.trim().toLowerCase();
        if (clearSearchBtn) {
          clearSearchBtn.style.display = revisionState.searchQuery ? 'block' : 'none';
        }
        renderRevisionQuestions();
      }, 150);

      searchInput.addEventListener('input', handleSearch);

      if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
          searchInput.value = '';
          revisionState.searchQuery = '';
          clearSearchBtn.style.display = 'none';
          renderRevisionQuestions();
        });
      }
    }

    // 4. Expand / Collapse All Toggle
    const toggleAllBtn = document.getElementById('revision-toggle-all-expand-btn');
    if (toggleAllBtn) {
      toggleAllBtn.addEventListener('click', () => {
        revisionState.allExpanded = !revisionState.allExpanded;
        const iconEl = document.getElementById('revision-toggle-all-icon');
        const textEl = document.getElementById('revision-toggle-all-text');
        if (iconEl) iconEl.textContent = revisionState.allExpanded ? '📁' : '📂';
        if (textEl) textEl.textContent = revisionState.allExpanded ? 'Collapse All' : 'Expand All';

        document.querySelectorAll('#revision-questions-container .revision-q-card').forEach(card => {
          card.classList.toggle('open', revisionState.allExpanded);
        });
      });
    }

    // 5. Jump Buttons (Formula & Checklist)
    const jumpFormulaBtn = document.getElementById('revision-jump-formula-btn');
    if (jumpFormulaBtn) {
      jumpFormulaBtn.addEventListener('click', () => {
        const anchor = document.getElementById('revision-formula-box');
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    const jumpChecklistBtn = document.getElementById('revision-jump-checklist-btn');
    if (jumpChecklistBtn) {
      jumpChecklistBtn.addEventListener('click', () => {
        const anchor = document.getElementById('revision-checklist-box');
        if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }

    // 6. Copy Markdown & Print
    const copyMdBtn = document.getElementById('revision-copy-markdown-btn');
    if (copyMdBtn) {
      copyMdBtn.addEventListener('click', () => {
        if (REVISION_DATA.rawMarkdown) {
          copyToClipboard(REVISION_DATA.rawMarkdown, 'Full 25-Chapter Revision Guide Markdown copied!');
        }
      });
    }

    const printBtn = document.getElementById('revision-print-btn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        document.querySelectorAll('#revision-questions-container .revision-q-card').forEach(card => {
          card.classList.add('open');
        });
        window.print();
      });
    }

    // 7. Reset Mastery
    const resetMasteryBtn = document.getElementById('revision-reset-mastery-btn');
    if (resetMasteryBtn) {
      resetMasteryBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all your revision mastery marks?')) {
          revisionState.mastered.clear();
          localStorage.removeItem('dotnet_revision_mastered');
          updateRevisionMasteryUI();
          renderRevisionQuestions();
          showToast('Revision mastery progress has been reset.', 'info');
        }
      });
    }

    // 8. Render Formula & Checklist Boxes
    renderRevisionFormulaBox();
    renderRevisionChecklistBox();

    // 9. Initial Render of Questions & Mastery
    updateRevisionMasteryUI();
    renderRevisionQuestions();
  }

  function updateRevisionMasteryUI() {
    const total = REVISION_DATA.questions.length;
    const masteredCount = revisionState.mastered.size;
    const pct = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

    const textEl = document.getElementById('revision-mastery-text');
    const fillEl = document.getElementById('revision-mastery-fill');
    if (textEl) textEl.textContent = `${masteredCount} of ${total} Mastered (${pct}%)`;
    if (fillEl) fillEl.style.width = `${pct}%`;
  }

  function renderRevisionFormulaBox() {
    const box = document.getElementById('revision-formula-box');
    if (!box || !REVISION_DATA.formula) return;

    const f = REVISION_DATA.formula;
    box.innerHTML = `
      <div class="revision-formula-header">
        <div>
          <span class="badge badge-advanced">Senior-Level Architecture Technique</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>⚡</span> ${escapeHtml(f.title)}
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.2rem;">${escapeHtml(f.subtitle)}</p>
        </div>
        <button class="btn btn-secondary btn-sm" id="copy-formula-script-btn">
          <span>📋</span> Copy Formula Pitch
        </button>
      </div>

      <div class="revision-formula-steps-grid">
        ${f.steps.map(s => `
          <div class="revision-step-card">
            <div class="revision-step-badge">${s.step}</div>
            <div class="revision-step-title"><span>${s.icon}</span> ${escapeHtml(s.name)}</div>
            <div class="revision-step-desc">${escapeHtml(s.desc)}</div>
          </div>
        `).join('')}
      </div>

      <div class="revision-formula-quote">
        💡 <strong>Golden Rule:</strong> "${escapeHtml(f.goldenQuote)}"
      </div>
    `;

    const copyBtn = box.querySelector('#copy-formula-script-btn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const formulaText = `The Senior-Level Answer Formula:\n1. Definition (Core concept)\n2. Why it exists (Problem it solves)\n3. When to use it (Context & triggers)\n4. Real-world example (C#/.NET production)\n5. Trade-offs (Cost vs benefit)\n6. Best practice (Recommended design)\n7. What can go wrong (Pitfalls & failures)\n\n"That structure is more valuable in a senior interview than memorizing isolated definitions."`;
        copyToClipboard(formulaText, 'Senior-Level Answer Formula copied!');
      });
    }
  }

  function renderRevisionChecklistBox() {
    const box = document.getElementById('revision-checklist-box');
    if (!box || !REVISION_DATA.checklist) return;

    box.innerHTML = `
      <div class="revision-checklist-header">
        <div>
          <span class="badge" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3);">Self-Assessment Ready</span>
          <h3 style="font-size: 1.35rem; font-weight: 800; margin-top: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>📋</span> Final Senior Interview Checklist
          </h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 0.2rem;">Before a senior interview, be able to explain these topics without memorized definitions:</p>
        </div>
        <button class="btn btn-outline btn-sm" id="reset-checklist-btn">
          Reset Checklist
        </button>
      </div>

      <div class="revision-checklist-grid">
        ${REVISION_DATA.checklist.map((group, gIdx) => `
          <div class="revision-check-cat-box">
            <div class="revision-check-cat-title">
              <span>${getCategoryIcon(group.category)}</span> ${escapeHtml(group.category)}
            </div>
            <div class="revision-check-items-list">
              ${group.items.map((item, iIdx) => {
                const itemKey = `chk-${gIdx}-${iIdx}`;
                const isChecked = revisionState.checklist.has(itemKey);
                return `
                  <label class="revision-check-item ${isChecked ? 'checked' : ''}" data-key="${itemKey}">
                    <input type="checkbox" ${isChecked ? 'checked' : ''}>
                    <span>${escapeHtml(item)}</span>
                  </label>
                `;
              }).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Checklist click listeners
    box.querySelectorAll('.revision-check-item').forEach(label => {
      const checkbox = label.querySelector('input[type="checkbox"]');
      const itemKey = label.dataset.key;
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          revisionState.checklist.add(itemKey);
          label.classList.add('checked');
        } else {
          revisionState.checklist.delete(itemKey);
          label.classList.remove('checked');
        }
        localStorage.setItem('dotnet_revision_checklist', JSON.stringify([...revisionState.checklist]));
      });
    });

    const resetBtn = box.querySelector('#reset-checklist-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Reset all checklist marks?')) {
          revisionState.checklist.clear();
          localStorage.removeItem('dotnet_revision_checklist');
          renderRevisionChecklistBox();
          showToast('Checklist marks cleared.', 'info');
        }
      });
    }
  }

  function getCategoryIcon(cat) {
    if (/arch/i.test(cat)) return '🏛️';
    if (/\.net|c#/i.test(cat)) return '⚡';
    if (/api|http/i.test(cat)) return '🌐';
    if (/distributed|messaging/i.test(cat)) return '📬';
    if (/infra|devops|cloud/i.test(cat)) return '🐳';
    if (/design|pillar/i.test(cat)) return '🏗️';
    return '📌';
  }

  function renderRevisionView() {
    renderRevisionQuestions();
  }

  function renderRevisionQuestions() {
    const container = document.getElementById('revision-questions-container');
    if (!container || typeof REVISION_DATA === 'undefined') return;

    const query = revisionState.searchQuery;
    const selectedCh = revisionState.selectedChapter;
    const selectedCat = revisionState.selectedCategory;

    // Filter questions
    const filteredQuestions = REVISION_DATA.questions.filter(q => {
      if (selectedCh !== 'all' && q.chapterId !== selectedCh) return false;

      const chapter = REVISION_DATA.chapters.find(c => c.id === q.chapterId);
      if (selectedCat !== 'all' && chapter && chapter.category !== selectedCat) return false;

      if (query) {
        const textToSearch = `${q.q} ${q.shortAnswer} ${q.detailedAnswer} ${q.bestPractice} ${q.commonMistake} ${q.chapterTitle}`.toLowerCase();
        if (!textToSearch.includes(query)) return false;
      }

      return true;
    });

    if (filteredQuestions.length === 0) {
      container.innerHTML = `
        <div class="empty-state glass-card" style="padding: 3rem; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3>No Revision Questions Found</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">No questions match your current search and filter criteria.</p>
          <button class="btn btn-secondary btn-sm" id="revision-clear-filters-btn">Clear All Filters</button>
        </div>
      `;
      const clearBtn = container.querySelector('#revision-clear-filters-btn');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          revisionState.searchQuery = '';
          revisionState.selectedChapter = 'all';
          revisionState.selectedCategory = 'all';
          const searchInput = document.getElementById('revision-search-input');
          if (searchInput) searchInput.value = '';
          const clearSearchBtn = document.getElementById('revision-search-clear-btn');
          if (clearSearchBtn) clearSearchBtn.style.display = 'none';
          const chSelect = document.getElementById('revision-chapter-select');
          if (chSelect) chSelect.value = 'all';
          const catPills = document.querySelectorAll('#revision-category-pills .revision-pill');
          catPills.forEach(p => p.classList.toggle('active', p.dataset.cat === 'All'));
          renderRevisionQuestions();
        });
      }
      return;
    }

    // Group questions by chapter
    const chaptersMap = new Map();
    filteredQuestions.forEach(q => {
      if (!chaptersMap.has(q.chapterId)) {
        chaptersMap.set(q.chapterId, []);
      }
      chaptersMap.get(q.chapterId).push(q);
    });

    let html = '';
    chaptersMap.forEach((questions, chId) => {
      const chapterInfo = REVISION_DATA.chapters.find(c => c.id === chId) || {
        name: `Chapter ${chId}`,
        subtitle: '',
        icon: '📖',
        category: 'General'
      };

      html += `
        <div class="glass-card revision-chapter-card" id="rev-ch-${chId}">
          <div class="revision-chapter-header">
            <div class="revision-chapter-title-wrap">
              <h3><span>${chapterInfo.icon}</span> ${escapeHtml(chapterInfo.name)}</h3>
              ${chapterInfo.subtitle ? `<div class="revision-chapter-subtitle">${escapeHtml(chapterInfo.subtitle)}</div>` : ''}
            </div>
            <div style="display: flex; gap: 0.5rem; align-items: center;">
              <span class="revision-chapter-badge">${escapeHtml(chapterInfo.category)}</span>
              <span class="badge" style="background: rgba(255,255,255,0.06); color: var(--text-secondary);">${questions.length} Q${questions.length > 1 ? 's' : ''}</span>
            </div>
          </div>

          <div class="revision-chapter-questions">
            ${questions.map(q => {
              const isMastered = revisionState.mastered.has(q.id);
              const isOpen = query ? true : revisionState.allExpanded;

              return `
                <div class="revision-q-card ${isOpen ? 'open' : ''} ${isMastered ? 'mastered' : ''}" id="rev-card-${q.id}" data-id="${q.id}">
                  <div class="revision-q-header">
                    <div class="revision-q-title-left">
                      <span class="revision-q-num">Q${q.num}</span>
                      <h4 class="revision-q-title">${escapeHtml(q.q)}</h4>
                    </div>
                    <div class="revision-q-actions">
                      <button class="revision-master-btn ${isMastered ? 'active' : ''}" data-id="${q.id}" title="${isMastered ? 'Mastered! Click to unmark' : 'Click to mark as mastered'}">
                        <span>${isMastered ? '✓' : '○'}</span> <span>${isMastered ? 'Mastered' : 'Master'}</span>
                      </button>
                      <button class="revision-copy-q-btn" data-id="${q.id}" title="Copy Question and Answer to Clipboard">
                        <span>📋</span>
                      </button>
                      <span class="revision-chevron">▼</span>
                    </div>
                  </div>

                  <div class="revision-q-body">
                    <!-- Short Answer Box -->
                    <div class="revision-short-ans-box">
                      <div class="revision-short-ans-header">
                        <span>⚡</span> Short Answer / Quick Pitch
                      </div>
                      <div class="revision-short-ans-text">${escapeHtml(q.shortAnswer)}</div>
                    </div>

                    <!-- Detailed Answer -->
                    <div class="revision-detail-wrap">
                      ${q.detailedAnswer}
                    </div>

                    <!-- Best Practice & Common Mistake Grid -->
                    <div class="revision-insights-grid">
                      <div class="revision-best-practice-card">
                        <div class="revision-insight-title">
                          <span>✅</span> Best Practice
                        </div>
                        <div class="revision-insight-content">${q.bestPractice}</div>
                      </div>

                      <div class="revision-mistake-card">
                        <div class="revision-insight-title">
                          <span>⚠️</span> Common Mistake / Pitfall
                        </div>
                        <div class="revision-insight-content">${q.commonMistake}</div>
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Attach question card accordion click
    container.querySelectorAll('.revision-q-header').forEach(header => {
      header.addEventListener('click', (e) => {
        if (e.target.closest('.revision-q-actions button')) return;
        const card = header.closest('.revision-q-card');
        if (card) {
          card.classList.toggle('open');
        }
      });
    });

    // Attach Mark Mastered buttons
    container.querySelectorAll('.revision-master-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const qId = btn.dataset.id;
        const card = document.getElementById(`rev-card-${qId}`);
        if (revisionState.mastered.has(qId)) {
          revisionState.mastered.delete(qId);
          btn.classList.remove('active');
          btn.innerHTML = '<span>○</span> <span>Master</span>';
          if (card) card.classList.remove('mastered');
          showToast(`Unmarked ${qId} from mastered list`, 'info');
        } else {
          revisionState.mastered.add(qId);
          btn.classList.add('active');
          btn.innerHTML = '<span>✓</span> <span>Mastered</span>';
          if (card) card.classList.add('mastered');
          showToast(`Marked ${qId} as mastered! 🎉`, 'success');
        }
        localStorage.setItem('dotnet_revision_mastered', JSON.stringify([...revisionState.mastered]));
        updateRevisionMasteryUI();
      });
    });

    // Attach Copy Question button
    container.querySelectorAll('.revision-copy-q-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const qId = btn.dataset.id;
        const q = REVISION_DATA.questions.find(item => item.id === qId);
        if (!q) return;

        const stripHtml = (htmlStr) => {
          const tmp = document.createElement('DIV');
          tmp.innerHTML = htmlStr;
          return tmp.textContent || tmp.innerText || '';
        };

        const mdText = `## ${q.num}. ${q.q}\n\n**Short Answer:**\n${q.shortAnswer}\n\n**Detailed Answer:**\n${stripHtml(q.detailedAnswer)}\n\n**Best Practice:**\n${stripHtml(q.bestPractice)}\n\n**Common Mistake:**\n${stripHtml(q.commonMistake)}\n`;
        copyToClipboard(mdText, `Copied Q${q.num} to clipboard!`);
      });
    });
  }

  // ==========================================================================
  // 4. FLASHCARDS ACTIVE RECALL CONTROLLER
  // ==========================================================================

  function initFlashcards() {
    const chapterSelect = document.getElementById('flashcard-chapter-select');
    if (chapterSelect) {
      chapterSelect.innerHTML = '<option value="all">Entire Question Bank (353 Questions)</option>' +
        INTERVIEW_DATA.chapters.map(ch => `
          <option value="${ch.id}">${ch.name} (${ch.count} Qs)</option>
        `).join('');

      chapterSelect.addEventListener('change', (e) => {
        state.flashcards.chapterId = e.target.value === 'all' ? 'all' : parseInt(e.target.value, 10);
        setupFlashcardDeck();
      });
    }

    const cardInner = document.getElementById('active-flashcard');
    if (cardInner) {
      cardInner.addEventListener('click', toggleFlashcardFlip);
    }

    const flipBtn = document.getElementById('fc-flip-btn');
    if (flipBtn) {
      flipBtn.addEventListener('click', toggleFlashcardFlip);
    }

    const prevBtn = document.getElementById('fc-prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (state.flashcards.currentIndex > 0) {
          state.flashcards.currentIndex--;
          state.flashcards.isFlipped = false;
          renderCurrentFlashcard();
        }
      });
    }

    const nextBtn = document.getElementById('fc-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (state.flashcards.currentIndex < state.flashcards.deck.length - 1) {
          state.flashcards.currentIndex++;
          state.flashcards.isFlipped = false;
          renderCurrentFlashcard();
        }
      });
    }

    // Keyboard navigation (Space to flip, arrows to navigate)
    document.addEventListener('keydown', (e) => {
      if (state.currentView !== 'view-flashcards') return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.code === 'Space') {
        e.preventDefault();
        toggleFlashcardFlip();
      } else if (e.code === 'ArrowRight') {
        if (nextBtn) nextBtn.click();
      } else if (e.code === 'ArrowLeft') {
        if (prevBtn) prevBtn.click();
      }
    });
  }

  function setupFlashcardDeck() {
    let pool = INTERVIEW_DATA.questions;
    if (state.flashcards.chapterId !== 'all') {
      pool = pool.filter(q => q.chapterId === state.flashcards.chapterId);
    }

    state.flashcards.deck = [...pool].sort(() => Math.random() - 0.5);
    state.flashcards.currentIndex = 0;
    state.flashcards.isFlipped = false;
    renderCurrentFlashcard();
  }

  function toggleFlashcardFlip() {
    state.flashcards.isFlipped = !state.flashcards.isFlipped;
    const cardInner = document.getElementById('active-flashcard');
    if (cardInner) {
      cardInner.classList.toggle('flipped', state.flashcards.isFlipped);
    }
  }

  function renderCurrentFlashcard() {
    const deck = state.flashcards.deck;
    const index = state.flashcards.currentIndex;
    const counter = document.getElementById('flashcard-counter-label');
    const cardInner = document.getElementById('active-flashcard');

    if (!deck || deck.length === 0) return;

    if (counter) {
      counter.textContent = `Card ${index + 1} of ${deck.length}`;
    }

    if (cardInner) {
      cardInner.classList.remove('flipped');
    }

    const q = deck[index];
    document.getElementById('fc-front-chapter').textContent = q.chapter;
    document.getElementById('fc-front-id').textContent = q.id;
    document.getElementById('fc-front-q').textContent = q.q;

    document.getElementById('fc-back-a').textContent = q.a;
    document.getElementById('fc-back-bp').textContent = q.bp;
    document.getElementById('fc-back-wu').textContent = q.wu;

    const prevBtn = document.getElementById('fc-prev-btn');
    const nextBtn = document.getElementById('fc-next-btn');
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.disabled = index === deck.length - 1;
  }

  // ==========================================================================
  // 5. PAST CANDIDATES HISTORY CONTROLLER
  // ==========================================================================

  function initCandidateHistory() {
    const clearBtn = document.getElementById('clear-all-history-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all candidate history? This cannot be undone.')) {
          state.history = [];
          localStorage.removeItem('dotnet_interview_history');
          renderCandidateHistory();
          showToast('Candidate history cleared', 'info');
        }
      });
    }

    const exportBtn = document.getElementById('export-history-json-btn');
    if (exportBtn) {
      exportBtn.addEventListener('click', () => {
        if (state.history.length === 0) {
          showToast('No interview records to export.', 'warning');
          return;
        }
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.history, null, 2));
        const a = document.createElement('a');
        a.href = dataStr;
        a.download = `dotnet_interviews_backup_${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
      });
    }
  }

  function renderCandidateHistory() {
    const container = document.getElementById('history-list-container');
    if (!container) return;

    if (state.history.length === 0) {
      container.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 3rem 1rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📁</div>
          <h3 style="font-size: 1.2rem; margin-bottom: 0.5rem;">No Completed Interviews Yet</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem;">Conduct an interview in "Conduct Interview" mode to evaluate candidates and save scorecards.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = state.history.map(session => {
      const dateFormatted = new Date(session.date).toLocaleDateString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      const mins = Math.floor(session.totalSeconds / 60);

      return `
        <div class="glass-card" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.3rem;">
              <h3 style="font-size: 1.15rem; font-weight: 700;">${escapeHtml(session.candidateName)}</h3>
              <span class="badge" style="background: rgba(99, 102, 241, 0.2); color: #c7d2fe;">${escapeHtml(session.decision)}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">${escapeHtml(session.candidateRole)} • ${dateFormatted} • ${mins} min duration</p>
          </div>

          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="text-align: right;">
              <span style="font-size: 1.5rem; font-weight: 800; color: #a5b4fc;">${session.overallPct}%</span>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${session.totalScore} / ${session.maxScore} pts</div>
            </div>
            <button class="btn btn-secondary btn-sm view-history-report-btn" data-id="${session.id}">View Scorecard</button>
            <button class="btn-icon delete-history-session-btn" data-id="${session.id}" title="Delete session" style="color: var(--danger);">🗑️</button>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.view-history-report-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const session = state.history.find(s => s.id === btn.dataset.id);
        if (session) openEvaluationReport(session);
      });
    });

    container.querySelectorAll('.delete-history-session-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Delete this evaluation record?')) {
          state.history = state.history.filter(s => s.id !== btn.dataset.id);
          localStorage.setItem('dotnet_interview_history', JSON.stringify(state.history));
          renderCandidateHistory();
          showToast('Record deleted', 'info');
        }
      });
    });
  }

  // ==========================================================================
  // 6. EVALUATION REPORT MODAL CONTROLLER
  // ==========================================================================

  let currentModalSession = null;

  function initReportModal() {
    const modal = document.getElementById('evaluation-modal');
    const closeBtn = document.getElementById('close-report-modal-btn');
    const saveCloseBtn = document.getElementById('save-history-and-close-btn');
    const printBtn = document.getElementById('print-report-btn');
    const copyMdBtn = document.getElementById('copy-report-markdown-btn');

    const closeModal = () => {
      if (modal) modal.style.display = 'none';
      if (state.interview.isActive) {
        state.interview.isActive = false;
        document.getElementById('interview-live-panel').style.display = 'none';
        document.getElementById('interview-setup-panel').style.display = 'block';
      }
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (saveCloseBtn) saveCloseBtn.addEventListener('click', closeModal);

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    if (copyMdBtn) {
      copyMdBtn.addEventListener('click', () => {
        if (!currentModalSession) return;
        const md = generateMarkdownReport(currentModalSession);
        copyToClipboard(md, 'Markdown report copied to clipboard!');
      });
    }
  }

  function openEvaluationReport(session) {
    currentModalSession = session;
    const modal = document.getElementById('evaluation-modal');
    if (!modal) return;

    // Populate Score Banner
    document.getElementById('report-decision').textContent = session.decision;
    document.getElementById('report-candidate-info').textContent = `Candidate: ${session.candidateName} | ${session.candidateRole}`;
    document.getElementById('report-overall-score').textContent = `${session.overallPct}%`;
    document.getElementById('report-points-count').textContent = `Score: ${session.totalScore} / ${session.maxScore} pts`;

    // Populate Domain Breakdown Bars
    const barsContainer = document.getElementById('report-domain-bars');
    if (barsContainer) {
      barsContainer.innerHTML = Object.entries(session.domainScores).map(([domain, data]) => {
        const pct = Math.round((data.scored / data.max) * 100);
        return `
          <div class="report-category-bar">
            <div class="bar-label-row">
              <span style="font-weight: 600;">${escapeHtml(domain)} (${data.count} Qs)</span>
              <span style="color: #a5b4fc; font-weight: 700;">${pct}%</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill" style="width: ${pct}%;"></div>
            </div>
          </div>
        `;
      }).join('');
    }

    // Populate Question-by-Question Breakdown
    const qBreakdownContainer = document.getElementById('report-questions-breakdown');
    if (qBreakdownContainer) {
      qBreakdownContainer.innerHTML = session.questions.map((q, idx) => {
        const scoreColor = q.score >= 4 ? 'var(--success)' : q.score === 3 ? 'var(--warning)' : 'var(--danger)';
        const tagsHtml = (q.tags && q.tags.length > 0)
          ? q.tags.map(t => `<span class="badge" style="background: rgba(255,255,255,0.05); font-size: 0.72rem; margin-right: 0.3rem;">${escapeHtml(t)}</span>`).join('')
          : '';

        return `
          <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-color); border-radius: var(--radius-sm); padding: 0.85rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.3rem;">
              <div style="font-weight: 600; font-size: 0.95rem;">${idx + 1}. [${q.id}] ${escapeHtml(q.q)}</div>
              <span class="badge" style="background: rgba(255,255,255,0.06); color: ${scoreColor}; font-weight: 800; font-size: 0.85rem;">${q.score} / 5</span>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.4rem;">${escapeHtml(q.chapter)} • ${escapeHtml(q.category)}</div>
            ${tagsHtml ? `<div style="margin-bottom: 0.4rem;">${tagsHtml}</div>` : ''}
            ${q.notes ? `<div style="background: rgba(0,0,0,0.3); border-left: 2px solid #a5b4fc; padding: 0.5rem; border-radius: 4px; font-size: 0.85rem; color: #e2e8f0;"><strong>Notes:</strong> ${escapeHtml(q.notes)}</div>` : ''}
          </div>
        `;
      }).join('');
    }

    modal.style.display = 'flex';
  }

  function generateMarkdownReport(session) {
    const mins = Math.floor(session.totalSeconds / 60);
    let md = `# Technical Interview Evaluation Report\n\n`;
    md += `- **Candidate:** ${session.candidateName}\n`;
    md += `- **Role:** ${session.candidateRole}\n`;
    md += `- **Date:** ${new Date(session.date).toLocaleDateString()}\n`;
    md += `- **Duration:** ${mins} minutes\n`;
    md += `- **Overall Score:** ${session.overallPct}% (${session.totalScore} / ${session.maxScore} points)\n`;
    md += `- **Recommendation:** ${session.decision}\n\n`;

    md += `## Architecture Domain Breakdown\n\n`;
    Object.entries(session.domainScores).forEach(([domain, data]) => {
      const pct = Math.round((data.scored / data.max) * 100);
      md += `- **${domain}:** ${pct}% (${data.scored}/${data.max} pts, ${data.count} questions)\n`;
    });

    md += `\n## Question by Question Breakdown\n\n`;
    session.questions.forEach((q, idx) => {
      md += `### ${idx + 1}. [${q.id}] ${q.q}\n`;
      md += `- **Chapter:** ${q.chapter} (${q.category})\n`;
      md += `- **Score:** ${q.score} / 5\n`;
      if (q.tags && q.tags.length > 0) {
        md += `- **Observations:** ${q.tags.join(', ')}\n`;
      }
      if (q.notes) {
        md += `- **Interviewer Notes:** ${q.notes}\n`;
      }
      md += `\n`;
    });

    md += `---\n*Generated by Senior .NET & Architecture Interview Engine*\n`;
    return md;
  }

  // --- UTILITIES ---
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function debounce(fn, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(message || 'Copied to clipboard!', 'success');
    }).catch(() => {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      showToast(message || 'Copied to clipboard!', 'success');
    });
  }

  function showToast(message, type = 'info') {
    let container = document.getElementById('toast-notification-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-notification-container';
      container.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 8px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      padding: 10px 16px;
      font-size: 0.88rem;
      color: #fff;
      box-shadow: 0 4px 14px rgba(0,0,0,0.4);
      display: flex;
      align-items: center;
      gap: 8px;
      animation: fadeIn 0.2s ease-out;
      pointer-events: auto;
    `;

    if (type === 'success') toast.style.borderColor = 'var(--success)';
    else if (type === 'warning') toast.style.borderColor = 'var(--warning)';
    else if (type === 'danger') toast.style.borderColor = 'var(--danger)';
    else toast.style.borderColor = 'var(--accent-primary)';

    toast.innerHTML = `<span>${type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️'}</span> <span>${escapeHtml(message)}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

})();
