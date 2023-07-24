import { Personal } from "@prisma/client";

export class Client {
    clientId: string;
    name: string
    Personal?: Personal
    personalPersonalId?: string
    email: string
    password: string
  }