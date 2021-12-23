import { StyledFaq } from "../styles/Faq.styled";
import FaqItemComponent from "./FaqItemComponent";

export interface FaqItem {
    title: string;
    answer: string;
} 

export interface FaqProps {
    faqItems: FaqItem[];
}

export default function FaqComponent(props: FaqProps) {
    return (
        <>
            <StyledFaq id="faqs" className="Faq-container">
                <div className="faq-header">
                    <h1>FAQ</h1>
                    <hr className="horizontal-line"/>
                </div>
                {
                    getFaqItems2(props.faqItems)
                }
                <br/>
                <br/>
            </StyledFaq>
        </>
    );
}

export function getFaqItems2(faqItems: FaqItem[]) {

    return faqItems.map((item, index) => {
        return <FaqItemComponent key={index} faqItem={item}/>
    });
}
