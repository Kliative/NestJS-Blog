import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../model/user.entity';
import { Repository } from 'typeorm';
import { Observable, from } from 'rxjs';
import { User } from '../model/user.interface';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity) private readonly userRepo: Repository<UserEntity>
    ) { }

    create(user: User): Observable<User> {
        return from(this.userRepo.save(user));
    }

    findOne(id: number): Observable<any> {
        return from(this.userRepo.findOne(id));
    }

    findAll(): Observable<User[]> {
        return from(this.userRepo.find());
    }

    deleteOne(id: number): Observable<any> {
        return from(this.userRepo.delete(id));
    }

    updateOne(id: number, user: User): Observable<any> {
        return from(this.userRepo.update(id, user));
    }
}
