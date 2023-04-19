import { boardColor } from "../insertCharachters";

export default function pawn(xPos, yPos, Xtarg, Ytarg, board, color) {
    let steps = pawnSteps(xPos, yPos, Xtarg, Ytarg, board, color);
    let target = checkTarget(xPos, yPos, Xtarg, Ytarg, board, color);
    let forward = pawnForward(xPos, Xtarg, board, color);
    if (steps && target && forward) {
        return true;
    }
}

function pawnSteps(xPos, yPos, Xtarg, Ytarg, board, color) {
    let pawnMove = Math.abs(Xtarg - xPos);
    if (pawnMove == 1) {
        return pawnReg(yPos, Ytarg);
    } else if (pawnMove == 2) {
        return pawnFirstMove(xPos, yPos, Xtarg, Ytarg, board, color);
    } else {
        //console.log("only make 1 or 2 moves");
        return false;
    }
}

function pawnReg(yPos, Ytarg) {
    if (Math.abs(Ytarg - yPos) <= 1) {
        return true;
    } else {
        //console.log("y is to far");
        return false;
    }
}

function pawnFirstMove(xPos, yPos, Xtarg, Ytarg, board, color) {
    let firstMovePos = checkPawnStart(board, color) == xPos;
    let Ysame = yPos == Ytarg;
    if (firstMovePos && Ysame) {
        return true;
    } else {
        //console.log("not first move or y diifrent");
        return false;
    }
}

function checkTarget(xPos, yPos, Xtarg, Ytarg, board, color) {
    if (yPos == Ytarg) {
        return targetSameY(Xtarg, Ytarg, board);
    } else {
        return targetNotSameY(Xtarg, Ytarg, board, color);
    }
}

function targetSameY(Xtarg, Ytarg, board) {
    if (board[Xtarg][Ytarg]) {
        //console.log("target same y");
        return false;
    } else {
        return true;
    }
}
function targetNotSameY(Xtarg, Ytarg, board, color) {
    if (!board[Xtarg][Ytarg] || board[Xtarg][Ytarg].color == color) {
        //console.log("target virtical none or same color");
        return false;
    } else {
        return true;
    }
}

function pawnForward(xPosition, Xtarget, board, color) {
    let xdiff = Xtarget - xPosition;
    let farward;
    if (checkPawnStart(board, color) == 1) {
        farward = xdiff > 0;
    } else {
        farward = xdiff < 0;
    }
    if (!farward) {
        //console.log("fawrward false");
    }
    return farward;
}

function checkPawnStart(board, color) {
    const { white, black } = boardColor();

    if (color == "white") {
        return Math.abs(white - 1);
    } else {
        return Math.abs(black - 1);
    }
}
