import { Injectable } from '@nestjs/common';
import { Client, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { createClientDTO, createClientZodDTO } from 'src/dtos/create-client.dto';
import { z } from 'zod';

type createClientZod = z.infer<typeof createClientZodDTO>;

@Injectable()
export class ClientService {
  constructor(private readonly prisma: PrismaService) { }

  async create(base: createClientZod): Promise<Client> {
    const data: Prisma.ClientCreateInput = {
      email: base.email,
      password: await bcrypt.hash(base.password, 10),
    };

    const createdUser = await this.prisma.client.create({
      data
    });

    return {
      ...createdUser,
      password: 'senha secreta',
      // password: undefined,
    };
  }
}