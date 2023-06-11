document.addEventListener("DOMContentLoaded", function(){
    document.getElementById('form-sort').addEventListener('submit', function(event){
        event.preventDefault();

        let maxNum = document.getElementById('num-max').value;
        maxNum = parseInt(maxNum);
        let random = Math.random() * maxNum;
        random = Math.floor(random + 1);

        document.getElementById('result-js').innerText = random;

        document.querySelector('.result').style.display = 'block';
    })
})