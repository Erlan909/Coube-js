// let div = document.createElement('div')
// div.className ='nana'

// div.style.cssText = "background-color:red; position:absolute;top:0;left:0;"
// div.style.width = '150px'
// div.style.height = '150px'

// document.body.appendChild(div)

// let tp =0
// let lft =0
// setInterval(() =>{
//     if(tp ==0 && lft<500){
//         lft=lft +10
//         div.style.left = lft + 'px'
//     }else if (lft == 500 && tp<300){
//         tp=tp +10
//         div.style.top = tp + 'px'   
//     }else if(tp ==300 && lft <= 500 && lft >0){
//         lft=lft -10
//         div.style.left = lft+'px'
//     }else if (tp<=300 && tp>0 && lft ==0){
//         tp=tp -10
//         div.style.top =tp +'px'
//     }
// },10);



let img = document.createElement('img');
img.id ='01'
img.src='img14/img.png'
img.className= 'erl'
img.style.width='200px'
img.style.position='absolute'

document.body.appendChild(img);

let img2 = document.createElement('img');
img2.id ='02'
img2.src ='img14/img.png'
img2.className='erl2'
img2.style.width='200px'
img2.style.marginTop='9%'
img2.style.marginLeft='7%'



document.body.appendChild(img2);
let tp =0;
let lft=0;
let deg=0;
let deg2=0;
setInterval(() =>{
    deg=deg+45;
    img.style.transform='rotate('+deg+'deg)';

    deg2=deg2-45
    img2.style.transform='rotate('+deg2+'deg)';
},200);