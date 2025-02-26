import { Html } from '@react-three/drei';
import '/src/assets/css/ClickableCircle.scss';

interface ClickableCircleProps {
  position: [number, number, number];
  onClick?: () => void;
  isDragging: boolean;
  circleWhiteRef: React.RefObject<HTMLDivElement | null>;
}

function ClickableCircle({ position, isDragging, onClick, circleWhiteRef }: ClickableCircleProps) {

    return (
        <Html position={position} center transform sprite>
          <div
             onClick={onClick}
             ref={circleWhiteRef}
            className={`clickable-circle ${isDragging ? "dragging" : ""}`}
          />
        </Html>
      );
}

export default  ClickableCircle;
