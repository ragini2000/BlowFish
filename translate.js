$(document).ready(function () {
    class Main_Class{
        constructor(){
            this.String=[];
        }
        hex2bin(string){
            return (parseInt(string, 16).toString(2)).padStart(4, '0');
        }
        hex2bin_(string){
            var result='';
            string.split("").forEach(str => {
                result += this.hex2bin(str);
            })
            return result;
        }
        Encrypt(string,key){
            var pt_64=this.hex2bin_(string);
            return pt_64;
        }
    }


var obj=new Main_Class();

$("#p_t1").keydown(function () {
    $("#c_t1").val("");
});
$("#c_t1").keydown(function () {
    $("#p_t1").val("");
});
$("#encrypt1").click(function () {
    var Ptext = $("#p_t1").val();
    var key=$("#Key1").val();
    var Ctext = obj.Encrypt(Ptext,key);
    $("#c_t1").val(Ctext);
});
$("#decrypt1").click(function () {
    var text = $("#c_t1").val();
    $("#p_t1").val(text);
});


$("#p_t2").keydown(function () {
    $("#c_t2").val("");
});
$("#c_t2").keydown(function () {
    $("#p_t2").val("");
});
$("#encrypt2").click(function () {
    var text = $("#p_t2").val();
    $("#c_t2").val(text);
});
$("#decrypt2").click(function () {
    var text = $("#c_t2").val();
    $("#p_t2").val(text);
});

});