// import Charachters from "./charracters";
import  doubleArr  from "./doubleArr";
import img from "../png";


let board =  doubleArr();
inputCharacters();
inputPawns();


function boardColor() {
    return {
        white: 0,
        black: board.length - 1,
    };
}
const { black, white } = boardColor();

function inputCharacters() {
    const { black, white } = boardColor();
    board[white][0] = { color: "white", type: "rook", img: img.whiteRook };
    board[white][1] = { color: "white", type: "horse", img: img.whitehorse };
    board[white][2] = { color: "white", type: "bishup", img: img.whiteBishup };
    board[white][3] = { color: "white", type: "queen", img: img.whitequeen };
    board[white][4] = { color: "white", type: "king", img: img.whiteking };
    board[white][5] = { color: "white", type: "bishup", img: img.whiteBishup };
    board[white][6] = { color: "white", type: "horse", img: img.whitehorse };
    board[white][7] = { color: "white", type: "rook", img: img.whiteRook };
    board[black][0] = { color: "black", type: "rook", img: img.blackRook };
    board[black][1] = { color: "black", type: "horse", img: img.blackhorse };
    board[black][2] = { color: "black", type: "bishup", img: img.blackBishup };
    board[black][3] = { color: "black", type: "queen", img: img.blackqueen };
    board[black][4] = { color: "black", type: "king", img: img.blackking };
    board[black][5] = { color: "black", type: "bishup", img: img.blackBishup };
    board[black][6] = { color: "black", type: "horse", img: img.blackhorse };
    board[black][7] = { color: "black", type: "rook", img: img.blackRook };
}

function inputPawns() {
    const { black, white } = boardColor();
    for (let i = 0; i < board.length; i++) {
        board[Math.abs(white - 1)][i] = {
            color: "white",
            type: "pawn",
            img: img.whitepawn,
        };
        board[Math.abs(black - 1)][i] = {
            color: "black",
            type: "pawn",

            img: img.blackpawn,
        };
    }
}

export default board;

export { boardColor };

