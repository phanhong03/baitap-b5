var man = [
    {
        id: 1,
        name: " Quần short kaki",
        code: "TC1025011BA",
        price: "300,000",
        image: "https://anhduc.com.vn/wp-content/uploads/2023/04/B01-5-scaled.jpg"


    },
    {
        id: 2,
        name: "Quần baggy đen sang trọng",
        code: "TC1025000QA",
        price: "290,000",
        image: "https://dony.vn/wp-content/uploads/2021/09/quan-baggy-nam-1.jpg"


    },
    {
        id: 3,
        name: "áo công sở ",
        code: "TT2373489RT",
        price: "399,000",
        image: "https://tamanh.net/wp-content/uploads/2023/06/thuong-hieu-thoi-trang-nam-noi-tieng.jpg"

    },
    {
        id: 4,
        name: "áo công sở",
        code: "TC1025011BA",
        price: "350,000",
        image: "https://ss-images.saostar.vn/wpr700/pc/1664339679337/saostar-oadf1erpxk54u2mc.png"

    },
];
var woment = [
    {
        id: 1,
        name: " Quần Jean ống suông nữ",
        code: "TT2373489RT",
        price: "350,000",
        image: "https://cdn.kkfashion.vn/20870-large_default/quan-jeans-nu-ong-suong-lung-cao-qj-09.jpg"


    },
    {
        id: 2,
        name: "Áo thun cao cấp ",
        code: "TC1025011BA",
        price: "290,000",
        image: "https://ttthoitrang.com/wp-content/uploads/2016/11/%C3%81o-thun-Adidas-n%E1%BB%AF-TTthoitrang.jpg"


    },
    {
        id: 3,
        name: "Áo phông ",
        code: "TC1025011BA",
        price: "199,000",
        image: "https://img.lazcdn.com/g/p/c226548bcedbf2a602c2a87274e0a3d1.jpg_720x720q80.jpg"

    },
    {
        id: 3,
        name: "Áo khoác cao cấp ",
        code: "TC1025011BA",
        price: "380,000",
        image: "https://media.sellycdn.net/files/md_1699972040890hC6Ss8QzDM.jpg"

    },


];
function listProducts(){
    for (let i = 0; i<man.length;i++){
        var demo = '<div class = "col-3">';
        demo += '<div class = "card" sytle = "widhth: 18rem;">';
        demo += '<img src= "'+man[i].image+'" class= "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class= "card-title">'+man[i].name+'</h5>';
        demo += '<p class= "card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class= "btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;

    }
    for (let i = 0; i<woment.length;i++){
        var demo = '<div class = "col-3">';
        demo += '<div class = "card" sytle = "widhth: 18rem;">';
        demo += '<img src= "'+woment[i].image+'" class= "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class= "card-title">'+woment[i].name+'</h5>';
        demo += '<p class= "card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class= "btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML+= demo;

    }

}