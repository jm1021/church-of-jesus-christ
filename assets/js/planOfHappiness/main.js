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
        INIT_POSITION: { x: 0, y: 0 }, 
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
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "“I saw the hosts of the dead, both small and great” (D&C 138:11). We lived before we were born.",
        "We were organized before the world was created to fulfill God’s purposes (D&C 138:53-56).",
        "Choice spirits were held in reserve to come forth in the latter days (D&C 138:56).",
        "Jesus Christ was prepared from the foundation of the world to redeem us.",
        "We used our agency in the premortal world—this is why we’re here now.",
        "God prepared you in the premortal life for missions you would fulfill on Earth."
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

    const sprite_src_earth = path + "/images/gamify/earth.png";
    const sprite_greet_earth = "Welcome to the earth Existence";
    const sprite_data_earth = {
    id: 'earth',
    greeting: sprite_greet_earth,
    src: sprite_src_earth,
    SCALE_FACTOR: 3,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 2 / 80), y: (height * 26 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.3, heightPercentage: 0.55 },
    // Add dialogues array for random messages
    dialogues: [
        "Earth life is your chance to grow through choice and experience.",
        "“All who have died without a knowledge of the gospel… shall be heirs of the celestial kingdom” (D&C 137:7).",
        "Your choices here shape your eternal progression.",
        "“The Lord will judge all men according to their works and desires of their hearts” (D&C 137:9).",
        "Christ’s Atonement gives power to overcome every earthly trial.",
        "Mortality is the school of experience — your spirit is learning what it cannot learn anywhere else."
    ],
    reaction: function() {
        // Use dialogue system instead of alert
        if (this.dialogueSystem) {
            this.showReactionDialogue();
        } else {
            console.log(sprite_greet_earth);
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
    SCALE_FACTOR: 5,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 28 / 80), y: (height * 15 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "“The faithful elders… continue their labors in the Spirit world” (D&C 138:57).",
        "The Spirit World is divided into Paradise and Spirit Prison (D&C 138).",
        "Christ organized the preaching of the gospel among the dead (D&C 138:30).",
        "“The dead who repent will be redeemed, through obedience to the ordinances of the house of God” (D&C 138:58).",
        "No one is stuck—missionary work continues here!",
        "The righteous rest in paradise; others await light and truth in spirit prison.",
        "Everyone will hear the gospel, whether in this life or the next."
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
    id: 'celestial',
    greeting: sprite_greet_sun,
    src: sprite_src_sun,
    SCALE_FACTOR: 4,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 65 / 80), y: (height * 5 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "“I saw the celestial kingdom of God” (D&C 137:1).",
        "“The glory of God was beyond description” (D&C 137:3).",
        "Children who die before age of accountability inherit celestial glory (D&C 137:10).",
        "Alvin stood in celestial glory — showing God's mercy extends beyond mortal life (D&C 137:5).",
        "Those who would have received the gospel with all their hearts are heirs of celestial glory (D&C 137:7–8).",
        "Celestial glory is for the pure in heart, through Christ’s Atonement."
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
    id: 'terrestrial',
    greeting: sprite_greet_moon,
    src: sprite_src_moon,
    SCALE_FACTOR: 4,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 65 / 80), y: (height * 16 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "The Terrestrial Kingdom is a place for honorable people who were not valiant in the testimony of Jesus.",
        "It is a kingdom of great glory, though not the same as the Celestial.",
        "People in the Terrestrial Kingdom receive the presence of Jesus Christ.",
        "Those here accepted the gospel later or were not fully committed in mortality.",
        "It is a state of peace and learning beyond mortal comprehension."
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
    id: 'telestial',
    greeting: sprite_greet_stars,
    src: sprite_src_stars,
    SCALE_FACTOR: 4,
    ANIMATION_RATE: 100,
    INIT_POSITION: { x: (width * 65 / 80), y: (height * 28 / 40)},
    orientation: {rows: 1, columns: 1 },
    hitbox: { widthPercentage: 0.1, heightPercentage: 0.1 },
    // Add dialogues array for random messages
    dialogues: [
        "The Telestial Kingdom is a kingdom of glory reserved for those who did not receive the gospel.",
        "People here are visited by the Holy Ghost, but not by the Son or the Father.",
        "Even the Telestial glory surpasses all understanding.",
        "Those here are resurrected and rewarded according to their works.",
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
        id: 'OuterDarkness',
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
            "Outer darkness if for those who commit the unpardonable sin.",
            "Outer darkness is a state of being completely cut off from God.",
            "Those in outer darkness do not receive a resurrection or any glory.",
            "It is a place of misery and regret beyond mortal comprehension."
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
      { class: Npc, data: sprite_data_earth }, 
      { class: Npc, data: sprite_data_spirtWorld }, 
      { class: Npc, data: sprite_data_sun }, 
      { class: Npc, data: sprite_data_moon }, 
      { class: Npc, data: sprite_data_stars }, 
      { class: Npc, data: sprite_data_endportal } 
    ];
  }

}

export default GameLevelDesert;