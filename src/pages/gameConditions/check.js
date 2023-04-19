import { checkTarget } from "./checkIfsideInWay";
import _ from "lodash";
import { Allcondintions } from "./allConditions";
// import board from "../createBoard";
function findKing(color, board) {
    //finds king of cuurent color
    // meaning if im moving returns my king;

    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
            if (
                board[x][y] &&
                board[x][y].color == color &&
                board[x][y].type == "king"
            ) {
                return { kingX: x, kingY: y };
            }
        }
    }
}

function checKing(color, board,otherColor) {
    // if im moving checks through
    // after move will  my king be in check;
    // returns true if its safe
    const { kingX, kingY } = findKing(color, board); //find king position
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board.length; y++) {
            if (!board[x][y] || (board[x][y] && board[x][y].color == color)) {
                //if x,y empty or my color meaning my king not threatened
                continue;
            }
            if (Allcondintions(x, y, kingX, kingY, board, otherColor,board[x][y].type)) {
                //if other color check if threatenig my king
                return true; // by checking other color cond as if im am other color
                //can i get to king
            }
        }
    }
    return false;
}
// 
function checkMate(color, board, otherColor) {
  
    let isMate;
    for (let Xpos = 0; Xpos < board.length; Xpos++) {
        for (let Ypos = 0; Ypos < board.length; Ypos++) {
            //0
            if (
                !board[Xpos][Ypos] ||
                (board[Xpos][Ypos] && board[Xpos][Ypos].color == color)
            ) {
                //if x ,y is not a peice or its
                //or its my color then no way to block check;

                continue;
            }
            isMate = boardTargets(board, Xpos, Ypos, color,otherColor); //else start looping
            if (!isMate) {
                return false;
            }
        }
    }
    return true;
}

function boardTargets(board, Xpos, Ypos, color,otherColor) {
    for (let Xtarg = 0; Xtarg < board.length; Xtarg++) {
        for (let Ytarg = 0; Ytarg < board.length; Ytarg++) {
            const deepCopy = _.cloneDeep(board); //
           
            if (
               Allcondintions(
                    Xpos,
                    Ypos,
                    Xtarg,
                    Ytarg,
                    board,
                    otherColor,
                    board[Xpos][Ypos].type

                )
            ) {
                deepCopy[Xtarg][Ytarg] = deepCopy[Xpos][Ypos];
                deepCopy[Xpos][Ypos] = null;
                if (!checKing(otherColor, deepCopy,color)) {
                    return false;
                }
            }
        }
    }
    return true;
}

export { checKing, checkMate };
