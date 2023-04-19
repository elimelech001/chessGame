export default function deepCopy(copyBoard, board) {
    for (let i = 0; i < board; i++) {
        if (!copyBoard[i]) {
        copyBoard[i]=[]
        }
        for (let j = 0; j < board; j++) {
            if (board[i][j]) {
                copyBoard[i][j] = board[i][j];
            } else {
                copyBoard[i][j] = null;
            }
        }
    }
}
