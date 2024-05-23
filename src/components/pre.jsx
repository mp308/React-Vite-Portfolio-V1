import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const panelRefs = useRef([]);

  useLayoutEffect(() => {
    const panels = panelRefs.current;
    const totalPanels = panels.length;
    const horizontalScrollLength = panels[0].offsetWidth * totalPanels;

    gsap.to(panels, {
      xPercent: -100 * (totalPanels - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () => `+=${horizontalScrollLength}`,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <div className="flex w-max">
        <section
          ref={(el) => (panelRefs.current[0] = el)}
          className="flex-shrink-0 w-1/3 h-screen flex flex-col justify-center items-start px-[10vw] py-[20vw] bg-white"
        >
          <span className="text-xl">Prathomsuksa</span>
          <h1 className="text-3xl font-bold">Bangkok Christian College</h1>
          <div className="col flex flex-col gap-3">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.
            </p>
          </div>
        </section>

        <section
          ref={(el) => (panelRefs.current[1] = el)}
          className="flex-shrink-0 w-1/3 h-screen flex flex-col justify-center items-start px-[10vw] py-[20vw] bg-gray-100"
        >
          <span className="text-xl anim">Advanced2</span>
          <h1 className="text-3xl font-bold anim">Signify Elegance</h1>
          <div className="col anim flex flex-col gap-3">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.
            </p>
          </div>
        </section>

        <section
          ref={(el) => (panelRefs.current[2] = el)}
          className="flex-shrink-0 w-1/3 h-screen flex flex-col justify-center items-start px-[10vw] py-[20vw] bg-white"
        >
          <span className="text-xl anim">Advanced3</span>
          <h1 className="text-3xl font-bold anim">Signify Elegance</h1>
          <div className="col anim flex flex-col gap-3">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.
            </p>
          </div>
        </section>

        <section
          ref={(el) => (panelRefs.current[3] = el)}
          className="flex-shrink-0 w-1/3 h-screen flex flex-col justify-center items-start px-[10vw] py-[20vw] bg-white"
        >
          <span className="text-xl anim">Advanced3</span>
          <h1 className="text-3xl font-bold anim">Signify Elegance</h1>
          <div className="col anim flex flex-col gap-3">
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur. Egestas euismod nec sit sed massa turpis in. Sit praesent arcu leo lectus pellentesque. Ornare elit orci morbi volutpat. Ut fermentum lorem morbi quis risus amet urna. Urna egestas lorem.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HorizontalScroll;
