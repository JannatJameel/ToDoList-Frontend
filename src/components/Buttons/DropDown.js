
const DropDown = () => {
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Task Priority
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" >Low</a></li>
                <li><a className="dropdown-item" >Medium</a></li>
                <li><a className="dropdown-item" >High</a></li>
            </ul>
        </div>
    );
};

export default DropDown;