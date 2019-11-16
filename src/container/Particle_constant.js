export const Particle_constant = {
      "particles": {
          "number": {
              "value": 250,
              "density": {
                  "enable": false
              }
          },
          "size": {
              "value": 10,
              "random": true
          },
          "move": {
              "direction": "bottom",
              "out_mode": "out"
          },
          "line_linked": {
              "enable": false
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "remove"
              }
          },
          "modes": {
              "repulse": {
                  "distance":200,
                  "duration":0.4
              }
          }
      }
  }