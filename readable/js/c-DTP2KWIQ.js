const P = function () {
  ;
  let n0 = true;
  return function (n1, n2) {
    const n3 = n0 ? function () {
      if (n2) {
        const n4 = n2.apply(n1, arguments);
        n2 = null;
        return n4;
      }
    } : function () {};
    n0 = false;
    return n3;
  };
}();
import { c as t } from "./c-DLYKGROY.js";
import { a as y, l as r } from "./c-PIEPTJTC.js";
r();
var o = {
  "0:obj_silhouette_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_maskfield",
      expect: {
        types: [],
        objs: ["obj_maskfield"],
        names: []
      }
    }]
  },
  "1:obj_joker": {
    field: "jattack",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "jattack 0 - type 70",
      expect: {
        types: ["type 70"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "jattack 1 - type 65",
      expect: {
        types: ["type 65"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "jattack 2 - type 49",
      expect: {
        types: ["type 49"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "jattack 3 - type 75",
      expect: {
        types: ["type 75"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "jattack 4 - type 62",
      expect: {
        types: ["type 62"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "jattack 5 - type 50",
      expect: {
        types: ["type 50"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "jattack 6 - type 73",
      expect: {
        types: ["type 73"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "jattack 7 - type 68",
      expect: {
        types: ["type 68"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "jattack 8 - type 61",
      expect: {
        types: ["type 61"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "jattack 9 - type 48",
      expect: {
        types: ["type 48"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "jattack 10 - type 72",
      expect: {
        types: ["type 72"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "11",
      pin: 11,
      cond: "11",
      id: "jattack 11 - type 76",
      expect: {
        types: ["type 76"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "12",
      pin: 12,
      cond: "12",
      id: "jattack 12 - type 71",
      expect: {
        types: ["type 71"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "13",
      pin: 13,
      cond: "13",
      id: "jattack 13 - type 46",
      expect: {
        types: ["type 46"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "14",
      pin: 14,
      cond: "14",
      id: "jattack 14 - type 74",
      expect: {
        types: ["type 74"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "15",
      pin: 15,
      cond: "15",
      id: "jattack 15 - type 77",
      expect: {
        types: ["type 77"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_dummyenemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "type 14",
      expect: {
        types: ["type 14"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_lancerboss": {
    field: "attacks",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "attacks 0 - obj_lancerbike",
      expect: {
        types: [],
        objs: ["obj_lancerbike"],
        names: []
      }
    }]
  },
  "1:obj_diamondenemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_heartenemy": {
    field: "rr",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_spinheart"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "!1",
      id: "rr !1 - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_heartshaper"],
        names: []
      }
    }]
  },
  "1:obj_smallcheckers_enemy": {
    field: "rr",
    attacks: [{
      key: "999",
      pin: 999,
      cond: "999",
      id: "rr 999 - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_spinheart"],
        names: []
      }
    }]
  },
  "1:obj_clubsenemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - type 2",
      expect: {
        types: ["type 2"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - type 4",
      expect: {
        types: ["type 4"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_checkers_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "type 3",
      expect: {
        types: ["type 3", "type 1"],
        objs: ["obj_checkers_leap", "obj_throwtarget", "obj_throwralsei", "obj_checker_animtest"],
        names: []
      }
    }]
  },
  "1:obj_ponman_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_regularbullet",
      expect: {
        types: [],
        objs: ["obj_regularbullet"],
        names: []
      }
    }]
  },
  "1:obj_rabbick_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - type 30",
      expect: {
        types: ["type 30"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - type 32",
      expect: {
        types: ["type 32"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_bloxer_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - type 26",
      expect: {
        types: ["type 26"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_lancerboss2": {
    field: "turns",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "turns 0 - type 20",
      expect: {
        types: ["type 20"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "turns 1 - type 21",
      expect: {
        types: ["type 21"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "3",
      pin: 3,
      cond: ">=3",
      id: "turns >=3 - type 24",
      expect: {
        types: ["type 24"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_jigsawryenemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0",
      expect: {
        types: [],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_rudinnranger": {
    field: "rr",
    attacks: [{
      key: "99",
      pin: 99,
      cond: "99",
      id: "rr 99 - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "!99",
      id: "rr !99 - obj_dknight_slasher",
      expect: {
        types: [],
        objs: ["obj_dknight_slasher"],
        names: []
      }
    }]
  },
  "1:obj_headhathy": {
    field: "rr",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_spinheart"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "!1",
      id: "rr !1 - type 33",
      expect: {
        types: ["type 33"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_susieenemy": {
    field: "attacktype",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "attacktype 0 - obj_lancerbike_neo",
      expect: {
        types: [],
        objs: ["obj_lancerbike_neo"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "attacktype 1 - type 20",
      expect: {
        types: ["type 20"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "attacktype 2 - type 85",
      expect: {
        types: ["type 85"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_lancerboss3": {
    field: "attacks",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "attacks 0 - obj_lancerbike",
      expect: {
        types: [],
        objs: ["obj_lancerbike"],
        names: []
      }
    }]
  },
  "1:obj_king_boss": {
    field: "attack",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "attack 1 - type 21",
      expect: {
        types: ["type 21"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "attack 2 - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_chainking"],
        names: []
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "attack 3 - type 34",
      expect: {
        types: ["type 34"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "attack 4 - type 5",
      expect: {
        types: ["type 5"],
        objs: ["obj_growtangle_bouncer"],
        names: []
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "attack 6 - type 2",
      expect: {
        types: ["type 2"],
        objs: ["obj_chainking"],
        names: []
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "attack 7 - type 35",
      expect: {
        types: ["type 35"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "attack 8 - type 3",
      expect: {
        types: ["type 3"],
        objs: ["obj_growtangle_bouncer"],
        names: []
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "attack 9 - type 23",
      expect: {
        types: ["type 23"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "1:obj_ralseienemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_ralseibullet",
      expect: {
        types: [],
        objs: ["obj_ralseibullet"],
        names: []
      }
    }]
  },
  "1:obj_cutenemy": {
    field: null,
    attacks: []
  },
  "1:obj_clubsenemy_old": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - type 2",
      expect: {
        types: ["type 2"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - type 4",
      expect: {
        types: ["type 4"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "2:obj_omawaroid_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - Vaccine - type 15",
      expect: {
        types: ["type 15"],
        objs: ["obj_dbulletcontroller"],
        names: ["Vaccine"]
      }
    }]
  },
  "2:obj_poppup_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - Birds - type 11",
      expect: {
        types: ["type 11"],
        objs: ["obj_dbulletcontroller"],
        names: ["Birds"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - Popups - type 12",
      expect: {
        types: ["type 12"],
        objs: ["obj_dbulletcontroller"],
        names: ["Popups"]
      }
    }]
  },
  "2:obj_tasque_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - YarnBalls - type 2",
      expect: {
        types: ["type 2"],
        objs: ["obj_dbulletcontroller"],
        names: ["YarnBalls"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: ">0",
      id: "rr >0 - MeowWow - type 3",
      expect: {
        types: ["type 3"],
        objs: ["obj_dbulletcontroller"],
        names: ["MeowWow"]
      }
    }]
  },
  "2:obj_werewire_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_werewire_zzt_balloon",
      expect: {
        types: [],
        objs: ["obj_werewire_zzt_balloon", "obj_werewire_bullet_lasercircle", "obj_werewire_bullet_lasersquare", "obj_werewire_throwtarget", "obj_werewire_throwkris"],
        names: []
      }
    }]
  },
  "2:obj_maus_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - MausHoles - type 17",
      expect: {
        types: ["type 17"],
        objs: ["obj_dbulletcontroller"],
        names: ["MausHoles"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - MausTrail - type 19",
      expect: {
        types: ["type 19"],
        objs: ["obj_dbulletcontroller"],
        names: ["MausTrail"]
      }
    }]
  },
  "2:obj_virovirokun_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - Invader - type 13",
      expect: {
        types: ["type 13"],
        objs: ["obj_dbulletcontroller"],
        names: ["Invader"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - Viruses - type 14",
      expect: {
        types: ["type 14"],
        objs: ["obj_dbulletcontroller"],
        names: ["Viruses"]
      }
    }]
  },
  "2:obj_swatchling_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "Bounce - type 7",
      expect: {
        types: ["type 7", "type 5", "type 6"],
        objs: ["obj_swatchling_battle_controller", "obj_dbulletcontroller"],
        names: ["Bounce", "Shockwave", "Platter"]
      }
    }]
  },
  "2:obj_tasque_manager_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - WhipAttack - type 20",
      expect: {
        types: ["type 20"],
        objs: ["obj_dbulletcontroller"],
        names: ["WhipAttack"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - RisingDiamonds - type 1",
      expect: {
        types: ["type 1", "type 32"],
        objs: ["obj_dbulletcontroller"],
        names: ["RisingDiamonds", "QuizAttack"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "rr 2 - QuizAttack - type 32",
      expect: {
        types: ["type 32"],
        objs: ["obj_dbulletcontroller"],
        names: ["QuizAttack"]
      }
    }]
  },
  "2:obj_berdlyb_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - Tornado - type 8",
      expect: {
        types: ["type 8"],
        objs: ["obj_dbulletcontroller"],
        names: ["Tornado"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - SpearBlast - type 9",
      expect: {
        types: ["type 9"],
        objs: ["obj_dbulletcontroller"],
        names: ["SpearBlast"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "!1",
      id: "rr !1 - Chirashi - type 10",
      expect: {
        types: ["type 10"],
        objs: ["obj_dbulletcontroller"],
        names: ["Chirashi"]
      }
    }]
  },
  "2:obj_queen_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - ImageSearch - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["ImageSearch"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - QueenUltimate - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["QueenUltimate"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "rr 2 - Wine - type 2",
      expect: {
        types: ["type 2", "type 2.1", "type 2.2"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["Wine"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "rr 3 - Stomp - type 3",
      expect: {
        types: ["type 3", "type 3.1", "type 3.2", "type 3.3", "type 3.4"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["Stomp"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "rr 4 - NewSocialMedia - type 106",
      expect: {
        types: ["type 106", "type 107", "type 105"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["NewSocialMedia"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "rr 5 - Bufferbullet - type 5",
      expect: {
        types: ["type 5"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["Bufferbullet"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "rr 6 - Explosion - type 6",
      expect: {
        types: ["type 6", "type 6.1"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["Explosion"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "rr 7 - BerdlyTornado - type 112",
      expect: {
        types: ["type 112", "type 113", "type 7", "type 7.5"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["BerdlyTornado", "BerdlyFeather"]
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "rr 8 - QueenLaser - type 100",
      expect: {
        types: ["type 100", "type 101", "type 102", "type 114", "type 115", "type 116"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["QueenLaser"]
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "rr 9 - Plug - type 110",
      expect: {
        types: ["type 110", "type 111"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["Plug"]
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "rr 10 - Birthday - type 8",
      expect: {
        types: ["type 8"],
        objs: ["obj_queen_bulletcontroller"],
        names: ["Birthday"]
      }
    }]
  },
  "2:obj_spamton_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - Minitons - type 23",
      expect: {
        types: ["type 23"],
        objs: ["obj_dbulletcontroller"],
        names: ["Minitons"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - WordBullets - type 24",
      expect: {
        types: ["type 24"],
        objs: ["obj_dbulletcontroller"],
        names: ["WordBullets"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "!1",
      id: "rr !1 - MoneyVacuum - type 25",
      expect: {
        types: ["type 25"],
        objs: ["obj_dbulletcontroller"],
        names: ["MoneyVacuum"]
      }
    }]
  },
  "2:obj_spamton_neo_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - FlyingHeads - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_sneo_bulletcontroller"],
        names: ["FlyingHeads"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - FootballPipis - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_sneo_bulletcontroller"],
        names: ["FootballPipis"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "rr 2 - HeartAttackNeo - type 1.5",
      expect: {
        types: ["type 1.5"],
        objs: ["obj_sneo_bulletcontroller"],
        names: ["HeartAttackNeo"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "rr 4 - Phonehands - type 8.5",
      expect: {
        types: ["type 8.5"],
        objs: ["obj_sneo_bulletcontroller"],
        names: ["Phonehands"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "rr 5 - PipisExplosion - type 51",
      expect: {
        types: ["type 51"],
        objs: ["obj_dbulletcontroller"],
        names: ["PipisExplosion"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "rr 6 - RECREWColumns - type 6",
      expect: {
        types: ["type 6"],
        objs: ["obj_sneo_bulletcontroller"],
        names: ["RECREWColumns"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "rr 7 - SneoFaceAttack - type 12",
      expect: {
        types: ["type 12"],
        objs: ["obj_sneo_bulletcontroller"],
        names: ["SneoFaceAttack"]
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "rr 8 - Phonecall",
      expect: {
        types: [],
        objs: ["obj_sneo_phonecall"],
        names: ["Phonecall"]
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "rr 9 - NeoFinale - type 9",
      expect: {
        types: ["type 9"],
        objs: ["obj_sneo_bulletcontroller"],
        names: ["NeoFinale"]
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "rr 10 - diamonds - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: ["diamonds"]
      }
    }]
  },
  "2:obj_sweet_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "musical bullets",
      expect: {
        types: [],
        objs: ["obj_musicalbullet_controller", "obj_musicenemy_boombox", "obj_musicenemy_dancer", "obj_musical_battle_end"],
        names: ["musical bullets"]
      }
    }]
  },
  "2:obj_kk_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "musical bullets",
      expect: {
        types: [],
        objs: ["obj_musicalbullet_controller", "obj_musicenemy_boombox", "obj_musicenemy_dancer"],
        names: ["musical bullets"]
      }
    }]
  },
  "2:obj_hatguy_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "musical bullets",
      expect: {
        types: [],
        objs: ["obj_musicalbullet_controller", "obj_musicenemy_boombox", "obj_musicenemy_dancer"],
        names: ["musical bullets"]
      }
    }]
  },
  "2:obj_rouxls_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - ThrashHead - type 26",
      expect: {
        types: ["type 26"],
        objs: ["obj_dbulletcontroller"],
        names: ["ThrashHead"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - ThrashFoot - type 27",
      expect: {
        types: ["type 27"],
        objs: ["obj_dbulletcontroller"],
        names: ["ThrashFoot"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "!1",
      id: "rr !1 - PuzzleBlocks - type 28",
      expect: {
        types: ["type 28"],
        objs: ["obj_dbulletcontroller"],
        names: ["PuzzleBlocks"]
      }
    }]
  },
  "2:obj_werewerewire_enemy": {
    field: "rr",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - type 34",
      expect: {
        types: ["type 34"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "2:obj_clubsenemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - type 30",
      expect: {
        types: ["type 30"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - type 31",
      expect: {
        types: ["type 31"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "!1",
      id: "rr !1 - type 33",
      expect: {
        types: ["type 33"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "2:obj_dojograzeenemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - HomingDiamonds - type 48",
      expect: {
        types: ["type 48"],
        objs: ["obj_dbulletcontroller"],
        names: ["HomingDiamonds"]
      }
    }]
  },
  "2:obj_baseenemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - HomingDiamonds - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_dbulletcontroller"],
        names: ["HomingDiamonds"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - RisingDiamonds - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: ["RisingDiamonds"]
      }
    }]
  },
  "2:obj_berdlyb2_enemy": {
    field: "chosenattack",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "chosenattack 0 - Tornado - type 8",
      expect: {
        types: ["type 8"],
        objs: ["obj_dbulletcontroller"],
        names: ["Tornado"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "chosenattack 1 - SpearBlast - type 9",
      expect: {
        types: ["type 9"],
        objs: ["obj_dbulletcontroller"],
        names: ["SpearBlast"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "!1",
      id: "chosenattack !1 - Chirashi - type 10",
      expect: {
        types: ["type 10"],
        objs: ["obj_dbulletcontroller"],
        names: ["Chirashi"]
      }
    }]
  },
  "2:obj_mauswheel_enemy": {
    field: "rr",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - MausTrail - type 19",
      expect: {
        types: ["type 19"],
        objs: ["obj_dbulletcontroller"],
        names: ["MausTrail"]
      }
    }]
  },
  "2:obj_gigaqueen_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "gigamissle - type 46",
      expect: {
        types: ["type 46", "type 47"],
        objs: ["obj_dbulletcontroller"],
        names: ["gigamissle", "gigabreath"]
      }
    }]
  },
  "2:obj_dojo_spareenemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_launchanim",
      expect: {
        types: [],
        objs: ["obj_launchanim"],
        names: []
      }
    }]
  },
  "2:obj_pipis_enemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - PipisExplosion - type 50",
      expect: {
        types: ["type 50"],
        objs: ["obj_dbulletcontroller"],
        names: ["PipisExplosion"]
      }
    }]
  },
  "2:obj_cutenemy2": {
    field: null,
    attacks: []
  },
  "2:obj_placeholderenemy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "!0",
      id: "rr !0 - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "2:obj_ralseienemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_ralseibullet",
      expect: {
        types: [],
        objs: ["obj_ralseibullet"],
        names: []
      }
    }]
  },
  "2:obj_rouxls_enemy_old_copy": {
    field: "rr",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "rr 0 - ThrashHead - type 26",
      expect: {
        types: ["type 26"],
        objs: ["obj_dbulletcontroller"],
        names: ["ThrashHead"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "rr 1 - ThrashFoot - type 27",
      expect: {
        types: ["type 27"],
        objs: ["obj_dbulletcontroller"],
        names: ["ThrashFoot"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "!1",
      id: "rr !1 - PuzzleBlocks - type 28",
      expect: {
        types: ["type 28"],
        objs: ["obj_dbulletcontroller"],
        names: ["PuzzleBlocks"]
      }
    }]
  },
  "3:obj_shadowman_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - trumpet - type 60",
      expect: {
        types: ["type 60"],
        objs: ["obj_dbulletcontroller"],
        names: ["trumpet"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - saxophone - type 61",
      expect: {
        types: ["type 61"],
        objs: ["obj_dbulletcontroller"],
        names: ["saxophone"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - tommy gun - type 62",
      expect: {
        types: ["type 62"],
        objs: ["obj_dbulletcontroller"],
        names: ["tommy gun"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - censored bullet pattern - type 999",
      expect: {
        types: ["type 999"],
        objs: ["obj_dbulletcontroller", "obj_shadowman_caption"],
        names: ["censored bullet pattern"]
      }
    }]
  },
  "3:obj_shutta_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - shutta 1 - type 146",
      expect: {
        types: ["type 146", "type 64"],
        objs: ["obj_dbulletcontroller"],
        names: ["shutta 1"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - shutta 2 - type 147",
      expect: {
        types: ["type 147", "type 64"],
        objs: ["obj_dbulletcontroller"],
        names: ["shutta 2"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - shutta 3 - type 145",
      expect: {
        types: ["type 145", "type 64"],
        objs: ["obj_dbulletcontroller"],
        names: ["shutta 3"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - type 64",
      expect: {
        types: ["type 64"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }]
  },
  "3:obj_zapper_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - zapper laser - type 65",
      expect: {
        types: ["type 65"],
        objs: ["obj_dbulletcontroller"],
        names: ["zapper laser"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - zapper cannon - type 66",
      expect: {
        types: ["type 66"],
        objs: ["obj_dbulletcontroller"],
        names: ["zapper cannon"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - volume control - type 67",
      expect: {
        types: ["type 67"],
        objs: ["obj_dbulletcontroller"],
        names: ["volume control"]
      }
    }]
  },
  "3:obj_lanino_enemy": {
    field: null,
    attacks: []
  },
  "3:obj_elnina_enemy": {
    field: null,
    attacks: []
  },
  "3:obj_rouxls_ch3_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - Rouxls shoot - type 74",
      expect: {
        types: ["type 74"],
        objs: ["obj_dbulletcontroller"],
        names: ["Rouxls shoot"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - Yarn Balls - type 72",
      expect: {
        types: ["type 72"],
        objs: ["obj_dbulletcontroller", "obj_rouxls_yarn_picture_controller"],
        names: ["Yarn Balls"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - Laser Pointer - type 73",
      expect: {
        types: ["type 73", "type 69", "type 71"],
        objs: ["obj_dbulletcontroller"],
        names: ["Laser Pointer"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - Laser Pointer - type 73.1",
      expect: {
        types: ["type 73.1", "type 69", "type 71"],
        objs: ["obj_dbulletcontroller"],
        names: ["Laser Pointer"]
      }
    }]
  },
  "3:obj_knight_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - Swordslash - type 109",
      expect: {
        types: ["type 109"],
        objs: ["obj_dbulletcontroller"],
        names: ["Swordslash"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - Stars - type 98",
      expect: {
        types: ["type 98"],
        objs: ["obj_dbulletcontroller"],
        names: ["Stars"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - Flurry - type 99",
      expect: {
        types: ["type 99"],
        objs: ["obj_dbulletcontroller"],
        names: ["Flurry"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - swordtunnel - type 102",
      expect: {
        types: ["type 102"],
        objs: ["obj_dbulletcontroller"],
        names: ["swordtunnel"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - xattacks - type 103",
      expect: {
        types: ["type 103"],
        objs: ["obj_dbulletcontroller"],
        names: ["xattacks"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "myattackchoice 5 - rotatingslash - type 104",
      expect: {
        types: ["type 104"],
        objs: ["obj_dbulletcontroller"],
        names: ["rotatingslash"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "myattackchoice 6 - underboxattack - type 106",
      expect: {
        types: ["type 106"],
        objs: ["obj_dbulletcontroller"],
        names: ["underboxattack"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "myattackchoice 7 - combinationattack - type 105",
      expect: {
        types: ["type 105"],
        objs: ["obj_dbulletcontroller"],
        names: ["combinationattack"]
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "myattackchoice 9 - roaring - type 107",
      expect: {
        types: ["type 107"],
        objs: ["obj_dbulletcontroller"],
        names: ["roaring"]
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "myattackchoice 10 - swords falling - type 108",
      expect: {
        types: ["type 108"],
        objs: ["obj_dbulletcontroller"],
        names: ["swords falling"]
      }
    }, {
      key: "11",
      pin: 11,
      cond: "11",
      id: "myattackchoice 11 - tracking swords - type 151",
      expect: {
        types: ["type 151"],
        objs: ["obj_dbulletcontroller"],
        names: ["tracking swords"]
      }
    }, {
      key: "12",
      pin: 12,
      cond: "12",
      id: "myattackchoice 12 - diagonal bullets - type 152",
      expect: {
        types: ["type 152"],
        objs: ["obj_dbulletcontroller"],
        names: ["diagonal bullets"]
      }
    }, {
      key: "13",
      pin: 13,
      cond: "13",
      id: "myattackchoice 13 - sword tunnel new - type 153",
      expect: {
        types: ["type 153"],
        objs: ["obj_dbulletcontroller"],
        names: ["sword tunnel new"]
      }
    }, {
      key: "15",
      pin: 15,
      cond: "15",
      id: "myattackchoice 15 - sword vortex - type 154",
      expect: {
        types: ["type 154", "type 151"],
        objs: ["obj_dbulletcontroller"],
        names: ["sword vortex", "tracking swords"]
      }
    }, {
      key: "16",
      pin: 16,
      cond: "16",
      id: "myattackchoice 16 - rotatingslash - type 104",
      expect: {
        types: ["type 104", "type 151"],
        objs: ["obj_dbulletcontroller"],
        names: ["rotatingslash", "tracking swords"]
      }
    }, {
      key: "20",
      pin: 20,
      cond: "20",
      id: "myattackchoice 20 - knightlines - type 101",
      expect: {
        types: ["type 101"],
        objs: ["obj_dbulletcontroller"],
        names: ["knightlines"]
      }
    }]
  },
  "3:obj_tenna_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - all star cast - type 125",
      expect: {
        types: ["type 125"],
        objs: ["obj_dbulletcontroller"],
        names: ["all star cast"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - smashcut - type 126",
      expect: {
        types: ["type 126"],
        objs: ["obj_dbulletcontroller"],
        names: ["smashcut"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - rimshot lensflare - type 128",
      expect: {
        types: ["type 128"],
        objs: ["obj_dbulletcontroller"],
        names: ["rimshot lensflare"]
      }
    }, {
      key: "20",
      pin: 20,
      cond: "20",
      id: "myattackchoice 20 - light em up - type 150",
      expect: {
        types: ["type 150"],
        objs: ["obj_dbulletcontroller"],
        names: ["light em up"]
      }
    }]
  },
  "3:obj_pippins_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "Dice Attack - type 120",
      expect: {
        types: ["type 120"],
        objs: ["obj_dbulletcontroller"],
        names: ["Dice Attack"]
      }
    }]
  },
  "3:obj_ribbick_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - RibbickJump - type 110",
      expect: {
        types: ["type 110"],
        objs: ["obj_dbulletcontroller"],
        names: ["RibbickJump"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - RibbickFly - type 111",
      expect: {
        types: ["type 111"],
        objs: ["obj_dbulletcontroller"],
        names: ["RibbickFly"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - RabbickBounce - type 112",
      expect: {
        types: ["type 112"],
        objs: ["obj_dbulletcontroller"],
        names: ["RabbickBounce"]
      }
    }]
  },
  "3:obj_tenna_board4_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "rimshot lensflare - type 125",
      expect: {
        types: ["type 125", "type 3"],
        objs: ["obj_dbulletcontroller"],
        names: ["rimshot lensflare"]
      }
    }]
  },
  "3:obj_watercooler_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "Rain - type 135",
      expect: {
        types: ["type 135", "type 69"],
        objs: ["obj_dbulletcontroller"],
        names: ["Rain", "Moon"]
      }
    }]
  },
  "3:obj_lanino_rematch_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_elnina_umbrella",
      expect: {
        types: [],
        objs: ["obj_elnina_umbrella"],
        names: []
      }
    }]
  },
  "3:obj_elnina_rematch_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_elnina_umbrella",
      expect: {
        types: [],
        objs: ["obj_elnina_umbrella"],
        names: []
      }
    }]
  },
  "4:obj_guei_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - hauntedflames - type 100",
      expect: {
        types: ["type 100"],
        objs: ["obj_dbulletcontroller"],
        names: ["hauntedflames"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - clawdrop - type 101",
      expect: {
        types: ["type 101"],
        objs: ["obj_dbulletcontroller"],
        names: ["clawdrop"]
      }
    }]
  },
  "4:obj_balthizard_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "turtleattack - type 105",
      expect: {
        types: ["type 105", "type 3"],
        objs: ["obj_dbulletcontroller"],
        names: ["turtleattack"]
      }
    }]
  },
  "4:obj_bibliox_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "book attack - type 140",
      expect: {
        types: ["type 140"],
        objs: ["obj_dbulletcontroller", "obj_proofread_controller_new"],
        names: ["book attack"]
      }
    }]
  },
  "4:obj_mizzle_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - newholywatereye - type 110.5",
      expect: {
        types: ["type 110.5"],
        objs: ["obj_dbulletcontroller"],
        names: ["newholywatereye"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - holywaterC - type 111",
      expect: {
        types: ["type 111"],
        objs: ["obj_dbulletcontroller"],
        names: ["holywaterC"]
      }
    }]
  },
  "4:obj_bell_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - Pendulumattack - type 300",
      expect: {
        types: ["type 300"],
        objs: ["obj_dbulletcontroller"],
        names: ["Pendulumattack"]
      }
    }]
  },
  "4:obj_halo_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - HoopAttack - type 102",
      expect: {
        types: ["type 102"],
        objs: ["obj_dbulletcontroller"],
        names: ["HoopAttack"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - VVVVVattack - type 103",
      expect: {
        types: ["type 103"],
        objs: ["obj_dbulletcontroller"],
        names: ["VVVVVattack"]
      }
    }]
  },
  "4:obj_organ_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - organnotes - type 108",
      expect: {
        types: ["type 108"],
        objs: ["obj_dbulletcontroller"],
        names: ["organnotes"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - organlongnote - type 109",
      expect: {
        types: ["type 109"],
        objs: ["obj_dbulletcontroller"],
        names: ["organlongnote"]
      }
    }]
  },
  "4:obj_hammer_of_justice_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_gerson_rudebuster",
      expect: {
        types: [],
        objs: ["obj_gerson_rudebuster"],
        names: []
      }
    }]
  },
  "4:obj_jackenstein_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - jack 1 - type 146",
      expect: {
        types: ["type 146"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 1"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - jack 2 - type 147",
      expect: {
        types: ["type 147"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 2"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - jack 3 - type 151",
      expect: {
        types: ["type 151"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 3"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - jack 4 - type 150",
      expect: {
        types: ["type 150"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 4"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - jack 5 - type 148",
      expect: {
        types: ["type 148"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 5"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "myattackchoice 5 - jack 6 - type 153",
      expect: {
        types: ["type 153"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 6"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "myattackchoice 6 - jack 7 - type 149",
      expect: {
        types: ["type 149"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 7"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "myattackchoice 7 - jack 8 - type 152",
      expect: {
        types: ["type 152"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 8"]
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "myattackchoice 8 - jack 9 - type 154",
      expect: {
        types: ["type 154"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 9"]
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "myattackchoice 9 - jack lightup - type 155",
      expect: {
        types: ["type 155"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack lightup"]
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "myattackchoice 10 - jack 10 - type 156",
      expect: {
        types: ["type 156"],
        objs: ["obj_dbulletcontroller"],
        names: ["jack 10"]
      }
    }]
  },
  "4:obj_titan_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - darkshapeswithred - type 461",
      expect: {
        types: ["type 461"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapeswithred"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - darkshapescentipedeharder - type 451",
      expect: {
        types: ["type 451"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapescentipedeharder"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - darkshapesbigshot - type 452",
      expect: {
        types: ["type 452"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesbigshot"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - darkshapesbigshotdesperation - type 453",
      expect: {
        types: ["type 453"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesbigshotdesperation"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - darkshapesbigshotaimed - type 454",
      expect: {
        types: ["type 454"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesbigshotaimed"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "myattackchoice 5 - darkshapescentipedehardest - type 470",
      expect: {
        types: ["type 470"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapescentipedehardest"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "myattackchoice 6 - darkshapesintro - type 456",
      expect: {
        types: ["type 456"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesintro"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "myattackchoice 7 - darkshapescentipedeintro - type 457",
      expect: {
        types: ["type 457"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapescentipedeintro"]
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "myattackchoice 8 - darkshapesmine - type 458",
      expect: {
        types: ["type 458"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesmine"]
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "myattackchoice 9 - thehands - type 459",
      expect: {
        types: ["type 459"],
        objs: ["obj_dbulletcontroller"],
        names: ["thehands"]
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "myattackchoice 10 - thehandsfast - type 462",
      expect: {
        types: ["type 462"],
        objs: ["obj_dbulletcontroller"],
        names: ["thehandsfast"]
      }
    }, {
      key: "11",
      pin: 11,
      cond: "11",
      id: "myattackchoice 11 - thehandsfastest - type 463",
      expect: {
        types: ["type 463"],
        objs: ["obj_dbulletcontroller"],
        names: ["thehandsfastest"]
      }
    }, {
      key: "12",
      pin: 12,
      cond: "12",
      id: "myattackchoice 12 - darkshapescentipedenoshapes - type 464",
      expect: {
        types: ["type 464"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapescentipedenoshapes"]
      }
    }, {
      key: "13",
      pin: 13,
      cond: "13",
      id: "myattackchoice 13 - darkshapesbigshotdesperationshort - type 465",
      expect: {
        types: ["type 465"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesbigshotdesperationshort"]
      }
    }, {
      key: "14",
      pin: 14,
      cond: "14",
      id: "myattackchoice 14 - darkshapeharder - type 468",
      expect: {
        types: ["type 468"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapeharder"]
      }
    }, {
      key: "15",
      pin: 15,
      cond: "15",
      id: "myattackchoice 15 - darkshapehardest - type 469",
      expect: {
        types: ["type 469"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapehardest"]
      }
    }, {
      key: "16",
      pin: 16,
      cond: "16",
      id: "myattackchoice 16 - darkshapefinal - type 472",
      expect: {
        types: ["type 472"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapefinal"]
      }
    }]
  },
  "4:obj_sound_of_justice_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "type 2",
      expect: {
        types: ["type 2", "type 1"],
        objs: ["obj_gerson_green_switch", "obj_gerson_gradient_telegraph", "obj_gerson_swing_down_new"],
        names: []
      }
    }]
  },
  "4:obj_titan_spawn_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - darkshapeswithred - type 450",
      expect: {
        types: ["type 450"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapeswithred"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - darkshapescentipede - type 451",
      expect: {
        types: ["type 451"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapescentipede"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - darkshapesbigshot - type 452",
      expect: {
        types: ["type 452"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesbigshot"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - darkshapesbigshotdesperation - type 453",
      expect: {
        types: ["type 453"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesbigshotdesperation"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - darkshapesbigshotaimed - type 454",
      expect: {
        types: ["type 454"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesbigshotaimed"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "myattackchoice 5 - darkshapescentipedehard - type 455",
      expect: {
        types: ["type 455"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapescentipedehard"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "myattackchoice 6 - darkshapesintro - type 456",
      expect: {
        types: ["type 456"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesintro"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "myattackchoice 7 - darkshapescentipedeintro - type 457",
      expect: {
        types: ["type 457"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapescentipedeintro"]
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "myattackchoice 8 - darkshapesmine - type 458",
      expect: {
        types: ["type 458"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesmine"]
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "myattackchoice 9 - thehands - type 459",
      expect: {
        types: ["type 459"],
        objs: ["obj_dbulletcontroller"],
        names: ["thehands"]
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "myattackchoice 10 - darkshapesspeedup - type 460",
      expect: {
        types: ["type 460"],
        objs: ["obj_dbulletcontroller"],
        names: ["darkshapesspeedup"]
      }
    }]
  },
  "4:obj_lanino_rematch_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_elnina_umbrella",
      expect: {
        types: [],
        objs: ["obj_elnina_umbrella"],
        names: []
      }
    }]
  },
  "4:obj_elnina_rematch_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_elnina_umbrella",
      expect: {
        types: [],
        objs: ["obj_elnina_umbrella"],
        names: []
      }
    }]
  },
  "4:obj_pippins_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "Dice Attack - type 112.5",
      expect: {
        types: ["type 112.5"],
        objs: ["obj_dbulletcontroller"],
        names: ["Dice Attack"]
      }
    }]
  },
  "4:obj_rudinnranger": {
    field: "rr",
    attacks: [{
      key: "99",
      pin: 99,
      cond: "99",
      id: "rr 99 - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "!99",
      id: "rr !99 - obj_dknight_slasher",
      expect: {
        types: [],
        objs: ["obj_dknight_slasher"],
        names: []
      }
    }]
  },
  "4:obj_zapper_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - zapper laser - type 65",
      expect: {
        types: ["type 65"],
        objs: ["obj_dbulletcontroller"],
        names: ["zapper laser"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - zapper cannon - type 66",
      expect: {
        types: ["type 66"],
        objs: ["obj_dbulletcontroller"],
        names: ["zapper cannon"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - volume control - type 67",
      expect: {
        types: ["type 67"],
        objs: ["obj_dbulletcontroller"],
        names: ["volume control"]
      }
    }]
  },
  "4:obj_swatchling_enemy": {
    field: null,
    attacks: []
  },
  "4:obj_ribbick_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - RibbickJump - type 108.5",
      expect: {
        types: ["type 108.5"],
        objs: ["obj_dbulletcontroller"],
        names: ["RibbickJump"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - RibbickFly - type 109.5",
      expect: {
        types: ["type 109.5"],
        objs: ["obj_dbulletcontroller"],
        names: ["RibbickFly"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - RabbickBounce - type 111.5",
      expect: {
        types: ["type 111.5"],
        objs: ["obj_dbulletcontroller"],
        names: ["RabbickBounce"]
      }
    }]
  },
  "4:obj_holywatercooler_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "Rain - type 135",
      expect: {
        types: ["type 135", "type 471", "type 14"],
        objs: ["obj_rouxls_power_up_orb", "obj_dbulletcontroller"],
        names: ["Rain", "holywaterC"]
      }
    }]
  },
  "4:obj_multiboss_enemy1": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - HomingDiamonds - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_dbulletcontroller"],
        names: ["HomingDiamonds"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - RisingDiamonds - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: ["RisingDiamonds"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - SwordThrow - type 3",
      expect: {
        types: ["type 3"],
        objs: ["obj_dbulletcontroller"],
        names: ["SwordThrow"]
      }
    }]
  },
  "4:obj_multiboss_enemy2": {
    field: null,
    attacks: []
  },
  "4:obj_multiboss_enemy3": {
    field: null,
    attacks: []
  },
  "4:obj_multiboss_controller_enemy1": {
    field: null,
    attacks: []
  },
  "4:obj_multiboss_controller_enemy2": {
    field: null,
    attacks: []
  },
  "4:obj_multiboss_controller_enemy3": {
    field: null,
    attacks: []
  },
  "5:obj_baseenemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - HomingDiamonds - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_dbulletcontroller"],
        names: ["HomingDiamonds"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - RisingDiamonds - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: ["RisingDiamonds"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - SwordThrow - type 3",
      expect: {
        types: ["type 3"],
        objs: ["obj_dbulletcontroller"],
        names: ["SwordThrow"]
      }
    }]
  },
  "5:obj_floradinn_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - ManeThorn - type 141",
      expect: {
        types: ["type 141"],
        objs: ["obj_dbulletcontroller"],
        names: ["ManeThorn"]
      }
    }]
  },
  "5:obj_leafling_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - PetalBurst - type 142",
      expect: {
        types: ["type 142"],
        objs: ["obj_dbulletcontroller"],
        names: ["PetalBurst"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - PetalWind - type 143",
      expect: {
        types: ["type 143"],
        objs: ["obj_dbulletcontroller"],
        names: ["PetalWind"]
      }
    }]
  },
  "5:obj_scarecrow_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "-1",
      pin: -1,
      cond: "-1",
      id: "myattackchoice -1 - SplittingShuriken - type 144",
      expect: {
        types: ["type 144"],
        objs: ["obj_dbulletcontroller"],
        names: ["SplittingShuriken"]
      }
    }, {
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - easy shi attack - type 154",
      expect: {
        types: ["type 154"],
        objs: ["obj_dbulletcontroller"],
        names: ["easy shi attack"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - scythebomb - type 145",
      expect: {
        types: ["type 145"],
        objs: ["obj_dbulletcontroller"],
        names: ["scythebomb"]
      }
    }]
  },
  "5:obj_kawkaw_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - Falling Feathers - type 147",
      expect: {
        types: ["type 147"],
        objs: ["obj_dbulletcontroller"],
        names: ["Falling Feathers"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - Pchoo - type 148",
      expect: {
        types: ["type 148"],
        objs: ["obj_dbulletcontroller"],
        names: ["Pchoo"]
      }
    }]
  },
  "5:obj_shinobeetle_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - jumpingshuriken - type 146",
      expect: {
        types: ["type 146"],
        objs: ["obj_dbulletcontroller"],
        names: ["jumpingshuriken"]
      }
    }]
  },
  "5:obj_sheary_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - scissor attack 1 - type 153",
      expect: {
        types: ["type 153"],
        objs: ["obj_dbulletcontroller"],
        names: ["scissor attack 1"]
      }
    }]
  },
  "5:obj_netskie_enemy": {
    field: "draw_type",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "draw_type 1 - netskie floradinn - type 140",
      expect: {
        types: ["type 140"],
        objs: ["obj_dbulletcontroller"],
        names: ["netskie floradinn"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "draw_type 2 - netskie shadowman - type 62",
      expect: {
        types: ["type 62"],
        objs: ["obj_dbulletcontroller"],
        names: ["netskie shadowman"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "draw_type 3 - netskie rabbick - type 30.1",
      expect: {
        types: ["type 30.1"],
        objs: ["obj_dbulletcontroller"],
        names: ["netskie rabbick"]
      }
    }, {
      key: "0",
      pin: 0,
      cond: "!3",
      id: "draw_type !3 - pawprint - type 149",
      expect: {
        types: ["type 149"],
        objs: ["obj_dbulletcontroller"],
        names: ["pawprint"]
      }
    }]
  },
  "5:obj_terracota_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - terracota pots - type 150",
      expect: {
        types: ["type 150"],
        objs: ["obj_dbulletcontroller"],
        names: ["terracota pots"]
      }
    }]
  },
  "5:obj_aqua_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - KnifeChain - type 308",
      expect: {
        types: ["type 308"],
        objs: ["obj_dbulletcontroller"],
        names: ["KnifeChain"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - FanOfKnives - type 309",
      expect: {
        types: ["type 309"],
        objs: ["obj_dbulletcontroller"],
        names: ["FanOfKnives"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - KnifePetal - type 310",
      expect: {
        types: ["type 310"],
        objs: ["obj_dbulletcontroller"],
        names: ["KnifePetal"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - OmegaKnife - type 300",
      expect: {
        types: ["type 300"],
        objs: ["obj_dbulletcontroller"],
        names: ["OmegaKnife"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - Everything - type 311",
      expect: {
        types: ["type 311"],
        objs: ["obj_dbulletcontroller"],
        names: ["Everything"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "myattackchoice 5 - Duck - type 312",
      expect: {
        types: ["type 312"],
        objs: ["obj_dbulletcontroller"],
        names: ["Duck"]
      }
    }]
  },
  "5:obj_orange_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "type 3",
      expect: {
        types: ["type 3"],
        objs: [],
        names: []
      }
    }]
  },
  "5:obj_green_enemy": {
    field: null,
    attacks: []
  },
  "5:obj_blue_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - GuidedBullet - type 301",
      expect: {
        types: ["type 301"],
        objs: ["obj_dbulletcontroller"],
        names: ["GuidedBullet"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - Dancers - type 302",
      expect: {
        types: ["type 302"],
        objs: ["obj_dbulletcontroller"],
        names: ["Dancers"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - ShootingGallery - type 303",
      expect: {
        types: ["type 303"],
        objs: ["obj_dbulletcontroller"],
        names: ["ShootingGallery"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - BlueSinging - type 304",
      expect: {
        types: ["type 304"],
        objs: ["obj_dbulletcontroller"],
        names: ["BlueSinging"]
      }
    }]
  },
  "5:obj_yellow_enemy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_yellow_trial_manager",
      expect: {
        types: [],
        objs: ["obj_yellow_trial_manager", "obj_healing_rain"],
        names: []
      }
    }]
  },
  "5:obj_purple_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - SupportFire - type 313",
      expect: {
        types: ["type 313"],
        objs: ["obj_dbulletcontroller"],
        names: ["SupportFire"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - OmegaBook - type 306",
      expect: {
        types: ["type 306"],
        objs: ["obj_dbulletcontroller"],
        names: ["OmegaBook"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - OmegaBookEx - type 306",
      expect: {
        types: ["type 306"],
        objs: ["obj_dbulletcontroller"],
        names: ["OmegaBookEx"]
      }
    }]
  },
  "5:obj_pink_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - cat - type 200",
      expect: {
        types: ["type 200"],
        objs: ["obj_dbulletcontroller"],
        names: ["cat"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - bomb - type 206",
      expect: {
        types: ["type 206"],
        objs: ["obj_dbulletcontroller"],
        names: ["bomb"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - rotating box - type 202",
      expect: {
        types: ["type 202"],
        objs: ["obj_dbulletcontroller"],
        names: ["rotating box"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - 3d tunnel - type 208",
      expect: {
        types: ["type 208"],
        objs: ["obj_dbulletcontroller"],
        names: ["3d tunnel"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "myattackchoice 5 - singing - type 209",
      expect: {
        types: ["type 209"],
        objs: ["obj_dbulletcontroller"],
        names: ["singing"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "myattackchoice 6 - bomb - type 203",
      expect: {
        types: ["type 203"],
        objs: ["obj_dbulletcontroller"],
        names: ["bomb"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "myattackchoice 7 - vertical lanes - type 204",
      expect: {
        types: ["type 204"],
        objs: ["obj_dbulletcontroller"],
        names: ["vertical lanes"]
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "myattackchoice 8 - vertical lanes - type 205",
      expect: {
        types: ["type 205"],
        objs: ["obj_dbulletcontroller"],
        names: ["vertical lanes"]
      }
    }]
  },
  "5:obj_flowery_enemy": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - FloweryDeflect1 - type 620",
      expect: {
        types: ["type 620"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["FloweryDeflect1"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - FloweryDeflect2 - type 621",
      expect: {
        types: ["type 621"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["FloweryDeflect2"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - FloweryDeflect3 - type 634",
      expect: {
        types: ["type 634"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["FloweryDeflect3"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - FloweryWallsTutorial - type 623",
      expect: {
        types: ["type 623"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryWallsTutorial"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - FloweryChase - type 624",
      expect: {
        types: ["type 624"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryChase"]
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "myattackchoice 5 - FloweryChase2 - type 625",
      expect: {
        types: ["type 625"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryChase2"]
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "myattackchoice 6 - FloweryChase2Harder - type 626",
      expect: {
        types: ["type 626"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryChase2Harder"]
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "myattackchoice 7 - FloweryBulletsFistEasy - type 627",
      expect: {
        types: ["type 627"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["FloweryBulletsFistEasy"]
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "myattackchoice 8 - FloweryBulletsFistMedium - type 628",
      expect: {
        types: ["type 628"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["FloweryBulletsFistMedium"]
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "myattackchoice 9 - FloweryBulletsFistHard - type 629",
      expect: {
        types: ["type 629"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["FloweryBulletsFistHard"]
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "myattackchoice 10 - FloweryBoxesEasy - type 630",
      expect: {
        types: ["type 630"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryBoxesEasy"]
      }
    }, {
      key: "11",
      pin: 11,
      cond: "11",
      id: "myattackchoice 11 - FloweryBoxesMedium - type 631",
      expect: {
        types: ["type 631"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryBoxesMedium"]
      }
    }, {
      key: "12",
      pin: 12,
      cond: "12",
      id: "myattackchoice 12 - FloweryChase2Random - type 632",
      expect: {
        types: ["type 632"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryChase2Random"]
      }
    }, {
      key: "13",
      pin: 13,
      cond: "13",
      id: "myattackchoice 13 - FloweryChaseWithBullets - type 633",
      expect: {
        types: ["type 633"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryChaseWithBullets"]
      }
    }, {
      key: "14",
      pin: 14,
      cond: "14",
      id: "myattackchoice 14 - FloweryDeflect2point5 - type 622",
      expect: {
        types: ["type 622"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryDeflect2point5"]
      }
    }, {
      key: "15",
      pin: 15,
      cond: "15",
      id: "myattackchoice 15 - FloweryChaseBlueYellow - type 635",
      expect: {
        types: ["type 635"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryChaseBlueYellow"]
      }
    }, {
      key: "16",
      pin: 16,
      cond: "16",
      id: "myattackchoice 16 - FloweryDeflectOrange - type 636",
      expect: {
        types: ["type 636"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["FloweryDeflectOrange"]
      }
    }, {
      key: "17",
      pin: 17,
      cond: "17",
      id: "myattackchoice 17 - FloweryDashTutorial - type 637",
      expect: {
        types: ["type 637"],
        objs: ["obj_dbulletcontroller"],
        names: ["FloweryDashTutorial"]
      }
    }, {
      key: "18",
      pin: 18,
      cond: "18",
      id: "myattackchoice 18 - JustKidding - type 638",
      expect: {
        types: ["type 638"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["JustKidding"]
      }
    }, {
      key: "19",
      pin: 19,
      cond: "19",
      id: "myattackchoice 19 - SuperJarona - type 639",
      expect: {
        types: ["type 639"],
        objs: ["obj_orangeheart_floweryjarona", "obj_dbulletcontroller"],
        names: ["SuperJarona"]
      }
    }, {
      key: "20",
      pin: 20,
      cond: "20",
      id: "myattackchoice 20 - BlueChase - type 640",
      expect: {
        types: ["type 640"],
        objs: ["obj_dbulletcontroller"],
        names: ["BlueChase"]
      }
    }, {
      key: "21",
      pin: 21,
      cond: "21",
      id: "myattackchoice 21 - AquaKnives - type 641",
      expect: {
        types: ["type 641"],
        objs: ["obj_dbulletcontroller"],
        names: ["AquaKnives"]
      }
    }, {
      key: "22",
      pin: 22,
      cond: "22",
      id: "myattackchoice 22 - OrbitStars - type 647",
      expect: {
        types: ["type 647"],
        objs: ["obj_dbulletcontroller"],
        names: ["OrbitStars"]
      }
    }]
  },
  "5:obj_trashy_trio": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - TrashyRush - type 642",
      expect: {
        types: ["type 642"],
        objs: ["obj_dbulletcontroller"],
        names: ["TrashyRush"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - BallToss - type 643",
      expect: {
        types: ["type 643"],
        objs: ["obj_dbulletcontroller"],
        names: ["BallToss"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - NubertSpear - type 644",
      expect: {
        types: ["type 644"],
        objs: ["obj_dbulletcontroller"],
        names: ["NubertSpear"]
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "myattackchoice 3 - TrashyBeam - type 645",
      expect: {
        types: ["type 645"],
        objs: ["obj_dbulletcontroller"],
        names: ["TrashyBeam"]
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "myattackchoice 4 - TrashyBeam? - type 646",
      expect: {
        types: ["type 646"],
        objs: ["obj_dbulletcontroller"],
        names: ["TrashyBeam?"]
      }
    }]
  },
  "5:obj_enemy_example": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - SupportFire - type 313",
      expect: {
        types: ["type 313"],
        objs: ["obj_dbulletcontroller"],
        names: ["SupportFire"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - OmegaBook - type 306",
      expect: {
        types: ["type 306"],
        objs: ["obj_dbulletcontroller"],
        names: ["OmegaBook"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - OmegaBookEx - type 306",
      expect: {
        types: ["type 306"],
        objs: ["obj_dbulletcontroller"],
        names: ["OmegaBookEx"]
      }
    }]
  },
  "5:obj_multiboss_enemy1": {
    field: "myattackchoice",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "myattackchoice 0 - HomingDiamonds - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_dbulletcontroller"],
        names: ["HomingDiamonds"]
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "myattackchoice 1 - RisingDiamonds - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_dbulletcontroller"],
        names: ["RisingDiamonds"]
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "myattackchoice 2 - SwordThrow - type 3",
      expect: {
        types: ["type 3"],
        objs: ["obj_dbulletcontroller"],
        names: ["SwordThrow"]
      }
    }]
  },
  "5:obj_multiboss_enemy2": {
    field: null,
    attacks: []
  },
  "5:obj_multiboss_enemy3": {
    field: null,
    attacks: []
  },
  "5:obj_multiboss_controller_enemy1": {
    field: null,
    attacks: []
  },
  "5:obj_multiboss_controller_enemy2": {
    field: null,
    attacks: []
  },
  "5:obj_multiboss_controller_enemy3": {
    field: null,
    attacks: []
  },
  "5:obj_bullettester_enemy": {
    field: null,
    attacks: []
  },
  "ut:obj_testmonster": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_1sidegen",
      expect: {
        types: [],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_dummymonster": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_vaporized_new",
      expect: {
        types: [],
        objs: ["obj_vaporized_new"],
        names: []
      }
    }]
  },
  "ut:obj_fakefroggit": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_1sidegen",
      expect: {
        types: [],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_froggit": {
    field: "mycommand",
    attacks: [{
      key: "41",
      pin: 41,
      cond: "!>=0 <=40",
      id: "mycommand !>=0 <=40 - bullettype 1",
      expect: {
        types: ["bullettype 1"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=40",
      id: "mycommand >=0 <=40 - obj_1sidegen",
      expect: {
        types: [],
        objs: ["obj_1sidegen", "blt_leapfrog"],
        names: []
      }
    }]
  },
  "ut:obj_whimsun": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - obj_butterfly2gen",
      expect: {
        types: [],
        objs: ["obj_butterfly2gen"],
        names: []
      }
    }]
  },
  "ut:obj_moldsmal": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - bullettype 2",
      expect: {
        types: ["bullettype 2"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - bullettype 3",
      expect: {
        types: ["bullettype 3"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_migosp": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "<5",
      id: "mycommand <5 - bullettype 1",
      expect: {
        types: ["bullettype 1"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "5",
      pin: 5,
      cond: ">=5",
      id: "mycommand >=5 - bullettype 4",
      expect: {
        types: ["bullettype 4"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_vegetoid": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "<50",
      id: "mycommand <50 - bullettype 6",
      expect: {
        types: ["bullettype 6"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - bullettype 5",
      expect: {
        types: ["bullettype 5"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_loox": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "<50",
      id: "mycommand <50 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_hoopgen1"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - bullettype 1",
      expect: {
        types: ["bullettype 1"],
        objs: ["obj_hoopgen1"],
        names: []
      }
    }]
  },
  "ut:obj_napstablook": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - obj_crygen2",
      expect: {
        types: [],
        objs: ["obj_crygen2"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - obj_crygen1",
      expect: {
        types: [],
        objs: ["obj_crygen1"],
        names: []
      }
    }]
  },
  "ut:obj_torielboss": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: ">=0 <=20",
      id: "mycommand >=0 <=20 - bullettype 7",
      expect: {
        types: ["bullettype 7"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "21",
      pin: 21,
      cond: ">20 <=40",
      id: "mycommand >20 <=40 - bullettype 8",
      expect: {
        types: ["bullettype 8"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "41",
      pin: 41,
      cond: ">40 <=60",
      id: "mycommand >40 <=60 - bullettype 10",
      expect: {
        types: ["bullettype 10"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "61",
      pin: 61,
      cond: ">60 <=80",
      id: "mycommand >60 <=80 - blt_handbullet1",
      expect: {
        types: [],
        objs: ["blt_handbullet1", "blt_handbullet2"],
        names: []
      }
    }, {
      key: "81",
      pin: 81,
      cond: ">80 <=100",
      id: "mycommand >80 <=100 - blt_handbullet1",
      expect: {
        types: [],
        objs: ["blt_handbullet1"],
        names: []
      }
    }]
  },
  "ut:obj_movedoge": {
    field: "mycommand",
    attacks: [{
      key: "100",
      pin: 100,
      cond: "!>=0 <=99.9",
      id: "mycommand !>=0 <=99.9 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_4sidegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=99.9",
      id: "mycommand >=0 <=99.9 - blt_bluesword",
      expect: {
        types: [],
        objs: ["blt_bluesword"],
        names: []
      }
    }]
  },
  "ut:obj_lesserdoge": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "<50",
      id: "mycommand <50 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["blt_tinypom_leap"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["blt_bluespear"],
        names: []
      }
    }]
  },
  "ut:obj_mandog": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!<=50",
      id: "mycommand !<=50 - obj_loopdog",
      expect: {
        types: [],
        objs: ["obj_loopdog"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "<=50",
      id: "mycommand <=50 - blt_whiteax",
      expect: {
        types: [],
        objs: ["blt_whiteax"],
        names: []
      }
    }]
  },
  "ut:obj_womandog": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "blt_whiteax",
      expect: {
        types: [],
        objs: ["blt_whiteax"],
        names: []
      }
    }]
  },
  "ut:obj_greatdog": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["blt_dogspear"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - bullettype 1",
      expect: {
        types: ["bullettype 1"],
        objs: ["obj_sleepdog"],
        names: []
      }
    }]
  },
  "ut:obj_papyrusboss": {
    field: "fighto",
    attacks: [{
      key: "-1",
      pin: -1,
      cond: "-1",
      id: "fighto -1 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "0",
      id: "fighto 0 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "fighto 1 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "fighto 2 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "fighto 3 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone"],
        names: []
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "fighto 4 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone"],
        names: []
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "fighto 5 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "fighto 6 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "fighto 7 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "fighto 8 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone"],
        names: []
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "fighto 9 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone"],
        names: []
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "fighto 10 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone"],
        names: []
      }
    }, {
      key: "11",
      pin: 11,
      cond: "11",
      id: "fighto 11 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "12",
      pin: 12,
      cond: "12",
      id: "fighto 12 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }, {
      key: "13",
      pin: 13,
      cond: "13",
      id: "fighto 13 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone"],
        names: []
      }
    }, {
      key: "14",
      pin: 14,
      cond: "14",
      id: "fighto 14 - blt_tobydogbone",
      expect: {
        types: [],
        objs: ["blt_tobydogbone", "blt_sizebone"],
        names: []
      }
    }, {
      key: "15",
      pin: 15,
      cond: "15",
      id: "fighto 15 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone", "blt_topbone", "blt_scootdog", "blt_coolbus", "blt_superbone"],
        names: []
      }
    }]
  },
  "ut:obj_gyftrot": {
    field: "mycommand",
    attacks: [{
      key: "61",
      pin: 61,
      cond: "!>=0 <=60",
      id: "mycommand !>=0 <=60 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_giftgen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=60",
      id: "mycommand >=0 <=60 - bullettype 1",
      expect: {
        types: ["bullettype 1"],
        objs: ["obj_gyftgen"],
        names: []
      }
    }]
  },
  "ut:obj_chilldrake": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_4sidegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - bullettype 1",
      expect: {
        types: ["bullettype 1"],
        objs: ["obj_4sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_snowdrake": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_4sidegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - bullettype 1",
      expect: {
        types: ["bullettype 1"],
        objs: ["obj_4sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_icecap": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "<50",
      id: "mycommand <50 - obj_iceteeth",
      expect: {
        types: [],
        objs: ["obj_iceteeth"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - bullettype 11",
      expect: {
        types: ["bullettype 11"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_jerry": {
    field: null,
    attacks: []
  },
  "ut:obj_aaron": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_sweatbulgen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - obj_muscbulgen",
      expect: {
        types: [],
        objs: ["obj_muscbulgen"],
        names: []
      }
    }]
  },
  "ut:obj_tembattle": {
    field: "mycommand",
    attacks: [{
      key: "25",
      pin: 25,
      cond: "!>=0 <25",
      id: "mycommand !>=0 <25 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_maintem"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <25",
      id: "mycommand >=0 <25 - blt_temhand",
      expect: {
        types: [],
        objs: ["blt_temhand"],
        names: []
      }
    }]
  },
  "ut:obj_moldsmalx": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - bullettype 2",
      expect: {
        types: ["bullettype 2"],
        objs: ["obj_1sidegen", "obj_stalkergen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - bullettype 3",
      expect: {
        types: ["bullettype 3"],
        objs: ["obj_1sidegen", "obj_8smallgen"],
        names: []
      }
    }]
  },
  "ut:obj_woshua": {
    field: "type",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "type 1 - obj_woshspiralgen",
      expect: {
        types: [],
        objs: ["obj_woshspiralgen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "!1",
      id: "type !1 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["blt_soapbul"],
        names: []
      }
    }]
  },
  "ut:obj_shyren": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: ">=0",
      id: "mycommand >=0 - bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_musbulgen"],
        names: []
      }
    }]
  },
  "ut:obj_maddummy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "type 1",
      expect: {
        types: ["type 1", "type 4", "type 2"],
        objs: ["blt_dummybullet", "blt_dummyknife", "blt_crybullet2"],
        names: []
      }
    }]
  },
  "ut:obj_undyneboss": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!<=50",
      id: "mycommand !<=50 - obj_risespearbulletgen",
      expect: {
        types: [],
        objs: ["obj_risespearbulletgen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "<=50",
      id: "mycommand <=50 - obj_spearbulletfollowgen",
      expect: {
        types: [],
        objs: ["obj_spearbulletfollowgen"],
        names: []
      }
    }]
  },
  "ut:obj_mettatonb_quiz": {
    field: null,
    attacks: []
  },
  "ut:obj_questionasker": {
    field: "q",
    attacks: [{
      key: "5",
      pin: 5,
      cond: "5",
      id: "q 5 - obj_flyjar",
      expect: {
        types: [],
        objs: ["obj_flyjar"],
        names: []
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "q 6 - obj_zoomaton",
      expect: {
        types: [],
        objs: ["obj_zoomaton"],
        names: []
      }
    }]
  },
  "ut:obj_bara01": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - obj_carrotstargen",
      expect: {
        types: [],
        objs: ["obj_carrotstargen"],
        names: []
      }
    }]
  },
  "ut:obj_bara02": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - obj_greenarmor",
      expect: {
        types: [],
        objs: ["obj_greenarmor", "obj_carrotstargen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - obj_carrotstargen",
      expect: {
        types: [],
        objs: ["obj_carrotstargen"],
        names: []
      }
    }]
  },
  "ut:obj_tsunderplane": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "bullettype 0",
      expect: {
        types: ["bullettype 0"],
        objs: ["obj_spared", "obj_vertplanegen", "obj_incendiarygen"],
        names: []
      }
    }]
  },
  "ut:obj_vulkin": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_lavafiregen",
      expect: {
        types: [],
        objs: ["obj_lavafiregen", "obj_vulkincloudbul"],
        names: []
      }
    }]
  },
  "ut:obj_pyrope": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "<50",
      id: "mycommand <50 - obj_ropebulgen",
      expect: {
        types: [],
        objs: ["obj_ropebulgen"],
        names: []
      }
    }]
  },
  "ut:obj_spiderb": {
    field: "turnamt",
    attacks: [{
      key: "4",
      pin: 4,
      cond: "4",
      id: "turnamt 4 - obj_fakeborderdraw",
      expect: {
        types: [],
        objs: ["obj_fakeborderdraw"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "<20",
      id: "turnamt <20 - obj_spiderbulletgen",
      expect: {
        types: [],
        objs: ["obj_spiderbulletgen", "obj_fakeborderdraw"],
        names: []
      }
    }]
  },
  "ut:obj_mettatonb_second": {
    field: "turns",
    attacks: [{
      key: "2",
      pin: 2,
      cond: ">1",
      id: "turns >1 - obj_blackbulletgen1",
      expect: {
        types: [],
        objs: ["obj_blackbulletgen1"],
        names: []
      }
    }]
  },
  "ut:obj_undynebattle2": {
    field: null,
    attacks: []
  },
  "ut:obj_wizard": {
    field: "mycommand",
    attacks: [{
      key: "50",
      pin: 50,
      cond: "!<50",
      id: "mycommand !<50 - obj_wizardorb_chaser",
      expect: {
        types: [],
        objs: ["obj_wizardorb_chaser"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "<50",
      id: "mycommand <50 - obj_wizardorb_wall",
      expect: {
        types: [],
        objs: ["obj_wizardorb_wall"],
        names: []
      }
    }]
  },
  "ut:obj_finalknight": {
    field: "mycommand",
    attacks: [{
      key: "76",
      pin: 76,
      cond: ">75",
      id: "mycommand >75 - obj_hammergen",
      expect: {
        types: [],
        objs: ["obj_hammergen"],
        names: []
      }
    }]
  },
  "ut:obj_finalfroggit": {
    field: "mycommand",
    attacks: [{
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - obj_frogbullet_gen",
      expect: {
        types: [],
        objs: ["obj_frogbullet_gen"],
        names: []
      }
    }]
  },
  "ut:obj_astigmatism": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "!>=50",
      id: "mycommand !>=50 - obj_stromboligen",
      expect: {
        types: [],
        objs: ["obj_stromboligen"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - obj_astigmatismgen",
      expect: {
        types: [],
        objs: ["obj_astigmatismgen"],
        names: []
      }
    }]
  },
  "ut:obj_whimsalot": {
    field: "mycommand",
    attacks: [{
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - obj_butterflybullet_gen_2",
      expect: {
        types: [],
        objs: ["obj_butterflybullet_gen_2", "obj_butterflybullet_gen"],
        names: []
      }
    }]
  },
  "ut:obj_battlebomb": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "type 99",
      expect: {
        types: ["type 99"],
        objs: [],
        names: []
      }
    }]
  },
  "ut:obj_bara04": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - obj_warplinegen",
      expect: {
        types: [],
        objs: ["obj_warplinegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - obj_xbulletgen",
      expect: {
        types: [],
        objs: ["obj_xbulletgen"],
        names: []
      }
    }]
  },
  "ut:obj_bara03": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - obj_greenarmor",
      expect: {
        types: [],
        objs: ["obj_greenarmor", "obj_warplinegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - obj_xbulletgen",
      expect: {
        types: [],
        objs: ["obj_xbulletgen"],
        names: []
      }
    }]
  },
  "ut:obj_mettatonb_third": {
    field: "turns",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "turns 1 - attacktype 100",
      expect: {
        types: ["attacktype 100"],
        objs: [],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "turns 2 - attacktype 26",
      expect: {
        types: ["attacktype 26"],
        objs: [],
        names: []
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "turns 3 - attacktype 27",
      expect: {
        types: ["attacktype 27"],
        objs: [],
        names: []
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "turns 4 - attacktype 28",
      expect: {
        types: ["attacktype 28"],
        objs: [],
        names: []
      }
    }, {
      key: "5",
      pin: 5,
      cond: ">4",
      id: "turns >4 - attacktype 29",
      expect: {
        types: ["attacktype 29"],
        objs: [],
        names: []
      }
    }]
  },
  "ut:obj_mettatonex": {
    field: "turns",
    attacks: [{
      key: "1",
      pin: 1,
      cond: ">=1",
      id: "turns >=1 - attacktype 49",
      expect: {
        types: ["attacktype 49", "attacktype 38", "attacktype 54", "attacktype 56"],
        objs: ["obj_mettattackgen"],
        names: []
      }
    }]
  },
  "ut:obj_lemonbread": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "!>=60",
      id: "mycommand !>=60 - obj_amalgam_biter",
      expect: {
        types: [],
        objs: ["obj_amalgam_biter"],
        names: []
      }
    }, {
      key: "60",
      pin: 60,
      cond: ">=60",
      id: "mycommand >=60 - obj_melonbulgen",
      expect: {
        types: [],
        objs: ["obj_melonbulgen"],
        names: []
      }
    }]
  },
  "ut:obj_reaperbird": {
    field: "turns",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "turns 1 - obj_butterflyhead",
      expect: {
        types: [],
        objs: ["obj_butterflyhead"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: "!>0",
      id: "turns !>0 - obj_strangeman_intro",
      expect: {
        types: [],
        objs: ["obj_strangeman_intro"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: ">0",
      id: "turns >0 - obj_butterflyhead",
      expect: {
        types: [],
        objs: ["obj_butterflyhead", "obj_strangeman_headloss"],
        names: []
      }
    }]
  },
  "ut:obj_snowdrakemom": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_clawfailuregen",
      expect: {
        types: [],
        objs: ["obj_clawfailuregen"],
        names: []
      }
    }]
  },
  "ut:obj_memoryhead": {
    field: "mycommand",
    attacks: [{
      key: "-1",
      pin: -1,
      cond: "!>=0",
      id: "mycommand !>=0 - obj_vulkincloudbul",
      expect: {
        types: [],
        objs: ["obj_vulkincloudbul"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0",
      id: "mycommand >=0 - obj_freakbulletgen",
      expect: {
        types: [],
        objs: ["obj_freakbulletgen"],
        names: []
      }
    }]
  },
  "ut:obj_endogeny": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "!>=50",
      id: "mycommand !>=50 - obj_amalgam_laserdog",
      expect: {
        types: [],
        objs: ["obj_amalgam_laserdog"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - obj_amalgam_rocketdog",
      expect: {
        types: [],
        objs: ["obj_amalgam_rocketdog"],
        names: []
      }
    }]
  },
  "ut:obj_ripoff_undyne": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_spearblocker",
      expect: {
        types: [],
        objs: ["obj_spearblocker", "obj_screenwhiter"],
        names: []
      }
    }]
  },
  "ut:obj_ripoff_papyrus": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "!>=50",
      id: "mycommand !>=50 - blt_sizebone",
      expect: {
        types: [],
        objs: ["blt_sizebone"],
        names: []
      }
    }]
  },
  "ut:obj_ripoff_sans": {
    field: null,
    attacks: []
  },
  "ut:obj_ripoff_alphys": {
    field: "turns",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "turns 0 - attacktype 40",
      expect: {
        types: ["attacktype 40"],
        objs: ["obj_mettattackgen"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "turns 1 - attacktype 36",
      expect: {
        types: ["attacktype 36"],
        objs: ["obj_mettattackgen"],
        names: []
      }
    }]
  },
  "ut:obj_ripoff_toriel": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "!>=50",
      id: "mycommand !>=50 - obj_cfiregen",
      expect: {
        types: [],
        objs: ["obj_cfiregen"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - obj_randomhandgen",
      expect: {
        types: [],
        objs: ["obj_randomhandgen"],
        names: []
      }
    }]
  },
  "ut:obj_ripoff_asgore": {
    field: null,
    attacks: []
  },
  "ut:obj_mkid_battle": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "!>=50",
      id: "mycommand !>=50 - obj_vulkincloudbul",
      expect: {
        types: [],
        objs: ["obj_vulkincloudbul"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - obj_lavafiregen",
      expect: {
        types: [],
        objs: ["obj_lavafiregen"],
        names: []
      }
    }]
  },
  "ut:obj_undyne_ex": {
    field: "orderb",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "orderb 0 - obj_spearbulletfollowgen",
      expect: {
        types: [],
        objs: ["obj_spearbulletfollowgen"],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "orderb 1 - obj_risespearbulletgen",
      expect: {
        types: [],
        objs: ["obj_risespearbulletgen"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "orderb 2 - type 0",
      expect: {
        types: ["type 0"],
        objs: ["obj_rotspeargen_gen"],
        names: []
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "orderb 4 - obj_followspeargen_2",
      expect: {
        types: [],
        objs: ["obj_followspeargen_2"],
        names: []
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "orderb 5 - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_rotspeargen_gen"],
        names: []
      }
    }]
  },
  "ut:obj_gladdummy": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_vaporized",
      expect: {
        types: [],
        objs: ["obj_vaporized"],
        names: []
      }
    }]
  },
  "ut:obj_mettaton_neo": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "!>=50",
      id: "mycommand !>=50 - obj_vulkincloudbul",
      expect: {
        types: [],
        objs: ["obj_vulkincloudbul"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - obj_lavafiregen",
      expect: {
        types: [],
        objs: ["obj_lavafiregen"],
        names: []
      }
    }]
  },
  "ut:obj_sansb": {
    field: "part",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "part 0 - a_type 0",
      expect: {
        types: ["a_type 0", "a_type 12"],
        objs: [],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "part 1 - a_type 3",
      expect: {
        types: ["a_type 3"],
        objs: ["obj_sansshadowgen"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "part 2 - a_type 23",
      expect: {
        types: ["a_type 23"],
        objs: [],
        names: []
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "part 3 - a_type 6",
      expect: {
        types: ["a_type 6"],
        objs: [],
        names: []
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "part 4 - a_type 7",
      expect: {
        types: ["a_type 7", "a_type 13"],
        objs: [],
        names: []
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "part 5 - a_type 8",
      expect: {
        types: ["a_type 8", "a_type 22"],
        objs: [],
        names: []
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "part 6 - a_type 17",
      expect: {
        types: ["a_type 17"],
        objs: ["obj_sansshadowgen"],
        names: []
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "part 7 - a_type 15",
      expect: {
        types: ["a_type 15"],
        objs: [],
        names: []
      }
    }, {
      key: "8",
      pin: 8,
      cond: "8",
      id: "part 8 - a_type 18",
      expect: {
        types: ["a_type 18"],
        objs: [],
        names: []
      }
    }, {
      key: "9",
      pin: 9,
      cond: "9",
      id: "part 9 - a_type 1",
      expect: {
        types: ["a_type 1"],
        objs: [],
        names: []
      }
    }, {
      key: "10",
      pin: 10,
      cond: "10",
      id: "part 10 - a_type 5",
      expect: {
        types: ["a_type 5"],
        objs: [],
        names: []
      }
    }, {
      key: "11",
      pin: 11,
      cond: "11",
      id: "part 11 - a_type 21",
      expect: {
        types: ["a_type 21"],
        objs: [],
        names: []
      }
    }, {
      key: "12",
      pin: 12,
      cond: "12",
      id: "part 12 - a_type 16",
      expect: {
        types: ["a_type 16"],
        objs: [],
        names: []
      }
    }, {
      key: "13",
      pin: 13,
      cond: ">=13",
      id: "part >=13 - a_type 1",
      expect: {
        types: ["a_type 1", "a_type 5", "a_type 21", "a_type 16"],
        objs: [],
        names: []
      }
    }]
  },
  "ut:obj_asgore_finalintro": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_mercybutton_shatter",
      expect: {
        types: [],
        objs: ["obj_mercybutton_shatter", "obj_asgorefakespear", "obj_asgoreb", "obj_friendscene", "obj_slice", "obj_asgore_lastcutscene"],
        names: []
      }
    }]
  },
  "ut:obj_asgoreb": {
    field: "turns",
    attacks: [{
      key: "1",
      pin: 1,
      cond: "1",
      id: "turns 1 - type 1",
      expect: {
        types: ["type 1"],
        objs: ["obj_handbulletgen"],
        names: []
      }
    }, {
      key: "2",
      pin: 2,
      cond: "2",
      id: "turns 2 - obj_asgoreattackgen",
      expect: {
        types: [],
        objs: ["obj_asgoreattackgen"],
        names: []
      }
    }, {
      key: "3",
      pin: 3,
      cond: "3",
      id: "turns 3 - obj_sinefiregen_asg_lv2_usethis",
      expect: {
        types: [],
        objs: ["obj_sinefiregen_asg_lv2_usethis"],
        names: []
      }
    }, {
      key: "4",
      pin: 4,
      cond: "4",
      id: "turns 4 - obj_asgore_spearswipegen",
      expect: {
        types: [],
        objs: ["obj_asgore_spearswipegen"],
        names: []
      }
    }, {
      key: "5",
      pin: 5,
      cond: "5",
      id: "turns 5 - obj_randomhandgen",
      expect: {
        types: [],
        objs: ["obj_randomhandgen"],
        names: []
      }
    }, {
      key: "6",
      pin: 6,
      cond: "6",
      id: "turns 6 - obj_cfiregen",
      expect: {
        types: [],
        objs: ["obj_cfiregen"],
        names: []
      }
    }, {
      key: "7",
      pin: 7,
      cond: "7",
      id: "turns 7 - obj_firestormgen",
      expect: {
        types: [],
        objs: ["obj_firestormgen"],
        names: []
      }
    }, {
      key: "14",
      pin: 14,
      cond: "14",
      id: "turns 14 - obj_sinefiregen_asglv3",
      expect: {
        types: [],
        objs: ["obj_sinefiregen_asglv3"],
        names: []
      }
    }, {
      key: "21",
      pin: 21,
      cond: "21",
      id: "turns 21 - obj_cfiregen",
      expect: {
        types: [],
        objs: ["obj_cfiregen", "obj_firestormgen", "obj_randomhandgen", "obj_sinefiregen_asglv3", "obj_asgoreattackgen"],
        names: []
      }
    }]
  },
  "ut:obj_purplegradienter": {
    field: null,
    attacks: []
  },
  "ut:obj_orangeparticlegen": {
    field: null,
    attacks: []
  },
  "ut:obj_migospel": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: ">=0",
      id: "mycommand >=0 - bullettype 4",
      expect: {
        types: ["bullettype 4"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_parsnik": {
    field: "mycommand",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "<50",
      id: "mycommand <50 - bullettype 6",
      expect: {
        types: ["bullettype 6"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "50",
      pin: 50,
      cond: ">=50",
      id: "mycommand >=50 - bullettype 5",
      expect: {
        types: ["bullettype 5"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_moldessa": {
    field: "mycommand",
    attacks: [{
      key: "51",
      pin: 51,
      cond: "!>=0 <=50",
      id: "mycommand !>=0 <=50 - bullettype 2",
      expect: {
        types: ["bullettype 2"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }, {
      key: "0",
      pin: 0,
      cond: ">=0 <=50",
      id: "mycommand >=0 <=50 - bullettype 3",
      expect: {
        types: ["bullettype 3"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  },
  "ut:obj_glydeb": {
    field: null,
    attacks: []
  },
  "ut:obj_sosorry": {
    field: null,
    attacks: [{
      key: "only",
      pin: null,
      cond: "",
      id: "obj_doodlebug",
      expect: {
        types: [],
        objs: ["obj_doodlebug"],
        names: []
      }
    }]
  },
  "ut:obj_asrielb": {
    field: "turns",
    attacks: [{
      key: "0",
      pin: 0,
      cond: "0",
      id: "turns 0 - type 0",
      expect: {
        types: ["type 0"],
        objs: [],
        names: []
      }
    }, {
      key: "1",
      pin: 1,
      cond: "1",
      id: "turns 1 - type 1",
      expect: {
        types: ["type 1"],
        objs: [],
        names: []
      }
    }]
  },
  "ut:obj_asrielfinal": {
    field: "turns",
    attacks: [{
      key: "2",
      pin: 2,
      cond: "2",
      id: "turns 2 - bullettype 9",
      expect: {
        types: ["bullettype 9"],
        objs: ["obj_1sidegen"],
        names: []
      }
    }]
  }
};
var J = {
  "1:obj_joker": {
    0: "Teleport ambush",
    1: "Spade ring",
    2: "Heart bombs",
    3: "Devilsknife",
    4: "Carousel rush",
    5: "Club bombs",
    6: "Rising diamonds",
    7: "Spade rings (fast soul)",
    8: "Carousel",
    9: "Spade bombs",
    10: "Club dash",
    11: "Devilsknife II",
    12: "Teleport ambush (fast)",
    13: "Suit bomb barrage",
    14: "Diamond walls",
    15: "Chaos finale"
  },
  "1:obj_king_boss": {
    1: "Spades from the side",
    2: "Chain whip",
    3: "Falling chains",
    4: "Bouncing box",
    5: "Chain whip II",
    6: "Chain drag",
    7: "Falling chains II",
    8: "Bouncing box II",
    9: "Spades from the side II",
    10: "Chain whip III",
    11: "Final chain"
  },
  "1:obj_dummyenemy": {
    only: "Training pellets"
  },
  "1:obj_lancerboss": {
    0: "Lancer bike"
  },
  "1:obj_lancerboss3": {
    0: "Lancer bike"
  },
  "1:obj_lancerboss2": {
    0: "Spade wave",
    1: "Spade spiral",
    3: "Spade storm"
  },
  "1:obj_diamondenemy": {
    0: "Homing diamonds",
    1: "Rising diamonds"
  },
  "1:obj_heartenemy": {
    1: "Spinning hearts",
    0: "Heart shaper"
  },
  "1:obj_smallcheckers_enemy": {
    999: "Spinning hearts"
  },
  "1:obj_clubsenemy": {
    0: "Club triplets",
    1: "Club rain"
  },
  "1:obj_clubsenemy_old": {
    0: "Club triplets",
    1: "Club rain"
  },
  "1:obj_checkers_enemy": {
    only: "K.Round leap"
  },
  "1:obj_ponman_enemy": {
    only: "Ponman eye shots"
  },
  "1:obj_rabbick_enemy": {
    0: "Dust bunnies",
    1: "Dust storm"
  },
  "1:obj_bloxer_enemy": {
    0: "Falling blocks"
  },
  "1:obj_jigsawryenemy": {
    0: "Puzzle pieces"
  },
  "1:obj_rudinnranger": {
    99: "Rising diamonds",
    0: "Knight slashes"
  },
  "1:obj_headhathy": {
    1: "Spinning hearts",
    0: "Heart tentacles"
  },
  "1:obj_susieenemy": {
    0: "Lancer bike (with Susie)",
    1: "Axe slash",
    2: "Axe rain"
  },
  "1:obj_ralseienemy": {
    only: "Ralsei's training bullets"
  },
  "2:obj_queen_enemy": {
    0: "Image search",
    1: "Queen's ultimate attack",
    2: "Wine glass",
    3: "Stomp",
    4: "New social media",
    5: "Buffering",
    6: "Explosion",
    7: "Berdly tornado / feathers",
    8: "Queen laser",
    9: "Plug",
    10: "Birthday cake"
  },
  "2:obj_spamton_neo_enemy": {
    0: "Flying heads",
    1: "Pipis football",
    2: "Heart attack (wire heart)",
    4: "Phone hands",
    5: "Pipis explosion",
    6: "REC-CREW columns",
    7: "Face attack",
    8: "Phone call",
    8.5: "Phone hands II",
    9: "NEO finale",
    10: "Diamonds"
  },
  "2:obj_spamton_enemy": {
    0: "Minitons",
    1: "Word bullets",
    2: "Money vacuum"
  },
  "2:obj_gigaqueen_enemy": {
    only: "Giga missiles"
  },
  "2:obj_berdlyb_enemy": {
    0: "Tornado",
    1: "Spear blast",
    2: "Feather scatter"
  },
  "2:obj_berdlyb2_enemy": {
    0: "Tornado",
    1: "Spear blast",
    2: "Feather scatter"
  },
  "2:obj_rouxls_enemy": {
    0: "Thrash head",
    1: "Thrash foot",
    2: "Puzzle blocks"
  },
  "2:obj_rouxls_enemy_old_copy": {
    0: "Thrash head",
    1: "Thrash foot",
    2: "Puzzle blocks"
  },
  "2:obj_tasque_manager_enemy": {
    0: "Whip",
    1: "Rising diamonds",
    2: "Quiz"
  },
  "2:obj_tasque_enemy": {
    0: "Yarn balls",
    1: "Meow wow"
  },
  "2:obj_clubsenemy": {
    0: "Club triplets",
    1: "Club rain",
    2: "Club wheel"
  },
  "2:obj_werewerewire_enemy": {
    1: "Wire lasers"
  },
  "2:obj_werewire_enemy": {
    only: "Zzt balloons"
  },
  "2:obj_virovirokun_enemy": {
    0: "Space invader",
    1: "Viruses"
  },
  "2:obj_sweet_enemy": {
    only: "Musical bullets"
  },
  "2:obj_kk_enemy": {
    only: "Musical bullets"
  },
  "2:obj_hatguy_enemy": {
    only: "Musical bullets"
  },
  "2:obj_ralseienemy": {
    only: "Ralsei's training bullets"
  },
  "2:obj_dojo_spareenemy": {
    only: "Launch"
  },
  "3:obj_tenna_enemy": {
    0: "All-Star Cast",
    1: "Smash cut",
    2: "Rimshot lens flare",
    20: "Light 'Em Up"
  },
  "3:obj_tenna_board4_enemy": {
    only: "Rimshot lens flare"
  },
  "3:obj_knight_enemy": {
    0: "Sword slash",
    1: "Star burst",
    2: "Sword flurry",
    3: "Sword tunnel",
    4: "X slashes",
    5: "Rotating slash",
    6: "Under-box attack",
    7: "Combination attack",
    9: "The Roar",
    10: "Falling swords",
    11: "Tracking swords",
    12: "Diagonal bullets",
    13: "Sword tunnel II",
    14: "Tracking swords II",
    15: "Sword vortex",
    16: "Rotating slash II",
    17: "Tracking swords III",
    20: "Knight lines"
  },
  "3:obj_rouxls_ch3_enemy": {
    0: "Rouxls shoots",
    1: "Yarn balls",
    2: "Laser pointer",
    3: "Laser pointer II"
  },
  "3:obj_shadowman_enemy": {
    0: "Trumpet",
    1: "Saxophone",
    2: "Tommy gun",
    3: "Censored bullets"
  },
  "3:obj_shutta_enemy": {
    0: "Snapshot I",
    1: "Snapshot II",
    2: "Snapshot III",
    3: "Photo flash"
  },
  "3:obj_zapper_enemy": {
    0: "Zapper laser",
    1: "Zapper cannon",
    2: "Volume control"
  },
  "3:obj_lanino_rematch_enemy": {
    only: "Weather forecast"
  },
  "3:obj_elnina_rematch_enemy": {
    only: "Weather forecast"
  },
  "4:obj_lanino_rematch_enemy": {
    only: "Weather forecast"
  },
  "4:obj_elnina_rematch_enemy": {
    only: "Weather forecast"
  },
  "4:obj_zapper_enemy": {
    0: "Zapper laser",
    1: "Zapper cannon",
    2: "Volume control"
  },
  "4:obj_rudinnranger": {
    99: "Rising diamonds",
    0: "Knight slashes"
  },
  "4:obj_hammer_of_justice_enemy": {
    only: "Rude Buster (Gerson)"
  },
  "4:obj_titan_enemy": {
    0: "Dark shapes (red)",
    1: "Shape centipede (harder)",
    2: "Big shot",
    3: "Big shot (desperation)",
    4: "Big shot (aimed)",
    5: "Shape centipede (hardest)",
    6: "Dark shapes (intro)",
    7: "Shape centipede (intro)",
    8: "Shape mines",
    9: "The hands",
    10: "The hands (fast)",
    11: "The hands (fastest)",
    12: "Centipede, no shapes",
    13: "Big shot (short)",
    14: "Dark shapes (harder)",
    15: "Dark shapes (hardest)",
    16: "Dark shapes (final)"
  },
  "4:obj_titan_spawn_enemy": {
    0: "Dark shapes (red)",
    1: "Shape centipede",
    2: "Big shot",
    3: "Big shot (desperation)",
    4: "Big shot (aimed)",
    5: "Shape centipede (hard)",
    6: "Dark shapes (intro)",
    7: "Shape centipede (intro)",
    8: "Shape mines",
    9: "The hands",
    10: "Dark shapes (speed up)"
  },
  "5:obj_trashy_trio": {
    0: "Trashy rush",
    1: "Ball toss",
    2: "Nubert spear",
    3: "Trashy beam",
    4: "Trashy beam II"
  },
  "5:obj_scarecrow_enemy": {
    "-1": "Splitting shuriken",
    0: "Scythe toss (easy)",
    1: "Scythe bomb"
  },
  "0:obj_silhouette_enemy": {
    only: "Bad Apple!!"
  },
  "ut:obj_sansb": {
    0: "Bone gap run",
    1: "Tall blue bones",
    2: "Random bone gaps",
    3: "Platform climb",
    4: "Platform climb II",
    5: "Platform lanes",
    6: "Bone loops",
    7: "Platform lanes II",
    8: "Bone loops II",
    9: "Bone gap run (fast)",
    10: "Bone squeeze",
    11: "Random bone gaps II",
    12: "Platform lanes III",
    13: "Random repeat"
  },
  "ut:obj_undyne_ex": {
    0: "Spear chase",
    1: "Rising spears",
    2: "Spear circle",
    4: "Homing spears",
    5: "Spear circle II"
  },
  "ut:obj_undyneboss": {
    0: "Spear chase",
    51: "Rising spears"
  },
  "ut:obj_torielboss": {
    0: "Fireball rain",
    21: "Fireball spiral",
    41: "Fire wave",
    61: "Fire hands (both)",
    81: "Fire hand sweep"
  },
  "ut:obj_papyrusboss": {
    "-1": "Opening bones",
    0: "Bone pattern 0",
    1: "Bone pattern 1",
    2: "Bone pattern 2",
    3: "Bone pattern 3",
    4: "Bone pattern 4",
    5: "Bone pattern 5",
    6: "Bone pattern 6",
    7: "Bone pattern 7",
    8: "Bone pattern 8",
    9: "Bone pattern 9",
    10: "Bone pattern 10",
    11: "Bone pattern 11",
    12: "Bone pattern 12",
    13: "Bone pattern 13",
    14: "Annoying Dog",
    15: "Blue bone parade"
  },
  "ut:obj_asgoreb": {
    1: "Fire hands",
    2: "Trident sweep (blue/orange)",
    3: "Fire waves",
    4: "Trident swipe",
    5: "Fire hands (random)",
    6: "Fire circle",
    7: "Firestorm",
    14: "Fire waves II",
    21: "Fire circle II"
  },
  "ut:obj_asrielb": {
    0: "Star Blazing",
    1: "Chaos Saber"
  },
  "ut:obj_asrielfinal": {
    2: "Lost soul fire"
  },
  "ut:obj_spiderb": {
    0: "Spider waves",
    4: "Cupcake pet"
  },
  "ut:obj_mettatonex": {
    1: "Mettaton EX show"
  },
  "ut:obj_mettatonb_third": {
    1: "Legs",
    2: "Bombs & blocks",
    3: "Arms",
    4: "Disco ball",
    5: "Bombs & blocks II"
  },
  "ut:obj_mettatonb_second": {
    2: "Black bullets"
  },
  "ut:obj_questionasker": {
    5: "Fly jar",
    6: "Zoomaton"
  },
  "ut:obj_froggit": {
    0: "Leapfrog",
    41: "Flies"
  },
  "ut:obj_fakefroggit": {
    only: "Flies"
  },
  "ut:obj_testmonster": {
    only: "Flies"
  },
  "ut:obj_whimsun": {
    51: "Butterflies"
  },
  "ut:obj_moldsmal": {
    0: "Gelatin rain",
    51: "Gelatin bounce"
  },
  "ut:obj_moldsmalx": {
    0: "Gelatin rain",
    51: "Gelatin bounce"
  },
  "ut:obj_moldessa": {
    0: "Gelatin rain",
    51: "Gelatin bounce"
  },
  "ut:obj_migosp": {
    0: "Roach swarm (alone)",
    5: "Roach swarm"
  },
  "ut:obj_migospel": {
    0: "Roach swarm"
  },
  "ut:obj_vegetoid": {
    0: "Carrots",
    50: "Green carrots"
  },
  "ut:obj_parsnik": {
    0: "Snakes",
    50: "Green snakes"
  },
  "ut:obj_loox": {
    0: "Eye shots",
    50: "Eye rings"
  },
  "ut:obj_napstablook": {
    0: "Tears",
    51: "Tear rain"
  },
  "ut:obj_movedoge": {
    0: "Blue sword",
    100: "Sword sweep"
  },
  "ut:obj_lesserdoge": {
    0: "Pomeranian leap",
    50: "Blue spear"
  },
  "ut:obj_mandog": {
    0: "Axe swings",
    51: "Dog loop"
  },
  "ut:obj_womandog": {
    only: "Axe swings"
  },
  "ut:obj_greatdog": {
    0: "Puppy leap",
    51: "Blue puppies"
  },
  "ut:obj_gyftrot": {
    0: "Gift boxes",
    61: "Ornaments"
  },
  "ut:obj_chilldrake": {
    0: "Birds",
    51: "Icicles"
  },
  "ut:obj_snowdrake": {
    0: "Birds",
    51: "Icicles"
  },
  "ut:obj_icecap": {
    0: "Ice teeth",
    50: "Ice caps"
  },
  "ut:obj_aaron": {
    0: "Muscle flex",
    51: "Sweat drops"
  },
  "ut:obj_tembattle": {
    0: "Tem hands",
    25: "Tem rain"
  },
  "ut:obj_woshua": {
    1: "Bubble spiral",
    0: "Water drops"
  },
  "ut:obj_shyren": {
    0: "Musical notes"
  },
  "ut:obj_maddummy": {
    only: "Dummy bullets"
  },
  "ut:obj_gladdummy": {
    only: "Glad Dummy"
  },
  "ut:obj_bara01": {
    51: "Carrot stars"
  },
  "ut:obj_bara02": {
    0: "Carrot stars",
    51: "Armor bounce"
  },
  "ut:obj_bara03": {
    0: "X bullets",
    51: "Armor bounce"
  },
  "ut:obj_bara04": {
    0: "X bullets",
    51: "Warp lines"
  },
  "ut:obj_tsunderplane": {
    only: "Plane dive"
  },
  "ut:obj_vulkin": {
    only: "Lava fire"
  },
  "ut:obj_pyrope": {
    0: "Rope fire"
  },
  "ut:obj_wizard": {
    0: "Orb wall",
    50: "Chaser orb"
  },
  "ut:obj_finalknight": {
    76: "Hammer swings"
  },
  "ut:obj_finalfroggit": {
    50: "Frog flies"
  },
  "ut:obj_astigmatism": {
    0: "Stromboli",
    50: "Eye beams"
  },
  "ut:obj_whimsalot": {
    50: "Butterfly spears"
  },
  "ut:obj_battlebomb": {
    only: "Bomb"
  },
  "ut:obj_lemonbread": {
    0: "Biters",
    60: "Melon bullets"
  },
  "ut:obj_reaperbird": {
    1: "Butterfly heads",
    0: "Strange intro",
    2: "Butterfly heads II"
  },
  "ut:obj_snowdrakemom": {
    only: "Claw failure"
  },
  "ut:obj_memoryhead": {
    0: "Freak bullets",
    "-1": "Cloud bullets"
  },
  "ut:obj_endogeny": {
    0: "Laser dogs",
    50: "Rocket dogs"
  },
  "ut:obj_ripoff_undyne": {
    only: "Spear block"
  },
  "ut:obj_ripoff_papyrus": {
    0: "Bones"
  },
  "ut:obj_ripoff_alphys": {
    0: "Mettaton legs",
    1: "Mettaton arms"
  },
  "ut:obj_ripoff_toriel": {
    0: "Fire circle",
    50: "Fire hands"
  },
  "ut:obj_mkid_battle": {
    0: "Cloud bullets",
    50: "Lava fire"
  },
  "ut:obj_mettaton_neo": {
    0: "Cloud bullets",
    50: "Lava fire"
  },
  "ut:obj_sosorry": {
    only: "Doodle bugs"
  },
  "ut:obj_dummymonster": {
    only: "Dummy"
  },
  "ut:obj_asgore_finalintro": {
    only: "MERCY shatter"
  }
};
function tidy(n0) {
  n0 = String(n0 || "").replace(/([a-z])([A-Z])/g, "$1 $2").replace(/_/g, " ").replace(/\s+/g, " ").trim();
  return n0 && (n0 = n0[0].toUpperCase() + n0.slice(1).toLowerCase(), n0.replace(/\b(neo|sneo|ex|ii|iii|tv|rec)\b/gi, n1 => n1.toUpperCase()));
}
y(tidy, "tidy");
var chKey = y(n0 => n0.chapter === "utdr" || n0.chapter === "ut" ? "ut" : String(n0.chapter), "chKey");
var prettyClass = y(n0 => String(n0).replace(/^(obj|o)_/, "").replace(/_?(enemy|boss|battle)$/, "").replace(/_/g, " ").trim(), "prettyClass");
var b = t;
function setFights(n0) {
  b = n0;
  M.clear();
}
y(setFights, "setFights");
function monstersOf(n0) {
  if (!n0) {
    return [];
  }
  if (n0.monsters && n0.monsters.length) {
    return n0.monsters;
  }
  if (n0.chapter === "ut" && n0.battlegroup !== undefined && b) {
    let n1 = b.find(n2 => n2.id === "utdr" + n0.battlegroup);
    return n1 && n1.monsters || [];
  }
  return [];
}
y(monstersOf, "monstersOf");
var clsName = y(n0 => {
  let n1 = n0 && n0.cls;
  let n2 = n1 && (n1.name || n1);
  if (typeof n2 == "string") {
    return n2.replace(/^bound /, "");
  } else {
    return null;
  }
}, "clsName");
var M = new Map();
function fightEnemies(n0) {
  if (!n0) {
    return [];
  }
  if (M.has(n0.id)) {
    return M.get(n0.id);
  }
  let n1 = chKey(n0);
  let n2 = [];
  for (let n6 of monstersOf(n0)) {
    let n7 = clsName(n6);
    if (n7 && !n2.includes(n7)) {
      n2.push(n7);
    }
  }
  let n3 = [...new Set(String(n0.name || "").split(/\s*&\s*/).map(n8 => n8.replace(/\s+x\d+$/i, "").trim()).filter(Boolean))];
  let n4 = [];
  let n5 = n2.filter(n8 => o[n1 + ":" + n8] && o[n1 + ":" + n8].attacks.length);
  n2.forEach((n8, n9) => {
    let nn = n1 + ":" + n8;
    let ne = o[nn];
    let nN = n3.length === n2.length ? n3[n9] : n3.length === n5.length && n5.includes(n8) ? n3[n5.indexOf(n8)] : tidy(prettyClass(n8));
    let nG = ne ? ne.attacks.map(nz => {
      let nD = J[nn] && J[nn][nz.key];
      let nk = nz.expect.names[0];
      return {
        key: nz.key,
        cls: n8,
        enemy: nN,
        field: ne.field,
        pin: nz.pin,
        id: nz.id,
        internal: nk || "",
        name: nD || (nk ? tidy(nk) : nN + " attack" + (nz.key === "only" ? "" : " " + nz.key)),
        expect: nz.expect,
        forcible: ne.field != null && nz.pin != null
      };
    }) : [];
    n4.push({
      cls: n8,
      key: nn,
      label: nN,
      field: ne ? ne.field : null,
      attacks: nG
    });
  });
  M.set(n0.id, n4);
  return n4;
}
y(fightEnemies, "fightEnemies");
function fightAttacks(n0) {
  return fightEnemies(n0).flatMap(n1 => n1.attacks);
}
y(fightAttacks, "fightAttacks");
var attackId = y(n0 => n0 && n0 !== "any" ? n0.cls + "#" + n0.key : "any", "attackId");
function findAttack(n0, n1) {
  return fightAttacks(n0).find(n2 => attackId(n2) === n1) || null;
}
y(findAttack, "findAttack");
var attackTitle = y(n0 => n0 === "any" || !n0 ? "Whatever comes next" : n0.name, "attackTitle");
var liveOf = y((n0, n1) => n0.list.filter(n2 => n2 && !n2.destroyed && typeof n2.is == "function" && n2.is(n1)), "liveOf");
function pinAttack(n0, n1) {
  if (!n1 || !n1.forcible) {
    return 0;
  }
  let n2 = 0;
  for (let n3 of liveOf(n0, n1.cls)) {
    let n4 = Object.getOwnPropertyDescriptor(n3, n1.field);
    let n5 = n3.__atkPin;
    if (n5 && n5.field === n1.field && n5.v === n1.pin && n4 && n4.get === n5.get) {
      n2++;
      continue;
    }
    if (n5 && n5.field !== n1.field) {
      unpinOne(n3);
    }
    let n6 = n3.__atkPin || {
      field: n1.field,
      old: n4 && n4.get ? n3[n1.field] : n4 ? n4.value : undefined,
      reads: 0
    };
    n6.field = n1.field;
    n6.v = n1.pin;
    let n7 = n1.pin;
    n6.get = function () {
      n6.reads++;
      return n7;
    };
    Object.defineProperty(n3, "__atkPin", {
      value: n6,
      writable: true,
      configurable: true,
      enumerable: false
    });
    Object.defineProperty(n3, n1.field, {
      get: n6.get,
      set(n8) {
        n6.old = n8;
      },
      configurable: true,
      enumerable: true
    });
    n2++;
  }
  return n2;
}
y(pinAttack, "pinAttack");
function unpinOne(n0) {
  let n1 = n0.__atkPin;
  if (n1) {
    delete n0[n1.field];
    n0[n1.field] = n1.old === undefined ? 0 : n1.old;
    delete n0.__atkPin;
  }
}
y(unpinOne, "unpinOne");
function unpinAll(n0) {
  for (let n1 of n0.list) {
    if (n1 && n1.__atkPin) {
      unpinOne(n1);
    }
  }
}
y(unpinAll, "unpinAll");
function attackStarted(n0, n1, n2) {
  if (!n2) {
    return false;
  }
  let n3 = n2.expect || {};
  let n4 = n1.monsterattackname || [];
  if (n3.names && n3.names.length && [0, 1, 2].some(nn => n3.names.includes(n4[nn]))) {
    return true;
  }
  let n5 = (n3.types || []).map(nn => nn.split(" ")).filter(([nn]) => nn === "type");
  let n6 = (n3.objs || []).filter(nn => /^(obj|blt|o)_/.test(nn));
  let n7 = n6.filter(nn => /controller/.test(nn));
  let n8 = (n3.types || []).map(nn => nn.split(" ")).filter(([nn]) => nn === "a_type" || nn === "bullettype" || nn === "attacktype");
  let n9 = n8.length && n0.list.some(nn => nn && nn.__atkPin && nn.__atkPin.reads > 0);
  for (let nn of n0.list) {
    if (!!nn && !nn.destroyed && typeof nn.is == "function") {
      if (n5.length && n7.some(ne => nn.is(ne)) && n5.some(([, ne]) => Number(nn.type) === Number(ne))) {
        return true;
      }
      for (let ne of n6) {
        if (!/controller/.test(ne) && nn.is(ne)) {
          return true;
        }
      }
      if (n9) {
        for (let [nN, nG] of n8) {
          if (nn[nN] !== undefined && Number(nn[nN]) === Number(nG) && nn !== n0.list.find(nz => nz && nz.__atkPin)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}
y(attackStarted, "attackStarted");
export { o as a, J as b, tidy as c, setFights as d, fightEnemies as e, fightAttacks as f, attackId as g, findAttack as h, attackTitle as i, pinAttack as j, unpinAll as k, attackStarted as l };
