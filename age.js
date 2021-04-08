function ageindays() {
    var birthyear= prompt('what is your Birth year My friend');
    var ageindaygs=(2021 - birthyear) * 365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are' + ageindaygs + 'days old');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('result').appendChild(h1);
  
    


}
function reset()
{
    document.getElementById('ageindays').remove();
}

