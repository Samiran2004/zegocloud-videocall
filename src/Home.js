import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, TextField, Container, Typography } from "@mui/material";

function Home() {
    const [roomId, setRoomId] = useState("");
    const navigate = useNavigate();

    const handleJoin = () => {
        if (roomId.trim() !== "") {
            navigate(`/room/${roomId}`);
        }
    };

    return (
        <StyledContainer>
            <Content>
                <Typography variant="h4" gutterBottom>
                    🎥 Join a Video Call
                </Typography>
                <TextField
                    label="Enter Room ID"
                    variant="outlined"
                    fullWidth
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                />
                <StyledButton 
                    variant="contained" 
                    color="primary" 
                    onClick={handleJoin} 
                    disabled={!roomId.trim()}
                >
                    Join Room
                </StyledButton>
            </Content>
        </StyledContainer>
    );
}

export default Home;

// Styled Components
const StyledContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #1a2a6c,rgb(31, 166, 178), #fdbb2d);
`;

const Content = styled.div`
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 100%;
    max-width: 400px;
`;

const StyledButton = styled(Button)`
    margin-top: 15px !important;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
`;