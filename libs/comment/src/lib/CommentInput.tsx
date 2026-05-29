import { useState, useRef, useImperativeHandle, Ref } from 'react';

export interface CommentInputHandle {
  getValue: () => string;
  focus: () => void;
  clear: () => void;
}

type CommentInputProps = {
  ref?: Ref<CommentInputHandle>;
  placeholder?: string;
};

export function CommentInput({
  ref,
  placeholder = '輸入你的看法...',
}: CommentInputProps) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useImperativeHandle(ref, () => ({
    getValue: () => value,
    focus: () => {
      textareaRef.current?.focus();
    },
    clear: () => {
      setValue('');
    },
  }));
  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="w-full px-3 py-2 text-sm bg-white border border-slate-100 focus:outline-none focus:border-slate-300 font-medium text-slate-700"
      rows={3}
    />
  );
}
