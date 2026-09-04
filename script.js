document.addEventListener('DOMContentLoaded', () => {
  // ۱. حذف پريلودر پس از بارگذاری کامل
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => preloader.remove(), 600);
    });
    // تایم‌آوت احتیاطی
    setTimeout(() => {
      if (preloader) {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
      }
    }, 2500);
  }

  // ۲. انیمیشن ظهور هنگام اسکرول (Scroll Reveal Observer)
  const revealElements = document.querySelectorAll('.reveal, .reveal-head, .animate-up, .animate-fade');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ۳. افکت سه‌بعدی تعاملی روی کارت‌ها (Tilt Effect)
  const cards = document.querySelectorAll('.glass-card, .glass-panel, .project-card, .featured-project');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
      card.style.transition = 'transform 0.5s ease';
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });

  const projects = {
    match: {
      kicker: "01 · COMMERCIAL / MOBILE",
      title: "Match Factory-inspired 3D Puzzle",
      intro: "A commercial 3D puzzle game inspired by casual titles like Match Factory. The game features hundreds of physics-based objects dropping, stacking, and interacting in real time. The player's goal is to find and match specific items before the timer runs out.",
      boxes: [
        ["My Role", "Gameplay Programmer"],
        ["Engine", "Unity Engine"],
        ["Platform", "Mobile"],
        ["Focus", "Gameplay Systems & Minigames"]
      ],
      sections: [
        [
          "Unicorn race minigame",
          `The objective is to complete puzzle levels faster than the AI to win the race.<br><br>
          <strong>Implementation:</strong><br>
          • Implemened the logic to have different times set for our player AIs so that they would progress in 5 stages moving forward and the player has to beat them.<br>
          • Implemened a data-driven system that assigns different time thresholds to each AI player. This simulates unique opponent speeds, creating a realistic and challenging racing field. <br>
          • Developed the game logic that continuously compares the player’s actual level completion times against the AI's stage timers to dynamically update the leaderboard and determine the final winner.<br>
<div class="video-section">
            <span class="video-title">Unicorn race minigame Video</span>
            <a href="https://drive.google.com/file/d/1PHfPlZe4n8mrw_d3qfjo09WJA-97NjJq/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
              Unicorn race minigame Video<span class="arrow">↗</span>
            </a>
          </div>`
        ],
        [
          "Key Hunter's minigame",
          `A progression-based mini-game where players collect keys from the main gameplay to unscrew boards, unlock rewards, and advance through 5 stages.<br>

Players use the keys they win during core gameplay levels to unlock and remove the screws holding the mini-game board.<br><br>
<strong>Implementation:</strong><br>

• Implemened a continuous board spawning system. Once a board is fully cleared by opening all its screws, the system automatically spawns a brand-new board for the player. I have different prefabs of the logos shapes I want to be spawned on the board and I have a method that could spawn a 4×4 or whatever int×int you want and fill it randomly with those logos.<br>
• Implemened the system to save those logos and the colors until the board is over and done.<br>

• Implemened a centralized generation logic shared across all boards. It randomly distributes different logos inside the board's slots and automatically validates that the entire board is completely filled with no empty spaces.<br>

• Completing a board triggers a chest reward sequence, granting prizes to the player before transitioning them to the next board stage.<br>
<div class="video-section">
            <span class="video-title">Key Hunter's minigame Video</span>
            <a href="https://drive.google.com/file/d/1q5oOFEq6nzqDUvD3yrKy3d0W5uaIW3LI/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
              Key Hunter's minigame Video<span class="arrow">↗</span>
            </a>
          </div>`
        ],
        [
          "Vacuum Booster",
          `The Vacuum Booster selects specific objects from the board and pulls them into the collection area.<br><br>
          <strong>Implementation:</strong><br>
          • Created an item selection system using C# LINQ queries to scan available objects and select the best targets based on gameplay conditions and priorities.<br>
          • Designed a priority-based filtering system to ensure the selected items matched the intended gameplay rules.<br>
          • Managed physics behavior during the pull sequence by dynamically disabling Rigidbody gravity and colliders to prevent unwanted collisions inside the item pile.<br>
          • Developed custom movement using Vector3.Lerp and Animation Curves to smoothly move selected objects into the vacuum effect and UI collection slots without visual clipping.<br><br>
          <div class="video-section">
            <span class="video-title">Vacuum Booster Video</span>
            <a href="https://drive.google.com/file/d/15xnFxGg7pTU3W7fN_87YfCkXym9Ou1qh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
              Vacuum Booster Video <span class="arrow">↗</span>
            </a>
          </div>`
        ],
        [
    "Fan Booster",
    `The Fan Booster creates a strong wind effect that scatters items across the board.<br><br>
    <strong>Implementation:</strong><br>
    • Developed a dynamic collision filtering system to reduce unnecessary physics calculations during large-scale object movement.<br>
    • Used Unity Layer-Based Collision settings to temporarily disable item-to-item collisions while keeping collisions with level boundaries active.<br>
    • Applied physics forces and customized Physics Materials to create realistic bouncing and movement behavior.<br>
    • Restored object collisions after the effect ended to return objects back to normal physics interaction.<br><br>
    <div class="video-section">
      <span class="video-title">Fan Booster Video</span>
      <a href="https://drive.google.com/file/d/17v6geNaB1I-b4nRm8_wlcxqs2QmDj9DY/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Fan Booster Video <span class="arrow">↗</span>
      </a>
    </div>`
  ],
  [
    "Gun Booster",
    `The Gun Booster freezes gameplay time and creates a cinematic visual effect while removing selected objects from the board.<br><br>
    <strong>Implementation:</strong><br>
    • Created custom particle effects, trail effects, and UI visual elements for the booster.<br>
    • Programmed particle and trail behavior through code and synchronized effects with gameplay events.<br>
    • Developed world-space to screen-space coordinate conversion to accurately connect 3D gameplay objects with 2D UI elements.<br>
    • Implemented a full-screen vignette overlay with smooth fade-in/fade-out animations.<br>
    • Designed a coroutine-based state management system that correctly handles pause/resume situations during booster execution.<br>
    • Ensured all timers, animations, and visual states safely restore after the booster finishes.<br><br>
    <div class="video-section">
      <span class="video-title">Gun Booster Video</span>
      <a href="https://drive.google.com/file/d/1IIIn0Xm48r8MVSUdgUItiYFXwLZqB9h5/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Gun Booster Video <span class="arrow">↗</span>
      </a>
    </div>`
  ],
  [
    "Fireworks Booster",
    `The Fireworks Booster launches rockets that automatically target and clear selected objects from the board.<br><br>
    <strong>Implementation:</strong><br>
    • Developed target selection logic to identify suitable objects based on item types and gameplay priorities.<br>
    • Created a custom rocket movement system using mathematical path calculations with multiple control points.<br>
    • Designed curved projectile paths instead of simple linear movement to create more natural motion.<br>
    • Implemented sorting logic to prioritize objects placed on top of the pile, improving gameplay effectiveness.<br>
    • Created a system that balances target selection while clearing different item groups.<br><br>
    <div class="video-section">
      <span class="video-title">Fireworks Booster Video</span>
      <a href="https://drive.google.com/file/d/1oBOO8JHl2y7xzRPmXZy1Is5Y8K9A7R6o/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Fireworks Booster Video <span class="arrow">↗</span>
      </a>
    </div>`
  ],
  [
    "Sandglass Booster",
    `The Sandglass Booster adds extra time to the global countdown timer using a visual particle effect.<br><br>
    <strong>Implementation:</strong><br>
    • Developed a world-space to UI-space conversion system for particle movement from the gameplay area to the timer icon.<br>
    • Stored booster configuration data such as particle settings and movement parameters using Scriptable Objects.<br>
    • Created custom curved particle movement using coroutine-based animation.<br>
    • Implemented destination detection logic to trigger the timer update when particles reached the UI target.<br>
    • Designed the system to be easily adjustable for future balancing.<br><br>
    <div class="video-section">
      <span class="video-title">Sandglass Booster Video</span>
      <a href="https://drive.google.com/file/d/1Ha0gbrKA-rASWC_AFNPUzkf1IktXzOTc/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Sandglass Booster Video <span class="arrow">↗</span>
      </a>
    </div>`
  ],
  [
    "Chief's Tool (Fireworks, Sandglass & Keys)",
    `A progression-based reward system inspired by Match Factory mechanics.<br><br>
    <strong>Implementation:</strong><br>
    • Developed a reward system that automatically adds booster items based on player progression and winning streaks.<br>
    • Implemented Fireworks and Sandglass booster spawning directly into gameplay levels.<br>
    • Created key spawning logic and gameplay interactions.<br>
    • Developed custom curved animations using code and coroutines for key movement and reward presentation.<br><br>
    <div class="video-section">
      <span class="video-title">Chief's Tool Video</span>
      <a href="https://drive.google.com/file/d/1CMUj2sjR_xS66eDtel5P5HpQ9rUgwEXx/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Chief's Tool Video <span class="arrow">↗</span>
      </a>
    </div>`
  ],
        [
          "Tutorial Systems",
          "Developed the complete gameplay tutorial framework.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Created tutorial flows for different mechanics, message boxes, and interactive guidance.<br>" +
          "• Used events to trigger tutorials dynamically based on gameplay conditions.<br>" +
          "• Designed the system to support different tutorial states without tightly coupling it to gameplay logic."
        ]
      ]
    },
    
    bingo: {
  kicker: "02 · COMMERCIAL / CASUAL",
  title: "Bingo",
  intro: "A commercial casual Bingo game featuring real-time number drawing, dynamic number spawning, and intelligent AI players with custom winning logic. I worked on the core gameplay loop, event-driven UI and progression systems, overall visual polish and Game Analytics setup.",
  boxes: [["Role", "Gameplay Programmer"], ["Engine", "Unity Engine"], ["Platform", "Mobile"], ["Focus", "Gameplay Logic & Analytics"]],
      sections: [
        [
    "Bingo Game",
    `<strong>Implementation:</strong><br>
    • Set up Game Analytics, JSON data structures, and GA custom events<br>
    • Developed & polished Bingo gameplay logic, number generation, and card generation systems.<br>
    • Created UI systems, animations, and reward feedback flows.<br>
    • Implemented Scriptable Object-based data management.<br>
    • Developed event-driven gameplay systems and player progression architecture.<br>
    • Polished animations, visual feedback, particle effects, and gameplay presentation.<br>
    • Used AI-assisted tools for sprite sheet generation and animation workflow improvements.<br><br>
    <div class="video-section">
      <span class="video-title">Bingo Game Video</span>
      <a href="https://drive.google.com/file/d/1Ha0gbrKA-rASWC_AFNPUzkf1IktXzOTc/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Bingo Game Video <span class="arrow">↗</span>
      </a>
    </div>`
  ]
      ]
    },
    bubble: {
      kicker: "06 · GAME JAM / 3 DAYS",
      title: "Bubble Game Jam",
      intro: "A 2D arcade game developed as the solo programmer in a team with 2 game designers and an artist. Created in 3 days for a Game Jam based on the theme 'Bubble', highlighting rapid prototyping and polished gameplay logic.",
      boxes: [["Role", "Solo Game Programmer"], ["Engine", "Unity Engine"], ["Platform", "Windows"], ["Focus", "Rapid Prototyping"]],
      sections: [
        [
    "Bubble Up Game",
    `<strong>Implementation:</strong><br>
    •Developed the main player movement system where the bubble continuously floats upward and the player controls vertical movement by applying downward force.<br>
    • Implemented a responsive dash mechanic to allow quick movement and avoid incoming obstacles.<br>
    • Created a shrinking mechanic where the bubble gradually loses size over time, requiring players to collect oxygen sources to survive longer.<br>
    • Programmed environmental hazards that detect collisions and instantly pop the bubble upon impact.<br>
    • Developed a custom path-following movement system for fish obstacles, allowing enemies to move smoothly along predefined routes.<br>
    • Implemented the final boss fight featuring a large jellyfish enemy with attack behaviors and player pursuit logic.<br>
    • Managed gameplay states and enemy behavior transitions to create a challenging but consistent boss encounter.<br>
    • Integrated gameplay feedback, animations, and visual effects to improve the overall game feel.<br><br>
    <div class="video-section">
      <span class="video-title">Bubble Up Game Video</span>
      <a href="https://drive.google.com/file/d/1-6ipaoDFgjELWgqQpmMwl1h5cXdPoC_B/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Bubble Up Game Video <span class="arrow">↗</span>
      </a>
    </div>`
  ]
      ]
    },
    gnosa: {
      kicker: "03 · PERSONAL / 2.5D",
      title: "Gnosa",
      intro: "Gnosa is a 2.5D narrative adventure game inspired by Neva, developed in a two-person team where I served as the sole gameplay programmer. The project focuses on fluid character movement, atmosphere-driven mechanics, and robust gameplay architecture, working closely with a game designer from early prototyping to full feature implementation.",
      boxes: [["Role", "Solo Game Programmer"], ["Engine", "Unity Engine"], ["Platform", "Windows"], ["Focus", "Movement & Mechanics"]],
      sections: [
        [
    "Gnosa Game",
    `<strong>Implementation:</strong><br>
    •Character Controller & Movement: Developed a responsive 2.5D physics-based movement system featuring smooth ground/air controls, acceleration curves, and environmental interactions.<br>
    • Environmental Gameplay Mechanics: Programmed interactive puzzle elements, including movable physics rocks and a dynamic light-growth ability triggered by player inputs in specific zones.<br>
    • Checkpoint & Revive System: Implemented a robust state-management system to handle player respawns, game-state save points, and seamless progression flow.<br>
    • UI & Audio Framework: Built modular in-game menu systems, scene transition handlers, and integrated event-driven audio controls for sound effects and music.<br>
    • System Architecture: Designed clean, maintainable code architectures ensuring tight synchronization between player input, gameplay mechanics, and designer-facing parameters.<br>
    <div class="video-section">
      <span class="video-title">Gnosa Game Video</span>
      <a href="https://drive.google.com/drive/folders/1tH5tmkYBI9Qsgm95Z3hPW9tdGiglX-Qs?usp=sharing" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Gnosa Game Video <span class="arrow">↗</span>
      </a>
    </div>`
  ]
      ]
    },
    hospital: {
      kicker: "02 · PERSONAL / SURVIVAL HORROR",
      title: "Hospital Escape",
      intro: "A first-person and third-person survival horror project featuring dynamic camera switching, enemy AI, scripted jumpscares, and puzzle-based progression.",
      boxes: [["Role", "Solo Developer"], ["Engine", "Unity Engine"], ["Genre", "Survival Horror"], ["Focus", "Gameplay · Interaction"]],
      sections: [
        [
    "Hospital Escape Game",
    `<strong>Implementation:</strong><br>
    • Developed a complete first-person and third-person character controller with camera switching.<br>
    • Built an interaction system for environmental objects and gameplay events.<br>
    • Created task-based progression systems using event-driven architecture.<br>
    • Developed spider enemy AI with player detection and chasing behavior.<br>
    • Implemented horror mechanics including jumpscares, scripted events, atmosphere systems, and environmental interactions.<br>
    • Designed and programmed puzzle mechanics and level logic.<br>
    • Implemented save/load systems, UI systems, audio integration, lighting, and animation workflows.<br>

    <div class="video-section">
      <span class="video-title">Hospital Escape Game Video</span>
      <a href="https://drive.google.com/file/d/1GNs7lLm4XU1bF-pTDWlPfIOGtuvL1Wkq/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Hospital Escape Game Video <span class="arrow">↗</span>
      </a>
    </div>`
  ]
      ]
    }
  };

  const modal = document.getElementById("projectModal");
  const modalContent = document.getElementById("modalContent");

  function openProject(key) {
    const p = projects[key];
    if (!p) return;
    const boxes = p.boxes.map(b => `<div class="case-box"><b>${b[0]}</b><span>${b[1]}</span></div>`).join("");
    const sections = p.sections.map(s => `<h4>${s[0]}</h4><p>${s[1]}</p>`).join("");
    const videos = p.videos ? `<h4>VIDEOS</h4><div class="video-links">${p.videos.map(v => `<a href="${v[1]}" target="_blank" rel="noopener">${v[0]} <i class="ph ph-arrow-up-right"></i></a>`).join("")}</div>` : "";

    modalContent.innerHTML = `
      <div class="modal-kicker">${p.kicker}</div>
      <h2>${p.title}</h2>
      <p>${p.intro}</p>
      <div class="case-grid">${boxes}</div>
      ${sections}
      ${videos}
    `;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
  }

  document.querySelectorAll("[data-project]").forEach(btn => {
    btn.addEventListener("click", () => openProject(btn.dataset.project));
  });

  document.querySelectorAll("[data-close]").forEach(el => {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
});