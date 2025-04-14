import { PostDiscordCode } from "@/domain/ports/auth/post-discord-code";
import { API } from "../config/axios";
import { AuthEntity } from "@/domain/entities/auth.entity";

export class AuthService implements PostDiscordCodePorts {
  async Post(input: PostDiscordCode.Input): Promise<PostDiscordCode.Output> {
    const { data } = await API.post("/auth/discord-code", { code: input.code });
    return new AuthEntity(data.username, data.email, data.accessToken);
  }
}

export type PostDiscordCodePorts = PostDiscordCode.Port;
