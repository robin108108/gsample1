/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GymWhereInput } from "./GymWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GymOrderByInput } from "./GymOrderByInput";

@ArgsType()
class GymFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GymWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GymWhereInput, { nullable: true })
  @Type(() => GymWhereInput)
  where?: GymWhereInput;

  @ApiProperty({
    required: false,
    type: [GymOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GymOrderByInput], { nullable: true })
  @Type(() => GymOrderByInput)
  orderBy?: Array<GymOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GymFindManyArgs as GymFindManyArgs };
