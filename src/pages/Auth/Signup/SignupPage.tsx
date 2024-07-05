import { useEffect, useState } from 'react';
import NumberItem from './NumberItem';
import { Spinner, Toggle } from 'keep-react';

const SignupPage = () => {
  const [count, setCount] = useState(1);
  const [items, setItems] = useState<number[]>([]);
  const buildItems = () => {
    let counter = 1;
    const array = [];
    while (counter < count) {
      array.push(counter);
      counter++;
    }
    setItems(array);
  };
  const plus = () => {
    setCount((value) => value + 1);
  };
  const less = () => {
    setCount((value) => value - 1);
  };

  const myRanking = <Spinner color="info" size="lg" />;
  const anotherComp = <Toggle bgColor="primary" label="Toggle" size="md" withIcon={true} />;

  useEffect(() => {
    buildItems();
  }, [count]);

  useEffect(() => {
    console.log('primera y unica vez');
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="flex gap-x-2">
        <button
          className="font-semibold focus-visible:outline-none flex items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 focus-visible:ring-primary px-5 py-2 text-sm rounded-lg w-full"
          onClick={plus}>
          Incrementar
        </button>
        <button
          className="font-semibold focus-visible:outline-none flex items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 focus-visible:ring-primary px-5 py-2 text-sm rounded-lg w-full"
          onClick={less}>
          Decrementar
        </button>
      </div>
      <div>
        <ul>
          {items.map((number) => (
            <NumberItem key={number} number={number} component={number % 2 == 0 ? myRanking : anotherComp}>
              <p>Hola mundo</p>
            </NumberItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SignupPage;
