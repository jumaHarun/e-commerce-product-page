import { useState } from "react";

const LightBox = () => {
    const [currPic, setCurrPic] = useState(1)

const nextPhoto = () => {
    if (pic === 4) {
        setPic(1);
    } else {
        setPic(pic + 1);
    }
};

const prevPhoto = () => {
    if (pic === 1) {
        setPic(4);
    } else {
        setPic(pic - 1);
    }
};

    return <div>LightBox</div>;
};
export default LightBox;
