var xmlDoc = getxmlDoc("../common/xml/i71sports180614.xml");
var produtcs = xmlDoc.getElementsByTagName("product");
var htmlProducts = "";
for(var i=0;i<produtcs.length;i++){
    htmlProducts+="<li>";
    htmlProducts+="<a href='../item/product.html?id="+getXmlValues(produtcs[i],"productID")+"' target='_blank' title='"+getXmlValues(produtcs[i],"productName")+"'>";
    htmlProducts+="<span class='list_label noLabel2'></span>";
    htmlProducts+="<div class='img_box'>";
    htmlProducts+="<img src='"+getXmlValues(produtcs[i],"productImgPath")+"' alt='"+getXmlValues(produtcs[i],"productName")+"' width='238' height='238' />";
    htmlProducts+="</div>";
    htmlProducts+="<div class='list_pro_detail'>";
    htmlProducts+="<h4>"+getXmlValues(produtcs[i],"productName")+"</h4>";
    htmlProducts+="<span class='list_pro_price'>¥<b>"+getXmlValues(produtcs[i],"productSalePrice")+"</b></span>";
    htmlProducts+="<del class='list_pro_original'>¥"+getXmlValues(produtcs[i],"productOldPrice")+"</del>";
    htmlProducts+="</div>";
    htmlProducts+="<div class='list_pro_btn'>立即疯抢</div>";
    htmlProducts+="</a></li>";
}
document.getElementById("sportsProducts").innerHTML = htmlProducts;

 function getXmlValues(productInfo,key) {
    return productInfo.getElementsByTagName(key)[0].firstChild.nodeValue;
}