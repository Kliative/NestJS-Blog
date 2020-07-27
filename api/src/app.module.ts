import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { getMetadataArgsStorage } from "typeorm";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from 'path';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        autoLoadEntities: true,
        synchronize: true,
        logging: 'all',
        entities:  [join(__dirname, './**/*.entity{.ts,.js}')],


      }
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
