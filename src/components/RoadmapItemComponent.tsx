import { StyledRoadmapItem } from "../styles/Roadmap_Item.styled";

export interface roadmapItemProps {
    roadmapItems: RoadmapItem[];
}

export interface RoadmapItem {
    title: string;
    tasks: Map<string, boolean>;
}

export default function RoadmapItemComponent(props: roadmapItemProps) {
    return (
        <div>
            {props.roadmapItems.map((item, index) => {
                return <StyledRoadmapItem key={index} className="roadmap-item">
                    <div className="roadmap-circleBoxContainer">
                        <div className="roadmap-circleBox"><span></span></div>
                        <div className="roadmap-circleLine"><span></span></div>
                    </div>
                    <div className="roadmap-detail">
                        <h5>{item.title}</h5>
                        {Items(item.tasks)}
                    </div>
                </StyledRoadmapItem>
            })}
        </div>

    );
}

export function Items(tasks: Map<string, boolean>) {
    let itemsListHtml: any[] = [];
    tasks.forEach((status: boolean, taskItem: string) => {
        itemsListHtml.push(
            <li key={taskItem}> 
                {taskItem} 
                {DoneIcon(status)}
            </li>)
    });
    return (
        <ul>{itemsListHtml}</ul>
    );
}

export function DoneIcon(props: any) {
    if (props) {
        return <span className="taskItem_status">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </span>
    } else {
        return <span></span>
    }
}