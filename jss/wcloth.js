let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  document.querySelector("div>h5>span").textContent =
    loggedUser.name;

 let lgout = document.getElementsByClassName("b1")
 lgout.addEventListener("click", function(){
    window.location.assign("./signup login.html")
 })


 let productData = [
      {
         id:1,
         image_url:
          "https://cdna.lystit.com/200/250/tr/photos/vitkac/6d04b6f0/adidas-originals-BLACK-Dress-With-Logo.jpeg",
        name: "Dress with logo-Black",
        price: "1170",
        strikedoffprice: "2599",
      },
      { id:2,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/ruelala/aba70113/burberry-Black-Diamond-Quilted-Jacket.jpeg",
        name: "Diaomond Quilted Jacket-Blue",
        price: 699,
        strikedoffprice: 999,
      },
      { id:3,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/forwardforward/bd20284d/moncler-Black-Matt-Clair-Jacket.jpeg",
        name: "Matt Clair Jacket-Black",
        price: 945,
        strikedoffprice: 2099,
      },
      {
         id:5,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/gilt/cab0f5a4/canada-goose-Grey-Elrose-Down-Parka.jpeg0",
        name: "Elrose Down Parka-Gray",
        price: 399,
        strikedoffprice: 799,
      },
      { id:6,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/lvr/61668a2c/nike-black-Pantalon-Utilitaire-En-Nylon-Jordan.jpeg",
          name: "Nylon Utility Pants",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
         id:7,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/cettire/34482361/burberry-Brown-Classic-Double-breasted-Trench-Coat.jpeg",
        name: "Trench coat",
        price: 1440,
        strikedoffprice: 3199,
      },
      { id:8,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/lvr/5afd8ada/nike-Black-Faux-Shearling-Down-Jacket.jpeg",
        name: "faux Shearing Down Jacket-Black ",
        price: 1999,
        strikedoffprice: 3199,
      },
      {
         id:9,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/dolcegabbana/211d9e22/dolce-gabbana-Multicolor-Calendar-print-Poplin-Corset.jpeg",
        name: "print popplin corset",
        price: 769,
        strikedoffprice: 1099,
      },
      {
         id:10,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/gilt/c4098cb2/burberry-Beige-Diamond-Quilted-Thermoregulated-Jacket.jpeg",
        name: "Quilted Jacket",
        price: 1299,
        strikedoffprice: 1440,
      },
      {
         id:11,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/mytheresa/b3ca6b2c/norma-kamali-black-Obie-Velvet-Gown.jpeg",
        name: "Velvet Gown",
        price: 699,
        strikedoffprice: 999,
      },
      {
         id:12,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/revolveclothing/2686298d/bcbgmaxazria-Black-ROBE-DE-SOIREE.jpeg",
        name: "Corset Gown",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
         id:13,
        image_url:
          "https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/l/u/c/10-8050-black-red-waan-black-red-original-imag5psezyhhwwks-bb.jpeg?q=70",
        name: "MEN'S REEBOK RUNNING GENESIS RUNNER SHOES  ",
        price: 1620,
        strikedoffprice: 3599,
      },
      {
         id:14,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/saksoff5th/0fab5a76/max-studio-Navy-Print-Tiered-Midi-Dress.jpeg",
        name: "Print Midi Dress",
        price: 599,
        strikedoffprice: 999,
      },
      {
         id:15,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/gilt/ceb4972a/nike-Blue-Standard-Fit-Windrunner-Tech-Fleece.jpeg",
        name: " Std ft Widrunner",
        price: 1575,
        strikedoffprice: 3499,
      },
      { id:16,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/saksoff5th/ff63ac3c/calvin-klein-Red-Belted-Sweater-Dress.jpeg",
        name: "Belted Sweater Dress-Red",
        price: 9999,
        strikedoffprice: 12000,
      },
      {
         id:17,
        image_url:
          "https://cdna.lystit.com/200/250/tr/photos/gilt/4531fa1c/all-saints-Black-Lucie-Puffer-Coat.jpeg",
        name: "Puffer Coat",
        price: 779,
        strikedoffprice: 1299,
      }
   ];

   localStorage.setItem("cwproduct", JSON.stringify(productData))
   let storedProd = JSON.parse(localStorage.getItem("cwproduct"))
   console.log(storedProd)

   storedProd.forEach(function(element){
      let parent = document.querySelector("#product-container");
      let card = document.createElement("div")
      let img = document.createElement("img")
      img.setAttribute("src",element.image_url)
      let name = document.createElement("p")
      name.textContent= element.name;
      let price = document.createElement("p")
      price.textContent = element.price;
      // let stprice = document.createElement("p")
      // stprice.textContent = element.strikedoffprice;
  
      let cartBtn = document.createElement("button");
      cartBtn.textContent = "Favorite";
       cartBtn.addEventListener("click", function(){
        let cart = JSON.parse(localStorage.getItem("cart"))||[];
        //  cart.push(element);
        // let temp = [];
        // temp.push(element);
        // temp.push[1];
        // cart.push(temp)
        let alreadyincart = false;
        for(let i=0; i<cart.length; i++){
          if(cart[i].id===element.id){
            alreadyincart=true;
            break;
          }
        }
        if(alreadyincart === true){
          alert("Product already in cart")
  
        }
        else{
          cart.push({...element,quantity:1})
          alert("product added in cart")
  
          localStorage.setItem("cart",JSON.stringify(cart));
        
        }
        
      })
      card.append(img,name,price,stprice,cartBtn)
      parent.append(card)
     })
