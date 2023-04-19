export default function king(xPosition, yPosition, Xtarget, Ytarget) {
    let kingMove = 1;

    let Xcheck = Math.abs(Xtarget - xPosition) <= kingMove;
    let Ycheck = Math.abs(Ytarget - yPosition) <= kingMove;

    if (Xcheck&&Ycheck) {
        return true;
    }
    //console.log("king problem");
    return false;
}
