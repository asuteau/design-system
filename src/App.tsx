import {Button} from './components/primitives/Button';

function App() {
  return (
    <div className="container h-full m-auto mt-lg space-y-md">
      {/* Buttons */}
      <section
        id="buttons"
        className="flex flex-col justify-center items-center gap-sm p-sm bg-gray-100 border border-gray-200 rounded-xs"
      >
        <h1>Buttons</h1>
        <Button>This is a primary button</Button>
        <Button variant="secondary">This is a secondary button</Button>
        <Button variant="tertiary">This is a tertiary button</Button>
      </section>
    </div>
  );
}

export default App;
