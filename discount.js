function discountPrice(target) {
    const inputValue = target.parentNode.childNodes[3].value;
    // console.log(inputValue);
    const productPrice = target.parentNode.childNodes[1].innerText.split(' ')[1];
    // console.log(productPrice);
    const discount = (parseFloat(productPrice) * parseFloat(inputValue)) / 100;
    // console.log(discount);
    const finalPrice = parseFloat(productPrice) - discount;
    // console.log(finalPrice);
    // const showPrice = target.parentNode.childNodes[7].innerText.split(' ')[2];
    // console.log(showPrice);
    const show = target.parentNode.childNodes[7].innerText.split(' ')[2];
    target.parentNode.childNodes[7].innerText = finalPrice;
}