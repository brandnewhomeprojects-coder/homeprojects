document.addEventListener("DOMContentLoaded", async () => {

  const res = await fetch("./data.json", { cache: "no-store" });
  const projects = await res.json();

  const container = document.getElementById("projects");

  projects.forEach((project, index) => {

    const wrapper = document.createElement("div");
    wrapper.className = "project";

    wrapper.innerHTML = `
      <div class="swiper swiper-${index}">
        <div class="swiper-wrapper">
          ${project.images.map(img => `
            <div class="swiper-slide">
              <img src="${img}" />
            </div>
          `).join("")}
        </div>

        <div class="swiper-pagination"></div>
      </div>

      <h2>${project.title}</h2>
      <p>${project.description}</p>
    `;

    container.appendChild(wrapper);

  });

  // 🔥 IMPORTANT: inițializează DUPĂ ce tot DOM-ul există
  setTimeout(() => {

    document.querySelectorAll(".swiper").forEach((el) => {
      new Swiper(el, {
        loop: true,
        spaceBetween: 10,
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          clickable: true,
        }
      });
    });

  }, 50);

});
