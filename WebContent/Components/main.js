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
	
	var student = etStudentCard($("#txtName").val().trim(),
			$('input[name="rdoGender"]:checked').val(),
			$("#ddlyear").val());
	
	$("#colStudents").append(student);
	
	$("#alertSuccess").text("Saved Successfully.");
	$("#alertSuccess").hide();
	
	$("#formStudent")[0].reset();
		
});