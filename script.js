const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mousemove" ,(e) => {
        const rect = card.getBoundingClientRect();
        const X = e.clientX - rect.left;
        const Y = e.clientY -rect.top;

        const rotateX = ((Y/rect.height) - 0.5) *45;
         const rotateY =  ((X/rect.width) - 0.5) *-45;

        card.style.transform = `
        rotateX(${rotateX}deg)
        rotatY(${rotateY}deg)
        scale(1.05)
        `;

    });

    card.addEventListener("mouseleave" ,() => {
        card.style.transform =
        `
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
        `
    })
})