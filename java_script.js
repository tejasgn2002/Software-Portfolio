function topFunction() 
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function myfunction()
{
    if(document.getElementById("email").value == "" || document.getElementById("name").value == "" || document.getElementById("message").value == "" )
    {
        alert("Details cannot be empty")
    }
    else{
        if(confirm("Check the Detail:\nName:"+document.getElementById("name").value+"\nEmail:"+document.getElementById("email").value)) {
                alert("Message Sent")
        }
        else{
            alert("Message Not Sent")
        }
    }
}
