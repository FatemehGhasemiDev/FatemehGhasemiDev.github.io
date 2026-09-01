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
      intro: "A commercial 3D puzzle game with hundreds of physics-based objects dropping, stacking and interacting in real time. I handled custom physics item spawning, booster architecture, and heavy CPU optimization.",
      notionLink: "https://notion.so/your-match-factory-link",
      boxes: [
        ["Role","Gameplay Programmer"],
        ["Engine","Unity · C#"],
        ["Platform","Mobile"],
        ["Focus","Gameplay · Physics · Optimization"]
      ],
      sections: [
        ["Core gameplay","Developed custom item spawning logic, dynamic interaction, level progression, and gameplay state management."],
        ["Physics optimization","Optimized Rigidbody behavior, collision handling and Physics Materials. Profiled physics-heavy scenes with Unity Profiler and Frame Debugger to maintain stable performance."],
        ["Boosters & Systems","Implemented specialized mechanics including Vacuum, Fireworks, Fan, Spring, Gun, and Sandglass boosters with custom target selection, physics control, and UI integration."]
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
      boxes: [["Role","Solo Developer"],["Engine","Unity · C#"],["Genre","Survival Horror"],["Focus","Gameplay · Interaction"]],
      sections: [["Systems Architecture","Designed modular item detection, inventory management, and world interaction logic."]]
    },
    galaxy: {
      kicker: "03 · PERSONAL / SHOOTER",
      title: "Galaxy Shooter",
      intro: "A personal shooter project focused on gameplay programming and building a complete playable combat loop.",
      notionLink: "https://notion.so/your-galaxy-link",
      boxes: [["Role","Solo Developer"],["Engine","Unity · C#"],["Genre","Shooter"],["Focus","Combat · Gameplay"]],
      sections: [["Gameplay","Implemented the core gameplay experience and supporting systems while experimenting with combat and player feedback."]]
    },
    bingo: {
      kicker: "04 · COMMERCIAL / CASUAL",
      title: "Bingo / Daborna",
      intro: "Commercial mobile game development involving software analysis, UI event systems, gameplay logic, and architectural design patterns at Caspian Game Studio.",
      notionLink: "https://notion.so/your-bingo-link",
      boxes: [["Role","Gameplay Developer"],["Engine","Unity · C#"],["Platform","Mobile"],["Focus","Gameplay · Event Systems"]],
      sections: [["Architecture","Structured the software architecture and UI event systems to maintain a clean and scalable codebase."]]
    },
    pointclick: {
      kicker: "05 · UNITY / GAMEPLAY",
      title: "Point & Click",
      intro: "An interactive Unity project focused on player interaction, gameplay flow and systems programming.",
      notionLink: "https://notion.so/your-pointclick-link",
      boxes: [["Role","Unity Developer"],["Engine","Unity · C#"],["Genre","Point & Click"],["Focus","Interaction · Gameplay"]],
      sections: [["Systems","Implemented gameplay interactions and supporting logic to create a coherent player flow."]]
    },
    bubble: {
      kicker: "06 · GAME JAM / 3 DAYS",
      title: "Bubble Game Jam",
      intro: "A three-day game jam project developed as a solo programmer, focused on rapid prototyping and delivering a complete playable experience.",
      notionLink: "https://notion.so/your-bubble-link",
      boxes: [["Role","Solo Programmer"],["Time","3 Days"],["Engine","Unity · C#"],["Focus","Rapid Prototyping"]],
      sections: [["Development","Handled gameplay programming and implementation under a short deadline, prioritizing a playable and polished core loop."]]
    },
    gnosa: {
      kicker: "07 · PERSONAL / 2.5D",
      title: "Gnosa",
      intro: "A 2.5D Unity project inspired by Neva, featuring a fluid character movement framework and animation integration.",
      notionLink: "https://notion.so/your-gnosa-link",
      boxes: [["Role","Unity Developer"],["Engine","Unity · C#"],["Style","2.5D"],["Focus","Movement Controller"]],
      sections: [["Gameplay","Implemented character movement and animation integration for a 2.5D environment."]]
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