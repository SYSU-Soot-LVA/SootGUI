$("#input-h2").fileinput({
    showUpload: true,
    dropZoneEnabled: false,
    maxFileCount: 10,
    mainClass: "input-group-lg",
    allowedFileExtensions: ["java"],
    uploadUrl: '/files'
});




$('#sub-btn').click(() => {
    let cName = $('#classname').val() || '';
    let mName = $('#methodname').val() || '';
    if (cName == '') {
        alert("请输入类名！");
        return;
    }
    $.post('/exec', { classname: cName, methodname: mName }, (data) => {
        $('#result').text(data[result]);
    })
})