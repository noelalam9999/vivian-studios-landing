import React, { MutableRefObject, ReactNode, useEffect, useRef } from "react";
import useProjectsDistance from "../hooks/projectsDistance";
import useLogoRevealDistance from "../hooks/logoRevealDistance";

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
  const portfolioRef = useRef<HTMLDivElement>(null);

  const setProjectsDistance = useProjectsDistance(
    (state: any) => state.setProjectsDistance
  );

  const { distance }: any = useProjectsDistance();

  const { logoRevealDistance }: any = useLogoRevealDistance();

  function handleScroll() {
    const top = portfolioRef?.current?.getBoundingClientRect();
    setProjectsDistance(top?.top);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
        } else {
          window.removeEventListener("scroll", handleScroll, true);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    if (portfolioRef.current) {
      observer.observe(portfolioRef?.current);
    }
    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef?.current);
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);
  console.log(logoRevealDistance);

  return (
    <div
      className={` 
                 ${
                   distance <= 0 && logoRevealDistance > 0 ? "sticky top-0" : ""
                 }
                 overflow-y-auto 
                 w-screen h-screen  
                 overflow-x-hidden z-0 no-scrollbar bg-black`}
      ref={portfolioRef}
      // onScroll={props.handleScroll}
    >
      <p className="mt-[10vh] ml-[5vw] font-averta text-5xl text-white">
        Projects
      </p>
      {props.children}
    </div>
  );
});
export default ProjectList;
