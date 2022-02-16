//bill,tip,amount

var billPay = {
    bill:[],
    tip:[],
    final:[],
    calTip:function(){
        
        for(i=0;i<this.bill.length;i++){
            var tp;
            if(this.bill[i] <= 1000){
                tp =  this.bill[i] *  20/100
            }
            else if(this.bill[i] < 1000 &&  this.bill[i] >= 1500 ) {
                tp =   this.bill[i] *   15/100
            }
            else {
                tp =  this.bill[i] *  10/100
            }

            this.tip[i] =tp;
            this.final[i]=  this.bill[i] + tp;

        }
    }

}

for(i=0; i < 5 ; i++){
    billPay.bill[i] = parseInt(prompt("Enter " +(i+1) + " bill value:"));
}

billPay.calTip();
console.log(billPay);

