import LayoutComponents from "@/components/layout/LayoutComponents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

export default function Landing() {
  return (
    <LayoutComponents>
      <div className="flex flex-col">
        <h1 className="text-white">Botões</h1>

        <span className="flex gap-2">
          <Button variant="default">Default</Button>
          <Button disabled>Disabled</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </span>
      </div>

      <div className="flex flex-col w-3/4">
        <h2>Forms</h2>
        <Input type="email" placeholder="Email" />
      </div>
    </LayoutComponents>
  );
}
