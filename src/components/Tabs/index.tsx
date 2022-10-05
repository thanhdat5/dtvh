import { useState } from "react";
import "./index.scss";

interface TNGTabsProps {
    tabs: any[]
    activeIndex: number
    onChange: (newIndex: number) => void
}
const TNGTabs = ({ tabs, activeIndex = 0, onChange }: TNGTabsProps) => {
    const [activeTab, setActiveTab] = useState(activeIndex);

    const handleSelectedChange = (newIndex: number) => {
        setActiveTab(newIndex);
        onChange(newIndex);
    }
    return <div className="tng-tabs">
        <div className="tng-tabs-inner">
            <span className="placeholder" style={{width: `${100 / tabs.length}%`, left: `${(activeTab * 100 / tabs.length)}%` }}></span>
            {
                tabs.map((tab, idx: number) => (
                    <button key={idx} type="button" className={`tng-tab ${activeTab === idx ? 'selected' : ''}`} onClick={() => handleSelectedChange(idx)}>
                        {tab}
                    </button>
                ))
            }
        </div>
    </div>
}
export default TNGTabs