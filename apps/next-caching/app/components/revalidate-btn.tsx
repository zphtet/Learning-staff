"use client";

const Button: React.FC<{ func: () => Promise<void> }> = ({ func }) => {
  return (
    <button
      onClick={async () => await func()}
      className="rounded-full bg-blue-500 px-5 py-2 text-white"
    >
      Revalidate Home
    </button>
  );
};

export default Button;
