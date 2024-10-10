import { ReactNode, useEffect, useState } from "react";

const ResizeDector: React.FC<{
  children: (width: number) => ReactNode;
}> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return (
    <div>
      <p>window width : {width}</p>
      {children(width)}
    </div>
  );
};

const RenderProps = () => {
  return (
    <div>
      <ResizeDector>
        {(width) => {
          console.log("rendering..");
          return width > 500 ? "hello" : "world";
        }}
      </ResizeDector>
    </div>
  );
};
export default RenderProps;

// Rendering 
