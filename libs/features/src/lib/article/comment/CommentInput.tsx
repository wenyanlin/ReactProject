import { KeyboardEvent, Ref, ChangeEvent } from 'react';

export interface CommentInputProps {
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  charLengthRef?: Ref<HTMLSpanElement>;
  maxLength: number;
  placeholder?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export function CommentInput({
  onKeyDown,
  onChange,
  charLengthRef,
  maxLength,
  placeholder,
  ref,
}: CommentInputProps) {

  console.log('CommentInput rendered');
  return (
    <div className="relative w-full flex items-center gap-4 rounded-md">
      <textarea
        ref={ref}
        placeholder={placeholder}
        maxLength={maxLength}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className="w-full h-16 pl-4 my-3 resize-none focus:outline-none"
      />
      <div className="pr-4 text-nowrap text-xs">
        <span ref={charLengthRef}>0</span> / {maxLength}
      </div>
    </div>
  );
}
