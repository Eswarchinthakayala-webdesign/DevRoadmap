// custom-builder.js

let stepCount = 0;

// Step Template
function createStepField(index) {
  const wrapper = document.createElement("div");
  wrapper.className = "border rounded-lg p-4 mb-4 bg-white dark:bg-gray-800";
  wrapper.innerHTML = `
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-md font-semibold">Step ${index + 1}</h3>
      <button class="text-red-500 text-sm remove-step">Remove</button>
    </div>
    <label class="block text-sm font-medium mb-1">Title</label>
    <input type="text" class="step-title w-full px-3 py-1 mb-2 border rounded dark:bg-gray-700"/>

    <label class="block text-sm font-medium mb-1">Video URL</label>
    <input type="url" class="step-url w-full px-3 py-1 mb-2 border rounded dark:bg-gray-700"/>

    <label class="block text-sm font-medium mb-1">Note (Markdown)</label>
    <textarea class="step-note w-full px-3 py-2 mb-2 border rounded dark:bg-gray-700 h-24"></textarea>

    <div class="markdown-preview p-3 bg-gray-100 dark:bg-gray-900 rounded border dark:border-gray-700 text-sm"></div>
  `;

  wrapper.querySelector(".remove-step").addEventListener("click", () => {
    wrapper.remove();
  });

  wrapper.querySelector(".step-note").addEventListener("input", (e) => {
    const preview = wrapper.querySelector(".markdown-preview");
    preview.innerHTML = marked.parse(e.target.value);
  });

  return wrapper;
}

function generateUniqueId(title) {
  return title.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
}

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.getElementById("steps-wrapper");
  const addBtn = document.getElementById("add-step");
  const saveBtn = document.getElementById("save-roadmap");

  function addStep() {
    const stepEl = createStepField(stepCount);
    wrapper.appendChild(stepEl);
    stepCount++;
  }

  addBtn.addEventListener("click", addStep);
  addStep(); // initial one step

  saveBtn.addEventListener("click", () => {
    const title = document.getElementById("roadmap-title").value.trim();
    const description = document.getElementById("roadmap-description").value.trim();

    if (!title || !description) {
      alert("Please fill in title and description.");
      return;
    }

    const steps = [];
    const stepTitles = document.querySelectorAll(".step-title");
    const stepUrls = document.querySelectorAll(".step-url");
    const stepNotes = document.querySelectorAll(".step-note");

    for (let i = 0; i < stepTitles.length; i++) {
      const stepTitle = stepTitles[i].value.trim();
      if (!stepTitle) continue;

      steps.push({
        title: stepTitle,
        videoUrl: stepUrls[i].value.trim(),
        note: stepNotes[i].value.trim(),
        completed: false
      });
    }

    if (steps.length === 0) {
      alert("Add at least one step!");
      return;
    }

    const newRoadmap = {
      id: generateUniqueId(title),
      title,
      description,
      trending: false,
      steps
    };

    const saved = JSON.parse(localStorage.getItem("customRoadmaps") || "[]");
    saved.push(newRoadmap);
    localStorage.setItem("customRoadmaps", JSON.stringify(saved));
    alert("✅ Roadmap saved!");
    window.location.href = "roadmap.html";
  });
});
