name_of_student_array=[];
function submit()
{
    var display_student_aaray=[];
    for (var j=1;j<=4;j++)
    {
        var name_of_student=document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_student);
        name_of_student_array.push(name_of_student);
    }
    console.log(name_of_student_array);
    var lenght_of_name_of_student_array=name_of_student_array.length;
    console.log(lenght_of_name_of_student_array);

    for (var k=0;k<lenght_of_name_of_student_array;k++)
    {
        display_student_aaray.push("<h4> name- "+name_of_student_array[k]+"</h4>");
        console.log(display_student_aaray);
    }
    console.log(display_student_aaray);
    document.getElementById("display_name_with_commas").innerHTML=display_student_aaray;
    var removecommas=display_student_aaray.join(" ");
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
    document.getElementById("submit_button").style.display = "none"; document.getElementById("sort_button").style.display = "inline-block";
}
function sorting()
{
    name_of_student_array.sort();
    console.log(name_of_student_array);
    var display_student_aaray_sorting=[];
    var lenght_of_name_of_student_array=name_of_student_array.length;
    console.log(lenght_of_name_of_student_array);
    for (var k=0;k<lenght_of_name_of_student_array;k++)
    {
        display_student_aaray_sorting.push("<h4> namr-"+name_of_student_array[k]+"</h4>");
        console.log(display_student_aaray_sorting);
    }
    var removecommas=display_student_aaray_sorting.join(" "); 
    console.log(removecommas);
    document.getElementById("display_name_without_commas").innerHTML=removecommas;
}
