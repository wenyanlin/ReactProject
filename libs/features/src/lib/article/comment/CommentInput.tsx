import { KeyboardEvent, ChangeEvent, Ref } from 'react';

export interface CommentInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  maxLength: number;
  placeholder?: string;
  ref?: Ref<HTMLTextAreaElement>;
}

export function CommentInput({
  value,
  onChange,
  onKeyDown,
  maxLength,
  placeholder,
  ref,
}: CommentInputProps) {
  return (
    <div className="relative w-full flex items-center gap-4 rounded-md">
      <textarea
        ref={ref}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="w-full h-16 pl-4 my-3 resize-none focus:outline-none"
      />
      <div className='pr-4 text-nowrap text-xs'>
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
