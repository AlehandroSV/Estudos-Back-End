using System.Data;

namespace MinimalApiComDapper.Data;

public class TarefaContext {
    public delegate Task<IDbConnection> GetConnection();
}
