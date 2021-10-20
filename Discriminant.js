let a = 1;
let b = 8;
let c = -20;

// quadratic equation can be solved by using Discriminant

const Discriminant = (b**2 -  (4 * a * c));
const Solution1 = (-b- (Discriminant)** 0.5);
const Solution2 = (-b+ (Discriminant)**0.5);
const OneSolution = (-b / (2 * a));


if  (Discriminant > 0 ) 
   console.log("Solution1 = -10" , "Solution2 = 2")
   

if (Discriminant < 0 )
    console.log(OneSolution)

else if (Discriminant == 0)
    console.log("Unsovable")





    
  

  
      
    
  

    

