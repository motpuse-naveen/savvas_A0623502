var appConfig ={
  "title": "Palabras que tienen el diptongo ie como hielo o ia como lluvia",
  "scoId": "A0623502",
  "game_Type": "game_1",
  "gameLocale": "es",
  "components": [
    "dndcomp"
  ],
  "en": {
    "score": "score",
    "teacherReport": "Teacher Report",
    "downloadReportBtn": "Download Full Report",
    "reportButtonText": "View report",
    "informationText": "Information",
    "instructionText": "Instructions",
    "reportTab1": "Overall progress",
    "reportTab2": "Sorting response",
    "timeSpent": "Time Spent",
    "totalQuestionsAttemptedV123": "Total words to sort",
    "totalQuestionsAttemptedV45": "Total questions attempted",
    "correctAnswersGivenV123": "Total words sorted correctly",
    "correctAnswersGivenV45": "Correct answers",
    "sNo": "S.No",
    "response": "Response",

    "answerStatus": "Correct answer",
    "restoreGame": "Resume game",
    "startNewGame": "Start a new game",
    "awesomeText": "Awesome!",
    "foundText": "You sorted",
    "outOfText": "of",
    "wordsText": "words.",
    "soundText": "sounds.",
    "mastersText": "You have mastered that sound.",
    "tryAgainText": "Try Again!",
    "tryAgainBtn": "Try Again",
    "playAgainText": "Play Again",
    "saveExitText": "Save & Exit",
    "studentAnswers": "Student Answers",
    "percentCorrect": "% Correct",
    "targetCorrect": "Target Sound",
    "dateCompleted": "Date completed",
    "targetAnswers": "Target Answers",
    "pictureOptions": "Picture Options",
    "reportTitle": "Sound Rainforest (Phonological Awareness)",
    "studentAns2Attempt": "Student Answer on 2nd Attempt",
    "studentAns1Attempt": "Student answer on 1st attempt",
    "answer1": "1st answer",
    "answer2": "2nd answer",
    "passing": "Passing = 70%",
    "sortSounds2": "Sort Sounds (2)",
    "reportEmptyMsg": "Report empty.",
    "reportEmptyMsg2": "Student must first play the game."
  },
  "es": {
    "score": "Puntuación",
    "teacherReport": "Informe del maestro",
    "downloadReportBtn": "Descarga el informe completo",
    "reportButtonText": "vista del informe",
    "informationText": "Información",
    "instructionText": "Instrucciones",
    "reportTab1": "Progreso general",
    "reportTab2": "Clasificación de respuesta",
    "timeSpent": "Tiempo transcurrido",
    "totalQuestionsAttemptedV123": "Palabras totales para ordenar",
    "totalQuestionsAttemptedV45": "Total Questions Attempted",
    "correctAnswersGivenV123": "Palabras totales ordenadas correctamente",
    "correctAnswersGivenV45": "Correct answers",
    "sNo": "S.No",
    "response": "Respuesta",
    "answerStatus": "Responder",
    "startNewGame": "Comience un nuevo juego",
    "awesomeText": "¡Excelente!",
    "foundText": "Has clasificado correctamente",
    "outOfText": "de",
    "wordsText": "palabras.",
    "soundText": "sonidos.",
    "mastersText": "Has dominado ese sonido.",
    "tryAgainText": "¡Inténtalo nuevamente!",
    "tryAgainBtn": "Inténtalo nuevamente",
    "playAgainText": "Jugar de nuevo",
    "saveExitText": "Guardar y salir",
    "studentAnswers": "Respuestas esperadas",
    "percentCorrect": "% correcto",
    "targetCorrect": "Sonido trabajado",
    "dateCompleted": "Fecha de finalización",
    "targetAnswers": "Respuestas esperadas",
    "pictureOptions": "Opciones (imágenes)",
    "reportTitle": "La selva de los sonidos (Conciencia fonológica)",
    "studentAns2Attempt": "Respuesta del estudiante en el 2do intento",
    "studentAns1Attempt": "Respuesta del estudiante en el 1er intento",
    "answer1": "1era respuesta",
    "answer2": "2da respuesta",
    "passing": "Aprobado con = 70%",
    "sortSounds2": "Clasificar sonidos (2)",
    "reportEmptyMsg": "Informe vacío.",
    "reportEmptyMsg2": "El estudiante debe jugar primero."
  },
  "data": {
    "acs": {
      "selector": ".appContainer .view",
      "attributes": {},
      "ignoreTab": true,
      "children": {
        "playButton": {
          "selector": ".playButtonBox",
          "attributes": {
            "aria-label": {
              "en": "Start the Game.",
              "es": "comenzar el juego"
            },
            "role": "button"
          },
          "data": {
            "keys": {
              "enter": {
                "action": "click"
              }
            }
          }
        },
        "teacherReport": {
          "selector": ".gameReportContainer",
          "attributes": {},
          "ignoreTab": true,
          "data": {
            "isCyclicTabTrap": "teacherReport"
          },
          "children": {
            "tr1": {
              "selector": ".gameReportContainer .gameReport",
              "attributes": {
                "role": "article",
                "aria-label": {
                  "en": "Report",
                  "es": "Report"
                }
              }
            },
            "tr2": {
              "selector": ".gameReportContainer .downloadReportBtn",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "download report",
                  "es": "download report"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            },
            "tr3": {
              "selector": ".gameReportContainer .reportCloseIcon",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "close report",
                  "es": "close report"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            }
          }
        },
        "scoreBar": {
          "selector": ".progressBarContainer"
        },
        "reportButton": {
          "selector": ".boxButton",
          "data": {
            "isCyclicTabTrap": "reportButton",
            "keys": {
              "enter": {
                "action": "click"
              }
            }
          },
          "attributes": {
            "aria-label": {
              "en": "View Report",
              "es": "Vista del informe"
            },
            "role": "button"
          },
          "children": {
            "tr1": {
              "selector": ".gameReportContainer .gameReport",
              "attributes": {
                "role": "article",
                "aria-label": {
                  "en": "Report",
                  "es": "Report"
                }
              }
            },
            "tr2": {
              "selector": ".gameReportContainer .downloadReportBtn",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "download report",
                  "es": "download report"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            },
            "tr3": {
              "selector": ".gameReportContainer .reportCloseIcon",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "close report",
                  "es": "close report"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              },
              "focusTgt": ".gameScreen .infoIcon"
            }
          }
        },
        "lnstruction": {
          "selector": ".gameScreen .infoPopup",
          "attributes": {
            "role": "button"
          },
          "data": {
            "isCyclicTabTrap": "lnstruction",
            "keys": {
              "enter": {
                "action": "click"
              }
            }
          },
          "children": {
            "ls3_1": {
              "selector": ".gameScreen .infoAudioIcon",
              "attributes": {
                "role": "button"
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  },
                  "tab": {
                    "mod": "shift",
                    "action": "closeIcon"
                  }
                }
              }
            },
            "ls3_2": {
              "selector": ".infoPopup p",
              "attributes": {
                "role": "definition"
              },
              "data": {
                "keys": {
                  "tab": {
                    "action": "closeIcon"
                  },
                  "enter": {
                    "action": "click",
                    "stopPropagation": true
                  }
                }
              }
            },
            "ls3_3": {
              "selector": ".gameScreen .closeIcon",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "close",
                  "es": "close"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              },
              "focusTgt": ".gameScreen .infoIcon"
            }
          }
        },
        "pictureTiles": {
          "selector": ".pictureBox .activeDraggable",
          "attributes": {
            "role": "img"
          },
          "naturalTabOrder": true,
          "data": {
            "keys": {
              "space": {
                "action": "selectDraggables",
                "autoFocus": "",
                "target": "self"
              },
              "enter": {
                "action": "selectDraggables",
                "autoFocus": "",
                "target": "self"
              }
            }
          }
        },
        "rewardPopup": {
          "selector": ".levelEndPopup",
          "attributes": {
            "role": "dialog"
          },
          "ignoreTab": true,
          "data": {
            "isCyclicTabTrap": "rewardPopup"
          },
          "children": {
            "pc0": {
              "selector": ".levelEndPopup .endHeading",
              "attributes": {
                "role": "article",
                "aria-label": {
                  "en": "<1>",
                  "es": "<1>"
                }
              },
              "dynamicLabel": [
                ".levelEndPopup .endHeading"
              ]
            },
            "pc1": {
              "selector": ".levelEndPopup .endMsg",
              "attributes": {
                "role": "article",
                "aria-label": {
                  "en": "<1>",
                  "es": "<1>"
                }
              },
              "dynamicLabel": [
                ".levelEndPopup .endMsg"
              ]
            },
            "pc1_1": {
              "selector": ".levelEndPopup .endExitBtn",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "save and exit",
                  "es": "save and exit"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            },
            "pc1_2": {
              "selector": ".levelEndPopup .endLvlBtn",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "next level",
                  "es": "next level"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            },
            "pc2": {
              "selector": ".levelEndPopup .btnTertiary",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "return to island map",
                  "es": "return to island map"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            }
          }
        },
        "savestatePopup": {
          "selector": ".popupContainer",
          "attributes": {
            "role": "dialog"
          },
          "ignoreTab": true,
          "data": {
            "isCyclicTabTrap": "savestatePopup"
          },
          "children": {
            "pc1": {
              "selector": ".popupContainer .textContainer",
              "attributes": {
                "role": "heading"
              }
            },
            "pc2": {
              "selector": ".popupContainer .cancelBtn",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "Resume Game",
                  "es": "Resume Game"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            },
            "pc3": {
              "selector": ".popupContainer .okBtn",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "Start a new game",
                  "es": "Start a new game"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            }
          }
        },
        "flies": {
          "selector": ".pictureBox .oddRhymeFly",
          "attributes": {},
          "data": {
            "keys": {
              "enter": {
                "action": "click"
              }
            }
          }
        },
        "chameleon": {
          "selector": ".chameleonInteraction",
          "attributes": {
            "aria-label": {
              "en": "Select your choice and then press enter to verify your answer.",
              "es": "Seleccione su elección y luego presione enter para verificar su respuesta."
            },
            "role": "button"
          },
          "data": {
            "keys": {
              "enter": {
                "action": "click"
              }
            }
          }
        },
        "dropZones": {
          "selector": ".dropZone",
          "ignoreTab": true,
          "data": {
            "isCyclicTabTrap": "dropZones"
          },
          "children": {
            "drop1": {
              "selector": ".dropZone[zoneid=1]",
              "attributes": {
                "role": "button"
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "dropDraggables",
                    "target": "self"
                  },
                  "escape": {
                    "action": "cancelDropByAccessibility"
                  }
                }
              }
            },
            "drop2": {
              "selector": ".dropZone[zoneid=2]",
              "attributes": {
                "role": "button"
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "dropDraggables",
                    "target": "self"
                  },
                  "escape": {
                    "action": "cancelDropByAccessibility"
                  }
                }
              }
            },
            "drop3": {
              "selector": ".dropZone[zoneid=3]",
              "attributes": {
                "role": "button"
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "dropDraggables",
                    "target": "self"
                  },
                  "escape": {
                    "action": "cancelDropByAccessibility"
                  }
                }
              }
            }
          }
        },
        "gameDialog": {
          "selector": ".gameOptionDialog",
          "data": {
            "ignoreTab": true,
            "isCyclicTabTrap": "gameDialog"
          },
          "children": {
            "element1": {
              "selector": "#restoreGame",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "Resume Game",
                  "es": "Reanudar juego"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            },
            "element2": {
              "selector": "#resetGame",
              "attributes": {
                "role": "button",
                "aria-label": {
                  "en": "Start a new game",
                  "es": "Comience un juego nuevo"
                }
              },
              "data": {
                "keys": {
                  "enter": {
                    "action": "click"
                  }
                }
              }
            }
          }
        }
      }
    },
    "captions": {
      "intro": {
        "en": "Test English",
        "es": "Test Spanish"
      },
      "letsgo": {
        "en": "Let's go collect some urchins. Choose a level.",
        "es": "Let's go collect some urchins. Choose a level."
      },
      "correct": {
        "en": "Correct",
        "es": "Correct"
      },
      "incorrect": {
        "en": "Incorrect",
        "es": "Incorrect"
      },
      "find": {
        "en": "Find ",
        "es": "Find "
      },
      "correctans": {
        "en": "The correct answer is ",
        "es": "The correct answer is "
      },
      "lvlUnlock": {
        "en": "You have unlocked a new level.",
        "es": "You have unlocked a new level."
      },
      "lowreward": {
        "en": "You can do it. Try again.",
        "es": "You can do it. Try again."
      },
      "medreward": {
        "en": "Nice going. Come back and try again.",
        "es": "Nice going. Come back and try again."
      },
      "endreward": {
        "en": "Congratulations!",
        "es": "Congratulations!"
      },
      "timerstart": {
        "en": "Find as many words as you can before the time runs out!",
        "es": "Find as many words as you can before the time runs out!"
      },
      "timerend": {
        "en": "Time up.",
        "es": "Time up."
      }
    },
    "phonemicDnd": {
      "dragOptions": {
        "helper": "original",
        "disabled": false,
        "revert": true,
        "cursor": "move"
      },
      "customDragOptions": {
        "containment": ".view"
      },
      "dropOptions": {
        "accept": ".draggable",
        "tolerance": "pointer",
        "greedy": true
      },
      "customDropOptions": {
        "dropContainer": ".view .droppable"
      }
    },
    "tincan": {
      "activity_name": "Phonemic",
      "grade": 1,
      "max_score": 4,
      "total_score": 0,
      "total_time_spent": 0,
      "percentage_completion": "0%",
      "isFirstTime": true,
      "restoreGame": false,
      "savedState": {
        "droppedPictures": [],
        "questionsPlayed": 1,
        "score": 1
      }
    },
    "game_1": {
      "game": {
        "infoAudios": [
          "SJ_info_A0623502_spa.mp3"
        ],
        "gameLocale": "es",
        "gameMode": 2,
        "displayConfig": 4,
        "correctAnswers": 4,
        "multipleQue": "false",
        "gameTopic": {
          "en": "Initial Sound",
          "es": "Sonidos intermedios"
        },
        "gameTitle2": {
          "en": "Sort One Sound",
          "es": "Clasificar sonidos"
        },
        "gameType": 1,
        "gameInfo": {
          "en": " Sort the sounds to feed the chameleon.",
          "es": " Clasifica los sonidos para alimentar al camaleón."
        },
        "gameInfoAudio": {
          "en": "assets/audios/splashbegin.mp3",
          "es": "assets/audios/SJ_info_A0623502_spa.mp3"
        },
        "info": {
          "en": "Drag picture words that begin with the same sound as heart into the box under the picture of the heart. Drag picture words that do not begin with the same sound as heart into the other box. Click on a picture to hear its name.",
          "es": "Arrastra las imágenes de las palabras que tienen el diptongo <i>ie</i> como <i>hielo</i> al recuadro con la imagen de <i>hielo</i>. Arrastra las imágenes de las palabras que tienen el diptongo <i>ia</i> como <i>lluvia</i> al recuadro con la imagen de <i>lluvia</i>. Haz clic en cada imagen para escuchar su nombre."
        },
        "infoAudio": {
          "es": {
            // "audio1": "assets/audios/gameSpecific/lluvia.mp3",
            // "audio2": "assets/audios/gameSpecific/lluvia.mp3"
          }
        },
        "chances": 1,
        "questionDataV123": [
          {
            "word": "lluvia",
            "title": "/ie/, /ia/ y /io/",
            "audio": "assets/audios/gameSpecific/lluvia.mp3",
            "image": "assets/images/gameSpecific/lluvia_Anchor.png",
            "zoneId": 1
          },
          {
            "word": "hielo",
            "title": "Otros sonidos intermedios",
            "audio": "assets/audios/gameSpecific/hielo.mp3",
            "image": "assets/images/gameSpecific/Ice_berg_Anchor.png",
            "zoneId": 2
          }
        ],
        "answerDataV123": [
          {
            "word": "siete",
            "audio": "assets/audios/gameSpecific/siete.mp3",
            "image": "assets/images/gameSpecific/Seven.png",
            "relativeZone": 2,
            "uniqueId": 0
          },
          {
            "word": "piano",
            "audio": "assets/audios/gameSpecific/piano.mp3",
            "image": "assets/images/gameSpecific/piano.png",
            "relativeZone": 1,
            "uniqueId": 1
          },
          {
            "word": "hiena",
            "audio": "assets/audios/gameSpecific/hiena.mp3",
            "image": "assets/images/gameSpecific/hiena.png",
            "relativeZone": 2,
            "uniqueId": 2
          },
          {
            "word": "novia",
            "audio": "assets/audios/gameSpecific/novia.mp3",
            "image": "assets/images/gameSpecific/novia.png",
            "relativeZone": 1,
            "uniqueId": 3
          }
        ]
      }
    }
  },
  "TOC": "G1, U4, W4, L1\r-G1, U5, W4, L3",
  "precacheimages": [
    "assets\\images\\A.png",
    "assets\\images\\anchor_blank.png",
    "assets\\images\\audio.png",
    "assets\\images\\audioButton.png",
    "assets\\images\\audioButton1.png",
    "assets\\images\\audioButtonOff.png",
    "assets\\images\\audioButtonOff1.png",
    "assets\\images\\blast.png",
    "assets\\images\\cancelBtn.png",
    "assets\\images\\cancelBtnHover.png",
    "assets\\images\\cc.PNG",
    "assets\\images\\cc.svg",
    "assets\\images\\ccOff.PNG",
    "assets\\images\\ccOff.svg",
    "assets\\images\\chameleonGreen.PNG",
    "assets\\images\\chamEye.png",
    "assets\\images\\checking0001.png",
    "assets\\images\\checking0002.png",
    "assets\\images\\correct1.png",
    "assets\\images\\en\\gameName.png",
    "assets\\images\\en\\gameNamebkp.png",
    "assets\\images\\en\\playButton.png",
    "assets\\images\\endGameAnim.png",
    "assets\\images\\es\\gameName.png",
    "assets\\images\\es\\playButton.png",
    "assets\\images\\Flower_1.png",
    "assets\\images\\Flower_2.png",
    "assets\\images\\Flower_3.png",
    "assets\\images\\Flower_4.png",
    "assets\\images\\Flower_5.png",
    "assets\\images\\Fly.png",
    "assets\\images\\gameName.png",
    "assets\\images\\gameSpecific\\Ice_berg_Anchor.png",
    "assets\\images\\gameSpecific\\NoIce_berg.png",
    "assets\\images\\gameSpecific\\piano.png",
    "assets\\images\\gameSpecific\\Sand.png",
    "assets\\images\\gameSpecific\\Seven.png",
    "assets\\images\\gameSpecific\\Skirt.png",
    "assets\\images\\green.png",
    "assets\\images\\info.png",
    "assets\\images\\infoOff.png",
    "assets\\images\\Intro_graphic_card_0.png",
    "assets\\images\\Intro_graphic_card_1.png",
    "assets\\images\\Intro_graphic_card_10.png",
    "assets\\images\\Intro_graphic_card_11.png",
    "assets\\images\\Intro_graphic_card_12.png",
    "assets\\images\\Intro_graphic_card_13.png",
    "assets\\images\\Intro_graphic_card_14.png",
    "assets\\images\\Intro_graphic_card_15.png",
    "assets\\images\\Intro_graphic_card_16.png",
    "assets\\images\\Intro_graphic_card_17.png",
    "assets\\images\\Intro_graphic_card_3.png",
    "assets\\images\\Intro_graphic_card_4.png",
    "assets\\images\\Intro_graphic_card_5.png",
    "assets\\images\\Intro_graphic_card_6.png",
    "assets\\images\\Intro_graphic_card_8.png",
    "assets\\images\\Intro_graphic_card_9.png",
    "assets\\images\\mainBg.jpg",
    "assets\\images\\mainBg.png",
    "assets\\images\\mainBg2.png",
    "assets\\images\\playButton.png",
    "assets\\images\\pp_base.png",
    "assets\\images\\red.png",
    "assets\\images\\report.png",
    "assets\\images\\reportButton.PNG",
    "assets\\images\\reset.png",
    "assets\\images\\resetOff.png",
    "assets\\images\\resume.png",
    "assets\\images\\scoreboard.png",
    "assets\\images\\signbkp.png",
    "assets\\images\\sign_onwhitebox0001.png",
    "assets\\images\\sign_onwhitebox0003.png",
    "assets\\images\\Three.png",
    "assets\\images\\wrong1.png"
  ]
};