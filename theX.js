const hamburger = document.querySelector(".hamburger");
const hamburgerX = document.querySelector(".hamburgerx");
const nav = document.querySelector(".mobile-nav");
const projectsContainer = document.querySelector(".projects");

hamburger.addEventListener("click", () => {
    nav.classList.add("mobile-nav-active");
});

hamburgerX.addEventListener("click", () => {
    nav.classList.remove("mobile-nav-active");
});

let projectlist = [];

const showproject = () => {
    projectsContainer.innerHTML = ""; 

    projectlist.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <img src="${project.image}" alt="">
            <div>
                <a href="#">${project.type1}</a>
                <a href="#">${project.type2}</a>
            </div>
            <h3>${project.title}</h3>
        `;

        projectsContainer.appendChild(projectDiv);
    });
};

const appdata = () => {
    fetch("TheX.json")
        .then(res => res.json())
        .then(data => {
            projectlist = data;   
            showproject();
        })
        .catch(err => console.error(err));
};

appdata();
