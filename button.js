AFRAME.registerComponent("button",{
    init:function(){
        var button1 = document.createElement("button")
        button1.innerHTML = "ORDER NOW"
        button1.setAttribute("id","order-button")
        button1.setAttribute("class","btn btn-danger ml-3 mr-3")
        var button2 = document.createElement("button")
        button2.innerHTML = "ORDER SUMMARY"
        button2.setAttribute("id","order-summary-button")
        button2.setAttribute("class","btn btn-danger ml-3")
        var button_div = document.getElementById("button-div")
        button_div.appendChild(button1)
        button_div.appendChild(button2) 
    }
})