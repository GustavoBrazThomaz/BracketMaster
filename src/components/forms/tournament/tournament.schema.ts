import { z } from "zod";

export const tournamentFormSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  registrationLimit: z.number(),
  isOpen: z.boolean(),
  prizePool: z.string().min(1),
  date: z.date(),
  isIndividual: z.boolean(),
  teamSize: z.number(),
  rules: z.string(),
  modality: z.string(),
});

export type TournamentFormSchema = z.infer<typeof tournamentFormSchema>;
