$(document).ready(function(){
    $('button').on('click',(e)=>{
        $(e.currentTarget).addClass('myclass');
        $('button').siblings().not(e.currentTarget).removeClass('myclass');
        fetch('data.json')
        .then((res)=>res.json())
        .then((data)=>{
            //console.log(data[0].day);
            let output='';
            data.forEach((user)=>{
                //console.log(user.subj_arr)
                if(e.currentTarget.id == user.day){
                    for(var i in user.subj_arr){
                        output += `
                        <div class="hour">
                            <div id="time">${user.time_arr[i]}</div>
                            <div id="subject">${user.subj_arr[i]}</div>
                        </div>
                        `
                    }
                }
            });
            document.getElementById('table').innerHTML =  output;
        })
        //console.log(e.currentTarget.id)
    });  
})