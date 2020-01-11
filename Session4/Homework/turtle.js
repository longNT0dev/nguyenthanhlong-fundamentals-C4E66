//bai 1
clear()
penup()
const pos = {
x: 200,
y: 50,
}
pos.x=100
rt(90)
fd(pos.x)
lt(90)
fd(pos.y)
//bai 2
clear()
penup()
const square = {
x: 100,
y: 50,
width: 20,
};
rt(90)
fd(square.x)
lt(90)
fd(square.y)
pendown()
for(let i=0;i<4;i++){
  fd(square.width)
  rt(90)
}
//bai 3
clear()
penup()
const rect = {
x: 100,
y: 50,
width: 20,
height: 40,
};
rt(90)
fd(rect.x)
lt(90)
fd(rect.y)
pendown()
for(let i=0;i<2;i++){
  fd(rect.height)
  rt(90)
  fd(rect.width)
  rt(90)
}
//bai 4
clear()
penup()
rect={
shape: 'rect',
x: 8,
y: 70,
width: 12,
height: 40,
};
square={
shape: 'square',
x: 20,
y: 40,
width: 50,
};
rt(90)
fd(rect.x)
lt(90)
fd(rect.y)
pendown()
for(let i=0;i<2;i++){
  fd(rect.height)
  rt(90)
  fd(rect.width)
  rt(90)
}
home()
penup()
rt(90)
fd(square.x)
lt(90)
fd(square.y)
pendown()
for(let i=0;i<4;i++){
  fd(square.width)
  rt(90)
}



  


    
