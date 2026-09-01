const projects = {
  match: {
    kicker: "01 · COMMERCIAL / MOBILE",
    title: "Match Factory-inspired 3D Puzzle",
    intro: "A commercial 3D puzzle game with hundreds of physics-based objects dropping, stacking and interacting in real time. I worked on the core gameplay loop, physics-heavy interactions, boosters, tutorials, progression and performance optimization.",
    boxes: [
      ["Role","Gameplay Programmer"],
      ["Engine","Unity · C#"],
      ["Platform","Mobile"],
      ["Focus","Gameplay · Physics · Optimization"]
    ],
    sections: [
      ["Core gameplay","Developed item spawning, interaction, matching logic, level progression and gameplay state management."],
      ["Physics optimization","Optimized Rigidbody behavior, collision handling and Physics Materials. Profiled physics-heavy scenes with Unity Profiler and Frame Debugger to maintain stable performance with hundreds of active objects."],
      ["Reusable systems","Created modular gameplay systems and data-driven configurations using Scriptable Objects, events and clean C# architecture."],
      ["Boosters","Implemented Vacuum, Fan, Gun, Fireworks and Sandglass boosters with custom target selection, physics control, particle effects, curved movement and UI integration."],
      ["Tutorials","Built the gameplay tutorial flow with event-driven triggers and multiple tutorial states without tightly coupling the tutorial logic to gameplay systems."]
    ],
    videos: [
      ["Gameplay", "https://drive.google.com/file/d/1WZLxT47AmUv8ogGLmPHa80y01wkSY3iP/view?usp=drivesdk"],
      ["Vacuum Booster", "https://drive.google.com/file/d/15xnFxGg7pTU3W7fN_87YfCkXym9Ou1qh/view?usp=drivesdk"],
      ["Fan Booster", "https://drive.google.com/file/d/17v6geNaB1I-b4nRm8_wlcxqs2QmDj9DY/view?usp=drivesdk"],
      ["Gun Booster", "https://drive.google.com/file/d/1IIIn0Xm48r8MVSUdgUItiYFXwLZqB9h5/view?usp=drivesdk"],
      ["Fireworks", "https://drive.google.com/file/d/1oBOO8JHl2y7xzRPmXZy1Is5Y8K9A7R6o/view?usp=drivesdk"],
      ["Sandglass", "https://drive.google.com/file/d/1Ha0gbrKA-rASWC_AFNPUzkf1IktXzOTc/view?usp=drivesdk"],
      ["Rewards", "https://drive.google.com/file/d/1CMUj2sjR_xS66eDtel5P5HpQ9rUgwEXx/view?usp=drivesdk"]
    ]
  },
  hospital: {
    kicker: "02 · PERSONAL / SURVIVAL HORROR",
    title: "Hospital Escape",
    intro: "A first-person survival horror project developed with a focus on reusable gameplay systems, player interaction and maintainable architecture.",
    boxes: [["Role","Solo Developer"],["Engine","Unity · C#"],["Genre","Survival Horror"],["Focus","Gameplay · Interaction"]],
    sections: [["Gameplay programming","Core gameplay and interaction systems designed with reusable components and modular code."],["Development","Personal project used to explore gameplay architecture, player interaction and technical problem solving."]]
  },
  galaxy: {
    kicker: "03 · PERSONAL / SHOOTER",
    title: "Galaxy Shooter",
    intro: "A personal shooter project focused on gameplay programming and building a complete playable combat loop.",
    boxes: [["Role","Solo Developer"],["Engine","Unity · C#"],["Genre","Shooter"],["Focus","Combat · Gameplay"]],
    sections: [["Gameplay","Implemented the core gameplay experience and supporting systems while experimenting with combat and player feedback."]]
  },
  bingo: {
    kicker: "04 · COMMERCIAL / CASUAL",
    title: "Bingo",
    intro: "Casual mobile game development involving gameplay logic, UI systems, tutorials, analytics and gameplay polish.",
    boxes: [["Role","Gameplay Developer"],["Engine","Unity · C#"],["Platform","Mobile"],["Focus","Gameplay · UI · Analytics"]],
    sections: [["Gameplay","Implemented and polished gameplay features, tutorials, UI behavior and supporting systems."],["Analytics","Worked with gameplay events and data to support game analytics and win-rate tracking."]]
  },
  pointclick: {
    kicker: "05 · UNITY / GAMEPLAY",
    title: "Point & Click",
    intro: "An interactive Unity project focused on player interaction, gameplay flow and systems programming.",
    boxes: [["Role","Unity Developer"],["Engine","Unity · C#"],["Genre","Point & Click"],["Focus","Interaction · Gameplay"]],
    sections: [["Systems","Implemented gameplay interactions and supporting logic to create a coherent player flow."]]
  },
  bubble: {
    kicker: "06 · GAME JAM / 3 DAYS",
    title: "Bubble Game Jam",
    intro: "A three-day game jam project developed as a solo programmer, focused on rapid prototyping and delivering a complete playable experience.",
    boxes: [["Role","Solo Programmer"],["Time","3 Days"],["Engine","Unity · C#"],["Focus","Rapid Prototyping"]],
    sections: [["Development","Handled gameplay programming and implementation under a short deadline, prioritizing a playable and polished core loop."]]
  },
  gnosa: {
    kicker: "07 · PERSONAL / 2.5D",
    title: "Gnosa",
    intro: "A 2.5D Unity project exploring character movement, interactions and gameplay programming.",
    boxes: [["Role","Unity Developer"],["Engine","Unity · C#"],["Style","2.5D"],["Focus","Movement · Interaction"]],
    sections: [["Gameplay","Worked on gameplay systems and movement with a focus on responsive controls and reusable components."]]
  }
};

const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");

function openProject(key){
  const p = projects[key];
  if(!p) return;
  const boxes = p.boxes.map(b => `<div class="case-box"><b>${b[0]}</b><span>${b[1]}</span></div>`).join("");
  const sections = p.sections.map(s => `<h4>${s[0]}</h4><p>${s[1]}</p>`).join("");
  const videos = p.videos ? `<h4>VIDEOS</h4><div class="video-links">${p.videos.map(v => `<a href="${v[1]}" target="_blank" rel="noopener">${v[0]} ↗</a>`).join("")}</div>` : "";
  modalContent.innerHTML = `
    <div class="modal-kicker">${p.kicker}</div>
    <h2>${p.title}</h2>
    <p>${p.intro}</p>
    <div class="case-grid">${boxes}</div>
    ${sections}
    ${videos}
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden","false");
}

document.querySelectorAll("[data-project]").forEach(btn => {
  btn.addEventListener("click", () => openProject(btn.dataset.project));
});
document.querySelectorAll("[data-close]").forEach(el => {
  el.addEventListener("click", closeModal);
});
document.addEventListener("keydown", e => {
  if(e.key === "Escape") closeModal();
});
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden","true");
}
