import { useState } from 'react';

import { LightBoxThumbnails } from './LightBoxThumbnails';

const LightBox = ({ images }) => {
    const [currPic, setCurrPic] = useState(1);

    const nextPhoto = () => {
        if (currPic === 4) {
            setCurrPic(1);
        } else {
            setCurrPic(currPic + 1);
        }
    };

    const prevPhoto = () => {
        if (currPic === 1) {
            setCurrPic(4);
        } else {
            setCurrPic(currPic - 1);
        }
    };

    return (
        <section className="product-gallery">
            <div className="gallery-img">
                <img
                    src={`/images/image-product-${currPic}.jpg`}
                    alt={`sneakers photo ${currPic}`}
                />

                <div className="btn-wrapper">
                    <button
                        className="btn btn-prev icon grid"
                        onClick={prevPhoto}
                    >
                        <img src="/images/icon-previous.svg" alt="" />
                    </button>

                    <button className="btn btn-next icon" onClick={nextPhoto}>
                        <img src="/images/icon-next.svg" alt="" />
                    </button>
                </div>
            </div>

            <div className="gallery-thumbs hide pblock-1">
                {images.map((img, i) => (
                    <LightBoxThumbnails
                        key={i}
                        img={img}
                        index={i}
                        currPic={currPic}
                        setCurrPic={setCurrPic}
                    />
                ))}
            </div>
        </section>
    );
};
export default LightBox;
