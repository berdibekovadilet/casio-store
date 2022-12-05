import { getTouchEventData } from "helpers/dom";
import { getRefValue, useStateRef } from "helpers/hooks";
import { useRef, useState } from "react";
import styles from "./SwipeImages.module.scss";

const MIN_SWIPE_REQUIRED = 40;

const SwipeImages = ({ item }: any) => {
  const containerRef = useRef<HTMLUListElement>(null);
  const containerWidthRef = useRef(0);
  const minOffsetXRef = useRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;
    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);

    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    const currentOffsetX = getRefValue(currentOffsetXRef);
    const containerWidth = getRefValue(containerWidthRef);
    let newOffsetX = getRefValue(offsetXRef);

    const diff = currentOffsetX - newOffsetX;

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
    }

    setIsSwiping(false);
    setOffsetX(newOffsetX);
    setCurrentIdx(Math.abs(newOffsetX / containerWidth));

    window.removeEventListener("touchend", onTouchEnd);
    window.removeEventListener("touchmove", onTouchMove);
    window.removeEventListener("mouseup", onTouchEnd);
    window.removeEventListener("mousemove", onTouchMove);
  };

  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    setIsSwiping(true);

    currentOffsetXRef.current = getRefValue(offsetXRef);
    startXRef.current = getTouchEventData(e).clientX;

    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    containerWidthRef.current = containerWidth;
    minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onTouchMove);
    window.addEventListener("mouseup", onTouchEnd);
  };
  const indicatorOnClick = (idx: number) => {
    const containerEl = getRefValue(containerRef);
    const containerWidth = containerEl.offsetWidth;

    setCurrentIdx(idx);
    setOffsetX(-(containerWidth * idx));
  };
  return (
    <div className={styles.imageWrapper}>
      <ul className={styles.indicator}>
        {item.images.map((image: string, idx: number) => (
          <li
            key={idx}
            className={`${styles.indicatorItem} ${
              currentIdx === idx ? styles.active : ""
            }`}
            onClick={() => indicatorOnClick(idx)}
            data-testid="indicator"
          >
            <img
              src={require(`assets/${image}`)}
              alt="banner"
              loading="lazy"
              className={styles.swiperImg}
              draggable={false}
            />
          </li>
        ))}
      </ul>
      <div
        className={styles.container}
        onTouchStart={onTouchStart}
        onMouseDown={onTouchStart}
      >
        <ul
          ref={containerRef}
          className={`${styles.list} ${isSwiping ? styles.isSwiping : ""}`}
          style={{ transform: `translate3d(${offsetX}px, 0, 0)` }}
        >
          {item.images.map((image: string, idx: number) => (
            <li className={styles.swiperItem} key={idx}>
              <img
                src={require(`assets/${image}`)}
                alt="banner"
                className={styles.swiperImg}
                draggable={false}
              />
            </li>
          ))}
        </ul>
        <ul className={styles.indicatorDots}>
          {item.images.map((_item: number, idx: number) => (
            <li
              key={idx}
              className={`${styles.indicatorItem} ${
                currentIdx === idx ? styles.active : ""
              }`}
              onClick={() => indicatorOnClick(idx)}
              data-testid="indicator"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SwipeImages;
