import { prop, getModelForClass, index } from '@typegoose/typegoose';
import { HanziCharacter } from '../../types/HanziCharacter.type';

@index({ score: -1 })
export class Hanzi {
    @prop({ required: true, unique: true }) character: HanziCharacter;
    @prop({}) meaning: string;
    @prop({}) pinyin: string[];
    @prop({}) sentences: string[];

    @prop({ default: 1 }) score: number;
}

export const HanziModel = getModelForClass(Hanzi);
