import AOS from "aos";
import { useEffect } from "react";
import TNGButton from "../../../../components/Button";
// import TNGButton from "../../../../components/Button";
import "./index.scss";

const TNGGuidGame = (props: { handleStartGame: () => void }) => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);
  }, []);

  return (
    <div className={`tng-complete-g`} data-aos="fade-up" data-aos-delay="200">
      <div className="tng-complete-g-wrap">
        <div className={`tng-complete-inner`}>
          <div className="tng-complete-body">
            <h2>LUẬT THI ĐẤU</h2>
            <ul>
              <li>
                Tổng thời gian thi đấu: <span>10 phút</span>
              </li>
              <li>
                Mỗi chiến binh cần vượt qua tối thiểu{" "}
                <span>12/15 thử thách</span>
              </li>
              <li>
                Vượt qua mỗi thử thách được cộng 10 điểm, không vượt qua trừ 10
                điểm
              </li>
              <li>
                Mỗi chiến binh có <span>01 quyền trợ giúp:</span> Lược bỏ 2 đáp
                án sai hoặc bỏ qua thử thách
              </li>
              <li>
                Đừng bỏ lỡ tính năng cược điểm với 01 trong các mức lựa chọn
                cược <span>20% - 50% - 100%</span> số điểm đang có
              </li>
              <li>
                Mỗi chiến binh được thi đấu 02 lần. Hệ thống ghi nhận kết quả
                cao hơn
              </li>
              <li>
                Lưu ý: Thời gian thi đấu <span>8:00 - 19:00 hàng ngày</span>
              </li>
            </ul>
          </div>
        </div>
        <TNGButton
          text="BẮT ĐẦU"
          className="tng-help-box-btn"
          onClick={props.handleStartGame}
        />
      </div>
    </div>
  );
};
export default TNGGuidGame;
