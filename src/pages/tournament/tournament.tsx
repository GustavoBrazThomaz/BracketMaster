import { Button, Container, TournamentCard } from "@/components";
import { TournamentEntity } from "@/domain/entities/tournament.entity";
import { useNavigate } from "react-router";

export default function Tournament() {
  const navigate = useNavigate();

  const tournament = new TournamentEntity(
    "1",
    "Torneio de Teste",
    "Descrição do torneio",
    "R$ 100,00",
    true,
    new Date(),
    10,
    true,
    5,
    "Regras do torneio",
    "Modalidade"
  );
  return (
    <Container className="pt-4">
      <div className="flex justify-end w-full">
        <Button onClick={() => navigate("/tournament-form")} variant="default">
          Criar Torneio
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 mt-8">
        <TournamentCard tournament={tournament} />
      </div>
    </Container>
  );
}
