
export default function bishup(xPosition, yPosition, Xtarget, Ytarget) {
    let Xdiff= Math.abs(Xtarget - xPosition)
    let Ydiff= Math.abs(Ytarget - yPosition)
   
    if (Xdiff==Ydiff) {
        return true;
    }
    // //console.log("vertical problem");
    return false;
}
