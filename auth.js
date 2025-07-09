document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const signinForm = document.getElementById("signin-form");

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!name || !email || !password) return alert("All fields required");

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const exists = users.find((u) => u.email === email);
      if (exists) return alert("User already exists");

      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", JSON.stringify({ name, email }));

      alert("Signup successful!");
      window.location.href = "index.html";
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u) => u.email === email && u.password === password);

      if (!user) return alert("Invalid email or password");

      localStorage.setItem("loggedInUser", JSON.stringify({ name: user.name, email: user.email }));
      alert("Login successful!");
      window.location.href = "index.html";
    });
  }
});