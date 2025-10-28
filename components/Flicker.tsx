import React from "react";

import FlickeringGrid from "@/components/ui/flickering-grid";

const Flicker = () => {
  return (
    <div className="flex h-full w-full items-center justify-center max-h-screen bg-pink-300">
      <div className=" bg-background overflow-hidden border-none">
        <FlickeringGrid
          className="z-0 relative inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.3}
          height={800}
          width={800}
        />
      </div>
    </div>
  );
};

export default Flicker;
