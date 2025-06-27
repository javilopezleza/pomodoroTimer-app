# ⏳ Temporizador Pomodoro

Una aplicación web simple basada en la técnica **Pomodoro** que ayuda a mejorar la productividad mediante ciclos de trabajo y descanso.

---

## 🚀 Características

- Establece tu propio tiempo de trabajo (en minutos).
- Inicia, pausa y reinicia el temporizador.
- Ciclos automáticos de trabajo y descanso:
  - Cada 25 minutos de trabajo → 5 minutos de descanso.
  - Cada 50 minutos de trabajo → 10 minutos de descanso.
  - Cada 4 ciclos → descanso largo de **30 minutos**.
- Visualización del ciclo actual.
- Soporte para valores decimales (por ejemplo: 0.1 minutos para pruebas rápidas).
- Sonido al terminar trabajo y descanso (opcional).

---


## 📦 Cómo usar

1. **Clona el repositorio o descarga los archivos.**

   ```bash
   git clone https://github.com/tuusuario/pomodoro-timer.git
   ```
2. **Abre index.html en tu navegador.**

3. **Ajusta el tiempo de trabajo (por defecto: 25) usando el campo de entrada.**

4. **Haz clic en iniciar para comenzar el ciclo Pomodoro.**

---

## 📁 Estructura de archivos

```
pomodoro-timer/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── apps.js
└── assets/
    └── sounds/
        ├── work-end.mp3
        └── break-end.mp3
```

---

## 🔔 Sonidos

Puedes añadir sonidos al final de cada ciclo de trabajo o descanso:

   1.  **Coloca tus archivos .mp3 o .wav en la carpeta /assets/sounds/.**

   2. **Asegúrate de que el código JS los cargue correctamente, por ejemplo:**

``` 
    const workEndSound = new Audio("assets/sounds/work-end.mp3");
    const breakEndSound = new Audio("assets/sounds/break-end.mp3");
```

---

## 📖 Qué es la Técnica Pomodoro
Es una técnica de gestión del tiempo que consiste en bloques de:

- 25 minutos de trabajo.

- 5 minutos de descanso.

- Después de 4 ciclos, se toma un descanso más largo (20-30 minutos).

---

## 🧑‍💻 Autor
###  Javilolez
Hecho con ❤️ por Javilolez

---

## 🪪 Licencia
Este proyecto es de uso libre para fines educativos o personales. Puedes modificarlo y adaptarlo según tus necesidades.