// 2
// 3 4
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 4 3
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12

// output - 1 5 9 10 11 12 8 4 3 2 6 7
// 1 4 7 10 11 12 9 6 3 2 5 8

function runProgram(input) {
  input = input.trim().split('\n');
  var tc = +input[0];
  var line = 1;
  for (var i = 0; i < tc; i++) {
    var [n, m] = input[line].trim().split(' ').map(Number);
    line++;
    var arr = [];
    for (var r = 0; r < n; r++) {
      arr.push(input[line].trim().split(' ').map(Number));
      line++;
    }
    var top = 0;
    var bottom = n - 1;
    var left = 0;
    var right = m - 1;
    var bag = '';
    var count = '';
    while (count < n * m) {
      for (var i = top; i <= bottom && count < n * m; i++) {
        bag += arr[i][left] + ' ';
        count++;
      }
      left++;
      for (var i = left; i <= right && count < n * m; i++) {
        bag += arr[bottom][i] + ' ';
        count++;
      }
      bottom--;
      for (var i = bottom; i >= top && count < n * m; i--) {
        bag += arr[i][right] + ' ';
        count++;
      }
      right--; //2 1
      for (var i = right; i >= left && count < n * m; i--) {
        // 2 - 1
        bag += arr[top][i] + ' ';
        count++;
      }
      top++;
    }
    console.log(bag);
  }
}
if (process.env.USER === '') {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
