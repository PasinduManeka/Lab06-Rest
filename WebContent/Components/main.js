$(document).ready(function()
{
	$("#alertSuccess").hide();
	$("#alertError").hide();
});

//Save -------
$(document).on("click","#btnSave",function(event){
	//Clear status messages
	$("#alertSuccess").text("");
	$("#alertSuccess").hide();
	$("#alertError").text("");
	$("#alertError").hide();
	
	//Form validation 
	var status = validateItem();
	
	//If not valid
	if(status != true)
		{
			$("#alertError").text(status);
			$("#alertError").show();
			return;
		}
	
	var student = getStudentCard($("#txtName").val().trim(),
			$('input[name="rdoGender"]:checked').val(),
			$("#ddlyear").val());
	
	$("#colStudents").append(student);
	
	$("#alertSuccess").text("Saved Successfully.");
	$("#alertSuccess").hide();
	
	$("#formStudent")[0].reset();
		
});

//Form validation 
function validateItemForm()
{
	//Name
	if($("#txtName".val().trim()).length==""){
		return "Enter the student name";
	}
	
	//Gender
	if($('input[name="rdoGender"]:checked').length === 0){
		return "Select gender.";
	}
	
	//year
	if($("#ddYear").val() == "0"){
		return "Select year.";
	}
	
	return true;
}

//Generate the student cart

function getStudentCard(name, gender, year)
{
	var student = "";
	
	var title = (gender=="Male")?"Mr.":"Ms.";
	
	var yearNumber = "";
	
	switch(year){
		case "1":
			yearNummer="1st";
			break;
		case "2":
			yearNumber ="2nd";
			break;
		case "3":
			yearNumber="3rd";
			break;
		case "4":
			yearNumber="4th";
			break;
	}
	
	student += "<div class=\"student card bg-light m-2\" " +
			"style=\"max-width:10rem; float: left;\">";
	student += "<div class=\"card-body\">";
	student += title+ " "+name+",";
	student += "<br>";
	student += yearNumber + "year";
	student += "</div>";
	student +="<input type=\"button\" value=\"Remove\" class=\"btn btn-danger remove\">";
	student +="</div>";
	
	return student;
}

//remove button handler
$(documnent).on("click", ".remove", function(event)
{
	$(this).closest(".student").remove();
	
	$("#alertSuccess").text("Removed successfully.");
	$("#alertSuccess").show();
	
})









