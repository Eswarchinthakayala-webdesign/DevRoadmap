// roadmap.js

const roadmapGrid = document.getElementById("roadmap-grid");

function getCustomRoadmaps() {
  return JSON.parse(localStorage.getItem("customRoadmaps") || "[]");
}

function renderRoadmaps() {
  const allRoadmaps = [
    ...(window.predefinedRoadmaps || []),
    ...getCustomRoadmaps()
  ];

  roadmapGrid.innerHTML = "";

  allRoadmaps.forEach(roadmap => {
    const card = document.createElement("div");
    card.className = "bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow rounded-xl p-5 border dark:border-gray-700 hover:shadow-lg transition";

    card.innerHTML = `
      <h3 class="text-lg font-semibold mb-1">${roadmap.title}</h3>
      <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">${roadmap.description}</p>
      <a href="roadmap-view.html?id=${roadmap.id}" class="text-blue-600 dark:text-blue-400 text-sm font-medium underline">View Roadmap →</a>
    `;

    roadmapGrid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", renderRoadmaps);
