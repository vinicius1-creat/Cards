const cards = document.querySelectorAll(".card") cards.forEach(card => {
    card.addEventListener("mousemove" ,(e) => {
        const rect = card.()
        const x = e.clientx - rect.left;
        const y = e.clienty - rect.top;

        const rotatex = ((y/rect.height) -0.5) *15;
        const rotatey = ((x/rect.height) -0.5) *-15;

        card.style.transform = 'rotatex($'{rotatex}de
    });
})