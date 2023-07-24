import { Module } from '@nestjs/common';
import { GetClientController } from './GetClient.controller';
import { GetClientByIdService } from './GetClient.service';
import { DeleteClientController } from './DeleteClient.controller';
import { DeleteClientByIdService } from './DeleteClient.service';
import { ClientService } from './createClient.service';
import { CreateClientController } from './CreateClient.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [GetClientController, DeleteClientController, CreateClientController],
  providers: [GetClientByIdService, DeleteClientByIdService, ClientService, PrismaService],
})
export class ClientModule { }
