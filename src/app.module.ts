//modulo principal
import { Module } from '@nestjs/common';
import { ClientModule } from './Client/client.module';
import { ClientController } from './Client/client.controller';
import { PrismaModule } from './prisma.module';

@Module({
  imports: [ClientModule, PrismaModule],
  controllers: [ClientController],
  providers: [],
})
export class AppModule { }
