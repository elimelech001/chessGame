export default function horse(xPosition, yPosition, Xtarget, Ytarget) {
    let checkHoarseX =
        Math.abs(xPosition - Xtarget) === 2 &&
        Math.abs(yPosition - Ytarget) === 1;
    let checkHoarseY =
        Math.abs(xPosition - Xtarget) === 1 &&
        Math.abs(yPosition - Ytarget) === 2;
    if (checkHoarseX || checkHoarseY) {
        return true;
    }
    //console.log("horse problem");
    return false;
}
