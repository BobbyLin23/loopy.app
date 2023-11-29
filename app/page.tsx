import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className='p-4'>
      <div className='text-3xl text-red-300'>
        Hello World
      </div>
      <Button>Click</Button>
      <ModeToggle />
    </div>
  )
}
