import { useCallback, useRef } from "react";

function useStickyHeader(
  offsetY: number = 0,
  classNames: {
    headerAttached: string;
    headerDetached: string;
    headerSticky: string;
    headerUnsticky: string;
  } = {
    headerAttached: "header--attached",
    headerDetached: "header--detached",
    headerSticky: "header--sticky",
    headerUnsticky: "header--unsticky",
  }
) {
  const ref = useRef<HTMLElement | null>(null);
  const currentScrollPosition = useRef<number>(0);
  const headerHeight = useRef<number>(0);
  const previousScrollPosition = useRef<number>(0);
  const SCROLL_THRESHOLD = useRef<number>(0);

  const handleScroll = (
    headerEl: HTMLElement,
    headerHeight: number,
    THRESHOLD: number
  ): void => {
    const headerClasslist = headerEl.classList;
    const windowYOffset = window.pageYOffset;

    if (
      windowYOffset >= THRESHOLD &&
      !headerClasslist.contains(classNames.headerDetached)
    ) {
      requestAnimationFrame(() => {
        headerClasslist.remove(classNames.headerAttached);
        headerClasslist.add(classNames.headerDetached);
      });
    } else if (
      windowYOffset < previousScrollPosition.current &&
      windowYOffset <= THRESHOLD - headerHeight
    ) {
      headerClasslist.remove(classNames.headerDetached);
      headerClasslist.remove(classNames.headerSticky);
      headerClasslist.add(classNames.headerAttached);
    } else if (
      windowYOffset < previousScrollPosition.current &&
      windowYOffset > THRESHOLD
    ) {
      requestAnimationFrame(() => {
        headerClasslist.remove(classNames.headerUnsticky);
        headerClasslist.add(classNames.headerSticky);
        headerClasslist.add(classNames.headerDetached);
      });
    } else if (
      windowYOffset > previousScrollPosition.current &&
      headerClasslist.contains(classNames.headerSticky)
    ) {
      headerClasslist.add(classNames.headerUnsticky);
      headerClasslist.remove(classNames.headerSticky);
    }
    previousScrollPosition.current = window.pageYOffset;
  };

  const setHeaderRef = useCallback((headerEl: HTMLElement) => {
    if (ref.current) {
      window.removeEventListener(
        "scroll",
        handleScroll.bind(null, headerEl, headerHeight.current, SCROLL_THRESHOLD.current),       
        false
      );
    }

    if (headerEl) {
      headerHeight.current = headerEl.offsetHeight;
      currentScrollPosition.current = window.pageYOffset;
      SCROLL_THRESHOLD.current = headerHeight.current + offsetY;
      if (window.pageYOffset > SCROLL_THRESHOLD.current) {
        headerEl.classList.remove(classNames.headerAttached);
        headerEl.classList.add(classNames.headerDetached);
      } else {
        headerEl.classList.add(classNames.headerAttached);
        headerEl.classList.remove(classNames.headerDetached);
      }
      window.addEventListener(
        "scroll",
        handleScroll.bind(null, headerEl, headerHeight.current, SCROLL_THRESHOLD.current), false
      );
    }
    ref.current = headerEl;
  }, []);

  return [setHeaderRef];
}

export default useStickyHeader