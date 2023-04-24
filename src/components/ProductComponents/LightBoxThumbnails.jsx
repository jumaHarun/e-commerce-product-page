export const LightBoxThumbnails = ({ currPic, setCurrPic, img, index }) => {
    const thumbNumber = index + 1;

    const className =
        currPic == thumbNumber
            ? 'thumb-wrapper icon active'
            : 'thumb-wrapper icon';

    return (
        <div
            tabIndex={thumbNumber}
            className={className}
            onClick={() => setCurrPic(thumbNumber)}
        >
            <img
                src={`/images/${img}-thumbnail.jpg`}
                alt={'sneakers photo thumbnail ' + thumbNumber}
            />
        </div>
    );
};
