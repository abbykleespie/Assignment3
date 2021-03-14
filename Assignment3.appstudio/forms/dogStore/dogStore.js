let productPrice = ['Crocheted Dog Toy $10.00', 'Slow Feeder Bowl $14.00', 'Pawz Grey Treat Jar $20.00', 'Blue Sweet Dreams Thermal Pajamas $30.00', 'Checker Chewy Vuiton Bowl $37.00', 'Red Heart Sweater Dress $27.00', 'Velvet Hair Bow - Sun Kissed $12.00', 'Into the Wild Leash $27.00']

itemPrice.onclick=function(){
  let display = listItemPrice.value
  listItemPrice.value = productPrice
}

let wishList = []

addWishlist.onclick=function(){
  let addition = addWishlist.value
  wishList.push(addWishlist.value)
  Wishlist.value = wishList
}
