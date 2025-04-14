import { AuthEntity } from "@/domain/entities/auth.entity";

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace PostDiscordCode {
  export type Input = {
    code: string;
  };

  export type Output = AuthEntity;

  export interface Port {
    Post(input: Input): Promise<Output>;
  }
}
