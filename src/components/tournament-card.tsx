import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { TournamentEntity } from "@/domain/entities/tournament.entity";
import { UserRound, UsersRound } from "lucide-react";

type Props = {
  tournament: TournamentEntity;
};

export function TournamentCard({ tournament }: Readonly<Props>) {
  return (
    <Card className="p-6 max-w-md w-full flex flex-col">
      <div className="w-full flex items-center justify-between">
        <p className="font-bold">{tournament.title}</p>
        <div className="[&_p]:flex [&_p]:items-center [&_p]:gap-2">
          {tournament.isIndividual ? (
            <p>
              <UserRound /> 1
            </p>
          ) : (
            <p>
              <UsersRound /> {tournament.teamSize}
            </p>
          )}
        </div>
      </div>
      <p>{tournament.description}</p>
      <Button disabled={!tournament._isOpen}>Ver Torneio</Button>
    </Card>
  );
}
