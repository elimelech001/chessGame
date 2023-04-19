export default function doubleArr() {
    let board=[]
    let boardLength = 8;
    for (let i = 0; i < boardLength; i++) {
        board[i] = [];
        for (let j = 0; j < boardLength; j++) {
            board[i][j] = false;
        }
    }
    return board;
}
