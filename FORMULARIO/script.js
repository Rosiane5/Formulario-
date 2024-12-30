const info = []
let lastName = document.getElementById('last_name').value
const btn = document.getElementById('btn')

btn.addEventListener('click', function(event){
    event.preventDefault()
    submitForm()
    resetForm()
})


 function submitForm() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let message = document.getElementById('message').value

      if( name !== '' &&  email !== '' &&  message !== '') {
         info.push({name, email, message})
         console.log(info)
         window.alert('Sua solicitação foi enviada com sucesso')
        }
        
        else {
            window.alert("Por favor, complete todos os campos")
        }

       
    }  


    function resetForm() {
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('last_name').value = ''
        document.getElementById('message').value = ''
    }