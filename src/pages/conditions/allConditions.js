import rook from "./rook";
import bishup from "./bishup";
import king from "./king";
import pawn from "./pawn";
import horse from "./horse";
import queen from "./queen";
import { checkTarget, checkTheWay, checkBoundrys } from "./checkIfsideInWay";
import { checKing } from "./check";

const charachterCondit = {
    rook,
    bishup,
    king,
    pawn,
    horse,
    queen,
};

function Allcondintions(Xpos, yPos, Xtarg, Ytarg, board, color, type) {
    let theWay, boundrys, cond, target, check;
    boundrys = checkBoundrys(Xtarg, Ytarg, board);
    cond = charachterCondit[type](Xpos, yPos, Xtarg, Ytarg, board, color);
    target = checkTarget(Xtarg, Ytarg, color, board, type);
    theWay = checkTheWay(Xtarg, Ytarg, Xpos, yPos, board, type);
    if (cond && target && theWay && boundrys) {
        return true;
    } else {
        return false;
    }
}
export default charachterCondit;
export { Allcondintions };
