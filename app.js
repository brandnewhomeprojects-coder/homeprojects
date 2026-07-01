document.addEventListener("DOMContentLoaded", async () => {

  const res = await fetch("./data.json");
  const projects = await res.json();

  const container = document.getElementById("projects");

  projects.forEach(project => {

    const div = document.createElement("div");
    div.className = "project";

    div.innerHTML = `
      <img class="project-img" src="${project.images[0]}" />
      <h2>${project.title}</h2>
      <p>${project.description}</p>
    `;

    container.appendChild(div);

  });

});

// document.addEventListener("DOMContentLoaded", async () => {

//   const res = await fetch("./data.json", { cache: "no-store" });
//   const projects = await res.json();

//   const container = document.getElementById("projects");

//   const swipersToInit = [];

//   projects.forEach((project, index) => {

//     const wrapper = document.createElement("div");
//     wrapper.className = "project";

//     wrapper.innerHTML = `
//       <div class="swiper swiper-${index}">
//         <div class="swiper-wrapper">
//           ${project.images.map(img => `
//             <div class="swiper-slide">
//               <img src="${img}" />
//             </div>
//           `).join("")}
//         </div>
//       </div>

//       <h2>${project.title}</h2>
//       <p>${project.description}</p>
//     `;

//     container.appendChild(wrapper);

//     swipersToInit.push(index);
//   });

//   // 🔥 WAIT IMAGES LOAD (IMPORTANT)
//   const waitImages = () => {
//     const images = document.querySelectorAll("img");

//     return Promise.all(
//       Array.from(images).map(img => {
//         if (img.complete) return Promise.resolve();
//         return new Promise(res => {
//           img.onload = img.onerror = res;
//         });
//       })
//     );
//   };

//   await waitImages();

//   // 🔥 INIT SWIPER DUPĂ LOAD
//   swipersToInit.forEach(index => {

//     new Swiper(`.swiper-${index}`, {
//       loop: true,
//       spaceBetween: 10,
//       observer: true,
//       observeParents: true,
//       observeSlideChildren: true,
//     });

//   });

// });
