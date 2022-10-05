import React from "react";
import "./index.scss";

interface loadingPageProps {
  loading: boolean;
}

const LoadingPage: React.FC<loadingPageProps> = ({ loading }) => {
  return (
    <div>
      <div className={`${loading ? "wrapper-loading" : ""}`}>
        {loading ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LoadingPage;
