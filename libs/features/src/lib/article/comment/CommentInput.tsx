import { KeyboardEvent, ChangeEvent, Ref } from 'react';

export interface CommentInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  maxLength: number;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
}

export function CommentInput({
  value,
  onChange,
  onSubmit,
  maxLength,
  placeholder,
  ref,
}: CommentInputProps) {
  return (
    <div className="comment-input-wrapper">
      <input
        ref={ref}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            onSubmit();
          }
        }}
      />
      <div>
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
