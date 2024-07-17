// Construction canvas
const canvasElement = document.getElementById('graph');
const ctx = canvasElement.getContext('2d');

// Graphique statistique
// Méthode axe des abscisses 
const createAxeX = (marks, scale, unit, label) => {
    // Représentation graphique
    ctx.beginPath();
    ctx.moveTo(50, ctx.canvas.height - 50);
    ctx.lineTo(ctx.canvas.width - 50, ctx.canvas.height - 50);
    ctx.stroke();
    // Paramètre label
    if (label) {
        ctx.textAlign = "center";
        ctx.fillText(label, ctx.canvas.width / 2, ctx.canvas.height - 10);
    }
    // Paramètre marks
    for (var i = 0; i <= marks; i += 1) {
        // Calcul de distance
        const distance = (ctx.canvas.width - 100) / marks;
        // Représentation graphique
        ctx.beginPath();
        ctx.moveTo(50 + i * distance, ctx.canvas.height - 50);
        ctx.lineTo(50 + i * distance, ctx.canvas.height - 45);
        ctx.stroke();
        // Représentation graphique graduation
        ctx.textAlign = "center";
        if (unit) ctx.fillText(scale * i + unit, 50 + i * distance, ctx.canvas.height - 35);
        else ctx.fillText(scale * i, 50 + i * distance, ctx.canvas.height - 35);
    }
}

// Fonction permettant une représentation graphique vertical
const fillTextVertically = (text, x, y) => {
    const lineHeight = 10;
    y = y - lineHeight * text.length / 2;

    ctx.textAlign = "center";
    for (var i = 0; i < text.length; i += 1) {
        ctx.fillText(text[i], x, y + i * lineHeight);
    }
}

// Méthode axe des ordonnées
const createAxeY = (marks, scale, unit, label) => {
    // Représentation graphique
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, ctx.canvas.height - 50);
    ctx.stroke();
    // Paramètre label
    if (label) {
        ctx.textAlign = "center";
        fillTextVertically(label, 10, ctx.canvas.height / 2);
    }
    // Paramètre marks
    for (var i = 0; i <= marks; i += 1) {
        // Calcul de distance
        const distance = (ctx.canvas.height - 100) / marks;
        // Représentation graphique
        ctx.beginPath();
        ctx.moveTo(50, ctx.canvas.height - 50 - i * distance);
        ctx.lineTo(45, ctx.canvas.height - 50 - i * distance);
        ctx.stroke();
        // Représentation graphique graduation
        ctx.textAlign = "center";
        if (unit) ctx.fillText(scale * i + unit, 35, ctx.canvas.height - 50 - i * distance);
        else ctx.fillText(scale * i, 35, ctx.canvas.height - 50 - i * distance);
    }
}

// Méthode génération points aléatoires
const generatePoints = (size, x_min, x_max, y_min, y_max, color) => {
    // Tableau de points
    const points = [];
    for (var i = 0; i < size; i += 1) {
        // Paramètres points ajustés en fonction du tableau
        points.push({
            x: Math.random() * (x_max - x_min) + x_min,
            y: Math.random() * (y_max - y_min) + y_min,
            color: color
        });
    }
    return points;
}
// Méthode représentation graphique
const placePoints = (points, marks_x, scale_x, marks_y, scale_y) => {
    // Paramètres points ajustés en fonction du graphique x-y
    const transform_x = marks_x * scale_x / (ctx.canvas.width - 100);
    const transform_y = marks_y * scale_y / (ctx.canvas.height - 100);
    points.forEach(point => {
        // Paramètres coordonnées transformées
        const x = 50 + point.x / transform_x;
        const y = ctx.canvas.height - 50 - point.y / transform_y;
        // Représentation graphique des points
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = point.color;
        ctx.fill();
    });
}

// Appel fonctions
createAxeX(10, 100, "$", "Income");
createAxeY(10, 10, "%", "Happiness");
generatePoints();

// Test génération points
const points = generatePoints(50, 0, 1000, 50, 100, "red");
// console.log(points);
placePoints(points, 10, 100, 10, 10);