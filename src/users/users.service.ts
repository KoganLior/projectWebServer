import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm"
import {Repository} from "typeorm" 
import { Users } from './entities/user.entity';
@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo:Repository<Users>){}
  create(createUserDto: CreateUserDto) {
    return this.userRepo.save(createUserDto)
  }
  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
