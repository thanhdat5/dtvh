import AOS from "aos";
import { useEffect, useState } from "react";
import TNGButton from "../../../../components/Button";
import { useWindowSize } from "../../../../hooks/hooks";
import closeIcon from "../../../../assets/images/icons/close.svg";
import "./index.scss";
import { renderTitleTeamTNG } from "../SelectTeam";

interface TNGConfirmSelectTeamProps {
  onDismiss: () => void;
  onVerifySuccess: () => void;
  currentSelectTeam: number;
}
const TNGConfirmSelectTeam = ({
  onDismiss,
  onVerifySuccess,
  currentSelectTeam,
}: TNGConfirmSelectTeamProps) => {
  const [width, height] = useWindowSize();
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);
  }, []);

  useEffect(() => {
    setScale(1);
    if (width < 1440 || height < 1024) {
      const scaleX = width / 1440;
      const scaleY = height / 1024;
      setScale(scaleX < scaleY ? scaleX : scaleY);
    }
    if (width < 1199) {
      setScale(0.8);
    }
    if (width < 767) {
      setScale(0.6);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  return (
    <div className="tng-bet" data-aos="fade-up" data-aos-delay="200">
      <button className="tng-bet-close" onClick={onDismiss}>
        <img src={closeIcon} alt="" />
      </button>
      <div className="tng-bet-inner" style={{ transform: `scale(${scale})` }}>
        <h3>BẠN CÓ CHẮC CHẮN MÌNH THUỘC LIÊN QUÂN:</h3>
        <h3>{renderTitleTeamTNG(currentSelectTeam)}</h3>

        <TNGButton
          text="CHẮC CHẮN RỒI"
          className="rectangle"
          onClick={() => onVerifySuccess()}
        />
      </div>
    </div>
  );
};
export default TNGConfirmSelectTeam;
