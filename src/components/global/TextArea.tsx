interface Props {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: any;
  label: string;
}

const Textarea: React.FC<Props> = ({ placeholder, onChange, value, label }) => {
  return (
    <div>
      <h4 className="font-athiti font-bold text-2xl text-primary-black mb-4">
        {label}
      </h4>
      <textarea
        placeholder={placeholder}
        // @ts-ignore
        onChange={onChange}
        value={value}
        className="w-52 outline-none px-3 py-1.5 border-2 border-primary-black rounded-2xl font-semibold placeholder:font-semibold bg-transparent h-20"
      />
    </div>
  );
};

export default Textarea;
