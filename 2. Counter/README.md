# ⚛️ Neon Counter & Digital Clock

A modern, stylish React application featuring an interactive counter and a real-time digital clock. The interface is designed with a dark cyberpunk aesthetic, neon glow effects, and smooth animated interactions.

---

## ✨ Features

### 🔢 **Interactive Counter**

* Increment & decrement functionality using React state.

### ⏰ **Real-time Digital Clock**

* Updates every second using `useEffect` + `setInterval`.

### 🎨 **Cyberpunk UI Design**

* Dark mode background (`#121212`).
* Neon glow borders with pulsing animations.
* Text shadows & 3D-style neon typography.
* Animated buttons with glowing hover effects (Pink & Cyan).

### 🧱 **Clean Architecture**

* Component-based, using functional React components.

---

## 📂 Project Structure

```
root/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project images/icons
│   ├── App.jsx          # Main application component
│   ├── Counter.css      # Styling for the counter component
│   ├── Counter.jsx      # Logic for Counter and Clock
│   ├── main.jsx         # React DOM entry point
├── .gitignore           # Git ignore rules
├── index.html           # HTML entry point
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

---

## 🖼️ ScreenShots of Website

**Counter App** <br><br>
![Counter App](./src/assets/ss.png)


## 🚀 Getting Started

Follow these steps to run the project locally.

### **Prerequisites**

* Node.js (v14 or higher recommended)
* npm or yarn

### **Installation**

#### 1️⃣ Clone the repository

#### 2️⃣ Install dependencies

```bash
npm install
```

#### 3️⃣ Run the development server

```bash
npm run dev
```

Now open your browser at:

```
http://localhost:5173
```

(Port may vary based on your setup.)

---

## 🧠 Code Highlights

### **⏱️ Time Update Logic (Counter.jsx)**

```javascript
// Time Update Logic
useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(interval); // Cleanup
}, []);
```

### **✨ Neon Border Animation (Counter.css)**

```css
@keyframes pulse-border {
  0% {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
    border-color: #333;
  }
  100% {
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
    border-color: #00ffff;
  }
}
```

---

## 🛠️ Technologies Used

* **React** – UI library for building components
* **Vite** – Fast next‑gen build tool
* **CSS3** – Flexbox layout & keyframe animations

---