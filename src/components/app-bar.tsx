import { Link } from "react-router";
import { Button } from "./ui/button";
import { DiscordIcon } from "./icons";

export function AppBar() {
  return (
    <div className="w-full py-3 px-48 flex justify-between items-center  bg-black/80 backdrop-blur-md shadow fixed top-0">
      <img className="size-8" src="/icon.png" alt="Bracket Master Logo" />

      <ul className="flex gap-12 justify-center [&_li]:text-white [&_li]:hover:underline [&_li]:cursor-pointer">
        <Link to={"/"}>Campeonatos</Link>
        <li>Resumos</li>
      </ul>
      <div className="flex gap-4"> 
        <Button
          onClick={() =>
            window.open(
              "https://discord.com/oauth2/authorize?client_id=1346994909596356811&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3553%2Fdiscord%2Fcallback&scope=email+identify",
              "_self"
            )
          }
          className="bg-[#737EF8] hover:bg-[#555fd9] text-white"
        >
          Logar com Discord
          <DiscordIcon />
        </Button>
      </div>
    </div>
  );
}
