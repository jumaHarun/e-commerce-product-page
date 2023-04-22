import { useState } from 'react';

const LightBox = () => {
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
                <div
                    className="thumb-wrapper icon"
                    onClick={() => setCurrPic(1)}
                >
                    <img
                        src="/images/image-product-1-thumbnail.jpg"
                        alt="sneakers photo thumbnail 1"
                    />
                </div>
                <div
                    className="thumb-wrapper icon"
                    onClick={() => setCurrPic(2)}
                >
                    <img
                        src="/images/image-product-2-thumbnail.jpg"
                        alt="sneakers photo thumbnail 2"
                    />
                </div>
                <div
                    className="thumb-wrapper icon"
                    onClick={() => setCurrPic(3)}
                >
                    <img
                        src="/images/image-product-3-thumbnail.jpg"
                        alt="sneakers photo thumbnail 3"
                    />
                </div>
                <div
                    className="thumb-wrapper icon"
                    onClick={() => setCurrPic(4)}
                >
                    <img
                        src="/images/image-product-4-thumbnail.jpg"
                        alt="sneakers photo thumbnail 4"
                    />
                </div>
            </div>
        </section>
    );
};
export default LightBox;
