import { Module } from '@nestjs/common';
import { CreateClientController } from './CreateClient.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma.module';
import { GetClientController } from './GetClient.controller';
// import { AppModule } from '../app.module';

@Module({
  imports: [PrismaModule],
  controllers: [GetClientController, CreateClientController],
  providers: [], //service é um provider mas nem todo provider é service
})
export class ClientModule { }
