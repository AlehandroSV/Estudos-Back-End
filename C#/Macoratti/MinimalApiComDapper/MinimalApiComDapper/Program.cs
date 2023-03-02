using MinimalApiComDapper.Endpoints;
using MinimalApiComDapper.Extensions;

var builder = WebApplication.CreateBuilder(args);
builder.AddPersistence();
var app = builder.Build();

app.MaptarefasEndPoints();

app.Run();
