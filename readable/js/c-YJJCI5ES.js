const r = function () {
  ;
  let VP = true;
  return function (VG, VR) {
    const Vx = VP ? function () {
      if (VR) {
        const Vh = VR.apply(VG, arguments);
        VR = null;
        return Vh;
      }
    } : function () {};
    VP = false;
    return Vx;
  };
}();
import { Da as F, X as i, fb as g, j as R, qa as h, s as m, t, v as c } from "./c-FMIAGHDE.js";
import { a as V0, l as V1 } from "./c-PIEPTJTC.js";
V1();
V1();
var V2 = {
  items: {
    1: {
      id: 1,
      ch: 1,
      name: "Darker Candy",
      desc: "Heals#120HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 120,
        bych: {
          1: 40,
          2: 40,
          3: 40,
          4: 120,
          5: 120
        }
      },
      battle: true
    },
    2: {
      id: 2,
      ch: 1,
      name: "ReviveMint",
      desc: "Heal#Downed#Ally",
      target: 1,
      usable: 1,
      effect: {
        revive: "mint"
      },
      battle: true
    },
    3: {
      id: 3,
      ch: 1,
      name: "Glowshard",
      desc: "Sell#at#shops",
      target: 0,
      usable: 0,
      effect: {},
      battle: true
    },
    4: {
      id: 4,
      ch: 1,
      name: "Manual",
      desc: "Read#out of#battle",
      target: 2,
      usable: 0,
      effect: {},
      battle: true
    },
    5: {
      id: 5,
      ch: 1,
      name: "BrokenCake",
      desc: "Heals#20HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 20
      },
      battle: true
    },
    6: {
      id: 6,
      ch: 1,
      name: "Top Cake",
      desc: "Heals#team#160HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 160
      },
      battle: true
    },
    7: {
      id: 7,
      ch: 1,
      name: "Spincake",
      desc: "Heals#team#140HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        bych: {
          1: 80,
          2: 140,
          3: 150,
          4: 160,
          5: 180
        }
      },
      battle: true
    },
    8: {
      id: 8,
      ch: 1,
      name: "Darkburger",
      desc: "Heals#70HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 70
      },
      battle: true
    },
    9: {
      id: 9,
      ch: 1,
      name: "LancerCookie",
      desc: "Heals#50HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 50
      },
      battle: true
    },
    10: {
      id: 10,
      ch: 1,
      name: "GigaSalad",
      desc: "Heals#4HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 4
      },
      battle: true
    },
    11: {
      id: 11,
      ch: 1,
      name: "ClubsSandwich",
      desc: "Heals#team#70HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 70,
        bych: {
          1: 30,
          2: 70,
          3: 70,
          4: 70,
          5: 70
        }
      },
      battle: true
    },
    12: {
      id: 12,
      ch: 1,
      name: "HeartsDonut",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 20,
          2: 80,
          3: 50,
          4: 30
        }
      },
      battle: true
    },
    13: {
      id: 13,
      ch: 1,
      name: "ChocDiamond",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 80,
          2: 20,
          3: 50,
          4: 70
        }
      },
      battle: true
    },
    14: {
      id: 14,
      ch: 1,
      name: "Favwich",
      desc: "Heals#ALL HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 500
      },
      battle: true
    },
    15: {
      id: 15,
      ch: 1,
      name: "RouxlsRoux",
      desc: "Heals#50 HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 50,
        bych: {
          1: 60,
          2: 50,
          3: 50,
          4: 50,
          5: 50
        }
      },
      battle: true
    },
    16: {
      id: 16,
      ch: 2,
      name: "CD Bagel",
      desc: "Heals#80 HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80
      },
      battle: true
    },
    17: {
      id: 17,
      ch: 2,
      name: "Mannequin",
      desc: "Useless",
      target: 0,
      usable: 0,
      effect: {},
      battle: true
    },
    18: {
      id: 18,
      ch: 2,
      name: "Kris Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 40,
          2: 120,
          3: 120,
          4: 70
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    19: {
      id: 19,
      ch: 2,
      name: "Noelle Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 70,
          2: 120,
          3: 50,
          4: 40
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    20: {
      id: 20,
      ch: 2,
      name: "Ralsei Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 60,
          2: 120,
          3: 40,
          4: 50
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    21: {
      id: 21,
      ch: 2,
      name: "Susie Tea",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 120,
          2: 40,
          3: 120,
          4: 400
        },
        ch2only: true,
        heal: 10
      },
      battle: true
    },
    22: {
      id: 22,
      ch: 2,
      name: "DD-Burger",
      desc: "Heals#60HP 2x",
      target: 1,
      usable: 1,
      replace: 8,
      effect: {
        heal: 60,
        replace: 8
      },
      battle: true
    },
    23: {
      id: 23,
      ch: 2,
      name: "LightCandy",
      desc: "Heals#120HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 120
      },
      battle: true
    },
    24: {
      id: 24,
      ch: 2,
      name: "ButJuice",
      desc: "Heals#100HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 100
      },
      battle: true
    },
    25: {
      id: 25,
      ch: 2,
      name: "SpagettiCode",
      desc: "Heals#team#30HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 30
      },
      battle: true
    },
    26: {
      id: 26,
      ch: 2,
      name: "JavaCookie",
      desc: "Healing#varies",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 100
        },
        dflt: 90
      },
      battle: true
    },
    27: {
      id: 27,
      ch: 2,
      name: "TensionBit",
      desc: "Raises#TP#32%",
      target: 2,
      usable: 1,
      effect: {
        tp: 80
      },
      battle: true
    },
    28: {
      id: 28,
      ch: 2,
      name: "TensionGem",
      desc: "Raises#TP#50%",
      target: 2,
      usable: 1,
      effect: {
        tp: "half"
      },
      battle: true
    },
    29: {
      id: 29,
      ch: 2,
      name: "TensionMax",
      desc: "Raises#TP#Max",
      target: 2,
      usable: 1,
      effect: {
        tp: "max"
      },
      battle: true
    },
    30: {
      id: 30,
      ch: 2,
      name: "ReviveDust",
      desc: "Revives#team#25%",
      target: 2,
      usable: 1,
      effect: {
        reviveall: {
          heal: 10,
          deaddiv: 4
        }
      },
      battle: true
    },
    31: {
      id: 31,
      ch: 2,
      name: "ReviveBrite",
      desc: "Revives#team#100%",
      target: 2,
      usable: 1,
      effect: {
        reviveall: {
          heal: 50,
          deadheal: 999
        }
      },
      battle: true
    },
    32: {
      id: 32,
      ch: 2,
      name: "S.POISON",
      desc: "Hurts#party#member",
      target: 1,
      usable: 1,
      effect: {
        heal: 40,
        poison: 60
      },
      battle: true
    },
    33: {
      id: 33,
      ch: 2,
      name: "DogDollar",
      desc: "Not#so#useful",
      target: 0,
      usable: 0,
      effect: {},
      battle: true
    },
    34: {
      id: 34,
      ch: 3,
      name: "TVDinner",
      desc: "Heals#100HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 100
      },
      battle: true
    },
    35: {
      id: 35,
      ch: 3,
      name: "Pipis",
      desc: "Does#nothing",
      target: 1,
      usable: 1,
      effect: {},
      battle: true
    },
    36: {
      id: 36,
      ch: 3,
      name: "FlatSoda",
      desc: "Heals#20HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 20
      },
      battle: true
    },
    37: {
      id: 37,
      ch: 3,
      name: "TVSlop",
      desc: "Heals#80HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80
      },
      battle: true
    },
    38: {
      id: 38,
      ch: 3,
      name: "ExecBuffet",
      desc: "Heals#team#100HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 100
      },
      battle: true
    },
    39: {
      id: 39,
      ch: 3,
      name: "DeluxeDinner",
      desc: "Heals#140HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 140
      },
      battle: true
    },
    60: {
      id: 60,
      ch: 4,
      name: "AncientSweet",
      desc: "Kris only#+400",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 400,
          2: 40,
          3: 40,
          4: 40
        }
      },
      battle: true
    },
    61: {
      id: 61,
      ch: 4,
      name: "Rhapsotea",
      desc: "Heals#115HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 115
      },
      battle: true
    },
    62: {
      id: 62,
      ch: 4,
      name: "Scarlixir",
      desc: "Heals#160HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 160,
          2: 160,
          3: 160,
          4: 155
        },
        noellebonus: 5
      },
      battle: true
    },
    63: {
      id: 63,
      ch: 4,
      name: "BitterTear",
      desc: "Heals#All HP",
      target: 1,
      usable: 1,
      effect: {
        revive: "full"
      },
      battle: true
    },
    40: {
      id: 40,
      ch: 5,
      name: "PunchBowl",
      desc: "Heals#team#200HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 200
      },
      battle: true
    },
    41: {
      id: 41,
      ch: 5,
      name: "Flavigne",
      desc: "Heals#130HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 130
      },
      battle: true
    },
    42: {
      id: 42,
      ch: 5,
      name: "GreenTea",
      desc: "Heals#180HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 180
      },
      battle: true
    },
    43: {
      id: 43,
      ch: 5,
      name: "OrangeJuice",
      desc: "Heals#80HP",
      target: 1,
      usable: 1,
      effect: {
        heal: 80
      },
      battle: true
    },
    64: {
      id: 64,
      ch: 5,
      name: "Schadenbrot",
      desc: "Heals#team#200HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 200
      },
      battle: true
    },
    65: {
      id: 65,
      ch: 5,
      name: "TreeCake",
      desc: "Heals#team#160HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 160
      },
      battle: true
    },
    66: {
      id: 66,
      ch: 5,
      name: "S.POTION",
      desc: "Heals#party#member",
      target: 1,
      usable: 1,
      effect: {
        heal: 200
      },
      battle: true
    },
    67: {
      id: 67,
      ch: 5,
      name: "Raw Moon",
      desc: "Raises#TP 16%#+100HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          1: 200
        },
        dflt: 100,
        tpselect: 0.16
      },
      battle: true
    },
    68: {
      id: 68,
      ch: 5,
      name: "Phanta",
      desc: "Raises#TP 16%#+100HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          2: 200
        },
        dflt: 100,
        tpselect: 0.16
      },
      battle: true
    },
    69: {
      id: 69,
      ch: 5,
      name: "FlowerySoda",
      desc: "Raises#TP 16%#+50HP",
      target: 1,
      usable: 1,
      effect: {
        perchar: {
          3: 200
        },
        dflt: 50,
        tpselect: 0.16
      },
      battle: true
    },
    70: {
      id: 70,
      ch: 5,
      name: "Shikacola",
      desc: "Heals#team#80HP",
      target: 2,
      usable: 1,
      effect: {
        all: true,
        heal: 80
      },
      battle: true
    }
  },
  weapons: {
    1: {
      id: 1,
      ch: 1,
      chars: [1],
      name: "Wood Blade",
      desc: "A wooden practice blade with a carbon-#reinforced core.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "What's this!? A CHOPSTICK?",
        3: "That's yours, Kris...",
        4: "(It has bite marks...)"
      }
    },
    2: {
      id: 2,
      ch: 1,
      chars: [2],
      name: "Mane Ax",
      desc: "Beginner's ax forged from the#mane of a dragon whelp.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "I'm too GOOD for that.",
        3: "Ummm... it's a bit big.",
        4: "It... smells nice..."
      }
    },
    3: {
      id: 3,
      ch: 1,
      chars: [3],
      name: "Red Scarf",
      desc: "A basic scarf made of lightly#magical fiber.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "No. Just... no.",
        3: "Comfy! Touch it, Kris!",
        4: "Huh? No, I'm not cold."
      }
    },
    4: {
      id: 4,
      ch: 1,
      chars: [1, 2, 3, 4],
      name: "EverybodyWeapon",
      desc: "It felt right for everyone.",
      at: 12,
      df: 6,
      mag: 8,
      icon: 0,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Uhhh... ok.",
        3: "A perfect fit!",
        4: "Wh... what is this?"
      }
    },
    5: {
      id: 5,
      ch: 1,
      chars: [1],
      name: "Spookysword",
      desc: "A black-and-orange sword with a bat hilt.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Spookiness UP",
      abicon: 7,
      msg: {
        2: "Ugh, it's too small!",
        3: "Oh, it's too scary!",
        4: "(It's kinda cool...)"
      }
    },
    6: {
      id: 6,
      ch: 1,
      chars: [2],
      name: "Brave Ax",
      desc: "A glossy ax from a block warrior.#Suitable for heroes.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Guts Up",
      abicon: 7,
      msg: {
        2: "Well, if I have to.",
        3: "It's a bit too heavy...",
        4: "(W-wow, what presence...)"
      }
    },
    7: {
      id: 7,
      ch: 1,
      chars: [2],
      name: "Devilsknife",
      desc: "Skull-emblazoned scythe-ax.#Reduces Rudebuster's cost by 10",
      at: 5,
      df: 0,
      mag: 4,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Buster TP DOWN",
      abicon: 6,
      msg: {
        2: "Let the games begin!",
        3: "It's too, um, evil.",
        4: "...? It smiled at me?"
      }
    },
    8: {
      id: 8,
      ch: 1,
      chars: [1],
      name: "Trefoil",
      desc: "Mossy rapier with a clover emblem.#Increases $ found by 5%.",
      at: 4,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Money Earned UP",
      abicon: 7,
      msg: {
        2: "That tacky thing? No!",
        3: "Not my shade of green...",
        4: "Okay! ...? What do you mean, unused!?"
      }
    },
    9: {
      id: 9,
      ch: 1,
      chars: [3],
      name: "Ragger",
      desc: "A rugged scarf that cuts enemies like a dagger.",
      at: 2,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Ow! That can't be comfy!",
        3: "Feels prickly... nice!",
        4: "Ouch! ... kind of nice"
      }
    },
    10: {
      id: 10,
      ch: 1,
      chars: [3],
      name: "DaintyScarf",
      desc: "Delicate scarf that increases healing#power but has no attack.",
      at: 0,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Fluffiness UP",
      abicon: 7,
      msg: {
        2: "IT'S MADE OF DOILIES!",
        3: "I'll protect everyone!",
        4: "S-stop covering me with it!"
      }
    },
    11: {
      id: 11,
      ch: 2,
      chars: [1],
      name: "TwistedSwd",
      desc: "A strange blade",
      at: 16,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Trance",
      abicon: 6,
      msg: {
        2: "... uhh, looks bad.",
        3: "It's like a spiral.",
        4: "It's... kind of scary..."
      }
    },
    12: {
      id: 12,
      ch: 2,
      chars: [4],
      name: "SnowRing",
      desc: "A ring with the emblem of the#snowflake",
      at: 0,
      df: 0,
      mag: 0,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Smells like Noelle",
        3: "Are you... proposing?",
        4: "(Thank goodness...)"
      }
    },
    13: {
      id: 13,
      ch: 2,
      chars: [4],
      name: "ThornRing",
      desc: "Wearer takes damage from pain#Reduces the TP cost of ice spells",
      at: 14,
      df: 0,
      mag: 12,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: "Trance",
      abicon: 14,
      msg: {
        2: "A torture device?",
        3: "...",
        4: " "
      }
    },
    14: {
      id: 14,
      ch: 2,
      chars: [1],
      name: "BounceBlade",
      desc: "A pink saber with a rubber blade.#Weak, but increases defence.",
      at: 2,
      df: 1,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Defense",
      abicon: 7,
      msg: {
        2: "What is this, rubber?",
        3: "Soft and squishy!",
        4: "S-stop thwacking me!"
      }
    },
    15: {
      id: 15,
      ch: 2,
      chars: [3],
      name: "CheerScarf",
      desc: "A scarf with colorful you-can-do-it#imagery. Gains more TP from criticals.",
      at: 1,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Smiley",
      abicon: 10,
      msg: {
        2: "Smiley faces? Ecch.",
        3: "You can do it!",
        4: "Now THIS is a tacky scarf! Faha!"
      }
    },
    16: {
      id: 16,
      ch: 2,
      chars: [1],
      name: "MechaSaber",
      desc: "The blade extends when you press the hilt.#CHA-CHK!",
      at: 4,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Annoying",
      abicon: 13,
      msg: {
        2: "*chk chk chk chk* Nah.",
        3: "You'd look cool holding it, Kris!",
        4: "*chk* A-AHH! Scared myself..."
      }
    },
    17: {
      id: 17,
      ch: 2,
      chars: [2],
      name: "AutoAxe",
      desc: "Make sure to charge it by#plugging it into the wall.",
      at: 4,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "BadIdea",
      abicon: 13,
      msg: {
        2: "*chainsaw noises* Hahaha!!",
        3: "(Is this a good idea?)",
        4: "*zrrt* A-AHH! Scared myself..."
      }
    },
    18: {
      id: 18,
      ch: 2,
      chars: [3],
      name: "FiberScarf",
      desc: "A scarf made of soft microfiber.#Balances attack and magic.",
      at: 2,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Soft...)",
        3: "Oh! My fur's staticy!",
        4: "Sure, I'll... huh? It's a weapon?"
      }
    },
    19: {
      id: 19,
      ch: 2,
      chars: [3],
      name: "Ragger2",
      desc: "A sharp and scratchy scarf.#Worse healing, better attack.",
      at: 5,
      df: 0,
      mag: -1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "Prickly",
      abicon: 7,
      msg: {
        2: "This is Ralsei's deal.",
        3: "I'm a prickly prince!",
        4: "(It's like Santa's beard?)"
      }
    },
    20: {
      id: 20,
      ch: 2,
      chars: [],
      name: "BrokenSwd",
      desc: "A rejected sword cut into 2 pieces.#Not even you can equip this...",
      at: 0,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Failure",
      abicon: 6,
      msg: {
        2: "... this is trash.",
        3: "Should we fix this...?",
        4: "(Wh... why give this to me?)"
      }
    },
    21: {
      id: 21,
      ch: 2,
      chars: [3],
      name: "PuppetScarf",
      desc: "A scarf made of strange strings.#For those that abandon healing.",
      at: 10,
      df: 0,
      mag: -6,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "No way, that's creepy.",
        3: "If I have to fight...",
        4: "(Feels like guitar strings...)"
      }
    },
    22: {
      id: 22,
      ch: 2,
      chars: [4],
      name: "FreezeRing",
      desc: "A ring with a snowglobe on it.#... is that someone inside?",
      at: 4,
      df: 0,
      mag: 4,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Heh, you steal this? Heh.",
        3: "It's beautiful...",
        4: "..."
      }
    },
    23: {
      id: 23,
      ch: 3,
      chars: [1],
      name: "Saber10",
      desc: "A saber made of 10 cactus needles.#Fortunately, can deal more than 10 damage.",
      at: 6,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Nah, I'd snap it.",
        3: "You want to... pierce my ears...?",
        4: "(I'm not against using it, but...)"
      }
    },
    24: {
      id: 24,
      ch: 3,
      chars: [2],
      name: "ToxicAxe",
      desc: "An axe used to clear wastelands#in a fetid swamp. Not poison, but gross.",
      at: 6,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Eat dirt, losers.",
        3: "Could I wash it off first?",
        4: "N-no way! Susie wouldn't use that!"
      }
    },
    25: {
      id: 25,
      ch: 3,
      chars: [3],
      name: "FlexScarf",
      desc: "A scarf that is warm and fuzzy, but with#a metal core that lets it keep its shape.",
      at: 4,
      df: 0,
      mag: 1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Looks like a giant caterpillar.  ",
        3: "So pliable, like me!",
        4: "Twist it and... it's a wreath!"
      }
    },
    26: {
      id: 26,
      ch: 3,
      chars: [1, 4],
      name: "BlackShard",
      desc: "A dagger-like shard of the Black Knife.#Strikes the weakness of dark-element enemies.",
      at: 16,
      df: 0,
      mag: 0,
      icon: 18,
      grazesize: 0,
      grazeamt: 0,
      ability: "SlayDark",
      abicon: 18,
      msg: {
        2: "... how is this a weapon?",
        3: "I... shouldn't use it.",
        4: " "
      }
    },
    50: {
      id: 50,
      ch: 4,
      chars: [1, 4],
      name: "JingleBlade",
      desc: "A lance-like sword with red-and-white stripes.#Perfect for jousting.",
      at: 7,
      df: 1,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Festive",
      abicon: 10,
      msg: {
        2: "Sleigh the bad guys.",
        3: "Mmm! Minty and festive!",
        4: "What is this, a barber pole?"
      }
    },
    51: {
      id: 51,
      ch: 4,
      chars: [3],
      name: "ScarfMark",
      desc: "A thin scarf with a deep sheen. Holy writing has#been pressed into it, imbuing it with magic.",
      at: 4,
      df: 1,
      mag: 1,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Heheh...",
        3: "I'll keep my place.",
        4: "Look, ribbon dancing!"
      }
    },
    52: {
      id: 52,
      ch: 4,
      chars: [2],
      name: "JusticeAxe",
      desc: "It has no special powers. However, in order to#attain this item, you became much stronger!",
      at: 12,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "???",
      abicon: 5,
      msg: {
        2: "Watch this, old man!",
        3: "... isn't Susie amazing?",
        4: "... Susie beat up an old man!?"
      }
    },
    53: {
      id: 53,
      ch: 4,
      chars: [1],
      name: "Winglade",
      desc: "A majestic sword with a white feathered hilt.#Slightly increases money won.",
      at: 8,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +5%",
      abicon: 7,
      msg: {
        2: "Don't make me sneeze!",
        3: "Th-that tickles!",
        4: "... whose feather is this?"
      }
    },
    54: {
      id: 54,
      ch: 4,
      chars: [2],
      name: "AbsorbAx",
      desc: "A long, curved axe with an indent.#Scoop up HP when you attack.",
      at: 8,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Vampire",
      abicon: 13,
      msg: {
        2: "Scoopin' time.",
        3: "Don't scoop me!",
        4: "That red... is that blood?"
      }
    },
    30: {
      id: 30,
      ch: 5,
      chars: [1],
      name: "WoodBlade2",
      desc: "A sword that is arbitrarily stronger#because it fits the setting of Chapter 5.",
      at: 10,
      df: 0,
      mag: 0,
      icon: 1,
      grazesize: 0,
      grazeamt: 0,
      ability: "Coolness",
      abicon: 7,
      msg: {
        2: "No, you geek.",
        3: "Cool poses, Kris!",
        4: "Go, Kris! \"1000 Moon Crescent Slash!\" Faha!"
      }
    },
    31: {
      id: 31,
      ch: 5,
      chars: [2],
      name: "Thatchet",
      desc: "An axe made of brambles. It's rumored its#wickedness infects anything it touches.",
      at: 10,
      df: 0,
      mag: 0,
      icon: 2,
      grazesize: 0,
      grazeamt: 0,
      ability: "Wicked",
      abicon: 13,
      msg: {
        2: "Literally wicked.",
        3: "Yay, I'm infected!",
        4: "Well... roses have thorns, too."
      }
    },
    32: {
      id: 32,
      ch: 5,
      chars: [3],
      name: "BlueShoes",
      desc: "Shoes from a prestigious dancer.#Ralsei's PACIFY costs 0% TP.",
      at: 2,
      df: 4,
      mag: 6,
      icon: 24,
      grazesize: 0,
      grazeamt: 0,
      ability: "Pacify0TP",
      abicon: 20,
      msg: {
        2: "Hell no, I'd wreck these.",
        3: "Helps me step to attack!",
        4: "(You KNOW I can't wear normal shoes...)"
      }
    },
    33: {
      id: 33,
      ch: 5,
      chars: [1, 4],
      name: "AquaKnife",
      desc: "A mischievous blade. Attacks with this#weapon are easier to make critical.",
      at: 10,
      df: 2,
      mag: 0,
      icon: 27,
      grazesize: 0,
      grazeamt: 0,
      ability: "Critical",
      abicon: 7,
      msg: {
        2: "Too small. Kris-size.",
        3: "Umm, I might hurt myself...",
        4: "That's, um, nostalgic."
      }
    },
    34: {
      id: 34,
      ch: 5,
      chars: [],
      name: "FloweryScarf",
      desc: "A scarf which says \"I <3 Flowery\" on it.#It's the perfect size for Ralsei.",
      at: 70,
      df: 70,
      mag: 70,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: "TheBest",
      abicon: 21,
      msg: {
        2: "Nah, that's for Ralsei.",
        3: "I, um... it, it doesn't fit!",
        4: "Who the heck is Flowery?"
      }
    },
    35: {
      id: 35,
      ch: 5,
      chars: [3, 4],
      name: "BrokenScarf",
      desc: "A scarf that was torn to pieces in the#battle, revealing it was all for show.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "...",
        3: "... I'll wear it.",
        4: "Who the HECK is Flowery?"
      }
    },
    36: {
      id: 36,
      ch: 5,
      chars: [4],
      name: "GildedRose",
      desc: "Armour rings with a rose motif. Any thorns are#pointed outwards so you don't hurt yourself.",
      at: 16,
      df: 0,
      mag: 2,
      icon: 14,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Damn, if only it fit!",
        3: "Noelle... could equip this.",
        4: "Wow! Something I actually want to wear?"
      }
    },
    37: {
      id: 37,
      ch: 5,
      chars: [3],
      name: "MistleWP",
      desc: "A parasitic ivy whip with a nature's power.#Only experts can use it as a scarf.",
      at: 6,
      df: 0,
      mag: 2,
      icon: 3,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 7,
      msg: {
        2: "Stop nailing it to stuff.",
        3: "Look, I'm a wreath?",
        4: "... ah?"
      }
    }
  },
  armors: {
    1: {
      id: 1,
      ch: 1,
      chars: [1, 2, 3],
      name: "Amber Card",
      desc: "A thin square charm that sticks#to you, increasing defense.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "... better than nothing.",
        3: "It's sticky, huh, Kris...",
        4: "It's like a name-tag!"
      }
    },
    2: {
      id: 2,
      ch: 1,
      chars: [1, 2, 3],
      name: "Dice Brace",
      desc: "A bracelet made out of various#symbol-inscribed cubes.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "... okay.",
        3: "It says \"Friendship!\"",
        4: "Hey, y-you jumbled it..."
      }
    },
    3: {
      id: 3,
      ch: 1,
      chars: [1, 3, 4],
      name: "Pink Ribbon",
      desc: "A cute hair ribbon that increases#the range bullets increase tension.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 20,
      grazeamt: 0,
      ability: "GrazeArea",
      abicon: 7,
      msg: {
        2: "Nope. Not in 1st grade anymore.",
        3: "Um... d-do I look cute...?",
        4: "... feels familiar."
      }
    },
    4: {
      id: 4,
      ch: 1,
      chars: [1, 3],
      name: "White Ribbon",
      desc: "A crinkly hair ribbon that slightly#increases your defense.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Cuteness",
      abicon: 7,
      msg: {
        2: "Nope. Not in 1st grade anymore.",
        3: "Um... d-do I look cute...?",
        4: "... feels familiar."
      }
    },
    5: {
      id: 5,
      ch: 1,
      chars: [1, 2, 3],
      name: "IronShackle",
      desc: "Shackle that ironically increases#your attack and defense.",
      at: 1,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Damn, it's actually cool...)",
        3: "*jingle jangle* Haha!",
        4: "I'm the ghost of holidays past!"
      }
    },
    6: {
      id: 6,
      ch: 1,
      chars: [1, 2, 3],
      name: "MouseToken",
      desc: "A golden coin with a once-powerful mousewizard engraved on it.",
      at: 0,
      df: 0,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "This guy's... familiar?",
        3: "Chu! Healing power UP!",
        4: "... from the family entertainment center?"
      }
    },
    7: {
      id: 7,
      ch: 1,
      chars: [1, 2, 3],
      name: "Jevilstail",
      desc: "A J-shaped tail that gives you devilenergy.",
      at: 2,
      df: 2,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Figured I'd grow one someday.",
        3: "I'm a good devil, OK?",
        4: "... (I like it...)"
      }
    },
    8: {
      id: 8,
      ch: 2,
      chars: [1, 2, 3],
      name: "Silver Card",
      desc: "A square charm that increases#dropped money by 5%",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +5%",
      abicon: 7,
      msg: {
        2: "Money, that's what I need.",
        3: "Do they take credit?",
        4: "It goes with my watch!"
      }
    },
    9: {
      id: 9,
      ch: 2,
      chars: [1, 3, 4],
      name: "TwinRibbon",
      desc: "Two ribbons. You'll have to put#your hair into pigtails.",
      at: 0,
      df: 3,
      mag: 0,
      icon: 4,
      grazesize: 20,
      grazeamt: 0,
      ability: "GrazeArea",
      abicon: 7,
      msg: {
        2: "... it gets worse and worse.",
        3: "Try around my horns!",
        4: "... nostalgic, huh."
      }
    },
    10: {
      id: 10,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "GlowWrist",
      desc: "A tough bracelet made of green wires,#and studded with sharp glowing lights.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Whoops, it's tangled.",
        3: "Let me just untangle this...",
        4: "It's like holiday lights..."
      }
    },
    11: {
      id: 11,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "ChainMail",
      desc: "Chain-armor. Send it to 10 others#or it'll lose its defensive rating",
      at: 0,
      df: 3,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Damn, guess I'm cursed.",
        3: "A letter?... for me...?",
        4: "Armor? (It's cool...)"
      }
    },
    12: {
      id: 12,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "B.ShotBowtie",
      desc: "A handsome bowtie. Looks like the brand#name has been cut off.",
      at: 0,
      df: 2,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Ugh, I look like a nerd.",
        3: "Can I have suspenders?",
        4: "... do I put it in my hair?"
      }
    },
    13: {
      id: 13,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SpikeBand",
      desc: "A black wristband covered in spikes.#Has the tendency to get stuck to itself.",
      at: 2,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Can't say no to spikes.",
        3: "Um, do I... look tough?",
        4: "(Maybe Susie would like this look?)"
      }
    },
    14: {
      id: 14,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "Silver Watch",
      desc: "Grazing bullets affects#the turn length by 10% more",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "GrazeTime",
      abicon: 7,
      msg: {
        2: "It's clobbering time.",
        3: "I'm late, I'm late!",
        4: "(Th-this was mine...)"
      }
    },
    15: {
      id: 15,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "TensionBow",
      desc: "Gain 10% more tension from#grazing bullets",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "TPGain",
      abicon: 7,
      msg: {
        2: " ",
        3: " ",
        4: " "
      }
    },
    16: {
      id: 16,
      ch: 2,
      chars: [1],
      name: "Mannequin",
      desc: "It's a mannequin with the clothes#permanently attached. Useless",
      at: 0,
      df: 0,
      mag: 0,
      icon: 0,
      grazesize: 0,
      grazeamt: 0,
      ability: "???",
      abicon: 4,
      msg: {
        2: "Not even gonna ask.",
        3: "Um, the d-dress is cute...",
        4: "(Why did they spend $300 on this!?)"
      }
    },
    17: {
      id: 17,
      ch: 2,
      chars: [1],
      name: "DarkGoldBand",
      desc: "A black metal with a golden shine.",
      at: 0,
      df: 0,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 7,
      msg: {
        2: "Not even gonna ask.",
        3: "Um, the d-dress is cute...",
        4: "(Why did they spend $300 on this!?)"
      }
    },
    18: {
      id: 18,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SkyMantle",
      desc: "A cape that shimmers fluorescently.#Protects against Elec and Holy attacks.",
      at: 0,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Elec/Holy",
      abicon: 4,
      msg: {
        2: " ",
        3: " ",
        4: " "
      }
    },
    19: {
      id: 19,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "SpikeShackle",
      desc: " ",
      at: 3,
      df: 1,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Attack",
      abicon: 7,
      msg: {
        2: "Get a load of THIS!",
        3: "Looking SHARP!",
        4: "(It's tearing my sleeves...)"
      }
    },
    20: {
      id: 20,
      ch: 2,
      chars: [1, 3, 4],
      name: "FrayedBowtie",
      desc: "An old bowtie. It seems to have#lost much of its defensive value.",
      at: 1,
      df: 1,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Look. I have standards.",
        3: "It's still wearable!",
        4: "(Reminds me of Asgore...)"
      }
    },
    21: {
      id: 21,
      ch: 2,
      chars: [1, 2, 3],
      name: "Dealmaker",
      desc: "Fashionable pink and yellow glasses.#Greatly increase $ gained, and...?",
      at: 0,
      df: 5,
      mag: 5,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ +30%",
      abicon: 7,
      msg: {
        2: "Money, that's what I need.",
        3: "Two pairs of glasses?",
        4: "(Seems... familiar?)"
      }
    },
    22: {
      id: 22,
      ch: 2,
      chars: [1, 2, 3, 4],
      name: "RoyalPin",
      desc: "A brooch engraved with Queen's face.#Careful of the sharp part.",
      at: 0,
      df: 3,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "ROACH? Oh, brooch. Heh.",
        3: "I'm a cute little corkboard!",
        4: "Queen... gave this to me."
      }
    },
    23: {
      id: 23,
      ch: 3,
      chars: [1, 2, 3],
      name: "ShadowMantle",
      desc: "Shadows slip off like water.#Greatly protects against Dark and Star attacks.",
      at: 0,
      df: "chapter",
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Dark/Star",
      abicon: 4,
      msg: {
        2: "Hell yeah, what's this?",
        3: "Sh-should I wear this...?",
        4: "No... it's for someone... taller."
      }
    },
    24: {
      id: 24,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "LodeStone",
      desc: "A lodestone token shaped like a snail's shell.#Enemy bullets give a bit more TP.",
      at: 0,
      df: 2,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "TPGain",
      abicon: 7
    },
    25: {
      id: 25,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "GingerGuard",
      desc: "A steel bangle tempered by extreme flame.#Its shape is humanoid in nature.",
      at: 0,
      df: 3,
      mag: 0,
      icon: 19,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Look! I punched through a guy!",
        3: "A bigger one could make Kris!",
        4: "This smells amazing! Um, sorry."
      }
    },
    26: {
      id: 26,
      ch: 3,
      chars: [1, 3, 4],
      name: "BlueRibbon",
      desc: "A blue cheer bow. When the user uses a#healing move, it recovers slightly more HP.",
      at: 0,
      df: 1,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Heal+",
      abicon: 7,
      msg: {
        2: "ABSOLUTELY not.",
        4: "Go...  t... team?"
      }
    },
    27: {
      id: 27,
      ch: 3,
      chars: [1, 2, 3, 4],
      name: "TennaTie",
      desc: "A giant, heavy-duty, bullet-proof tie.#How to even wear it...?",
      at: 0,
      df: 5,
      mag: -2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Bandana-style.",
        3: "Like a sash...?",
        4: "Look, I'm like a gift!"
      }
    },
    50: {
      id: 50,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "Waferguard",
      desc: "Although it looks brittle, it contains a magical#energy that blunts damage on impact. +4DF",
      at: 0,
      df: 4,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "(Don't eat it. Don't eat it.)",
        3: "It's got drool on it.",
        4: "What's next, cheezy armor? Faha!"
      }
    },
    51: {
      id: 51,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "MysticBand",
      desc: "A silver armlet stained with amber.#Increases magic only. MAG +4",
      at: 0,
      df: 0,
      mag: 4,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Let's go, Rude Buster!",
        3: "Behold! Heal Prayer!",
        4: "(The other flavor is better)"
      }
    },
    52: {
      id: 52,
      ch: 4,
      chars: [1, 2, 3, 4],
      name: "PowerBand",
      desc: "A silver armlet stained with red essence.#Increases strength only. ATK +4",
      at: 4,
      df: 0,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "BLOOD POWER ACTIVATE!",
        3: "I'm juiced up!",
        4: "Why always jewelry?"
      }
    },
    53: {
      id: 53,
      ch: 4,
      chars: [1, 3, 4],
      name: "PrincessRBN",
      desc: "Elegant lace ribbon with gloves,#delicate enough to see through. +4 DEF +2 ATK",
      at: 2,
      df: 4,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "Elegance",
      abicon: 7,
      msg: {
        2: "Nah. Gloves don't fit.",
        3: "Cute! (Gloves don't fit)",
        4: "Kris, you can wear the gloves!"
      }
    },
    54: {
      id: 54,
      ch: 4,
      chars: [1, 2, 3],
      name: "GoldWidow",
      desc: "A spider made of gold. It gathers coins#into it, reducing $ gained.",
      at: 1,
      df: 5,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ -10%",
      abicon: 6,
      msg: {
        2: "Spider on my head. K.",
        3: "Itsy and/or bitsy!",
        4: "E-Ew! Kris, get that away!"
      }
    },
    30: {
      id: 30,
      ch: 5,
      chars: [1, 3, 4],
      name: "MonarchRBN",
      desc: "A ribbon like the wings of a butterfly.#Increases healing ability when equipped.",
      at: 0,
      df: 6,
      mag: 2,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "HasAntenna",
      abicon: 10,
      msg: {
        2: "I'll squash it.",
        3: "My horns are like antenna!",
        4: "They're not ANTENNA!! They're ant-LERS!"
      }
    },
    31: {
      id: 31,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "TrueTie",
      desc: "The genuine tie worn by a forgotten TV star.#Defends against the Puppet&Cat element.",
      at: 1,
      df: 5,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "CatDefend",
      abicon: 11,
      msg: {
        2: "More hand-me-downs?",
        3: "Ready for my close-up!",
        4: "What's next, a fedora?"
      }
    },
    32: {
      id: 32,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "DogWidow",
      desc: "A brooch in the shape of a golden pooch.#You lose almost all money after battle.",
      at: 0,
      df: 6,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: "$ -90%",
      abicon: 6,
      msg: {
        2: "This is annoying.",
        3: "This is annoying.",
        4: "Pff... YOU should wear it, Kris."
      }
    },
    33: {
      id: 33,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "RedRibbon",
      desc: "A ribbon with an inscription to drive#away resident spirits, if they don't pay.",
      at: 0,
      df: 4,
      mag: 1,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Kris's got the tab.",
        3: "Red and white...",
        4: "Umm, your dad's name is on this."
      }
    },
    34: {
      id: 34,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "NetskieHat",
      desc: "A white-yellow hat for someone with fox#ears. Somehow you can wear more than one.",
      at: 0,
      df: 6,
      mag: 0,
      icon: 4,
      grazesize: 0,
      grazeamt: 0,
      ability: " ",
      abicon: 0,
      msg: {
        2: "Cool. Visible ears.",
        3: "Fits my horns perfectly!",
        4: "Does not. Fit my antlers."
      }
    },
    35: {
      id: 35,
      ch: 5,
      chars: [1, 2, 3],
      name: "SethSpecs",
      desc: "A tactician's glasses. Become invulnerable for#longer after being damaged.",
      at: 0,
      df: 4,
      mag: 6,
      icon: 22,
      grazesize: 0,
      grazeamt: 0,
      ability: "InvTime+",
      abicon: 5,
      msg: {
        2: "Easier than stealing Ralsei's.",
        3: "I'm ready to do your homework!",
        4: "That's too much like..."
      }
    },
    36: {
      id: 36,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "YellowHat",
      desc: "The hat of a just cowboy. Makes spells#20% more effective.",
      at: 4,
      df: 4,
      mag: 4,
      icon: 25,
      grazesize: 0,
      grazeamt: 0,
      ability: "Skill20%",
      abicon: 7,
      msg: {
        2: "Get in Horse Mode, Ralsei.",
        3: "Can Susie be the horse?",
        4: "(At least I'm not the horse)"
      }
    },
    37: {
      id: 37,
      ch: 5,
      chars: [2, 4],
      name: "O.Glove",
      desc: "The glove of a brave fighter.#Susie's SCYTHEMARE will cost less TP. ",
      at: 4,
      df: 8,
      mag: 0,
      icon: 23,
      grazesize: 0,
      grazeamt: 0,
      ability: "ScytheTP-",
      abicon: 6,
      msg: {
        2: "Helps me hold the axe.",
        3: "Um... I need training, first.",
        4: "I'm used to gloves. I mean, um, oven mitts."
      }
    },
    38: {
      id: 38,
      ch: 5,
      chars: [1, 2, 3, 4],
      name: "GreenApron",
      desc: "The apron of a kind chef. The wearer#recovers 16% of their max HP after defending.",
      at: 0,
      df: 7,
      mag: 0,
      icon: 26,
      grazesize: 0,
      grazeamt: 0,
      ability: "DefendHeal",
      abicon: 5,
      msg: {
        2: "Arright, back to cooking fire.",
        3: "Horse devors, anyone?",
        4: "Kris, can you, um, tie the back for me...?"
      }
    }
  }
};
V1();
var V3 = {
  1: [40, 39, 38, 37, 90, 88, 67, 13, 16, 17],
  2: [40, 39, 38, 37, 90, 88, 67, 13, 16, 17]
};
var V4 = {
  1: {
    8: "Backspace",
    9: "Tab",
    12: "Numpad 5 (nmlk off)",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "Caps lock",
    27: "Escape",
    32: "Space",
    33: "Page up",
    34: "Page down",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Windows",
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Numpad *",
    107: "Numpad +",
    109: "Numpad -",
    110: "Numpad .",
    111: "Numpad /",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "Num lock",
    145: "Scroll lock",
    160: "Shift (left)",
    161: "Shift (right)",
    162: "Ctrl (left)",
    163: "Ctrl (right)",
    164: "Alt (left)",
    165: "Alt (right)",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "?",
    192: "~",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  },
  2: {
    8: "Backspace",
    9: "Tab",
    12: "Numpad 5 (nmlk off)",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "Caps lock",
    27: "Escape",
    32: "Space",
    33: "Page up",
    34: "Page down",
    35: "End",
    36: "Home",
    37: "Left",
    38: "Up",
    39: "Right",
    40: "Down",
    45: "Insert",
    46: "Delete",
    48: "0",
    49: "1",
    50: "2",
    51: "3",
    52: "4",
    53: "5",
    54: "6",
    55: "7",
    56: "8",
    57: "9",
    65: "A",
    66: "B",
    67: "C",
    68: "D",
    69: "E",
    70: "F",
    71: "G",
    72: "H",
    73: "I",
    74: "J",
    75: "K",
    76: "L",
    77: "M",
    78: "N",
    79: "O",
    80: "P",
    81: "Q",
    82: "R",
    83: "S",
    84: "T",
    85: "U",
    86: "V",
    87: "W",
    88: "X",
    89: "Y",
    90: "Z",
    91: "Windows",
    96: "Numpad 0",
    97: "Numpad 1",
    98: "Numpad 2",
    99: "Numpad 3",
    100: "Numpad 4",
    101: "Numpad 5",
    102: "Numpad 6",
    103: "Numpad 7",
    104: "Numpad 8",
    105: "Numpad 9",
    106: "Numpad *",
    107: "Numpad +",
    109: "Numpad -",
    110: "Numpad .",
    111: "Numpad /",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "Num Lock",
    145: "Scroll Lock",
    160: "Shift (left)",
    161: "Shift (right)",
    162: "Ctrl (left)",
    163: "Ctrl (right)",
    164: "Alt (left)",
    165: "Alt (right)",
    186: ";",
    187: "=",
    188: ",",
    189: "-",
    190: ".",
    191: "?",
    192: "~",
    219: "[",
    220: "\\",
    221: "]",
    222: "'"
  }
};
var V5 = {};
i(V5);
var V6 = new Set(["autoplay", "autoplayBeam", "autoplayInfo", "autoplayNet", "autoplayWait", "godmode", "debugInv", "forceAttack", "debugUser", "pressedDebugKeys", "screenshot", "replayTape", "replayPos", "replayPrevUp", "replayDone"]);
var cloneBoot = V0(VP => {
  if (Array.isArray(VP)) {
    return VP.map(cloneBoot);
  }
  if (VP && typeof VP == "object" && Object.getPrototypeOf(VP) === Object.prototype) {
    let VG = {};
    for (let VR of Object.keys(VP)) {
      VG[VR] = cloneBoot(VP[VR]);
    }
    return VG;
  }
  return VP;
}, "cloneBoot");
var V8 = null;
function resetGlobalsForFight() {
  if (!V8) {
    V8 = new Map();
    for (let VP of Object.keys(V5)) {
      if (!V6.has(VP)) {
        V8.set(VP, cloneBoot(V5[VP]));
      }
    }
  }
  for (let VG of Object.getOwnPropertyNames(V5)) {
    if (V6.has(VG)) {
      continue;
    }
    let VR = Object.getOwnPropertyDescriptor(V5, VG);
    if (!V8.has(VG) || VR && (VR.get || VR.set)) {
      delete V5[VG];
    }
  }
  for (let [Vx, Vh] of V8) {
    V5[Vx] = cloneBoot(Vh);
  }
  if (V5.debugUser === 1) {
    V5.debug = 1;
  }
}
V0(resetGlobalsForFight, "resetGlobalsForFight");
function scr_gamestart() {
  V5.chapter = 1;
  V5.inv = 20;
  V5.invc = 1;
  V5.encounterno = 1;
  V5.specialbattle = 0;
  V5.char = [1, 2, 3];
  V5.heromakex = [100, 100, 100];
  V5.heromakey = [200, 200, 200];
  V5.charauto = [0, 0, 0, 0];
  V5.charmove = [0, 0, 0];
  V5.charcantarget = [0, 0, 0];
  V5.chardead = [0, 0, 0];
  V5.charaction = [0, 0, 0];
  V5.faceaction = [0, 0, 0];
  V5.charcond = [0, 0, 0];
  V5.hp = [0, 90, 110, 70];
  V5.maxhp = [0, 90, 110, 70];
  V5.at = [10, 10, 14, 8];
  V5.df = [2, 2, 2, 2];
  V5.mag = [0, 0, 1, 7];
  V5.charweapon = [0, 1, 2, 3];
  V5.chararmor1 = [0, 0, 0, 0];
  V5.chararmor2 = [0, 0, 0, 0];
  V5.itemat = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  V5.itemdf = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  V5.itemmag = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  V5.itemgrazesize = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  V5.spell = [[], [7], [4], [3, 2]];
  for (let VP = 0; VP < 4; VP++) {
    for (let VG = 0; VG < 12; VG++) {
      if (V5.spell[VP][VG] === undefined) {
        V5.spell[VP][VG] = 0;
      }
    }
  }
  V5.charname = [" ", "Kris", "Susie", "Ralsei"];
  V5.charbase = [0, 1, 2, 3];
  V5.charhero = [null, "kris", "susie", "ralsei"];
  scr_widen_party(Ve);
  V5.item = new Array(13).fill(0);
  V5.tension = 0;
  V5.maxtension = 250;
  V5.monstermakex = [500, 500, 500];
  V5.monstermakey = [240, 240, 240];
  V5.monsterinstancetype = [null, null, null];
  V5.monster = [1, 1, 1];
  V5.monstertype = [1, 1, 1];
  V5.monstername = ["", "", ""];
  V5.bmenuno = 0;
  V5.bmenucoord = [];
  for (let VR = 0; VR < 20; VR++) {
    V5.bmenucoord[VR] = new Array(20).fill(0);
  }
  V5.myfight = 0;
  V5.mnfight = 0;
  V5.fc = 0;
  V5.fe = 0;
  V5.typer = 5;
  V5.msg = new Array(100).fill(" ");
  V5.msgno = 0;
  V5.flag = new Array(9999).fill(0);
  V5.tempflag = new Array(100).fill(0);
  V5.flag[13] = 0;
  V5.turntimer = 0;
  V5.sp = 4;
  V5.heartx = 0;
  V5.hearty = 0;
  V5.time = 0;
  V5.fighting = 0;
  V5.darkzone = 1;
  V5.plot = 100;
  V5.lang = "en";
  V5.monstercomment = [" ", " ", " "];
  V5.batmusic = [null, null];
  V5.automiss = [0, 0, 0];
  V5.damage_cache = [];
  V5.input_g = [];
  scr_controls_default(V5.chapter);
}
V0(scr_gamestart, "scr_gamestart");
function scr_controls_default(VP) {
  let VG = String(V3[VP] ? VP : 1);
  V5.input_k = V3[VG].slice();
  V5.asc_def = [];
  for (let [VR, Vx] of Object.entries(V4[VG])) {
    V5.asc_def[+VR] = Vx;
  }
}
V0(scr_controls_default, "scr_controls_default");
function scr_widen_party(VP) {
  let VG = (VR, Vx) => {
    for (let Vh = VR.length; Vh < VP; Vh++) {
      VR[Vh] = typeof Vx == "function" ? Vx() : Vx;
    }
    return VR;
  };
  for (let VR = 4; VR < VP; VR++) {
    if (V5.charbase[VR] === undefined) {
      V5.charbase[VR] = 1;
    }
  }
  VG(V5.hp, 0);
  VG(V5.maxhp, 0);
  VG(V5.at, 0);
  VG(V5.df, 0);
  VG(V5.mag, 0);
  VG(V5.charweapon, 0);
  VG(V5.chararmor1, 0);
  VG(V5.chararmor2, 0);
  VG(V5.charauto, 0);
  VG(V5.itemat, () => [0, 0, 0, 0]);
  VG(V5.itemdf, () => [0, 0, 0, 0]);
  VG(V5.itemmag, () => [0, 0, 0, 0]);
  VG(V5.itemgrazesize, () => [0, 0, 0, 0]);
  VG(V5.spell, () => new Array(12).fill(0));
  for (let Vx = 4; Vx < VP; Vx++) {
    let Vh = V5.charbase[Vx] || 1;
    V5.charname[Vx] ||= V5.charname[Vh];
    if (!V5.spell[Vx].some(Boolean)) {
      V5.spell[Vx] = V5.spell[Vh].slice();
    }
  }
}
V0(scr_widen_party, "scr_widen_party");
var charBase = V0(VP => V5.charbase && V5.charbase[VP] || (VP >= 1 && VP <= 3 ? VP : 1), "charBase");
function scr_charslot(VP) {
  for (let VG = 0; VG < 3; VG++) {
    let VR = V5.char[VG];
    if (VR && charBase(VR) === VP) {
      return VG;
    }
  }
  return -1;
}
V0(scr_charslot, "scr_charslot");
function scr_havechar(VP) {
  if (scr_charslot(VP) >= 0) {
    return 1;
  } else {
    return 0;
  }
}
V0(scr_havechar, "scr_havechar");
function krisSlot() {
  let VP = scr_charslot(1);
  if (VP < 0) {
    return 0;
  } else {
    return VP;
  }
}
V0(krisSlot, "krisSlot");
var Ve = 64;
var PARTY = V0(() => V5.char ? V5.char.length : 3, "PARTY");
var VQ = {
  charaction: 0,
  faceaction: 0,
  acting: 0,
  charspecial: 0,
  targeted: 0,
  chartarget: 0,
  charmove: 1,
  charcantarget: 1,
  chardead: 0,
  charcond: 0,
  temptension: 0,
  battleat: 0,
  battledf: 0,
  battlemag: 0,
  charinstance: null,
  heromakex: 80,
  heromakey: 140,
  hittarget2: 0
};
function scr_resize_party(VP) {
  for (let [VG, VR] of Object.entries(VQ)) {
    if (!Array.isArray(V5[VG])) {
      V5[VG] = [];
    }
    for (let Vx = 0; Vx < VP; Vx++) {
      if (V5[VG][Vx] === undefined) {
        V5[VG][Vx] = VR;
      }
    }
    V5[VG].length = Math.max(V5[VG].length, VP);
  }
  for (let Vh of ["canact", "actname"]) {
    if (!Array.isArray(V5[Vh])) {
      V5[Vh] = [];
    }
    for (let Vw = 0; Vw < VP; Vw++) {
      if (!Array.isArray(V5[Vh][Vw])) {
        V5[Vh][Vw] = new Array(6).fill(Vh === "canact" ? 0 : " ");
      }
    }
  }
  if (!Array.isArray(V5.bmenucoord)) {
    V5.bmenucoord = [];
  }
  for (let VB = 0; VB < Math.max(20, VP); VB++) {
    if (!Array.isArray(V5.bmenucoord[VB])) {
      V5.bmenucoord[VB] = new Array(Math.max(20, VP)).fill(0);
    }
  }
}
V0(scr_resize_party, "scr_resize_party");
var Vn = {
  0: [" ", 0, 0, 0, 0]
};
var Vk = {
  0: [" ", 0, 0, 0, 0]
};
var Vr = {};
var Vu = {};
var VZ = {};
for (let Vy of Object.values(V2.weapons)) {
  Vn[Vy.id] = [Vy.name, Vy.at, Vy.df, Vy.mag, Vy.grazesize];
  Vu[Vy.id] = Vy.chars;
}
for (let Vm of Object.values(V2.armors)) {
  Vk[Vm.id] = [Vm.name, Vm.at, Vm.df, Vm.mag, Vm.grazesize];
  VZ[Vm.id] = Vm.chars;
}
for (let Vt of Object.values(V2.items)) {
  if (Vt.battle) {
    Vr[200 + Vt.id] = [Vt.name, Vt.name, Vt.target, Vt.desc.replace(/#/g, " ")];
  }
}
function itemEffect(VP) {
  let VG = V2.items[VP - 200];
  if (VG) {
    return VG.effect;
  } else {
    return null;
  }
}
V0(itemEffect, "itemEffect");
function scr_iteminfo_all() {
  for (let VP = 1; VP < (V5.charbase ? V5.charbase.length : 4); VP++) {
    let VG = Vn[V5.charweapon[VP]] || Vn[0];
    let VR = Vk[V5.chararmor1[VP]] || Vk[0];
    let Vx = Vk[V5.chararmor2[VP]] || Vk[0];
    let Vh = Vc => Vc === "chapter" ? V5.chapter | 0 : +Vc || 0;
    let Vw = VG.map((Vc, Vv) => Vv ? Vh(Vc) : Vc);
    let VB = VR.map((Vc, Vv) => Vv ? Vh(Vc) : Vc);
    let Vq = Vx.map((Vc, Vv) => Vv ? Vh(Vc) : Vc);
    V5.itemat[VP] = [Vw[1], VB[1], Vq[1], 0];
    V5.itemdf[VP] = [Vw[2], VB[2], Vq[2], 0];
    V5.itemmag[VP] = [Vw[3], VB[3], Vq[3], 0];
    V5.itemgrazesize[VP] = [0, VB[4], Vq[4], 0];
  }
}
V0(scr_iteminfo_all, "scr_iteminfo_all");
var VK = {};
var thorn = V0(VP => !!VP && V5.charweapon && V5.charweapon[VP] === 13, "thorn");
function scr_spellinfo(VP, VG) {
  if (V5.chapter >= 4 && VK[V5.chapter]) {
    let Vh = VK[V5.chapter](VP);
    if (Vh && (VP === 9 || VP === 10) && thorn(VG) && VG !== 4 && V5.charweapon[4] !== 13 && Vh.cost > 0) {
      return {
        ...Vh,
        cost: Vh.cost * 0.5
      };
    }
    if (Vh) {
      return Vh;
    }
  }
  let VR = {
    0: [" ", " ", 0, -1, "None"],
    1: ["Rude Sword", "RudeSword", 2, 125, "Rude#Damage#"],
    2: ["Heal Prayer", "Heal Prayer", 1, 80, "Heal#Ally"],
    3: ["Pacify", "Pacify", 2, 40, "Spare#TIRED foe"],
    4: ["Rude Buster", "Rude Buster", 2, 125, "Rude#Damage#"],
    5: ["Red Buster", "Red Buster", 2, 0, "Red#Damage#"],
    6: ["Dual Heal", "Dual Heal", 0, 0, "Heal All#30 HP"],
    7: ["ACT", "ACT", 0, 0, "Use#action"],
    8: ["SleepMist", "Sleep Mist", 0, 80, "Spare#TIRED foes"],
    9: ["IceShock", "IceShock", 2, 40, "Damage#w/ ICE"],
    10: ["SnowGrave", "SnowGrave", 0, V5.maxtension, "Fatal"]
  }[VP] || [" ", " ", 0, -1, " "];
  let Vx = VR[3];
  if (VP === 4 && V5.charweapon[2] === 7) {
    Vx = 100;
  }
  if (thorn(VG) && VP === 9) {
    Vx *= 0.5;
  }
  if (thorn(VG) && VP === 10) {
    Vx = V5.maxtension * 2 * 0.5;
  }
  return {
    spellname: VR[0],
    spellnameb: VR[1],
    spelltarget: VR[2],
    cost: Vx,
    spelldescb: VR[4]
  };
}
V0(scr_spellinfo, "scr_spellinfo");
function scr_spellinfo_all() {
  let VP = Math.max(4, V5.charbase ? V5.charbase.length : 4);
  V5.spellname = [];
  V5.spellnameb = [];
  V5.spellcost = [];
  V5.spelldescb = [];
  V5.spelltarget = [];
  for (let VG = 0; VG < VP; VG++) {
    V5.spellname[VG] = [];
    V5.spellnameb[VG] = [];
    V5.spellcost[VG] = [];
    V5.spelldescb[VG] = [];
    V5.spelltarget[VG] = [];
    if (!Array.isArray(V5.spell[VG])) {
      V5.spell[VG] = new Array(12).fill(0);
    }
  }
  for (let VR = 0; VR < VP; VR++) {
    for (let Vx = 0; Vx < 12; Vx++) {
      let Vh = scr_spellinfo(V5.spell[VR][Vx] || 0, VR);
      V5.spellname[VR][Vx] = Vh.spellname;
      V5.spellnameb[VR][Vx] = Vh.spellnameb;
      V5.spellcost[VR][Vx] = Vh.cost;
      V5.spelldescb[VR][Vx] = Vh.spelldescb;
      V5.spelltarget[VR][Vx] = Vh.spelltarget;
    }
  }
}
V0(scr_spellinfo_all, "scr_spellinfo_all");
function scr_tensionheal(VP) {
  V5.tension += VP;
  if (V5.tension > V5.maxtension) {
    V5.tension = V5.maxtension;
  }
  if (V5.chapter >= 4 && Vg.tensionCap) {
    let VG = Vg.tensionCap();
    if (VG != null && V5.tension > VG) {
      V5.tension = VG;
    }
  }
}
V0(scr_tensionheal, "scr_tensionheal");
function scr_monsterpop() {
  return V5.monster[0] + V5.monster[1] + V5.monster[2];
}
V0(scr_monsterpop, "scr_monsterpop");
function scr_dead(VP) {
  V5.charmove[VP] = 0;
  V5.charcantarget[VP] = 0;
  V5.chardead[VP] = 1;
  V5.charaction[VP] = 0;
  V5.charspecial[VP] = 0;
}
V0(scr_dead, "scr_dead");
function scr_revive(VP) {
  V5.charmove[VP] = 1;
  V5.charcantarget[VP] = 1;
  V5.chardead[VP] = 0;
}
V0(scr_revive, "scr_revive");
function scr_armorcheck_equipped(VP, VG) {
  let VR = 0;
  if (V5.chararmor1[VP] === VG) {
    VR++;
  }
  if (V5.chararmor2[VP] === VG) {
    VR++;
  }
  return VR;
}
V0(scr_armorcheck_equipped, "scr_armorcheck_equipped");
function scr_armorcheck_equipped_party(VP) {
  let VG = 0;
  for (let VR = 0; VR < 3; VR++) {
    if (V5.char[VR] !== 0 && V5.char[VR] !== undefined) {
      VG += scr_armorcheck_equipped(V5.char[VR], VP);
    }
  }
  return VG;
}
V0(scr_armorcheck_equipped_party, "scr_armorcheck_equipped_party");
function scr_mercyadd(VP, VG) {
  V5.mercymod[VP] += VG;
  if (V5.mercymod[VP] < 0) {
    V5.mercymod[VP] = 0;
  }
  if (V5.chapter < 2) {
    return;
  }
  if (V5.mercymod[VP] >= 100) {
    V5.mercymod[VP] = 100;
  }
  let VR = 1;
  if (VG <= 0) {
    VR = 0;
  }
  g.with("obj_dmgwriter", Vx => {
    if (Vx.type === 5) {
      VR = 0;
    }
  });
  if (VR) {
    let Vx = 0.8;
    if (VG < 99) {
      Vx = 1;
    }
    if (VG <= 50) {
      Vx = 1.2;
    }
    if (VG <= 25) {
      Vx = 1.4;
    }
    F("snd_mercyadd", {
      volume: 0.8,
      pitch: Vx
    });
  }
  if (Vg.dmgwriter) {
    let Vh = Vg.dmgwriter(V5.monsterx[VP], V5.monstery[VP] + 20 - V5.hittarget[VP] * 20);
    Vh.damage = VG;
    Vh.type = 5;
  }
  V5.hittarget[VP]++;
}
V0(scr_mercyadd, "scr_mercyadd");
function scr_heal(VP, VG) {
  let VR = V5.char[VP];
  let Vx = V5.hp[VR];
  let Vh = 0;
  let Vw = 0;
  if (V5.hp[VR] <= 0) {
    Vw = 1;
  }
  if (V5.hp[VR] > V5.maxhp[VR]) {
    Vh = 1;
  }
  if (Vh === 0) {
    V5.hp[VR] += VG;
    if (V5.hp[VR] > V5.maxhp[VR]) {
      V5.hp[VR] = V5.maxhp[VR];
    }
  }
  if (Vw === 1 && V5.hp[VR] >= 0) {
    if (V5.hp[VR] < t(V5.maxhp[VR] / 6)) {
      V5.hp[VR] = t(V5.maxhp[VR] / 6);
    }
    scr_revive(VP);
  }
  F("snd_power");
  return V5.hp[VR] - Vx;
}
V0(scr_heal, "scr_heal");
function scr_healall(VP) {
  for (let VG = 0; VG < PARTY(); VG++) {
    if (V5.char[VG] !== 0) {
      scr_heal(VG, VP);
    }
  }
}
V0(scr_healall, "scr_healall");
var Vg = {
  dmgwriter: null,
  gameover: null,
  shake: null,
  charinstance: V0(() => null, "charinstance"),
  monsterinstance: V0(VP => null, "monsterinstance"),
  damagecheck: V0(() => {}, "damagecheck"),
  scr_damage: null,
  scr_damage_all: null,
  scr_act_simul: null,
  scr_spareanim: null,
  scr_recruit: null,
  spellmenu_setup: null
};
function scr_randomtarget(VP) {
  let VG = [];
  for (let Vx = 0; Vx < PARTY(); Vx++) {
    if (V5.charcantarget[Vx] === 1) {
      VG.push(Vx);
    }
  }
  let VR = VG.length ? VG[Math.min(VG.length - 1, Math.floor(R(VG.length)))] : 3;
  V5.targeted[VR] = 1;
  VP.mytarget = VR;
  return VR;
}
V0(scr_randomtarget, "scr_randomtarget");
function scr_targetall(VP) {
  for (let VG = 0; VG < PARTY(); VG++) {
    if (V5.charcantarget[VG] === 1) {
      V5.targeted[VG] = 1;
    }
  }
  VP.mytarget = 3;
  VP.target = 3;
}
V0(scr_targetall, "scr_targetall");
function scr_damage(VP) {
  if (!(V5.inv < 0)) {
    return;
  }
  if (V5.debugInv || h.invuln) {
    V5.inv = V5.invc * 40;
    return;
  }
  let VG = VP.target;
  if (VG < 3 && V5.hp[V5.char[VG]] <= 0) {
    VG = scr_randomtarget(VP);
    VP.target = VG;
    let Vv = Vg.charinstance(VG);
    if (Vv) {
      Vv.image_blend = "#ffffff";
      Vv.darkify = 0;
    }
  }
  let VR = 3;
  let Vx = VP.damage;
  if (VG < 3) {
    Vx = t(Vx - V5.battledf[VG] * 3);
    VR = V5.char[VG];
    if (V5.charaction[VG] === 10) {
      Vx = t(Vx * 2 / 3);
    }
    if (Vx < 1) {
      Vx = 1;
    }
  }
  if (Vg.shake) {
    Vg.shake();
  }
  let Vh = VG < 3 ? Vg.charinstance(VG) : null;
  if (Vh) {
    Vh.hurt = 1;
    Vh.hurttimer = 0;
  }
  let Vw = Vx;
  g.with("obj_dmgwriter", W0 => {
    if (W0.delaytimer >= 1) {
      W0.killactive = 1;
    }
  });
  let VB = -1;
  let Vq = g.first("obj_heart");
  if (Vq) {
    Vq.dmgnoise = 1;
  }
  if (VG < 3 && (V5.hp[VR] <= 0 ? (VB = 4, V5.hp[VR] -= m(Vx / 4), Vw = m(Vx / 4)) : (V5.hp[VR] -= Vx, V5.hp[VR] <= 0 && (Vw = c(V5.hp[VR] - V5.maxhp[VR] / 2), VB = 4, V5.hp[VR] = m(-V5.maxhp[VR] / 2), scr_dead(VG))), Vg.dmgwriter && Vh)) {
    let W0 = Vg.dmgwriter(Vh.x, Vh.y + Vh.myheight - 24);
    W0.damage = Vw;
    W0.type = VB;
  }
  if (VG === 3) {
    for (let W1 = 0; W1 < PARTY(); W1++) {
      VR = V5.char[W1];
      if (V5.hp[VR] >= 0) {
        if (V5.charaction[W1] === 10) {
          V5.hp[VR] -= t(Vx / 2);
        } else {
          V5.hp[VR] -= Vx;
        }
        if (V5.hp[VR] <= 0) {
          V5.hp[VR] = m(-V5.maxhp[0] / 2);
        }
      }
    }
  }
  V5.inv = V5.invc * 40;
  Vg.damagecheck();
  let Vc = 1;
  for (let W2 = 0; W2 < PARTY(); W2++) {
    if (V5.char[W2] !== 0 && V5.hp[V5.char[W2]] > 0) {
      Vc = 0;
    }
  }
  if (Vc === 1 && Vg.gameover) {
    Vg.gameover();
  }
}
V0(scr_damage, "scr_damage");
function scr_damage_all(VP) {
  if (!(V5.inv < 0)) {
    return;
  }
  let VG = VP.damage;
  let VR = VP.target;
  for (let Vx = 0; Vx < PARTY(); Vx++) {
    V5.inv = -1;
    VP.damage = VG;
    VP.target = Vx;
    if (V5.hp[V5.char[Vx]] > 0 && V5.char[Vx] !== 0) {
      scr_damage(VP);
    }
  }
  V5.inv = V5.invc * 40;
  VP.target = VR;
}
V0(scr_damage_all, "scr_damage_all");
function dmgTypeOf(VP) {
  let VG = V5.charhero && V5.charhero[VP];
  if (VG === "noelle" || !VG && VP === 4 && V5.chapter >= 2) {
    if (V5.chapter >= 2) {
      return 6;
    } else {
      return 3;
    }
  }
  let VR = {
    kris: 1,
    susie: 2,
    ralsei: 3
  }[VG] || (VP >= 1 && VP <= 3 ? VP : charBase(VP));
  return Math.max(0, Math.min(3, VR - 1));
}
V0(dmgTypeOf, "dmgTypeOf");
function scr_damage_enemy(VP, VG, VR) {
  if (Vg.dmgwriter) {
    let Vw = Vg.dmgwriter(V5.monsterx[VP], V5.monstery[VP] + 20 - V5.hittarget[VP] * 20);
    Vw.type = dmgTypeOf(V5.char[VR]);
    if (V5.chapter >= 2 && VR === 5) {
      Vw.type = 5;
    }
    Vw.damage = VG;
  }
  V5.monsterhp[VP] -= VG;
  let Vx = Vg.monsterinstance(VP);
  if (V5.chapter === 5 && Vx && typeof Vx.callback_on_damage == "function") {
    Vx.callback_on_damage(Vx);
  }
  if (VG > 0 && Vx) {
    Vx.shakex = 9;
    Vx.state = 3;
    Vx.hurttimer = 30;
    Vx.hurtamt = VG;
  }
  V5.hittarget[VP] += 1;
  if (VG === 0 && Vx) {
    Vx.hurtamt = 0;
    if (Vx.hurttimer <= 15 && Vx.candodge === 1) {
      Vx.dodgetimer = 0;
      Vx.state = 4;
    }
  }
  if (V5.chapter === 2 && g.first("obj_sweet_enemy") && V5.monsterhp[VP] <= 0) {
    V5.monsterhp[VP] = 1;
  }
  let Vh = g.first("obj_queen_enemy") ? 1 : g.first("obj_spamton_neo_enemy") ? 2 : g.first("obj_berdlyb_enemy") ? 3 : 0;
  if (V5.monsterhp[VP] <= 0 && Vh === 0 && Vx) {
    Vx.scr_monsterdefeat();
  }
  if (V5.monsterhp[VP] <= 0 && Vh === 3 && Vx) {
    Vx.endcon = 1;
  }
}
V0(scr_damage_enemy, "scr_damage_enemy");
function scr_damage_check() {
  Vg.damagecheck();
}
V0(scr_damage_check, "scr_damage_check");
export { V2 as a, V5 as b, resetGlobalsForFight as c, scr_gamestart as d, scr_controls_default as e, scr_widen_party as f, charBase as g, scr_charslot as h, scr_havechar as i, krisSlot as j, Ve as k, PARTY as l, scr_resize_party as m, Vn as n, Vk as o, Vr as p, Vu as q, VZ as r, itemEffect as s, scr_iteminfo_all as t, VK as u, scr_spellinfo as v, scr_spellinfo_all as w, scr_tensionheal as x, scr_monsterpop as y, scr_dead as z, scr_revive as A, scr_armorcheck_equipped as B, scr_armorcheck_equipped_party as C, scr_mercyadd as D, scr_heal as E, scr_healall as F, Vg as G, scr_randomtarget as H, scr_targetall as I, scr_damage as J, scr_damage_all as K, dmgTypeOf as L, scr_damage_enemy as M, scr_damage_check as N };
