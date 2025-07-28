function parseJSONString() {
    let jsonString = document.getElementById("json-string").value
    let result=parseJSON(jsonString)
    if(!result.success)
    {
        document.getElementById("res").innerText=`${result.error}`
    }
    else{
        const data=result.data
        document.getElementById("res").innerText=JSON.stringify(data)
    }
}
function parseJSON(jsonString)
{
    try {
        const parsedObject = JSON.parse(jsonString);
        return { success: true, data: parsedObject , error:null}; 
    } catch (error) {
        return { success: false, data:null, error: 'Invalid JSON format: ' + error.message };
    }
}