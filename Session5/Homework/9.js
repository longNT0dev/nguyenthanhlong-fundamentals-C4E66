function is_inside(point,rectangle){
      let check = false
      if(point[0]>=rectangle[0] && point[0]<=rectangle[0]+rectangle[2] 
      && point[1]>=rectangle[1] && point[1]<=rectangle[1]+rectangle[3] ){
          check=true
      } 
      return check
}
console.log(is_inside([100,120],[140,60,100,200]))