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

const NonStickyProjectList = React.forwardRef<HTMLDivElement | null, Props>(
  (props) => {
    return (
      <>
        <div
          className={` 
             
                 overflow-y-auto 
                 w-screen h-screen  
                 overflow-x-hidden z-10 no-scrollbar bg-black`}

          // onScroll={props.handleScroll}
        >
          <p className="mt-[10vh] ml-[5vw] font-averta text-5xl text-white">
            Projects
          </p>
          {props.children}
        </div>
      </>
    );
  }
);
export default NonStickyProjectList;
