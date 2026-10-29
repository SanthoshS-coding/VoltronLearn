// Course lessons and page buttons will be in this file.
// These lesson notes are a first draft; I will still need to fact-check and improve them
const lessons = [
  {
    title: "So, what is AI engineering?",
    time: 5,
    subtitle: "A useful definition, without the sci-fi soundtrack.",
    body: `<p>AI engineering is the work of building useful software features that use AI. It is not only choosing a model. You also decide what the app asks the model, what information it provides, how people use the result, and what should happen when the answer is wrong or uncertain.</p>
      <h3>A simple way to picture it</h3>
      <p>A model is one part of a product. The app around it turns that model into something a person can actually use.</p>
      <div class="inline-example">person asks a question
app prepares the request
model returns a draftapp shows or checks the result</div>
      <p>That is the basic idea for this first lesson. I will add more detail as I build the course.</p>`
  },
  {
    title: "Meet the four basic pieces",
    time: 10,
    subtitle: "Models, instructions, information, and the app around them.",
    body: `<p>Many beginner AI features have a few parts working together. The exact setup changes from project to project, but this is a helpful place to start.</p>
      <ul>
        <li><strong>Model:</strong> software that takes an input and produces an output, such as a draft of text.</li>
        <li><strong>Instructions:</strong> guidance that tells the model what task to try.</li>
        <li><strong>Information:</strong> context the app supplies when the task needs specific facts.</li>
        <li><strong>App:</strong> the interface and code that connect the feature to a person's task.</li>
      </ul>
      <p>Think of the model as a capable helper, not a magic box. A clear task and relevant information make it easier to get a useful result.</p>`
  },
  {
    title: "From a question to an answer",
    time: 10,
    subtitle: "Follow one request through a tiny AI feature.",
    body: `<p>Imagine someone asks a shop's website, "Can I bring my dog?" The app may send that question to a model along with instructions and the shop's pet policy.</p>
      <div class="inline-example">1. A person asks a question2. The app prepares instructions and relevant context3. The model returns a possible answer4. The app decides how to show that answer</div>
      <p>The model cannot know a private shop policy unless that information is provided to it or made available through the app. A real feature also needs a plan for missing information, errors, and delays.</p>
      <h3>Small but important</h3>
      <p>For a specific factual answer, the app needs a trustworthy source for the fact. A confident-sounding response is not proof that the fact is correct.</p>`
  },
  {
    title: "Build a tiny example",
    time: 10,
    subtitle: "A friendly reply writer, in plain language.",
    body: `<p>Suppose a support worker has a rough note and wants a clearer reply. The app can ask a model to rewrite the note while keeping the facts unchanged.</p>
      <div class="inline-example">Instruction: Rewrite this as a friendly, clear reply.
Keep the facts the same. Do not make up details.

Note: delivery late. say sorry. arrives Friday.</div>
      <p>The important part is the boundary: do not invent details. The result is still a draft, so a person should check it before sending.</p>
      <p>Try changing the instruction and notice how the answer changes. That little experiment is more useful than trying to find one perfect prompt.</p>`
  },
  {
    title: "Your turn: change one thing",
    time: 10,
    subtitle: "A tiny experiment beats a long explanation.",
    body: `<p>Open the Prompt Playground file from the resources. Try the starting instruction, then change just one thing: the tone, the length, or who the reply is for.</p>
      <h3>Notice what happens</h3>
      <ul>
        <li>Did the response change in the way you expected?</li>
        <li>Did it add a fact that was not in the note?</li>
        <li>Would a real person know what to do next?</li>
      </ul>
      <p>Changing one thing at a time makes it easier to tell what helped. Write down one version you would be comfortable reviewing.</p>`
  },
  {
    title: "A few things to watch for",
    time: 8,
    subtitle: "AI can be handy and still get things wrong.",
    body: `<p>A model can produce a fluent answer that contains a mistake. That does not make the tool useless; it means the feature needs suitable checks for its task.</p>
      <ul>
        <li><strong>Check important facts.</strong> Take extra care when errors could affect someone's health, money, safety, or rights.</li>
        <li><strong>Do not ask the model to guess.</strong> Provide useful context and explain what to do when a detail is missing.</li>
        <li><strong>Try awkward examples.</strong> Test confusing requests, not only the easy demonstration.</li>
        <li><strong>Keep people involved.</strong> Decide when a person should review the result.</li>
      </ul>
      <p>Good engineering means thinking about how a feature behaves in different situations, not just celebrating one good answer.</p>`
  },
  {
    title: "Quick recap and what is next",
    time: 7,
    subtitle: "You have the shape of it. That is a solid start.",
    body: `<p>You have met the basic pieces of an AI feature: a model, instructions, relevant information, and an app that makes the feature usable. You followed a request through the system, tried a small experiment, and considered what can go wrong.</p>
      <h3>If you remember three things</h3>
      <ul>
        <li>The model is one part of a product, not the whole product.</li>
        <li>Clear instructions and useful context help, but do not guarantee a correct answer.</li>
        <li>Test edge cases and check important output.</li>
      </ul>
      <p>That is a good first overview. Next, I can look at ways to make an AI feature more reliable and test it with real examples.</p>`
  }
];

const lessonList = document.querySelector("#lessonList");
const overlay = document.querySelector("#lessonOverlay");
let activeLesson = 0;

// Keep progress and notes in this browser for now.
function readSaved(key, fallback) {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : fallback;
  } catch (error) {
    return fallback;
}
}

function saveSaved(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
} catch (error) {
    // The page still works if this browser blocks local storage.
}
}

const savedLessons = readSaved("voltron-learn-completed", []);
let completed = Array.isArray(savedLessons)
  ? savedLessons.filter(index => Number.isInteger(index) && index >= 0 && index < lessons.length)
  : [];

const savedComments = readSaved("voltron-learn-comments", []);
let comments = Array.isArray(savedComments)
  ? savedComments.filter(comment => comment && typeof comment.text === "string")
  : [];

function renderLessons() {
  lessonList.innerHTML = "";

  lessons.forEach((lesson, index) => {
    const row = document.createElement("button");
    row.className = completed.includes(index) ? "lesson-row completed" : "lesson-row";
    row.type = "button";
    row.dataset.lesson = index;

    const number = document.createElement("span");
    number.className = "lesson-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const copy = document.createElement("span");
    copy.className = "lesson-copy";

    const title = document.createElement("strong");
    title.textContent = lesson.title;

    const subtitle = document.createElement("span");
    subtitle.textContent = lesson.subtitle;
    copy.append(title, subtitle);

    const duration = document.createElement("span");
    duration.className = "lesson-duration";
    duration.textContent = `${lesson.time} min`;

    const openLabel = document.createElement("span");
    openLabel.className = "lesson-chevron";
    openLabel.textContent = ">";

    row.append(number, copy, duration, openLabel);
    lessonList.appendChild(row);
  });
}

function updateProgress() {
  const percent = Math.round((completed.length / lessons.length) * 100);
  document.querySelector("#progressPercent").textContent = `${percent}%`;
  document.querySelector("#progressCount").textContent = `${completed.length} of ${lessons.length} lessons`;
  document.querySelector("#progressBar").style.width = `${percent}%`;
  document.querySelector("#sideProgressBar").style.width = `${percent}%`;
  document.querySelector("#sideProgressText").textContent = `${percent}% done`;
}

function openLesson(index) {
  activeLesson = index;
  const lesson = lessons[index];

  document.querySelector("#dialogKicker").textContent = `LESSON ${String(index + 1).padStart(2, "0")} - ${lesson.time} MIN`;
  document.querySelector("#dialogTitle").textContent = lesson.title;

  // This HTML is written above in the lesson data, not typed by learners.
  document.querySelector("#dialogBody").innerHTML = lesson.body;
  document.querySelector("#dialogIndex").textContent = `${index + 1} of ${lessons.length} - ${lesson.subtitle}`;
  document.querySelector("#completeLesson").textContent = completed.includes(index)
    ? "Already done"
    : "Mark this one done";

  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.querySelector("#closeLesson").focus();
}

function closeLesson() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function renderComments() {
  const list = document.querySelector("#commentList");
  list.innerHTML = "";

  comments.forEach(comment => {
    const item = document.createElement("div");
    item.className = "comment-item";

    const avatar = document.createElement("div");
    avatar.className = "comment-avatar";
    avatar.textContent = "Y";

    const content = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = comment.text;

    const date = document.createElement("small");
    date.textContent = comment.date || "Saved note";

    content.append(text, date);
    item.append(avatar, content);
    list.appendChild(item);
  });
}

lessonList.addEventListener("click", event => {
  const row = event.target.closest("[data-lesson]");
  if (row) {
    openLesson(Number(row.dataset.lesson));
  }
});

document.querySelector("#startButton").addEventListener("click", () => {
  const nextLesson = lessons.findIndex((lesson, index) => !completed.includes(index));
  openLesson(nextLesson === -1 ? 0 : nextLesson);
});

document.querySelector("#closeLesson").addEventListener("click", closeLesson);

overlay.addEventListener("click", event => {
  if (event.target === overlay) {
    closeLesson();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeLesson();
  }
});

document.querySelector("#completeLesson").addEventListener("click", () => {
  if (!completed.includes(activeLesson)) {
    completed.push(activeLesson);
  }

  saveSaved("voltron-learn-completed", completed);
  renderLessons();
  updateProgress();
  closeLesson();
});

// A blank note is just a blank note, so don't save it.
document.querySelector("#postComment").addEventListener("click", () => {
  const input = document.querySelector("#commentInput");
  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  const date = new Date().toLocaleDateString(undefined, {
    month: "short",
    day: "numeric"
  });

  comments.unshift({ text, date });
  saveSaved("voltron-learn-comments", comments);
  input.value = "";
  renderComments();
});

document.querySelector("#menuToggle").addEventListener("click", () => {
  const sidebar = document.querySelector("#sidebar");
  const isOpen = sidebar.classList.toggle("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".sidebar .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector("#sidebar").classList.remove("open");
    document.querySelector("#menuToggle").setAttribute("aria-expanded", "false");
  });
});

renderLessons();
updateProgress();
renderComments();