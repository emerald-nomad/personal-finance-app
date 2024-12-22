import { Button } from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div 
      style={{ 
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem"
      }}
    >
      <Button>Placeholder</Button>
      <Button color="secondary">Placeholder</Button>
      <Button color="destroy">Placeholder</Button>
      <Button color="tertiary">Placeholder</Button>
    </div>
  );
}
