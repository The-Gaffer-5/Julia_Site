function openMenu() {
    document.getElementById('slide-open-menu').style.marginLeft = 0
    document.getElementById('darken-screen').style.display = "block"

}
function closeMenu() {
    document.getElementById('slide-open-menu').style.marginLeft = "-500px"
    document.getElementById('darken-screen').style.display = "none"
}

function toggleService() {
    let theParent = event.target.parentNode
    let theId = theParent.nextElementSibling.id
    let theElement = document.getElementById(theId)
        if(theElement.style.display === '' || theElement.style.display === 'none'){
            document.getElementById(theId).style.display = "block"
        } else {
            document.getElementById(theId).style.display = "none"
        }
}

function closeModal() {
    document.getElementById('modal').style.display = "none"
}

function openModal() {
    document.getElementById('modal').style.display = "block" 
}
function showAnswer() {
    let theParent = event.target.parentNode
    let theGrandParent = theParent.parentNode
    let theId = theGrandParent.nextElementSibling.id
    let nextStep = theParent.firstChild
    let theArrowId = nextStep.nextElementSibling.id
    let theElement = document.getElementById(theId)
    if(theElement.style.display === '' || theElement.style.display === 'none'){
        document.getElementById(theId).style.display = "block"
        document.getElementById(theArrowId).style.transform = "rotate(-90deg)"
    } else {
        document.getElementById(theId).style.display = "none"
        document.getElementById(theArrowId).style.transform = "rotate(90deg)"
    }
}