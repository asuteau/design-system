import Card from './primitives/Card';

const CardList = () => {
  return (
    <section id="buttons" className="text-center bg-gray-100 border border-gray-200 rounded-xs overflow-hidden">
      <h1 className="p-sm border-b-2 border-gray-200">Cards</h1>
      <div className="flex p-sm">
        <div className="flex-1 flex flex-col gap-4 items-center">
          <h2>Primary</h2>
          <Card size="sm" />
          <Card size="md" />
          <Card size="lg" />
        </div>
      </div>
    </section>
  );
};

export default CardList;
