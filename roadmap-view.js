function getRoadmapById(id) {
  const custom = JSON.parse(localStorage.getItem("customRoadmaps") || "[]");
  const predefined = window.predefinedRoadmaps || [];
  return [...predefined, ...custom].find(r => r.id === id);
}

function getProgress(id) {
  return JSON.parse(localStorage.getItem(`progress_${id}`) || "{}");
}

function saveProgress(id, progress) {
  localStorage.setItem(`progress_${id}`, JSON.stringify(progress));
}

function updateProgressBar(steps, progress) {
  const bar = document.getElementById("progress-bar");
  const text = document.getElementById("progress-text");

  const total = steps.length;
  const completed = steps.filter((_, i) => progress[i]).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  bar.style.width = `${percent}%`;
  text.textContent = `${percent}% complete`;
}

function renderSteps(roadmap) {
  const container = document.getElementById("steps-container");
  const progress = getProgress(roadmap.id);
  container.innerHTML = "";

  roadmap.steps.forEach((step, index) => {
    const isChecked = progress[index] || false;
    const markdownHTML = marked.parse(step.note || "");

    const stepCard = document.createElement("div");
    stepCard.className = `
      border rounded-lg p-4 transition-all mb-6
      ${isChecked
        ? "bg-green-100 border-green-400 dark:bg-green-900 dark:border-green-600"
        : "bg-red-100 border-red-400 dark:bg-red-800 dark:border-red-600"}
    `.trim();

    stepCard.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-lg font-semibold">${step.title}</h3>
        <label class="flex items-center space-x-2">
          <input type="checkbox" data-index="${index}" class="step-checkbox" ${isChecked ? "checked" : ""}>
          <span class="text-sm">Completed</span>
        </label>
      </div>

      <div class="mb-3">
        <label class="block text-sm font-medium mb-1">Video URL</label>
        <div class="flex gap-2 items-center">
          <input type="url" class="video-url w-full rounded border px-2 py-1 dark:bg-gray-700" data-index="${index}" value="${step.videoUrl}">
          <a href="${step.videoUrl}" target="_blank" class="open-video text-sm px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${step.videoUrl ? '' : 'hidden'}">Open</a>
        </div>
      </div>

      <div class="mb-3">
        <label class="block text-sm font-medium mb-1">Notes (Markdown)</label>
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs text-gray-500 dark:text-gray-400">Markdown Preview</span>
          <button class="edit-btn text-sm text-white-600 hover:underline" data-index="${index}">✏️ Edit</button>
        </div>
        <div class="markdown-preview p-3 rounded bg-gray-100 dark:bg-gray-900 border dark:border-gray-700 text-sm">${markdownHTML}</div>
        <textarea class="note-input w-full mt-2 rounded border px-2 py-1 dark:bg-gray-700 h-24 hidden" data-index="${index}">${step.note}</textarea>
        <button class="save-btn hidden mt-2 px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition">Save</button>
      </div>
    `;

    container.appendChild(stepCard);
  });

  updateProgressBar(roadmap.steps, progress);

  // Handle checkbox
  container.querySelectorAll(".step-checkbox").forEach(checkbox => {
    checkbox.addEventListener("change", e => {
      const idx = e.target.dataset.index;
      progress[idx] = e.target.checked;
      saveProgress(roadmap.id, progress);
      updateProgressBar(roadmap.steps, progress);

      const card = e.target.closest(".border");
      if (e.target.checked) {
        card.classList.add("bg-green-100", "border-green-400", "dark:bg-green-900", "dark:border-green-600");
        card.classList.remove("bg-red-100", "border-red-400", "dark:bg-red-600", "dark:border-red-600");
      } else {
        card.classList.remove("bg-green-100", "border-green-400", "dark:bg-green-900", "dark:border-green-600");
        card.classList.add("bg-red-100", "border-red-400", "dark:bg-red-800", "dark:border-red-600");
      }
    });
  });

  // Handle video URL updates
  container.querySelectorAll(".video-url").forEach(input => {
    input.addEventListener("input", e => {
      const idx = e.target.dataset.index;
      const url = e.target.value;
      roadmap.steps[idx].videoUrl = url;
      localStorage.setItem(roadmap.id, JSON.stringify(roadmap));

      const openBtn = e.target.parentElement.querySelector(".open-video");
      if (url.trim() !== "") {
        openBtn.classList.remove("hidden");
        openBtn.href = url;
      } else {
        openBtn.classList.add("hidden");
      }
    });
  });

  // Handle Edit/Save for markdown notes
  container.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const idx = btn.dataset.index;
      const card = btn.closest(".mb-3");
      card.querySelector(".note-input").classList.remove("hidden");
      card.querySelector(".save-btn").classList.remove("hidden");
      card.querySelector(".markdown-preview").classList.add("hidden");
      btn.classList.add("hidden");
    });
  });

  container.querySelectorAll(".save-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      const card = btn.closest(".mb-3");
      const textarea = card.querySelector(".note-input");
      const preview = card.querySelector(".markdown-preview");
      const idx = textarea.dataset.index;
      const newNote = textarea.value;

      roadmap.steps[idx].note = newNote;
      localStorage.setItem(roadmap.id, JSON.stringify(roadmap));
      preview.innerHTML = marked.parse(newNote);

      card.querySelector(".edit-btn").classList.remove("hidden");
      textarea.classList.add("hidden");
      btn.classList.add("hidden");
      preview.classList.remove("hidden");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const roadmap = getRoadmapById(id);
  const titleEl = document.getElementById("roadmap-title");

  if (!roadmap) {
    titleEl.textContent = "Roadmap not found.";
    return;
  }

  titleEl.textContent = roadmap.title;
  renderSteps(roadmap);
});
