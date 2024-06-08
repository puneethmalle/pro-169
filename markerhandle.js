AFRAME.registerComponent("marker",{
    init:function(){
        this.el.addEventListener("markerFound",()=>{
            this.handlemarkerfound()
        })
        this.el.addEventListener("markerLost",()=>{
            this.handlemarkerlost()
        })
    },
    handlemarkerfound:function(){
        var button_div = document.getElementById("button-div")
        button_div.style.display = "flex"

        var orderbutton = document.getElementById("order-button")
        orderbutton.addEventListener("click",()=>{
            swal({
                icon:"success",
                title:"Order",
                text:"Your Order Will Arrive Shortly"
            })
        })
        
        var summarybuttin = document.getElementById("order-summary-button")
        summarybuttin.addEventListener("click",()=>{
            swal({
                icon:"info",
                title:"Summary",
                text:"Your order consists of one crane scaled down to a 1:2000. This crane has all the features of a normal crane including the hydrolics. This crane will cost $15.99."
            })
        })
    },
    handlemarkerlost:function(){
        var button_div = document.getElementById("button-div")
        button_div.style.display = "flex"
    }
})