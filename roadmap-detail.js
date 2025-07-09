// roadmap-detail.js

const urlParams = new URLSearchParams(window.location.search);
const selectedRoadmapId = urlParams.get("id") || "system-design";

// Get predefined roadmaps if available from roadmap.js
let roadmap = predefinedRoadmaps.find(r => r.id === selectedRoadmapId);

// If not found in predefined, try to fetch from custom roadmaps in localStorage
if (!roadmap) {
  const saved = JSON.parse(localStorage.getItem("customRoadmaps") || "[]");
  const custom = saved.find(r => r.id === selectedRoadmapId);
  if (custom) roadmap = custom;
}

const titleEl = document.getElementById("roadmap-title");
const descEl = document.getElementById("roadmap-desc");
const stepsEl = document.getElementById("roadmap-steps");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

if (roadmap) {
  titleEl.textContent = roadmap.title;
  descEl.textContent = roadmap.description;

  roadmap.steps.forEach((step, index) => {
    const stepDiv = document.createElement("div");
    stepDiv.className = "flex items-center gap-3 bg-white p-4 rounded shadow";

    const checked = step.completed ? "checked" : "";

    stepDiv.innerHTML = `
      <input type="checkbox" data-index="${index}" class="step-checkbox h-5 w-5" ${checked}>
      <span class="text-lg">${step.title}</span>
    `;

    stepsEl.appendChild(stepDiv);
  });

  updateProgress();

  document.querySelectorAll(".step-checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      roadmap.steps[idx].completed = e.target.checked;
      updateProgress();
      saveProgress();
    });
  });
} else {
  titleEl.textContent = "Roadmap Not Found";
  descEl.textContent = "The requested roadmap doesn't exist.";
}

function updateProgress() {
  const total = roadmap.steps.length;
  const completed = roadmap.steps.filter(s => s.completed).length;
  const percent = Math.round((completed / total) * 100);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `${completed} of ${total} completed (${percent}%)`;
}

function saveProgress() {
  if (roadmap.id.startsWith("custom-")) {
    const saved = JSON.parse(localStorage.getItem("customRoadmaps") || "[]");
    const index = saved.findIndex(r => r.id === roadmap.id);
    if (index !== -1) {
      saved[index] = roadmap;
      localStorage.setItem("customRoadmaps", JSON.stringify(saved));
    }
  }
}
