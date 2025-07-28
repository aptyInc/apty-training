function changeTextColor()
{
    let ele1=document.getElementById("para1")
    let ele2=document.getElementById("para2")
    ele1.style.color="red"
    ele2.style.color="green"
}
function toggleBgColor()
{
    let elements=document.getElementsByClassName("toogle-bg")
    for (let element of elements) {
        element.classList.toggle("highlight")
    }
}
function changeInnerHtml()
{
    let elements=document.getElementsByTagName("span")
    for (let element of elements) {
        element.innerHTML="span ele's text changed"
    }
}
function toggleDisabledAttr()
{
    let inputs=document.getElementsByName("name")
    for (let input of inputs) {
        input.disabled=!input.disabled
    }
}
function addNewCustomAttr()
{
    let customAttr=document.querySelector('[data-custom-attr="custom-attr1"]')
    if(customAttr)
    {
        customAttr.setAttribute('new-custom-attr','custom-val')
        alert('New custom Attribute Added!!')
    }
}