const app = new PIXI.Application(
  { antialias: true }
);

document.body.appendChild(app.view);

const graphics = new PIXI.Graphics();

// Retângulo
graphics.lineStyle(5, 0x00FF00, 1);
graphics.beginFill(0xFF0000);
graphics.drawRoundedRect(50, 50, 100, 100);
graphics.endFill();

// Círculo
graphics.lineStyle(0);
graphics.beginFill(0x0000FF);
graphics.drawCircle(100, 250, 50);
graphics.endFill();

// Polígono
const path = [250, 250, 400, 50, 550, 250];

graphics.lineStyle(0);
graphics.beginFill(0xFFFF00);
graphics.drawPolygon(path);
graphics.endFill();

app.stage.addChild(graphics);