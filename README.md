# Solitaire Game

This is a classic Solitaire game built with modern web technologies. The game leverages **Next.js**, **React**, **TypeScript**, and **react-beautiful-dnd** for an interactive and responsive user experience.

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Beautiful DnD](https://img.shields.io/badge/React_Beautiful_DnD-172b4d?style=for-the-badge&logo=react&logoColor=white)](https://github.com/atlassian/react-beautiful-dnd)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-black?logo=tailwind-css&style=for-the-badge)](https://tailwindcss.com)

## Demo

> [!NOTE]  
> This Solitaire Klondike game is part of the [Drunk Mode iOS]([https://github.com/NoodleOfDeath/drunkmode-puzzles/](https://apps.apple.com/us/app/drunk-mode-locker/id6478125185) app on Apple Store, where users solve puzzles to unlock restricted apps and prove their sobriety. If you're a developer, you can also create games for the app by visiting the [Drunk mode repo](https://github.com/NoodleOfDeath/drunkmode-puzzles/) on GitHub.
Try out the live demo [here](https://solitaire-tris.vercel.app/).

![solitaire game screenshot](/image.png)

## Features

- **Drag-and-Drop Interface:** 
Utilizes React Beautiful DnD for smooth, intuitive drag-and-drop interactions. Move cards with ease across the tableau, waste pile, and foundations.
- **Responsive Design:** Built for both desktop and mobile devices, ensuring a seamless gameplay experience regardless of screen size.
- **Dynamic Game Logic:** The game’s logic efficiently handles valid moves, snapping, and position validation for authentic Solitaire rules.
- **Undo Last Move:** Step back through your actions with the UNDO feature, ideal for strategizing and improving gameplay.
- **Shuffle & New Game:** Start fresh by shuffling the deck, making each session unique.

## How to Play
1. **Start a New Game**: Click `NEW` to shuffle the deck and begin a fresh game.
2. **Undo Last Move**: Click `UNDO` to revert your previous move.
3. **Drag & Drop**: Use drag-and-drop to organize cards following traditional Solitaire rules.

## Usage
1. Clone the Repository `git clone https://github.com/trisDeveloper/solitaire`
2. Ensure you have Node.js and Yarn installed, then install the dependencies `yarn install`
3. Start the Next.js development server to run the app locally `yarn dev`
4. Open `http://localhost:6969/` in your browser to view the game.

### Contributing
Contributions are welcome! Please feel free to open issues or submit pull requests. Make sure to follow coding conventions and add tests if possible.

### License
MIT License. See the [LICENSE](./LICENSE) file for details.
