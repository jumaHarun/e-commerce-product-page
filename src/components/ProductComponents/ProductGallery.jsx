import { useState } from 'react';

function ProductGallery() {
    const [pic, setPic] = useState(1);

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

    return (
        <section className="product-gallery">
            <div className="gallery-img">
                <img
                    src={`/images/image-product-${pic}.jpg`}
                    alt={`sneakers photo ${pic}`}
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
                <div className="thumb-wrapper icon">
                    <img
                        src="/images/image-product-1-thumbnail.jpg"
                        alt="sneakers photo thumbnail 1"
                    />
                </div>
                <div className="thumb-wrapper icon">
                    <img
                        src="/images/image-product-2-thumbnail.jpg"
                        alt="sneakers photo thumbnail 2"
                    />
                </div>
                <div className="thumb-wrapper icon">
                    <img
                        src="/images/image-product-3-thumbnail.jpg"
                        alt="sneakers photo thumbnail 3"
                    />
                </div>
                <div className="thumb-wrapper icon">
                    <img
                        src="/images/image-product-4-thumbnail.jpg"
                        alt="sneakers photo thumbnail 4"
                    />
                </div>
            </div>
        </section>
    );
}
export default ProductGallery;
