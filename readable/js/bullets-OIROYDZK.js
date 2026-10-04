var t = function () {
  ;
  var M = true;
  return function (L, W) {
    var u = M ? function () {
      if (W) {
        var w = W.apply(L, arguments);
        W = null;
        return w;
      }
    } : function () {};
    M = false;
    return u;
  };
}();
import { a as scr_bullet_inherit, b as applyBulletDamage, c as obj_bulletparent, d as obj_bulletgenparent, e as obj_collidebullet, f as obj_regularbullet, g as obj_regularbullet_permanent, h as obj_dbullet_vert, i as obj_dbullet_maker, j as obj_suitbomb, k as obj_heartbomb_blast, l as obj_carouselbullet, m as obj_spadering, n as obj_joker_teleport, o as obj_clubsbullet_dark, p as obj_centerscythe, q as obj_laserscythe } from "./c-ZF4DELGJ.js";
import "./c-EUQCKUJR.js";
import "./c-YJJCI5ES.js";
import "./c-FMIAGHDE.js";
import "./c-PIEPTJTC.js";
export { applyBulletDamage, obj_bulletgenparent, obj_bulletparent, obj_carouselbullet, obj_centerscythe, obj_clubsbullet_dark, obj_collidebullet, obj_dbullet_maker, obj_dbullet_vert, obj_heartbomb_blast, obj_joker_teleport, obj_laserscythe, obj_regularbullet, obj_regularbullet_permanent, obj_spadering, obj_suitbomb, scr_bullet_inherit };
