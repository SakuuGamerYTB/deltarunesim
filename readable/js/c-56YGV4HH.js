const z = function () {
  ;
  let o = true;
  return function (L, g0) {
    const g1 = o ? function () {
      if (g0) {
        const g2 = g0.apply(L, arguments);
        g0 = null;
        return g2;
      }
    } : function () {};
    o = false;
    return g1;
  };
}();
import { c as U } from "./c-YST6GS7R.js";
import { D as A, E as M, p as q, z as V } from "./c-SEM2A64W.js";
import { e as D, f as H } from "./c-PF7AREFU.js";
import { d as W, f as C, n as G, p as Z } from "./c-EUQCKUJR.js";
import { b as i } from "./c-YJJCI5ES.js";
import { _a as O, fb as P, j as h, qb as X } from "./c-FMIAGHDE.js";
import { a as B, e as S, g as x, l as F } from "./c-PIEPTJTC.js";
F();
function setupDummyStats(o) {
  i.monstername[o] = "Dummy";
  i.monstermaxhp[o] = 450;
  i.monsterhp[o] = 450;
  i.monsterat[o] = 0;
  i.monsterdf[o] = 0;
  i.monsterexp[o] = 0;
  i.monstergold[o] = 0;
  i.sparepoint[o] = 0;
  i.mercymod[o] = 0;
  i.mercymax[o] = 100;
  i.canact[o][0] = 1;
  i.actname[o][0] = "Check";
  i.canact[o][1] = 1;
  i.actname[o][1] = "Hug";
  i.canact[o][2] = 1;
  i.actname[o][2] = "Hug Ralsei";
  i.actactor[o][2] = 3;
  i.battlemsg[0] = "* The tutorial begins.";
}
B(setupDummyStats, "setupDummyStats");
var obj_dummyenemy = class g3 extends q {
  create() {
    Object.assign(this, {
      turns: 0,
      talktimer: 0,
      talkmax: 90,
      state: 0,
      flash: 0,
      siner: 0,
      fsiner: 0,
      talked: 0,
      attacked: 0,
      hurt: 0,
      hurttimer: 0,
      mercymod: 0,
      acting: 0,
      actcon: 0,
      con: 0,
      plot: 0,
      checked: 0,
      r_hugtime: 0,
      hugtime: 0,
      dial: 0,
      attackcon: 0,
      misstime: 0,
      hittime: 0,
      defendtime: 0,
      won: 0,
      hitdum: 0,
      ambushed: 0,
      battlecancel: 0,
      spare_command: 0,
      spare_used: 0,
      item_command: 0,
      win_spare: 0,
      ral_wrongcommand: 0,
      ral_wrongcommand_count: 0,
      pacifycon: 0,
      sparecon: 0,
      rtimer: 0,
      dummyhp: 450,
      shakex: 0,
      wontimer: 0,
      mytarget: 0
    });
    this.kris_inithp = i.hp[1];
    this.image_xscale = 2;
    this.image_yscale = 2;
    this.depth = 50;
  }
  userEvent(o) {
    if (o === 12) {
      i.monsterx[this.myself] = this.x + this.sprite_height / 2;
      i.monstery[this.myself] = this.y + this.sprite_height / 2 + 30;
    }
  }
  step() {
    let L = this.myself;
    if (this.ambushed === 0) {
      P.with("obj_writer", g0 => g0.instance_destroy());
      P.with("obj_face", g0 => g0.instance_destroy());
      i.charturn = V();
      i.mnfight = 1;
      i.myfight = -1;
      this.ambushed = 1;
    }
    if (this.plot !== 3) {
      i.charmove[0] = 1;
      i.charmove[1] = 0;
      this.spare_used = i.charspecial[0] === 100 ? 1 : 0;
    } else {
      i.charmove[0] = 0;
      i.charmove[1] = 1;
      if (i.charspecial[1] === 100) {
        this.ral_wrongcommand = 1;
      }
      if (i.charaction[1] === 4) {
        this.ral_wrongcommand = 1;
      }
      if (i.charaction[1] !== 2 && i.charaction[1] !== 4) {
        P.with("obj_attackpress", g0 => {
          P.with("obj_heroparent", g1 => {
            if (g1.state === 1) {
              g1.state = 0;
            }
            g1.attacked = 0;
            g1.itemed = 0;
          });
          i.mnfight = 1;
          i.myfight = -1;
          g0.instance_destroy();
        });
        i.charaction[1] = 0;
        i.faceaction[1] = 0;
      }
    }
    if (i.monster[L] === 1) {
      i.flag[51 + L] = 4;
      let g0 = 0;
      if (i.mnfight === 1 && this.talked === 0) {
        if (this.attackcon === 0) {
          G();
          this.mytarget = 0;
          i.targeted[0] = 1;
          this.attackcon = 1;
          X(320, 170, C);
          X(0, 0, Z);
        }
        i.typer = 45;
        i.fc = 2;
        i.fe = 1;
        i.msg = new Array(100).fill(" ");
        i.msg[0] = "* Skip/%";
        if (this.plot === 0 && this.attackcon === 1) {
          i.fe = 0;
          i.flag[30] = 0;
          i.msg[0] = "\\E0* See that \\cRHEART\\cW, Kris?/";
          i.msg[1] = "* That's your \\cRSOUL\\cW, the culmination of your being!/";
          i.msg[2] = "\\EB* Within^1, it holds your WILL..^1. your COMPASSION.../";
          i.msg[3] = "\\E1* ... and the FATE of the world./";
          i.msg[4] = "\\EB* If it gets hit^1, you and your friends will lose HP./";
          i.msg[5] = "\\E3* If everyone's HP reaches 0^1, we'll lose the battle./";
          i.msg[6] = "\\E0* So^1, please take care to avoid the enemy's attack./";
          i.msg[7] = "\\E8* Ready^1?&* Let's try dodging!/%";
        }
        if (this.plot >= 1) {
          this.dial = 0;
          if (i.charaction[0] === 1) {
            if (this.dummyhp > i.monsterhp[0]) {
              this.dial = 1;
            }
            if (this.dummyhp === i.monsterhp[0] && this.plot === 1) {
              this.dial = 2;
            }
            if (this.dummyhp === i.monsterhp[0] && this.misstime === 9 && this.plot === 2) {
              this.dial = 3;
              i.flag[205] = 6;
            }
            if (this.dial === 1 && this.hitdum >= 3) {
              this.hitdum = 4;
              this.dial = 3;
              i.flag[205] = 4;
            }
          }
          if (i.charaction[0] === 10 && g0 === 0) {
            i.fe = 0;
            i.msg[0] = "\\E0* That's DEFENDING^1, Kris^1.&* You'll recover TP and take less damage./";
            i.msg[1] = "\\E8* You should learn to ATTACK first^1, though./%";
            if (this.defendtime === 1) {
              i.msg[0] = "\\E8* Gee^1, Kris^1!&* You sure are good at defending!/";
              i.msg[1] = "\\E6* I'm not attacking^1, you^1, though, so...&* No need to defend!/%";
            }
            if (this.defendtime === 2) {
              i.fe = 1;
              i.msg[0] = "\\E1* Ummm..^1.&* Kris?/";
              i.msg[1] = "\\E8* There are no bullets^1, and you can't use TP.../";
              i.msg[2] = "\\E8* So^1, umm^1, maybe you could stop defending?/%";
            }
            if (this.defendtime === 3) {
              i.fe = 9;
              i.msg[0] = "\\E9* .../%";
            }
            if (this.plot === 2) {
              i.msg[0] = "\\E8* Great job^1, Kris^1!&* Now that you've gathered TP -/";
              i.msg[1] = "\\E0* How about spending that TP on one of my \\cYSPELLs\\cW?/";
              i.msg[2] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
              i.msg[3] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
              i.msg[4] = "\\E8* It'll fall asleep^1, and we'll win peacefully!/%";
              if (i.monsterhp[0] === i.monstermaxhp[0]) {
                i.msg[2] = "\\E1* If you had^1, um^1, hit the enemy^1, it'd be TIRED now./";
                i.msg[3] = "\\E0* In that case^1, we use my \\cYPACIFY\\cW spell on it.../";
              }
              i.monsterstatus[L] = 1;
              if (i.monstercomment[L] === " ") {
                i.monstercomment[L] = "(Tired)";
              }
              this.plot = 3;
              if (this.defendtime === 4) {
                this.defendtime = 3;
              }
            }
            if (this.defendtime >= 4) {
              this.dial = 3;
              i.flag[205] = 5;
            }
            this.defendtime++;
            g0 = 1;
          }
          if (i.charaction[0] === 4 && g0 === 0) {
            i.fe = 0;
            i.msg[0] = "\\E0* Oh^1, Kris^1, you found an \\cYITEM\\cW?/";
            i.msg[1] = "\\E1* I figured \\cYITEMs\\cW are self-explanatory^1, so.../";
            i.msg[2] = "\\E6* Let's skip over them for now^1, OK?/%";
            if (this.item_command === 1) {
              i.fe = 1;
              i.msg[0] = "\\E3* You really want to learn about \\cYITEMS\\cW, Kris...?/";
              i.msg[1] = "\\E0* OK^1, I'll teach you!/";
              i.msg[2] = "\\E1* Errm.../";
              i.msg[3] = "\\E0* You use them^1, and something happens./";
              i.msg[4] = "\\E8* ... is that sufficient?/%";
            }
            if (this.item_command === 2) {
              i.fe = 6;
              i.msg[0] = "\\E6* Yes^1, haha^1, that \\cYITEM\\cW is very pretty^1, isn't it?/";
              i.msg[1] = "\\E8* I'm glad you're enjoying yourself^1, Kris...!/%";
            }
            if (this.item_command === 3) {
              i.fe = 0;
              i.msg[0] = "\\E8* Kris^1, we can find lots more ITEMs on our journey!/";
              i.msg[1] = "\\E0* Which^1, will continue..^1. after this tutorial./%";
            }
            if (this.item_command >= 4) {
              this.dial = 3;
            }
            g0 = 1;
            this.item_command++;
          }
          if (this.ral_wrongcommand === 1 && g0 === 0) {
            i.msg[0] = "\\E8* Kris^1, please ask me to do a spell./%";
            let g2 = this.ral_wrongcommand_count;
            if (g2 === 0) {
              i.msg[0] = "\\E8* Kris^1, wouldn't you rather learn about \\cYSPELLs\\cW?/%";
            }
            if (g2 === 1) {
              i.msg[0] = "\\E6* Kris^1, do you..^1. know what a \\cYSPELL\\cW is?/";
              i.msg[1] = "\\E1* Can humans not even ASK people to use them...?/%";
            }
            if (g2 === 2) {
              i.msg[0] = "\\E6* Kris^1, what if you just give me a hand sign?/%";
            }
            if (g2 === 3) {
              i.msg[0] = "*\\E8 Ummm^1, if this is too difficult.../";
              i.msg[1] = "* Let's move to the next lesson^1, OK?/";
              i.msg[2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../";
              i.msg[3] = "\\E8* Can be defeated through various \\I3   s of kindness!/";
              i.msg[4] = "* Kris^1, though it's just a dummy^1, why not give it a HUG?/%";
              if (this.plot === 3) {
                this.plot = 4;
              }
              if (i.mercymod[L] >= 100) {
                i.msg[2] = "\\EB* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/";
                i.msg[3] = "\\E0* Because of that^1, its name turned \\cYYELLOW\\cW!/";
                i.msg[4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%";
                this.plot = 5;
              }
            }
            this.ral_wrongcommand_count++;
            g0 = 0;
          }
          if (i.charaction[1] === 2 && this.ral_wrongcommand === 0 && g0 === 0) {
            i.msg[0] = "\\E0* Great^1, Kris^1! A healing spell works too!/";
            i.msg[1] = "* Now I have just a little more to teach you!/";
            i.msg[2] = "* \\I3   ing^1! Through this^1, even the most violent enemies.../";
            i.msg[3] = "\\E8* Can be defeated through various \\I3   s of kindness!/";
            i.msg[4] = "\\E6* Kris^1, though it's just a dummy^1, why not give it a HUG?/%";
            if (this.pacifycon === 1) {
              i.msg[0] = "\\E0* Great^1, Kris^1! We would have won the battle by now!/";
              if (i.monsterstatus[L] === 0) {
                i.msg[0] = "\\E0* Great^1, Kris^1! If it was TIRED we would have won!/";
              }
            }
            this.plot = 4;
            if (i.mercymod[L] >= 100) {
              i.msg[2] = "\\E0* Remember when you \\cYHUGGED\\cW the dummy by \\I3   ing on it?/";
              i.msg[3] = "* Because of that^1, its name turned \\cYYELLOW\\cW!/";
              i.msg[4] = "* Now by using the \\cYSPARE\\cW &(\\I4   ) command^1, you can win!/%";
              this.plot = 5;
            }
            g0 = 1;
          }
          if (this.spare_used === 1 && g0 === 0) {
            if (this.plot < 5) {
              i.fe = 0;
              if (this.spare_command === 0) {
                i.msg[0] = "\\E8* Ah^1, Kris^1, don't worry about that command yet!/%";
              }
              if (this.spare_command === 1) {
                i.msg[0] = "\\E6* You're really merciful^1, aren't you^1, Kris?/%";
              }
              if (this.spare_command >= 2) {
                i.msg[0] = "\\E1* Kris^1, you are aware it's just a dummy^1, right...?/%";
              }
              if (i.mercymod[L] >= 100) {
                this.win_spare++;
              }
              if (this.win_spare === 1) {
                i.fe = 6;
                i.msg[0] = "\\E0* Kris^1, since you SPARED an enemy after ACTING,/";
                i.msg[1] = "\\E1* You would have won in a real battle, but, um.../";
                i.msg[2] = "\\E0* Don't you want to learn other things^1, first?/%";
              }
              if (this.win_spare === 2) {
                i.fe = 6;
                i.msg[0] = "\\E0* I see..^1. Then^1, perhaps we can just end here./";
                i.msg[1] = "\\E1* You know how to win peacefully, so.../";
                i.msg[2] = "\\E8* That's good enough for me!/%";
                this.won = 1;
              }
            }
            if (this.plot === 5) {
              i.msg[0] = "\\E0* Great job^1, Kris^1!&* That'd be the end in a real battle!/";
              i.msg[1] = "\\E8* I'm really happy I had the chance to teach you^1, Kris!/%";
              this.won = 1;
            }
            this.spare_used = 0;
            this.spare_command++;
            g0 = 1;
          }
          if (this.dial === 1) {
            if (this.plot === 1) {
              i.fe = 3;
              if (this.dummyhp > i.monsterhp[0] + 50) {
                i.msg[0] = "\\E3* W-wow^1, Kris^1!&* That was an amazing attack!/";
                i.msg[1] = "\\E8* Have you done this before or something...?/";
              } else {
                i.msg[0] = "\\E0* Good job^1, Kris^1!&* By the way^1, you'll do more damage.../";
                i.msg[1] = "\\E8* Pressing Z when the cursor enters the box on the left!/";
              }
              if (this.misstime >= 6) {
                i.fe = 8;
                i.msg[0] = "\\E3* Kris^1!&* You did it!!!/";
                i.msg[1] = "\\E8* (I was really just about at my limit...)/";
              }
              i.msg[2] = "\\E0* OK, next let's try DEFENDING. (\\I1    )/";
              i.msg[3] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../";
              i.msg[4] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/";
              i.msg[5] = "* (Watch the orange big bar on the left^1! I'll explain it next!)/%";
              this.plot = 2;
              if (this.defendtime >= 1) {
                i.msg[2] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
                i.msg[3] = "* The big orange TP bar on the left filled up a bit!/";
                i.msg[4] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
                i.msg[5] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
                i.msg[6] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
                i.msg[7] = "* It'll fall asleep^1, and we'll win peacefully!/%";
                this.plot = 3;
                i.monsterstatus[L] = 1;
                i.monstercomment[L] = "(Tired)";
              }
            } else {
              if (this.hitdum === 0) {
                i.fe = 1;
                i.msg[0] = "\\E1* Ummm..^1. Kris^1?&* You don't need to hit it anymore./";
                i.msg[1] = "\\E8* I already know you're great at attacking!/%";
              }
              if (this.hitdum === 1) {
                i.fe = 1;
                i.msg[0] = "\\E1* U-umm^1, Kris..^1. H-How do I put this...?/";
                i.msg[1] = "\\E1* Kris^1, seeing you^1, um^1, attack an effigy of myself.../";
                i.msg[2] = "\\E6* ... Kris^1, are you trying to say something?/%";
              }
              if (this.hitdum === 2) {
                i.fe = 6;
                i.msg[0] = "\\E6* Ah^1, Kris..^1. I..^1. um^1, I think I understand./";
                i.msg[1] = "\\E1* W^1-well^1, if..^1. during our adventure,/";
                i.msg[2] = "\\E7* ... if you want to hit me^1, that's OK^1, too!/%";
              }
              if (this.hitdum >= 3) {
                this.dial = 3;
              }
              this.hitdum++;
            }
          }
          if (this.dial === 2) {
            i.fe = 3;
            i.msg[0] = "\\E3* Oh^1, sorry^1, Kris^1!&* I forgot to mention^1!&* When you're ATTACKing.../";
            i.msg[1] = "\\E8* Press Z again when the cursor goes in the box!/%";
            if (this.misstime >= 1) {
              i.fe = 8;
              i.msg[0] = "\\E8* It's OK^1, Kris^1!&* You'll get it^1!&* Try again!/%";
              let g4 = this.misstime;
              if (g4 === 2) {
                i.msg[0] = "\\E8* Press Z when the white rectangle's in the blue box!/%";
              }
              if (g4 === 3) {
                i.msg[0] = "\\E6* Ummm..^1. you can press Z a lot^1, if it helps!/%";
              }
              if (g4 === 4) {
                i.msg[0] = "\\E6* Kris..^1.&* Please try to press Z./%";
              }
              if (g4 === 5) {
                i.msg[0] = "\\E6* Ummm^1, Kris^1?&* Can you see the white rectangle?/%";
              }
              if (g4 === 6) {
                i.msg[0] = "\\E8* You know rectangles^1?&* They're like messed-up squares?/%";
              }
              if (g4 === 7) {
                i.fe = 9;
                i.msg[0] = "\\E9* .../%";
              }
              if (g4 === 8) {
                i.fe = 1;
                i.msg[0] = "\\E6* Umm^1, perhaps we should try something else?/%";
                this.plot = 2;
                if (this.defendtime >= 1) {
                  i.msg[0] = "\\E6* Umm^1, perhaps we should try something else?/";
                  i.msg[1] = "\\E0* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
                  i.msg[2] = "* The big orange TP bar on the left filled up a bit!/";
                  i.msg[3] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
                  i.msg[4] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
                  i.msg[5] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
                  i.msg[6] = "* It'll fall asleep^1, and we'll win peacefully!/%";
                  this.plot = 3;
                  i.monsterstatus[L] = 1;
                  i.monstercomment[L] = "(Tired)";
                }
              }
            }
            this.misstime++;
          }
          if (this.dial === 3) {
            i.fe = 9;
            i.msg[0] = "\\E9* .../";
            i.msg[1] = "\\E8* Kris^1, I think I've^1, um^1, perhaps.../";
            i.msg[2] = "\\E1* Reached the limits of what I can teach you today./";
            i.msg[3] = "\\E0* Let's go find Susie./%";
            if (this.hitdum >= 4) {
              i.msg[0] = "\\E9* Kris^1, I don't mean to interrupt^1, but.../";
              i.msg[1] = "\\E3* You're going to break the dummy at this rate./";
              i.msg[2] = "\\E1* I suppose we'll have to stop here for now./%";
            }
            this.won = 1;
            i.myfight = 999;
            i.mnfight = 999;
          }
        }
        let g1 = D();
        if (i.msg[0] === "* Skip/%") {
          P.with("obj_writer", g5 => g5.instance_destroy());
          P.with("obj_face", g5 => g5.instance_destroy());
        }
        this.acting = 0;
        this.spare_used = 0;
        this.dummyhp = i.monsterhp[L];
        this.talked = 1;
        this.talktimer = 0;
        this.ral_wrongcommand = 0;
      }
      if (this.talked === 1 && i.mnfight === 1) {
        if (this.won === 0) {
          this.rtimer = 0;
          if (!P.exists("obj_writer")) {
            i.mnfight = 2;
          }
          if (i.mnfight === 2 && this.attackcon === 1) {
            if (!P.exists("obj_moveheart") && !P.exists("obj_heart")) {
              G();
            }
            if (!P.exists("obj_growtangle")) {
              X(320, 170, C);
            }
          }
        } else if (!P.exists("obj_writer")) {
          this.scr_monsterdefeat();
          M();
        }
      }
      if (i.mnfight === 2 && this.attacked === 0) {
        if (this.attackcon !== 1) {
          this.rtimer = 8;
        }
        this.rtimer++;
        if (this.rtimer >= 8) {
          let g5 = X(this.x, this.y, U);
          g5.type = 14;
          g5.target = this.mytarget;
          g5.damage = i.monsterat[L] * 5;
          this.turns++;
          i.turntimer = 150;
          if (this.attackcon === 1) {
            this.battlecancel = 2;
          }
          if (this.attackcon !== 1) {
            i.turntimer = -100;
            g5.instance_destroy();
          }
          this.attackcon = 2;
          this.attacked = 1;
          i.typer = 6;
          i.fc = 0;
          i.battlemsg[0] = "* What?";
          if (this.plot === 1) {
            i.battlemsg[0] = "* Let's try FIGHTing!&  (\\I0    )";
          }
          if (this.plot === 2) {
            i.battlemsg[0] = "* Let's try DEFENDing!&  (\\I1    )";
          }
          if (this.plot === 3) {
            i.battlemsg[0] = "* Let's try SPELLs!&  (\\I2    )";
          }
          if (this.plot === 4) {
            i.battlemsg[0] = "* Let's ACT!&  (\\I3    )";
          }
          if (this.plot === 5) {
            i.battlemsg[0] = "* Let's SPARE!&  (\\I4    )";
          }
          this.spare_used = 0;
          this.ral_wrongcommand = 0;
        } else {
          i.turntimer = 150;
        }
      }
      if (i.mnfight === 2 && i.turntimer <= 1 && this.battlecancel === 2) {
        let g6 = P.first("obj_battlecontroller");
        if (g6) {
          g6.noreturn = 1;
        }
        this.con = 1;
        this.battlecancel = 3;
      }
    }
    if (this.con === 1) {
      this.con = 2;
      this.alarm[5] = 2;
    }
    if (this.con === 3) {
      i.typer = 45;
      i.fc = 2;
      i.fe = 0;
      i.msg = new Array(100).fill(" ");
      i.msg[0] = "* Great job^1, Kris^1!&* You're a natural!/";
      if (this.kris_inithp > i.hp[1]) {
        i.fe = 6;
        i.msg[0] = "\\E6* Ouch^1, it's OK^1, Kris^1! You're still learning!/";
      }
      i.msg[1] = "\\E8* Anyhow^1, after the enemy attacks^1, it's our turn^1, Kris!/";
      i.msg[2] = "\\E0* First^1, I'll teach you how to \\cYFIGHT\\cW (\\I0    )./";
      i.msg[3] = "\\E1* Though \\cYFIGHTing\\cW is unnecessary in this world.../";
      i.msg[4] = "\\E8* There's no harm in a thorough lesson!/%";
      i.battlemsg[0] = "* Let's try FIGHTing!&  (\\I0   )";
      D();
      this.con = 6;
    }
    if (this.con === 6 && !P.exists("obj_writer")) {
      let g7 = P.first("obj_battlecontroller");
      if (g7) {
        g7.noreturn = 0;
        g7.alarm[2] = 2;
      }
      this.battlecancel = 0;
      if (this.plot === 0) {
        this.plot = 1;
      }
      this.con = 7;
    }
    if (i.myfight === 3) {
      this.actStep();
    }
    if (this.state === 3) {
      this.hurttimer--;
      if (this.hurttimer < 0) {
        this.state = 0;
      }
    }
    if (this.shakex > 0) {
      this.shakex -= 1;
    }
  }
  alarmEvent(o) {
    if (o === 5) {
      this.con = 3;
    }
    if (o === 4) {
      this.actcon++;
    }
  }
  actStep() {
    let L = this.myself;
    if (this.acting === 1 && this.actcon === 0) {
      this.actcon = 1;
      i.msg = new Array(100).fill(" ");
      i.msg[0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./%";
      if (this.checked === 0) {
        i.msg[0] = "* DUMMY - AT 0 DF 0&* Cotton heart and button eye&* Looks just like a fluffy guy./";
        i.fc = 2;
        i.fe = 6;
        i.msg[1] = "* Er^1, sorry^1, it kind of looks like me.../";
        i.msg[2] = "\\E1* I've been alone^1, so I didn't have anyone to model it after.../";
        i.msg[3] = "\\E6* Kris^1, since it's me^1, please be kind to it^1, OK?/%";
        i.typer = 45;
        D();
      } else {
        H();
      }
      this.checked++;
    }
    if (this.acting === 2 && this.actcon === 0) {
      this.actcon = 10;
      let g0 = P.first("obj_herokris");
      if (g0) {
        i.faceaction[g0.myself] = 0;
        g0.state = 0;
        g0.acttimer = 0;
      }
      i.msg = new Array(100).fill(" ");
      i.msg[0] = "* You hug the DUMMY./%";
      H();
    }
    if (this.actcon === 1 && !P.exists("obj_writer")) {
      i.acting = [0, 0, 0];
      this.actcon = 0;
      this.acting = -1;
      A();
    }
    if (this.actcon === 10) {
      let g1 = P.first("obj_herokris");
      g1.visible = false;
      this.k = W(g1.x, g1.y, "spr_kris_hug");
      this.k.image_speed = 0;
      this.k.depth = g1.depth - 1;
      this.moveTo(this.k, i.monsterx[0] - 42, i.monstery[0] - 30, 15);
      this.actcon = 11;
      this.alarm[4] = 25;
    }
    if (this.actcon === 12) {
      this.k.image_speed = 0.25;
      this.actcon = 13;
      this.alarm[4] = 12;
    }
    if (this.actcon === 14) {
      this.k.image_speed = 0;
      this.actcon = 15;
    }
    if (this.actcon === 15 && !P.exists("obj_writer")) {
      i.flag[205] = 1;
      i.typer = 45;
      i.fc = 2;
      i.fe = 0;
      i.msg = new Array(100).fill(" ");
      i.msg[0] = "* How caring^1, Kris!/%";
      if (this.plot === 5) {
        i.msg[0] = "* That's great^1, Kris^1!&* Just one hug is enough^1, though!/%";
        if (this.hugtime >= 1) {
          i.msg[0] = "\\E8* Kris^1, you don't need to hug it anymore./%";
        }
        this.hugtime++;
      }
      if (this.plot === 1) {
        i.fe = 3;
        i.msg[0] = "* Huh...^1? Kris^1, you'd rather hug it out than fight?/";
        i.msg[1] = "\\E1* .../";
        i.msg[2] = "\\E8* You know what^1, that's fine^1! We don't need to fight!/";
        i.msg[3] = "* OK, next let's try DEFENDING. (\\I1    )/";
        i.msg[4] = "* Simply (\\I1   )^1, and the enemy's attack will hurt you less.../";
        i.msg[5] = "* Not only that^1, but you'll also gather \\cYTP\\cW!/";
        i.msg[6] = "* (Watch the orange big bar on the left^1! I'll explain it next!/%";
        this.plot = 2;
        if (this.defendtime >= 1) {
          i.msg[3] = "* Kris^1, if you didn't notice^1, when you DEFENDED before -/";
          i.msg[4] = "* The big orange TP bar on the left filled up a bit!/";
          i.msg[5] = "* How about spending that TP on one of my \\cYSPELLs\\cW?/";
          i.msg[6] = "* Because you hit the enemy enough^1, it got \\cBTIRED\\cW./";
          i.msg[7] = "* Now^1, if I use my \\cYPACIFY\\cW spell on it.../";
          i.msg[8] = "* It'll fall asleep^1, and we'll win peacefully!/%";
          this.plot = 3;
        }
      }
      if (this.plot === 4) {
        i.fe = 8;
        i.msg[0] = "* Aww^1, that's great^1, Kris!/";
        i.msg[1] = "\\E0* Each enemy has different ACTs that satisfy them./";
        i.msg[2] = "* When an enemy is satisfied^1, its name turns \\cYYELLOW\\cW./";
        i.msg[3] = "* When that happens^1, you can defeat it by SPARING (\\I4    ) it!/";
        i.msg[4] = "* If we \\cYSPARE\\cW all the enemies we meet^1, we'll never have to \\cYFIGHT\\cW!/%";
        this.plot = 5;
      }
      D();
      this.actcon = 16;
    }
    if (this.actcon === 16 && !P.exists("obj_writer")) {
      P.with("obj_face", g2 => g2.instance_destroy());
      this.k.image_speed = -0.25;
      this.actcon = 17;
      this.alarm[4] = 12;
    }
    if (this.actcon === 18) {
      this.k.image_speed = 0;
      let g2 = P.first("obj_herokris");
      this.moveTo(this.k, g2.x, g2.y, 15);
      this.actcon = 19;
      this.alarm[4] = 25;
    }
    if (this.actcon === 20) {
      this.k.instance_destroy();
      i.mercymod[0] = 100;
      i.mercymod[1] = 100;
      P.first("obj_herokris").visible = true;
      this.actcon = 1;
    }
    if (this.acting === 3 && this.actcon === 0) {
      let g4 = P.first("obj_herokris");
      let g5 = P.first("obj_heroralsei");
      if (g4) {
        i.faceaction[g4.myself] = 0;
        g4.state = 0;
        g4.acttimer = 0;
      }
      if (g5) {
        i.faceaction[g5.myself] = 0;
        g5.state = 0;
        g5.acttimer = 0;
      }
      this.actcon = 30;
      i.msg = new Array(100).fill(" ");
      i.msg[0] = "* You hug RALSEI./%";
      H();
    }
    if (this.actcon === 30) {
      let g6 = P.first("obj_herokris");
      let g7 = P.first("obj_heroralsei");
      g6.visible = false;
      this.k = W(g6.x, g6.y, "spr_kris_hug");
      this.k.image_speed = 0;
      this.k.depth = -100;
      this.moveTo(this.k, g7.x - 24, g7.y + 10, 15);
      this.actcon = 31;
      this.alarm[4] = 25;
    }
    if (this.actcon === 32) {
      let g8 = P.first("obj_heroralsei");
      g8.visible = false;
      this.rb = W(g8.x, g8.y, "spr_ralseil_blush");
      this.rb.depth = -99;
      this.rb.image_speed = 0;
      this.k.image_speed = 0.25;
      this.actcon = 33;
      this.alarm[4] = 12;
    }
    if (this.actcon === 34) {
      this.k.image_speed = 0;
      this.actcon = 35;
    }
    if (this.actcon === 35 && !P.exists("obj_writer")) {
      i.typer = 45;
      i.fc = 2;
      i.fe = 2;
      i.msg = new Array(100).fill(" ");
      i.msg[0] = "* K..^1. Kris!?/%";
      let g9 = this.r_hugtime;
      if (g9 === 0) {
        i.msg[0] = "* K..^1. Kris!?/";
        i.msg[1] = "\\E8* Ummm^1, I don't think^1, um.../";
        i.msg[2] = "* This is what you're supposed to be doing./";
        i.msg[3] = "\\E2* ... but.../%";
      }
      if (g9 === 1) {
        i.msg[0] = "* Kris...?/";
        i.msg[1] = "\\E2* Are you trying^1, to^1, um.../";
        i.msg[2] = "\\E6* Ask me to give you a tutorial on hugging...?/%";
      }
      if (g9 === 2) {
        i.msg[0] = "* Ummm^1, I've never hugged anyone before.../";
        i.msg[1] = "\\E1* (Besides the dummy^1, to test it out,)/";
        i.msg[2] = "\\E2* So I don't know anything about it^1, sorry.../";
        i.msg[3] = "\\E7* I suppose you're the one teaching me^1, haha!/%";
      }
      if (g9 >= 3) {
        i.msg[0] = "\\E2* .../%";
      }
      this.r_hugtime++;
      D();
      this.actcon = 36;
    }
    if (this.actcon === 36 && !P.exists("obj_writer")) {
      P.with("obj_face", gg => gg.instance_destroy());
      this.k.image_speed = -0.25;
      this.actcon = 37;
      this.alarm[4] = 12;
    }
    if (this.actcon === 38) {
      this.k.image_speed = 0;
      let gg = P.first("obj_herokris");
      this.moveTo(this.k, gg.x, gg.y, 15);
      this.actcon = 39;
      this.alarm[4] = 25;
    }
    if (this.actcon === 40) {
      if (this.rb) {
        this.rb.instance_destroy();
      }
      P.first("obj_heroralsei").visible = true;
      this.k.instance_destroy();
      P.first("obj_herokris").visible = true;
      this.actcon = 1;
    }
    if (this.k && !this.k.destroyed) {
      if (this.k.image_index < 0) {
        this.k.image_index = 0;
      }
      if (this.k.image_index > 3) {
        this.k.image_index = 3;
      }
    }
  }
  moveTo(L, g0, g1, g2) {
    let g4 = Math.hypot(g0 - L.x, g1 - L.y);
    L.move_towards_point(g0, g1, g4 / g2);
    L.alarm[0] = g2;
    L.alarmEvent = function (g5) {
      if (g5 === 0) {
        this.x = g0;
        this.y = g1;
        this.speed = 0;
      }
    };
  }
  draw(o) {
    let L = this.shakex > 0 ? h(this.shakex * 2) - this.shakex : 0;
    o.draw_sprite_ext("spr_dummymonster", 0, this.x + L, this.y, 2, 2, 0, this.image_blend, this.image_alpha);
    if (this.flash === 1) {
      this.fsiner++;
      o.draw_sprite_white("spr_dummymonster", 0, this.x + L, this.y, 2, 2, 0, -Math.cos(this.fsiner / 5) * 0.4 + 0.6);
    }
    if (this.becomeflash === 0) {
      this.flash = 0;
    }
    this.becomeflash = 0;
  }
};
B(obj_dummyenemy, "obj_dummyenemy");
S(obj_dummyenemy, "kinds", O("obj_dummyenemy", q));
S(obj_dummyenemy, "defaultDepth", 90);
S(obj_dummyenemy, "defaultSprite", "spr_dummymonster");
var J = obj_dummyenemy;
x(J, "G.mnfight = 1;G.mnfight = 1;G.myfight = 999;G.mnfight = 999;G.mnfight = 2;");
export { setupDummyStats as a, J as b };
