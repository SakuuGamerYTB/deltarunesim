var R = function () {
  ;
  var Tn = true;
  return function (TO, TJ) {
    var Tp = Tn ? function () {
      if (TJ) {
        var Tw = TJ.apply(TO, arguments);
        TJ = null;
        return Tw;
      }
    } : function () {};
    Tn = false;
    return Tp;
  };
}();
import { $ as currentDeck, D as PAL, E as DIM, F as DIMPAL, G as FELT, H as CARD_W, I as CARD_H, J as CHIP_D, K as setCanvasFactory, L as frameRows, M as bake, N as SUIT_SHOWN, O as FLAWS, P as NAMED_FLAWS, Q as flawOf, R as BUTTON_IDS, S as ICON12, T as ART, U as DECKS, V as deckFor, W as deckPath, X as setDeck, Y as preloadDecks, Z as deckReady, _ as deckSettled, aa as setDeckImage, ba as drawCard, ca as drawChip, da as drawStack, ea as stackHeight, fa as chipsFor, ga as fmtD, ha as drawButton, ia as BUTTON, ja as LAYOUT, ka as drawFelt, la as drawRoom, ma as drawProp, na as drawMicro, oa as microWidth, pa as selfTest, qa as _review } from "./c-EVUTBL4V.js";
import "./c-PIEPTJTC.js";
export { ART, BUTTON, BUTTON_IDS, CARD_H, CARD_W, CHIP_D, DECKS, DIM, DIMPAL, FELT, FLAWS, ICON12, LAYOUT, NAMED_FLAWS, PAL, SUIT_SHOWN, _review, bake, chipsFor, currentDeck, deckFor, deckPath, deckReady, deckSettled, drawButton, drawCard, drawChip, drawFelt, drawMicro, drawProp, drawRoom, drawStack, flawOf, fmtD, frameRows, microWidth, preloadDecks, selfTest, setCanvasFactory, setDeck, setDeckImage, stackHeight };
