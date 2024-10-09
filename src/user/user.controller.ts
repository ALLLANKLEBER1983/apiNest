import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
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
    async readOne(@Param() param){
        return {user:[],param}
    }

    @Put(':id')
    async update(@Body() { email,name,password}: UpdatePutUserDTO,@Param() params){

        return {
            method: 'put',
            email,name,password,
            params
        }

    }

    @Patch(':id')
    async updateParcial(@Body() {email,name,password}:UpdatePatchUserDTO,@Param() params){
        return {
            method: 'path',
            name,email,password,
            params
        }

    }

    @Delete(':id')
    async delete(@Param() params){
        return{
            params
        }
    }


}