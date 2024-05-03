import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useDataStore = defineStore('data', () => {
    const animationSelected = ref(null)
    const searchTerm = ref('')
    const activeIndex = ref(null)
    
    const animations = [
      {
        id: "loader",
        name: "Loader 1",
        text: "",
        attribute: "id",
        html: `<div id="loader"></div>`,
        css: `
          #loader {
            margin: 50px auto;
            position: relative;
            animation: ball 10s linear infinite;
          }
    
          #loader:after,
          #loader:before {
            content: ' ';
            display: block;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: deepskyblue;
            position: absolute;
            top: 0px;
            left: 50%;
          }
    
          #loader:after {
            top: auto;
            bottom: 0px;
          }
    
          @keyframes ball {
            0% {
              transform: rotate(0deg);
            }
    
            100% {
              transform: rotate(360deg);
            }
          }
        `,
        tags: ["loader"]
      },
      {
        id: "loader2",
        name: "Loader 2",
        text: "Whheee...",
        attribute: "id",
        html: `<div id="loader2"></div>`,
        css: `
          #loader2 {
            display: flex;
            align-self: center;
            background: #92B901;
            color: #ffffff;
            font-weight: bold;
            font-size: 1.5em;
            line-height: 47px;
            border-radius: 10px;
            margin: 0 auto;
            animation: spinner 2s linear infinite;
            align-items: center;
            padding: 20px;
          }
    
          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }
    
            25% {
              transform: rotate(0deg);
            }
    
            50% {
              transform: rotate(0deg);
            }
    
            55% {
              transform: rotate(0deg);
            }
    
            70% {
              transform: rotate(0deg);
              background: #1ec7e6;
            }
    
            100% {
              transform: rotate(-360deg);
            }
          }
        `,
        tags: ["loader", "spinner"]
      },
      {
        id: "loader3",
        name: "Loader 3",
        text: "",
        attribute: "id",
        html: `<div id="loader3"></div>`,
        css: `
          #loader3 {
            width: 50%;
            height: 50%;
            position: relative;
            animation: example 5s infinite;
          }
    
          @keyframes example {
            0% {
              background-color: red;
              left: 0px;
              top: 0px;
            }
    
            25% {
              background-color: yellow;
              left: 50%;
              top: 0px;
            }
    
            50% {
              background-color: blue;
              left: 50%;
              top: 50%;
            }
    
            75% {
              background-color: green;
              left: 0px;
              top: 50%;
            }
    
            100% {
              background-color: red;
              left: 0px;
              top: 0px;
            }
          }
        `,
        tags: ["loader"]
      },
      {
        id: "sunny",
        name: "Sunny Loader",
        text: "",
        attribute: "id",
        html: `<div id="sunny"></div>`,
        css: `
          #sunny {
            height: 100px;
            width: 100px;
            margin: 0 auto;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            text-align: center;
            font-weight: bold;
            font-size: 1em;
            line-height: 100px;
            border-radius: 50%;
            animation: sun 1s linear infinite;
          }
    
          #sunny:before {
            content: 'Sunny day!';
          }
    
          @keyframes sun {
            0% {
              background-color: orangered;
            }
    
            50% {
              width: 108px;
              height: 108px;
              background: orange;
            }
    
            100% {
              background-color: orangered;
            }
          }
        `,
        tags: ["sunny"]
      },
      {
        id: "rotate",
        name: "rotate",
        text: "Rotating",
        attribute: "class",
        html: `<div class="rotate">Rotating</div>`,
        css: `
          .rotate {
            display: flex;
            animation: rotate 5s linear infinite;
            margin: 0 auto;
            color: #868686;
            height: 120px;
            align-self: center;
          }
          
          @keyframes rotate {
              from {
                  transform: rotate(0deg);
              }
          
              to {
                  transform: rotate(360deg);
              }
          }
        `,
        tags: ["spinner"]
      },
      {
        id: "bounce",
        name: "bounce",
        text: "Bounce",
        attribute: "class",
        html: `<div class="bounce">Bounce</div>`,
        css: `
          .bounce {
              display: flex;
              animation: bounce 1s ease infinite;
              justify-content: center;
              align-self: center;
              margin: 0 auto;
              color: #868686;
          }
          
          @keyframes bounce {
          
              0%,
              100% {
                  transform: translateY(0);
              }
          
              50% {
                  transform: translateY(-20px);
              }
          }
        `,
        tags: ["bounce"]
      },
    ];

    const selectedAnimation = (index) => {
      animationSelected.value = animations[index]
    }

    // const searchAnimation = computed(() => {
    //   return animations.filter(x = x.tags.include())
    // })

    return { animations, searchTerm, animationSelected, selectedAnimation }
    
})
