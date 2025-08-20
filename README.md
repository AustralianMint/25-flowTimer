# 25-flowTimer ⏰

A clean, minimalist Pomodoro timer built with vanilla JavaScript. Perfect for 25-minute focused work sessions with a beautiful circular progress design.

## 🚀 Getting Started
1. Clone this repository
2. Open `index.html` in your browser  
3. Start your focus session!

## 🛠️ JavaScript Concepts Implemented

### DOM Manipulation & Event Handling
```javascript
const startBtn = document.querySelector('.btn-start');
const minuteDiv = document.querySelector('.minutes');
const secondDiv = document.querySelector('.seconds');

startBtn.addEventListener("click", appTimer);
```

### Timer Logic with `setInterval()`
The core timing mechanism uses JavaScript's `setInterval()` to update the display every second:
```javascript
const updateSeconds = () => {
  totalSeconds--;
  let minutesLeft = Math.floor(totalSeconds/60);
  let secondsLeft = totalSeconds % 60;
  // Update display logic...
}
myInterval = setInterval(updateSeconds, 1000);
```

### State Management
Simple but effective state tracking prevents multiple timers running simultaneously:
```javascript
let state = true; // true = ready to start, false = timer running
```

### Audio Integration
Uses the Web Audio API for completion notifications:
```javascript
const bells = new Audio('./achievementBell.wav');
bells.play(); // Plays when timer reaches 00:00
```

### Time Formatting & Display
Handles proper time display with leading zeros:
```javascript
if(secondsLeft < 10) {
  secondDiv.textContent = '0' + secondsLeft;
} else {
  secondDiv.textContent = secondsLeft;
}
```

## 📁 Project Structure

```
25-flowTimer/
├── index.html          # Main HTML structure
├── styles.css          # Circular design & gradient styling
├── app.js              # Timer logic and DOM interaction
├── achievementBell.wav # Completion sound effect
└── README.md           # This file
```

## 🔧 How It Works

1. **Initialization** - Timer starts at 25:00, `totalSeconds` is undefined until first start
2. **Start Logic** - Converts display minutes to total seconds (25 × 60 = 1500)
3. **Countdown** - Decrements `totalSeconds` and updates display every 1000ms
4. **Completion** - Plays audio, clears interval, resets state
5. **Controls** - Pause stops interval but preserves time, Reset returns to 25:00

## 🚧 Future Enhancements

- [ ] Customizable timer durations (15, 30, 45 minutes)
- [ ] Session counter and statistics
- [ ] Visual progress animation on the circular border
- [ ] Sound customization options

## 🎯 Built With

- **Vanilla JavaScript** - No frameworks, pure JS implementation
- **HTML5** - Semantic structure and audio element
- **CSS3** - Custom shapes, gradients, and responsive design
- **Google Fonts** - Fira Sans & EG Garamond typography

## 📚 Learning Outcomes

This project demonstrates:
- Timer implementation with `setInterval()` and `clearInterval()`
- DOM manipulation and event listener management
- State management in vanilla JavaScript
- Audio API integration
- Time calculation and display formatting
- CSS custom shapes and positioning

---

*Built following a [Codedx JavaScript tutorial](https://www.codedx.io/javascript) - Enhanced with custom styling and additional features.*
