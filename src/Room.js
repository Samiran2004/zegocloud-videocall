import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import styled from "styled-components";

function Room() {
    const { roomId } = useParams();
    const videoContainerRef = useRef(null);

    useEffect(() => {
        const appId = 1506791970;
        const serverSecret = "9b64224b2e9a099575e998495f402395";

        if (!roomId) {
            console.error("Error: Room ID is missing");
            return;
        }

        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId,
            serverSecret,
            roomId, // Corrected this parameter
            Date.now().toString(),
            "Samiran"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: videoContainerRef.current,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // Correct mode for 1-on-1 calls
            },
        });
    }, [roomId]);

    return (
        <RoomContainer>
            <Title>🔹 Room: {roomId}</Title>
            <VideoContainer ref={videoContainerRef} />
        </RoomContainer>
    );
}

export default Room;

// Styled Components
const RoomContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #1a2a6c,rgb(31, 134, 178), #fdbb2d);
    padding: 20px;
`;

const Title = styled.h1`
    color: white;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const VideoContainer = styled.div`
    width: 80%;
    height: 500px;
    background: black;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;