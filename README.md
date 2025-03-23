# 🪨 Rock Paper Scissors Game — HTML | CSS | JavaScript

A simple, interactive **Rock Paper Scissors** game built with vanilla JS, HTML, and CSS. Select your move, play against the computer, and see who wins!

---

## 🚀 Features
- User selects Rock, Paper, or Scissors.
- Computer randomly picks its move.
- Result is shown with a visual highlight.
- Scores and gameplay can be extended easily.

---

## 📂 Files Overview
| File         | Purpose                                 |
|--------------|-----------------------------------------|
| `index.html` | Main structure of the game interface    |
| `style.css`  | Styling, layout, and hover effects      |
| `script.js`  | Game logic and interactivity            |

---

## 💻 How to Run

1. Clone/download this project or copy the code.
2. Ensure the following file structure:
   ```
   /project-folder
     ├── index.html
     ├── style.css
     ├── script.js
     └── /Images
          ├── rock.png
          ├── paper.png
          └── scissors.png
   ```
3. Open `index.html` in any modern browser (Chrome, Firefox, etc.).
4. Click on your move and press the **Play** button to compete against the computer!

---

## 🧠 Game Logic

- Computer move is generated using:
  ```js
  const index = Math.floor(Math.random() * 3);
  const move = choices[index];
  ```
- User’s selection is tracked via event listeners and stored in a global variable.
- Result is determined by comparing user vs computer move in `check_winner()`.

---

