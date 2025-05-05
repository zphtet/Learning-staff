"use client";

import { useState } from "react";
import { ShowSession } from "./show-session";
import { Button } from "./ui/button";
import ValidToken from "./valid-token";
const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
      {/* {isOpen && <ShowSession />}
       */}

      {isOpen && <ValidToken />}
    </div>
  );
};

export default Toggle;
