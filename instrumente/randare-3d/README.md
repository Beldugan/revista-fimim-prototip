# Randarea machetelor 3D

Imaginile din `assets/img/3d/*.webp` sunt machete 3D transparente, generate cu three.js.
Nu este nevoie de acest folder pentru funcționarea site-ului.

Pentru a le regenera (necesită Node.js):

```bash
cd instrumente/randare-3d
npm i three@0.160.0 playwright
node render.js ../../assets/img/3d car gears turbine robot crane lattice engine caliper bulb
```
