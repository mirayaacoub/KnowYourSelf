import { useEffect, useRef, useState, RefObject } from "react";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Peer from "simple-peer";
import io, { Socket } from "socket.io-client";

// Add global definition for browser compatibility
if (typeof global === "undefined") {
  (window as any).global = window;
}

const socket: Socket = io("http://localhost:3001"); // Connect to backend on port 3001

interface SignalData {
  signal: any;
  from: string;
  name: string;
}

function VideoCallPage() {
  const [me, setMe] = useState<string>("");
  const [stream, setStream] = useState<MediaStream | undefined>(undefined);
  const [receivingCall, setReceivingCall] = useState<boolean>(false);
  const [caller, setCaller] = useState<string>("");
  const [callerSignal, setCallerSignal] = useState<any>(null);
  const [callAccepted, setCallAccepted] = useState<boolean>(false);
  const [idToCall, setIdToCall] = useState<string>("");
  const [callEnded, setCallEnded] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const myVideo: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);
  const userVideo: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);
  const connectionRef = useRef<Peer.Instance | null>(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (myVideo.current) {
          (myVideo.current as HTMLVideoElement).srcObject = stream;
        }
      });

    socket.on("me", (id: string) => {
      setMe(id);
    });

    socket.on("callUser", (data: SignalData) => {
      setReceivingCall(true);
      setCaller(data.from);
      setName(data.name);
      setCallerSignal(data.signal);
    });
  }, []);

  const callUser = (id: string) => {
    console.log("Stream:", stream);
    console.log("Peer:", Peer);

    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    console.log("Stream:", stream);
    console.log("Peer:", Peer);

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: name,
      });
    });

    peer.on("stream", (stream) => {
      if (userVideo.current) {
        (userVideo.current as HTMLVideoElement).srcObject = stream;
      }
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      if (userVideo.current) {
        (userVideo.current as HTMLVideoElement).srcObject = stream;
      }
    });

    if (callerSignal) {
      peer.signal(callerSignal);
    }

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    if (connectionRef.current) {
      connectionRef.current.destroy();
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#fff" }}>Zoomish</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: "300px" }}
              />
            )}
          </div>
          <div className="video">
            {callAccepted && !callEnded ? (
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: "300px" }}
              />
            ) : null}
          </div>
        </div>
        <div className="myId">
          <TextField
            id="filled-basic"
            label="Name"
            variant="filled"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "20px" }}
          />
          <div className="mb-2">
            <CopyToClipboard text={me}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AssignmentIcon fontSize="large" />}
              >
                Copy ID
              </Button>
            </CopyToClipboard>
          </div>

          <TextField
            id="filled-basic"
            label="ID to call"
            variant="filled"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <Button variant="contained" color="secondary" onClick={leaveCall}>
                End Call
              </Button>
            ) : (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  aria-label="call"
                  onClick={() => callUser(idToCall)}
                  startIcon={<PhoneIcon fontSize="large" />}
                >
                  Call
                </Button>
              </div>
            )}
            {idToCall}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <Button variant="contained" color="primary" onClick={answerCall}>
                Answer
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default VideoCallPage;
