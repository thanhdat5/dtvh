import AOS from "aos";
import { useEffect, useState } from "react";
import TNGButton from "../../../../components/Button";
import { useWindowSize } from "../../../../hooks/hooks";
import closeIcon from "../../../../assets/images/icons/close.svg";
import "./index.scss";

interface TNGBetProps {
  onDismiss: () => void;
  onBetConfirm: (bet: number) => void;
  yourBet: number;
  disableBet: boolean;
  point: number;
}
const TNGBet = ({
  onDismiss,
  onBetConfirm,
  yourBet,
  disableBet,
  point,
}: TNGBetProps) => {
  const [width, height] = useWindowSize();
  const [scale, setScale] = useState(1);
  const [bet, setBet] = useState(0);

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
        <h3>Bạn có muốn cược điểm?</h3>
        <div className="tng-bet-options">
          <TNGButton
            text="20%"
            className={`${bet === 20 ? "active" : "outline"} tng-btn-bet`}
            onClick={() => setBet(20)}
          />
          <TNGButton
            text="50%"
            className={`${bet === 50 ? "active" : "outline"} tng-btn-bet`}
            onClick={() => setBet(50)}
          />
          <TNGButton
            text="100%"
            className={`${bet === 100 ? "active" : "outline"} tng-btn-bet`}
            onClick={() => setBet(100)}
          />
        </div>
        <TNGButton
          disabled={!bet}
          text="Chọn"
          className="rectangle"
          onClick={() => onBetConfirm(bet)}
        />
      </div>
    </div>
  );
};
export default TNGBet;
