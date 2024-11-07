//filter array
let filterarray = [];

let galleryarray = [
    {
        id: 1,
        name: "Women's heels",
        src: "img1.jpg",
        review: "( 250 reviews )",
        desc: "Women's footwear",
        cost: "$400",
        actualcost: "$440"
    },
    {
        id: 6,
        name: "T-shirt for men's",
        src: "img6.jpg",
        review: "( 250 reviews )",
        desc: "Solid Black Color T-Shirt with Stripe Pattern",
        cost: "$300",
        actualcost: "$340"
    },
    {
        id: 3,
        name: "Men's shoes",
        src: "img3.jpg",
        review: "( 450 reviews )",
        desc: "Black & White Color Casual Sneakers",
        cost: "$605",
        actualcost: "$620"
    },
    {
        id: 89,
        name: "Trousers For Men's",
        src: "img89.jpg",
        review: "( 320 reviews )",
        desc: "YOGI Formal Pants | Office Formal Troursers for Mens",
        cost: "$657",
        actualcost: "$705"
    },
    {
        id: 5,
        name: "Kurtis for women",
        src: "img5.jpg",
        review: "( 210 reviews )",
        desc: "Comfy Khadi Cotton Kurtis",
        cost: "$299",
        actualcost: "$310"
    },
    {
        id: 76,
        name: "Artificial Plants",
        src: "img76.jpg",
        review: "( 210 reviews )",
        desc: "Artificial Plant for Home/Office Table Decoration Pack of 2",
        cost: "$164",
        actualcost: "$170"
    },
    {
        id: 4,
        name: "Kurti set",
        src: "img4.jpg",
        review: "( 250 reviews )",
        desc: "Light Pink Color Kurti & Pant Set",
        cost: "$400",
        actualcost: "$440"
    },
    {
        id: 82,
        name: "Flip-Flops For Women",
        src: "img82.jpg",
        review: "( 110 reviews )",
        desc: "Women's Home Flip-Flops & Slippers",
        cost: "$176",
        actualcost: "$180"
    },
    {
        id: 2,
        name: "Necklace Set",
        src: "img2.jpg",
        review: "( 102 reviews )",
        desc: "Multicolor necklace with stones work",
        cost: "$270",
        actualcost: "$279"
    },
    {
        id: 7,
        name: "Handbags",
        src: "img7.jpg",
        review: "( 250 reviews )",
        desc: "Cool Handbags",
        cost: "$320",
        actualcost: "$330"
    },
    {
        id: 8,
        name: "Men's shoes",
        src: "img8.jpg",
        review: "( 743 reviews )",
        desc: "Grey Color Shoes",
        cost: "$980",
        actualcost: "$1000"
    },
    {
        id: 9,
        name: "Women's watch",
        src: "img9.jpg",
        review: "( 90 reviews )",
        desc: "Stylish watch with tricolor stripes",
        cost: "$362",
        actualcost: "$390"
    },
    {
        id: 10,
        name: "Oxidised jwellery",
        src: "img10.jpg",
        review: "( 126 reviews )",
        desc: "Alllure Graceful Jewellery Sets",
        cost: "$205",
        actualcost: "$220"
    },
    {
        id: 11,
        name: "Track Pants",
        src: "img11.jpg",
        review: "( 600 reviews )",
        desc: "New Color Block Dry Fit Polyster Honey Comb Track Pants",
        cost: "$930",
        actualcost: "$951"
    },
    {
        id: 12,
        name: "Bags",
        src: "img12.jpg",
        review: "( 783 reviews )",
        desc: "Casual Waterproof Backpack",
        cost: "$485",
        actualcost: "$500"
    },
    {
        id: 92,
        name: "Lehenga",
        src: "img92.jpg",
        review: "( 900 reviews )",
        desc: "Women's New Purple Color Embroidery Work Georgette Lehenga",
        cost: "$3999",
        actualcost: "$4045"
    },
    {
        id: 14,
        name: "Men's shoes",
        src: "img14.jpg",
        review: "( 689 reviews )",
        desc: "White Color Casual Sneakers",
        cost: "$382",
        actualcost: "$390"
    },
    {
        id: 15,
        name: "Joggers",
        src: "img15.jpg",
        review: "( 420 reviews )",
        desc: "Toko Army color Jogger for Girls",
        cost: "$500",
        actualcost: "$550"
    },
    {
        id: 16,
        name: "Men's Shirt",
        src: "img16.jpg",
        review: "( 923 reviews )",
        desc: "New Printed Shirt for Boys",
        cost: "$398",
        actualcost: "$420"
    },
    {
        id: 17,
        name: "Women's Heels",
        src: "img17.jpg",
        review: "( 250 reviews )",
        desc: "Peach Color Wide Fit Ankle Strap Block Heels",
        cost: "$800",
        actualcost: "$899"
    },
    {
        id: 18,
        name: "Wrist Watch",
        src: "img18.jpg",
        review: "( 707 reviews )",
        desc: "New Stainless Steel Plated Digital Watch",
        cost: "$1200",
        actualcost: "$1220"
    },
    {
        id: 19,
        name: "Kurti Set",
        src: "img19.jpg",
        review: "( 250 reviews )",
        desc: "New Polka Dot Print Kurti with Plazzo",
        cost: "$300",
        actualcost: "$310"
    },
    {
        id: 21,
        name: "Oxidised rings",
        src: "img21.jpg",
        review: "( 400 reviews )",
        desc: "Fusion Adjustable Rings",
        cost: "$130",
        actualcost: "$142"
    },
    {
        id: 22,
        name: "Men's socks",
        src: "img22.jpg",
        review: "( 120 reviews )",
        desc: "Fashionable Latest Men Socks",
        cost: "$200",
        actualcost: "$212"
    },
    {
        id: 23,
        name: "Sunglasses",
        src: "img23.jpg",
        review: "( 321 reviews )",
        desc: "New Stylish Retro Rectangular Aviator Sunglasses",
        cost: "$242",
        actualcost: "$250"
    },
    {
        id: 24,
        name: "Handbags",
        src: "img24.jpg",
        review: "( 650 reviews )",
        desc: "New Stylish Black color Handbags",
        cost: "$830",
        actualcost: "$860"
    },
    {
        id: 25,
        name: "Men's shirt",
        src: "img25.jpg",
        review: "( 341 reviews )",
        desc: "Men's Casual Grey Color Shirt",
        cost: "$360",
        actualcost: "$370"
    },
    {
        id: 26,
        name: "Sarees",
        src: "img26.jpg",
        review: "( 450 reviews )",
        desc: "Vibrant Multi Color with Floral Print Saree",
        cost: "$400",
        actualcost: "$440"
    },
    {
        id: 28,
        name: "Kurti Set",
        src: "img28.jpg",
        review: "( 150 reviews )",
        desc: "Lorem cvdvk chjcdvb ssdcub dgsdfb ousbskcj udscb.",
        cost: "$200",
        actualcost: "$220"
    },
    {
        id: 29,
        name: "Bags for girls",
        src: "img29.jpg",
        review: "( 210 reviews )",
        desc: "Lorem cvdvk chjcdvb ssdcub dgsdfb ousbskcj udscb.",
        cost: "$680",
        actualcost: "$700"
    },
    {
        id: 30,
        name: "Crop top",
        src: "img30.jpg",
        review: "( 630 reviews )",
        desc: "New Lavender Color Top for Girls",
        cost: "$380",
        actualcost: "$400"
    },
    {
        id: 31,
        name: "Kurti style top",
        src: "img31.jpg",
        review: "( 860 reviews )",
        desc: "Avadh Closet Georgette Kediya Style Top with Embroidery Work",
        cost: "$980",
        actualcost: "$999"
    },
    {
        id: 81,
        name: "Women's Belts",
        src: "img81.jpg",
        review: "( 142 reviews )",
        desc: "Fancy Belt Skinny Stretch Adjustable Waist Belt",
        cost: "$103",
        actualcost: "$130"
    },
    {
        id: 86,
        name: "Decorative Items",
        src: "img86.jpg",
        review: "( 800 reviews )",
        desc: "Metal Musician Set of Three Table Decorative Showpiece",
        cost: "$622",
        actualcost: "$647"
    },
    {
        id: 84,
        name: "Kurta Style Shirt",
        src: "img84.jpg",
        review: "( 403 reviews )",
        desc: "Stylish Light Pink Color Kurta Shirt",
        cost: "$287",
        actualcost: "$308"
    },
    {
        id: 40,
        name: "Wrist Watch",
        src: "img40.jpg",
        review: "( 250 reviews )",
        desc: "New Skylark Prizam Couple Dial Stainless Steel Chrome Plated Analog Watch",
        cost: "$550",
        actualcost: "$580"
    },
    {
        id: 42,
        name: "T-Shirt for men's",
        src: "img42.jpg",
        review: "( 250 reviews )",
        desc: "Color Block Men Round Neck T-Shirt",
        cost: "$378",
        actualcost: "$400"
    },
    {
        id: 45,
        name: "T-Shirt for women's",
        src: "img45.jpg",
        review: "( 290 reviews )",
        desc: "Aarcadian Trending Women's BTS Print T-Shirt",
        cost: "$230",
        actualcost: "$234"
    },
    {
        id: 46,
        name: "Lamp",
        src: "img46.jpg",
        review: "( 250 reviews )",
        desc: "Lorem cvdvk chjcdvb ssdcub dgsdfb ousbskcj udscb.",
        cost: "$400",
        actualcost: "$440"
    },
    {
        id: 47,
        name: "T-Shirt For Men's",
        src: "img47.jpg",
        review: "( 150 reviews )",
        desc: "Casual Comfy T-Shirt",
        cost: "$210",
        actualcost: "$220"
    },
    {
        id: 48,
        name: "Men's shoes",
        src: "img48.jpg",
        review: "( 670 reviews )",
        desc: "Stylish synthetic Sport Shoes",
        cost: "$599",
        actualcost: "$610"
    },
    {
        id: 49,
        name: "Frock dresses",
        src: "img49.jpg",
        review: "( 600 reviews )",
        desc: "Solid Maroom Color Frock",
        cost: "$579",
        actualcost: "$599"
    },
    {
        id: 50,
        name: "Men's shirt",
        src: "img50.jpg",
        review: "( 104 reviews )",
        desc: "White and black strip shirt",
        cost: "$190",
        actualcost: "$200"
    },
    {
        id: 51,
        name: "Men's shirt",
        src: "img51.jpg",
        review: "( 150 reviews )",
        desc: "Multicolor strip shirt",
        cost: "$400",
        actualcost: "$459"
    },
    {
        id: 52,
        name: "Women's heels",
        src: "img52.jpg",
        review: "( 710 reviews )",
        desc: "Black Color Ravishing Women Heels",
        cost: "$480",
        actualcost: "$500"
    },
    {
        id: 53,
        name: "Jumpsuits For Women's",
        src: "img53.jpg",
        review: "( 350 reviews )",
        desc: "Elegant Classy Jumpsuit for Women",
        cost: "$760",
        actualcost: "$789"
    },
    {
        id: 54,
        name: "Women's Watch",
        src: "img54.jpg",
        review: "( 1100 reviews )",
        desc: "New Golden Color with Stonework",
        cost: "$1590",
        actualcost: "$1600"
    },
    {
        id: 55,
        name: "Men's Shoes",
        src: "img55.jpg",
        review: "( 250 reviews )",
        desc: "Lorem cvdvk chjcdvb ssdcub dgsdfb ousbskcj udscb.",
        cost: "$400",
        actualcost: "$440"
    },
    {
        id: 78,
        name: "Curtains",
        src: "img78.jpg",
        review: "( 190 reviews )",
        desc: "Cortina Polyester Latest Floral Printed Door Curtain",
        cost: "$420",
        actualcost: "$446"
    },
    {
        id: 57,
        name: "One piece for girls",
        src: "img57.jpg",
        review: "( 940 reviews )",
        desc: "Comfy Elegant One-piece Women Dress",
        cost: "$830",
        actualcost: "$871"
    },
    {
        id: 58,
        name: "Men's shirt",
        src: "img58.jpg",
        review: "( 250 reviews )",
        desc: "Stylish Designer Men Shirt",
        cost: "$261",
        actualcost: "$280"
    },
    {
        id: 59,
        name: "Women's Watch",
        src: "img59.jpg",
        review: "( 250 reviews )",
        desc: "Simple Women Watch",
        cost: "$823",
        actualcost: "$860"
    },
    {
        id: 60,
        name: "Straight women jeans",
        src: "img60.jpg",
        review: "( 1129 reviews )",
        desc: "Fancy modern blue color women jeans",
        cost: "$270",
        actualcost: "$290"
    },
    {
        id: 61,
        name: "Crop top",
        src: "img61.jpg",
        review: "( 610 reviews )",
        desc: "Pink color crop top with butterfly print",
        cost: "$205",
        actualcost: "$219"
    },
    {
        id: 62,
        name: "Slit Kurtis For Girls",
        src: "img62.jpg",
        review: "( 1129 reviews )",
        desc: "Fancy blue color women jeans",
        cost: "$270",
        actualcost: "$290"
    },
    {
        id: 63,
        name: "Crop top",
        src: "img63.jpg",
        review: "( 483 reviews )",
        desc: "Cut Sleeve Half Turtle Neck Solid Red color Top",
        cost: "$276",
        actualcost: "$297"
    },
    {
        id: 66,
        name: "One piece for girls",
        src: "img66.jpg",
        review: "( 762 reviews )",
        desc: "Printed Multicolor Western Dress For Women",
        cost: "$610",
        actualcost: "$619"
    },
    {
        id: 67,
        name: "Oxidised jwellery",
        src: "img67.jpg",
        review: "( 401 reviews )",
        desc: "Gorgeous samridhi DC pink orange mayur kundan set",
        cost: "$367",
        actualcost: "$370"
    },
    {
        id: 68,
        name: "Wrist Watch",
        src: "img68.jpg",
        review: "( 250 reviews )",
        desc: "Lorem cvdvk chjcdvb ssdcub dgsdfb ousbskcj udscb.",
        cost: "$400",
        actualcost: "$440"
    },
    {
        id: 69,
        name: "Men's shirt",
        src: "img69.jpg",
        review: "( 1250 reviews )",
        desc: "Fancy Tom & Jerry Print Shirt",
        cost: "$643",
        actualcost: "$650"
    },
    {
        id: 71,
        name: "Top",
        src: "img71.jpg",
        review: "( 450 reviews )",
        desc: "Trendy modern Power Shoulders Top with puff sleeves",
        cost: "$620",
        actualcost: "$640"
    },
    {
        id: 72,
        name: "High waist jeans for women's",
        src: "img72.jpg",
        review: "( 1150 reviews )",
        desc: "Kotty Women's Solid Blue Color High Waist Jeans",
        cost: "$789",
        actualcost: "$800"
    },
    {
        id: 74,
        name: "Men's shirt",
        src: "img74.jpg",
        review: "( 110 reviews )",
        desc: "Cool and Comfy Sensational Men Shirts",
        cost: "$354",
        actualcost: "$369"
    },
    {
        id: 75,
        name: "Women's Juttis",
        src: "img75.jpg",
        review: "( 408 reviews )",
        desc: "Fashionate Black Color Juttis For Girls",
        cost: "$600",
        actualcost: "$633"
    }
]


//create a function to show gallery
showgallery(galleryarray);

function showgallery(currarray) {

    document.getElementById("card").innerText = "";

    for(var i=0; i<currarray.length; i++) {
        document.getElementById("card").innerHTML += `
          <div class="col-md-4 mt-3">
          <div class="card p-3 ps-5 pe-5" style="height: 50rem;">
             <h4 class="text-capitalize text-center" style="font-size: 1.6rem;">${currarray[i].name}</h4>
             <img src="${currarray[i].src}" width="94%" height="290px" style="margin-left: 1rem;"/>
             <hr>
             <div class="starts">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <span style="font-size: 13px;">${currarray[i].review}</span>
            </div>
             <p class="mt-1" style="font-size: 13px;">${currarray[i].desc}</p>
             <p style="font-size: 14px; margin-top: -10px; color: orange; font-weight: bold">${currarray[i].cost} <span style="font-size: 13px; text-decoration: line-through; color: black; font-weight: normal">${currarray[i].actualcost}</span> </p>
            <!-- <button class="btn btn-primary w-100 mx-auto">Add to cart</button> -->
            <a href="cart.html" class="buttons" style="width: 15.9rem;">Add to cart</a>

          </div>
          </div>
        `
    }
}


//live searching using keyup input
document.getElementById("myinput").addEventListener("keyup",function(){
    let text = document.getElementById("myinput").value;

    filterarray = galleryarray.filter(function(a){
        if(a.name.includes(text)) {
            return a.name;
        }
    });
    if(this.value =="") {
        showgallery(galleryarray);
    }
    else {
        if(filterarray == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        }
        else {
            showgallery(filterarray);
            document.getElementById("para").style.display = 'none';
        }
    }
})