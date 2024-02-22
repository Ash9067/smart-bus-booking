const allSeat=document.getElementsByClassName('seat');

for(const btn of allSeat){
    btn.addEventListener("click",function (event){
        const name = event.target.innerText;
        const price = getConvertedValue('per-seat')
        
        const selectedContainer = document.getElementById('selected-price-container');

        const firstCount=getConvertedValue('count')
    if(firstCount+1>4){
        alert('limit excced')
        return;
    }

    event.target.setAttribute('disabled',false)
    event.target.style.backgroundColor='#1DD100'

        
        // seat left
        const seatLeft=getConvertedValue('left')
        document.getElementById('left').innerText=seatLeft-1;

    //    seat count
        const seatCount=getConvertedValue('count')
        document.getElementById('count').innerText=seatCount+1;

        const secondCount=getConvertedValue('count')
       


        const div = document.createElement("div");
        div.classList.add('selected-price')
        
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        p2.innerHTML = "Economy"
        const p3 = document.createElement("p");
        // p3.innerHTML=

        p1.innerText = name;
        // p2.innerText = count;
        p3.innerText = price;
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)

        selectedContainer.appendChild(div)

         
        updateTotalCost(price)
        updateGrandTotal()
    })
    
}


function updateTotalCost(value){
    const totalCost = getConvertedValue('total-cost');

    const sum = totalCost+parseInt(value);
    document.getElementById('total-cost').innerText = sum;
   
}


function updateGrandTotal(status){
    const totalCost = getConvertedValue('total-cost');
    if(status==undefined){
        
    document.getElementById('grand-total').innerText=totalCost
        
    }
    else{
        const couponCode = document.getElementById('coupon-code').value;
        if(couponCode=="NEW15" || couponCode=='COUPON 20'){
          const discounted =totalCost*0.15
          document.getElementById('grand-total').innerText=totalCost-discounted
        }
        else{
            alert("Please enter valid coupon code")
        }
    }


    
}


function getConvertedValue(id) {
    const price = document.getElementById(id).innerText;
    const convertPrice = parseInt(price);
    return convertPrice
    
}

// const result = getConvertedValue('per-seat')
// console.log(result);
