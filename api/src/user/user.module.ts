import { UserService } from './services/user.service';
import { UserController } from './controller/user.controller';
import { Module } from '@nestjs/common';
import { UserEntity } from './model/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity])
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService
    ],
    exports:[UserService]
})
export class UserModule { }
