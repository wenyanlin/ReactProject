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
    <div className="relative w-full flex items-center gap-4 rounded-md">
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
        className="w-full pl-4 py-3 focus:outline-none"
      />
      <div className='pr-4 text-nowrap text-xs'>
        {value.length} / {maxLength}
      </div>
    </div>
  );
}
