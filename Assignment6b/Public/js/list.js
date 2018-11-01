$( function(){

  $('.inputButton').on('click', function(event) {
    event.preventDefault();
    console.log('12342')
    const newTask = {
      taskInput: $('#addtext').val().trim(),
    };

    for(let key in newTask){
      if(newTask[key] === ''){
        alert('Please fill out');
        return;
      }
    }



    $.ajax({ url: '/api/tasks', method: 'POST', data: newTask}).then(
        function(data) {
          console.log(data);
          for (let i=0; i<data.length ; i++){
            var div = $("<div>")
            var checkbox = $("<i class='fas fa-times fa-2x' value=" + i + " id='checkbox'></i><p>" + data[i].taskInput + "<i class='fas fa-times fa-2x' id='remove'></i>")
            // var remove = $("<i class='fas fa-times fa-2x' id='remove'></i>")
            // var text = $("<p>");
            // text.append(data[i].taskInput);
            // div.append(checkbox);
            // div.append(text);
            // div.append(remove);
            $("#toDoList").append(checkbox);
          }
          // if (data.success) {
  
          //   console.log('data', data)
          //   if (!data.newTask) {
          //     alert('Task saved');
          //   }
  
          //   else {
          //     alert('To have more than ten tasks, please check out our premium version');
          //   }
  
          //   $('#task-name').val('');
            
          //   $('#task-name').focus();
          // } else {
  
          //   alert('There was a problem with your submission. Please check your entry and try again.');
          // }
          
  
        });
    });
  });
  