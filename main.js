var friends_array=[];
function submit(){
    var name_1=document.getElementById("friend_1").value;
    var name_2=document.getElementById("friend_2").value;
    var name_3=document.getElementById("friend_3").value;
    var name_4=document.getElementById("friend_4").value;
    friends_array.push(name_1);
    friends_array.push(name_2);
    friends_array.push(name_3);
    friends_array.push(name_4);
    console.log(friends_array);
    document.getElementById("display_name").innerHTML=friends_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    
}
function sorting(){
friends_array.sort();
console.log(friends_array);
document.getElementById("display_name").innerHTML=friends_array;
}
