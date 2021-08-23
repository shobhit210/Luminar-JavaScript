var mytodos = {} //// 11:{toatl:1+1,finshed:0+1,pending:1}

for (let todo of todos) {
  let id=todo.userId
  if(id in mytodos){
    if(todo.completed==true){
      mytodos[id]["total"]+=1;
      mytodos[id]["finshed"]+=1;
    }
    else{
      mytodos[id]["total"]+=1;
      mytodos[id]["pending"]+=1;
    }

  }
  else{
    if(todo.completed==true){
      mytodos[id]={total:1,finshed:1,pending:0}   //1:{total=}
    }
    else{
      mytodos[id]={total:1,finshed:0,pending:1}

    }
  }

}
