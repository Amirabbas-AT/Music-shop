import Buttons from "./Buttons";

const ListItem = ({ item }) => {
    const count = item.count || 0;
    const total = item.price * count;

    return (
        <div className="d-flex mb-3">
            
            <div className="flex-shrink-0 me-3">
                <img
                    src={item.images[0]}
                    alt={item.title}
                    style={{
                        maxHeight: '200px',
                        objectFit: 'cover',
                        width: '150px',
                    }}
                />
            </div>

           
            <div className="d-flex flex-column justify-content-between">
                <h5 className="mb-2">{item.title}</h5>
                <p className="text-muted">{item.description}</p>
                <small className="text-muted mb-2">Total: £{total.toFixed(2)}</small>

                
                <Buttons item={item} count={count} />
            </div>
        </div>
    );
};

export default ListItem;
