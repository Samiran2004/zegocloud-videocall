import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

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
        <div>
            <h1>Room {roomId}</h1>
            <div ref={videoContainerRef} style={{ width: "100%", height: "500px" }} />
        </div>
    );
}

export default Room;