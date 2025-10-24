type DialogProps = {
  isVisible?: boolean
  title: string
  content: React.ReactNode
  onConfirm: () => void
  onCancel: () => void
  disabled: boolean
}

export function Dialog({
  isVisible = false, 
  title, 
  content, 
  onCancel, 
  onConfirm,
  disabled,
}: DialogProps) {
    if(!isVisible) return null

    function handleCancel() {
      if(disabled) return   
      onCancel()
    }

    return (
        <div 
          className='fixed inset-0 z-50 bg-black/50 backdrop-blur-xs 
            flex items-center justify-center'
          onClick={handleCancel}
        >
          <div className="bg-slate-100 p-6 rounded-lg max-w-2xl mx-6 flex 
            flex-col gap-6 shadow-lg shadow-black/30 text-center"
            role="dialog"
            aria-modal={true}
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="dialog-title" className="text-xl font-extrabold">{title}</h3>
            <div id="dialog-description">{content}</div>
            <div className="flex items-center justify-around">
              <button className="bg-slate-300 hover:bg-slate-400 transition text-slate-950
                flex items-center justify-between py-2 px-4 rounded-lg cursor-pointer border-2 
                border-slate-900 disabled:opacity-30 disabled:cursor-not-allowed"
                autoFocus
                onClick={handleCancel}
                disabled={disabled}
              >
                Cancelar
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 transition text-white
                flex items-center justify-between py-2 px-4 rounded-lg cursor-pointer
                disabled:opacity-30 disabled:cursor-not-allowed"
                autoFocus
                onClick={onConfirm}
                disabled={disabled}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
    )
}