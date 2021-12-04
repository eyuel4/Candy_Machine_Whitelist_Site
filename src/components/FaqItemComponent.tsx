import { useState } from "react";
import { StyledFaqItem } from "../styles/FaqItem.styled";
import { FaqItem } from "./Faq";

export interface FaqItemProp {
    faqItem: FaqItem;
} 

export default function FaqItemComponent(props: FaqItemProp) {
    let faqItem= props.faqItem;
    const [showDropDown, setShowDropDown] = useState(false);
    
    const toggleClass = () => {
        setShowDropDown(!showDropDown);
    };
    return(
        <StyledFaqItem className="item">
            <div className="head">
                <div className="title">
                    <span><p>{faqItem.title}</p></span>
                    <a onClick={toggleClass} href="/#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="brown"></path></svg>
                    </a>
                </div>
                <div className={showDropDown ? "content drop_down_expanded": "content"}>
                    <p>{faqItem.answer}</p>
                </div>

            </div>
            <br/>
        </StyledFaqItem>
    );
}