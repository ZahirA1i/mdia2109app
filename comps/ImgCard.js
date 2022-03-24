
import styled from "styled-components";

const RedCont = styled.div`
background-color:${props=>props.cl};
color:${props=>props.text_cl};
`;

const UpperCont = styled.div`
text-transform: uppercase;
`;

export default function ImgCard({
    img="/dog.jpeg",
    text="this is a dog",
    bg="red",
    tcl="#FFF",
    children=null
}){

    return <RedCont cl={bg} text_cl={tcl}>
<img src={img} />
<UpperCont>{text}</UpperCont>
{children}
    </RedCont>
}