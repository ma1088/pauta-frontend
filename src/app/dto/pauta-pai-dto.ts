import { respostaDto } from "./resposta-dto";
import { pautaDto } from "./pauta-dto";

export interface pautaPaiDto{
    pauta: pautaDto;
    respostas: respostaDto[];
}