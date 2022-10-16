// 单行输入
var line;
while ((line = readline())) {
  var lines = line.split(" ");
  var a = parseInt(lines[0]);
  var b = parseInt(lines[1]);
  function add(m, n) {
    return m + n;
  }
  print(add(a, b));
}

// 固定输入行数, 读取每行
var n = parseInt(readline());
var ans = 0;
for (var i = 0; i < n; i++) {
  lines = readline().split(" ");
  for (var j = 0; j < lines.length; j++) {
    ans += parseInt(lines[j]);
  }
  print(ans);
}
