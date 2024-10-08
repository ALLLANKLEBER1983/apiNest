import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";


@Controller('users')
export class UserController{
    @Post()
    async create(@Body() body){
        return{body};
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