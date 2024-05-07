
interface DialogBoxProps {
    message: string;
    onClose: () => void;
  }
  
  export function DialogBox({ message, onClose }: DialogBoxProps) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        <div className="dialog-box absolute bg-white p-6 rounded shadow-md">
          <div className="dialog-content">
          <p className="text-black">{message}</p>
          <div className="flex justify-center">
              <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  