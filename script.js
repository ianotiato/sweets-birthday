/* =========================================
   FLOATING PARTICLES
========================================= */

const particleBox =
    document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("span");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (8 + Math.random() * 18) + "s";

    particle.style.animationDelay =
        (-Math.random() * 18) + "s";

    particle.style.opacity =
        0.1 + Math.random() * 0.35;

    particleBox.appendChild(particle);
}


/* =========================================
   OPEN SURPRISE BUTTON
========================================= */

document
    .getElementById("beginBtn")
    .addEventListener("click", function () {

        document
            .querySelector(".story")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* =========================================
   MAKE A WISH
========================================= */

document
    .getElementById("heartBtn")
    .addEventListener("click", function () {

        const wish =
            document.getElementById("wish");

        wish.classList.add("show");


        /* Create floating hearts */

        for (let i = 0; i < 18; i++) {

            const heart =
                document.createElement("span");

            heart.textContent =
                ["♥", "✦", "♡"][
                    Math.floor(Math.random() * 3)
                ];

            heart.style.position = "fixed";

            heart.style.left =
                40 + Math.random() * 20 + "%";

            heart.style.top = "65%";

            heart.style.fontSize =
                14 + Math.random() * 22 + "px";

            heart.style.color =
                "#d8b5bc";

            heart.style.zIndex = "20";

            heart.style.pointerEvents = "none";


            document.body.appendChild(heart);


            heart.animate(

                [
                    {
                        transform:
                            "translateY(0) scale(.7)",

                        opacity: 0
                    },

                    {
                        transform:
                            `translate(
                                ${(Math.random() - 0.5) * 180}px,
                                -${120 + Math.random() * 260}px
                            ) scale(1)`,

                        opacity: 1
                    },

                    {
                        transform:
                            `translate(
                                ${(Math.random() - 0.5) * 240}px,
                                -${250 + Math.random() * 350}px
                            ) scale(.5)`,

                        opacity: 0
                    }
                ],

                {
                    duration:
                        1400 + Math.random() * 700,

                    easing: "ease-out"
                }

            ).onfinish = () =>
                heart.remove();

        }

    });