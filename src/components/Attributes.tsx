import { AppConstants } from "../common/AppConstants";
import { StyledAttributes } from "../styles/Attributes.styled";

export interface Attribute {
    name: string;
    imageUrl: string;
    altText: string;
}

export default function Attributes() {
    return (
        <StyledAttributes id="attributes" className="attribute-container">
            <div className="attribute-header">
                <h1>Attributes</h1>
                <hr className="horizontal-line"/>
            </div>
            <div className="attribute-item">
                {
                    AppConstants.ATTRIBUTES.map((item:Attribute , index: number) => {
                        return (
                            <div className="attribute-content" key={index}>
                                <img src={item.imageUrl} alt={item.altText} />
                                <h6>{item.name}</h6>
                            </div>
                        )
                    })
                }
            </div>
            <br/>
        </StyledAttributes>
    )
}