import { RespostaDto } from "./RespostaDto";
import { PautaDto } from "./PautaDto";

export interface PautaPaiDto{
    pauta: PautaDto;
    respostas: RespostaDto[];
}