function swap(x,y)
    {
        var temp = x;
        x = y;
        y = temp;
        return [x,y]; // if return not mention, 
        // function is swapping the values internally, but the function does not return a value.
    }      
    
    console.log(swap(2,3));