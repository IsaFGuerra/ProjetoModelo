import { Injectable } from '@nestjs/common';
import { Client, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { ClientDTO } from 'src/dtos/Client.dto';

@Injectable()
export class ClientService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: ClientDTO): Promise<Client> {
    // console.log('createUser', createUserDto)
    const data: Prisma.ClientCreateInput = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    const createdUser = await this.prisma.client.create({ data });

    return {
      ...createdUser,
      password: 'senha secreta',
      // password: undefined,
    };
  }

  findByEmail(email: string) {
    return this.prisma.client.findUnique({ where: { email } });
  }
}