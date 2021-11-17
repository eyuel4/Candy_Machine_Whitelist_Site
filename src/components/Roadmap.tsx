import { AppConstants } from "../common/AppConstants";
import { StyledRoadmap } from "../styles/Roadmap.styled";
import RoadmapItem from "./RoadmapItemComponent";

export default function Roadmap() {
    return (
        <>
            <StyledRoadmap className="roadmap">
                <div className="roadmap-header">
                    <h2>Roadmap</h2>
                    <hr className="horizontal-line"/>
                </div>
                <br/>
                <RoadmapItem roadmapItems={AppConstants.ROADMAP_ITEMS}></RoadmapItem>
                <br/>
                <br/>
            </StyledRoadmap>
        </>
    );
}