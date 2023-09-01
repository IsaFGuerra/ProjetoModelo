import { Module } from '@nestjs/common';
import { GetClientController } from './get-client.controller';
import { GetClientByIdService } from './get-client.service';
import { DeleteClientController } from './delete-client.controller';
import { DeleteClientByIdService } from './delete-client.service';
import { ClientService } from './create-client.service';
import { CreateClientController } from './create-client.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [GetClientController, DeleteClientController, CreateClientController],
  providers: [GetClientByIdService, DeleteClientByIdService, ClientService, PrismaService],
})
export class ClientModule { }
