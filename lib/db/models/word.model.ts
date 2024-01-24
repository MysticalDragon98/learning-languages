import { prop, getModelForClass } from '@typegoose/typegoose';
import { ChineseWord } from '../../types/ChineseWord.type';

export class Word {
    @prop({ required: true, unique: true }) word: ChineseWord;
    @prop({}) meaning: string;
    @prop({}) sentences: string[];

    @prop({ default: 1 }) score: number;
}

export const WordModel = getModelForClass(Word);
