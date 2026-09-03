const nome = "Lucas";
const temHorario = true;
const idade = 20;
const minIdade = 18;

if (!nome) {
    console.log("Nome não fornecido.");
} else if (!temHorario) {
    console.log("Não há horários disponíveis.");
} else if (idade <= minIdade) {
    console.log("Idade mínima não atingida.");
} else {
    console.log("Agendamento realizado com sucesso.");
}