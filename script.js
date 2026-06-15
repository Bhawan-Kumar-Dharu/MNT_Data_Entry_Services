console.log("Hello World...!");

// NAVBAR EFFECTS
const sections = document.querySelectorAll(".sections");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;

                navLinks.forEach((link) => {
                    link.classList.remove("active");

                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    },
    {
        threshold: 0.5
    }
);

sections.forEach((section) => {
    observer.observe(section);
});

// THEME MODE
const mode = document.getElementById("mode");
const theme = document.getElementById("theme");

// 🔥 Apply saved theme on page load
let savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    theme.href = savedTheme;
} else {
    theme.href = "css/darkstyles.css";
}

// 🔥 Toggle theme on click
mode.addEventListener("click", () => {
    if (theme.href.includes("darkstyles.css")) {
        theme.href = "css/brightstyles.css";
    } else {
        theme.href = "css/darkstyles.css";
    }

    localStorage.setItem("theme", theme.href);
});


// CARD  BUTTON SETTINGS 
let btns = card_nav.querySelectorAll("BUTTON");
console.log(btns);

Array.from(btns).forEach((e) => {
    
    e.addEventListener("click", j => {
        let card = document.getElementsByClassName("p_card");
        
        Array.from(card).forEach((i) => {
            if (i.id === j.target.name) {
                i.style.display = 'flex';
            } else {
                i.style.display = 'none';
            }
            
            if (i.style.display === 'flex') {
                Array.from(btns).forEach((x)=>{
                    
                    if (x.name === i.id) {
                        x.style.backgroundColor = "#605B51"
                        
                    } else {
                        
                        x.style.backgroundColor = "rgb(0 0 0 / 31%)";
                    }

                })
            }
        })
        
    })
})

