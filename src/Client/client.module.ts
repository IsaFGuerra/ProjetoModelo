import { Module } from '@nestjs/common';
import { CreateClientController } from './CreateClient.controller';
import { PrismaModule } from 'src/prisma.module';
import { GetClientController } from './GetClient.controller';
import { FindClientByIdService } from './client.service';
import { AppModule } from 'src/app.module';
import { DeleteClientController } from './DeleteClient.controller';

@Module({
  imports: [PrismaModule],
  controllers: [GetClientController, CreateClientController, DeleteClientController],
  providers: [FindClientByIdService],
})
export class ClientModule { }
