// ================= NAV TOGGLE =================

const hamburger = document.querySelector(".hamburger");
const hamburgerX = document.querySelector(".hamburgerx");
const nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {
    nav.classList.add("mobile-nav-active");
});

hamburgerX.addEventListener("click", () => {
    nav.classList.remove("mobile-nav-active");
});

// ================= PROJECTS =================

const projectsContainer = document.querySelector(".projects");
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
        .catch(err => console.error("Project error:", err));
};

appdata();

// ================= POSTS =================

const postcontainer = document.querySelector(".containt-post");
let postlist = [];

const showpost = () => {
    postcontainer.innerHTML = "";

    postlist.forEach(post => {
        const posts = document.createElement("div");
        posts.classList.add("post");

        posts.innerHTML = `
            <img src="${post.post}" alt="">
        `;

        postcontainer.appendChild(posts);
    });
};

const postdata = () => {
    fetch("post.json")
        .then(res => res.json())
        .then(data => {
            postlist = data;
            showpost();
        })
        .catch(err => console.error("Post error:", err));
};

postdata();
