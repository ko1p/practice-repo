import React, { useRef } from "react";

export const Logger: React.FC = (): React.ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)

  const onSubmitHandler = (e: React.FormEvent): void => {
      e.preventDefault()
      console.log(inputRef.current!.value)
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input type="text" ref={inputRef} />
      </form>
    </>
  );
};
