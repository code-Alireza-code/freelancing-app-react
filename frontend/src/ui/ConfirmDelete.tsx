type ConfirmDeletePropsType = {
  resourceName: string;
  disabled?: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

function ConfirmDelete({
  resourceName,
  onClose,
  onConfirm,
  disabled = false,
}: ConfirmDeletePropsType) {
  return (
    <div>
      <h2 className="font-bold text-base mb-8">
        آیا از حذف {resourceName} مطمین هستید ؟
      </h2>
      <div className="flex justify-between items-center gap-x-4 sm:gap-x-16">
        <button
          className="btn btn--primary flex-1"
          onClick={onClose}
          disabled={disabled}
        >
          لغو
        </button>
        <button
          disabled={disabled}
          onClick={onConfirm}
          className="btn btn--danger flex-1"
        >
          تایید
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
