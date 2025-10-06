var
    i: integer;
begin
    readln(i);

    if i = 0 then
        writeln('E')
    else if i <= 35 then
        writeln('D')
    else if i <= 60 then
        writeln('C')
    else if i <= 85 then
        writeln('B')
    else
        writeln('A');
end.
