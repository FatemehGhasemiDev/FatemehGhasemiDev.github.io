document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');

  if (preloader) {
    const hidePreloader = () => {
      if (!preloader.parentElement) return;
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => preloader.remove(), 600);
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader, { once: true });
    }

    setTimeout(hidePreloader, 2500);
  }

  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBadge = document.getElementById('copyBadge');

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.dataset.email || 'farimahghasemi.workk@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        copyEmailBtn.classList.add('copied');
        if (copyBadge) copyBadge.textContent = 'Copied! ✓';

        setTimeout(() => {
          copyEmailBtn.classList.remove('copied');
          if (copyBadge) copyBadge.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    });
  }

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
      intro: "A commercial 3D puzzle game inspired by casual titles like Match Factory. The game features hundreds of physics-based objects dropping, stacking, and interacting in real time.",
      boxes: [
        ["My Role", "Gameplay Programmer"],
        ["Engine", "Unity Engine"],
        ["Platform", "Mobile"],
        ["Focus", "Gameplay Systems & Minigames"]
      ],
      sections: [
       [
"Gameplay System",
`<br><br>
<strong>Implementation:</strong><br>
• Built the main gameplay flow, from spawning and matching items to level progression and game-state handling.<br>
• Worked with hundreds of Rigidbody-based objects that could fall, stack, and interact with each other during gameplay.<br>
• Tuned Rigidbody settings and Physics Materials to reduce clipping, unwanted movement, and physics jitter.<br>
• Profiled physics-heavy levels and adjusted the setup to keep gameplay responsive on mobile devices.<br>
• Wrote the gameplay logic in C# and kept the systems modular so they could be reused across different levels and mechanics.<br>

<div class="video-section"> <span class="video-title">Gameplay System Video</span> 
<a href="https://drive.google.com/file/d/1WZLxT47AmUv8ogGLmPHa80y01wkSY3iP/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn"> Gameplay System Video<span class="arrow">↗</span> 
</a> 
</div>` 
],
        [
          "Unicorn race minigame",
          `The objective is to complete puzzle levels faster than AI opponents to win the race.<br><br>
    <strong>Implementation:</strong><br>
    • Implemented a 5-stage AI progression system with configurable completion times for each opponent.<br>
    • Developed a data-driven system to assign unique time thresholds to each AI, simulating different opponent speeds and difficulty levels.<br>
    • Implemented AI stage progression logic based on predefined time values throughout the race.<br>
    • Developed real-time comparison logic between the player's actual level completion time and each AI's progress time.<br>
    • Implemented dynamic leaderboard updates based on the player's and AI opponents' current progress.<br>
    • Developed the winner determination logic based on the final race positions.<br>
    <div class="video-section">
      <span class="video-title">Unicorn race minigame Video</span>
      <a href="https://drive.google.com/file/d/1PHfPlZe4n8mrw_d3qfjo09WJA-97NjJq/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
        Unicorn race minigame Video<span class="arrow">↗</span>
      </a>
    </div>`
        ],
        [
          "Key Hunter's minigame",
          `A progression-based mini-game where players collect keys from the main gameplay to unlock rewards and advance through multiple stages.<br><br>
  <strong>Implementation:</strong><br>
  • Implemented a continuous board spawning system that automatically generates a new board once the current board is fully cleared.<br>
  • Developed a dynamic board generation method supporting customizable grid sizes (e.g., 4×4 or any int×int configuration).<br>
  • Created and integrated randomized logo prefab spawning to populate board slots dynamically.<br>
  • Implemented logic to randomly distribute logos across the board while ensuring all slots are completely filled with no empty spaces.<br>
  • Developed data preservation logic to store generated logos and their assigned colors throughout the board's lifecycle until completion.<br>
  • Implemented centralized board generation logic shared across all stages to maintain consistent and reusable behavior.<br>
  • Integrated the key-based progression system, allowing players to use keys collected from the main gameplay to remove screws and clear the board.<br>
  • Implemented the chest reward sequence triggered upon board completion, granting rewards before progressing to the next stage.<br><br>
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
  • Developed an object selection system using C# LINQ to filter available items based on gameplay conditions.<br>
  • Implemented priority-based filtering to select the correct objects from the board.<br>
  • Managed Rigidbody physics during the pull by temporarily disabling gravity and colliders to prevent unwanted collisions between objects.<br>
  • Developed the movement logic using Vector3.Lerp and Animation Curves to control the speed and movement of objects toward the collection area.<br>
  • Implemented positioning logic for moving the objects into the UI collection slots while keeping the movement smooth and preventing visual clipping.<br>
  <div class="video-section">
    <span class="video-title">Vacuum Booster Video</span>
    <a href="https://drive.google.com/file/d/15xnFxGg7pTU3W7fN_87YfCkXym9Ou1qh/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
      Vacuum Booster Video <span class="arrow">↗</span>
    </a>
  </div>`
        ],
       [
  "Spring Booster",
  `The Spring Booster launches selected objects into the air and scatters them across the board.<br><br>
  <strong>Implementation:</strong><br>
  • Implemented the Spring Booster logic to apply a strong upward force to selected objects.<br>
  • Developed the logic for managing and updating items placed on the tiles during the booster effect.<br>
  • Developed the object selection and launch logic to control which items are affected by the booster.<br>
  • Managed Rigidbody physics and applied custom forces to create the desired spring and bouncing effect.<br>
  • Implemented collision handling to control object interactions while the items are being launched.<br>
  • Restored the objects' normal physics behavior after the booster effect was completed.<br>
  <div class="video-section">
    <span class="video-title">Spring Booster Video</span>
    <a href="https://drive.google.com/file/d/17v6geNaB1I-b4nRm8_wlcxqs2QmDj9DY/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
      Spring Booster Video <span class="arrow">↗</span>
    </a>
  </div>`
],
        [
          "Fan Booster",
          `The Fan Booster creates a strong wind effect that scatters items across the board.<br><br>
  <strong>Implementation:</strong><br>
  • Developed a collision filtering system to reduce unnecessary physics calculations while moving multiple objects at the same time.<br>
  • Used Unity Layer-Based Collision settings to disable item-to-item collisions during the fan effect while keeping collisions with level boundaries active.<br>
  • Implemented physics forces and customized Physics Materials to create the desired bouncing and movement behavior.<br>
  • Restored the objects' normal collision settings after the effect ended to maintain their regular physics interactions.<br>
  <div class="video-section">
    <span class="video-title">Fan Booster Video</span>
    <a href="https://drive.google.com/file/d/1gt_1LU2FDf6Mydu_9ahx3b4AmV6KlGsZ/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
      Fan Booster Video <span class="arrow">↗</span>
    </a>
  </div>`
        ],
        [
          "Gun Booster",
          `The Gun Booster freezes gameplay time and creates a cinematic visual effect while removing selected objects from the board.<br><br>
  <strong>Implementation:</strong><br>
  • Created custom particle effects, trail effects, and UI elements for the booster.<br>
  • Implemented particle and trail behavior through code and synchronized the effects with gameplay events.<br>
  • Developed world-space to screen-space coordinate conversion to connect 3D gameplay objects with 2D UI elements accurately.<br>
  • Implemented a full-screen vignette effect with smooth fade-in and fade-out animations.<br>
  • Developed coroutine-based state handling for the booster, including pause and resume situations during its execution.<br>
  • Ensured timers, animations, and visual states were properly restored after the booster finished.<br>
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
  • Developed target selection logic to find suitable objects based on item types and gameplay priorities.<br>
  • Created a custom rocket movement system using mathematical path calculations with multiple control points.<br>
  • Implemented curved projectile paths instead of simple linear movement to create more natural rocket motion.<br>
  • Developed sorting logic to prioritize objects placed on top of the pile for more effective targeting.<br>
  • Implemented target balancing logic to distribute the rockets across different item groups.<br>
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
  • Developed a world-space to UI-space conversion system for moving particles from the gameplay area toward the timer icon.<br>
  • Stored booster configuration data, including particle settings and movement parameters, using Scriptable Objects.<br>
  • Created custom curved particle movement using coroutines to control the animation.<br>
  • Implemented destination detection to trigger the timer update when the particles reached the UI target.<br>
  • Designed the system with adjustable parameters to make future gameplay balancing easier.<br>
  <div class="video-section">
    <span class="video-title">Sandglass Booster Video</span>
    <a href="https://drive.google.com/file/d/1Ha0gbrKA-rASWC_AFNPUzkf1IktXzOTc/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
      Sandglass Booster Video <span class="arrow">↗</span>
    </a>
  </div>`
        ],
        [
          "Chief's Tool - Fireworks, Sandglass & Keys",
          `A progression-based reward system inspired by Match Factory mechanics, where players receive boosters and keys as they progress through the game.<br><br>
  <strong>Implementation:</strong><br>
  • Developed a reward system that adds booster items based on player progression and winning streaks.<br>
  • Implemented Fireworks and Sandglass booster spawning directly into gameplay levels.<br>
  • Created key spawning logic and interactions within the gameplay.<br>
  • Developed custom curved animations using code and coroutines for key movement and reward presentation.<br>
  <div class="video-section">
    <span class="video-title">Chief's Tool Video</span>
    <a href="https://drive.google.com/file/d/1CMUj2sjR_xS66eDtel5P5HpQ9rUgwEXx/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
      Chief's Tool Video <span class="arrow">↗</span>
    </a>
  </div>`
        ],
        [
          "Tutorial System",
          `A gameplay tutorial system that guides players through different mechanics and interactions.<br><br>
  <strong>Implementation:</strong><br>
  • Developed the gameplay tutorial system for different mechanics and game interactions.<br>
  • Created tutorial flows with message boxes, hand pointers, and interactive guidance.<br>
  • Implemented event-based triggers to start tutorials based on specific gameplay conditions.<br>
  • Developed tutorial state handling to support different steps and states without tightly coupling the tutorial logic to the core gameplay systems.<br>
  • Implemented reusable tutorial logic that could be adapted for different gameplay mechanics and levels.`
        ]
      ]
    },
    bingo: {
  kicker: "02 · COMMERCIAL / CASUAL",
  title: "Bingo",
  intro: "A commercial casual Bingo game featuring real-time number drawing and intelligent AI players.",
  boxes: [["Role", "Gameplay Programmer"], ["Engine", "Unity Engine"], ["Platform", "Mobile"], ["Focus", "Gameplay Logic & Analytics"]],
  sections: [
    [
      "Bingo Game",
      `<strong>Implementation:</strong><br>
      • Developed and polished Bingo gameplay logic, including number generation and card generation systems.<br>
      • Created UI systems, animations, reward systems, and progression mechanics.<br>
      • Implemented Scriptable Object-based data management for gameplay and level data.<br>
      • Built event-driven gameplay systems and player progression logic.<br>
      • Set up Game Analytics and implemented custom GA events for tracking gameplay data.<br>
      • Polished animations, visual feedback, particle effects, and overall gameplay presentation.<br>
      • Used AI-assisted tools to generate sprite sheets and improve the animation workflow.<br>
      <div class="video-section">
        <span class="video-title">Bingo Game Video</span>
        <a href="https://drive.google.com/file/d/1DJ5VDEvQouzL4FQ3xstiOWz1iimp2rNP/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="video-pill-btn">
          Bingo Game Video <span class="arrow">↗</span>
        </a>
      </div>`
    ]
  ]
},
   bubble: {
  kicker: "06 · GAME JAM / 3 DAYS",
  title: "Bubble Game Jam",
  intro: "A fast-paced 2D arcade game developed during a 3-day Game Jam based on the theme \"Bubble\".",
  boxes: [["Role", "Solo Game Programmer"], ["Engine", "Unity Engine"], ["Platform", "Windows"], ["Focus", "Rapid Prototyping & Gameplay"]],
  sections: [
    [
      "Bubble Up Game",
      `<strong>Implementation:</strong><br>
      • Developed the main physics-based player movement, where the bubble continuously floats upward and the player controls its vertical movement by applying downward force.<br>
      • Implemented a responsive dash mechanic for quick movement and avoiding incoming obstacles.<br>
      • Developed the bubble shrinking and oxygen system, requiring players to collect oxygen sources to survive longer.<br>
      • Implemented environmental hazards that detect collisions and pop the bubble on impact.<br>
      • Developed a custom path-following system for fish obstacles to move smoothly along predefined routes.<br>
      • Implemented the final boss fight with a jellyfish enemy, including player detection, pursuit, and attack behavior.<br>
      • Managed gameplay states and enemy behavior transitions during the boss fight.<br>
      • Integrated animations, visual effects, and gameplay feedback to improve the overall game feel.<br>
      • Worked closely with game designers and a 2D artist to rapidly prototype and polish features within the 3-day deadline.<br>
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
  intro: "A 2.5D narrative adventure inspired by Neva.",
  boxes: [["Role", "Solo Game Programmer"], ["Engine", "Unity Engine"], ["Platform", "Windows"], ["Focus", "Movement & Mechanics"]],
  sections: [
    [
      "Gnosa Game",
      `<strong>Implementation:</strong><br>
      • Served as the sole gameplay programmer in a two-person team, working closely with the game designer from prototyping to implementation.<br>
      • Developed physics-based 2.5D character movement with responsive controls and environmental interactions.<br>
      • Designed and implemented a checkpoint and revive system to manage player progression and game states.<br>
      • Created the in-game menu system, including navigation, audio management, and scene transitions.<br>
      • Implemented environmental gameplay mechanics, including movable rocks and a light-growth ability activated through trigger zones and player input.<br>
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
      intro: "A first/third-person survival horror project inspired by Granny.",
      boxes: [["Role", "Solo Developer"], ["Engine", "Unity Engine"], ["Genre", "Survival Horror"], ["Focus", "Gameplay · Interaction"]],
      sections: [
        [
          "Hospital Escape Game",
          `<strong>Implementation:</strong><br>
    • Developed a complete first-person and third-person character controller with camera switching.<br>
    • Built a modular interaction system for environmental objects and gameplay events.<br>
    • Created task-based progression systems using an event-driven architecture.<br>
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

    modalContent.innerHTML = `
      <div class="modal-kicker">${p.kicker}</div>
      <h2>${p.title}</h2>
      <p>${p.intro}</p>
      <div class="case-grid">${boxes}</div>
      ${sections}
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

// اسکریپت کپی کردن ایمیل در بخش About
const aboutEmailBtn = document.getElementById('aboutEmailBtn');
const aboutEmailText = document.getElementById('aboutEmailText');

if (aboutEmailBtn) {
  aboutEmailBtn.addEventListener('click', async () => {
    const email = aboutEmailBtn.dataset.email;
    try {
      // کپی در کلیپ‌بورد
      await navigator.clipboard.writeText(email);
      
      // تغییر استایل به رنگ سبز و تغییر متن برای فیدبک بصری
      aboutEmailText.textContent = 'Copied! ✓';
      aboutEmailBtn.style.color = '#10b981';
      aboutEmailBtn.style.borderColor = '#10b981';
      aboutEmailBtn.style.background = 'rgba(16, 185, 129, 0.1)';

      // بازگرداندن به حالت اول بعد از 2 ثانیه
      setTimeout(() => {
        aboutEmailText.textContent = email;
        aboutEmailBtn.style.color = '';
        aboutEmailBtn.style.borderColor = '';
        aboutEmailBtn.style.background = '';
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });
}

