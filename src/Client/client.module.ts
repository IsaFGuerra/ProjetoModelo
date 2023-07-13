import { Module } from '@nestjs/common';
import { ClientController } from './client.controller';
import { PrismaService } from 'src/prisma.service';
import { PrismaModule } from 'src/prisma.module';
// import { AppModule } from '../app.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClientController],
  providers: [], //service é um provider mas nem todo provider é service
})
export class ClientModule { }
