var G4 = function () {
  ;
  var s6 = true;
  return function (s7, s8) {
    var s9 = s6 ? function () {
      if (s8) {
        var sG = s8.apply(s7, arguments);
        s8 = null;
        return sG;
      }
    } : function () {};
    s6 = false;
    return s9;
  };
}();
import { $a as obj_fadechain, $b as obj_rabbick_enemy, Ab as obj_hypnofx, Bb as obj_afterimage_grow, Cb as obj_heartblcon, Db as obj_excblcon, Eb as obj_throwralsei, Fb as obj_throwtarget, Gb as obj_smallface, Hb as obj_move_to_point, Ib as obj_thrashmachine, Ja as obj_axebullet, Jb as obj_bloxer_enemy, Ka as obj_bigscythe, Kb as obj_chaseenemy, La as obj_blockbullet_fall, Lb as obj_chaseenemy_Collision, Ma as obj_carouselbullet, Mb as obj_checkers_enemy, Na as obj_carrotthrower, Nb as obj_clubsenemy, Oa as obj_centerscythe, Ob as obj_clubsenemy_old, Pa as obj_chain_of_hell, Pb as obj_diamondenemy, Qa as obj_chainking, Qb as obj_dummyenemy, Ra as obj_chainpiece, Rb as obj_headhathy, Sa as obj_chasebullet, Sb as obj_heartenemy, Ta as obj_checkers_leap, Tb as obj_jigsawryenemy, Ua as obj_clubsbullet, Ub as obj_joker, Va as obj_clubsbullet_dark, Vb as obj_king_boss, Wa as obj_dbullet_maker, Wb as obj_lancerboss, Xa as obj_dbullet_vert, Xb as obj_lancerboss2, Ya as obj_dbulletcontroller, Yb as obj_lancerboss3, Za as obj_dicebul, Zb as obj_placeholderenemy, _a as obj_dknight_slasher, _b as obj_ponman_enemy, ab as obj_finalchain, ac as obj_ralseienemy, bb as obj_growtangle, bc as obj_rudinnranger, cb as obj_growtangle_bouncer, cc as obj_scissordancer_Collision_obj, db as obj_heart, dc as obj_smallcheckers_enemy, eb as obj_heartbomb_blast, ec as obj_susieenemy, fb as obj_heartshaper, fc as obj_testoverworldenemy, gb as obj_jigsawbullet, gc as obj_testoverworldenemy_Collision, hb as obj_joker_teleport, hc as obj_animation, ib as obj_lancerbike, ic as obj_checker_animtest, jb as obj_lancerbike_neo, jc as obj_encounterbasic, kb as obj_laserscythe, kc as obj_ralseithrown, lb as obj_overworldbulletparent, lc as obj_dialoguer, mb as obj_ob_checkertile, mc as obj_fadeout, nb as obj_overworld_spade, nc as obj_persistentfadein, ob as obj_overworld_spade_homing, oc as obj_panner, pb as obj_rabbitbullet, pc as ATTACKS, qb as obj_ralseibullet, qc as obj_readable_room1, rb as obj_skychain, sb as obj_spadering, tb as obj_spinheart, ub as obj_suitbomb, vb as obj_wavechain, wb as obj_nonsolid_growtangle, xb as obj_defeatanim, yb as obj_spareanim, zb as obj_oflash } from "./c-5APM5PG3.js";
import { b as obj_joker_body } from "./c-QZOXK6RN.js";
import "./c-YST6GS7R.js";
import { c as obj_jokerbg_triangle_real, g as obj_battleback } from "./c-Y4HOFVS7.js";
import { c as obj_bulletparent, d as obj_bulletgenparent, e as obj_collidebullet, f as obj_regularbullet, g as obj_regularbullet_permanent } from "./c-ZF4DELGJ.js";
import { N as obj_battlecontroller, f as obj_dmgwriter, g as obj_basicattack, i as obj_healanim, p as obj_monsterparent, s as obj_attackpress, t as obj_spellphase } from "./c-SEM2A64W.js";
import "./c-D6ZXNKTF.js";
import { b as obj_writer, c as obj_face, g as obj_battleblcon } from "./c-PF7AREFU.js";
import "./c-VNDJ6YIS.js";
import { c as obj_elnina_lanino_rematch_controller, g as obj_hathyfightevent, h as obj_heartmarker, i as obj_lancerbattle2_event, j as obj_mainchara, n as obj_solidblock, o as obj_solidenemy, p as obj_susieandlancer_event } from "./c-I2ROP6YV.js";
import { a as obj_marker, b as obj_afterimage, e as obj_battlesolid, g as obj_grazebox, j as obj_moveheart, p as obj_darkener, q as obj_shake } from "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { ATTACKS, obj_afterimage, obj_afterimage_grow, obj_animation, obj_attackpress, obj_axebullet, obj_basicattack, obj_battleback, obj_battleblcon, obj_battlecontroller, obj_battlesolid, obj_bigscythe, obj_blockbullet_fall, obj_bloxer_enemy, obj_bulletgenparent, obj_bulletparent, obj_carouselbullet, obj_carrotthrower, obj_centerscythe, obj_chain_of_hell, obj_chainking, obj_chainpiece, obj_chasebullet, obj_chaseenemy, obj_chaseenemy_Collision, obj_checker_animtest, obj_checkers_enemy, obj_checkers_leap, obj_clubsbullet, obj_clubsbullet_dark, obj_clubsenemy, obj_clubsenemy_old, obj_collidebullet, obj_darkener, obj_dbullet_maker, obj_dbullet_vert, obj_dbulletcontroller, obj_defeatanim, obj_dialoguer, obj_diamondenemy, obj_dicebul, obj_dknight_slasher, obj_dmgwriter, obj_dummyenemy, obj_elnina_lanino_rematch_controller, obj_encounterbasic, obj_excblcon, obj_face, obj_fadechain, obj_fadeout, obj_finalchain, obj_grazebox, obj_growtangle, obj_growtangle_bouncer, obj_hathyfightevent, obj_headhathy, obj_healanim, obj_heart, obj_heartblcon, obj_heartbomb_blast, obj_heartenemy, obj_heartmarker, obj_heartshaper, obj_hypnofx, obj_jigsawbullet, obj_jigsawryenemy, obj_joker, obj_joker_body, obj_joker_teleport, obj_jokerbg_triangle_real, obj_king_boss, obj_lancerbattle2_event, obj_lancerbike, obj_lancerbike_neo, obj_lancerboss, obj_lancerboss2, obj_lancerboss3, obj_laserscythe, obj_mainchara, obj_marker, obj_monsterparent, obj_move_to_point, obj_moveheart, obj_nonsolid_growtangle, obj_ob_checkertile, obj_oflash, obj_overworld_spade, obj_overworld_spade_homing, obj_overworldbulletparent, obj_panner, obj_persistentfadein, obj_placeholderenemy, obj_ponman_enemy, obj_rabbick_enemy, obj_rabbitbullet, obj_ralseibullet, obj_ralseienemy, obj_ralseithrown, obj_readable_room1, obj_regularbullet, obj_regularbullet_permanent, obj_rudinnranger, obj_scissordancer_Collision_obj, obj_shake, obj_skychain, obj_smallcheckers_enemy, obj_smallface, obj_solidblock, obj_solidenemy, obj_spadering, obj_spareanim, obj_spellphase, obj_spinheart, obj_suitbomb, obj_susieandlancer_event, obj_susieenemy, obj_testoverworldenemy, obj_testoverworldenemy_Collision, obj_thrashmachine, obj_throwralsei, obj_throwtarget, obj_wavechain, obj_writer };
