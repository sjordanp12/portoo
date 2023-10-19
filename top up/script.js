function myFunction() {
  let text;
  let person = prompt('Please enter your name:', 'Harry Potter');
  if (person == null || person == '') {
    text = 'Yahh :(';
  } else {
    text = 'Hello ' + person + '! Apa kabarmu hari ini? ';
  }
  document.getElementById('hello').innerHTML = text;
}
