import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [roomId, setRoomId] = useState();
    const navigate = useNavigate();
    const handleJoin = () => {
        navigate(`/room/${roomId}`)
    }
    return (
        <div>
            <input placeholder="Enter Your Room Id: " type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)}></input>
            <button onClick={handleJoin}>Join</button>
        </div>
    )
}

export default Home;