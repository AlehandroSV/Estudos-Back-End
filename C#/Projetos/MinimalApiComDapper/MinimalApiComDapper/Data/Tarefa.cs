using Dapper.Contrib.Extensions;

namespace MinimalApiComDapper.Data;

[Table("Tarefas")]
public record Tarefa(int Id, string Atividade, string Status);

