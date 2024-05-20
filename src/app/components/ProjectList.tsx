import React, {
  MutableRefObject,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import useProjectsDistance from "../hooks/projectsDistance";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useRevealShowreelBottom from "../hooks/revealShowreelBottom";

type ProjectListProps = {
  props: "";
  ref: MutableRefObject<HTMLElement>;
};

interface Props {
  children: ReactNode;
  // handleScroll: () => void;
}

// export type Ref = MutableRefObject<null | HTMLDivElement>;

const ProjectList = React.forwardRef<HTMLDivElement | null, Props>((props) => {
  const ref = useRef<HTMLDivElement>(null);

  const setProjectsDistance = useProjectsDistance(
    (state: any) => state.setProjectsDistance
  );

  const { projectsDistance }: any = useProjectsDistance();

  const { logoRevealDistance }: any = useLogoRevealDistance();

  const { revealShowreelBottom }: any = useRevealShowreelBottom();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
    setProjectsDistance(top?.top);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (ref.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);
  // console.log("projectDistance", projectsDistance);
  // console.log("logo Reveal", logoRevealDistance);
  // console.log("showreel bottom", revealShowreelBottom);
  return (
    <>
      <div
        className={` 
                 ${
                   projectsDistance <= 0 && logoRevealDistance > 0
                     ? "sticky top-0"
                     : ""
                 }
                 overflow-y-auto 
                 w-screen h-screen  
                 overflow-x-hidden z-0 no-scrollbar bg-black`}
        ref={ref}
        // onScroll={props.handleScroll}
      >
        <p className="mt-[10vh] ml-[5vw] font-averta text-5xl text-white">
          Projects
        </p>
        {props.children}
      </div>
    </>
  );
});
export default ProjectList;
