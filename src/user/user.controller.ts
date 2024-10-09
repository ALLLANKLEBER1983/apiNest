import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";


@Controller('users')
export class UserController{
    @Post()
    async create(@Body() {email,name,password}:CreateUserDTO){
        return{email,name,password};
    }

    @Get()
    async read(){
        return{user:[]}
    }

    @Get(':id')
    async readOne(@Param('id',ParseIntPipe) id){
        return {user:[],id}
    }

    @Put(':id')
    async update(@Body() { email,name,password}: UpdatePutUserDTO,@Param('id',ParseIntPipe) id){

        return {
            method: 'put',
            email,name,password,
            id
        }

    }

    @Patch(':id')
    async updateParcial(@Body() {email,name,password}:UpdatePatchUserDTO,@Param('id',ParseIntPipe) id){
        return {
            method: 'path',
            name,email,password,
            id
        }

    }

    @Delete(':id')
    async delete(@Param('id',ParseIntPipe) id){
        return{
            id
        }
    }


}