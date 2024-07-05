interface Props {
  number: number;
  component?: JSX.Element;
  children?: React.ReactNode;
}
const NumberItem = ({ number, children, component }: Props) => {
  return (
    <li className="flex flex-col justify-center items-center">
      <h2 className="text-4xl text-error-300">{number}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugit accusantium dolores. Quisquam fugiat iste
        culpa eum natus minima illo, dolor ratione deleniti nostrum nam? Possimus sit earum repudiandae consequatur?
      </p>
      <div>{component}</div>
      {children}
    </li>
  );
};

export default NumberItem;
