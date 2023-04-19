function checkBoundrys(Xtarget, Ytarget, board) {
    let Xboundry = Xtarget < board.length && Xtarget >= 0;
    let Yboundry = Ytarget < board.length && Ytarget >= 0;
    if (!Xboundry || !Yboundry) {
        //console.log("boundry problem ");
        return false;
    }
    return true;
}

function checkTarget(xTArget, Ytarget, color, board, type) {
    if (type == "pawn") {
        return true;
    }
    if (board[xTArget][Ytarget] && board[xTArget][Ytarget].color == color) {
        //console.log("Target problem");
        return false;
    }
    return true;
}

function checkTheWay(xt, yt, xp, yp, board, type) {
    if (type == "horse") {
        return true;
    }
    let count = 0;
    while (true) {
        let Xdif = xt - xp; //2
        let Ydif = yt - yp; //-2

        xp += Xdif == 0 ? 0 : Xdif / Math.abs(Xdif); //1 //xp=4
        yp += Ydif == 0 ? 0 : Ydif / Math.abs(Ydif); //yp=4

        if (xt == xp && yt == yp) {
            return true;
        }

        if (board[xp][yp]) {
            //console.log("bumped in to peice");
            return false;
        }
        if (count > board.length) {
            //console.log("count pbl");
            return false;
        }
        count++;
    }
}

export { checkTarget, checkTheWay, checkBoundrys };
