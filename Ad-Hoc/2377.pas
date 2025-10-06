program Desafio;
var
    a, b, c, d, total: longint;
begin
    readln(a, b);
    readln(c, d);
    total := ((a div b) * d) + (a * c);
    writeln(total);
end.