import React, { MutableRefObject, ReactNode } from "react";
import { portfolioList } from "../utils/portfolioList";

interface Props {
  children: ReactNode;
  // handleScroll: () => void;
}

const NonStickyProjectList = React.forwardRef<HTMLDivElement | null, Props>(
  (props, _) => {
    return (
      <>
        <div
          style={{
            backgroundColor:
              portfolioList[portfolioList.length - 1]?.backgroundColor,
          }}
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

NonStickyProjectList.displayName = "Non Sticky Project List";
export default NonStickyProjectList;
