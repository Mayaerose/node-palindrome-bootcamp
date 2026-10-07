// alert('works')
document.querySelector(".maya").addEventListener("click" , palindrome)

function palindrome() {
    const word = document.querySelector(".info").value

    fetch(`/api?palindrome=${encodeURIComponent(word)}`)
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        if(data.yesOrNo == 'yes'){
            document.querySelector("#result").innerText = word + ' is a palindrome'
        }else{
            document.querySelector("#result").innerText = word + ' is not a palindrome'
        }
    })
    .catch(err => console.log(err))
}
