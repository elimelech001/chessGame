
export default function rook(xPosition, yPosition, Xtarget, Ytarget) {
    let checkRook = Ytarget === yPosition || Xtarget === xPosition;

    if (checkRook) {
        return true;
    }
    //console.log("horizontel problem");
    return false;
}
