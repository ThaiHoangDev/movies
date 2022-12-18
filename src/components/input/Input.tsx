import './input.scss';

const Input = (props: any) => {
  
  const handleChange = (e: any) => {
    !!props?.onChange && props.onChange(e);
  };

  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
    />
  );
};

export default Input;
