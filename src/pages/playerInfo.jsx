import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; import React from "react"
// import { getAuth } from "firebase/auth";

const PlayerInfo = ({ playerInfo }) => {
    const { name, points, moves, color } = playerInfo
    return (
       
<div>
            <Card sx={{ maxWidth: 150 }}>
                <CardContent >
                    <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name:   {name}
                    </Typography>


                    <Typography variant="body2">
                        color: {color}

                    </Typography>
                    <Typography variant="body2">
                        moves: {moves}

                    </Typography>
                    <Typography variant="body2">
                        point: {points}

                    </Typography>
                </CardContent>
                <CardActions style={{textAlign:"center"}}>
                    <Button  size="small">Learn More</Button>
                </CardActions>
            </Card>
            </div>
    )
};

export default PlayerInfo;
