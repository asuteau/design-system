import {Check} from '@phosphor-icons/react';
import {Button} from './primitives/Button';

const ButtonList = () => {
  return (
    <section id="buttons" className="text-center bg-gray-100 border border-gray-200 rounded-xs overflow-hidden">
      <h1 className="p-sm border-b-2 border-gray-200">Buttons</h1>
      <div className="flex p-sm">
        <div className="flex-1 flex flex-col gap-4 items-center">
          <h2>Primary</h2>
          <Button size="sm">Button</Button>
          <Button>Button</Button>
          <Button size="lg">Button</Button>
        </div>

        <div className="flex-1 flex flex-col gap-4 items-center">
          <h2>Secondary</h2>
          <Button intent="secondary" size="sm">
            Button
          </Button>
          <Button intent="secondary">Button</Button>
          <Button intent="secondary" size="lg">
            Button
          </Button>
        </div>

        <div className="flex-1 flex flex-col gap-4 items-center">
          <h2>Tertiary</h2>
          <Button intent="ghost" size="sm">
            Button
          </Button>
          <Button intent="ghost">Button</Button>
          <Button intent="ghost" size="lg">
            Button
          </Button>
        </div>

        <div className="flex-1 flex flex-col gap-4 items-center">
          <h2>Icon</h2>
          <Button variant="icon" size="sm">
            <Check size={16} className="fill-black" weight="bold" />
          </Button>
          <Button variant="icon">
            <Check size={20} className="fill-black" weight="bold" />
          </Button>
          <Button variant="icon" size="lg">
            <Check size={24} className="fill-black" weight="bold" />
          </Button>
          <Button variant="icon" intent="secondary" size="sm">
            <Check size={16} className="fill-black" weight="bold" />
          </Button>
          <Button variant="icon" intent="secondary">
            <Check size={20} className="fill-black" weight="bold" />
          </Button>
          <Button variant="icon" intent="secondary" size="lg">
            <Check size={24} className="fill-black" weight="bold" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ButtonList;
