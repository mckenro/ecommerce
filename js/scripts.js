//backend
 function NewProduct(title, category, description, price, images, thumbnails){
   this.title = title;
   this.category = category;
   this.description = description;
   this.price = price;
   this.images = images;
   this.thumbnails = thumbnails;
 }
var womanShirtOne = new NewProduct("Lady Shirt One", "Women's", "Single-origin coffee roof party vape pickled forage chillwave. XOXO gluten-free brunch literally iceland cold-pressed single-origin coffee iPhone.", 25, ["img/dolman_sample_gray.png", "img/dolman_sample_blue.png", "img/dolman_sample_red.png"], ["img/gray_thumb.jpg", "img/blue_thumb.jpg", "img/red_thumb.jpg"]);

NewProduct.prototype.shirtInfo = function(){
  for (var i = 0; i< this.thumbnails.length; i++) {
    $("#contentArea").append("<img class=" + "'thumb" + i + "'" + " " + "src=" + this.thumbnails[i] + "></img>");
  };
  // for (var i = 0; i<= this.images.length; i++) {
  //   return "<img class=" + "'thumb" + i + "'" + " " + "src=" + this.images[i] + "></img>"
  // };

};


 function CustomerInfo(names, address, city, state, zip, phone, shipAddress, shipCity,  shipState, shipZip, cardNumber, expire, cvc){
   this.names = names;
   this.address = address;
   this.city = city;
   this.state = state;
   this.zip = zip;
   this.phone = phone;
   this.shipAddress = shipAddress;
   this.shipCity = shipCity;
   this.shipState = shipState;
   this.shipZip = shipZip;
   this.cardNumber = cardNumber;
   this.expire = expire;
   this.cvc = cvc;
 }
CustomerInfo.prototype.makethingsappear = function(){
  $("#userInput").hide();
  $(".userConformation").show();
  $("#payInfo").append("<li>" + "Name: " + this.names + "</li>");
  $("#payInfo").append("<li>" + "Address: "+ this.address + " " + this.city + ", " + this.state + " " + this.zip + "</li>");
  $("#payInfo").append("<li>" + "Phone: " + this.phone + "</li>");
  $("#shipInfo").append("<li>" + "Ship to: " + this.names + "</li>");
  $("#shipInfo").append("<li>" + "Address: "+ this.shipAddress + " " + this.shipCity + ", " + this.shipState + " " + this.shipZip + "</li>");
}

//frontend

//product detail page thumbnail gallery
$(document).ready(function() {
  womanShirtOne.shirtInfo();
  $(".thumb1").click(function(event) {
    event.preventDefault();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product1").show();
  });
  $(".thumb2").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product2").show();
  });
  $(".thumb3").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product3").show();
  });
  $(".thumb4").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product5").hide();
    $("#product6").hide();
    $("#product4").show();
  });

  $(".thumb5").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product6").hide();
    $("#product5").show();
  });
  $(".thumb6").click(function(event) {
    event.preventDefault();
    $("#product1").hide();
    $("#product2").hide();
    $("#product3").hide();
    $("#product4").hide();
    $("#product5").hide();
    $("#product6").show();
  });
//swatch hover events
$("#swatch1").hover(function(event) {
  event.preventDefault();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product1").show();
} , function(event) {
  event.preventDefault();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product1").show();
});
$("#swatch2").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").hide();
});
$("#swatch3").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product3").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product2").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product3").hide();
});
$("#swatch4").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product4").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
});
$("#swatch5").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product6").hide();
  $("#product5").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").hide();
});
$("#swatch6").hover(function(event) {
  event.preventDefault();
  $("#product1").hide();
  $("#product2").hide();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").show();
} , function(event) {
  event.preventDefault();
  $("#product1").show();
  $("#product3").hide();
  $("#product4").hide();
  $("#product5").hide();
  $("#product6").hide();
  $("#product2").hide();
});

  $("#userInput").submit(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var phone = $("#phone").val();
    var shipAddress = $("#shipAddress").val();
    var shipCity = $("#shipCity").val();
    var shipState = $("#shipState").val();
    var shipZip = $("#shipZip").val();
    var cardNumber = $("#cardNumber").val();
    var expire = $("#expire").val();
    var cvc = $("#cvc").val();
    var customer = new CustomerInfo(name, address, city, state, zip, phone, shipAddress, shipCity, shipState, shipZip, cardNumber, expire, cvc);
    console.log(customer);
    customer.makethingsappear();
  })
  $("#purchase").click(function(event){
    event.preventDefault();
    $(".hideUserInput").show();
    $("#emailDiscount").hide();
    $(".emptyCart").hide();
    $("#purchase").hide();
  });

});
