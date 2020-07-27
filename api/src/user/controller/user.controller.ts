import { Controller, Post, Body, Get, Param, Delete,Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../model/user.interface';

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Post()
    create(
        @Body() user: User
    ): Observable<any> {
        return this.userService.create(user);
    }

    @Get(':id')
    findOne(
        @Param() params
    ): Observable<User> {
        return this.userService.findOne(params.id);
    }
    
    @Get()
    findAll(): Observable<User[]> {
        return this.userService.findAll();
    }

    @Delete(':id')
    deleteOne(
        @Param('id') id: string
    ): Observable<User> {
        return this.userService.deleteOne(Number(id));
    }
    @Put(':id')
    updateOne(
        @Param('id') id: string,
        @Body() user: User
    ): Observable<any> {
        return this.userService.updateOne(Number(id), user);
    }
}
