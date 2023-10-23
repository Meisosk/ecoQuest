function DeleteCheck({ onCancel, onConfirm }) {
    return (
      <div className="delete-check">
        <p className="text-rose-700">ARE YOU SURE?</p>
        <button className="p-2 mr-8 mt-3 mb-3" onClick={onCancel}>Cancel</button>
        <button className="p-2 text-rose-700" onClick={onConfirm}>Delete</button>
      </div>
    );
  }
  
  export default DeleteCheck;