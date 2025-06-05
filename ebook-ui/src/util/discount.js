const discount = (price,discount)=>{
    const amount = (price*discount)/100
    const total =price-amount
    return total
}
export default discount