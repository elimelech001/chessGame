
export default function queen(xPosition, yPosition, Xtarget, Ytarget) {
    let horizontel = (Xtarget === xPosition) ||( Ytarget === yPosition);
    let Xvirtical= Math.abs(Xtarget - xPosition)
    let Yvirtical= Math.abs(Ytarget - yPosition)
   
    if (horizontel||Xvirtical==Yvirtical) {
        return true;
    }
    //console.log("queen horiz or virtical");
    return false;
}
