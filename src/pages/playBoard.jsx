// import BuildBoard from "./createBoard";

import React, { useEffect, useState } from "react";
import { checKing, checkMate, id } from "./conditions/check";
import _ from "lodash";
import { Allcondintions } from "./conditions/allConditions";
import toggleColor from "./helpFunctions/toggleColor";
import BuildBoard from "./buildBoard";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get, update, onValue } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import PlayerInfo from "./playerInfo";
// import { onUpdate } from "firebase-functions/v1/remoteConfig";


function PlayBoard() {
    const navigate = useNavigate()
    const { link } = useParams()
    const auth = getAuth();
    const [board, setBoard] = useState();
    const [playerInfo, setPlayerInfo] = useState({});
    const [pos, setXpos] = useState(null);
    const [color, setColor] = useState();
    const [cliked, setClicked] = useState();
    const dbRef = ref(getDatabase());
    useEffect(() => {
        if (!auth.currentUser) {
            // navigate('/signInWithGoogle')
        }
        onValue(child(dbRef, `Games/${link}`)).then((snapshot) => {
            if (snapshot.exists()) {
                setPlayerInfo(snapshot.val().players)
                setBoard(snapshot.val().board);
                setColor(snapshot.val().turn);
            } else {
                // navigate('/pickGame')
            }
        }).catch((error) => {
            console.error(error);
            // navigate('/pickGame')
        });
        console.log(playerInfo);
    },[])
    const getStyle = (y, xIndex, yIndex) => {
        const turn = y && y.color === color;
        return { boxShadow: turn ? "0px 0px 5px #fff" : "0 0 0 0" };
    };

    function checkMove(x, y, xIndex, yIndex) {
        return Allcondintions(
            pos.xIndex,
            pos.yIndex,
            xIndex,
            yIndex,
            board,
            color,
            pos.y.type
        );
    }

    function moveCharac(x, charac, xIndex, yIndex) {
        setClicked("")
        const copyBoard = _.cloneDeep(board);
        const myTurn = playerInfo[auth.currentUser.uid].color == color;
        if (!pos) {
            charac && charac.color === color && myTurn && setXpos({ x, y: charac, xIndex, yIndex });
            // myTurn && setXpos({ x, y, xIndex, yIndex });
            return;
        } else {
            if (checkMove(x, charac, xIndex, yIndex)) {
                copyBoard[xIndex][yIndex] = copyBoard[pos.xIndex][pos.yIndex];
                copyBoard[pos.xIndex][pos.yIndex] = false;
                if (checKing(color, copyBoard, toggleColor(color))) {
                    setXpos(null);
                    return;
                }
                if (checKing(toggleColor(), copyBoard, color)) {
                    console.log("check");
                    if (checkMate(color, copyBoard, toggleColor(color))) {
                        console.log("game over");
                    }
                }
               
                const dbRef = ref(getDatabase());
                const updates = {};
                updates[`Games/${link}/board`] = copyBoard
                updates[`Games/${link}/turn`] = toggleColor(color)
                updates[`Games/${link}/players/${auth.currentUser.uid}/moves`] = playerInfo[auth.currentUser.uid].moves + 1
                update(dbRef, updates);

            }
            setXpos(null);
        }
    }

    return (

        <div className="d-inline-flex align-item-center " >
            {Object.values(playerInfo).map((e, index) =>
                <>
                    <div>
                        < PlayerInfo
                            playerInfo={e}
                        />
                    </div>
                    {
                        index == 0 &&
                        <div>
                            <BuildBoard
                                moveCharac={moveCharac}
                                getStyle={getStyle}
                                board={board}
                            />
                        </div>
                    }
                </>
            )}
        </div>
    );
}

export default PlayBoard;
