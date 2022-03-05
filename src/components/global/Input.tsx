interface Props {
  placeholder?: string;
  type: string;
  onChange?: () => {};
  value?: any;
  label: string;
}

const Input: React.FC<Props> = ({
  placeholder,
  type,
  onChange,
  value,
  label,
}) => {
  return (
    <div>
      <h4 className="font-athiti font-bold text-2xl text-primary-black mb-4">
        {label}
      </h4>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-52 outline-none px-3 py-1.5 border-2 border-primary-black rounded-2xl font-semibold placeholder:font-semibold bg-transparent"
      />
    </div>
  );
};

export default Input;
