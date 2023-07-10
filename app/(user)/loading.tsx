//import icons
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader2
        size={50}
        stroke="white"
        rotate={0}
        style={{ rotate: "360deg" }}
      />
    </div>
  );
}
