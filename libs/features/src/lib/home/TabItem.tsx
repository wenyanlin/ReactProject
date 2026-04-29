interface TabItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export function TabItem({ label, isActive, onClick }: TabItemProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-medium whitespace-nowrap border-b-2 cursor-pointer transition-colors duration-200 ${
        isActive
          ? 'text-primary border-primary'
          : 'text-neutral-500 border-transparent hover:text-neutral-700'
      }`}
    >
      {label}
    </button>
  );
}
