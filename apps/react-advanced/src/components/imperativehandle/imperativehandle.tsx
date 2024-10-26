import {
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  PropsWithRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
type Api = {
  focus: () => void;
  shake: () => void;
};
const InputField = ({
  label,
  apiRef,
}: {
  label: string;
  apiRef: MutableRefObject<Api>;
}) => {
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  //   WITH useImperativeHandle
  //   useImperativeHandle(
  //     apiRef,
  //     () => ({
  //       focus: () => {
  //         inputRef.current?.focus();
  //       },
  //       shake: () => {
  //         setShake(true);
  //       },
  //     }),
  //     [],
  //   );

  // WITHOUT useImperativeHandle

  useEffect(() => {
    apiRef.current = {
      focus: () => {
        inputRef.current?.focus();
      },
      shake: () => {
        setShake(true);
      },
    };
  }, [apiRef]);
  return (
    <div>
      <input
        type="text"
        placeholder={label}
        ref={inputRef}
        onAnimationEnd={() => {
          setShake(false);
        }}
        className={`border border-black px-5 py-2 ${shake ? "shake" : ""}`}
      />
    </div>
  );
};

const ImperativeHandleForm = () => {
  const ref = useRef<Api>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    ref.current?.focus();
    ref.current?.shake();
    // if (!ref.current?.value) {
    //   ref.current?.focus();
    // }
    // ref.current.
  };
  return (
    <div className="space-y-5 border border-red-400 px-5 py-5">
      <p>this is form</p>
      <form onSubmit={submitHandler}>
        <p>Hello</p>
        <InputField label="Enter your name" apiRef={ref} />
        <button type="submit" className="bg-blue-400 px-5 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImperativeHandleForm;
