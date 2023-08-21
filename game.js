var counter=5;
                var randomNumber = Math.floor(Math.random() * 26);
                function check_function(){
                    var textboxValue = parseInt(document.getElementById("input").value);
                    if(textboxValue===randomNumber){
                        document.getElementById('chances').innerText='Congrats';
                    }
                    else if(textboxValue>randomNumber){
                        document.getElementById('larger_or_smaller').innerText='Your number is Larger';
                        counter=counter-1;
                        document.getElementById('chances').innerText=counter+' Chances remaining';
                        if(counter===0){
                        alert('You have lost the right number is '+randomNumber);
                        location.reload();
                    }
                    }
                    else if(textboxValue<randomNumber){
                        document.getElementById('larger_or_smaller').innerText='Your number is Smaller';
                        counter=counter-1;
                        document.getElementById('chances').innerText=counter+' Chances remaining';
                        if(counter===0){
                        
                        alert('You have lost the right number is '+randomNumber);
                        location.reload();
                    }
                    }
                }

                function validate_range(){
                    var textboxValue = parseInt(document.getElementById("input").value);
                    if(textboxValue>25||textboxValue<0){
                        alert('you have enterd number smaller than 0 or greater than 25');
                        document.getElementById('input').value = "";
                    }
                }