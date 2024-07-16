
// String Reverse

function clckbtn(){
    let input = document.getElementById('txt').value;
    let output = document.getElementById('result');
    let reverse = input.split('').reverse().join('');
    //output.innerHTML = reverse;
    window.alert(reverse);
}