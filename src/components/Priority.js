const Priority = () => {
    return(
        <>
            <select className="form-select" aria-label="Default select example">
            <option selected>Priority...</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            </select>
        </>
    );
};

export default Priority;