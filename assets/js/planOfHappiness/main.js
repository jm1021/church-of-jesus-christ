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
    const image_src_desert = path + "/images/gamify/planOfHappiness.png"; // be sure to include the path
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

    const sprite_src_premortal = path + "/images/gamify/premortal.png";
    const sprite_greet_premortal = "Welcome to the Premortal Existence";
    const sprite_data_premortal = {
    id: 'premortal',
    greeting: sprite_greet_premortal,
    src: sprite_src_premortal,
    SCALE_FACTOR: 3,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 2 / 80), y: (height * 0 / 40)},
    orientation: {rows: 1, columns: 1 },
    down: {row: 0, start: 0, columns: 3 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "The premortal existence is where we lived before we were born on Earth.",
        "In the premortal existence, we lived as spirit children of God.",
        "We had the opportunity to learn and grow in the premortal existence.",
        "Jesus Christ was chosen to be our Savior in the premortal existence.",
        "We made a plan with God to come to Earth and receive a physical body.",
        "The premortal existence is a time of preparation for our mortal life.",
        "We were taught about agency and the importance of making choices in the premortal existence.",
    ],
    reaction: function() {
        // Use dialogue system instead of alert
        if (this.dialogueSystem) {
            this.showReactionDialogue();
        } else {
            console.log(sprite_greet_premortal);
        }
    },
    interact: function() {
        // Show random dialogue message
        if (this.dialogueSystem) {
            this.showRandomDialogue();
        }
    }
    };

    const sprite_src_spirtWorld = path + "/images/gamify/spiritWorld.png";
    const sprite_greet_spirtWorld = "Welcome to the spirtWorld Existence";
    const sprite_data_spirtWorld = {
    id: 'spirtWorld',
    greeting: sprite_greet_spirtWorld,
    src: sprite_src_spirtWorld,
    SCALE_FACTOR: 4,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 28 / 80), y: (height * 14 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "The Spirit world is where we await the resurrection.",
        "In the Spirit world, we continue to learn and grow.",
        "The Spirit world is divided into paradise and spirit prison.",
        "Those who accepted the gospel in life go to paradise in the Spirit world.",
        "Those who did not accept the gospel in life go to spirit prison in the Spirit world.",
        "Missionary work is done in the Spirit world to teach those in spirit prison.",
        "Christ organized the work in the Spirit world after His resurrection.",
    ],
    reaction: function() {
        // Use dialogue system instead of alert
        if (this.dialogueSystem) {
            this.showReactionDialogue();
        } else {
            console.log(sprite_greet_spirtWorld);
        }
    },
    interact: function() {
        // Show random dialogue message
        if (this.dialogueSystem) {
            this.showRandomDialogue();
        }
    }
    };

    const sprite_src_sun = path + "/images/gamify/sun.png";
    const sprite_greet_sun = "Welcome to the Celestial Kingdom";
    const sprite_data_sun = {
    id: 'sun',
    greeting: sprite_greet_sun,
    src: sprite_src_sun,
    SCALE_FACTOR: 4,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 65 / 80), y: (height * 0 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "There are 3 degress in the Celestial Kingdom.",
        "Celestial Marriage is called the New and Everlasting Covenant.",
        "God and Jesus Christ live in the Celestial Kingdom.",
        "The Celestial Kingdom is the highest degree of glory.",
        "Those who inherit the Celestial Kingdom will live with God and Jesus Christ.",
        "Families can be together forever in the Celestial Kingdom.",
        "The Celestial Kingdom is prepared for those who love God and keep His commandments.",
        "The Celestial Kingdom is a place of peace, joy, and eternal progression."  
    ],
    reaction: function() {
        // Use dialogue system instead of alert
        if (this.dialogueSystem) {
            this.showReactionDialogue();
        } else {
            console.log(sprite_greet_sun);
        }
    },
    interact: function() {
        // Show random dialogue message
        if (this.dialogueSystem) {
            this.showRandomDialogue();
        }
    }
    };

    const sprite_src_moon = path + "/images/gamify/moon.png";
    const sprite_greet_moon = "Welcome to the Terrestrial Kingdom";
    const sprite_data_moon = {
    id: 'moon',
    greeting: sprite_greet_moon,
    src: sprite_src_moon,
    SCALE_FACTOR: 4,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 65 / 80), y: (height * 13 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "The Terrestrial Kingdom is the second degree of glory.",
        "Those who inherit the Terrestrial Kingdom are honorable people who were not valiant in the testimony of Jesus.",
        "The Terrestrial Kingdom is a place of glory, but not the highest glory.",
        "People in the Terrestrial Kingdom will receive the presence of Jesus Christ, but not the presence of God the Father.",
        "The Terrestrial Kingdom is a place of peace and happiness for those who lived honorable lives.",
        "The Terrestrial Kingdom is prepared for those who did not fully accept the gospel of Jesus Christ in this life.",
        "The Terrestrial Kingdom is a place where people can continue to learn and grow."
    ],
    reaction: function() {
        // Use dialogue system instead of alert
        if (this.dialogueSystem) {
            this.showReactionDialogue();
        } else {
            console.log(sprite_greet_moon);
        }
    },
    interact: function() {
        // Show random dialogue message
        if (this.dialogueSystem) {
            this.showRandomDialogue();
        }
    }
    };

    const sprite_src_stars = path + "/images/gamify/stars.png";
    const sprite_greet_stars = "Welcome to the Telestial Kingdom";
    const sprite_data_stars = {
    id: 'stars',
    greeting: sprite_greet_stars,
    src: sprite_src_stars,
    SCALE_FACTOR: 4,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 65 / 80), y: (height * 25 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "The Telestial Kingdom is the third degree of glory.",
        "Those who inherit the Telestial Kingdom are people who did not accept the gospel of Jesus Christ in this life.",
        "People in the Telestial Kingdom will not receive the presence of Jesus Christ or God the Father.",
        "The Telestial Kingdom is a place of happiness for those who lived sinful lives.",
        "The Telestial Kingdom is prepared for those who did not repent and accept the gospel of Jesus Christ in this life.",
        "The Telestial Kingdom is a place where people can continue to learn and grow."
    ],
    reaction: function() {
        // Use dialogue system instead of alert
        if (this.dialogueSystem) {
            this.showReactionDialogue();
        } else {
            console.log(sprite_greet_stars);
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
        SCALE_FACTOR: 8,
        ANIMATION_RATE: 100,
        pixels: {width: 2029, height: 2025},
        INIT_POSITION: { x: (width * 30 / 40), y: (height * 35 / 40)},
        orientation: {rows: 1, columns: 1 },
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
      { class: Npc, data: sprite_data_premortal }, 
      { class: Npc, data: sprite_data_spirtWorld }, 
      { class: Npc, data: sprite_data_sun }, 
      { class: Npc, data: sprite_data_moon }, 
      { class: Npc, data: sprite_data_stars }, 
      { class: Npc, data: sprite_data_endportal } 
    ];
  }

}

export default GameLevelDesert;