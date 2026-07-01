async function loadProjects() {
  const res = await fetch("./data.json", { cache: "no-store" });
  const projects = await res.json();

  const container = document.getElementById("projects");

  projects.forEach((project, index) => {

    const projectHTML = document.createElement("div");
    projectHTML.classList.add("project");

    projectHTML.innerHTML = `
      <div class="swiper swiper-${index}">
        <div class="swiper-wrapper">
          ${project.images.map(img => `
            <div class="swiper-slide">
              <img src="${img}" />
            </div>
          `).join("")}
        </div>
      </div>

      <h2>${project.title}</h2>
      <p>${project.description}</p>
    `;

    container.appendChild(projectHTML);

    new Swiper(`.swiper-${index}`, {
      loop: true,
      spaceBetween: 10,
    });

  });
}

loadProjects();
