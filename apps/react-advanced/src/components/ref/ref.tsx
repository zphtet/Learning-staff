import { ForwardedRef, forwardRef, PropsWithRef, useRef } from "react";

const InputField = forwardRef(
  ({ label }: { label: string }, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div>
        <input
          type="text"
          placeholder={label}
          ref={ref}
          className="border border-black px-5 py-2"
        />
      </div>
    );
  },
);

const FormRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!ref.current?.value) {
      ref.current?.focus();
    }
  };
  return (
    <div className="space-y-5 border border-red-400 px-5 py-5">
      <p>this is form</p>
      <form onSubmit={submitHandler}>
        <p>Hello</p>
        <InputField label="Enter your name" ref={ref} />
        <button type="submit" className="bg-blue-400 px-5 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormRef;
