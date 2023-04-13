const BasketItem = ({ item }) => {
    const { title, qty, image } = item;
    return (
        <div className="basket-item grid">
            <div className="detail-img">
                <img src={`/images/${image}.jpg`} alt="Cart item image" />
            </div>

            <div className="detail-text"></div>

            <div className="delete">
                <img src="/images/icon-delete.svg" alt="" />
            </div>
        </div>
    );
};
export default BasketItem;
