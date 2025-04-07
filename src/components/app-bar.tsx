import { Button } from "./ui/button";

export default function AppBar() {
  return (
    <div className="w-full py-3 px-48 flex justify-between items-center  bg-black/80 backdrop-blur-md shadow fixed top-0">
      <img className="size-8" src="/icon.png" alt="Bracket Master Logo" />

      <ul className="flex gap-12 justify-center [&_li]:text-white [&_li]:hover:underline [&_li]:cursor-pointer">
        <li>Home</li>
        <li>Campeonatos</li>
        <li>Resumos</li>
      </ul>
      <div className="flex gap-4">
        <Button
          variant="ghost"
          className=" hover:bg-black/60 hover:backdrop-blur-md"
        >
          Login com Discord
        </Button>
        {/* <Button
          variant="ghost"
          className="bg-transparent hover:bg-black/60 hover:backdrop-blur-md"
        >
          Register
        </Button> */}
      </div>
    </div>
  );
}
