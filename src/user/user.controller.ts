import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";


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
    async update(@Body() body,@Param() params){

        return {
            method: 'put',
            body,
            params
        }

    }

    @Patch(':id')
    async updateParcial(@Body() body,@Param() params){
        return {
            method: 'path',
            body,
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