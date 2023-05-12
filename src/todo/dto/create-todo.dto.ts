import { IsString , IsNotEmpty, MinLength, MaxLength, IsUUID} from "class-validator";

export class CreateTodoDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(64)
    title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    text: string;

    @IsUUID()
    @IsNotEmpty()
    category_id: string;
}
