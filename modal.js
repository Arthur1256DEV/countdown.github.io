//MECHENDO COM MODAIS
openModal = document.querySelector("#openModal")

closeModal = document.querySelector(".modal-wrapper")

openModal.addEventListener("click", remove)

function remove(){
    remove = document.querySelector(".fixed").classList.remove("invisible")
} 

document.addEventListener("keydown", function(event){
    const isEscKey = event.key === "Escape"

    if(isEscKey) {
        closeModal.classList.add("invisible")
    }
})