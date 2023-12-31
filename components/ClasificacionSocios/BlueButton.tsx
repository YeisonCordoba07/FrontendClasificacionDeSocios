interface BlueButtonProps {
    text?: string;
    onClick?: () => void;
}

const BlueButton = ({ text = "Blue Button", onClick }: BlueButtonProps) => {
    return (

        <div className="flex gap-3 items-center">
            <button 
            className="text-white px-4 py-3 rounded-xl border-none cursor-pointer bg-blue-500 hover:bg-blue-700  hover:duration-150 shadow-md hover:scale-105 text-xl"
            onClick={onClick}>
                {text}
            </button>
        </div>
        
    );
};

export { BlueButton };  