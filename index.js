var allCustomers = 0; 

function takeANumber(line, name)
{
  line.push(name)
  allCustomers += 1;
  return `You are number ${allCustomers}.`
  
}

function nowServing(line)
{
    if(line.length > 0){
      var firstPerson = line[0] 
      line.shift()
      return `Currently serving ${firstPerson}.`
    }else{ return "There is nobody waiting to be served!"}
    
}

function currentLine(line)
{
  var positionNameString = []
  
  if(line.length === 0){
    
    return "The line is currently empty."}
    
  else{
    
    for(var i = 0;  i<line.length; i++)
    {
     positionNameString.push(` ${i+1}. ${line[i]}`);
    }
    return "The line is currently:" + positionNameString}
  
}