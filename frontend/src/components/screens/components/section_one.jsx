import "./styles.css";
import { sectionOneData } from "../../utils/section_data";
export const SectionOne = () => {
    return (
        <>
            <div className="section-1">
                <div className="section-1-container">
                    {sectionOneData.map((value) => {
                        return (<>
                            <div className="section-1-item">
                                <img src={`${value.image}`} alt="" />
                                <p>{value.name}</p>
                            </div>
                        </>)
                    })}
                </div>
            </div>
        </>
    );
};