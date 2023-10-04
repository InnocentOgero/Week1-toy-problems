//write prompt to enter benefits and basic salary
const basicSalary=Number(prompt("Enter basic salay"));
const benefits=Number(prompt('Enter benefits'));
const grossSalary=basicSalary+benefits;
const pensionPay=5600//declare value for pensionble pay used to calculate nssf NB just for testing if code works
//calculate the payee per interval
const payeeInterval1=24000*0.1
const payeeInterval2=(32333-24000)*0.25
const payeeInterval3=(500000-32333)*0.3
const payeeInterval4=(800000-500000)*0.325
//function to calculate total payee depending on the interval which the amount of grossSalary falls.
function CalculatePayee(grossSalary){
    if(grossSalary<=2400){
        return payeeInterval1
    }
    else if(grossSalary>=24001&&grossSalary<=32333){
        const totalPayee=(grossSalary-240000)*0.25+payeeInterval1
        return totalPayee
    }
    else if(grossSalary>=32334&&grossSalary<=500000){
        const totalPayee=(grossSalary-32333)*0.3+payeeInterval1+payeeInterval2
        return totalPayee

    }
    else if(grossSalary>=500001&&grossSalary<=800000){
        const totalPayee=(grossSalary-500000)*0.325+payeeInterval1+payeeInterval2+payeeInterval3
        return totalPayee
    }
    else{
        const totalPayee=(grossSalary-80000)*0.35+payeeInterval1+payeeInterval2+payeeInterval3+payeeInterval4
        return totalPayee
    }
    
}
console.log(`Payee Tax:${CalculatePayee(grossSalary)}`)//print payee tax
//Put each nhif rates and inervals in list containing objects
function calculateNhif(grossSalary){
const nhifRates=[{min:0,max:5999,deduction:150},{min:6000,max:7999,deduction:300},
{min:8000,max:11999,deduction:400},{min:12000,max:14999,deduction:500},{min:15000,max:19999,deduction:600},
{min:20000,max:24999,deduction:750},{min:25000,max:29999,deduction:850},{min:30000,max:34999,deduction:900},
{min:35000,max:39999,deduction:950},{min:4000,max:44999,deduction:1000},{min:45000,max:49999,deduction:1100},
{min:50000,max:59999,deduction:1200},{min:60000,max:69999,deduction:1300},{min:70000,max:79999,deduction:1400},
{min:80000,max:89999,deduction:15000},{min:90000,max:99999,deduction:1600},{min:100000,max:Infinity,deduction:1700}]
//use find method to iterate through array and find object on which grossSalary falls and return the deduction
const nhifRate=nhifRates.find(rate=>grossSalary>=rate.min && grossSalary<=rate.max)
return nhifRate? nhifRate.deduction:0;}
console.log(`NHIF payment: ${calculateNhif(grossSalary)}`)//print nhif payment
//function to calculate nssf based on the pension tiers
function calculateNssf(pensionPay){
    nssfRate=0.06
    //declare pension pay tiers
    const tier1=6000
    const tier2=18000
    if (pensionPay<=tier1){
        return pensionPay*nssfRate
    }
    else if(pensionPay>=tier1&&pensionPay<=tier2){
        return pensionPay*nssfRate
    }
    else{
        return "Pension pay tier not recognised"
    }
}
console.log(`NSSF Payment:${calculateNssf(pensionPay)}`)//print the nssf payment
//function to calculate net salary
function calculateNetSalary(grossSalary,pensionPay){
    const payeeTax=CalculatePayee(grossSalary)
    const nssfPayment=calculateNssf(pensionPay)
    const nhifPayment=calculateNhif(grossSalary)
    const netSalary=grossSalary-(payeeTax+nssfPayment+nhifPayment)
    return netSalary
}
console.log(`Net salary:${calculateNetSalary(grossSalary,pensionPay)}`)//print the netSalary
console.log(`Gross Salary: ${grossSalary}`)//print the gross salary