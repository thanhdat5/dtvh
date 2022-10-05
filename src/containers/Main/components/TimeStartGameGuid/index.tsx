import AOS from "aos";
import { useEffect } from "react";
import "./index.scss";

const TimeStartGameGuid = () => {
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 100);
  }, []);

  const hour =
    new Date().getHours() > 10
      ? new Date().getHours()
      : "0" + new Date().getHours();
  const min =
    new Date().getMinutes() > 10
      ? new Date().getMinutes()
      : "0" + new Date().getMinutes();

  return (
    <div className={`tng-complete-b`} data-aos="fade-up" data-aos-delay="200">
      <div className="tng-complete-wrap">
        <div className={`tng-complete-inner`}>
          <div className="tng-complete-body">
            <div className="box-content">
              <h2>
                Bây giờ là {hour}:{min}
              </h2>
              <p>
                Thời gian bắt đầu cuộc thi từ <span>08:00 - 17:00</span>
              </p>
              <p>Vui lòng quay lại sau</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimeStartGameGuid;
