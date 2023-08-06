//BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
document.getElementById('btnSalary').addEventListener('click',function(){  
    var oneDaySalary  = +document.getElementById('oneDaySalary').value
    var numberOfDays = +document.getElementById('numberOfDays').value
    
    totalSalary = oneDaySalary * numberOfDays;

    document.getElementById('resultSalary').innerHTML =`
    Tổng tiền lương: ${totalSalary}VNĐ
    `  
})

//BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
document.getElementById('btnAverageValue').onclick = function(){
    var realNumber1 = +document.getElementById('realNumber1').value
    var realNumber2 = +document.getElementById('realNumber2').value
    var realNumber3 = +document.getElementById('realNumber3').value
    var realNumber4 = +document.getElementById('realNumber4').value
    var realNumber5 = +document.getElementById('realNumber5').value

    totalAvergeValue = (realNumber1 + realNumber2 + realNumber3 + realNumber4 + realNumber5) / 5

    document.getElementById('resultAverageValue').innerHTML =`
    Tổng giá trị trung bình: ${totalAvergeValue}
    `;
}

//BÀI 3: QUY ĐỔI TIỀN
document.getElementById('btnMoney').onclick = function(){
    const usdRate = 23500
    var usd = +document.getElementById('usd').value
    
    vndMoney = usd * usdRate
    
    document.getElementById('resultMoney').innerHTML = `
    Số tiền được đổi: ${vndMoney}VNĐ
    `
}

//BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT
document.getElementById('btnRectangle').addEventListener('click',function(){
    lengthOfRectangle = +document.getElementById('lengthOfRectangle').value //dài
    widthOfRectangle = +document.getElementById('widthOfRectangle').value //rộng
   
    perimeterOfRectangle = (lengthOfRectangle + widthOfRectangle) * 2
    acreageOfRectangle = lengthOfRectangle * widthOfRectangle

    document.getElementById('resultRectangle').innerHTML = `
        Chu vi của hình chữ nhật là: ${perimeterOfRectangle}; 
        Diện tích của hình chữ nhật là: ${acreageOfRectangle} 
    `
})

//BÀI 5: TÍNH TỔNG 2 KÝ SỐ
document.getElementById('btnNumber').onclick = function(){
    number = document.getElementById('number').value
    
    units = Math.floor(number% 10)
    ten = Math.floor(number/ 10)
    sum = Math.floor(number% 10) + Math.floor(number/ 10)
    
    document.getElementById('resultNumber').innerHTML = `
    Số tiền được đổi: ${sum}
    `
}