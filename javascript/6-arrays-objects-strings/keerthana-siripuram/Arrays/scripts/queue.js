let queue=[]
function add()
{
    let ele = document.getElementById("ele").value
    queue.unshift(ele)
    console.log(queue)
    document.getElementById("res").innerText=`Added ele:${ele}`
    displayQueue()
}
function remove()
{
    let len=queue.length
    if(len>0)
    {
    const poppedEle=queue[0]
    queue.shift()
    document.getElementById("res").innerText=`Removed ele:${poppedEle}`
    displayQueue()
    }
    else{
        document.getElementById("res").innerText="queue is Empty , cannot pop"
        displayQueue()
    }
}
function peek()
{   
    let len=queue.length
    if(len>0)
    {
 const topEle=queue[0]
    document.getElementById("res").innerText=`Top ele:${topEle}`
    }
   else{
    document.getElementById("res").innerText="queue is Empty "
   }
}
function size()
{
    const len=queue.length
    document.getElementById("res").innerText=`Total ele's:${len}`
}
function isEmpty()
{
    const len=queue.length
    len>0?document.getElementById("res").innerText="Queue is Not Empty"
    :document.getElementById("res").innerText="Queue is Empty"
}

function displayQueue() {
    document.getElementById("display-queue").innerHTML += `<br>Queue is:`
    for (let element of queue) {
        document.getElementById("display-queue").innerText += `${element} ,`
    }
}