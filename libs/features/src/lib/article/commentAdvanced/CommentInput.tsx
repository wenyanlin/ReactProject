import { memo } from "react";

type CommentInputProps = {
  ref: React.Ref<HTMLInputElement>;
  onSubmit: () => void;
};

export const CommentInput = memo(function CommentInput({
  ref,
  onSubmit,
}: CommentInputProps) {
  return (
    <>
      <input ref={ref} placeholder="請輸入留言" />
      <button onClick={onSubmit}>送出</button>
    </>
  );
});
