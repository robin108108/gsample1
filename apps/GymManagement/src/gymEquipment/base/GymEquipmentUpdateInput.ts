/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GymWhereUniqueInput } from "../../gym/base/GymWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class GymEquipmentUpdateInput {
  @ApiProperty({
    required: false,
    type: () => GymWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GymWhereUniqueInput)
  @IsOptional()
  @Field(() => GymWhereUniqueInput, {
    nullable: true,
  })
  gym?: GymWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  photo?: InputJsonValue;
}

export { GymEquipmentUpdateInput as GymEquipmentUpdateInput };
