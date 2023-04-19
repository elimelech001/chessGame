import React, { useEffect } from "react";

export default function BuildBoard({ moveCharac, getStyle, board }) {

    return (
        <>
           
            <div
                style={{
                    border: "15px groove silver",
                    height: 700,
                    width: 800,
                }}
                className="container-lg"
            >
                {board.map((x, xIndex) => {
                    return (
                        <div
                            className="row"
                            style={{ border: "1px solid black" }}
                        >
                            {x &&
                                x.map((y, yIndex) => {
                                    const even = (xIndex + yIndex) % 2 == 0;
                                    return (
                                        <div
                                            style={{
                                                width: 74,
                                                height: 82,
                                                backgroundColor: even
                                                    ? "#001a33"
                                                    : "lightGrey",
                                            }}
                                            className="col d-flex align-items-stretch"
                                            key={xIndex + yIndex}
                                            onClick={(e) =>
                                                moveCharac(x, y, xIndex, yIndex)
                                            }
                                        >
                                            {y && (
                                                <img
                                                    style={{
                                                        ...getStyle(
                                                            y,
                                                            xIndex,
                                                            yIndex
                                                        ),
                                                    }}
                                                    src={y.img}
                                                    alt=""
                                                    width={70}
                                                    height={70}
                                                />
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
