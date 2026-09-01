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

  // ۴. دیتابیس و منطق پنجره مودال پروژه‌ها
  const projects = {
    match: {
      kicker: "01 · COMMERCIAL / MOBILE",
      title: "Match Factory-inspired 3D Puzzle",
      intro: "A commercial 3D puzzle game inspired by casual titles like Match Factory. The game features hundreds of physics-based objects dropping, stacking, and interacting in real time. The player's goal is to find and match specific items before the timer runs out.",
      notionLink: "https://notion.so/your-match-factory-link",
      boxes: [
        ["My Role", "Gameplay Programmer"],
        ["Engine", "Unity · C#"],
        ["Platform", "Mobile"],
        ["Focus", "Core Gameplay Mechanics"]
      ],
      sections: [
        [
          "Vacuum Booster",
          "The Vacuum Booster selects specific objects from the board and pulls them into the collection area.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Created an item selection system using C# LINQ queries to scan available objects and select the best targets based on gameplay conditions and priorities.<br>" +
          "• Designed a priority-based filtering system to ensure the selected items matched the intended gameplay rules.<br>" +
          "• Managed physics behavior during the pull sequence by dynamically disabling Rigidbody gravity and colliders to prevent unwanted collisions inside the item pile.<br>" +
          "• Developed custom movement using Vector3.Lerp and Animation Curves to smoothly move selected objects into the vacuum effect and UI collection slots without visual clipping.<br><br>" +
          "<strong>Video Link:</strong> <a href='https://drive.google.com/file/d/15xnFxGg7pTU3W7fN_87YfCkXym9Ou1qh/view?usp=drivesdk' target='_blank' rel='noopener'>Watch Mechanics Video</a>"
        ],
        [
          "Fan Booster",
          "The Fan Booster creates a strong wind effect that scatters items across the board.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Developed a dynamic collision filtering system to reduce unnecessary physics calculations during large-scale object movement.<br>" +
          "• Used Unity Layer-Based Collision settings to temporarily disable item-to-item collisions while keeping collisions with level boundaries active.<br>" +
          "• Applied physics forces and customized Physics Materials to create realistic bouncing and movement behavior.<br>" +
          "• Restored object collisions after the effect ended to return objects back to normal physics interaction.<br><br>" +
          "<strong>Video Link:</strong> <a href='https://drive.google.com/file/d/17v6geNaB1I-b4nRm8_wlcxqs2QmDj9DY/view?usp=drivesdk' target='_blank' rel='noopener'>Watch Mechanics Video</a>"
        ],
        [
          "Gun Booster",
          "The Gun Booster freezes gameplay time and creates a cinematic visual effect while removing selected objects from the board.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Created custom particle effects, trail effects, and UI visual elements for the booster.<br>" +
          "• Programmed particle and trail behavior through code and synchronized effects with gameplay events.<br>" +
          "• Developed world-space to screen-space coordinate conversion to accurately connect 3D gameplay objects with 2D UI elements.<br>" +
          "• Implemented a full-screen vignette overlay with smooth fade-in/fade-out animations.<br>" +
          "• Designed a coroutine-based state management system that correctly handles pause/resume situations during booster execution.<br>" +
          "• Ensured all timers, animations, and visual states safely restore after the booster finishes.<br><br>" +
          "<strong>Video Link:</strong> <a href='https://drive.google.com/file/d/1IIIn0Xm48r8MVSUdgUItiYFXwLZqB9h5/view?usp=drivesdk' target='_blank' rel='noopener'>Watch Mechanics Video</a>"
        ],
        [
          "Fireworks Booster",
          "The Fireworks Booster launches rockets that automatically target and clear selected objects from the board.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Developed target selection logic to identify suitable objects based on item types and gameplay priorities.<br>" +
          "• Created a custom rocket movement system using mathematical path calculations with multiple control points.<br>" +
          "• Designed curved projectile paths instead of simple linear movement to create more natural motion.<br>" +
          "• Implemented sorting logic to prioritize objects placed on top of the pile, improving gameplay effectiveness.<br>" +
          "• Created a system that balances target selection while clearing different item groups.<br><br>" +
          "<strong>Video Link:</strong> <a href='https://drive.google.com/file/d/1oBOO8JHl2y7xzRPmXZy1Is5Y8K9A7R6o/view?usp=drivesdk' target='_blank' rel='noopener'>Watch Mechanics Video</a>"
        ],
        [
          "Sandglass Booster",
          "The Sandglass Booster adds extra time to the global countdown timer using a visual particle effect.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Developed a world-space to UI-space conversion system for particle movement from the gameplay area to the timer icon.<br>" +
          "• Stored booster configuration data such as particle settings and movement parameters using Scriptable Objects.<br>" +
          "• Created custom curved particle movement using coroutine-based animation.<br>" +
          "• Implemented destination detection logic to trigger the timer update when particles reached the UI target.<br>" +
          "• Designed the system to be easily adjustable for future balancing.<br><br>" +
          "<strong>Video Link:</strong> <a href='https://drive.google.com/file/d/1Ha0gbrKA-rASWC_AFNPUzkf1IktXzOTc/view?usp=drivesdk' target='_blank' rel='noopener'>Watch Mechanics Video</a>"
        ],
        [
          "Chief's Tool (Fireworks, Sandglass & Keys)",
          "A progression-based reward system inspired by Match Factory mechanics.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Developed a reward system that automatically adds booster items based on player progression and winning streaks.<br>" +
          "• Implemented Fireworks and Sandglass booster spawning directly into gameplay levels.<br>" +
          "• Created key spawning logic and gameplay interactions.<br>" +
          "• Developed custom curved animations using code and coroutines for key movement and reward presentation.<br><br>" +
          "<strong>Video Link:</strong> <a href='https://drive.google.com/file/d/1CMUj2sjR_xS66eDtel5P5HpQ9rUgwEXx/view?usp=drivesdk' target='_blank' rel='noopener'>Watch Mechanics Video</a>"
        ],
        [
          "Tutorial Systems",
          "Developed the complete gameplay tutorial framework.<br><br>" +
          "<strong>Implementation:</strong><br>" +
          "• Created tutorial flows for different mechanics, message boxes, and interactive guidance.<br>" +
          "• Used events to trigger tutorials dynamically based on gameplay conditions.<br>" +
          "• Designed the system to support different tutorial states without tightly coupling it to gameplay logic."
        ]
      ],
      videos: [
        ["Gameplay", "https://drive.google.com/file/d/1WZLxT47AmUv8ogGLmPHa80y01wkSY3iP/view?usp=drivesdk"],
        ["Vacuum Booster", "https://drive.google.com/file/d/15xnFxGg7pTU3W7fN_87YfCkXym9Ou1qh/view?usp=drivesdk"],
        ["Fireworks", "https://drive.google.com/file/d/1oBOO8JHl2y7xzRPmXZy1Is5Y8K9A7R6o/view?usp=drivesdk"]
      ]
    },
    hospital: {
      kicker: "02 · PERSONAL / SURVIVAL HORROR",
      title: "Hospital Escape",
      intro: "A first-person survival horror project inspired by Granny, developed with a focus on reusable gameplay systems, modular item pickup, and inventory logic.",
      notionLink: "https://notion.so/your-hospital-escape-link",
      boxes: [["Role", "Solo Developer"], ["Engine", "Unity · C#"], ["Genre", "Survival Horror"], ["Focus", "Gameplay · Interaction"]],
      sections: [["Systems Architecture", "Designed modular item detection, inventory management, and world interaction logic."]]
    },
    galaxy: {
      kicker: "03 · PERSONAL / SHOOTER",
      title: "Galaxy Shooter",
      intro: "A personal shooter project focused on gameplay programming and building a complete playable combat loop.",
      notionLink: "https://notion.so/your-galaxy-link",
      boxes: [["Role", "Solo Developer"], ["Engine", "Unity · C#"], ["Genre", "Shooter"], ["Focus", "Combat · Gameplay"]],
      sections: [["Gameplay", "Implemented the core gameplay experience and supporting systems while experimenting with combat and player feedback."]]
    },
    bingo: {
      kicker: "04 · COMMERCIAL / CASUAL",
      title: "Bingo / Daborna",
      intro: "Commercial mobile game development involving software analysis, UI event systems, gameplay logic, and architectural design patterns at Caspian Game Studio.",
      notionLink: "https://notion.so/your-bingo-link",
      boxes: [["Role", "Gameplay Developer"], ["Engine", "Unity · C#"], ["Platform", "Mobile"], ["Focus", "Gameplay · Event Systems"]],
      sections: [["Architecture", "Structured the software architecture and UI event systems to maintain a clean and scalable codebase."]]
    },
    pointclick: {
      kicker: "05 · UNITY / GAMEPLAY",
      title: "Point & Click",
      intro: "An interactive Unity project focused on player interaction, gameplay flow and systems programming.",
      notionLink: "https://notion.so/your-pointclick-link",
      boxes: [["Role", "Unity Developer"], ["Engine", "Unity · C#"], ["Genre", "Point & Click"], ["Focus", "Interaction · Gameplay"]],
      sections: [["Systems", "Implemented gameplay interactions and supporting logic to create a coherent player flow."]]
    },
    bubble: {
      kicker: "06 · GAME JAM / 3 DAYS",
      title: "Bubble Game Jam",
      intro: "A three-day game jam project developed as a solo programmer, focused on rapid prototyping and delivering a complete playable experience.",
      notionLink: "https://notion.so/your-bubble-link",
      boxes: [["Role", "Solo Programmer"], ["Time", "3 Days"], ["Engine", "Unity · C#"], ["Focus", "Rapid Prototyping"]],
      sections: [["Development", "Handled gameplay programming and implementation under a short deadline, prioritizing a playable and polished core loop."]]
    },
    gnosa: {
      kicker: "07 · PERSONAL / 2.5D",
      title: "Gnosa",
      intro: "A 2.5D Unity project inspired by Neva, featuring a fluid character movement framework and animation integration.",
      notionLink: "https://notion.so/your-gnosa-link",
      boxes: [["Role", "Unity Developer"], ["Engine", "Unity · C#"], ["Style", "2.5D"], ["Focus", "Movement Controller"]],
      sections: [["Gameplay", "Implemented character movement and animation integration for a 2.5D environment."]]
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
    const notionBtn = p.notionLink
      ? `<a href="${p.notionLink}" target="_blank" rel="noopener" class="notion-btn">Read Full Case Study on Notion <i class="ph ph-arrow-up-right"></i></a>`
      : "";

    modalContent.innerHTML = `
      <div class="modal-kicker">${p.kicker}</div>
      <h2>${p.title}</h2>
      <p>${p.intro}</p>
      <div class="case-grid">${boxes}</div>
      ${sections}
      ${videos}
      ${notionBtn}
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