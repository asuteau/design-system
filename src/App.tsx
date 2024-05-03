import {Check} from '@phosphor-icons/react';
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
        <Button size="sm">This is a primary button</Button>
        <Button>This is a primary button</Button>
        <Button size="lg">This is a primary button</Button>
        <Button intent="secondary" size="lg">
          This is a secondary button
        </Button>
        <Button intent="secondary">This is a secondary button</Button>
        <Button intent="secondary" size="sm">
          This is a secondary button
        </Button>
        <Button intent="ghost" size="lg">
          This is a tertiary button
        </Button>
        <Button intent="ghost">This is a tertiary button</Button>
        <Button intent="ghost" size="sm">
          This is a tertiary button
        </Button>
        <Button variant="icon" size="sm">
          <Check size={16} className="fill-amber-200" weight="bold" />
        </Button>
        <Button variant="icon">
          <Check size={20} className="fill-amber-200" weight="bold" />
        </Button>
        <Button variant="icon" size="lg">
          <Check size={24} className="fill-amber-200" weight="bold" />
        </Button>
        <Button variant="icon" intent="secondary" size="sm">
          <Check size={16} className="fill-sky-500" weight="bold" />
        </Button>
        <Button variant="icon" intent="secondary">
          <Check size={20} className="fill-sky-500" weight="bold" />
        </Button>
        <Button variant="icon" intent="secondary" size="lg">
          <Check size={24} className="fill-sky-500" weight="bold" />
        </Button>
      </section>
    </div>
  );
}

export default App;
