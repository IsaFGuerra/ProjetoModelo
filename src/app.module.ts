//modulo principal
import { Module } from '@nestjs/common';
import { ClientModule } from './Client/client.module';
import { CreateClientController } from './Client/CreateClient.controller';
import { PrismaModule } from './prisma.module';
import { GetClientController } from './Client/GetClient.controller';

@Module({
  imports: [ClientModule, PrismaModule],
  controllers: [CreateClientController,GetClientController],
  providers: [],
})
export class AppModule { }
