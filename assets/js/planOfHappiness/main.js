// To build GameLevels, each contains GameObjects from below imports
import GamEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';
import Npc from './GameEngine/Npc.js';
import DialogueSystem from './GameEngine/DialogueSystem.js';

class GameLevelDesert {
  constructor(gameEnv) {
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_src_desert = path + "/images/gamify/desert.png"; // be sure to include the path
    const image_data_desert = {
        name: 'desert',
        greeting: "Welcome to the desert!  It is hot and dry here, but there are many adventures to be had!",
        src: image_src_desert,
        pixels: {height: 580, width: 1038}
    };


    // Player data for Chillguy
    const sprite_src_chillguy = path + "/images/gamify/chillguy.png"; // be sure to include the path
    const CHILLGUY_SCALE_FACTOR = 5;
    const sprite_data_chillguy = {
        id: 'Chill Guy',
        greeting: "Hi I am Chill Guy, the desert wanderer. I am looking for wisdom and adventure!",
        src: sprite_src_chillguy,
        SCALE_FACTOR: CHILLGUY_SCALE_FACTOR,
        STEP_FACTOR: 1000,
        ANIMATION_RATE: 50,
        INIT_POSITION: { x: 0, y: height - (height/CHILLGUY_SCALE_FACTOR) }, 
        pixels: {height: 384, width: 512},
        orientation: {rows: 3, columns: 4 },
        down: {row: 0, start: 0, columns: 3 },
        downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16 },
        downLeft: {row: 2, start: 0, columns: 3, rotate: -Math.PI/16 },
        left: {row: 2, start: 0, columns: 3 },
        right: {row: 1, start: 0, columns: 3 },
        up: {row: 3, start: 0, columns: 3 },
        upLeft: {row: 2, start: 0, columns: 3, rotate: Math.PI/16 },
        upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16 },
        hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
        keypress: { up: 87, left: 65, down: 83, right: 68 } // W, A, S, D
    };

      const sprite_src_octocat = path + "/images/gamify/octocat.png";
      const sprite_greet_octocat = "Hi I am Octocat! I am the GitHub code code code collaboration mascot";
      const sprite_data_octocat = {
          id: 'Octocat',
          greeting: sprite_greet_octocat,
          src: sprite_src_octocat,
          SCALE_FACTOR: 10,
          ANIMATION_RATE: 50,
          pixels: {height: 301, width: 801},
          INIT_POSITION: { x: (width / 4), y: (height / 4)},
          orientation: {rows: 1, columns: 4 },
          down: {row: 0, start: 0, columns: 3 },
          hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
          // Add dialogues array for random messages
          dialogues: [
              "GitHub helps millions of developers collaborate on code.",
              "Pull requests are how we suggest changes to repositories.",
              "Repositories are like folders that store your project files.",
              "GitHub uses Git, a version control system created by Linus Torvalds.",
              "Branches let you work on features without affecting the main codebase.",
              "I'm not just a cat! I'm part octopus too - perfect for multitasking.",
              "GitHub Actions helps automate your workflows.",
              "Collaboration is at the heart of open source development."
          ],
          reaction: function() {
              // Use dialogue system instead of alert
              if (this.dialogueSystem) {
                  this.showReactionDialogue();
              } else {
                  console.log(sprite_greet_octocat);
              }
          },
          interact: function() {
              // Show random dialogue message
              if (this.dialogueSystem) {
                  this.showRandomDialogue();
              }
          }
      };
    
      const sprite_src_endportal = path + "/images/gamify/exitportalfull.png";
      const sprite_greet_endportal = "Teleport to the End? Press E";
      const sprite_data_endportal = {
          id: 'End Portal',
          greeting: sprite_greet_endportal,
          src: sprite_src_endportal,
          SCALE_FACTOR: 6,
          ANIMATION_RATE: 100,
          pixels: {width: 2029, height: 2025},
          INIT_POSITION: { x: (width * 2 / 5), y: (height * 1 / 10)},
          orientation: {rows: 1, columns: 1 },
          down: {row: 0, start: 0, columns: 1 },
          hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },
          // Add dialogues array for random messages
          dialogues: [
              "The End dimension awaits brave explorers.",
              "Through this portal lies a realm of floating islands and strange creatures.",
              "The Enderman guards ancient treasures. Who knows what else lurks beyond this portal?",
              "Many have entered. Few have returned.",
              "The void calls to you. Will you answer?",
              "The End is not truly the end, but a new beginning.",
              "Strange things await you beyond this portal..",
              "Prepare yourself. The journey beyond won't be easy."
          ],
          reaction: function() {
              // Don't show any reaction dialogue - this prevents the first alert
              // The interact function will handle all dialogue instead
          },
          interact: function() {
              // Clear any existing dialogue first to prevent duplicates
              if (this.dialogueSystem && this.dialogueSystem.isDialogueOpen()) {
                  this.dialogueSystem.closeDialogue();
              }
              
              // Create a new dialogue system if needed
              if (!this.dialogueSystem) {
                  this.dialogueSystem = new DialogueSystem();
              }
              
              // Show portal dialogue with buttons
              this.dialogueSystem.showDialogue(
                  "Do you wish to enter The End dimension?",
                  "End Portal",
                  this.spriteData.src
              );
              
              // Add buttons directly to the dialogue
              this.dialogueSystem.addButtons([
                  {
                      text: "Enter Portal",
                      primary: true,
                      action: () => {
                          this.dialogueSystem.closeDialogue();
                          
                          // Clean up the current game state
                          if (gameEnv && gameEnv.gameControl) {
                              // Store reference to the current game control
                              const gameControl = gameEnv.gameControl;
                              
                              // Create fade overlay for transition
                              const fadeOverlay = document.createElement('div');
                              Object.assign(fadeOverlay.style, {
                                  position: 'fixed',
                                  top: '0',
                                  left: '0',
                                  width: '100%',
                                  height: '100%',
                                  backgroundColor: '#000',
                                  opacity: '0',
                                  transition: 'opacity 1s ease-in-out',
                                  zIndex: '9999'
                              });
                              document.body.appendChild(fadeOverlay);
                              
                              console.log("Starting End level transition...");
                              
                              // Fade in
                              requestAnimationFrame(() => {
                                  fadeOverlay.style.opacity = '1';
                                  
                                  // After fade in, transition to End level
                                  setTimeout(() => {
                                      // Clean up current level properly
                                      if (gameControl.currentLevel) {
                                          // Properly destroy the current level
                                          console.log("Destroying current level...");
                                          gameControl.currentLevel.destroy();
                                          
                                          // Force cleanup of any remaining canvases
                                          const gameContainer = document.getElementById('gameContainer');
                                          const oldCanvases = gameContainer.querySelectorAll('canvas:not(#gameCanvas)');
                                          oldCanvases.forEach(canvas => {
                                              console.log("Removing old canvas:", canvas.id);
                                              canvas.parentNode.removeChild(canvas);
                                          });
                                      }
                                      
                                      console.log("Setting up End level...");
                                      
                                      // IMPORTANT: Store the original level classes for return journey
                                      gameControl._originalLevelClasses = gameControl.levelClasses;
                                      
                                      // Change the level classes to GameLevelEnd
                                      gameControl.levelClasses = [GameLevelEnd];
                                      gameControl.currentLevelIndex = 0;
                                      
                                      // Make sure game is not paused
                                      gameControl.isPaused = false;
                                      
                                      // Start the End level with the same control
                                      console.log("Transitioning to End level...");
                                      gameControl.transitionToLevel();
                                      
                                      // Fade out overlay
                                      setTimeout(() => {
                                          fadeOverlay.style.opacity = '0';
                                          setTimeout(() => {
                                              document.body.removeChild(fadeOverlay);
                                          }, 1000);
                                      }, 500);
                                  }, 1000);
                              });
                          }
                      }
                  },
                  {
                      text: "Not Ready",
                      action: () => {
                          this.dialogueSystem.closeDialogue();
                      }
                  }
              ]);
          }
      }


    // List of objects defnitions for this level
    this.classes = [
      { class: GamEnvBackground, data: image_data_desert },
      { class: Player, data: sprite_data_chillguy },
      { class: Npc, data: sprite_data_octocat },
      { class: Npc, data: sprite_data_endportal } 
    ];
  }

}

export default GameLevelDesert;